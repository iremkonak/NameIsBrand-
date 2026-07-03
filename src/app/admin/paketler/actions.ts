"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/admin-guard";
import { createSupabaseServiceClient, hasSupabaseConfig } from "@/lib/supabase/server";

export type PackageSaveResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

export type PackageUpdateInput = {
  id: string;
  title: string;
  description: string;
  price: string;
  includedItems: string;
  status: string;
};

export async function updateServicePackage(input: PackageUpdateInput): Promise<PackageSaveResult> {
  await requireAdminSession();

  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { ok: false, message: "Supabase baglantisi icin env bilgileri eksik." };
  }

  if (!input.id || !input.title.trim()) {
    return { ok: false, message: "Paket basligi bos birakilamaz." };
  }

  if (!["Aktif", "Taslak"].includes(input.status)) {
    return { ok: false, message: "Gecersiz paket durumu." };
  }

  const includedItems = input.includedItems
    .split(/\r?\n/)
    .map((item) => item.replace(/^[-*\u2022]\s*/, "").trim())
    .filter(Boolean);

  const supabase = createSupabaseServiceClient();
  const { error } = await supabase
    .from("service_packages")
    .update({
      title: input.title.trim(),
      description: input.description.trim() || null,
      price: input.price.trim() || null,
      included_items: includedItems,
      status: input.status,
    })
    .eq("id", input.id);

  if (error) {
    return { ok: false, message: `Paket kaydedilemedi: ${error.message}` };
  }

  revalidatePath("/admin/paketler");
  return { ok: true, message: "Paket Supabase'e kaydedildi." };
}

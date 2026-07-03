"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/admin-guard";
import { createSupabaseServiceClient, hasSupabaseConfig } from "@/lib/supabase/server";

export async function saveAdminNote(requestId: string, formData: FormData) {
  await requireAdminSession();

  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return;
  }

  const adminNote = String(formData.get("adminNote") ?? "").trim();
  const supabase = createSupabaseServiceClient();

  await supabase
    .from("consultation_requests")
    .update({ admin_note: adminNote || null })
    .eq("id", requestId);

  revalidatePath(`/admin/talepler/${requestId}`);
}

export async function updateRequestStatus(requestId: string, formData: FormData) {
  await requireAdminSession();

  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return;
  }

  const status = String(formData.get("status") ?? "").trim();

  if (!["Bekleyen", "Görüşüldü", "Onaylandı", "Reddedildi"].includes(status)) {
    return;
  }

  const supabase = createSupabaseServiceClient();

  await supabase
    .from("consultation_requests")
    .update({ status })
    .eq("id", requestId);

  revalidatePath("/admin");
  revalidatePath("/admin/raporlar");
  revalidatePath(`/admin/talepler/${requestId}`);
}

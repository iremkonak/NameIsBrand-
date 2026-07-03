"use server";

import { createSupabaseServiceClient, hasSupabaseConfig } from "@/lib/supabase/server";
import type { ConsultationRequestInput } from "@/lib/supabase/types";

export type ConsultationSubmitResult =
  | { ok: true }
  | { ok: false; message: string };

export async function submitConsultationRequest(
  input: ConsultationRequestInput
): Promise<ConsultationSubmitResult> {
  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      ok: false,
      message:
        "Supabase baglantisi henuz tamamlanmadi. URL ve key bilgileri eklendikten sonra form canli kayit alacak.",
    };
  }

  if (!input.privacyAccepted) {
    return {
      ok: false,
      message: "Devam etmek icin on analiz iznini kabul etmeniz gerekiyor.",
    };
  }

  const supabase = createSupabaseServiceClient();

  const { error } = await supabase.from("consultation_requests").insert({
    full_name: input.fullName.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    profession: input.profession.trim() || null,
    category: input.category || null,
    country: input.country.trim() || null,
    needs: input.needs,
    goal: input.goal.trim() || null,
    links: input.links.trim() || null,
    contact_preference: input.contactPreference || null,
    privacy_accepted: input.privacyAccepted,
  });

  if (error) {
    return {
      ok: false,
      message: `Basvuru kaydedilemedi: ${error.message}`,
    };
  }

  return { ok: true };
}

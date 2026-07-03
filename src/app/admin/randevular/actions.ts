"use server";

import { revalidatePath } from "next/cache";
import { requireAdminSession } from "@/lib/admin-guard";
import { createSupabaseServiceClient, hasSupabaseConfig } from "@/lib/supabase/server";

export async function createAppointment(formData: FormData) {
  await requireAdminSession();

  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return;
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const appointmentDate = String(formData.get("appointmentDate") ?? "").trim();
  const appointmentTime = String(formData.get("appointmentTime") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  if (!fullName || !email || !phone || !subject || !appointmentDate || !appointmentTime) {
    return;
  }

  const supabase = createSupabaseServiceClient();

  const { data: request } = await supabase
    .from("consultation_requests")
    .insert({
      full_name: fullName,
      email,
      phone,
      needs: [subject],
      goal: note || "Admin panelinden randevu oluşturuldu.",
      contact_preference: "Telefon",
      privacy_accepted: true,
      status: "Bekleyen",
    })
    .select("id")
    .single();

  await supabase.from("appointments").insert({
    consultation_request_id: request?.id ?? null,
    full_name: fullName,
    subject,
    appointment_date: appointmentDate,
    appointment_time: appointmentTime,
    note: note || null,
  });

  revalidatePath("/admin/randevular");
  revalidatePath("/admin");
  revalidatePath("/admin/raporlar");
}

export async function updateAppointmentStatus(appointmentId: string, formData: FormData) {
  await requireAdminSession();

  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return;
  }

  const status = String(formData.get("status") ?? "").trim();

  if (!["Bekliyor", "Tamamlandı", "İptal edildi"].includes(status)) {
    return;
  }

  const supabase = createSupabaseServiceClient();

  const { data: appointment } = await supabase
    .from("appointments")
    .select("consultation_request_id, full_name")
    .eq("id", appointmentId)
    .maybeSingle();

  await supabase
    .from("appointments")
    .update({ status })
    .eq("id", appointmentId);

  const requestStatus =
    status === "Tamamlandı"
      ? "Görüşüldü"
      : status === "İptal edildi"
        ? "Reddedildi"
        : "Bekleyen";

  if (appointment?.consultation_request_id) {
    await supabase
      .from("consultation_requests")
      .update({ status: requestStatus })
      .eq("id", appointment.consultation_request_id);
  } else if (appointment?.full_name) {
    await supabase
      .from("consultation_requests")
      .update({ status: requestStatus })
      .ilike("full_name", appointment.full_name);
  }

  revalidatePath("/admin/randevular");
  revalidatePath("/admin");
  revalidatePath("/admin/raporlar");
}

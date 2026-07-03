import { createSupabaseServiceClient, hasSupabaseConfig } from "@/lib/supabase/server";
import type { AppointmentRow, ConsultationRequestRow, ServicePackageRow } from "@/lib/supabase/types";

export type DataResult<T> = {
  data: T;
  error?: string;
};

export async function getConsultationRequests(): Promise<DataResult<ConsultationRequestRow[]>> {
  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      data: [],
      error: "Supabase bağlantısı için env bilgileri eksik.",
    };
  }

  const supabase = createSupabaseServiceClient();
  const { data, error } = await supabase
    .from("consultation_requests")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return {
      data: [],
      error: error.message,
    };
  }

  return { data: data ?? [] };
}

export async function getConsultationRequestById(
  id: string
): Promise<DataResult<ConsultationRequestRow | null>> {
  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      data: null,
      error: "Supabase bağlantısı için env bilgileri eksik.",
    };
  }

  const supabase = createSupabaseServiceClient();
  const { data, error } = await supabase
    .from("consultation_requests")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return {
      data: null,
      error: error.message,
    };
  }

  return { data };
}

export async function getAppointments(): Promise<DataResult<AppointmentRow[]>> {
  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      data: [],
      error: "Supabase bağlantısı için env bilgileri eksik.",
    };
  }

  const supabase = createSupabaseServiceClient();
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .order("appointment_date", { ascending: true })
    .order("appointment_time", { ascending: true })
    .limit(50);

  if (error) {
    return {
      data: [],
      error: error.message,
    };
  }

  return { data: data ?? [] };
}

export async function getServicePackages(): Promise<DataResult<ServicePackageRow[]>> {
  if (!hasSupabaseConfig() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      data: [],
      error: "Supabase baglantisi icin env bilgileri eksik.",
    };
  }

  const supabase = createSupabaseServiceClient();
  const { data, error } = await supabase
    .from("service_packages")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    return {
      data: [],
      error: error.message,
    };
  }

  return { data: data ?? [] };
}

export function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Istanbul",
  }).format(new Date(value));
}

export function formatAppointmentDay(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    timeZone: "Europe/Istanbul",
  }).format(new Date(`${value}T12:00:00`));
}

export function formatAppointmentTime(value: string) {
  return value.slice(0, 5);
}

export function getAppointmentDisplayStatus(appointment: AppointmentRow) {
  const startsAt = new Date(`${appointment.appointment_date}T${appointment.appointment_time}`);

  if (Number.isNaN(startsAt.getTime())) {
    return appointment.status;
  }

  if (startsAt.getTime() < Date.now() && appointment.status === "Bekliyor") {
    return "Tarihi geçti";
  }

  return appointment.status;
}

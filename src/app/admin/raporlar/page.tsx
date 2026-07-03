import { AdminShell } from "@/components/admin-shell";
import { getAppointmentDisplayStatus, getAppointments, getConsultationRequests } from "@/lib/admin-data";
import { requireAdminSession } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

const allInterestBuckets = [
  "Kişisel Marka",
  "Kişisel İtibar",
  "AI Görünürlük",
  "Web Sitesi",
  "Sosyal Medya",
];

function normalizeInterest(value?: string | null) {
  const normalized = (value ?? "")
    .trim()
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (!normalized) {
    return "Belirtilmedi";
  }

  if (normalized === "hepsi") {
    return "Hepsi";
  }

  if (normalized.includes("ai") || normalized.includes("yapay zeka")) {
    return "AI Görünürlük";
  }

  if (normalized.includes("marka")) {
    return "Kişisel Marka";
  }

  if (normalized.includes("itibar")) {
    return "Kişisel İtibar";
  }

  if (normalized.includes("web")) {
    return "Web Sitesi";
  }

  if (normalized.includes("sosyal")) {
    return "Sosyal Medya";
  }

  return value?.trim() || "Belirtilmedi";
}

function getTopInterest(requests: Awaited<ReturnType<typeof getConsultationRequests>>["data"]) {
  const counts = new Map<string, number>();

  for (const request of requests) {
    const interests = request.needs.length > 0 ? request.needs : [request.category ?? "Belirtilmedi"];

    for (const interest of interests) {
      const bucket = normalizeInterest(interest);
      const normalizedInterests = bucket === "Hepsi" ? allInterestBuckets : [bucket];

      for (const normalizedInterest of normalizedInterests) {
        counts.set(normalizedInterest, (counts.get(normalizedInterest) ?? 0) + 1);
      }
    }
  }

  const top = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
  return top ? { label: top[0], count: top[1] } : { label: "Veri yok", count: 0 };
}

function isCompletedRequestStatus(status: string) {
  return ["Görüşüldü", "Onaylandı"].includes(status);
}

export default async function AdminReportsPage() {
  await requireAdminSession();

  const [{ data: requests, error: requestsError }, { data: appointments, error: appointmentsError }] =
    await Promise.all([getConsultationRequests(), getAppointments()]);

  const topInterest = getTopInterest(requests);
  const waitingRequests = requests.filter((request) => request.status === "Bekleyen").length;
  const rejectedRequests = requests.filter((request) => request.status === "Reddedildi").length;
  const completedRequests = requests.filter((request) => isCompletedRequestStatus(request.status)).length;
  const expiredAppointments = appointments.filter(
    (appointment) => getAppointmentDisplayStatus(appointment) === "Tarihi geçti"
  ).length;
  const upcomingAppointments = appointments.filter(
    (appointment) => getAppointmentDisplayStatus(appointment) === "Bekliyor"
  ).length;

  const reports = [
    {
      label: "Toplam talep",
      value: String(requests.length),
      note: "Supabase kayıtları",
      mark: "TL",
    },
    {
      label: "En çok ilgi alanı",
      value: topInterest.label,
      note: `${topInterest.count} talep`,
      mark: topInterest.label.slice(0, 2).toUpperCase(),
    },
    {
      label: "Bekleyen talepler",
      value: String(waitingRequests),
      note: "Aksiyon bekliyor",
      mark: String(waitingRequests).padStart(2, "0"),
    },
    {
      label: "Planlanan randevular",
      value: String(upcomingAppointments),
      note: "Yaklaşan görüşmeler",
      mark: String(upcomingAppointments).padStart(2, "0"),
    },
    {
      label: "Görüşülen talepler",
      value: String(completedRequests),
      note: "Görüşüldü veya onaylandı",
      mark: String(completedRequests).padStart(2, "0"),
    },
    {
      label: "Tarihi geçen randevular",
      value: String(expiredAppointments),
      note: "Aksiyon bekleyen eski kayıtlar",
      mark: String(expiredAppointments).padStart(2, "0"),
    },
    {
      label: "Reddedilen talepler",
      value: String(rejectedRequests),
      note: "Olumsuz sonuçlananlar",
      mark: String(rejectedRequests).padStart(2, "0"),
    },
  ];

  return (
    <AdminShell active="raporlar" title="Raporlar" kicker="Talep, görüşme ve paket performans göstergeleri.">
      {(requestsError || appointmentsError) && (
        <div className="admin-warning">
          Rapor verilerinin bir kısmı okunamadı: {[requestsError, appointmentsError].filter(Boolean).join(" | ")}
        </div>
      )}

      <section className="admin-stat-grid">
        {reports.map((report) => (
          <article className="admin-stat-card" key={report.label}>
            <span>{report.mark}</span>
            <div>
              <small>{report.label}</small>
              <strong>{report.value}</strong>
              <p>{report.note}</p>
            </div>
          </article>
        ))}
      </section>

    </AdminShell>
  );
}

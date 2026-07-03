import { AdminShell } from "@/components/admin-shell";
import {
  CalendarIcon,
  DownloadIcon,
  EyeIcon,
  FilterIcon,
  MoreIcon,
  PlusIcon,
  SearchIcon,
  ShieldIcon,
  TargetIcon,
  UserIcon,
} from "@/components/icons";
import { formatDateTime, getConsultationRequests } from "@/lib/admin-data";
import { requireAdminSession } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

function countByStatus(requests: Awaited<ReturnType<typeof getConsultationRequests>>["data"], status: string) {
  return requests.filter((request) => request.status === status).length;
}

export default async function AdminPage() {
  await requireAdminSession();

  const { data: requests, error } = await getConsultationRequests();

  const stats = [
    { label: "Toplam Talep", value: String(requests.length), note: "Kaydedilen tüm talepler", icon: UserIcon },
    { label: "Bekleyen", value: String(countByStatus(requests, "Bekleyen")), note: "Henüz değerlendirilmedi", icon: CalendarIcon },
    {
      label: "Görüşülen",
      value: String(requests.filter((request) => ["Görüşüldü", "Onaylandı"].includes(request.status)).length),
      note: "Görüşme sağlananlar",
      icon: ShieldIcon,
    },
    { label: "Reddedilen", value: String(countByStatus(requests, "Reddedildi")), note: "Olumsuz sonuçlananlar", icon: TargetIcon },
  ];

  return (
    <AdminShell
      active="talepler"
      title="Ön Görüşme Talepleri"
      kicker="Web sitesi üzerinden ön görüşme talebinde bulunan kişilerin listesi."
    >
      {error && (
        <div className="admin-warning">
          Supabase bağlantısı hazır, ancak talep tablosu henüz okunamadı: {error}
        </div>
      )}

      <div className="admin-actions-row">
        <div />
        <a className="admin-gold-button" href="/on-gorusme?returnTo=/admin">
          <PlusIcon />
          Yeni Talep
        </a>
      </div>

      <section className="admin-stat-grid">
        {stats.map(({ icon: Icon, ...stat }) => (
          <article className="admin-stat-card" key={stat.label}>
            <span>
              <Icon />
            </span>
            <div>
              <small>{stat.label}</small>
              <strong>{stat.value}</strong>
              <p>{stat.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="admin-panel">
        <div className="admin-panel-head">
          <h2>Talepler</h2>
          <div className="admin-tools">
            <label>
              <span>Ara</span>
              <input placeholder="Ara (ad, e-posta, telefon...)" />
              <SearchIcon />
            </label>
            <button type="button">
              <FilterIcon />
              Filtrele
            </button>
            <button type="button">
              <DownloadIcon />
              Dışa Aktar
            </button>
          </div>
        </div>

        {requests.length > 0 ? (
          <>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Ad Soyad</th>
                    <th>E-Posta</th>
                    <th>Telefon</th>
                    <th>İl / Ülke</th>
                    <th>İlgi Alanı</th>
                    <th>Tarih</th>
                    <th>Durum</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => (
                    <tr key={request.id}>
                      <td>{String(index + 1).padStart(3, "0")}</td>
                      <td>{request.full_name}</td>
                      <td>{request.email}</td>
                      <td>{request.phone}</td>
                      <td>{request.country || "-"}</td>
                      <td>{request.needs.join(", ") || request.category || "-"}</td>
                      <td>{formatDateTime(request.created_at)}</td>
                      <td>
                        <span className={`admin-status ${
                          request.status === "Bekleyen"
                            ? "is-waiting"
                            : ["Görüşüldü", "Onaylandı"].includes(request.status)
                              ? "is-done"
                              : request.status === "Reddedildi"
                                ? "is-rejected"
                                : "is-waiting"
                        }`}>
                          {request.status}
                        </span>
                      </td>
                      <td>
                        <div className="admin-row-actions">
                          <a href={`/admin/talepler/${request.id}`} aria-label={`${request.full_name} talebini görüntüle`}>
                            <EyeIcon />
                          </a>
                          <button type="button" aria-label="Diğer işlemler">
                            <MoreIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-pagination">
              <span>1 - {requests.length} / {requests.length} sonuç</span>
              <div>
                <button type="button">‹</button>
                <button className="is-active" type="button">1</button>
                <button type="button">›</button>
              </div>
            </div>
          </>
        ) : (
          <div className="admin-empty-state">
            <h2>Henüz ön görüşme talebi yok.</h2>
            <p>Ön görüşme formundan ilk test kaydını gönderdiğimizde burada görünecek.</p>
          </div>
        )}
      </section>
    </AdminShell>
  );
}

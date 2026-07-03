import { AdminShell } from "@/components/admin-shell";
import { formatDateTime, getConsultationRequestById } from "@/lib/admin-data";
import { requireAdminSession } from "@/lib/admin-guard";
import { saveAdminNote, updateRequestStatus } from "./actions";

export const dynamic = "force-dynamic";

type AdminRequestDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminRequestDetailPage({ params }: AdminRequestDetailPageProps) {
  await requireAdminSession();

  const { id } = await params;
  const { data: request, error } = await getConsultationRequestById(id);

  if (!request) {
    return (
      <AdminShell active="talepler" title="Talep bulunamadı" kicker="Seçilen başvuru kaydı okunamadı.">
        {error && (
          <div className="admin-warning">
            Supabase talep detayı okunamadı: {error}
          </div>
        )}
        <section className="admin-panel admin-empty-state">
          <h2>Bu ID ile kayıt bulunamadı.</h2>
          <p>Talep listesine dönüp güncel bir kaydı tekrar açmayı deneyebilirsiniz.</p>
        </section>
      </AdminShell>
    );
  }

  return (
    <AdminShell
      active="talepler"
      title={`Talep Detayı #${id.slice(0, 8)}`}
      kicker={`Başvuru tarihi: ${formatDateTime(request.created_at)}`}
    >
      <section className="admin-detail-grid">
        <article className="admin-panel admin-detail-card">
          <span className="section-index">Kişi Bilgileri</span>
          <h2>{request.full_name}</h2>
          <dl>
            <div><dt>E-posta</dt><dd>{request.email}</dd></div>
            <div><dt>Telefon</dt><dd>{request.phone}</dd></div>
            <div><dt>Konum</dt><dd>{request.country || "-"}</dd></div>
            <div><dt>Meslek</dt><dd>{request.profession || "-"}</dd></div>
            <div><dt>Kategori</dt><dd>{request.category || "-"}</dd></div>
            <div><dt>İlgi Alanı</dt><dd>{request.needs.join(", ") || "-"}</dd></div>
            <div><dt>İletişim Tercihi</dt><dd>{request.contact_preference || "-"}</dd></div>
            <div><dt>Durum</dt><dd>{request.status}</dd></div>
          </dl>
          <form action={updateRequestStatus.bind(null, request.id)} className="admin-status-form">
            <label>
              Durum Güncelle
              <select name="status" defaultValue={request.status}>
                <option value="Bekleyen">Bekleyen</option>
                <option value="Görüşüldü">Görüşüldü</option>
                <option value="Onaylandı">Onaylandı</option>
                <option value="Reddedildi">Reddedildi</option>
              </select>
            </label>
            <button className="admin-gold-button" type="submit">Durumu Kaydet</button>
          </form>
        </article>
        <article className="admin-panel admin-detail-card">
          <span className="section-index">Ön Analiz Notu</span>
          <h2>Hedef ve ihtiyaç</h2>
          <p>{request.goal || "Başvuru sahibi hedef notu paylaşmadı."}</p>
          {request.links && (
            <>
              <h2>Dijital varlıklar</h2>
              <p>{request.links}</p>
            </>
          )}
          <form action={saveAdminNote.bind(null, request.id)} className="admin-note-form">
            <textarea
              name="adminNote"
              placeholder="Admin notu ekle..."
              defaultValue={request.admin_note ?? ""}
            />
            <button className="admin-gold-button" type="submit">Notu Kaydet</button>
          </form>
        </article>
      </section>
    </AdminShell>
  );
}

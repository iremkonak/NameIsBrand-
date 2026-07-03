import { AdminShell } from "@/components/admin-shell";

export default function AdminSettingsPage() {
  return (
    <AdminShell active="ayarlar" title="Ayarlar" kicker="Panel, bildirim ve yetkilendirme ayarları.">
      <section className="admin-panel admin-settings">
        <article>
          <h2>Admin erişimi</h2>
          <p>Supabase Auth ile giriş yapan kişinin e-postası izin verilen admin listesinde yoksa panel erişimi reddedilecek.</p>
          <div className="admin-email-list">
            <span>İzin verilen admin e-postası</span>
            <strong>nameisbrandcom@gmail.com</strong>
          </div>
        </article>
        <article>
          <h2>Bildirimler</h2>
          <p>Yeni başvuru bildirimleri için ana iletişim hattı nameisbrandcom@gmail.com ve 0543 661 77 10 olarak belirlendi.</p>
        </article>
        <article>
          <h2>Site ayarları</h2>
          <p>Web sitesi footer ve iletişim alanlarında Instagram @nameisbrandcom, e-posta ve WhatsApp hattı kullanılacak.</p>
        </article>
      </section>
    </AdminShell>
  );
}

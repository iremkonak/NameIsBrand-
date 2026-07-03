import { AdminShell } from "@/components/admin-shell";
import {
  formatAppointmentDay,
  formatAppointmentTime,
  getAppointmentDisplayStatus,
  getAppointments,
} from "@/lib/admin-data";
import { createAppointment, updateAppointmentStatus } from "./actions";
import { requireAdminSession } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

export default async function AdminAppointmentsPage() {
  await requireAdminSession();

  const { data: appointments, error } = await getAppointments();

  return (
    <AdminShell active="randevular" title="Randevular" kicker="Planlanan görüşmeler ve takip hatırlatmaları.">
      {error && (
        <div className="admin-warning">
          Supabase bağlantısı hazır, ancak randevu tablosu henüz okunamadı: {error}
        </div>
      )}

      <section className="admin-grid-two">
        <form action={createAppointment} className="admin-panel admin-form-card">
          <div className="admin-form-head">
            <span>Yeni Randevu</span>
            <h2>Randevu Oluştur</h2>
            <p>Görüşme bilgilerini girin; kayıt Supabase randevular tablosuna eklenecek.</p>
          </div>
          <label>
            Ad Soyad
            <input name="fullName" placeholder="Örn. Ayşe Demir" required />
          </label>
          <label>
            E-posta
            <input name="email" placeholder="mail@domain.com" type="email" required />
          </label>
          <label>
            Telefon
            <input name="phone" placeholder="+90 ..." required />
          </label>
          <label>
            Görüşme Konusu
            <input name="subject" placeholder="Ön görüşme, paket değerlendirme..." required />
          </label>
          <div className="admin-form-split">
            <label>
              Tarih
              <input name="appointmentDate" type="date" required />
            </label>
            <label>
              Saat
              <input name="appointmentTime" type="time" required />
            </label>
          </div>
          <label>
            Not
            <textarea name="note" placeholder="Kısa görüşme notu..." />
          </label>
          <button className="admin-gold-button" type="submit">Randevu Oluştur</button>
        </form>

        <section className="admin-panel admin-timeline">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <article key={appointment.id}>
                <span>{formatAppointmentDay(appointment.appointment_date)}</span>
                <strong>{formatAppointmentTime(appointment.appointment_time)}</strong>
                <div>
                  <h2>{appointment.full_name}</h2>
                  <p>{appointment.subject}</p>
                  {appointment.note && <p>{appointment.note}</p>}
                </div>
                <form
                  action={updateAppointmentStatus.bind(null, appointment.id)}
                  className="admin-timeline-status"
                >
                  <small>{getAppointmentDisplayStatus(appointment)}</small>
                  <select name="status" defaultValue={appointment.status}>
                    <option value="Bekliyor">Bekliyor</option>
                    <option value="Tamamlandı">Tamamlandı</option>
                    <option value="İptal edildi">İptal edildi</option>
                  </select>
                  <button type="submit">Kaydet</button>
                </form>
              </article>
            ))
          ) : (
            <div className="admin-empty-state compact">
              <h2>Oluşturulmuş randevu yok.</h2>
              <p>İlk randevuyu soldaki formdan oluşturabilirsiniz.</p>
            </div>
          )}
        </section>
      </section>
    </AdminShell>
  );
}

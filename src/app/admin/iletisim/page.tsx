import { AdminShell } from "@/components/admin-shell";

const channels = [
  ["E-posta", "nameisbrandcom@gmail.com", "Aktif"],
  ["Telefon", "0543 661 77 10", "Aktif"],
  ["WhatsApp", "0543 661 77 10", "Aktif"],
  ["Instagram", "@nameisbrandcom", "Aktif"],
];

export default function AdminChannelsPage() {
  return (
    <AdminShell active="iletisim" title="İletişim Kanalları" kicker="Web sitesindeki iletişim ve sosyal kanal yönetimi.">
      <section className="admin-panel admin-simple-list">
        {channels.map(([channel, value, status]) => (
          <article key={channel}>
            <span>{channel.slice(0, 2).toUpperCase()}</span>
            <div>
              <h2>{channel}</h2>
              <p>{value}</p>
            </div>
            <strong>{status}</strong>
          </article>
        ))}
      </section>
    </AdminShell>
  );
}

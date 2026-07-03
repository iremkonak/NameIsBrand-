import { AdminShell } from "@/components/admin-shell";

const users = [
  {
    name: "Name Is Brand",
    email: "nameisbrandcom@gmail.com",
    role: "Tam yetkili admin",
  },
];

export default function AdminUsersPage() {
  return (
    <AdminShell active="kullanicilar" title="Kullanıcılar" kicker="Panel erişimi olan ekip üyeleri.">
      <section className="admin-panel admin-simple-list">
        {users.map((user, index) => (
          <article key={user.email}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{user.name}</h2>
              <p>{user.role} · {user.email}</p>
            </div>
            <strong>Aktif</strong>
          </article>
        ))}
      </section>
    </AdminShell>
  );
}

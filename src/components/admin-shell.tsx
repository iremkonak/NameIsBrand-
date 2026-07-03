import { BrandLogo } from "@/components/brand-logo";
import { logoutAdmin } from "@/app/admin/login/actions";
import { AdminDate } from "@/components/admin-date";
import { requireAdminSession } from "@/lib/admin-guard";
import {
  CalendarIcon,
  ChartIcon,
  GlobeIcon,
  GridIcon,
  LogoutIcon,
  PackageIcon,
  SettingsIcon,
  UserIcon,
} from "@/components/icons";

type AdminShellProps = {
  active: string;
  children: React.ReactNode;
  kicker?: string;
  title: string;
};

const adminMenu = [
  { label: "Ön Görüşme Talepleri", href: "/admin", key: "talepler", icon: GridIcon },
  { label: "Kullanıcılar", href: "/admin/kullanicilar", key: "kullanicilar", icon: UserIcon },
  { label: "Randevular", href: "/admin/randevular", key: "randevular", icon: CalendarIcon },
  { label: "Raporlar", href: "/admin/raporlar", key: "raporlar", icon: ChartIcon },
  { label: "Paketler / Hizmetler", href: "/admin/paketler", key: "paketler", icon: PackageIcon },
  { label: "İletişim Kanalları", href: "/admin/iletisim", key: "iletisim", icon: GlobeIcon },
  { label: "Ayarlar", href: "/admin/ayarlar", key: "ayarlar", icon: SettingsIcon },
];

export async function AdminShell({ active, children, kicker, title }: AdminShellProps) {
  await requireAdminSession();

  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <BrandLogo />
        </div>

        <nav className="admin-nav" aria-label="Admin menüsü">
          <span>Ana Menü</span>
          {adminMenu.map(({ icon: Icon, ...item }) => (
            <a className={active === item.key ? "is-active" : ""} href={item.href} key={item.key}>
              <Icon />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="admin-profile">
          <div className="admin-profile-card">
            <BrandLogo compact />
            <div>
              <strong>Name Is Brand</strong>
              <span>Admin</span>
            </div>
          </div>
          <form action={logoutAdmin}>
            <button type="submit">
              <LogoutIcon />
              Çıkış Yap
            </button>
          </form>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            {kicker ? <span>{kicker}</span> : null}
            <h1>{title}</h1>
          </div>
          <div className="admin-topbar-meta">
            <AdminDate />
          </div>
        </header>

        {children}
      </section>
    </main>
  );
}

import { BrandLogo } from "@/components/brand-logo";
import { ArrowUpRight } from "@/components/icons";
import { loginAdmin } from "@/app/admin/login/actions";

const errorMessages: Record<string, string> = {
  invalid: "E-posta veya şifre hatalı. Supabase Auth kullanıcısını ve şifreyi kontrol edin.",
  missing: "Giriş yapmak için e-posta ve şifre gerekli.",
  unauthorized: "Bu e-posta admin paneli için yetkilendirilmemiş.",
};

type AdminLoginPageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const params = await searchParams;
  const error = params?.error ? errorMessages[params.error] : null;

  return (
    <main className="admin-login-page">
      <div className="admin-login-orbit orbit-a" />
      <div className="admin-login-orbit orbit-b" />
      <section className="admin-login-card">
        <BrandLogo />
        <div>
          <span className="section-index">Admin Erişimi</span>
          <h1>Name is Brand yönetim paneli.</h1>
          <p>
            Ön görüşme talepleri, paketler, randevular ve içerik yönetimi için
            güvenli giriş alanı.
          </p>
        </div>
        <form action={loginAdmin} className="admin-login-form">
          <label>
            E-posta
            <input
              autoComplete="username"
              name="email"
              placeholder="admin@example.com"
              required
              type="email"
            />
          </label>
          <label>
            Şifre
            <input
              autoComplete="current-password"
              name="password"
              placeholder="••••••••"
              required
              type="password"
            />
          </label>
          {error ? <p className="admin-login-error">{error}</p> : null}
          <button className="button button-primary" type="submit">
            Panele Giriş Yap
            <ArrowUpRight />
          </button>
        </form>
        <small>Yalnızca izin verilen admin e-postaları panel erişimi alabilir.</small>
      </section>
    </main>
  );
}

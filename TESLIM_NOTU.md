# Name Is Brand Web Sitesi - Teslim Notu

## Proje Özeti

Name Is Brand projesi; kişisel marka, dijital itibar, içerik mimarisi, premium liderlik ve AI görünürlük hizmetlerini tanıtan modern bir web sitesi olarak geliştirilmiştir. Projede ayrıca ön görüşme formu, blog/içgörü alanı, KVKK/gizlilik sayfası ve korumalı admin paneli bulunmaktadır.

## Kullanılan Teknolojiler

- Next.js 15
- React 19
- TypeScript
- Supabase
- Supabase Auth
- Supabase Database / SQL schema
- CSS tabanlı özel arayüz tasarımı

## Ana Modüller

- Ana sayfa ve hizmet tanıtım alanları
- Hizmet detay sayfaları
- Blog / içgörü sayfaları
- Ön görüşme başvuru formu
- KVKK ve gizlilik bilgilendirme sayfası
- Admin giriş ekranı
- Admin paneli
- Talep yönetimi
- Randevu yönetimi
- Raporlar
- Paket / hizmet düzenleme alanı
- İletişim ve ayarlar sayfaları

## Admin Paneli

Admin panel yolu:

```text
/admin
```

Giriş ekranı:

```text
/admin/login
```

Admin panel şifresiz açılmayacak şekilde korunmuştur. Giriş için Supabase Auth kullanılmaktadır. Ayrıca yalnızca izin verilen admin e-posta adresleri panele erişebilir.

Admin güvenliği için eklenen önlemler:

- Supabase Auth ile giriş kontrolü
- Admin e-posta izin listesi
- Admin route koruması
- Kısa süreli güvenli admin cookie
- Eski admin cookie'lerinin geçersiz sayılması
- Login denemeleri için basit rate limit
- Admin sayfalarında cache kapatma
- Güvenlik header'ları

## Supabase Yapısı

Projede veriler kod içinde tutulmaz. Ön görüşme talepleri, randevular, admin notları ve paket kayıtları Supabase veritabanında saklanır.

Supabase kurulumu için `supabase/schema.sql` dosyası hazırlanmıştır. Bu dosya aşağıdaki yapıları oluşturur:

- `consultation_requests`
- `appointments`
- `service_packages`
- `admin_allowlist`
- Güncelleme trigger'ları
- Row Level Security politikaları
- Başlangıç paket / hizmet kayıtları

Yeni bir Supabase projesine geçildiğinde yapılması gerekenler:

1. Supabase projesi oluşturulur.
2. `supabase/schema.sql` SQL Editor içinde çalıştırılır.
3. Supabase Auth içinde admin kullanıcı oluşturulur.
4. Admin e-postası `ADMIN_EMAILS` env değişkenine eklenir.
5. Aynı admin e-postası `admin_allowlist` tablosunda bulunmalıdır.

## Ortam Değişkenleri

Gerçek gizli anahtarlar GitHub reposuna eklenmemiştir. Repo içinde yalnızca `.env.example` vardır.

Gerekli env değişkenleri:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAILS=admin@example.com
```

Önemli: `SUPABASE_SERVICE_ROLE_KEY` gizlidir ve sadece server ortamında tutulmalıdır. GitHub'a veya herkese açık herhangi bir yere eklenmemelidir.

## Güvenlik Kontrolleri

Teslim öncesi yapılan kontroller:

- Admin panel cookiesiz durumda login sayfasına yönleniyor.
- Sahte admin cookie ile panele erişim sağlanamıyor.
- Eski admin cookie versiyonları geçersiz sayılıyor.
- `.env.local` GitHub'a eklenmedi.
- `.next`, `node_modules`, log dosyaları ve build cache dosyaları repoya eklenmedi.
- Supabase gerçek key sızıntısı için kod içinde arama yapıldı.
- Hardcoded Supabase proje domain'i kaldırıldı; proje farklı Supabase URL'leriyle çalışabilecek hale getirildi.
- TypeScript kontrolü başarıyla geçti.
- Production build başarıyla geçti.

Son başarılı kontroller:

```bash
npm run typecheck
npm run build
```

## GitHub Reposuna Eklenenler

Repoda olması gereken dosyalar:

- `src`
- `supabase`
- `.env.example`
- `.gitignore`
- `README.md`
- `middleware.ts`
- `next.config.ts`
- `next-env.d.ts`
- `package.json`
- `package-lock.json`
- `tsconfig.json`

Repoda olmaması gereken dosyalar:

- `.env.local`
- `.env`
- `.next`
- `node_modules`
- `dev-server*.log`
- `tsconfig.tsbuildinfo`

## Yayına Alma Notları

Proje Vercel gibi Next.js destekleyen bir platformda yayınlanabilir. Yayına alırken hosting panelinde env değişkenleri girilmelidir.

HTTPS / SSL genellikle hosting sağlayıcısı tarafından otomatik sağlanır. Yayında admin hesabı için güçlü şifre kullanılmalı ve mümkünse ek hesap güvenliği etkinleştirilmelidir.

## Riskler ve Dikkat Edilmesi Gerekenler

- Proje kendi Supabase'imizle değil, teslim alan tarafın Supabase projesiyle kullanılacaksa önce `supabase/schema.sql` çalıştırılmalıdır.
- Sadece env key değiştirmek yeterli değildir; tablolar ve RLS politikaları da kurulmalıdır.
- `.env.local` hiçbir şekilde GitHub'a eklenmemelidir.
- Admin panel yolu `/admin` olarak kalmıştır. Güvenlik login ve auth ile sağlanır. İstenirse ileride yol adı değiştirilebilir.
- KVKK metni genel bilgilendirme metnidir. Resmi yayın için şirket unvanı/adres ve hukuk danışmanı kontrolü eklenebilir.
- Supabase service role key sadece server tarafında kullanılmalıdır.

## Teslim Durumu

Proje teknik olarak teslim edilmeye hazırdır. Kod GitHub reposuna temiz şekilde yüklenmiştir. Kurulum için README dosyası, Supabase kurulumu için `supabase/schema.sql`, env örneği için `.env.example` dosyası bulunmaktadır.


import type { Metadata } from "next";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "KVKK ve Gizlilik Politikasi | Name is Brand",
  description:
    "Name is Brand on gorusme formu ve web sitesi icin kisisel veri, gizlilik ve iletisim politikasi.",
};

const sections = [
  {
    title: "Toplanan Veriler",
    text:
      "On gorusme formunda ad soyad, e-posta, telefon, meslek, kategori, sehir, ilgi alanlari, hedef/problem aciklamasi, paylasilan dijital linkler ve tercih edilen iletisim kanali islenebilir.",
  },
  {
    title: "Isleme Amaci",
    text:
      "Bu bilgiler yalnizca on gorusme talebini degerlendirmek, ihtiyacinizi anlamak, size geri donus yapmak ve uygun hizmet kapsamını belirlemek amaciyla kullanilir.",
  },
  {
    title: "Saklama ve Guvenlik",
    text:
      "Basvuru kayitlari Supabase altyapisi uzerinde saklanir. Admin paneline erisim yalnizca yetkilendirilmis admin hesabiyla yapilir ve panel erisimi oturum kontroluyle korunur.",
  },
  {
    title: "Paylasim",
    text:
      "Kisisel verileriniz, yasal zorunluluklar disinda ucuncu kisilerle satilmaz veya pazarlama amaciyla paylasilmaz. Teknik altyapi saglayicilari yalnizca hizmetin calismasi icin gerekli kapsamda veri isleyebilir.",
  },
  {
    title: "Haklariniz",
    text:
      "KVKK kapsaminda verilerinizin islenip islenmedigini ogrenme, duzeltme, silme, isleme amacini ogrenme ve taleplerinizi iletme haklariniz bulunur.",
  },
  {
    title: "Iletisim",
    text:
      "Kisisel verilerinizle ilgili talepleriniz icin nameisbrandcom@gmail.com adresinden veya web sitesindeki iletisim kanallarindan bize ulasabilirsiniz.",
  },
];

export default function KvkkPage() {
  return (
    <main className="detail-page legal-page" id="top">
      <Header />

      <section className="legal-hero shell">
        <span className="section-index">KVKK / Gizlilik</span>
        <h1>
          KVKK ve <em>Gizlilik Politikasi</em>
        </h1>
        <p>
          Bu sayfa, Name is Brand web sitesi uzerinden paylastiginiz on gorusme
          bilgilerinin hangi amacla alindigini ve nasil korundugunu aciklamak
          icin hazirlanmistir.
        </p>
      </section>

      <section className="legal-content shell">
        {sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}

        <div className="legal-note">
          <strong>Not</strong>
          <p>
            Bu metin genel bilgilendirme amaciyla hazirlanmistir. Nihai yayin
            oncesinde markanin resmi unvani, adresi ve varsa hukuk danismani
            tarafindan gozden gecirilmesi onerilir.
          </p>
        </div>
      </section>

      <footer className="detail-footer shell">
        <div className="footer-brand">
          <BrandLogo compact />
          <p>Personal branding starts with your name.</p>
        </div>
        <div className="detail-footer-meta">
          <a href="/">Ana Sayfa</a>
          <a href="/on-gorusme">On Gorusme</a>
        </div>
      </footer>
    </main>
  );
}

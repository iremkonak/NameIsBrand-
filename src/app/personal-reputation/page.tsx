import type { Metadata } from "next";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import {
  ArrowRight,
  ArrowUpRight,
  GlobeIcon,
  ShieldIcon,
  SparkIcon,
  TargetIcon,
  UserIcon,
} from "@/components/icons";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Kişisel İtibar Kalkanı | Name is Brand",
  description:
    "İsminizin güven, saygınlık ve prestij algısını stratejik olarak güçlendiren Personal Reputation Shield yaklaşımı.",
};

const audience = [
  "Üst düzey yöneticiler ve iş insanları",
  "Doktorlar, avukatlar ve akademisyenler",
  "Sanatçılar, sporcular ve kamuya açık kişiler",
  "Dijital görünürlüğü yüksek uzmanlar",
];

const gains = [
  {
    title: "Güven Algısı",
    text: "İsminizle karşılaşan kişiler için tutarlı ve güven veren bir ilk izlenim.",
    icon: ShieldIcon,
  },
  {
    title: "Saygınlık",
    text: "Uzmanlığınızı ve deneyiminizi destekleyen güçlü bir dijital otorite yapısı.",
    icon: UserIcon,
  },
  {
    title: "Prestij",
    text: "Alanınızdaki konumunuzu daha seçkin ve profesyonel gösteren marka dili.",
    icon: SparkIcon,
  },
  {
    title: "Risk Kontrolü",
    text: "Zayıf veya tutarsız dijital izlerin oluşturabileceği itibar risklerinin ön analizi.",
    icon: TargetIcon,
  },
];

const principles = [
  {
    number: "01",
    title: "Mahremiyet Önceliği",
    text: "Kişisel ve kurumsal bilgiler yalnızca belirlenen kapsam ve yetkiler dahilinde ele alınır.",
  },
  {
    number: "02",
    title: "Doğruluk ve Şeffaflık",
    text: "İtibar, yapay bir imajla değil; doğrulanabilir uzmanlık ve tutarlı iletişimle inşa edilir.",
  },
  {
    number: "03",
    title: "Onaylı Görünürlük",
    text: "Yayınlanacak içerikler ve kullanılacak kişisel bilgiler müşteri onayıyla yönetilir.",
  },
];

const faqs = [
  {
    question: "Kişisel itibar neden önemlidir?",
    answer:
      "Dijital ortamda isminizle karşılaşan kişiler, sizinle iletişime geçmeden önce güven ve yetkinlik değerlendirmesi yapar. İtibar mimarisi bu ilk algıyı bilinçli ve tutarlı hale getirir.",
  },
  {
    question: "Zayıf bir dijital itibar ne kaybettirir?",
    answer:
      "Güven kaybı, yanlış anlaşılma, fırsatların kaçırılması ve uzmanlığınızın olduğundan daha zayıf algılanması gibi sonuçlar doğurabilir.",
  },
  {
    question: "Bu çalışma kriz yönetimi hizmeti midir?",
    answer:
      "Süreç kriz risklerini ve zayıf noktaları önceden değerlendirse de yalnızca kriz müdahalesi değildir; uzun vadeli güven, prestij ve otorite oluşturma yaklaşımıdır.",
  },
];

export default function PersonalReputationPage() {
  return (
    <main id="top" className="detail-page">
      <ScrollProgress />
      <Header />

      <section className="detail-hero shell">
        <div className="detail-hero-copy">
          <a className="detail-back" href="/#services">
            <ArrowRight />
            Hizmetlere Dön
          </a>
          <span className="section-index">Personal Reputation Shield</span>
          <h1>
            İsminizin güven
            <br />
            algısını <em>yönetin.</em>
          </h1>
          <p>
            Güven, saygınlık ve prestij algınızı dijital dünyada koruyan;
            uzmanlığınızı güçlü bir itibara dönüştüren stratejik mimari.
          </p>
          <div className="detail-trust-words">
            <span>Güven</span>
            <span>Saygınlık</span>
            <span>İtibar</span>
          </div>
        </div>

        <div className="reputation-emblem" aria-hidden="true">
          <div className="emblem-ring emblem-ring-one" />
          <div className="emblem-ring emblem-ring-two" />
          <div className="emblem-core">
            <ShieldIcon />
            <strong>Trust</strong>
            <span>Personal Reputation Architecture</span>
          </div>
          <span className="emblem-note note-one">Authority</span>
          <span className="emblem-note note-two">Prestige</span>
          <span className="emblem-note note-three">Protection</span>
        </div>
      </section>

      <section className="reputation-intro shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">01 / İtibar Mimarisi</span>
          <h2>İsminizin güven algısını yönetiyoruz.</h2>
        </div>
        <div className="problem-grid">
          <article>
            <span>Problem</span>
            <h3>Kişisel itibar neden en önemli dijital varlığınızdır?</h3>
            <p>
              İnsanlar uzmanlığınızı tanımadan önce isminizle, arama sonuçlarınızla
              ve dijital izinizle karşılaşır.
            </p>
          </article>
          <article>
            <span>Risk</span>
            <h3>Zayıf bir kişisel itibar size ne kaybettirir?</h3>
            <p>
              Tutarsız görünüm, eksik bilgi ve kontrolsüz içerikler güveni,
              fırsatları ve profesyonel konumunuzu zayıflatabilir.
            </p>
          </article>
          <article className="solution-card">
            <span>Çözüm</span>
            <h3>Name is Brand itibar mimarisi.</h3>
            <p>
              Mevcut algıyı analiz eder, riskleri belirler ve güven veren bütüncül
              bir dijital temsil sistemi kurarız.
            </p>
          </article>
        </div>
      </section>

      <section className="detail-audience detail-section">
        <div className="shell detail-split">
          <div>
            <span className="section-index">02 / Kimler İçin?</span>
            <h2>İsmi, mesleki değerinin önemli bir parçası olanlar için.</h2>
            <p>
              Kamuya açık görünürlüğü bulunan veya güven üzerinden karar verilen
              alanlarda çalışan profesyonellere özel tasarlanır.
            </p>
          </div>
          <div className="detail-audience-list">
            {audience.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-gains shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">03 / Size Ne Kazandırır?</span>
          <h2>Görünürlükten önce güven oluşturur.</h2>
        </div>
        <div className="gain-grid">
          {gains.map(({ icon: Icon, ...gain }, index) => (
            <article key={gain.title}>
              <div>
                <span>0{index + 1}</span>
                <Icon />
              </div>
              <h3>{gain.title}</h3>
              <p>{gain.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ethics detail-section">
        <div className="shell">
          <div className="ethics-heading">
            <span className="section-index">04 / Etik ve Gizlilik</span>
            <h2>İtibar, güvenilir yöntemlerle inşa edilir.</h2>
            <ShieldIcon />
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
            <p className="principle-summary">
              İtibar çalışması yalnızca daha fazla görünür olmak değildir. Hangi
              bilginin, hangi kanalda, hangi güven çerçevesiyle temsil edileceğini
              bilinçli seçmek gerekir. Name is Brand bu alanı; prestij, mahremiyet,
              doğruluk ve profesyonel otorite arasında dengeli bir güven mimarisi
              olarak ele alır.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-contact shell detail-section" id="contact">
        <div>
          <span className="section-index">Ön Görüşme</span>
          <h2>İsminizin mevcut güven algısını birlikte değerlendirelim.</h2>
        </div>
        <div>
          <p>
            Ön görüşmede dijital görünürlüğünüzü, risklerinizi ve itibar
            hedeflerinizi ele alarak size özel ilk yol haritasını çıkarırız.
          </p>
          <a className="button button-primary" href="/on-gorusme">
            Ön Görüşme Talep Et
            <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="detail-faq shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">05 / Sık Sorulan Sorular</span>
          <h2>Merak edilenler.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span>0{index + 1}</span>
                {faq.question}
                <span className="faq-plus">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="detail-footer shell">
        <div className="footer-brand">
          <BrandLogo compact />
          <p>Your reputation is capital.</p>
        </div>
        <div className="detail-footer-meta">
          <GlobeIcon />
          <span>Premium kişisel marka ve itibar danışmanlığı</span>
          <a href="https://www.instagram.com/nameisbrandcom/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:nameisbrandcom@gmail.com">E-posta</a>
          <a href="https://wa.me/905436617710" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="/#top">Ana Sayfaya Dön</a>
        </div>
      </footer>
    </main>
  );
}

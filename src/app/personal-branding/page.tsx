import type { Metadata } from "next";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import {
  ArrowRight,
  ArrowUpRight,
  GlobeIcon,
  GridIcon,
  SearchIcon,
  SparkIcon,
  TargetIcon,
  UserIcon,
} from "@/components/icons";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Personal Branding | Name is Brand",
  description:
    "Kimliğinizi, uzmanlığınızı ve vizyonunuzu güçlü bir kişisel markaya dönüştüren Personal Branding yaklaşımı.",
};

const audience = [
  "Uzmanlığını güçlü bir marka olarak konumlandırmak isteyenler",
  "Kariyerinde yeni bir liderlik seviyesine geçmek isteyenler",
  "Kamuya açık görünürlüğünü profesyonelleştirmek isteyenler",
  "Ulusal veya global ölçekte tanınmayı hedefleyenler",
];

const process = [
  {
    number: "01",
    title: "Personal Name Audit",
    text: "Kim olduğunuzu, uzmanlığınızı, yaşam hedefinizi, vizyonunuzu ve beklentilerinizi analiz ederiz.",
    icon: SearchIcon,
  },
  {
    number: "02",
    title: "Konumlandırma",
    text: "Sizi hedef kitleniz için anlamlı, farklı ve güvenilir kılan stratejik konumu belirleriz.",
    icon: TargetIcon,
  },
  {
    number: "03",
    title: "Marka Mimarisi",
    text: "Mesajınızı, anlatınızı, görsel dilinizi ve dijital temas noktalarınızı bütüncül hale getiririz.",
    icon: GridIcon,
  },
  {
    number: "04",
    title: "Görünürlük",
    text: "Markanızı doğru kanallarda tutarlı içerikler ve güvenilir kaynaklarla görünür kılarız.",
    icon: SparkIcon,
  },
];

const gains = [
  {
    title: "Net Konum",
    text: "Kim olduğunuzu ve hangi değeri sunduğunuzu anlaşılır bir marka vaadine dönüştürür.",
    icon: TargetIcon,
  },
  {
    title: "Güçlü Anlatı",
    text: "Deneyiminizi ve vizyonunuzu hedef kitleniz için etkileyici bir hikayede birleştirir.",
    icon: UserIcon,
  },
  {
    title: "Tutarlı Kimlik",
    text: "Web sitesi, sosyal medya ve içeriklerinizde aynı premium marka algısını oluşturur.",
    icon: GridIcon,
  },
  {
    title: "Kalıcı Görünürlük",
    text: "İsminizi uzmanlığınız ve güvenilir dijital kaynaklarla kalıcı biçimde ilişkilendirir.",
    icon: GlobeIcon,
  },
];

const faqs = [
  {
    question: "Personal Branding yalnızca görsel kimlik tasarımı mıdır?",
    answer:
      "Hayır. Görsel kimlik sürecin yalnızca bir parçasıdır. Kişisel marka; konumlandırma, uzmanlık mesajı, hedef kitle, içerik mimarisi, itibar ve görünürlük çalışmalarını birlikte kapsar.",
  },
  {
    question: "Personal Name Audit nedir?",
    answer:
      "Kişisel markanın temel analiz aşamasıdır. Kim olduğunuz, uzmanlığınız, hedefleriniz, mevcut dijital iziniz ve beklentileriniz değerlendirilerek marka stratejisinin başlangıç çerçevesi oluşturulur.",
  },
  {
    question: "Çalışmanın sonunda kişisel web sitesi hazırlanır mı?",
    answer:
      "Seçilen hizmet kapsamına göre web sitesi, profil metinleri, içerik mimarisi ve farklı dijital varlıklar üretilebilir. Kesin teslimler ön analiz sonrası oluşturulan yol haritasında belirlenir.",
  },
];

export default function PersonalBrandingPage() {
  return (
    <main id="top" className="detail-page branding-detail-page">
      <ScrollProgress />
      <Header />

      <section className="detail-hero branding-detail-hero shell">
        <div className="detail-hero-copy">
          <a className="detail-back" href="/#services">
            <ArrowRight />
            Hizmetlere Dön
          </a>
          <span className="section-index">Personal Branding</span>
          <h1>
            İsminizi
            <br />
            markaya <em>dönüştürün.</em>
          </h1>
          <p>
            Kimliğinizi, uzmanlığınızı ve vizyonunuzu stratejik bir konuma;
            isminizi güven veren, ayırt edilebilir ve kalıcı bir markaya
            dönüştürüyoruz.
          </p>
          <div className="detail-trust-words">
            <span>Brand Name</span>
            <span>Name Trust</span>
            <span>Personal Visibility</span>
          </div>
        </div>

        <div className="branding-monogram" aria-label="Kişisel marka mimarisi">
          <div className="branding-frame frame-one" />
          <div className="branding-frame frame-two" />
          <div className="branding-core">
            <span>Your</span>
            <strong>Name</strong>
            <em>is Brand.</em>
          </div>
          <span className="brand-axis axis-one">Identity</span>
          <span className="brand-axis axis-two">Expertise</span>
          <span className="brand-axis axis-three">Vision</span>
          <span className="brand-axis axis-four">Trust</span>
        </div>
      </section>

      <section className="reputation-intro shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">01 / Personal Branding</span>
          <h2>Your Name is Brand. Your Brand is Trust.</h2>
        </div>
        <div className="problem-grid branding-problem-grid">
          <article>
            <span>Problem</span>
            <h3>Neden kişisel markaya ihtiyacınız var?</h3>
            <p>
              Uzmanlık tek başına görünürlük yaratmaz. İnsanların sizi nasıl
              tanımladığı, hatırladığı ve başkalarına aktardığı stratejik olarak
              yönetilmelidir.
            </p>
          </article>
          <article className="solution-card branding-solution-card">
            <span>Çözüm</span>
            <h3>Name is Brand ne yapar?</h3>
            <p>
              Kimliğinizi analiz eder, güçlü yönlerinizi konumlandırır ve tüm
              dijital varlıklarınızı aynı güvenilir marka anlatısında birleştirir.
            </p>
          </article>
        </div>
      </section>

      <section className="detail-audience branding-audience detail-section">
        <div className="shell detail-split">
          <div>
            <span className="section-index">02 / Kimler İçin?</span>
            <h2>İsminin taşıdığı değeri büyütmek isteyenler için.</h2>
            <p>
              Uzmanlığını doğru anlatmak, güvenilir bir konum oluşturmak ve
              ismini uzun vadeli bir profesyonel değere dönüştürmek isteyenlere
              özel tasarlanır.
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

      <section className="branding-process shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">03 / Nasıl Çalışıyoruz?</span>
          <h2>Analizden görünürlüğe uzanan marka yolculuğu.</h2>
        </div>
        <div className="branding-process-grid">
          {process.map(({ icon: Icon, ...item }) => (
            <article key={item.number}>
              <div>
                <span>{item.number}</span>
                <Icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-gains branding-gains shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">04 / Size Ne Kazandırır?</span>
          <h2>İsminizi profesyonel bir değere dönüştürür.</h2>
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

      <section className="detail-contact shell detail-section" id="contact">
        <div>
          <span className="section-index">Personal Name Audit</span>
          <h2>Kişisel markanızın başlangıç analizini birlikte yapalım.</h2>
        </div>
        <div>
          <p>
            Ön görüşmede mevcut konumunuzu, uzmanlığınızı, hedef kitlenizi ve
            görünürlük hedeflerinizi değerlendirerek ilk marka çerçevenizi
            oluşturalım.
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
          <h2>Personal Branding hakkında.</h2>
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
          <p>Personal branding starts with your name.</p>
        </div>
        <div className="detail-footer-meta">
          <GlobeIcon />
          <span>Premium kişisel marka danışmanlığı</span>
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

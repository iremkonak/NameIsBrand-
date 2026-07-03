import type { Metadata } from "next";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import {
  ArrowRight,
  ArrowUpRight,
  GlobeIcon,
  SearchIcon,
  ShieldIcon,
  SparkIcon,
  TargetIcon,
  UserIcon,
} from "@/components/icons";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Kişisel Premium Liderlik | Name is Brand",
  description:
    "Uzmanlık, güven ve fikir liderliğinizi premium bir kişisel liderlik mimarisiyle görünür hale getiren hizmet.",
};

const audience = [
  "Sektörel liderlik hedefleyen uzmanlar",
  "Ulusal veya global görünürlüğünü büyütmek isteyen yöneticiler",
  "Fikir liderliği ve medya görünürlüğü isteyen profesyoneller",
  "İsmini premium güven ve otoriteyle konumlandırmak isteyenler",
];

const gains = [
  {
    title: "Market Leadership",
    text: "Alanınızda yalnızca görünür değil, referans alınan bir konuma yaklaşmanız için liderlik dili kurar.",
    icon: TargetIcon,
  },
  {
    title: "Thought Leadership",
    text: "Deneyiminizi, güçlü fikirler ve stratejik görüşlerle ayırt edilebilir bir uzmanlık söylemine dönüştürür.",
    icon: SparkIcon,
  },
  {
    title: "Top of Mind",
    text: "Doğru konu başlıklarında akla gelen isim olmanız için tutarlı temas noktaları oluşturur.",
    icon: UserIcon,
  },
  {
    title: "Global Recognition",
    text: "Ulusal ve uluslararası ölçekte okunabilir, seçkin ve güvenilir bir dijital profil hedefler.",
    icon: GlobeIcon,
  },
];

const principles = [
  {
    number: "01",
    title: "Sektörel Liderlik",
    text: "Sektörünüzde hangi başlıklarla anılmanız gerektiğini ve hangi alanda güçlü bir konum alabileceğinizi netleştiririz.",
  },
  {
    number: "02",
    title: "Uzmanlık Liderliği",
    text: "Bilginizi, deneyiminizi ve bakış açınızı hedef kitleniz için anlaşılır bir otorite diline taşırız.",
  },
  {
    number: "03",
    title: "Güven Oyu Liderliği",
    text: "Dijital varlıklarınızın karar vericiler, medya ve potansiyel iş birlikleri için güven vermesini sağlarız.",
  },
  {
    number: "04",
    title: "Ulusal / Global Liderlik",
    text: "Görünürlüğünüzü yalnızca yerel değil, daha geniş ölçekli algı ve fırsat alanları için hazırlarız.",
  },
];

const faqs = [
  {
    question: "Premium liderlik hizmeti kimlere uygundur?",
    answer:
      "Alanında belirli bir deneyimi olan, ismini daha seçkin bir otorite konumuna taşımak isteyen yöneticiler, uzmanlar, girişimciler ve kamuya açık profesyoneller için uygundur.",
  },
  {
    question: "Bu hizmet PR çalışması mı?",
    answer:
      "PR ile temas edebilir ancak yalnızca medya görünürlüğü değildir. Konumlandırma, liderlik söylemi, içerik mimarisi, itibar ve dijital varlıklar birlikte tasarlanır.",
  },
  {
    question: "Uluslararası görünürlük garanti edilir mi?",
    answer:
      "Belirli bir yayın, sıralama veya medya sonucu garanti edilmez. Amaç; isminizi global ölçekte daha okunabilir, güvenilir ve referanslanabilir hale getirecek altyapıyı kurmaktır.",
  },
];

export default function PremiumLeadershipPage() {
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
          <span className="section-index">Personal Premium Leadership</span>
          <h1>
            Uzmanlığınızı
            <br />
            liderlik etkisine <em>taşıyın.</em>
          </h1>
          <p>
            İsminizi yalnızca bilinen değil; güvenilen, referans alınan ve
            premium bir otorite olarak hatırlanan kişisel liderlik konumuna hazırlıyoruz.
          </p>
          <div className="detail-trust-words">
            <span>Market Leadership</span>
            <span>Thought Leadership</span>
            <span>Top of Mind</span>
          </div>
        </div>

        <div className="reputation-emblem" aria-hidden="true">
          <div className="emblem-ring emblem-ring-one" />
          <div className="emblem-ring emblem-ring-two" />
          <div className="emblem-core">
            <TargetIcon />
            <strong>Leader</strong>
            <span>Premium Authority System</span>
          </div>
          <span className="emblem-note note-one">Market</span>
          <span className="emblem-note note-two">Thought</span>
          <span className="emblem-note note-three">Global</span>
        </div>
      </section>

      <section className="reputation-intro shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">01 / Premium Liderlik</span>
          <h2>İsminizi alanınızın güçlü referanslarından biri haline getiriyoruz.</h2>
        </div>
        <div className="problem-grid">
          <article>
            <span>Problem</span>
            <h3>Uzmanlık neden her zaman liderlik olarak algılanmaz?</h3>
            <p>
              Deneyim, doğru anlatı ve güçlü dijital kanıtlarla desteklenmediğinde
              hedef kitlede liderlik algısına dönüşmeyebilir.
            </p>
          </article>
          <article>
            <span>Risk</span>
            <h3>Görünür olmamak fırsat maliyeti yaratır.</h3>
            <p>
              Karar vericiler, medya ve iş birlikleri çoğu zaman görünür ve güven
              veren isimlere yönelir.
            </p>
          </article>
          <article className="solution-card">
            <span>Çözüm</span>
            <h3>Name is Brand premium liderlik mimarisi.</h3>
            <p>
              Sizi farklılaştıran uzmanlık alanını, liderlik dilini ve dijital
              temas noktalarını premium bir otorite sisteminde birleştiririz.
            </p>
          </article>
        </div>
      </section>

      <section className="detail-audience detail-section">
        <div className="shell detail-split">
          <div>
            <span className="section-index">02 / Kimler İçin?</span>
            <h2>Uzmanlığını daha yüksek bir etki alanına taşımak isteyenler için.</h2>
            <p>
              Kişisel markasını yalnızca tanıtmak değil, güvenilir bir liderlik
              varlığına dönüştürmek isteyen profesyoneller için tasarlanır.
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
          <h2>Güven, prestij ve fikir liderliğini aynı yapıda toplar.</h2>
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
            <span className="section-index">04 / Liderlik Katmanları</span>
            <h2>Liderlik algısı, tek bir kampanya değil yaşayan bir sistemdir.</h2>
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
              Premium liderlik algısı tek bir kampanyayla oluşmaz. Görünürlük,
              güven, fikir üretimi ve hatırlanabilirlik aynı sistem içinde birlikte
              büyüdüğünde kalıcı hale gelir. Bu yüzden liderlik çalışmasını yalnızca
              tanıtım değil; uzun vadeli bir otorite ve fırsat alanı olarak tasarlarız.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-contact shell detail-section" id="contact">
        <div>
          <span className="section-index">Ön Görüşme</span>
          <h2>Liderlik konumunuzun bugün nasıl algılandığını birlikte değerlendirelim.</h2>
        </div>
        <div>
          <p>
            Ön görüşmede mevcut görünürlüğünüzü, hedeflediğiniz liderlik alanını
            ve premium konumlandırma fırsatlarınızı birlikte çıkarırız.
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
          <span>Premium kişisel marka ve liderlik danışmanlığı</span>
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

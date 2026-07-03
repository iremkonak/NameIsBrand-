import type { Metadata } from "next";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import {
  ArrowRight,
  ArrowUpRight,
  GlobeIcon,
  GridIcon,
  PenIcon,
  SearchIcon,
  ShieldIcon,
  TargetIcon,
} from "@/components/icons";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Kişisel İçerik Mimarisi | Name is Brand",
  description:
    "Uzmanlığınızı güvenilir içerik mimarisi, hedef kitle optimizasyonu ve sürdürülebilir yayın sistemiyle görünür kılan hizmet.",
};

const audience = [
  "Uzmanlığını düzenli içerikle görünür kılmak isteyenler",
  "Web sitesi, medya ve sosyal kanallarında tutarlı anlatı isteyenler",
  "Dijital izini profesyonel kaynaklara dönüştürmek isteyenler",
  "AI ve arama sistemlerinde güçlü bilgi mimarisi hedefleyenler",
];

const gains = [
  {
    title: "Güvenilir Anlatı",
    text: "Uzmanlığınızı rastgele paylaşımlardan çıkarıp stratejik, anlaşılır ve güven veren bir hikayeye bağlar.",
    icon: PenIcon,
  },
  {
    title: "Hedef Kitle Uyumu",
    text: "Kime, hangi mesajla ve hangi kanalda konuşmanız gerektiğini netleştirir.",
    icon: TargetIcon,
  },
  {
    title: "İçerik Sürekliliği",
    text: "Yayın ritmi, konu havuzu ve format yapısı ile görünürlüğü sürdürülebilir kılar.",
    icon: GridIcon,
  },
  {
    title: "Kaynak Değeri",
    text: "İçerikleri arama ve AI sistemleri için referanslanabilir uzmanlık sinyallerine dönüştürür.",
    icon: GlobeIcon,
  },
];

const principles = [
  {
    number: "01",
    title: "Content Architecture",
    text: "Ana mesaj, alt başlıklar, konu kümeleri ve içerik türleri tek bir itibar mimarisi içinde planlanır.",
  },
  {
    number: "02",
    title: "Trustability Design",
    text: "İçerik dili; kanıt, deneyim, uzmanlık ve profesyonel tutarlılık hissini güçlendirecek şekilde kurulur.",
  },
  {
    number: "03",
    title: "Target Audience Optimization",
    text: "Hedef kitlenizin aradığı cevaplar, itirazlar ve karar noktaları içerik sistemine yerleştirilir.",
  },
  {
    number: "04",
    title: "Stronger Than Competitors",
    text: "Rakiplerinizin görünürlük dili analiz edilir; sizi daha net, seçkin ve hatırlanır kılan alanlar çıkarılır.",
  },
];

const faqs = [
  {
    question: "Kişisel içerik mimarisi sosyal medya içerik planı mıdır?",
    answer:
      "Sosyal medya bunun yalnızca bir parçasıdır. İçerik mimarisi; web sitesi, profil metinleri, blog, medya dili, soru-cevap yapısı ve AI tarafından okunabilir uzmanlık kaynaklarını birlikte ele alır.",
  },
  {
    question: "İçerikler tamamen sizin tarafınızdan mı üretilir?",
    answer:
      "Hizmet kapsamına göre strateji, konu planı, metin taslağı, yayın yapısı ve içerik üretimi birlikte planlanabilir. Ön analizde hangi parçaların üretileceği netleştirilir.",
  },
  {
    question: "Bu çalışma neden itibarla bağlantılı?",
    answer:
      "Çünkü insanların sizi nasıl algıladığı çoğu zaman karşılaştıkları içeriklerle şekillenir. Tutarlı ve güvenilir içerik, kişisel itibarın en görünür taşıyıcılarından biridir.",
  },
];

export default function ContentArchitecturePage() {
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
          <span className="section-index">Reputation Architecture</span>
          <h1>
            İçeriğinizi güven
            <br />
            mimarisine <em>dönüştürün.</em>
          </h1>
          <p>
            Uzmanlığınızı anlatan içerikleri, hedef kitlenizin karar sürecine ve
            dijital itibarınıza hizmet eden bütünlüklü bir sisteme dönüştürüyoruz.
          </p>
          <div className="detail-trust-words">
            <span>Content Architecture</span>
            <span>Trustability Design</span>
            <span>Audience Optimization</span>
          </div>
        </div>

        <div className="reputation-emblem" aria-hidden="true">
          <div className="emblem-ring emblem-ring-one" />
          <div className="emblem-ring emblem-ring-two" />
          <div className="emblem-core">
            <PenIcon />
            <strong>Content</strong>
            <span>Reputation Architecture</span>
          </div>
          <span className="emblem-note note-one">Audience</span>
          <span className="emblem-note note-two">Trust</span>
          <span className="emblem-note note-three">Narrative</span>
        </div>
      </section>

      <section className="reputation-intro shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">01 / İçerik Mimarisi</span>
          <h2>Uzmanlığınızı okunabilir, güvenilir ve stratejik hale getiriyoruz.</h2>
        </div>
        <div className="problem-grid">
          <article>
            <span>Problem</span>
            <h3>İçeriğiniz ne anlatıyor?</h3>
            <p>
              Güçlü uzmanlık çoğu zaman dağınık içerikler, kopuk profil metinleri
              ve belirsiz mesajlar içinde görünmez hale gelir.
            </p>
          </article>
          <article>
            <span>Risk</span>
            <h3>Dağınık görünürlük güven kaybettirir.</h3>
            <p>
              Hedef kitle sizi hızlıca anlayamazsa, deneyiminiz ve otoriteniz
              olduğundan daha zayıf algılanabilir.
            </p>
          </article>
          <article className="solution-card">
            <span>Çözüm</span>
            <h3>Name is Brand içerik mimarisi.</h3>
            <p>
              Ana söyleminizi, konu başlıklarınızı, kanıt noktalarınızı ve yayın
              ritminizi tek bir güven sistemi içinde tasarlarız.
            </p>
          </article>
        </div>
      </section>

      <section className="detail-audience detail-section">
        <div className="shell detail-split">
          <div>
            <span className="section-index">02 / Kimler İçin?</span>
            <h2>Uzmanlığı olan ama bunu yeterince güçlü anlatamayanlar için.</h2>
            <p>
              İçeriğini yalnızca paylaşım olarak değil, itibar sermayesi olarak
              kullanmak isteyen profesyonellere özel tasarlanır.
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
          <h2>İçerikleriniz uzmanlığınızı taşıyan dijital kaynaklara dönüşür.</h2>
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
            <span className="section-index">04 / Çalışma Prensipleri</span>
            <h2>İçerik üretmeden önce içerik mimarisi kurarız.</h2>
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
              İyi içerik yalnızca düzenli paylaşım yapmak değildir. Hedef kitlenin
              sizi daha hızlı anlamasını, güvenmesini ve hatırlamasını sağlayan
              stratejik bir kanıt sistemi kurmaktır. Her metin, her başlık ve her
              yayın; uzmanlığınızın neden değerli olduğunu anlatan daha büyük bir
              itibar mimarisine hizmet etmelidir.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-contact shell detail-section" id="contact">
        <div>
          <span className="section-index">Ön Görüşme</span>
          <h2>İçerik sisteminizin bugün ne kadar güven verdiğini birlikte görelim.</h2>
        </div>
        <div>
          <p>
            Ön görüşmede mevcut dijital içeriklerinizi, hedef kitlenizi ve
            anlatınızın güçlü-zayıf noktalarını değerlendirerek ilk yol haritasını çıkarırız.
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
          <span>Premium kişisel marka ve içerik mimarisi</span>
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

import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import { AudienceAccordion } from "@/components/audience-accordion";
import { ScrollProgress } from "@/components/scroll-progress";
import { featuredInsights as insights } from "@/lib/insights";
import {
  ArrowRight,
  ArrowUpRight,
  GlobeIcon,
  GridIcon,
  PenIcon,
  SearchIcon,
  SendIcon,
  ShieldIcon,
  SparkIcon,
  StrategyIcon,
  TargetIcon,
  UserIcon,
} from "@/components/icons";

const services = [
  {
    number: "01",
    eyebrow: "Personal Branding",
    title: "Kişisel Marka",
    description:
      "Personal Name Audit yaklaşımıyla kimliğinizi, uzmanlığınızı ve vizyonunuzu güçlü bir markaya dönüştürüyoruz.",
    prompts: ["Sen kimsin?", "Uzmanlığın ne?", "Vizyonunu nasıl tanımlıyorsun?"],
    icon: UserIcon,
    className: "service-audit",
    href: "/personal-branding",
  },
  {
    number: "02",
    eyebrow: "Personal Reputation Shield",
    title: "Kişisel İtibar Kalkanı",
    description:
      "İsminizi güven, prestij, profesyonel sadakat ve güçlü bir dijital görünürlük ile koruyoruz.",
    prompts: ["İsminiz güven veriyor mu?", "Prestij algınız güçlü mü?", "Dijital riskleriniz neler?"],
    icon: ShieldIcon,
    className: "service-shield",
    href: "/personal-reputation",
  },
  {
    number: "03",
    eyebrow: "Reputation Architecture",
    title: "Kişisel İçerik Mimarisi",
    description:
      "Güvenilir içerik tasarımı, hedef kitle optimizasyonu ve güçlü bir anlatı sistemi oluşturuyoruz.",
    prompts: ["Kime konuşuyorsunuz?", "İçeriğiniz güven veriyor mu?", "Rakiplerinizden güçlü müsünüz?"],
    icon: PenIcon,
    className: "service-architecture",
    href: "/content-architecture",
  },
  {
    number: "04",
    eyebrow: "Personal Premium Leadership",
    title: "Kişisel Premium Liderlik",
    description:
      "Uzmanlık, güven ve fikir liderliğinizi ulusal ve uluslararası ölçekte görünür hale getiriyoruz.",
    prompts: ["Market leadership", "Thought leadership", "Top of mind leadership"],
    icon: TargetIcon,
    className: "service-leadership",
    href: "/premium-leadership",
  },
  {
    number: "05",
    eyebrow: "AI Visibility System",
    title: "Yapay Zeka Görünürlük Sistemi",
    description:
      "Profilinizi yapay zeka sistemlerinin anlayacağı, kaynaklandıracağı ve güvenle önereceği bir yapıya hazırlıyoruz.",
    prompts: ["AI sizi nasıl tanımlıyor?", "Soru-cevap otoriteniz var mı?", "Makine diline hazır mısınız?"],
    icon: SparkIcon,
    className: "service-ai",
    href: "/personal-ai",
  },
];

const stages = [
  { number: "01", title: "Ön Analiz", text: "Mevcut dijital izinizi ve fırsat alanlarını keşfederiz.", icon: SearchIcon },
  { number: "02", title: "Strateji", text: "Size özel marka ve itibar yol haritasını oluştururuz.", icon: StrategyIcon },
  { number: "03", title: "Mimari", text: "Mesaj, içerik ve dijital varlık yapınızı kurarız.", icon: GridIcon },
  { number: "04", title: "Üretim", text: "İçeriklerinizi ve tüm dijital varlıklarınızı üretiriz.", icon: PenIcon },
  { number: "05", title: "Yayın", text: "Doğru kanallarda, doğru zamanlama ile görünür kılarız.", icon: SendIcon },
  { number: "06", title: "Takip", text: "Algıyı ölçer, izler ve sürekli geliştirmeyi sürdürürüz.", icon: TargetIcon },
];

const audiences = [
  {
    title: "Üst Düzey Yöneticiler",
    need:
      "Karar verici pozisyonlardaki profesyoneller için dijital iz, güven ve liderlik algısı kariyer sermayesinin parçasıdır.",
    outcome:
      "NAB; yöneticinin uzmanlık alanını, liderlik dilini ve arama görünürlüğünü daha tutarlı bir otorite mimarisine dönüştürür.",
    tags: ["Liderlik Algısı", "Güven", "Global Profil"],
  },
  {
    title: "Doktorlar ve Akademisyenler",
    need:
      "Uzmanlık görünür değilse hasta, öğrenci, kurum veya medya nezdinde güven potansiyeli eksik kalabilir.",
    outcome:
      "Akademik birikim, uzmanlık alanı ve dijital kaynaklar; güven veren, anlaşılır ve profesyonel bir kişisel markaya bağlanır.",
    tags: ["Uzmanlık", "Bilimsel Güven", "AI Temsil"],
  },
  {
    title: "Hukuk Profesyonelleri",
    need:
      "Hukuk alanında itibar, uzmanlık ve güven algısı çoğu zaman ilk temas kurulmadan önce dijitalde oluşur.",
    outcome:
      "Hukuki uzmanlık alanları, profesyonel duruş ve görünürlük dili mahremiyet ve etik çerçevede yapılandırılır.",
    tags: ["Saygınlık", "Mahremiyet", "Profesyonel Duruş"],
  },
  {
    title: "Sanatçılar ve Sporcular",
    need:
      "Kamuya açık figürlerde marka algısı hızlı değişir; görünürlük güçlü olsa bile itibar ve hikaye kontrolü zayıf kalabilir.",
    outcome:
      "Kişisel hikaye, medya dili ve dijital varlıklar; uzun vadeli prestij ve güven algısını destekleyecek şekilde düzenlenir.",
    tags: ["Hikaye", "Medya Algısı", "Prestij"],
  },
  {
    title: "Girişimciler ve İş İnsanları",
    need:
      "Yatırım, ortaklık ve müşteri güveni çoğu zaman kurucunun ya da iş insanının kişisel itibarıyla başlar.",
    outcome:
      "Kurucu profili, sektör liderliği ve dijital güven sinyalleri; markanın ticari hedefleriyle aynı çizgiye getirilir.",
    tags: ["Founder Brand", "Yatırımcı Güveni", "Sektör Liderliği"],
  },
  {
    title: "Kamuya Açık Profesyoneller",
    need:
      "Görünürlük arttıkça yanlış anlaşılma, eksik temsil ve kontrolsüz dijital iz riski de artar.",
    outcome:
      "Kişinin dijital kimliği; güven, itibar, AI görünürlüğü ve kriz riskleri açısından daha kontrollü bir yapıya taşınır.",
    tags: ["İtibar Kalkanı", "Risk Kontrolü", "Görünürlük"],
  },
];

export default function Home() {
  return (
    <main id="top">
      <ScrollProgress />
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <Header />

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            Kişisel marka · İtibar · Yapay zeka görünürlüğü
          </div>
          <h1>
            Your Name
            <br />
            is <em>Brand.</em>
          </h1>
          <p className="hero-statement">Your reputation is capital.</p>
          <p className="hero-description">
            Üst düzey profesyoneller ve kamuya açık kişiler için kişisel marka,
            dijital itibar ve yapay zeka çağında görünürlük stratejileri.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/on-gorusme">
              Ön Görüşme Talep Et
              <ArrowUpRight />
            </a>
            <a className="text-link" href="#system">
              <span className="play-button">▶</span>
              NAB Sistemini Keşfet
            </a>
          </div>
        </div>

        <div className="identity-visual" aria-label="Dijital kimlik katmanları görseli">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="identity-core">
            <span className="core-label">Digital Identity</span>
            <strong>N</strong>
            <small>Trust · Authority · Visibility</small>
          </div>
          <div className="signal signal-one">
            <span>01</span>
            Brand Audit
          </div>
          <div className="signal signal-two">
            <span>02</span>
            Reputation Shield
          </div>
          <div className="signal signal-three">
            <span>03</span>
            Content Architecture
          </div>
          <div className="signal signal-four">
            <span>04</span>
            Premium Leadership
          </div>
          <div className="signal signal-five">
            <span>05</span>
            AI Visibility
          </div>
          <div className="visual-caption">
            <span>Personal presence architecture</span>
            <span>IST · Global</span>
          </div>
        </div>

        <div className="hero-proof">
          <div className="proof-experience">
            <span className="proof-medal" aria-hidden="true">
              <span>16</span>
            </span>
            <span className="proof-copy">
              <strong>16 Yıllık</strong>
              Dijital Deneyim
            </span>
          </div>
          <div className="proof-system">
            <strong>06</strong>
            <span>Aşamalı NAB Sistemi</span>
          </div>
          <div>
            <ShieldIcon />
            <span>Gizlilik odaklı süreç</span>
          </div>
          <div>
            <GlobeIcon />
            <span>Global bakış açısı</span>
          </div>
        </div>
      </section>

      <section className="services shell section" id="services">
        <div className="section-heading">
          <div>
            <span className="section-index">01 / Hizmetler</span>
            <h2>İsminizin dijital<br />sermayesini inşa ediyoruz.</h2>
          </div>
          <p>
            İsim, itibar ve görünürlük birbirinden ayrı değil; güçlü bir dijital
            varlığın birbirini besleyen katmanlarıdır.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, ...service }) => (
            <article className={`service-card ${service.className}`} key={service.number}>
              <div className="card-topline">
                <span>{service.number}</span>
                <Icon />
              </div>
              <div>
                <span className="card-eyebrow">{service.eyebrow}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-prompts" aria-label="Analiz başlıkları">
                  {service.prompts.map((prompt) => (
                    <span key={prompt}>{prompt}</span>
                  ))}
                </div>
              </div>
              <a href={service.href} aria-label={`${service.eyebrow} hakkında bilgi alın`}>
                Yaklaşımı Keşfet <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto section" id="manifesto">
        <div className="manifesto-inner shell">
          <div className="manifesto-meta">
            <span>02 / Manifesto</span>
            <span>Name is Brand®</span>
          </div>
          <p className="manifesto-kicker">Görünür olmak yeterli değil.</p>
          <h2>
            İsminiz duyulduğunda oluşan algı,
            <em> en değerli varlığınızdır.</em>
          </h2>
          <div className="manifesto-bottom">
            <p>
              Dijital dünyadaki her temas noktanızı aynı stratejik anlatının
              parçası haline getiriyoruz.
            </p>
            <a className="circle-link" href="#system" aria-label="NAB yaklaşımını keşfet">
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="system shell section" id="system">
        <div className="section-heading system-heading">
          <div>
            <span className="section-index">03 / NAB System</span>
            <h2>Stratejik, ölçülebilir<br />ve size özel.</h2>
          </div>
          <p>
            Ön analizden sürekli takibe uzanan altı aşamalı sistemimizle kişisel
            markanızı bir proje değil, yaşayan bir değer olarak yönetiyoruz.
          </p>
        </div>

        <div className="stage-track">
          {stages.map(({ icon: Icon, ...stage }) => (
            <article className="stage" key={stage.number}>
              <div className="stage-icon">
                <Icon />
              </div>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="audience section">
        <div className="audience-inner shell">
          <div className="audience-copy">
            <span className="section-index">04 / Kimler İçin?</span>
            <h2>Uzmanlığı görünür,<br />etkisi kalıcı olanlar için.</h2>
            <p>
              İsmini bir güven işaretine dönüştürmek ve alanında güçlü bir
              konum yaratmak isteyen profesyonellerle çalışıyoruz.
            </p>
            <a className="button button-outline" href="/on-gorusme">
              Uygunluğunuzu Değerlendirelim
              <ArrowUpRight />
            </a>
          </div>
          <AudienceAccordion audiences={audiences} />
        </div>
      </section>

      <section className="insights shell section" id="insights">
        <div className="section-heading">
          <div>
            <span className="section-index">05 / İçgörüler</span>
            <h2>İsim, güven ve<br />gelecek üzerine.</h2>
          </div>
          <a className="text-link simple" href="/blog">
            Tüm Yazıları Gör <ArrowRight />
          </a>
        </div>
        <div className="insight-grid">
          {insights.map((insight) => (
            <article className="insight-card" key={insight.index}>
              <div className="insight-art">
                <span>{insight.index}</span>
                <div className={`insight-shape shape-${insight.index}`} />
                <div className="insight-cover-copy">
                  <small>NB Insight</small>
                  <strong>{insight.coverWords[0]}</strong>
                  <em>{insight.coverWords.slice(1).join(" · ")}</em>
                </div>
              </div>
              <span className="card-eyebrow">{insight.category}</span>
              <h3>{insight.title}</h3>
              <p>{insight.excerpt}</p>
              <a href={insight.href}>
                Makaleyi Oku <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orbit orbit-a" />
        <div className="contact-orbit orbit-b" />
        <div className="contact-inner shell">
          <span className="section-index">Ön Görüşme</span>
          <h2>
            İsminizin geleceğini
            <br />
            birlikte <em>tasarlayalım.</em>
          </h2>
          <p>
            İhtiyaçlarınızı anlamak ve size özel yol haritasını konuşmak için
            ön görüşme talep edin.
          </p>
          <a className="button button-primary button-large" href="/on-gorusme">
            Ön Görüşme Talep Et
            <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-brand">
          <BrandLogo compact />
          <p>Personal branding starts with your name.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Keşfet</span>
            <a href="#services">Hizmetler</a>
            <a href="#system">NAB System</a>
            <a href="#insights">İçgörüler</a>
          </div>
          <div>
            <span>İletişim</span>
            <a href="mailto:nameisbrandcom@gmail.com">nameisbrandcom@gmail.com</a>
            <a href="tel:+905436617710">0543 661 77 10</a>
            <a href="https://wa.me/905436617710" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="/on-gorusme">Ön Görüşme</a>
            <a href="https://www.instagram.com/nameisbrandcom/" target="_blank" rel="noreferrer">
              Instagram · @nameisbrandcom
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Name is Brand. Tüm hakları saklıdır.</span>
          <div>
            <a href="/kvkk">Gizlilik</a>
            <a href="/kvkk">KVKK</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

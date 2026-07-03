import type { Metadata } from "next";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import {
  ArrowRight,
  ArrowUpRight,
  GlobeIcon,
  GridIcon,
  SearchIcon,
  ShieldIcon,
  SparkIcon,
  TargetIcon,
} from "@/components/icons";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Personal AI | Name is Brand",
  description:
    "Yapay zeka çağında isminizin doğru, güvenilir ve güçlü biçimde temsil edilmesini sağlayan AI görünürlük sistemi.",
};

const audience = [
  "Alanında uzman ve kamuya açık profesyoneller",
  "Doktorlar, akademisyenler ve danışmanlar",
  "Yöneticiler, girişimciler ve fikir liderleri",
  "Ulusal veya global görünürlük hedefleyen kişiler",
];

const gains = [
  {
    title: "Profil Görünürlüğü",
    text: "Uzmanlığınızı açık, tutarlı ve dijital sistemlerin anlayabileceği bir yapıya dönüştürür.",
    icon: SearchIcon,
  },
  {
    title: "Soru-Cevap Otoritesi",
    text: "Alanınızla ilgili sorularda isminizi güvenilir bir uzmanlık kaynağı olarak konumlandırır.",
    icon: TargetIcon,
  },
  {
    title: "Makine Dili Uyumu",
    text: "İçeriklerinizi arama ve yapay zeka sistemlerinin okuyabileceği bilgi mimarisine hazırlar.",
    icon: GridIcon,
  },
  {
    title: "Kaynak Ekosistemi",
    text: "Dijital varlıklarınız arasında doğrulanabilir, birbirini destekleyen bir uzmanlık ağı kurar.",
    icon: GlobeIcon,
  },
];

const boundaries = [
  {
    number: "01",
    title: "Gerçek Uzmanlık",
    text: "Sistem, var olmayan bir otorite üretmez; gerçek deneyim ve doğrulanabilir uzmanlık üzerine kurulur.",
  },
  {
    number: "02",
    title: "Etik Görünürlük",
    text: "Yanıltıcı içerik, sahte kaynak veya yapay referans kullanılmadan sürdürülebilir görünürlük hedeflenir.",
  },
  {
    number: "03",
    title: "Kontrollü Temsil",
    text: "Kişisel veriler, içerikler ve dijital kaynaklar yalnızca onaylanan kapsam içinde yönetilir.",
  },
];

const faqs = [
  {
    question: "Yapay zeka çağında isim temsili neden önemlidir?",
    answer:
      "İnsanlar artık yalnızca arama motorlarından değil, yapay zeka asistanlarından da uzman ve hizmet önerileri alıyor. İsminizin doğru kaynaklarla ve tutarlı bilgilerle temsil edilmesi bu nedenle giderek daha önemli hale geliyor.",
  },
  {
    question: "AI sistemlerinde görünürlük garanti edilebilir mi?",
    answer:
      "Hayır. Hiçbir danışmanlık belirli bir yapay zeka cevabını garanti edemez. Çalışma; doğru bilgi mimarisi, güvenilir kaynaklar ve güçlü dijital sinyaller oluşturarak görünürlük ihtimalini artırmayı hedefler.",
  },
  {
    question: "Bu çalışma klasik SEO ile aynı mı?",
    answer:
      "SEO önemli bir parçadır ancak Personal AI daha geniştir. İçerik yapısı, uzmanlık varlıkları, kaynak tutarlılığı, soru-cevap otoritesi ve makine tarafından okunabilir temsil birlikte ele alınır.",
  },
];

export default function PersonalAIPage() {
  return (
    <main id="top" className="detail-page ai-detail-page">
      <ScrollProgress />
      <Header />

      <section className="detail-hero ai-detail-hero shell">
        <div className="detail-hero-copy">
          <a className="detail-back" href="/#services">
            <ArrowRight />
            Hizmetlere Dön
          </a>
          <span className="section-index">Personal AI Visibility System</span>
          <h1>
            Yapay zeka çağında
            <br />
            kişisel <em>temsil.</em>
          </h1>
          <p>
            İsminizi, uzmanlığınızı ve dijital kaynaklarınızı yapay zeka
            sistemlerinin doğru anlayacağı ve güvenilir biçimde
            ilişkilendireceği bir yapıya dönüştürüyoruz.
          </p>
          <div className="detail-trust-words">
            <span>Okunabilir</span>
            <span>Doğrulanabilir</span>
            <span>Güvenilir</span>
          </div>
        </div>

        <div className="ai-network" aria-label="Yapay zeka görünürlük ağı">
          <div className="ai-network-grid" />
          <div className="ai-node ai-node-core">
            <SparkIcon />
            <strong>YOUR NAME</strong>
            <span>Entity Based Expertise</span>
          </div>
          <div className="ai-node ai-node-profile">Profile</div>
          <div className="ai-node ai-node-content">Content</div>
          <div className="ai-node ai-node-authority">Authority</div>
          <div className="ai-node ai-node-source">Sources</div>
          <span className="ai-line line-one" />
          <span className="ai-line line-two" />
          <span className="ai-line line-three" />
          <span className="ai-line line-four" />
        </div>
      </section>

      <section className="reputation-intro shell detail-section">
        <div className="detail-section-heading">
          <span className="section-index">01 / Personal AI Sistemi</span>
          <h2>Yapay zeka gözünde kişisel isim temsilinizi oluşturun.</h2>
        </div>
        <div className="problem-grid">
          <article>
            <span>Problem</span>
            <h3>AI çağında isim temsili neden önemlidir?</h3>
            <p>
              Yapay zeka platformları sizin hakkınızdaki bilgileri farklı
              kaynaklardan birleştirir ve kullanıcıya tek bir cevap olarak sunar.
            </p>
          </article>
          <article>
            <span>Risk</span>
            <h3>Eksik veya yanlış temsil neye yol açabilir?</h3>
            <p>
              Tutarsız kaynaklar uzmanlığınızın yanlış anlaşılmasına, eksik
              anlatılmasına veya güvenilir kişilerle ilişkilendirilmemesine neden olabilir.
            </p>
          </article>
          <article className="solution-card ai-solution-card">
            <span>Çözüm</span>
            <h3>Name is Brand Personal AI sistemi.</h3>
            <p>
              Uzmanlık profilinizi, içeriklerinizi ve kaynak ağınızı makinelerin
              anlayabileceği tutarlı bir bilgi mimarisinde birleştiririz.
            </p>
          </article>
        </div>
      </section>

      <section className="detail-audience ai-audience detail-section">
        <div className="shell detail-split">
          <div>
            <span className="section-index">02 / Kimler İçin?</span>
            <h2>Uzmanlığının gelecekte de doğru anlaşılmasını isteyenler için.</h2>
            <p>
              Dijital bilgi kaynaklarında yer alan ve yapay zeka çağında otorite
              konumunu güçlendirmek isteyen profesyonellere özel tasarlanır.
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
          <h2>Dijital uzmanlığınızı makine tarafından okunabilir kılar.</h2>
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

      <section className="ethics ai-boundaries detail-section">
        <div className="shell">
          <div className="ethics-heading">
            <span className="section-index">04 / Gerçekçi ve Etik Sınırlar</span>
            <h2>Görünürlük vaat değil, güvenilir bir altyapı işidir.</h2>
            <ShieldIcon />
          </div>
          <div className="principle-grid">
            {boundaries.map((boundary) => (
              <article key={boundary.number}>
                <span>{boundary.number}</span>
                <h3>{boundary.title}</h3>
                <p>{boundary.text}</p>
              </article>
            ))}
            <p className="principle-summary">
              AI görünürlüğü hızlı bir hile ya da tek seferlik bir optimizasyon
              değildir. Doğru kaynakların, tutarlı bilgi mimarisinin ve gerçek
              uzmanlık sinyallerinin zaman içinde birlikte çalışması gerekir. Amaç,
              yapay zekanın sizi abartılı değil; doğru, güvenilir ve referanslanabilir
              şekilde anlamasını sağlamaktır.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-contact shell detail-section" id="contact">
        <div>
          <span className="section-index">Ön Görüşme</span>
          <h2>Yapay zeka sistemlerinin sizi bugün nasıl gördüğünü değerlendirelim.</h2>
        </div>
        <div>
          <p>
            Mevcut dijital kaynaklarınızı ve uzmanlık sinyallerinizi inceleyerek
            Personal AI yol haritanızın ilk çerçevesini oluşturalım.
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
          <h2>Personal AI hakkında.</h2>
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
          <p>Personal visibility in the age of AI.</p>
        </div>
        <div className="detail-footer-meta">
          <GlobeIcon />
          <span>AI çağında premium kişisel temsil</span>
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

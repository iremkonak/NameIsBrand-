import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import { ArrowRight, ArrowUpRight, GlobeIcon } from "@/components/icons";
import { ScrollProgress } from "@/components/scroll-progress";
import { getInsightBySlug, insights } from "@/lib/insights";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Makale Bulunamadı | Name is Brand",
    };
  }

  return {
    title: `${insight.title} | Name is Brand`,
    description: insight.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return (
    <main id="top" className="blog-article-page">
      <ScrollProgress />
      <Header />

      <article className="blog-article shell">
        <a className="detail-back" href="/blog">
          <ArrowRight />
          İçgörülere Dön
        </a>

        <header className="article-header">
          <div>
            <span className="section-index">{insight.category}</span>
            <h1>{insight.title}</h1>
            <p>{insight.excerpt}</p>
            <div className="article-meta">
              <span>{insight.index}</span>
              <span>{insight.readTime}</span>
              <span>Name is Brand</span>
            </div>
          </div>
          <div className="article-cover" aria-hidden="true">
            <span>{insight.index}</span>
            <div className={`insight-shape shape-${insight.index}`} />
            <div className="insight-cover-copy">
              <small>NB Insight</small>
              <strong>{insight.coverWords[0]}</strong>
              <em>{insight.coverWords.slice(1).join(" · ")}</em>
            </div>
          </div>
        </header>

        <div className="article-body">
          {insight.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="article-sources">
          <span className="section-index">Kaynaklar</span>
          <p>
            Metinler Name is Brand için özgün yazılmıştır. Aşağıdaki kaynaklar
            içerik yaklaşımı ve kavramsal doğrulama için dikkate alınmıştır.
          </p>
          <div>
            {insight.sources.map((source) => (
              <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
                {source.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </section>

        <section className="article-cta">
          <div>
            <span className="section-index">Ön Görüşme</span>
            <h2>Bu başlığı kendi isminiz için değerlendirelim.</h2>
          </div>
          <a className="button button-primary" href="/on-gorusme">
            Ön Görüşme Talep Et
            <ArrowUpRight />
          </a>
        </section>
      </article>

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

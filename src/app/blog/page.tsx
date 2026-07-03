import type { Metadata } from "next";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import { ArrowRight, ArrowUpRight, GlobeIcon } from "@/components/icons";
import { ScrollProgress } from "@/components/scroll-progress";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "İçgörüler | Name is Brand",
  description:
    "Kişisel marka, dijital itibar ve yapay zeka görünürlüğü üzerine Name is Brand içgörüleri.",
};

export default function BlogPage() {
  return (
    <main id="top" className="blog-page">
      <ScrollProgress />
      <Header />

      <section className="blog-hero shell">
        <a className="detail-back" href="/#insights">
          <ArrowRight />
          Ana Sayfaya Dön
        </a>
        <span className="section-index">Name is Brand Insights</span>
        <h1>
          İsim, güven ve
          <br />
          gelecek üzerine <em>notlar.</em>
        </h1>
        <p>
          Kişisel marka, dijital itibar ve AI görünürlüğü konularını; premium
          temsil, güven ve stratejik görünürlük perspektifiyle ele alıyoruz.
        </p>
      </section>

      <section className="blog-list shell">
        {insights.map((insight) => (
          <article className="blog-list-card" key={insight.slug}>
            <div className="blog-list-index">{insight.index}</div>
            <div>
              <span className="card-eyebrow">{insight.category}</span>
              <h2>{insight.title}</h2>
              <p>{insight.excerpt}</p>
              <div className="blog-card-meta">
                <span>{insight.readTime}</span>
                <span>{insight.coverWords.join(" · ")}</span>
              </div>
            </div>
            <a href={insight.href} aria-label={`${insight.title} makalesini oku`}>
              Makaleyi Oku
              <ArrowUpRight />
            </a>
          </article>
        ))}
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

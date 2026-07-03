export type InsightSource = {
  label: string;
  url: string;
};

export type InsightSection = {
  heading: string;
  body: string[];
};

export type Insight = {
  slug: string;
  href: string;
  category: string;
  title: string;
  excerpt: string;
  index: string;
  readTime: string;
  coverWords: string[];
  sections: InsightSection[];
  sources: InsightSource[];
};

export const insights: Insight[] = [
  {
    slug: "doktorlar-ve-uzmanlar-icin-kisisel-marka",
    href: "/blog/doktorlar-ve-uzmanlar-icin-kisisel-marka",
    category: "Kişisel Marka",
    title: "Doktorlar ve uzmanlar için kişisel marka neden kritik?",
    excerpt:
      "Uzmanlık güvenle başlar. Dijitalde doğru temsil edilmeyen bir uzmanlık, karar anında görünmez kalabilir.",
    index: "01",
    readTime: "4 dk okuma",
    coverWords: ["Expertise", "Trust", "Name Audit"],
    sections: [
      {
        heading: "Uzmanlık görünür değilse güven eksik kalır",
        body: [
          "Doktorlar, akademisyenler ve uzman profesyoneller için kişisel marka bir gösteriş alanı değildir. Hastanın, öğrencinin, kurumun veya medyanın uzmanla karşılaşmadan önce yaptığı ilk güven değerlendirmesidir.",
          "Bir kişinin deneyimi güçlü olabilir; fakat arama sonuçları, profil metinleri, web sitesi ve içerikleri bu deneyimi doğru anlatmıyorsa dijital algı eksik kalır. Name is Brand yaklaşımı bu boşluğu kapatmayı hedefler.",
        ],
      },
      {
        heading: "Kişisel marka, uzmanlığın mimarisidir",
        body: [
          "İyi bir kişisel marka; unvan, fotoğraf veya logo ile sınırlı değildir. Hangi konuda uzman olduğunuz, kime değer sunduğunuz, hangi etik sınırlar içinde çalıştığınız ve neden güvenilir olduğunuz net biçimde anlaşılmalıdır.",
          "Bu nedenle Personal Name Audit aşamasında uzmanlık alanı, hedef kitle, mevcut dijital iz ve gelecek hedefleri birlikte değerlendirilir.",
        ],
      },
      {
        heading: "Güven dili sade ve kanıtlanabilir olmalıdır",
        body: [
          "Sağlık, hukuk, akademi ve danışmanlık gibi güvene dayalı alanlarda abartılı dil ters etki yaratabilir. Premium algı; sakin, açık, tutarlı ve doğrulanabilir bir anlatı ile kurulur.",
          "Amaç daha çok görünmek değil, doğru yerde doğru güven sinyalini üretmektir.",
        ],
      },
    ],
    sources: [
      {
        label: "Google Search Central - Helpful, reliable, people-first content",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
  },
  {
    slug: "google-da-isminiz-arandiginda-hangi-algi-olusuyor",
    href: "/blog/google-da-isminiz-arandiginda-hangi-algi-olusuyor",
    category: "Dijital İtibar",
    title: "Google’da isminiz arandığında hangi algı oluşuyor?",
    excerpt:
      "İsminiz arandığında çıkan sonuçlar, siz konuşmadan önce sizin hakkınızda konuşmaya başlar.",
    index: "02",
    readTime: "5 dk okuma",
    coverWords: ["Reputation", "Search", "Authority"],
    sections: [
      {
        heading: "Arama sonucu artık dijital kartvizit değil, algı haritası",
        body: [
          "Bir profesyonelin ismi arandığında görünen sonuçlar, yalnızca bilgi listesi değildir. Web sitesi, sosyal profiller, haberler, eski içerikler ve eksik bilgiler birlikte bir algı oluşturur.",
          "Bu algı bazen kişinin gerçek uzmanlığını destekler, bazen de olduğundan daha zayıf veya dağınık gösterir.",
        ],
      },
      {
        heading: "Eksik bilgi de bir mesajdır",
        body: [
          "Arama sonucunda güçlü, güncel ve tutarlı kaynaklar yoksa kullanıcı zihninde boşluk oluşur. Bu boşluk, özellikle güvene dayalı mesleklerde fırsat kaybına dönüşebilir.",
          "Dijital itibar çalışması bu yüzden sadece negatif içerik yönetimi değildir. Pozitif, doğru ve profesyonel temsil alanlarını sistemli biçimde kurma işidir.",
        ],
      },
      {
        heading: "İtibar kalkanı görünürlüğü filtreler",
        body: [
          "Her bilginin görünür olması gerekmez. Hangi içeriğin öne çıkacağı, hangi bilginin sadeleşeceği ve hangi temas noktalarının güçlendirileceği stratejik olarak seçilmelidir.",
          "Name is Brand, ismi bir güven işaretine dönüştürmek için arama görünürlüğünü marka dili, içerik mimarisi ve profesyonel temsil ile birlikte ele alır.",
        ],
      },
    ],
    sources: [
      {
        label: "Google Search Central - Helpful, reliable, people-first content",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
  },
  {
    slug: "yapay-zeka-sistemleri-sizi-nasil-tanimliyor",
    href: "/blog/yapay-zeka-sistemleri-sizi-nasil-tanimliyor",
    category: "Personal AI",
    title: "Yapay zeka sistemleri sizi nasıl tanımlıyor?",
    excerpt:
      "AI çağında görünürlük, yalnızca arama motorlarında bulunmak değil; makineler tarafından doğru anlaşılmaktır.",
    index: "03",
    readTime: "5 dk okuma",
    coverWords: ["AI Visibility", "Entity", "Trust"],
    sections: [
      {
        heading: "AI sizi tek bir kaynaktan değil, izlerden okur",
        body: [
          "Yapay zeka sistemleri bir kişi veya uzmanlık alanı hakkında cevap üretirken farklı kaynaklardan gelen sinyalleri birlikte değerlendirir. Profil metinleri, web sitesi, yayınlar, soru-cevap içerikleri ve dijital referanslar bu temsilin parçası olabilir.",
          "Bu yüzden Personal AI çalışması, tek bir sayfayı optimize etmekten daha geniştir. Kişinin dijital kimliğini makinelerin anlayabileceği tutarlı bir bilgi mimarisine dönüştürmeyi hedefler.",
        ],
      },
      {
        heading: "Yanlış temsil sessizce oluşabilir",
        body: [
          "Uzmanlık alanınız net değilse, kaynaklarınız dağınıksa veya içerikleriniz eskiyse AI sistemleri sizi eksik, belirsiz ya da yanlış bağlamda yorumlayabilir.",
          "Bu risk özellikle kamuya açık profesyoneller, danışmanlar, akademisyenler ve liderlik hedefleyen kişiler için önemlidir.",
        ],
      },
      {
        heading: "Amaç garanti değil, güvenilir altyapıdır",
        body: [
          "Hiçbir çalışma belirli bir yapay zeka cevabını garanti edemez. Sağlıklı yaklaşım; gerçek uzmanlığı, tutarlı kaynakları ve anlaşılır içerik yapısını güçlendirmektir.",
          "Name is Brand bu alanı etik görünürlük, kaynak tutarlılığı ve uzmanlık sinyalleri üzerinden ele alır.",
        ],
      },
    ],
    sources: [
      {
        label: "Google Search Central - Google Search guidance about AI-generated content",
        url: "https://developers.google.com/search/blog/2023/02/google-search-and-ai-content",
      },
      {
        label: "Google Search Central - Helpful, reliable, people-first content",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
  },
];

export const featuredInsights = insights.slice(0, 3);

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

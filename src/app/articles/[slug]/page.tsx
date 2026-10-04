import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { ARTICLES } from "@/lib/articles";
import { absoluteUrl, pageMetadata, serializeJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() { return ARTICLES.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = ARTICLES.find((item) => item.slug === params.slug);
  return article ? pageMetadata({
    path: `/articles/${article.slug}`,
    title: article.title,
    description: article.excerpt,
    image: article.image,
    imageAlt: `ภาพประกอบบทความ ${article.title}`,
    type: "article",
  }) : {};
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((item) => item.slug === params.slug);
  if (!article) notFound();
  const currentIndex = ARTICLES.findIndex((item) => item.slug === article.slug);
  const nextArticles = [...ARTICLES.slice(currentIndex + 1), ...ARTICLES.slice(0, currentIndex)].slice(0, 2);
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.image),
    mainEntityOfPage: absoluteUrl(`/articles/${article.slug}`),
    author: { "@type": "Organization", name: SITE.name, url: absoluteUrl("/") },
    publisher: { "@id": absoluteUrl("/#business") },
  };
  return (
    <article className="section-wrap max-w-4xl py-12 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleLd) }} />
      <Link href="/articles" className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:underline"><HiChevronLeft aria-hidden="true" /> กลับไปหน้าบทความ</Link>
      <p className="eyebrow mt-10">{article.category}</p>
      <h1 className="mt-4 text-3xl font-extrabold leading-tight text-brand-900 md:text-5xl">{article.title}</h1>
      <p className="mt-3 text-sm font-semibold text-slate-500">โดยทีมช่างนุ</p>
      <p className="body-copy mt-5 text-lg">{article.excerpt}</p>
      <div className="relative mt-9 h-[320px] overflow-hidden rounded-[2rem] md:h-[440px]"><Image src={article.image} alt={`ภาพประกอบบทความ ${article.title}`} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" /></div>
      <div className="mx-auto mt-12 max-w-2xl space-y-10">{article.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-extrabold text-brand-900">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="body-copy mt-4">{paragraph}</p>)}</section>)}</div>
      <aside className="mx-auto mt-14 max-w-2xl border-t border-brand-900/10 pt-10" aria-labelledby="next-articles-title">
        <p className="eyebrow">READ NEXT</p>
        <h2 id="next-articles-title" className="mt-2 text-2xl font-extrabold text-brand-900">บทความถัดไปที่น่าสนใจ</h2>
        <div className="mt-6 divide-y divide-[#ecece6] rounded-2xl border border-[#ecece6] bg-white px-4 sm:px-6">
          {nextArticles.map((nextArticle) => (
            <Link key={nextArticle.slug} href={`/articles/${nextArticle.slug}`} className="group flex items-center gap-4 py-4">
              <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-[#f2f1ec] sm:h-24 sm:w-32">
                <Image src={nextArticle.image} alt="" fill sizes="(max-width: 640px) 96px, 128px" className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="min-w-0">
                <h3 className="line-clamp-2 text-sm font-extrabold leading-6 text-brand-900 transition group-hover:text-brand-600 sm:text-base">{nextArticle.title}</h3>
                <p className="mt-2 text-xs text-slate-400">{nextArticle.category} · โดยทีมช่างนุ</p>
              </div>
              <HiChevronRight aria-hidden="true" className="ml-auto hidden shrink-0 text-xl text-brand-600 sm:block" />
            </Link>
          ))}
        </div>
        <Link href="/articles" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:underline">ดูบทความทั้งหมด <HiChevronRight aria-hidden="true" /></Link>
      </aside>
      <div className="mx-auto mt-14 max-w-2xl rounded-3xl bg-brand-50 p-7"><h2 className="text-xl font-extrabold text-brand-900">ต้องการให้ช่างช่วยดู?</h2><p className="mt-2 text-sm leading-7 text-slate-600">แจ้งอาการและพื้นที่หน้างาน ทีมช่างนุพร้อมให้คำปรึกษา</p><a href={SITE.phones[0].href} className="btn-primary mt-5">โทร {SITE.phones[0].label}<HiChevronRight aria-hidden="true" /></a></div>
    </article>
  );
}

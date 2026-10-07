import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HiArrowUpRight,
  HiCheck,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { ArticleCard } from "@/components/ArticleCard";
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

function readingMinutes(paragraphs: string[][]): number {
  const chars = paragraphs.flat().join("").length;
  return Math.max(2, Math.round(chars / 700));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((item) => item.slug === params.slug);
  if (!article) notFound();
  const currentIndex = ARTICLES.findIndex((item) => item.slug === article.slug);
  const related = [...ARTICLES.slice(currentIndex + 1), ...ARTICLES.slice(0, currentIndex)].slice(0, 2);
  const minutes = readingMinutes(article.sections.map((s) => s.paragraphs));
  const pageUrl = absoluteUrl(`/articles/${article.slug}`);
  const shareLinks = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}` },
    { label: "LINE", href: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(pageUrl)}` },
  ];

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleLd) }} />

      {/* ── 1. Hero — breadcrumb + title + meta ── */}
      <section className="bg-white">
        <div className="section-wrap max-w-7xl py-10 md:py-16">
          <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-slate-400">
            <Link href="/" className="transition hover:text-brand-600">หน้าแรก</Link>
            <HiChevronRight aria-hidden="true" className="text-[10px]" />
            <Link href="/articles" className="transition hover:text-brand-600">บทความ</Link>
            <HiChevronRight aria-hidden="true" className="text-[10px]" />
            <span className="max-w-[220px] truncate text-brand-900 sm:max-w-none">{article.title}</span>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-900/10 bg-[#faf9f6] px-4 py-1.5 text-xs font-bold text-brand-900">
              <HiOutlineClock aria-hidden="true" className="text-sm text-brand-600" />
              อ่าน {minutes} นาที
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-900/10 bg-[#faf9f6] px-4 py-1.5 text-xs font-bold text-brand-900">
              <HiOutlineShieldCheck aria-hidden="true" className="text-sm text-brand-600" />
              เขียนโดยช่างตัวจริง
            </span>
          </div>

          {/* author + share */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 border-y border-brand-900/10 py-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-extrabold text-white">
                นุ
              </span>
              <div>
                <p className="text-sm font-extrabold text-brand-900">โดยทีมช่างนุ</p>
                <p className="text-xs text-slate-500">{SITE.hours} · ประกัน {SITE.guaranteeDays} วัน</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="mr-1 hidden text-xs font-bold text-slate-400 sm:block">แชร์บทความ:</span>
              {shareLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-brand-900/15 px-4 py-1.5 text-xs font-bold text-brand-900 transition hover:border-brand-600 hover:text-brand-600"
                >
                  {s.label} <HiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* ── post-style cover: logo + title on image ── */}
          <figure className="mt-8">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-brand-900 shadow-[0_24px_60px_-30px_rgba(23,38,38,0.55)] sm:min-h-[460px] md:min-h-[500px]">
              <Image
                src={article.image}
                alt={`ภาพประกอบบทความ ${article.title}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
              {/* legibility gradients */}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/25 to-brand-900/90" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-900/90 to-transparent" />

              {/* content over image */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 md:p-10">
                {/* top row: logo + post label */}
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-2.5 rounded-2xl bg-white/95 py-1.5 pl-1.5 pr-4 shadow-lg backdrop-blur">
                    <span className="relative h-9 w-9 overflow-hidden rounded-xl bg-white">
                      <Image src="/logo.png" alt={SITE.name} fill className="object-contain p-0.5" sizes="36px" />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[13px] font-extrabold text-brand-900">{SITE.name}</span>
                      <span className="block text-[10px] font-bold tracking-[0.16em] text-brand-600">BLOG POST · บทความน่ารู้</span>
                    </span>
                  </span>
                  <Link
                    href="/articles"
                    className="hidden shrink-0 rounded-full bg-[#ffad7f] px-4 py-1.5 text-xs font-extrabold text-brand-900 shadow transition hover:bg-white sm:block"
                  >
                    {article.category}
                  </Link>
                </div>

                {/* bottom: title element */}
                <div>
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold tracking-[0.14em] text-white backdrop-blur sm:hidden">
                    {article.category}
                  </span>
                  <h1 className="mt-3 max-w-2xl text-[clamp(1.7rem,4.5vw,2.9rem)] font-extrabold leading-[1.2] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                    {article.title}
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 md:text-base md:leading-8">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/20 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-base font-extrabold text-white ring-2 ring-white/60">
                      นุ
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-extrabold text-white">โดยทีมช่างนุ</p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/70">
                        <HiOutlineClock aria-hidden="true" className="text-sm" />
                        อ่าน {minutes} นาที · ภาพหน้างานจริง
                      </p>
                    </div>
                    <span className="ml-auto hidden rounded-full border border-white/40 px-4 py-1.5 text-xs font-bold text-white sm:block">
                      {SITE.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <figcaption className="mt-3 text-center text-xs leading-6 text-slate-400">
              {article.title} — ภาพประกอบจากงานจริงของทีม{SITE.name}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2. Body + sticky sidebar ── */}
      <section className="bg-[#faf9f6]">
        <div className="section-wrap grid max-w-7xl gap-10 py-12 md:py-16 lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* main */}
          <div className="min-w-0">
            {/* TL;DR */}
            <div className="rounded-3xl border border-brand-600/20 bg-white p-6 shadow-[0_12px_40px_-32px_rgba(23,38,38,0.5)] md:p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-600">
                TL;DR · สรุปใน 30 วินาที
              </p>
              <ul className="mt-4 space-y-3">
                {article.sections.map((section, i) => (
                  <li key={section.heading} className="flex items-start gap-3 text-sm font-bold leading-7 text-brand-900">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[11px] font-extrabold text-brand-600">
                      {i + 1}
                    </span>
                    <a href={`#section-${i}`} className="transition hover:text-brand-600 hover:underline">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-brand-900/10 pt-4 text-sm leading-7 text-slate-600">
                {article.excerpt}
              </p>
            </div>

            {/* article sections */}
            <div className="mt-10 space-y-12">
              {article.sections.map((section, i) => (
                <div key={section.heading}>
                  <section id={`section-${i}`} aria-labelledby={`section-${i}-title`} className="scroll-mt-28">
                    <p className="text-xs font-extrabold tracking-[0.2em] text-brand-600">
                      {String(i + 1).padStart(2, "0")} / {String(article.sections.length).padStart(2, "0")}
                    </p>
                    <h2 id={`section-${i}-title`} className="mt-2 text-2xl font-extrabold leading-snug text-brand-900 md:text-[1.7rem]">
                      {section.heading}
                    </h2>
                    <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-600" />
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="body-copy mt-5">
                        {paragraph}
                      </p>
                    ))}
                  </section>

                  {/* inline CTA after first section */}
                  {i === 0 && (
                    <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-brand-900 p-6 text-white sm:flex-row sm:items-center md:p-7">
                      <div className="flex-1">
                        <p className="text-xs font-bold tracking-[0.18em] text-[#ffad7f]">ไม่แน่ใจว่าเป็นอาการนี้ไหม?</p>
                        <p className="mt-2 font-extrabold leading-7">เล่าอาการให้ช่างฟัง ประเมินเบื้องต้นฟรี</p>
                        <p className="mt-1 text-sm leading-7 text-white/75">โทรหรือส่งรูปหน้างานมาได้เลย — ตอบตลอด 24 ชม.</p>
                      </div>
                      <a href={SITE.phones[0].href} className="btn-primary shrink-0 !bg-white !text-brand-900 hover:!bg-brand-50">
                        <HiOutlinePhone aria-hidden="true" className="text-lg" />
                        โทร {SITE.phones[0].label}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* checklist */}
            <div className="mt-12 rounded-3xl border border-brand-900/10 bg-white p-6 md:p-7">
              <p className="eyebrow">BEFORE YOU CALL</p>
              <h2 className="mt-2 text-xl font-extrabold text-brand-900">เช็กลิสต์ก่อนโทรหาช่าง</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "ถ่ายรูป / วิดีโอสั้น ๆ ของจุดที่น้ำเอ่อหรือไหลช้า",
                  "จดว่าอาการเริ่มเมื่อไร และมีจุดอื่นเอ่อร่วมด้วยหรือไม่",
                  "หยุดใช้น้ำในจุดที่เอ่อ และอย่าเทสารเคมีรุนแรงลงท่อ",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-[#faf9f6] px-4 py-3 text-sm font-bold leading-7 text-brand-900">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <HiCheck aria-hidden="true" className="text-sm" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* author card */}
            <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-brand-900/10 bg-white p-6 sm:flex-row sm:items-center md:p-7">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-2xl font-extrabold text-white">
                นุ
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">WRITTEN BY</p>
                <p className="mt-1 font-extrabold text-brand-900">ทีม{SITE.name}</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  ช่างทะลวงท่อด้วยงูเหล็กไฟฟ้า รับงานกรุงเทพฯ–ปริมณฑล {SITE.hours} แก้ไม่ได้ไม่คิดเงิน
                </p>
              </div>
              <a href={SITE.phones[0].href} className="btn-outline shrink-0">
                <HiOutlinePhone aria-hidden="true" /> โทรปรึกษา
              </a>
            </div>

            {/* back link */}
            <Link href="/articles" className="mt-8 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:underline">
              <HiChevronLeft aria-hidden="true" /> กลับไปหน้าบทความทั้งหมด
            </Link>
          </div>

          {/* sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-5">
              <nav aria-label="สารบัญบทความ" className="rounded-3xl border border-brand-900/10 bg-white p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-600">CONTENTS · สารบัญ</p>
                <ol className="mt-4 space-y-1">
                  {article.sections.map((section, i) => (
                    <li key={section.heading}>
                      <a
                        href={`#section-${i}`}
                        className="group flex items-start gap-3 rounded-xl px-2 py-2 text-sm font-bold leading-6 text-brand-900 transition hover:bg-brand-50 hover:text-brand-600"
                      >
                        <span className="text-xs font-extrabold text-brand-600/60 transition group-hover:text-brand-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 border-t border-brand-900/10 pt-4 text-xs leading-6 text-slate-500">
                  อ่าน {minutes} นาที · {article.sections.length} หัวข้อ
                </div>
              </nav>

              <div className="overflow-hidden rounded-3xl bg-brand-900 p-6 text-white">
                <p className="text-xs font-bold tracking-[0.18em] text-[#ffad7f]">NEED A PLUMBER?</p>
                <p className="mt-2 text-lg font-extrabold leading-8">ท่อตันตอนนี้? ช่างพร้อมออก</p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  เริ่ม 1,500 บาท/จุด · ประกัน {SITE.guaranteeDays} วัน · ไม่จบไม่คิดเงิน
                </p>
                <a href={SITE.phones[0].href} className="btn-primary mt-5 w-full !bg-white !text-brand-900 hover:!bg-brand-50">
                  <HiOutlinePhone aria-hidden="true" className="text-lg" />
                  โทร {SITE.phones[0].label}
                </a>
                <a href={SITE.phones[1].href} className="mt-2.5 flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  โทร {SITE.phones[1].label}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── 3. Related ── */}
      <section className="bg-white">
        <div className="section-wrap max-w-7xl py-14 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">READ NEXT</p>
              <h2 className="section-title mt-3 !text-2xl md:!text-3xl">บทความถัดไปที่น่าสนใจ</h2>
            </div>
            <Link href="/articles" className="hidden shrink-0 items-center gap-1 text-sm font-bold text-brand-600 hover:underline sm:inline-flex">
              ทั้งหมด <HiChevronRight aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
          <Link href="/articles" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:underline sm:hidden">
            ดูบทความทั้งหมด <HiChevronRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── 4. Final CTA banner ── */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-center text-white">
        <Image
          src="/images/legacy/legacy-43.jpg"
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#102624]/85 via-[#172626]/70 to-[#7b3c22]/45" />
        <div className="section-wrap relative z-20 flex min-h-[300px] max-w-7xl flex-col items-center justify-center py-14">
          <p className="text-xs font-bold tracking-[0.2em] text-[#ffad7f]">WE ARE HERE TO HELP</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
            อ่านแล้วตรงอาการที่บ้าน? คุยกับช่างได้เลย
          </h2>
          <p className="mt-3 text-sm text-white/85 md:text-base">
            ส่งรูปอาการเบื้องต้นหรือโทรปรึกษาได้ตลอด 24 ชั่วโมง
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={SITE.phones[0].href} className="btn-primary !bg-white !text-brand-900 hover:!bg-brand-50">
              <HiOutlinePhone aria-hidden="true" className="text-lg" />
              โทร {SITE.phones[0].label} <HiChevronRight aria-hidden="true" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              ดูบริการทั้งหมด <HiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

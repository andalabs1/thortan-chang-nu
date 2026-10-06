import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HiArrowUpRight,
  HiCheck,
  HiChevronRight,
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { Faq } from "@/components/Faq";
import { absoluteUrl, pageMetadata, serializeJsonLd } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return pageMetadata({
    path: `/services/${s.slug}`,
    title: `${s.title} กรุงเทพฯ–ปริมณฑล 24 ชม.`,
    description: `${s.title} ในกรุงเทพฯ–ปริมณฑล ${s.short} ${s.price} ประกัน 45 วัน โทร 082-991-9434`,
    image: s.image,
    imageAlt: `${s.title} โดยทีมช่างนุ`,
  });
}

const SERVICE_GALLERY: Record<string, { src: string; alt: string }[]> = {
  totan: [
    { src: "/images/legacy/legacy-19.jpg", alt: "ช่างใช้เครื่องงูเหล็กไฟฟ้าทะลวงท่อในซอยแคบ" },
    { src: "/images/legacy/legacy-14.jpg", alt: "ด้านในท่อมีน้ำไหลหลังทะลวงสิ่งอุดตัน" },
    { src: "/images/legacy/legacy-02.jpg", alt: "ปลายงูเหล็กในท่อที่อุดตันด้วยคราบไขมัน" },
    { src: "/images/legacy/legacy-32.jpg", alt: "ทีมช่างนุพร้อมอุปกรณ์หลังจบงานท่อตัน" },
  ],
  "suamtan-chakkhrok": [
    { src: "/images/legacy/legacy-31.jpg", alt: "ดึงผ้าที่อุดตันออกจากชักโครกด้วยงูเหล็ก" },
    { src: "/images/legacy/legacy-39.jpg", alt: "ช่างทะลวงท่อโถปัสสาวะในห้องน้ำอาคาร" },
    { src: "/images/legacy/legacy-15.jpg", alt: "ช่างแยงท่อผนังห้องน้ำด้วยเครื่องงูเหล็ก" },
    { src: "/images/legacy/legacy-32.jpg", alt: "ทีมช่างนุพร้อมอุปกรณ์หลังจบงานส้วมตัน" },
  ],
  "sink-anglagchan": [
    { src: "/images/legacy/legacy-40.jpg", alt: "ทีม THOTAN-CITY ทะลวงท่อครัวร้านอาหาร" },
    { src: "/images/legacy/legacy-41.jpg", alt: "คราบไขมันสะสมในท่อครัวก่อนทะลวง" },
    { src: "/images/legacy/legacy-09.jpg", alt: "ช่างแยงท่อใต้อ่างล้างหน้าด้วยงูเหล็ก" },
    { src: "/images/legacy/legacy-45.jpg", alt: "ทดสอบน้ำไหลในซิงก์หลังแก้ท่อตัน" },
  ],
  "lok-tor-main": [
    { src: "/images/legacy/legacy-43.jpg", alt: "ทีมช่างใช้เครื่อง GO-200 เปิดบ่อพักหน้าโรงงาน" },
    { src: "/images/legacy/legacy-03.jpg", alt: "งานลอกท่อระบายนอกอาคาร ตักตะกอนใส่กระสอบ" },
    { src: "/images/legacy/legacy-04.jpg", alt: "ตักเลนและตะกอนจากบ่อพักท่อเมน" },
    { src: "/images/legacy/legacy-24.jpg", alt: "ทีมลอกท่อระบายในพื้นที่โรงงานอุตสาหกรรม" },
  ],
  "bobambad-bodak-khaiman": [
    { src: "/images/legacy/legacy-04.jpg", alt: "ตักเลนและไขมันจากบ่อบำบัดใส่ถัง" },
    { src: "/images/legacy/legacy-06.jpg", alt: "ช่างลงล้างตะกอนในบ่อพักด้วยถัง" },
    { src: "/images/legacy/legacy-10.jpg", alt: "ตะกร้ากรองและตะกอนที่ตักขึ้นจากบ่อ" },
    { src: "/images/legacy/legacy-42.jpg", alt: "ขยะและทรายสะสมในบ่อพักก่อนล้าง" },
  ],
  "rang-gutter": [
    { src: "/images/legacy/legacy-23.jpg", alt: "ทีมตั้งนั่งร้านล้างท่อรางน้ำบนอาคาร" },
    { src: "/images/legacy/legacy-12.jpg", alt: "เปิดฝาบ่อพักรางระบายน้ำก่อนลอก" },
    { src: "/images/legacy/legacy-16.jpg", alt: "เศษปูนและขยะที่เก็บจากแนวท่อระบาย" },
    { src: "/images/legacy/legacy-42.jpg", alt: "ขยะอุดตันในรางระบายก่อนเก็บล้าง" },
  ],
};

const STEPS = [
  {
    no: "01",
    title: "เล่าอาการให้ช่างฟัง",
    text: "โทรหรือฝากเบอร์ไว้ แจ้งจุดที่มีปัญหาและอาการที่พบ ช่างช่วยประเมินเบื้องต้นฟรี",
  },
  {
    no: "02",
    title: "ตรวจหน้างานก่อนทำ",
    text: "ช่างตรวจจุดระบายน้ำและสภาพหน้างาน แจ้งขอบเขตงานและค่าใช้จ่ายให้เข้าใจก่อนเริ่ม",
  },
  {
    no: "03",
    title: "แก้ตรงจุด + ตรวจงาน",
    text: `ทดสอบการไหลหลังทำ อธิบายผลที่พบ พร้อมดูแลตามเงื่อนไขรับประกัน ${SITE.guaranteeDays} วัน`,
  },
];

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const gallery = SERVICE_GALLERY[s.slug] ?? [];
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${s.slug}#service`),
    name: `${s.title} กรุงเทพฯ–ปริมณฑล`,
    description: s.short,
    url: absoluteUrl(`/services/${s.slug}`),
    provider: { "@id": absoluteUrl("/#business") },
    areaServed: [
      { "@type": "AdministrativeArea", name: "กรุงเทพมหานคร" },
      { "@type": "AdministrativeArea", name: "จังหวัดนนทบุรี" },
      { "@type": "AdministrativeArea", name: "จังหวัดปทุมธานี" },
      { "@type": "AdministrativeArea", name: "จังหวัดสมุทรปราการ" },
      { "@type": "AdministrativeArea", name: "จังหวัดนครปฐม" },
      { "@type": "AdministrativeArea", name: "จังหวัดสมุทรสาคร" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(ld) }} />

      {/* ── 1. Hero — clean minimal ── */}
      <section className="bg-white">
        <div className="section-wrap max-w-4xl py-12 md:py-20">
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
            <Link href="/services" className="transition hover:text-brand-600">
              บริการทั้งหมด
            </Link>
            <HiChevronRight aria-hidden="true" className="text-[10px]" />
            <span className="text-brand-900">{s.title}</span>
          </nav>

          <p className="eyebrow mt-8">SERVICE · 24 HOURS</p>
          <h1 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.15] tracking-tight text-brand-900">
            {s.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{s.short}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center rounded-full bg-brand-900 px-4 py-1.5 text-sm font-extrabold text-white">
              {s.price}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-900/10 bg-[#faf9f6] px-4 py-1.5 text-sm font-bold text-brand-900">
              <HiOutlineShieldCheck aria-hidden="true" className="text-base text-brand-600" />
              ประกัน {SITE.guaranteeDays} วัน
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-900/10 bg-[#faf9f6] px-4 py-1.5 text-sm font-bold text-brand-900">
              <HiOutlineClock aria-hidden="true" className="text-base text-brand-600" />
              พร้อมออก 24 ชม.
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.phones[0].href} className="btn-primary">
              <HiOutlinePhone aria-hidden="true" className="text-lg" />
              โทร {SITE.phones[0].label}
            </a>
            <a href={SITE.phones[1].href} className="btn-outline">
              โทร {SITE.phones[1].label}
            </a>
          </div>

          <div className="relative mt-10 h-[280px] overflow-hidden rounded-3xl bg-[#f2f1ec] sm:h-[380px]">
            <Image
              src={s.image}
              alt={`${s.title} กรุงเทพฯ–ปริมณฑล`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 2. Symptoms + process — minimal ── */}
      <section className="bg-[#faf9f6]">
        <div className="section-wrap max-w-4xl py-14 md:py-20">
          <p className="eyebrow">SYMPTOMS WE FIX</p>
          <h2 className="section-title mt-3">อาการที่รับแก้</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.symptoms.map((symptom) => (
              <li
                key={symptom}
                className="flex items-start gap-3 rounded-2xl border border-brand-900/10 bg-white px-5 py-4 text-sm font-bold leading-7 text-brand-900"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <HiCheck aria-hidden="true" className="text-sm" />
                </span>
                {symptom}
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-brand-900/10 pt-10">
            <p className="eyebrow">HOW WE WORK</p>
            <h2 className="section-title mt-3">วิธีทำงาน</h2>
            <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {STEPS.map((step) => (
                <li key={step.no}>
                  <p className="text-xs font-extrabold tracking-[0.18em] text-brand-600">{step.no}</p>
                  <p className="mt-2 font-extrabold text-brand-900">{step.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 grid gap-6 border-t border-brand-900/10 pt-8 sm:grid-cols-3">
            <div>
              <HiOutlineMapPin aria-hidden="true" className="text-2xl text-brand-600" />
              <p className="mt-2 text-sm font-extrabold text-brand-900">กรุงเทพฯ–ปริมณฑล</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">ฐานงานบางบัวทอง นนทบุรี ถึงหน้างานไว</p>
            </div>
            <div>
              <HiOutlineShieldCheck aria-hidden="true" className="text-2xl text-brand-600" />
              <p className="mt-2 text-sm font-extrabold text-brand-900">ไม่จบ ไม่คิดเงิน</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">แก้ไม่สำเร็จไม่คิดค่าแก้ไข พร้อมประกัน {SITE.guaranteeDays} วัน</p>
            </div>
            <div>
              <HiOutlineClock aria-hidden="true" className="text-2xl text-brand-600" />
              <p className="mt-2 text-sm font-extrabold text-brand-900">นัดได้ทุกวัน 24 ชม.</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">โทรเช็กคิวช่างและประเมินอาการเบื้องต้นฟรี</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2.5 Gallery — ภาพหน้างานจริง ── */}
      {gallery.length > 0 && (
        <section className="bg-white">
          <div className="section-wrap max-w-4xl py-14 md:py-20">
            <p className="eyebrow">REAL WORK PHOTOS</p>
            <h2 className="section-title mt-3">ภาพหน้างานจริง</h2>
            <p className="body-copy mt-3 max-w-2xl text-sm">
              ภาพจากงาน{s.title}ของทีมช่างนุ — ถ่ายหน้างานจริงก่อนและหลังแก้ไข
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
              {gallery.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`group relative h-44 overflow-hidden rounded-2xl bg-[#f2f1ec] sm:h-60 md:h-64 ${
                    index === 0 ? "col-span-2 h-56 sm:h-72 md:h-80" : ""
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={`${photo.alt} — ${s.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 896px" : "(max-width: 768px) 50vw, 448px"}
                    loading={index === 0 ? undefined : "lazy"}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/80 to-transparent px-4 pb-3 pt-8 text-xs font-bold text-white sm:text-sm">
                    {photo.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. WE ARE HERE TO HELP ── */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-center text-white">
        <Image
          src="/images/legacy/legacy-43.jpg"
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#102624]/85 via-[#172626]/70 to-[#7b3c22]/45" />
        <div className="section-wrap relative z-20 flex min-h-[330px] max-w-4xl flex-col items-center justify-center py-16">
          <p className="text-xs font-bold tracking-[0.2em] text-[#ffad7f]">WE ARE HERE TO HELP</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
            {s.title}ตอนนี้? คุยกับช่างได้เลย
          </h2>
          <p className="mt-3 text-sm text-white/85 md:text-base">
            ส่งอาการเบื้องต้นหรือโทรปรึกษาได้ตลอด 24 ชั่วโมง — {s.price}
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

      {/* ── 4. Other services — minimal list ── */}
      <section className="bg-white">
        <div className="section-wrap max-w-4xl py-14 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">MORE SERVICES</p>
              <h2 className="section-title mt-3">บริการอื่น</h2>
            </div>
            <Link href="/services" className="hidden shrink-0 items-center gap-1 text-sm font-bold text-brand-600 hover:underline sm:inline-flex">
              ทั้งหมด <HiChevronRight aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-6 divide-y divide-brand-900/10 border-y border-brand-900/10">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group flex items-center justify-between gap-4 py-5 transition"
              >
                <div>
                  <p className="font-extrabold text-brand-900 transition group-hover:text-brand-600">{o.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{o.price}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-900/10 text-brand-600 transition group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                  <HiArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}

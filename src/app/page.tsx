import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight, HiChevronRight, HiOutlineClock, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi2";
import { Faq } from "@/components/Faq";
import { ArticleCard } from "@/components/ArticleCard";
import { ExpandingContactCta } from "@/components/ExpandingContactCta";
import { HeroTechnician } from "@/components/HeroTechnician";
import { ServiceCard } from "@/components/ServiceCard";
import { GoogleMapsEmbed } from "@/components/GoogleMapsEmbed";
import { ARTICLES } from "@/lib/articles";
import { absoluteUrl, serializeJsonLd } from "@/lib/seo";
import { AREAS, SERVICES, SITE } from "@/lib/site";

const benefits = [
  { icon: HiOutlineClock, title: "พร้อมช่วย 24 ชม.", text: "โทรปรึกษาและนัดหมายได้ทุกวัน ไม่มีวันหยุด" },
  { icon: HiOutlineSparkles, title: "แก้ตรงจุด", text: "ใช้เครื่องงูเหล็กไฟฟ้า เข้าถึงจุดอุดตันโดยไม่ต้องทุบ" },
  { icon: HiOutlineShieldCheck, title: "รับประกัน 45 วัน", text: "ปัญหาซ้ำจุดเดิม กลับไปแก้ให้ตามเงื่อนไขงาน" },
];

const gallery = [
  { src: "/images/gallery/image_034.jpg", alt: "ทีมช่างกำลังเปิดและตรวจระบบท่อระบายน้ำ", caption: "ทีมช่างลงมือแก้ไขหน้างาน" },
  { src: "/images/gallery/image_012.jpg", alt: "ช่างใช้เครื่องทะลวงท่อภายในอาคาร", caption: "งานท่อภายในอาคาร" },
  { src: "/images/gallery/image_022.jpg", alt: "ช่างตรวจแนวท่อระบายน้ำภายนอกอาคาร", caption: "งานท่อภายนอกอาคาร" },
  { src: "/images/gallery/image_037.jpg", alt: "ทีมช่างนุยืนพร้อมอุปกรณ์ก่อนเข้าทำงาน", caption: "ทีมช่างพร้อมเข้าพื้นที่" },
  { src: "/images/gallery/image_040.jpg", alt: "ช่างกำลังทำความสะอาดจุดอุดตันในท่อ", caption: "แก้จุดอุดตันหน้างาน" },
  { src: "/images/gallery/image_046.jpg", alt: "ช่างใช้เครื่องทะลวงท่อบริเวณครัว", caption: "ใช้อุปกรณ์ให้เหมาะกับหน้างาน" },
];

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: SITE.name,
  alternateName: SITE.brandAlt,
  url: absoluteUrl("/"),
  publisher: { "@id": absoluteUrl("/#business") },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteLd) }} />
      <section className="relative isolate h-[min(100svh,500px)] max-h-[500px] w-full overflow-hidden bg-brand-900 text-white">
          <Image src="/images/legacy/legacy-43.jpg" alt="" fill className="z-0 object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#102624]/95 via-[#172626]/85 to-[#7b3c22]/60" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#102624]/70 via-transparent to-[#102624]/15" />
          <HeroTechnician />
          <div className="section-wrap relative z-30 flex h-full flex-col justify-center py-6 sm:py-10">
            <div className="max-w-[610px] lg:max-w-[58%]">
            {/* <p className="text-[11px] font-bold tracking-[0.16em] text-[#ffad7f] sm:text-xs">THOTAN CITY · BANGKOK · 24 HOURS</p> */}
            <h1 className="mt-3 max-w-xl text-[clamp(2.4rem,5vw,4rem)] leading-[1.13] tracking-tight sm:mt-4">ปัญหาท่อตัน<br /><span className="bg-gradient-to-b from-[#ffe0a8] via-[#ff9b61] to-[#ed6429] bg-clip-text text-transparent font-extrabold">ให้ช่างนุจัดการ</span></h1>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/90 sm:text-base sm:leading-7"><span className="sm:hidden">ทะลวงท่อตัน ส้วมตัน และลอกท่อในกรุงเทพฯ–ปริมณฑล แก้ตรงจุดโดยไม่ต้องทุบ ปรึกษาช่างได้ 24 ชั่วโมง</span><span className="hidden sm:inline">บริการทะลวงท่อตัน ส้วมตัน และลอกท่อในกรุงเทพฯ–ปริมณฑล ใช้เครื่องมือเหมาะกับหน้างาน แก้ตรงจุดโดยไม่ต้องทุบ พร้อมให้คำปรึกษาตลอด 24 ชั่วโมง</span></p>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
              <a href={SITE.phones[0].href} className="btn-primary !bg-white !px-4 !py-2.5 !text-sm !text-brand-900 hover:!bg-brand-50 sm:!px-6 sm:!py-3 sm:!text-base">โทร {SITE.phones[0].label}<HiChevronRight aria-hidden="true" className="text-lg" /></a>
              <Link href="/services" className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-extrabold text-[#ffad7f] transition hover:text-[#ffd4bc] hover:underline focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"><span>ดูบริการ<span className="hidden sm:inline">ทั้งหมด</span></span><HiArrowUpRight aria-hidden="true" /></Link>
            </div>
            </div>
          </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-wrap">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">OUR SERVICES</p><h2 className="section-title mt-3">บริการของเรา</h2><p className="body-copy mt-3">ดูแลตั้งแต่ท่อในบ้านจนถึงท่อเมนและบ่อบำบัด</p></div><Link href="/services" className="inline-flex items-center gap-1 font-bold text-brand-600 hover:underline">ดูบริการทั้งหมด <HiChevronRight aria-hidden="true" /></Link></div>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {SERVICES.map((service) => <ServiceCard key={service.slug} service={service} headingLevel="h3" />)}
          </div>
        </div>
      </section>

      <section className="section-wrap grid gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28">
        <div className="relative h-[390px] overflow-hidden rounded-[2rem] md:h-[500px]"><Image src="/images/legacy/legacy-43.jpg" alt="ทีมช่างกำลังแก้ไขระบบท่อหน้างาน" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" /></div>
        <div><p className="eyebrow">WHY CHOOSE US</p><h2 className="section-title mt-3">งานท่อที่ไว้ใจได้<br />เริ่มจากการแก้ให้ตรงจุด</h2><p className="body-copy mt-6">เราดูอาการและหน้างานก่อนเลือกวิธีแก้ ใช้อุปกรณ์ที่เหมาะสม ตรวจการไหลหลังทำงาน และอธิบายค่าใช้จ่ายให้เข้าใจก่อนเริ่ม</p><div className="mt-8 space-y-5">{benefits.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600"><Icon aria-hidden="true" className="text-2xl" /></span><div><h3 className="font-extrabold text-brand-900">{title}</h3><p className="mt-1 text-sm leading-7 text-slate-600">{text}</p></div></div>)}</div><Link href="/about" className="mt-9 inline-flex items-center gap-1 font-bold text-brand-600 hover:underline">รู้จักเราเพิ่มเติม <HiChevronRight aria-hidden="true" /></Link></div>
      </section>

      <section aria-labelledby="gallery-heading" className="bg-white py-20 md:py-24">
        <div className="section-wrap">
          <p className="eyebrow">OUR WORK</p>
          <h2 id="gallery-heading" className="section-title mt-3">ภาพหน้างานจริง</h2>
          <p className="body-copy mt-3">ภาพจากงานแก้ท่อตันและดูแลระบบท่อของทีมช่างนุ</p>
          <div className="mt-9 grid auto-rows-[145px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:auto-rows-[200px] md:grid-cols-3 md:gap-4">
            {gallery.map((photo, index) => (
              <figure key={photo.src} className={`group relative overflow-hidden rounded-2xl bg-brand-900 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 768px) 50vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/85 to-transparent px-3 pb-3 pt-10 text-sm font-bold text-white sm:px-5 sm:pb-5 sm:text-base">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f1ec] py-20"><div className="section-wrap"><p className="eyebrow">SERVICE AREAS</p><h2 className="section-title mt-3">พื้นที่ให้บริการ</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{AREAS.map((area) => <Link key={area.slug} href={`/areas/${area.slug}`} className="group flex items-start justify-between gap-4 rounded-2xl bg-white p-6 transition hover:shadow-lg"><div><h3 className="font-extrabold text-brand-900">{area.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{area.desc}</p></div><HiChevronRight aria-hidden="true" className="mt-1 shrink-0 text-xl text-brand-600 transition group-hover:translate-x-1" /></Link>)}</div></div></section>

      <section aria-label="แผนที่โซนรับงานกรุงเทพฯ–ปริมณฑล" className="w-full">
        <GoogleMapsEmbed
          query={SITE.mapQuery}
          zoom={10}
          title="แผนที่โซนรับงานกรุงเทพฯ–ปริมณฑล ท่อตัน by ช่างนุ"
          className="w-full"
          iframeClassName="block h-[60vh] max-h-[600px] min-h-[320px] w-full border-0"
          fallbackClassName="h-[60vh] max-h-[600px] min-h-[320px] w-full"
        />
      </section>

      <section className="section-wrap py-20"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">ARTICLES</p><h2 className="section-title mt-3">บทความน่ารู้</h2></div><Link href="/articles" className="inline-flex items-center gap-1 font-bold text-brand-600">บทความทั้งหมด <HiChevronRight aria-hidden="true" /></Link></div><div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">{ARTICLES.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}</div></section>

      <Faq />
      <ExpandingContactCta />
    </>
  );
}

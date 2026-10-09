import Image from "next/image";
import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
  HiArrowUpRight,
  HiChevronDown,
  HiChevronRight,
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineWrench,
} from "react-icons/hi2";
import { CallbackForm } from "@/components/CallbackForm";
import { GoogleMapsEmbed } from "@/components/GoogleMapsEmbed";
import { FAQS, SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "ติดต่อช่างท่อตัน กรุงเทพฯ–ปริมณฑล",
  description: "โทรหาทีมช่างนุ 082-991-9434 หรือ 061-290-6295 ปรึกษาปัญหาท่อตันตลอด 24 ชม. ที่อยู่ 47/922 บ้านร่มเงาไม้ ต.บางคูรัด อ.บางบัวทอง จ.นนทบุรี 11110 พร้อมแผนที่",
});

const HELP_TOPICS = [
  {
    icon: HiOutlinePhone,
    title: "โทรด่วน 24 ชม.",
    text: "ท่อล้น น้ำเอ่อตอนนี้ โทรได้เลย ไม่ต้องรอ",
  },
  {
    icon: HiOutlineWrench,
    title: "ปรึกษาอาการฟรี",
    text: "เล่าอาการมา ช่างช่วยประเมินก่อนนัดหมาย",
  },
  {
    icon: HiOutlineClock,
    title: "นัดสำรวจหน้างาน",
    text: "งานลอกท่อ ล้างบ่อ ประเมินราคาก่อนทำจริง",
  },
];

const SHOW_CALLBACK_FORM = false;

export default function Contact() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#c96d3e] text-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#e89a67] via-[#c96d3e] to-[#ad542f]" />
        <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-28 w-full text-[#faf9f6] sm:h-36 lg:h-44" viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 0h1440v50c-130 58-218 13-332 16-126 4-156 91-292 64-117-24-160-98-283-97-123 1-237 73-371 72C94 104 37 87 0 65V0Z" />
        </svg>
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-20 h-[25rem] w-[25rem] rounded-full bg-[#f7bc80]/35 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[26%] h-48 w-48 rotate-12 rounded-[36%_64%_58%_42%/52%_38%_62%_48%] bg-[#f3ae70]/65 sm:h-72 sm:w-72" />
        <div aria-hidden="true" className="pointer-events-none absolute left-[49%] top-[34%] h-24 w-24 -rotate-12 rounded-[36%_64%_58%_42%/52%_38%_62%_48%] bg-[#f8c68e]/65 sm:h-36 sm:w-36" />

        <div className="section-wrap relative min-h-[690px] sm:min-h-[620px] lg:min-h-[740px] xl:min-h-[760px]">
          <div className="relative z-10 max-w-[660px] pt-40 sm:pt-44 lg:pt-48">
            <p className="text-xs font-extrabold tracking-[0.24em] text-brand-900/90">CONTACT US · 24 HOURS</p>
            <h1 className="mt-5 text-[clamp(3.8rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-white drop-shadow-[0_3px_3px_rgba(35,92,108,0.13)]">
              ติดต่อช่างนุ
            </h1>
            <p className="mt-5 max-w-[400px] text-lg font-bold leading-8 text-white drop-shadow-[0_1px_2px_rgba(20,70,85,0.2)] sm:text-xl">
              ท่อตัน ส้วมตัน น้ำเอ่อ โทรหาเราได้เลย
            </p>
            <p className="mt-2 max-w-[260px] text-sm leading-7 text-white/95 drop-shadow-[0_1px_2px_rgba(80,35,22,0.25)] sm:max-w-[390px] sm:text-base">
              ช่วยประเมินอาการและนัดช่างในกรุงเทพฯ–ปริมณฑล ตลอด 24 ชั่วโมง
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={SITE.phones[0].href} className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-brand-900/15 transition hover:bg-brand-700">
                <HiOutlinePhone aria-hidden="true" className="text-lg" /> โทรหาช่างทันที
              </a>
              <a href="#contact-options" className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/85 px-6 py-3 text-sm font-extrabold text-brand-900 backdrop-blur-sm transition hover:bg-white">
                ดูช่องทางติดต่อ <HiChevronRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <Image
            src="/images/contact-hero-technician.webp"
            alt="ภาพประกอบช่างบริการยิ้มและยกนิ้วให้"
            width={1297}
            height={1212}
            priority
            sizes="(max-width: 640px) 72vw, (max-width: 1024px) 54vw, 560px"
            className="pointer-events-none absolute bottom-0 right-[-75px] z-0 w-[330px] max-w-none sm:right-[-15px] sm:w-[450px] lg:right-[-15px] lg:w-[610px] xl:w-[650px]"
          />
        </div>
      </section>

      {/* ── 2. ช่องทางติดต่อ ────────────────────────────── */}
      <section id="contact-options" className="scroll-mt-20 bg-[#f6f0e8]">
        <div className={`section-wrap grid gap-12 py-16 md:gap-16 md:py-24 ${SHOW_CALLBACK_FORM ? "md:grid-cols-[1.1fr_0.9fr] md:items-start" : ""}`}>
          <div className={SHOW_CALLBACK_FORM ? "max-w-[570px]" : "mx-auto w-full max-w-[900px]"}>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2 className="section-title mt-3">สะดวกช่องทางไหน<br />เลือกได้เลย</h2>
            <p className="mt-5 max-w-[500px] text-base leading-8 text-slate-600">
              โทรหรือส่งอีเมลได้เลย ช่างพร้อมช่วยประเมินอาการและนัดหมายตลอด 24 ชั่วโมง
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              {SITE.phones.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="inline-flex items-center gap-2 font-bold text-brand-900 underline decoration-brand-600/40 underline-offset-4 transition hover:text-brand-600">
                    <HiOutlinePhone aria-hidden="true" className="text-brand-600" /> {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 break-all text-brand-900 underline decoration-brand-600/40 underline-offset-4 transition hover:text-brand-600">
                  <HiOutlineEnvelope aria-hidden="true" className="text-brand-600" /> {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-12 grid gap-5 border-t border-brand-900/15 pt-7 sm:grid-cols-3 md:gap-4">
              {HELP_TOPICS.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <Icon aria-hidden="true" className="mb-2 text-2xl text-brand-600" />
                  <p className="text-sm font-extrabold text-brand-900">{title}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
          {SHOW_CALLBACK_FORM && (
            <div className="w-full max-w-[490px] justify-self-center rounded-[1.25rem] border border-[#f1e6dd] bg-white p-6 shadow-[0_24px_65px_-30px_rgba(23,38,38,0.23)] sm:p-8 md:justify-self-end">
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-900">ฝากเบอร์ให้ช่างติดต่อกลับ</h2>
              <p className="mt-1 text-sm text-slate-500">แจ้งอาการคร่าว ๆ แล้วช่างจะติดต่อกลับโดยเร็ว</p>
              <div className="mt-6"><CallbackForm /></div>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. แผนที่ + ที่ตั้ง ─────────────────────────── */}
      <section className="bg-white">
        <div className="section-wrap grid gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16 md:py-24">
          <GoogleMapsEmbed
            query={SITE.mapQuery}
            showOpenLink={false}
            title="แผนที่ที่ตั้งท่อตัน by ช่างนุ ต.บางคูรัด อ.บางบัวทอง จ.นนทบุรี"
            className="relative overflow-hidden rounded-xl border border-[#e9e9e3] bg-[#f4f2ec]"
            iframeClassName="block h-[340px] w-full border-0 sm:h-[420px]"
            fallbackClassName="h-[340px] w-full sm:h-[420px]"
          >
            <div className="absolute bottom-4 left-4 max-w-[250px] rounded-xl border border-white/80 bg-white/95 p-4 shadow-[0_12px_35px_-16px_rgba(23,38,38,0.35)] backdrop-blur sm:bottom-auto sm:left-5 sm:top-5">
              <p className="flex items-center gap-2 text-sm font-extrabold text-brand-900">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <HiOutlineMapPin aria-hidden="true" />
                </span>
                {SITE.name}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-600">{SITE.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:underline"
              >
                เปิดแผนที่นำทาง <HiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </GoogleMapsEmbed>
          <div className="max-w-[460px]">
            <p className="eyebrow">OUR LOCATION</p>
            <h2 className="section-title mt-3">อยู่ใกล้ พร้อมไปถึงหน้างาน</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">ฐานงานอยู่บางบัวทอง จังหวัดนนทบุรี รับงานในกรุงเทพฯ และปริมณฑล โทรเช็กคิวหรือสอบถามเส้นทางได้ตลอดเวลา</p>
            <div className="mt-8">
              <p className="font-extrabold text-brand-900">สำนักงาน / จุดรับงาน</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{SITE.address}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{SITE.hours}</p>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-brand-600 transition hover:text-brand-700 hover:underline">
              <FaMapMarkedAlt aria-hidden="true" /> ดูเส้นทางบน Google Maps <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. FAQ ─────────────────────────────────────── */}
      <section className="bg-[#faf9f6]">
        <div className="section-wrap grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-24">
        <div className="max-w-[360px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-3">มีคำถาม?<br />ถามช่างได้เลย</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">สงสัยเรื่องอาการ ราคา หรือพื้นที่ให้บริการ เราพร้อมตอบและช่วยประเมินเบื้องต้น</p>
          <a href={SITE.phones[0].href} className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-900/15 bg-white px-5 py-3 text-sm font-bold text-brand-900 transition hover:border-brand-600 hover:text-brand-600">
            <HiOutlinePhone aria-hidden="true" className="text-lg text-brand-600" /> โทรปรึกษาฟรี {SITE.phones[0].label}
          </a>
        </div>
        <div className="border-t border-brand-900/15">
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b border-brand-900/15 py-5">
              <summary className="faq-summary flex cursor-pointer items-center justify-between gap-4 font-bold text-brand-900 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
                <span>{f.q}</span>
                <HiChevronDown aria-hidden="true" className="shrink-0 text-lg text-brand-600 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="max-w-[610px] pt-4 text-sm leading-7 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
        </div>
      </section>

      {/* ── 5. CTA ท้ายหน้า ────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-center text-white">
          <Image
            src="/images/legacy/legacy-43.jpg"
            alt=""
            fill
            sizes="100vw"
            className="z-0 object-cover object-[center_45%]"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#102624]/85 via-[#172626]/70 to-[#7b3c22]/45" />
          <div className="section-wrap relative z-20 flex min-h-[330px] flex-col items-center justify-center py-16">
            <p className="text-xs font-bold tracking-[0.2em] text-[#ffad7f]">WE ARE HERE TO HELP</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">พร้อมให้ช่างนุช่วยแก้ปัญหาท่อตัน?</h2>
            <p className="mt-3 text-sm text-white/85 md:text-base">โทรปรึกษาหรือดูบริการที่เหมาะกับอาการได้เลย</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={SITE.phones[0].href} className="btn-primary !bg-white !text-brand-900 hover:!bg-brand-50">
                โทร {SITE.phones[0].label} <HiChevronRight aria-hidden="true" />
              </a>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                ดูบริการทั้งหมด <HiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
      </section>
    </>
  );
}

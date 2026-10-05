import Image from "next/image";
import Link from "next/link";
import { HiChevronRight, HiOutlineCheckCircle, HiOutlineClock, HiOutlineShieldCheck } from "react-icons/hi2";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "เกี่ยวกับเรา | ทีมช่างงูเหล็ก ท่อตัน-ซิตี้",
  description: "รู้จักทีมช่างงูเหล็ก ท่อตัน-ซิตี้ บริการแก้ท่อตัน ส้วมตัน ลอกท่อ และดูแลระบบระบายน้ำในกรุงเทพฯ–ปริมณฑล ติดต่อได้ 24 ชั่วโมง รับประกันงาน 45 วัน",
  image: "/images/legacy/legacy-32.jpg",
  imageAlt: "ทีมท่อตัน by ช่างนุ",
});

const serviceGroups = [
  { title: "ห้องน้ำ", description: "แก้อาการน้ำไหลช้า น้ำเอ่อ และชักโครกกดไม่ลง", items: ["ส้วมตัน ชักโครกตัน", "ท่อพื้นห้องน้ำและท่อน้ำทิ้งอุดตัน", "อ่างล้างหน้าและอ่างอาบน้ำระบายช้า"], href: "/services/suamtan-chakkhrok" },
  { title: "ห้องครัว", description: "จัดการเศษอาหารและคราบไขมันที่สะสมในระบบท่อ", items: ["ซิงก์ล้างจานและท่ออ่างล้างจานตัน", "บ่อดักไขมันอุดตัน", "ล้างบ่อดักไขมัน"], href: "/services/sink-anglagchan" },
  { title: "ท่อเมนและพื้นที่ภายนอก", description: "ดูแลแนวท่อระบายน้ำที่ใช้งานร่วมกันหรืออยู่รอบอาคาร", items: ["ลอกท่อเมนและท่อระบายน้ำ", "ท่อพื้นระเบียงและดาดฟ้า", "ลอกรางกัตเตอร์"], href: "/services/lok-tor-main" },
  { title: "ระบบท่อน้ำเสีย", description: "ตรวจและดูแลระบบท่อของบ้าน อาคาร และสถานประกอบการ", items: ["ลอกท่อน้ำเสีย", "ล้างบ่อบำบัดน้ำเสีย", "ล้างท่อในคอนโด สำนักงาน และโรงงาน"], href: "/services" },
];

const careTips = [
  { title: "ดูแลปากท่อและรางน้ำ", text: "เก็บใบไม้ เศษผง และตะกอนบริเวณปากท่อ ดาดฟ้า และรางน้ำฝนเป็นประจำ" },
  { title: "ตรวจตะแกรงปิดฝาท่อ", text: "ดูว่าตะแกรงยังแน่นและไม่ชำรุด เพื่อกันสิ่งแปลกปลอมหล่นลงไปในท่อ" },
  { title: "แยกเศษอาหารและไขมัน", text: "ใช้ตะแกรงดักเศษอาหาร และไม่เทน้ำมันหรือไขมันลงซิงก์โดยตรง" },
  { title: "หลีกเลี่ยงสารเคมีรุนแรง", text: "อย่าเทโซดาไฟหรือกรดลงท่อที่ตัน หากน้ำยังไหลช้าหรือน้ำเอ่อ ควรให้ช่างตรวจจุดอุดตัน" },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-wrap grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">ABOUT US</p>
          <h1 className="section-title mt-4 !text-4xl md:!text-5xl">บริการรวดเร็ว<br /><span className="text-brand-600">แก้ปัญหาตรงจุด</span></h1>
          <p className="body-copy mt-7">เราคือทีมช่างงูเหล็ก “ท่อตัน-ซิตี้” หรือท่อตัน by ช่างนุ ดูแลงานท่อตัน ส้วมตัน และระบบระบายน้ำอุดตันในบ้านพัก ร้านค้า คอนโด อาคารสำนักงาน และโรงงาน</p>
          <p className="body-copy mt-4">ทีมงานตรวจอาการและสภาพหน้างานก่อนเลือกเครื่องมือและวิธีแก้ เพื่อให้ทำงานได้ตรงจุด พร้อมอธิบายงานและค่าใช้จ่ายก่อนเริ่ม ให้ลูกค้าตัดสินใจได้อย่างสบายใจ</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold text-brand-900"><span className="rounded-full bg-brand-50 px-4 py-2">ติดต่อได้ 24 ชั่วโมง</span><span className="rounded-full bg-brand-50 px-4 py-2">รับประกันงาน {SITE.guaranteeDays} วัน</span></div>
          <Link href="/services" className="btn-primary mt-8">ดูบริการของเรา <HiChevronRight aria-hidden="true" /></Link>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-[2rem] md:h-[530px]"><Image src="/images/logo.png" alt="ทีมงานท่อตัน by ช่างนุ" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" /></div>
      </section>

      <section className="bg-white py-20"><div className="section-wrap"><p className="eyebrow">OUR APPROACH</p><h2 className="section-title mt-3">วิธีที่เราดูแลทุกหน้างาน</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{[
        { icon: HiOutlineCheckCircle, title: "ตรวจให้ชัด", text: "ฟังอาการและสำรวจจุดอุดตันก่อนเริ่มงาน เพื่อเลือกวิธีแก้ที่เหมาะกับระบบท่อ" },
        { icon: HiOutlineClock, title: "ทำงานตรงจุด", text: "ใช้เครื่องงูเหล็กไฟฟ้าและอุปกรณ์ตามลักษณะงาน ตรวจการระบายน้ำหลังแก้ไข และแจ้งสิ่งที่พบให้ลูกค้าทราบ" },
        { icon: HiOutlineShieldCheck, title: "ดูแลหลังงาน", text: `รับประกันผลงาน ${SITE.guaranteeDays} วัน หากปัญหาซ้ำในจุดเดิม เรากลับไปแก้ไขให้โดยไม่คิดค่าแก้ไขตามเงื่อนไขงาน` },
      ].map(({ icon: Icon, title, text }, i) => <div key={title} className="rounded-3xl border border-[#e9e9e3] bg-[#faf9f6] p-7"><Icon aria-hidden="true" className="text-3xl text-brand-600" /><span className="mt-8 block text-xs font-bold tracking-widest text-brand-600">0{i + 1}</span><h3 className="mt-2 text-xl font-extrabold text-brand-900">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div><p className="mt-6 text-sm leading-7 text-slate-600">หากตรวจแล้วไม่สามารถแก้ปัญหาได้ จะไม่คิดค่าแก้ไขตามเงื่อนไขงาน</p></div></section>

      <section className="bg-[#f2f1ec] py-20 md:py-24">
        <div className="section-wrap">
          <p className="eyebrow">WHAT WE DO</p>
          <h2 className="section-title mt-3">บริการแก้ท่อตันทุกรูปแบบ</h2>
          <p className="body-copy mt-3 max-w-3xl">รับงานตั้งแต่ท่อน้ำทิ้งในบ้านไปจนถึงท่อเมน บ่อดักไขมัน และระบบระบายน้ำของอาคาร</p>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <article key={group.title} className="rounded-3xl bg-white p-7 shadow-[0_12px_35px_-30px_rgba(23,38,38,0.4)] sm:p-8">
                <h3 className="text-xl font-extrabold text-brand-900">{group.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{group.description}</p>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
                  {group.items.map((item) => <li key={item} className="flex gap-2"><HiOutlineCheckCircle aria-hidden="true" className="mt-1 shrink-0 text-lg text-brand-600" />{item}</li>)}
                </ul>
                <Link href={group.href} className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:underline">ดูบริการ <HiChevronRight aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap grid gap-12 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-24">
        <div>
          <p className="eyebrow">COMMON CAUSES</p>
          <h2 className="section-title mt-3">ท่อตันเกิดจากอะไร</h2>
          <p className="body-copy mt-5">เศษอาหาร ไขมัน เส้นผม ใบไม้ และตะกอนอาจสะสมในท่อจนทำให้น้ำระบายช้า บางครั้งน้ำเอ่อกลับหรือหลายจุดเริ่มไหลช้าพร้อมกัน</p>
          <p className="body-copy mt-4">ปัญหาเกิดได้ทั้งในห้องครัว ห้องน้ำ ระเบียง ดาดฟ้า และท่อภายนอกอาคาร โดยเฉพาะช่วงฝนตกที่ท่อระบายน้ำต้องรับน้ำมากขึ้น หากอาการเกิดซ้ำ ควรตรวจหาจุดอุดตันก่อนแก้ไข</p>
        </div>
        <div className="relative h-[340px] overflow-hidden rounded-[2rem] md:h-[440px]"><Image src="/images/gallery/image_012.jpg" alt="ช่างตรวจและใช้เครื่องทะลวงท่อภายในอาคาร" fill className="object-cover" sizes="(max-width: 768px) 100vw, 55vw" /></div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="section-wrap">
          <p className="eyebrow">PIPE CARE</p>
          <h2 className="section-title mt-3">ดูแลท่ออย่างไรให้ระบายน้ำได้ดี</h2>
          <p className="body-copy mt-3 max-w-3xl">การดูแลจุดใช้งานเป็นประจำช่วยลดสิ่งที่ลงไปสะสมในท่อ และช่วยสังเกตปัญหาได้ตั้งแต่เริ่มต้น</p>
          <ol className="mt-9 grid gap-5 md:grid-cols-2">
            {careTips.map((tip, index) => (
              <li key={tip.title} className="flex gap-4 rounded-3xl border border-[#e9e9e3] p-6 sm:p-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-extrabold text-brand-600">{index + 1}</span>
                <div><h3 className="font-extrabold text-brand-900">{tip.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{tip.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f2f1ec] py-16 md:py-20">
        <div className="section-wrap grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">SERVICE AREAS</p>
            <h2 className="section-title mt-3">กรุงเทพฯ และปริมณฑล</h2>
            <p className="body-copy mt-4 max-w-3xl">รับงานในกรุงเทพฯ นนทบุรี ปทุมธานี สมุทรปราการ นครปฐม และสมุทรสาคร ทั้งบ้านพัก ร้านค้า คอนโด อาคารสำนักงาน และโรงงาน แจ้งพื้นที่เพื่อให้ทีมงานเช็กคิวและประเมินหน้างานเบื้องต้นได้</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-1 font-bold text-brand-600 hover:underline">ดูช่องทางติดต่อ <HiChevronRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="bg-[#f2f1ec] py-20 ">
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-900 text-white">
          <Image src="/images/gallery/image_037.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 768px" className="z-0 object-cover object-center" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#102624]/95 via-[#172626]/85 to-[#102624]/65" />
          <div className="relative z-20 p-9 md:p-12">
            <p className="text-sm font-bold text-[#ffad7f]">พร้อมช่วยเหลือตลอด 24 ชั่วโมง</p>
            <h2 className="mt-4 text-3xl font-extrabold">มีปัญหาเรื่องท่อ<br />คุยกับช่างนุได้เลย</h2>
            <p className="mt-5 leading-8 text-white/85">บอกอาการและพื้นที่หน้างาน เราช่วยประเมินเบื้องต้นก่อนนัดหมาย</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phones[0].href} className="btn-primary !bg-white !text-brand-900">โทร {SITE.phones[0].label}<HiChevronRight aria-hidden="true" /></a>
              <a href={SITE.line} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10">ทัก LINE</a>
            </div>
            <p className="mt-5 text-sm text-white/75">เบอร์สำรอง <a href={SITE.phones[1].href} className="font-bold text-white underline underline-offset-4">{SITE.phones[1].label}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

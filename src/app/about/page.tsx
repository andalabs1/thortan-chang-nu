import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight, HiChevronRight, HiOutlineCheckCircle, HiOutlineClock, HiOutlineShieldCheck } from "react-icons/hi2";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "เกี่ยวกับเราและข้อมูลบริษัท",
  description: "รู้จักทีมท่อตัน by ช่างนุ และบริษัท ท่อตัน-ซิตี้ จำกัด ในนางรอง บุรีรัมย์ พร้อมแนวทางทำงาน ข้อมูลนิติบุคคล และช่องทางติดต่อ",
  image: "/images/legacy/legacy-32.jpg",
  imageAlt: "ทีมท่อตัน by ช่างนุ",
});

export default function AboutPage() {
  return (
    <>
      <section className="section-wrap grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div><p className="eyebrow">ABOUT US</p><h1 className="section-title mt-4 !text-4xl md:!text-5xl">ทีมช่างที่เข้าใจ<br /><span className="text-brand-600">ทุกปัญหาเรื่องท่อ</span></h1><p className="body-copy mt-7">ท่อตัน by ช่างนุ หรือท่อตันซิตี้ เป็นทีมบริการแก้ไขท่ออุดตันในอำเภอนางรอง จังหวัดบุรีรัมย์ ดำเนินงานภายใต้บริษัท ท่อตัน-ซิตี้ จำกัด เรารับงานบ้านพัก ร้านค้า อาคาร และสถานประกอบการ โดยให้ความสำคัญกับการตรวจอาการก่อนเลือกวิธีแก้</p><p className="body-copy mt-4">ตั้งแต่ท่อน้ำทิ้ง ชักโครก ซิงก์ล้างจาน ไปจนถึงท่อเมนและบ่อบำบัด เป้าหมายของเราคือทำให้น้ำกลับมาไหลได้ปกติ พร้อมอธิบายงานและค่าใช้จ่ายให้เข้าใจง่าย</p><Link href="/services" className="btn-primary mt-8">ดูบริการของเรา <HiChevronRight aria-hidden="true" /></Link></div>
        <div className="relative h-[400px] overflow-hidden rounded-[2rem] md:h-[530px]"><Image src="/images/legacy/legacy-32.jpg" alt="ทีมงานท่อตัน by ช่างนุ" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" /></div>
      </section>

      <section className="bg-white py-20"><div className="section-wrap"><p className="eyebrow">OUR APPROACH</p><h2 className="section-title mt-3">วิธีที่เราดูแลทุกหน้างาน</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{[
        { icon: HiOutlineCheckCircle, title: "ตรวจให้ชัด", text: "ฟังอาการและสำรวจจุดอุดตันก่อนเริ่มงาน เพื่อเลือกวิธีแก้ที่เหมาะกับระบบท่อ" },
        { icon: HiOutlineClock, title: "ทำงานตรงจุด", text: "ใช้อุปกรณ์ตามลักษณะงาน ตรวจการระบายน้ำหลังแก้ไข และแจ้งสิ่งที่พบให้ลูกค้าทราบ" },
        { icon: HiOutlineShieldCheck, title: "ดูแลหลังงาน", text: `รับประกันผลงาน ${SITE.guaranteeDays} วัน สำหรับปัญหาที่เกิดซ้ำในจุดเดิมตามเงื่อนไขงาน` },
      ].map(({ icon: Icon, title, text }, i) => <div key={title} className="rounded-3xl border border-[#e9e9e3] bg-[#faf9f6] p-7"><Icon aria-hidden="true" className="text-3xl text-brand-600" /><span className="mt-8 block text-xs font-bold tracking-widest text-brand-600">0{i + 1}</span><h3 className="mt-2 text-xl font-extrabold text-brand-900">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="section-wrap grid gap-10 py-20 md:grid-cols-2 md:items-center"><div><p className="eyebrow">BUSINESS INFORMATION</p><h2 className="section-title mt-3">ข้อมูลบริษัท</h2><p className="body-copy mt-5">ข้อมูลนิติบุคคลจาก Data for Thai ที่เชื่อมโยงกับทีมท่อตันซิตี้ในอำเภอนางรอง</p><dl className="mt-7 space-y-4 border-t border-brand-900/10 pt-6 text-sm"><div className="grid grid-cols-[110px_1fr] gap-3"><dt className="font-bold text-brand-900">ชื่อบริษัท</dt><dd className="text-slate-600">บริษัท ท่อตัน-ซิตี้ จำกัด<br /><span className="text-xs">THOTAN-CITY CO., LTD.</span></dd></div><div className="grid grid-cols-[110px_1fr] gap-3"><dt className="font-bold text-brand-900">เลขทะเบียน</dt><dd className="text-slate-600">0315566001138</dd></div><div className="grid grid-cols-[110px_1fr] gap-3"><dt className="font-bold text-brand-900">จดทะเบียน</dt><dd className="text-slate-600">25 พฤษภาคม 2566</dd></div><div className="grid grid-cols-[110px_1fr] gap-3"><dt className="font-bold text-brand-900">ทุนจดทะเบียน</dt><dd className="text-slate-600">1,500,000 บาท</dd></div><div className="grid grid-cols-[110px_1fr] gap-3"><dt className="font-bold text-brand-900">ที่ตั้ง</dt><dd className="text-slate-600">{SITE.address}</dd></div></dl><a href="https://www.dataforthai.com/company/0315566001138/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:underline">ตรวจสอบข้อมูลทะเบียนที่ Data for Thai <HiArrowUpRight aria-hidden="true" /></a></div><div className="rounded-[2rem] bg-brand-900 p-9 text-white md:p-12"><p className="text-sm font-bold text-brand-400">พร้อมช่วยเหลือ</p><h3 className="mt-4 text-3xl font-extrabold">มีปัญหาเรื่องท่อ<br />คุยกับทีมงานได้เลย</h3><p className="mt-5 leading-8 text-white/65">บอกอาการและพื้นที่หน้างาน เราช่วยประเมินเบื้องต้นก่อนนัดหมาย</p><a href={SITE.phones[0].href} className="btn-primary mt-8 !bg-white !text-brand-900">โทร {SITE.phones[0].label}<HiChevronRight aria-hidden="true" /></a></div></section>
    </>
  );
}

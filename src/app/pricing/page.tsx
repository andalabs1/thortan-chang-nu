import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
import { SERVICES, SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/pricing",
  title: "อัตราค่าบริการแก้ท่อตันและส้วมตัน กรุงเทพฯ–ปริมณฑล",
  description:
    "ท่อน้ำทิ้งเริ่ม 1,700 บาท/จุด ท่อเมน 2,500–3,000 บาท/จุด งานลอกท่อและล้างบ่อประเมินหน้างานก่อน พร้อมเงื่อนไขรับประกัน 45 วัน",
});

const EXTRA = [
  { name: "งานลอกท่อระบายน้ำ", price: "สำรวจหน้างานก่อน", unit: "ต่อ/จุด" },
  { name: "งานฉีดล้างบ่อ / ล้างบ่อบำบัด", price: "สำรวจหน้างานก่อน", unit: "ต่อ/บ่อ" },
  { name: "งานสูบสิ่งปฏิกูล", price: "สำรวจหน้างานก่อน", unit: "ต่อ/จุด" },
  { name: "งานทะลวงท่อตัน", price: "สำรวจหน้างานก่อน", unit: "ต่อ/จุด" },
];

export default function Pricing() {
  return (
    <div className="section-wrap py-16 md:py-24">
      <p className="eyebrow text-center">PRICING</p>
      <h1 className="section-title mt-3 text-center">อัตราค่าบริการ</h1>
      <p className="mt-2 text-center text-slate-500">
        รับประกันงาน {SITE.guaranteeDays} วัน · แก้ไม่สำเร็จไม่เสียค่าใช้จ่าย
        · ราคาอาจปรับตามขนาด/ความยาวท่อและหน้างานสูง
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {SERVICES.map((s) => (
          <div key={s.slug} className="card p-6">
            <h2 className="font-extrabold">{s.title}</h2>
            <p className="text-2xl font-extrabold text-brand-700">{s.price}</p>
            <p className="mt-1 text-sm text-slate-500">{s.short}</p>
            <Link href={`/services/${s.slug}`} className="mt-3 inline-flex items-center gap-1 font-bold text-brand-600 hover:underline">
              ดูรายละเอียด <HiChevronRight aria-hidden="true" />
            </Link>
          </div>
        ))}
        {EXTRA.map((e) => (
          <div key={e.name} className="card p-6">
            <h2 className="font-extrabold">{e.name}</h2>
            <p className="text-2xl font-extrabold text-brand-700">{e.price}</p>
            <p className="text-sm text-slate-500">{e.unit} · โรงงาน หอพัก ราชการ รีสอร์ต โรงแรม หมู่บ้านจัดสรร</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-brand-900 p-6 text-center text-white">
        <p className="font-bold">สนใจ / สอบถาม / นัดสำรวจหน้างาน</p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          {SITE.phones.map((p) => (
            <a key={p.label} href={p.href} className="rounded-full bg-accent-500 px-6 py-2 font-extrabold">
              <FaPhoneAlt className="mr-1 inline text-sm" /> {p.label}
            </a>
          ))}
          <Link href="/contact" className="rounded-full bg-white px-6 py-2 font-extrabold text-brand-700">
            ติดต่อเจ้าหน้าที่
          </Link>
        </div>
      </div>
    </div>
  );
}

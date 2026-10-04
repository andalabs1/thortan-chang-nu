import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "ติดต่อช่างท่อตัน บุรีรัมย์",
  description: "โทรหาทีมช่างนุ 082-991-9434 หรือ 061-290-6295 ปรึกษาปัญหาท่อตันตลอด 24 ชม. ที่อยู่ 78 หมู่ 3 ต.หัวถนน อ.นางรอง จ.บุรีรัมย์ พร้อมแผนที่",
});

export default function Contact() {
  return (
    <>
    <div className="section-wrap max-w-4xl py-16 md:py-24">
      <p className="eyebrow text-center">CONTACT US</p>
      <h1 className="section-title mt-3 text-center">ติดต่อช่างนุ</h1>
      <p className="body-copy mt-4 text-center">พร้อมรับแจ้งปัญหาและนัดหมายตลอด 24 ชั่วโมง</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {SITE.phones.map((p) => (
          <a key={p.label} href={p.href} className="rounded-3xl bg-brand-900 p-8 text-center text-white transition hover:bg-brand-700">
            <p className="text-sm"><FaPhoneAlt className="mr-1 inline" /> โทรเลย</p>
            <p className="text-2xl font-extrabold">{p.label}</p>
          </a>
        ))}
      </div>
      <div className="mt-5 space-y-2 rounded-3xl border border-[#e9e9e3] bg-white p-7 leading-7">
        <p><b>ที่อยู่:</b> {SITE.address}</p>
        <p><b>อีเมล:</b> {SITE.email}</p>
        <p><b>Facebook:</b> <a className="text-brand-600 hover:underline" href={SITE.facebook}>facebook.com/thotancity</a></p>
        <p><b>TikTok:</b> <a className="text-brand-600 hover:underline" href={SITE.tiktok}>@thotancity</a></p>
        <p><b>เวลา:</b> {SITE.hours}</p>
        <a
          className="mt-4 inline-block rounded-full bg-brand-900 px-6 py-2 font-bold text-white"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`}
        >
          <FaMapMarkedAlt className="mr-1 inline" /> เปิดแผนที่นำทาง
        </a>
      </div>
    </div>
    <section aria-label="แผนที่ที่ตั้งท่อตัน by ช่างนุ" className="w-full">
      <iframe
        title="แผนที่ที่ตั้งท่อตัน by ช่างนุ อำเภอนางรอง จังหวัดบุรีรัมย์"
        src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
        className="block h-[320px] max-h-[400px] w-full border-0 sm:h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
    </>
  );
}

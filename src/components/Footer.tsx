import Link from "next/link";
import Image from "next/image";
import { HiArrowUpRight, HiChevronRight } from "react-icons/hi2";
import { SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-white">
      <div className="section-wrap grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4"><div className="shrink-0 rounded-2xl bg-white p-1"><Image src="/logo.png" alt="ท่อตันซิตี้" width={1275} height={1234} className="h-[74px] w-[76px] object-contain" /></div><p className="text-xl font-extrabold">ท่อตัน by ช่างนุ<span className="text-brand-500">.</span></p></div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">บริการแก้ท่อตัน ส้วมตัน และดูแลระบบท่อในบุรีรัมย์ พร้อมช่วยเหลือทุกวันตลอด 24 ชั่วโมง</p>
          <a href={SITE.phones[0].href} className="mt-6 inline-flex items-center gap-2 text-xl font-bold text-white hover:text-brand-400">{SITE.phones[0].label}<HiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div>
          <p className="font-bold">สำรวจเว็บ</p>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {[["หน้าแรก", "/"], ["บริการ", "/services"], ["อัตราค่าบริการ", "/pricing"], ["เกี่ยวกับเรา", "/about"], ["บทความ", "/articles"], ["ติดต่อเรา", "/contact"]].map(([label, href]) => <li key={href}><Link href={href} className="inline-flex items-center gap-1 hover:text-white"><HiChevronRight aria-hidden="true" className="text-brand-400" />{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-bold">บริการหลัก</p>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {SERVICES.slice(0, 5).map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`} className="inline-flex items-start gap-1 hover:text-white"><HiChevronRight aria-hidden="true" className="mt-1 shrink-0 text-brand-400" />{service.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-bold">ติดต่อเรา</p>
          <p className="mt-5 text-sm leading-7 text-white/65">{SITE.address}</p>
          <a href={`mailto:${SITE.email}`} className="mt-3 block break-all text-sm text-white/65 hover:text-white">{SITE.email}</a>
          <p className="mt-3 text-sm text-brand-400">{SITE.hours}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5"><div className="section-wrap flex flex-wrap justify-between gap-2 text-xs text-white/45"><span>© {new Date().getFullYear()} {SITE.name}. สงวนลิขสิทธิ์</span><span>บริการด้วยความใส่ใจ ทุกหน้างาน</span></div></div>
    </footer>
  );
}

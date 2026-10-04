import Link from "next/link";
import Image from "next/image";
import { HiChevronRight, HiOutlinePhone } from "react-icons/hi2";
import { MobileNav } from "@/components/MobileNav";
import { SITE } from "@/lib/site";

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/services", label: "บริการ" },
  { href: "/pricing", label: "ค่าบริการ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/articles", label: "บทความ" },
  { href: "/contact", label: "ติดต่อเรา" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ecece6] bg-[#faf9f6]/95 backdrop-blur-xl">
      <div className="section-wrap flex min-h-[78px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="ท่อตันซิตี้ กลับหน้าแรก">
          <Image src="/logo.png" alt="ท่อตันซิตี้" width={1275} height={1234} className="h-[68px] w-[70px] object-contain sm:h-[76px] sm:w-[79px]" priority />
        </Link>
        <nav aria-label="เมนูหลัก" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-semibold text-brand-900/75 transition hover:text-brand-600">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <span className="text-right text-xs text-slate-500">พร้อมให้บริการ<br /><b className="text-brand-900">ทุกวัน 24 ชั่วโมง</b></span>
          <a href={SITE.phones[0].href} className="btn-primary !px-5 !py-2.5 text-sm"><HiOutlinePhone aria-hidden="true" className="text-lg" /> โทรหาช่าง <HiChevronRight aria-hidden="true" /></a>
        </div>
        <MobileNav links={links} />
      </div>
    </header>
  );
}

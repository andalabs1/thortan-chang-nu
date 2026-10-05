import { FaLine, FaPhoneAlt } from "react-icons/fa";
import { SITE } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_auto] gap-2 border-t bg-white/95 p-2 backdrop-blur md:hidden">
      <a
        href={SITE.phones[0].href}
        className="rounded-xl bg-accent-500 py-3 text-center font-extrabold text-white shadow"
      >
        <FaPhoneAlt className="mr-1 inline text-sm" /> โทร {SITE.phones[0].label}
      </a>
      <a
        href={SITE.phones[1].href}
        className="rounded-xl bg-brand-600 py-3 text-center font-extrabold text-white shadow"
      >
        <FaPhoneAlt className="mr-1 inline text-sm" /> โทร {SITE.phones[1].label}
      </a>
      <a
        href={SITE.line}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ติดต่อช่างนุทาง LINE"
        className="flex items-center justify-center gap-1 rounded-xl bg-[#06c755] px-4 py-3 text-center font-extrabold text-white shadow"
      >
        <FaLine aria-hidden="true" className="text-xl" /> LINE
      </a>
    </div>
  );
}

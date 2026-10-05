"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";
import { SERVICES } from "@/lib/site";

export function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const onServicePage = pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="desktop-services-submenu"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-1 rounded-md text-sm font-semibold transition hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 ${onServicePage || open ? "text-brand-600" : "text-brand-900/75"}`}
      >
        บริการ
        <HiChevronDown aria-hidden="true" className={`text-base transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          id="desktop-services-submenu"
          className="absolute left-1/2 top-full z-50 mt-5 w-[360px] -translate-x-1/2 rounded-2xl border border-brand-900/10 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(23,38,38,0.35)]"
        >
          <nav aria-label="บริการย่อย" className="max-h-[min(70vh,520px)] overflow-y-auto">
            <Link href="/services" onClick={() => setOpen(false)} className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-bold transition hover:bg-brand-50 hover:text-brand-600 ${pathname === "/services" ? "bg-brand-50 text-brand-600" : "text-brand-900"}`}>
              บริการทั้งหมด <HiChevronRight aria-hidden="true" className="text-lg" />
            </Link>
            <div className="mx-3 my-1 border-t border-brand-900/10" />
            {SERVICES.map((service) => {
              const href = `/services/${service.slug}`;
              return (
                <Link key={service.slug} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined} className={`block rounded-xl px-3 py-2.5 text-sm font-semibold transition hover:bg-brand-50 hover:text-brand-600 ${pathname === href ? "bg-brand-50 text-brand-600" : "text-brand-900/80"}`}>
                  {service.title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}

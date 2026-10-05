"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowRight, HiChevronDown, HiChevronRight, HiOutlinePhone, HiXMark } from "react-icons/hi2";
import { CgMenuGridO } from "react-icons/cg";
import { SERVICES, SITE } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

type NavLink = { href: string; label: string };

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(pathname === "/services" || pathname.startsWith("/services/"));
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(pathname === "/services" || pathname.startsWith("/services/"));
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }

      if (event.key === "Tab" && drawerRef.current) {
        const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>("a, button"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeDrawer() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="เปิดเมนู"
        aria-controls="mobile-navigation-drawer"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-xl text-brand-900 transition hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      >
        <CgMenuGridO aria-hidden="true" className="text-2xl" />
      </button>
      {open && createPortal(
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button type="button" aria-label="ปิดเมนู" onClick={closeDrawer} className="mobile-drawer-backdrop absolute inset-0 bg-brand-900/60" />
          <aside
            ref={drawerRef}
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="mobile-drawer-panel absolute inset-y-0 right-0 flex w-[min(88vw,390px)] flex-col bg-[#faf9f6] shadow-2xl"
          >
            {/* <div className="flex items-center justify-between border-b border-brand-900/10 px-6 py-6">
              <div>
                <p id="mobile-navigation-title" className="text-lg font-extrabold text-brand-900">เมนู</p>
                <p className="mt-1 text-xs font-semibold text-brand-600">ท่อตัน by ช่างนุ</p>
              </div>
              <button ref={closeRef} type="button" aria-label="ปิดเมนู" onClick={closeDrawer} className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-900/15 bg-white text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
                <HiXMark aria-hidden="true" className="text-2xl" />
              </button>
            </div> */}
            <nav aria-label="เมนูมือถือ" className="flex-1 overflow-y-auto px-4 py-5">
              {links.map((link) => {
                const active = pathname === link.href;
                if (link.href === "/services") {
                  return (
                    <div key={link.href}>
                      <button
                        type="button"
                        onClick={() => setServicesOpen((value) => !value)}
                        aria-expanded={servicesOpen}
                        aria-controls="mobile-services-submenu"
                        className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-base font-bold transition ${pathname.startsWith("/services") ? "bg-brand-50 text-brand-600" : "text-brand-900 hover:bg-white"}`}
                      >
                        บริการ
                        <HiChevronDown aria-hidden="true" className={`text-xl transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {servicesOpen && (
                        <div id="mobile-services-submenu" className="mb-2 ml-5 border-l-2 border-brand-100 pl-3">
                          <Link href="/services" onClick={closeDrawer} aria-current={active ? "page" : undefined} className={`block rounded-xl px-4 py-2.5 text-sm font-bold transition hover:bg-white ${active ? "text-brand-600" : "text-brand-900"}`}>
                            บริการทั้งหมด
                          </Link>
                          {SERVICES.map((service) => {
                            const href = `/services/${service.slug}`;
                            return (
                              <Link key={service.slug} href={href} onClick={closeDrawer} aria-current={pathname === href ? "page" : undefined} className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-white ${pathname === href ? "text-brand-600" : "text-brand-900/80"}`}>
                                {service.title}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link key={link.href} href={link.href} onClick={closeDrawer} aria-current={active ? "page" : undefined} className={`flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold transition ${active ? "bg-brand-50 text-brand-600" : "text-brand-900 hover:bg-white"}`}>
                    {link.label}<HiChevronRight aria-hidden="true" className="text-xl" />
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-brand-900/10 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6">
              <p className="text-sm font-semibold text-brand-900">พร้อมให้บริการทุกวัน 24 ชั่วโมง</p>
              <a href={SITE.phones[0].href} onClick={closeDrawer} className="btn-primary mt-4 w-full">
                <HiOutlinePhone aria-hidden="true" className="text-xl" /> โทร {SITE.phones[0].label} <HiArrowRight aria-hidden="true" />
              </a>
              <div className="mt-4"><SocialLinks variant="light" /></div>
            </div>
          </aside>
        </div>,
        document.body,
      )}
    </div>
  );
}

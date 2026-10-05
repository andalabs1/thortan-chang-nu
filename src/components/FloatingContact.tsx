"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FaEnvelope, FaFacebookF, FaLine, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { SITE } from "@/lib/site";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const channels = [
    {
      label: `โทร ${SITE.phones[0].label}`,
      detail: "โทรสอบถามช่างได้ทันที",
      href: SITE.phones[0].href,
      Icon: FaPhoneAlt,
      iconClass: "bg-orange-100 text-orange-600",
    },
    {
      label: `โทร ${SITE.phones[1].label}`,
      detail: "เบอร์สำรอง",
      href: SITE.phones[1].href,
      Icon: FaPhoneAlt,
      iconClass: "bg-orange-100 text-orange-600",
    },
    {
      label: "LINE",
      detail: "แชตสอบถามอาการกับช่างนุ",
      href: SITE.line,
      Icon: FaLine,
      iconClass: "bg-[#e7f9eb] text-[#06c755]",
      external: true,
    },
    {
      label: "Facebook",
      detail: "ส่งข้อความถึงเพจท่อตัน-ซิตี้",
      href: SITE.facebook,
      Icon: FaFacebookF,
      iconClass: "bg-blue-100 text-[#1877f2]",
      external: true,
    },
    {
      label: "อีเมล",
      detail: SITE.email,
      href: `mailto:${SITE.email}`,
      Icon: FaEnvelope,
      iconClass: "bg-slate-100 text-slate-600",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-3 z-50 flex flex-col items-end sm:right-5 md:bottom-6 md:right-6"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="floating-contact-menu"
            aria-label="ช่องทางติดต่อช่าง"
            initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
            className="mb-2 max-h-[calc(100dvh-14rem)] w-[min(20rem,calc(100vw-1.5rem))] overflow-y-auto rounded-3xl border border-orange-100 bg-white p-2.5 shadow-[0_18px_55px_-18px_rgba(26,36,34,0.4)] md:max-h-[calc(100dvh-10rem)]"
          >
            <div className="rounded-2xl bg-[#fff4ec] px-3 py-2.5">
              <p className="text-base font-extrabold text-brand-900">ติดต่อช่างนุ</p>
              <p className="text-xs font-medium text-slate-600">สอบถามอาการและนัดหมายได้ตลอด 24 ชม.</p>
            </div>
            <div className="mt-1 space-y-0.5">
              {channels.map(({ label, detail, href, Icon, iconClass, external }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, delay: reduceMotion ? 0 : 0.04 + index * 0.04 }}
                  className="flex items-center gap-3 rounded-2xl px-2.5 py-2 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange-500"
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconClass}`}>
                    <Icon aria-hidden="true" className="text-base" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-sm font-bold text-brand-900">{label}</span>
                    <span className="block truncate text-xs text-slate-500">{detail}</span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="floating-contact-menu"
        aria-label={isOpen ? "ปิดช่องทางติดต่อช่าง" : "เปิดช่องทางติดต่อช่าง"}
        onClick={() => setIsOpen((open) => !open)}
        whileHover={reduceMotion ? undefined : { y: -4 }}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        className="group relative flex w-[108px] flex-col items-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
      >
        <span className="relative flex h-[94px] w-[94px] items-end justify-center ">
          <Image
            src="/images/contact-technician.webp"
            alt=""
            aria-hidden="true"
            width={94}
            height={94}
            className="h-[94px] w-[94px] object-contain object-bottom "
            priority
          />
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: reduceMotion ? 0 : 0.15 }}
                className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-900 text-white shadow-md"
              >
                <FaTimes aria-hidden="true" className="text-xs" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        <span className="-mt-1 rounded-full bg-orange-600 px-3.5 py-1.5 text-xs font-extrabold text-white shadow-lg transition-colors group-hover:bg-orange-700">
          สอบถามช่าง
        </span>
      </motion.button>
    </div>
  );
}

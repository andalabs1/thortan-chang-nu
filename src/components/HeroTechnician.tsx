"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TECHNICIANS = [
  {
    src: "/images/hero-technician.webp",
    alt: "ช่างนุถือเครื่องทะลวงท่อไฟฟ้า",
  },
  {
    src: "/images/contact-hero-technician.webp",
    alt: "ช่างนุยกนิ้วโป้งรับประกันงาน",
  },
  // {
  //   src: "/images/contact-technician.webp",
  //   alt: "ช่างนุพร้อมรับสายปรึกษาตลอด 24 ชั่วโมง",
  // },
];

const INTERVAL_MS = 4000;

export function HeroTechnician() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % TECHNICIANS.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute bottom-0 right-[-7%] z-20 h-[270px] w-[65%] opacity-50 sm:h-[390px] sm:w-[55%] sm:opacity-80 lg:right-[4%] lg:h-full lg:w-[43%] lg:max-w-[600px] lg:opacity-100">
      {TECHNICIANS.map((img, index) => {
        const isActive = index === active;
        return (
          <div
            key={img.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              sizes="(max-width: 640px) 65vw, (max-width: 1024px) 55vw, 43vw"
              className={`object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-1000 ease-in-out ${
                isActive ? "scale-100 translate-y-0" : "scale-[1.04] translate-y-3"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}

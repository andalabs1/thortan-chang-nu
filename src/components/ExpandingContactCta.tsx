"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiChevronRight } from "react-icons/hi2";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { SITE } from "@/lib/site";

export function ExpandingContactCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, contentHeight: 0 });
  const { width: viewportWidth, height: viewportHeight, contentHeight } = dimensions;
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  useEffect(() => {
    const updateDimensions = () => setDimensions({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      contentHeight: contentRef.current?.offsetHeight ?? 0,
    });
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const observer = new ResizeObserver(() => {
      const nextHeight = content.offsetHeight;
      setDimensions((current) => current.contentHeight === nextHeight
        ? current
        : { ...current, contentHeight: nextHeight });
    });
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  const gutter = viewportWidth >= 640 ? 24 : 20;
  const initialWidth = Math.max(0, Math.min(viewportWidth - gutter * 2, 1152 - gutter * 2));
  const animatedWidth = useTransform(scrollYProgress, [0, 1], [initialWidth, viewportWidth]);
  const expandedHeight = Math.max(contentHeight, viewportHeight);
  const animatedHeight = useTransform(scrollYProgress, [0, 1], [contentHeight, expandedHeight]);
  const animatedRadius = useTransform(scrollYProgress, [0, 1], [32, 0]);

  return (
    <section ref={sectionRef} className=" flex min-h-svh w-full items-center">
      <motion.div
        className="relative isolate mx-auto flex w-[calc(100%-40px)] max-w-[calc(72rem-40px)] 
        items-center justify-center overflow-hidden rounded-[2rem] text-center text-white sm:w-[calc(100%-48px)] sm:max-w-[calc(72rem-48px)]"
        style={{
          width: viewportWidth ? (reduceMotion ? viewportWidth : animatedWidth) : undefined,
          height: viewportHeight ? (reduceMotion ? expandedHeight : animatedHeight) : undefined,
          maxWidth: viewportWidth ? "none" : undefined,
          borderRadius: viewportWidth ? (reduceMotion ? 0 : animatedRadius) : undefined,
        }}
      >
        <Image
          src="/images/legacy/legacy-43.jpg"
          alt=""
          fill
          sizes="100vw"
          className="z-0 object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#102624]/85 via-[#172626]/70 to-[#7b3c22]/45" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#102624]/45 to-transparent" />
        <div ref={contentRef} className="relative z-20 w-full px-7 py-14 md:px-16 md:py-20">
          <p className="text-sm font-bold tracking-widest text-[#ffad7f]">WE ARE HERE TO HELP</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">ท่อตันตอนนี้? คุยกับช่างได้เลย</h2>
          <p className="mt-3 text-white/85">ส่งอาการเบื้องต้นหรือโทรปรึกษาได้ตลอด 24 ชั่วโมง</p>
          <a href={SITE.phones[0].href} className="btn-primary mt-8 !bg-white !text-brand-900 hover:!bg-brand-50">โทร {SITE.phones[0].label}<HiChevronRight aria-hidden="true" /></a>
        </div>
      </motion.div>
    </section>
  );
}

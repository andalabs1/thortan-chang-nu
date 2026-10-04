import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import type { Service } from "@/lib/site";

type Props = {
  service: Service;
  headingLevel: "h2" | "h3";
};

export function ServiceCard({ service, headingLevel: Heading }: Props) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative isolate flex min-h-[370px] overflow-hidden rounded-[2rem] bg-brand-900 text-white shadow-[0_12px_32px_rgba(23,38,38,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(23,38,38,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 md:min-h-[430px]"
    >
      <Image
        src={service.image}
        alt=""
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(max-width: 767px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1d326c] via-[#1d326c]/75 to-transparent" />
      <div className="relative mt-auto w-full p-7 sm:p-8">
        <Heading className="text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight tracking-tight">
          {service.title}
        </Heading>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
          {service.short}
        </p>
        <span className="mt-6 inline-flex items-center gap-3 text-base font-bold transition group-hover:gap-4">
          อ่านเพิ่มเติม <HiArrowRight aria-hidden="true" className="text-xl" />
        </span>
      </div>
    </Link>
  );
}

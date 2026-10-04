import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
import { Faq } from "@/components/Faq";
import { absoluteUrl, pageMetadata, serializeJsonLd } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return pageMetadata({
    path: `/services/${s.slug}`,
    title: `${s.title} บุรีรัมย์ 24 ชม.`,
    description: `${s.title} ในบุรีรัมย์–นางรอง ${s.short} ${s.price} ประกัน 45 วัน โทร 082-991-9434`,
    image: s.image,
    imageAlt: `${s.title} โดยทีมช่างนุ`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${s.slug}#service`),
    name: `${s.title} บุรีรัมย์`,
    description: s.short,
    url: absoluteUrl(`/services/${s.slug}`),
    provider: { "@id": absoluteUrl("/#business") },
    areaServed: { "@type": "AdministrativeArea", name: "จังหวัดบุรีรัมย์" },
  };
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(ld) }} />
      <h1 className="text-3xl font-extrabold">
        {s.title} บุรีรัมย์ — {s.price}
      </h1>
      <p className="mt-2 text-slate-500">{s.short} · ช่างพร้อมออก 24 ชม. ประกัน {SITE.guaranteeDays} วัน</p>
      <div className="relative mt-6 h-72 overflow-hidden rounded-2xl">
        <Image src={s.image} alt={`${s.title} บุรีรัมย์`} fill className="object-cover" />
      </div>
      <div className="mt-6 rounded-2xl border bg-white p-5">
        <h2 className="font-extrabold">อาการที่รับแก้</h2>
        <ul className="mt-2 space-y-1 text-sm leading-7">
          {s.symptoms.map((symptom) => (
            <li key={symptom} className="flex items-start gap-1"><HiChevronRight aria-hidden="true" className="mt-1.5 shrink-0 text-brand-600" />{symptom}</li>
          ))}
        </ul>
        <h2 className="mt-4 font-extrabold">วิธีทำงาน</h2>
        <p className="mt-1 text-sm leading-7 text-slate-600">
          ตรวจอาการและสภาพหน้างานก่อนเลือกวิธีแก้ แจ้งขอบเขตงานและค่าใช้จ่ายให้เข้าใจก่อนเริ่ม
          จากนั้นตรวจการใช้งานหลังทำ พร้อมดูแลตามเงื่อนไขรับประกัน {SITE.guaranteeDays} วัน
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {SITE.phones.map((p) => (
          <a key={p.label} href={p.href} className="rounded-full bg-accent-500 px-6 py-3 font-extrabold text-white">
            <FaPhoneAlt className="mr-1 inline text-sm" /> {p.label}
          </a>
        ))}
      </div>
      <h2 className="mt-10 font-extrabold">บริการอื่น</h2>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {others.map((o) => (
          <a key={o.slug} href={`/services/${o.slug}`} className="rounded-xl border bg-white p-4 hover:shadow">
            <p className="font-bold">{o.title}</p>
            <p className="text-sm text-brand-700">{o.price}</p>
          </a>
        ))}
      </div>
      <Faq />
    </div>
  );
}

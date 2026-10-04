import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { Faq } from "@/components/Faq";
import { pageMetadata } from "@/lib/seo";
import { AREAS, SERVICES, SITE } from "@/lib/site";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = AREAS.find((x) => x.slug === params.slug);
  if (!a) return {};
  return pageMetadata({
    path: `/areas/${a.slug}`,
    title: a.title,
    description: `${a.title} ${a.desc} ดูบริการและราคาเบื้องต้น โทร 082-991-9434 เพื่อปรึกษาอาการและเช็กคิวงาน`,
  });
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const a = AREAS.find((x) => x.slug === params.slug);
  if (!a) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">{a.title}</h1>
      <p className="mt-2 text-slate-500">{a.desc}</p>
      <h2 className="mt-8 text-xl font-extrabold text-brand-900">บริการที่รับนัดในพื้นที่</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {SERVICES.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border bg-white p-4 hover:shadow">
            <p className="font-bold">{s.title}</p>
            <p className="text-sm text-brand-700">{s.price}</p>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {SITE.phones.map((p) => (
          <a key={p.label} href={p.href} className="rounded-full bg-accent-500 px-6 py-3 font-extrabold text-white">
            <FaPhoneAlt className="mr-1 inline text-sm" /> {p.label}
          </a>
        ))}
      </div>
      <Faq />
    </div>
  );
}

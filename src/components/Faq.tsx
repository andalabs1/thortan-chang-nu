import { HiChevronDown } from "react-icons/hi2";
import { FAQS, SITE } from "@/lib/site";

export function Faq() {
  return (
    <section className="mx-auto mt-20 max-w-4xl px-5">
      <p className="eyebrow text-center">FREQUENTLY ASKED QUESTIONS</p>
      <h2 className="section-title mt-3 text-center">คำถามที่พบบ่อย</h2>
      <div className="mt-9 space-y-3">
        {FAQS.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-[#e9e9e3] bg-white px-6 py-5">
            <summary className="faq-summary flex cursor-pointer items-center justify-between gap-4 font-bold text-brand-900 focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
              <span>{f.q}</span>
              <HiChevronDown aria-hidden="true" className="shrink-0 text-xl text-brand-600 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-slate-500">
        สงสัยเพิ่มเติม โทร <a className="font-bold text-brand-700" href={SITE.phones[0].href}>{SITE.phones[0].label}</a> ปรึกษาฟรี 24 ชม.
      </p>
    </section>
  );
}

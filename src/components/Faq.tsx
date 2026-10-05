import Link from "next/link";
import { HiChevronDown } from "react-icons/hi2";
import { FAQS, SITE } from "@/lib/site";

export function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="mt-20 bg-[#f2f1ec] py-16 md:mt-24 md:py-24">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div className="">
          <p className="eyebrow">ข้อมูลก่อนใช้บริการ</p>
          <h2 id="faq-heading" className="section-title mt-3">คำถามที่พบบ่อย</h2>
          <p className="mt-5 max-w-md leading-8 text-slate-600">
            รวมคำตอบเรื่องประเภทงาน วิธีแก้ ราคา การนัดหมาย และการดูแลหลังงาน เพื่อช่วยให้คุณตัดสินใจได้ชัดเจนก่อนเรียกช่าง
          </p>
          {/* <div className="mt-8 rounded-3xl bg-brand-900 p-6 text-white shadow-[0_18px_35px_-25px_rgba(23,38,38,0.7)]">
            <p className="text-sm font-semibold text-[#ffad7f]">ยังไม่แน่ใจว่าเป็นปัญหาจุดไหน?</p>
            <p className="mt-2 text-sm leading-7 text-white/85">เล่าอาการให้ช่างช่วยประเมินเบื้องต้นและเช็กคิวเข้าบริการได้ตลอด 24 ชั่วโมง</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a href={SITE.phones[0].href} className="rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-brand-900 transition hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                โทร {SITE.phones[0].label}
              </a>
              <Link href="/pricing" className="text-sm font-bold text-white underline decoration-white/50 underline-offset-4 transition hover:decoration-white">
                ดูอัตราค่าบริการ
              </Link>
            </div>
          </div> */}
        </div>
        <div className="space-y-3">
          {FAQS.map((f, index) => (
            <details key={f.q} className="group overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-[0_10px_30px_-26px_rgba(23,38,38,0.45)] transition-colors open:border-brand-600/30">
              <summary className="faq-summary flex cursor-pointer items-center gap-4 px-5 py-5 text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:px-6">
                <span className="self-start pt-0.5 text-xs font-extrabold tracking-wider text-brand-600">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-extrabold leading-7">{f.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors group-open:bg-brand-600 group-open:text-white">
                  <HiChevronDown aria-hidden="true" className="text-lg transition-transform duration-200 group-open:rotate-180" />
                </span>
              </summary>
              <div className="border-t border-brand-900/10 px-5 pb-5 pt-4 sm:px-6">
                <p className="pl-7 text-sm leading-8 text-slate-600 sm:pl-8">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

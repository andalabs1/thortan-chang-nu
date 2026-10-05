"use client";

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { SITE } from "@/lib/site";

const SYMPTOMS = ["ท่อน้ำทิ้งตัน", "ส้วมตัน / ชักโครกตัน", "ซิงก์ / อ่างล้างจานตัน", "ท่อเมน / ท่อส่วนกลาง", "อื่นๆ"];

export function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [symptom, setSymptom] = useState(SYMPTOMS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9) {
      setError("กรุณากรอกเบอร์โทรให้ครบ (อย่างน้อย 9 หลัก)");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-brand-50 p-6 text-center">
        <HiOutlineCheckCircle aria-hidden="true" className="mx-auto text-4xl text-brand-600" />
        <p className="mt-3 font-extrabold text-brand-900">รับเรื่องแล้ว{name ? ` คุณ${name}` : ""}</p>
        <p className="mt-1 text-sm leading-7 text-slate-600">
          ช่างจะโทรกลับที่ {phone} เรื่อง{symptom}โดยเร็วที่สุด
          <br />รีบใช้ รีบด่วน โทรได้เลยตอนนี้
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {SITE.phones.map((p) => (
            <a key={p.label} href={p.href} className="btn-primary !px-5 !py-2.5 !text-sm">
              <FaPhoneAlt aria-hidden="true" className="text-xs" /> {p.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-[#e9e6e0] bg-white px-4 py-3 text-sm text-brand-900 outline-none transition placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15";

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="cb-name" className="mb-1 block text-xs font-bold text-slate-600">ชื่อ</label>
          <input
            id="cb-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="เช่น คุณสมชาย"
            className={inputCls}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cb-phone" className="mb-1 block text-xs font-bold text-slate-600">เบอร์โทร <span className="text-red-500">*</span></label>
          <input
            id="cb-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08x-xxx-xxxx"
            inputMode="tel"
            autoComplete="tel"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cb-symptom" className="mb-1 block text-xs font-bold text-slate-600">อาการเบื้องต้น</label>
        <select id="cb-symptom" value={symptom} onChange={(e) => setSymptom(e.target.value)} className={inputCls}>
          {SYMPTOMS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cb-message" className="mb-1 block text-xs font-bold text-slate-600">รายละเอียดเพิ่มเติม</label>
        <textarea
          id="cb-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="เล่าอาการและแจ้งพื้นที่หน้างานได้ที่นี่"
          rows={4}
          className={`${inputCls} resize-y`}
        />
      </div>
      {error && <p role="alert" className="text-sm font-bold text-red-600">{error}</p>}
      <button type="submit" className="btn-primary w-full">
        ส่งเบอร์ให้ช่างโทรกลับ
      </button>
      <p className="text-center text-xs leading-6 text-slate-400">
        ไม่มีสแปม ช่างโทรกลับเฉพาะเรื่องงานเท่านั้น
      </p>
    </form>
  );
}

import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/services",
  title: "บริการทะลวงท่อตัน ส้วมตัน และลอกท่อ",
  description: "รวมบริการแก้ท่อตัน ส้วมตัน ซิงก์ล้างจานตัน ลอกท่อเมน ล้างบ่อดักไขมัน และลอกรางกัตเตอร์ในบุรีรัมย์ ดูราคาเริ่มต้นและรายละเอียดงาน",
  image: SERVICES[0].image,
  imageAlt: "บริการทะลวงท่อตันโดยทีมช่างนุ",
});

export default function ServicesIndex() {
  return (
    <div className="section-wrap py-16 md:py-24">
      <p className="eyebrow text-center">OUR SERVICES</p>
      <h1 className="section-title mt-3 text-center">บริการแก้ไขท่อตันครบวงจร</h1>
      <p className="body-copy mx-auto mt-4 max-w-2xl text-center">ดูรายละเอียดงานแต่ละประเภทและราคาเริ่มต้นก่อนนัดหมาย ทีมช่างพร้อมช่วยประเมินอาการเบื้องต้น</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} headingLevel="h2" />)}
      </div>
    </div>
  );
}

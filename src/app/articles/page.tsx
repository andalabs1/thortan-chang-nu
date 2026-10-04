import { ArticleCard } from "@/components/ArticleCard";
import { ARTICLES } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/articles",
  title: "บทความเรื่องท่อและการดูแลบ้าน",
  description: "คำแนะนำเรื่องท่อตัน ส้วมตัน การดูแลซิงก์ และสัญญาณที่ควรเรียกช่าง จากทีมท่อตัน by ช่างนุ",
  image: ARTICLES[0].image,
  imageAlt: "ภาพประกอบบทความเรื่องท่อตันและการดูแลระบบท่อ",
});

export default function ArticlesPage() {
  return (
    <div className="section-wrap py-16 md:py-24">
      <p className="eyebrow">KNOWLEDGE & TIPS</p>
      <h1 className="section-title mt-3">บทความน่ารู้</h1>
      <p className="body-copy mt-4 max-w-2xl">เคล็ดลับดูแลระบบท่อในบ้าน วิธีสังเกตอาการอุดตัน และคำแนะนำก่อนเรียกช่าง</p>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {ARTICLES.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block min-w-0 rounded-2xl border border-[#ecece6] bg-white p-2.5 shadow-[0_10px_30px_-24px_rgba(23,38,38,0.5)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_-22px_rgba(23,38,38,0.3)]"
    >
      <div className="relative aspect-[1.55] overflow-hidden rounded-xl bg-[#f2f1ec]">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 32vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-1 pb-2 pt-3">
        <h3 className="line-clamp-2 min-h-[3rem] text-sm font-extrabold leading-6 text-brand-900 transition group-hover:text-brand-600 sm:min-h-[3.5rem] sm:text-base sm:leading-7">
          {article.title}
        </h3>
        <p className="mt-2 text-[11px] font-semibold text-brand-600 sm:text-xs">{article.category}</p>
        <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">โดยทีมช่างนุ</p>
      </div>
    </Link>
  );
}

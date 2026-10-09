import type { MetadataRoute } from "next";
import { AREAS, SERVICES } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";
import { absoluteUrl } from "@/lib/seo";

type Entry = {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: Entry[] = [
    { path: "/", changeFrequency: "daily", priority: 1.0 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/articles", changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: Entry[] = SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const areaPages: Entry[] = AREAS.map((a) => ({
    path: `/areas/${a.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articlePages: Entry[] = ARTICLES.map((a) => ({
    path: `/articles/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...articlePages].map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

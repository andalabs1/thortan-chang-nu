import type { MetadataRoute } from "next";
import { AREAS, SERVICES } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/pricing", "/contact", "/services", "/about", "/articles",
    ...ARTICLES.map((article) => `/articles/${article.slug}`),
    ...SERVICES.map((service) => `/services/${service.slug}`),
    ...AREAS.map((area) => `/areas/${area.slug}`),
  ];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}

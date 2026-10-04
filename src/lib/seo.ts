import type { Metadata } from "next";
import { SITE } from "@/lib/site";

// Set NEXT_PUBLIC_SITE_URL to the live domain before deploying.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.thotan-city.com").replace(/\/+$/, "");

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/[\u007f-\uffff<>&]/g, (character) =>
    `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

type PageSeo = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export function pageMetadata({
  path,
  title,
  description,
  image = "/images/legacy/legacy-43.jpg",
  imageAlt = "ทีมท่อตัน by ช่างนุ กำลังทำงาน",
  type = "website",
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = `${title} | ${SITE.name}`;
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "th_TH",
      siteName: SITE.name,
      url,
      title: socialTitle,
      description,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
}

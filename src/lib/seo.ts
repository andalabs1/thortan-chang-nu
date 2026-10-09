import type { Metadata } from "next";
import { SITE } from "@/lib/site";

// Canonical production domain ของ ท่อตันซิตี้ (ท่อตัน by ช่างนุ)
// ตั้งค่า NEXT_PUBLIC_SITE_URL บน hosting หากต้องการเปลี่ยนโดเมน canonical
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.xn--c3ctbfl2j3a0ak6pta.com").replace(/\/+$/, "");

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/[\u007f-\uffff<>&]/g, (character) =>
    `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

const DEFAULT_KEYWORDS = [
  "ท่อตัน",
  "ท่อตันซิตี้",
  "ช่างท่อตัน",
  "ทะลวงท่อตัน",
  "ส้วมตัน",
  "ชักโครกตัน",
  "อ่างล้างจานตัน",
  "ลอกท่อ",
  "ลอกท่อเมน",
  "ช่างนุ",
  "ท่อตัน กรุงเทพ",
  "ท่อตัน นนทบุรี",
  "ท่อตัน ปทุมธานี",
  "ท่อตัน สมุทรปราการ",
  "ท่อตัน นครปฐม",
  "ท่อตัน สมุทรสาคร",
];

type PageSeo = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
};

export function pageMetadata({
  path,
  title,
  description,
  image = "/images/legacy/legacy-43.jpg",
  imageAlt = "ทีมท่อตัน by ช่างนุ กำลังทำงาน",
  type = "website",
  keywords,
  noIndex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = `${title} | ${SITE.name}`;
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    authors: [{ name: SITE.name, url: absoluteUrl("/") }],
    creator: SITE.name,
    publisher: SITE.name,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      locale: "th_TH",
      siteName: SITE.name,
      url,
      title: socialTitle,
      description,
      images: [{ url: imageUrl, alt: imageAlt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
}

import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/StickyCta";
import { absoluteUrl, serializeJsonLd, SITE_URL } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/logo.png", apple: "/logo.png" },
  title: {
    default: "ช่างท่อตัน บุรีรัมย์ 24 ชม. ท่อตัน by ช่างนุ | ประกัน 45 วัน",
    template: "%s | ท่อตัน by ช่างนุ",
  },
  description:
    "ทะลวงท่อตัน ส้วมตัน ชักโครกตัน อ่างล้างจานตัน ลอกท่อเมน บุรีรัมย์–นางรอง เปิด 24 ชม. ด้วยงูเหล็กไฟฟ้า ไม่ต้องทุบ แก้ไม่ได้ไม่คิดเงิน ประกัน 45 วัน โทร 082-991-9434",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: SITE.name,
    title: "ช่างท่อตัน บุรีรัมย์ 24 ชม. ท่อตัน by ช่างนุ",
    description: "ทะลวงท่อตัน ส้วมตัน และลอกท่อในบุรีรัมย์–นางรอง พร้อมให้คำปรึกษา 24 ชม. ประกัน 45 วัน",
    url: absoluteUrl("/"),
    images: [{ url: absoluteUrl("/images/legacy/legacy-43.jpg"), alt: "ทีมช่างท่อตัน by ช่างนุ กำลังทำงาน" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ช่างท่อตัน บุรีรัมย์ 24 ชม. | ท่อตัน by ช่างนุ",
    description: "ทะลวงท่อตัน ส้วมตัน และลอกท่อในบุรีรัมย์–นางรอง พร้อมให้คำปรึกษา 24 ชม.",
    images: [absoluteUrl("/images/legacy/legacy-43.jpg")],
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": absoluteUrl("/#business"),
  name: `${SITE.name} (${SITE.brandAlt})`,
  url: absoluteUrl("/"),
  image: absoluteUrl("/images/legacy/legacy-43.jpg"),
  logo: absoluteUrl("/logo.png"),
  telephone: "+66829919434",
  email: SITE.email,
  sameAs: [SITE.facebook, SITE.tiktok],
  address: {
    "@type": "PostalAddress",
    streetAddress: "78 หมู่ 3 ต.หัวถนน",
    addressLocality: "อ.นางรอง",
    addressRegion: "จ.บุรีรัมย์",
    postalCode: "31110",
    addressCountry: "TH",
  },
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "฿฿",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(localBusinessLd) }} />
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}

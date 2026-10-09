import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Header } from "@/components/Header";
import { absoluteUrl, serializeJsonLd, SITE_URL } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/logo.png", apple: "/logo.png" },
  title: {
    default: "ช่างท่อตัน กรุงเทพฯ–ปริมณฑล 24 ชม. ท่อตัน by ช่างนุ | ประกัน 45 วัน",
    template: "%s | ท่อตัน by ช่างนุ",
  },
  description:
    "ทะลวงท่อตัน ส้วมตัน ชักโครกตัน อ่างล้างจานตัน ลอกท่อเมน กรุงเทพฯ–ปริมณฑล เปิด 24 ชม. ด้วยงูเหล็กไฟฟ้า ไม่ต้องทุบ แก้ไม่ได้ไม่คิดเงิน ประกัน 45 วัน โทร 082-991-9434",
  keywords: [
    "ท่อตัน",
    "ท่อตันซิตี้",
    "ช่างท่อตัน",
    "ทะลวงท่อตัน",
    "ส้วมตัน",
    "ชักโครกตัน",
    "อ่างล้างจานตัน",
    "ลอกท่อเมน",
    "ท่อตัน กรุงเทพ",
    "ท่อตัน นนทบุรี",
    "ท่อตัน ปทุมธานี",
    "ท่อตัน สมุทรปราการ",
    "ท่อตัน นครปฐม",
    "ท่อตัน สมุทรสาคร",
    "ช่างนุ",
  ],
  authors: [{ name: SITE.name, url: absoluteUrl("/") }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Plumbing Service",
  formatDetection: { email: true, address: true, telephone: true },
  alternates: { canonical: absoluteUrl("/") },
  robots: {
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
    type: "website",
    locale: "th_TH",
    siteName: SITE.name,
    title: "ช่างท่อตัน กรุงเทพฯ–ปริมณฑล 24 ชม. ท่อตัน by ช่างนุ",
    description: "ทะลวงท่อตัน ส้วมตัน และลอกท่อในกรุงเทพฯ–ปริมณฑล พร้อมให้คำปรึกษา 24 ชม. ประกัน 45 วัน",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/images/legacy/legacy-43.jpg"),
        alt: "ทีมช่างท่อตัน by ช่างนุ กำลังทำงาน",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ช่างท่อตัน กรุงเทพฯ–ปริมณฑล 24 ชม. | ท่อตัน by ช่างนุ",
    description: "ทะลวงท่อตัน ส้วมตัน และลอกท่อในกรุงเทพฯ–ปริมณฑล พร้อมให้คำปรึกษา 24 ชม.",
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
  sameAs: [SITE.facebook, SITE.tiktok, SITE.youtube],
  hasMap: "https://www.google.com/maps?q=13.904234,100.346055",
  priceRange: "฿฿",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47/922 บ้านร่มเงาไม้ ต.บางคูรัด",
    addressLocality: "อ.บางบัวทอง",
    addressRegion: "จ.นนทบุรี",
    postalCode: "11110",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.904234,
    longitude: 100.346055,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  openingHours: "Mo-Su 00:00-24:00",
  areaServed: [
    { "@type": "AdministrativeArea", name: "กรุงเทพมหานคร" },
    { "@type": "AdministrativeArea", name: "จังหวัดนนทบุรี" },
    { "@type": "AdministrativeArea", name: "จังหวัดปทุมธานี" },
    { "@type": "AdministrativeArea", name: "จังหวัดสมุทรปราการ" },
    { "@type": "AdministrativeArea", name: "จังหวัดนครปฐม" },
    { "@type": "AdministrativeArea", name: "จังหวัดสมุทรสาคร" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(localBusinessLd) }} />
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        {/* <StickyCta /> */}
        <FloatingContact />
      </body>
    </html>
  );
}

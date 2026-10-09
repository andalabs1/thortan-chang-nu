"use client";

import { useEffect, useState, type ReactNode } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { isLineInAppBrowser } from "@/lib/browser";

type GoogleMapsEmbedProps = {
  query: string;
  title: string;
  className: string;
  iframeClassName: string;
  fallbackClassName: string;
  zoom?: number;
  showOpenLink?: boolean;
  children?: ReactNode;
};

function getGoogleMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function GoogleMapsEmbed({
  query,
  title,
  className,
  iframeClassName,
  fallbackClassName,
  zoom,
  showOpenLink = true,
  children,
}: GoogleMapsEmbedProps) {
  const [isLine, setIsLine] = useState(false);

  useEffect(() => {
    setIsLine(isLineInAppBrowser());
  }, []);

  const mapUrl = getGoogleMapsUrl(query);

  return (
    <div>
      <div className={className}>
        {isLine ? (
          <div className={`flex flex-col items-center justify-center gap-3 bg-[#f4f2ec] px-6 text-center ${fallbackClassName}`}>
            <p className="font-bold text-brand-900">ดูตำแหน่งและเส้นทางบน Google Maps</p>
            <a
              href={mapUrl}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              เปิดแผนที่ Google Maps <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        ) : (
          <>
            <iframe
              title={title}
              src={`https://www.google.com/maps?q=${encodeURIComponent(query)}${zoom ? `&z=${zoom}` : ""}&output=embed`}
              className={iframeClassName}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            {children}
          </>
        )}
      </div>
      {showOpenLink && !isLine && (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          เปิดแผนที่ Google Maps <HiArrowUpRight aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

import { FaFacebookF, FaLine, FaTiktok, FaYoutube } from "react-icons/fa";
import { SITE } from "@/lib/site";

const SOCIALS = [
  {
    key: "facebook",
    name: "Facebook",
    label: "Facebook ท่อตัน-ซิตี้",
    handle: "thotancity",
    href: SITE.facebook,
    Icon: FaFacebookF,
    hover: "hover:bg-[#1877f2] hover:border-[#1877f2]",
  },
  {
    key: "tiktok",
    name: "TikTok",
    label: "TikTok @thotancity",
    handle: SITE.tiktokLabel,
    href: SITE.tiktok,
    Icon: FaTiktok,
    hover: "hover:bg-black hover:border-black",
  },
  {
    key: "youtube",
    name: "YouTube",
    label: "YouTube @thotan-city",
    handle: SITE.youtubeLabel,
    href: SITE.youtube,
    Icon: FaYoutube,
    hover: "hover:bg-[#ff0000] hover:border-[#ff0000]",
  },
  {
    key: "line",
    name: "LINE",
    label: "LINE ช่างนุ",
    handle: "เพิ่มเพื่อน LINE",
    href: SITE.line,
    Icon: FaLine,
    hover: "hover:bg-[#06c755] hover:border-[#06c755]",
  },
];

export function SocialLinks({
  variant = "dark",
  showLabels = false,
}: {
  variant?: "dark" | "light";
  showLabels?: boolean;
}) {
  const base =
    variant === "dark"
      ? "border-white/15 bg-white/5 text-white/80"
      : "border-brand-900/10 bg-white text-brand-900 shadow-sm";
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {SOCIALS.map(({ key, name, label, handle, href, Icon, hover }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={key === "line" ? "ติดต่อช่างนุทาง LINE" : `ติดตาม ${label}`}
          title={label}
          className={`inline-flex h-11 items-center justify-center gap-2 rounded-full border px-3 transition hover:text-white ${base} ${hover} ${
            showLabels ? "min-w-[11rem] px-4" : "w-11 px-0"
          }`}
        >
          <Icon aria-hidden="true" className="text-lg" />
          {showLabels && (
            <span className="text-left leading-tight">
              <span className="block text-[11px] font-semibold uppercase tracking-wider opacity-70">
                {name}
              </span>
              <span className="block text-sm font-bold">
                {handle}
              </span>
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

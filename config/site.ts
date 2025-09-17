import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Cossim Ltd",
  description:
    "Premier B2B logistics solutions in Kenya. Specializing in last-mile delivery, pickup stations, warehousing, and fulfillment services. Express, same-day, and next-day delivery across Kenya.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/cossimltd",
    github: "https://github.com/cossim/website",
  },
  mailSupport: "support@cossim.co.ke",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Services",
    items: [
      { title: "Last Mile Delivery", href: "/lastmile" },
      { title: "Pickup Stations", href: "/pickup-stations" },
      { title: "Warehousing", href: "/warehousing" },
      { title: "Track Package", href: "/track" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Careers", href: "/careers" },
      { title: "News", href: "/news" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "Help Center", href: "/help" },
      { title: "API Documentation", href: "/docs" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
];

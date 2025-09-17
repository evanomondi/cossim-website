"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { SiteFooter } from "@/components/layout/site-footer";

// Dynamic import to avoid SSR issues
const CardNav = dynamic(() => import("@/components/shared/CardNav"), { 
  ssr: false,
  loading: () => <div className="h-16" />
});

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Navigation items for CardNav
  const navItems = [
    {
      label: "Services",
      bgColor: "#FF6B35",
      textColor: "#fff",
      links: [
        { label: "Last Mile", href: "/lastmile", ariaLabel: "Last Mile Delivery Services" },
        { label: "Pickup Stations", href: "/pickup-stations", ariaLabel: "Pickup Station Services" },
        { label: "Warehousing", href: "/warehousing", ariaLabel: "Warehousing Solutions" }
      ]
    },
    {
      label: "Company", 
      bgColor: "#1A1A1A",
      textColor: "#fff",
      links: [
        { label: "About Us", href: "/about", ariaLabel: "About Cossim" },
        { label: "Contact", href: "/contact", ariaLabel: "Contact Cossim" }
      ]
    },
    {
      label: "Support",
      bgColor: "#4A4A4A", 
      textColor: "#fff",
      links: [
        { label: "Track Package", href: "/track", ariaLabel: "Track your package" },
        { label: "Help Center", href: "/help", ariaLabel: "Help Center" }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {!isHomePage && (
        <div className="relative z-20">
          <CardNav
            logo="/_static/cossim-logo.svg"
            logoAlt="Cossim Logo"
            items={navItems}
            baseColor="#fff"
            buttonBgColor="#FF6B35"
            buttonTextColor="#fff"
          />
        </div>
      )}
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

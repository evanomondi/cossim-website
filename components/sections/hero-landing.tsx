import Link from "next/link";
import dynamic from "next/dynamic";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

// Dynamic imports to avoid SSR issues with Three.js
const PixelBlast = dynamic(() => import("@/components/shared/PixelBlast"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-50" />
});
const CardNav = dynamic(() => import("@/components/shared/CardNav"), { 
  ssr: false,
  loading: () => <div className="h-16" />
});

export default async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/mickasmt/next-saas-stripe-starter",
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

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
    <section className="relative min-h-screen overflow-hidden">
      {/* PixelBlast Background - Fixed to cover full viewport starting from absolute top */}
      <div className="fixed inset-0 w-full h-full z-0" style={{ top: 0, left: 0 }}>
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#FF6B35"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
      
      {/* CardNav Navigation - Floating at the top */}
      <CardNav
        logo="/_static/cossim-logo.svg"
        logoAlt="Cossim Logo"
        items={navItems}
        baseColor="rgba(255, 255, 255, 0.95)"
        menuColor="#fff"
        buttonBgColor="#FF6B35"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      
      {/* Main Content - Centered vertically with proper spacing */}
      <div className="container relative z-10 max-w-7xl flex items-center justify-center min-h-screen pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <Link
              href="/pickup-stations"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
                "px-4",
              )}
            >
              <span className="mr-3">🚀</span>
              <span className="hidden md:flex">New:&nbsp;</span> 50+ Pickup Stations
              <Icons.mapPin className="ml-2 size-3.5" />
            </Link>

            <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
              Kenya's Premier{" "}
              <span className="text-gradient_cossim font-extrabold">
                Logistics Partner
              </span>
            </h1>

            <p
              className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
              style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              From express delivery to warehousing solutions, we provide comprehensive B2B logistics services 
              that keep your business moving forward. Trusted by businesses across Kenya.
            </p>

            <div
              className="flex justify-center lg:justify-start space-x-2 md:space-x-4"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <Link
                href="/pricing"
                prefetch={true}
                className={cn(
                  buttonVariants({ size: "lg", rounded: "default" }),
                  "gap-2",
                )}
              >
                <span>Get Pricing</span>
                <Icons.arrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                    rounded: "default",
                  }),
                  "px-5 gap-2",
                )}
              >
                <Icons.phone className="size-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/_static/illustrations/package-delivery.svg"
                alt="Package delivery illustration"
                className="max-w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

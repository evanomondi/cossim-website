import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/page-hero";
import CTASection from "@/components/shared/cta-section";
import FeatureSpotlightCard from "@/components/shared/feature-spotlight-card";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Last Mile Delivery Services - Cossim Ltd",
  description: "Express 1-hour delivery, same-day, and next-day logistics services across Kenya. Real-time tracking and cash collection available.",
});

const deliveryServices = [
  {
    title: "Express Delivery",
    subtitle: "1-Hour Service",
    description: "Ultra-fast delivery for urgent packages within major cities. Perfect for time-sensitive documents and small parcels.",
    features: [
      "1-hour delivery within city centers",
      "Real-time GPS tracking",
      "SMS & WhatsApp notifications",
      "Proof of delivery with photos"
    ],
    icon: "truck",
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600"
  },
  {
    title: "Same Day Delivery",
    subtitle: "Within 6 Hours",
    description: "Reliable same-day delivery across Kenya's major cities. Ideal for e-commerce and business-to-business deliveries.",
    features: [
      "Delivery within 6 hours",
      "Coverage in all major cities",
      "Cash on delivery available",
      "Bulk delivery discounts"
    ],
    icon: "truck",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    title: "Next Day Delivery",
    subtitle: "24-Hour Service",
    description: "Cost-effective next-day delivery nationwide. Perfect for regular business operations and scheduled deliveries.",
    features: [
      "Nationwide coverage",
      "Scheduled delivery windows",
      "Return logistics available",
      "Enterprise pricing available"
    ],
    icon: "truck",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Book Your Delivery",
    description: "Place your order online or call our customer service. Provide pickup and delivery details.",
    icon: "phone"
  },
  {
    step: "02", 
    title: "Package Pickup",
    description: "Our rider collects your package from the specified location with proper documentation.",
    icon: "package"
  },
  {
    step: "03",
    title: "Real-time Tracking",
    description: "Track your delivery in real-time via SMS, WhatsApp, or our online portal.",
    icon: "search"
  },
  {
    step: "04",
    title: "Safe Delivery",
    description: "Package delivered safely with proof of delivery and payment collection if required.",
    icon: "check"
  }
];

// Rally-style comparison component
function DeliveryComparison() {
  return (
    <div className="py-20">
      <MaxWidthWrapper>
        <HeaderSection
          title="Without Cossim vs With Cossim"
          subtitle="See the difference our last-mile delivery makes for your business"
        />
        
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Without Cossim */}
          <div className="rounded-xl border bg-red-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-red-900">Without Cossim</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Icons.warning className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Customer calling</p>
                  <p className="text-sm text-gray-600">5m ago</p>
                  <p className="mt-1 text-sm text-gray-500">"Where is my package? It was supposed to arrive yesterday! 😤"</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Icons.warning className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manual tracking</p>
                  <p className="text-sm text-gray-600">10m ago</p>
                  <p className="mt-1 text-sm text-gray-500">Calling multiple couriers to find package location</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Icons.warning className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Lost revenue</p>
                  <p className="text-sm text-gray-600">15m ago</p>
                  <p className="mt-1 text-sm text-gray-500">Customer cancelled order due to delivery delay</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* With Cossim */}
          <div className="rounded-xl border bg-green-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-green-900">With Cossim</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Icons.check className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Package dispatched</p>
                  <p className="text-sm text-gray-600">Just now</p>
                  <p className="mt-1 text-sm text-gray-500">Automatic SMS sent to customer with tracking link</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Icons.check className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Real-time tracking</p>
                  <p className="text-sm text-gray-600">Ongoing</p>
                  <p className="mt-1 text-sm text-gray-500">Customer can track delivery progress in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Icons.check className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Delivered successfully</p>
                  <p className="text-sm text-gray-600">30 min ago</p>
                  <p className="mt-1 text-sm text-gray-500">Package delivered with photo proof and payment collected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default function LastMilePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Last Mile Delivery"
        highlightText="That Works"
        description="From express 1-hour delivery to reliable next-day service, we ensure your packages reach their destination safely and on time across Kenya."
        primaryButton={{ text: "Get Quote" }}
        secondaryButton={{ text: "Track Package" }}
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <HeaderSection
            title="Choose Your Delivery Speed"
            subtitle="Flexible delivery options to match your business needs"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {deliveryServices.map((service, index) => {
              const spotlightColors = [
                "rgba(239, 68, 68, 0.2)", // Red for Express
                "rgba(59, 130, 246, 0.2)", // Blue for Same Day  
                "rgba(34, 197, 94, 0.2)"  // Green for Next Day
              ];
              
              return (
                <FeatureSpotlightCard
                  key={index}
                  title={service.title}
                  subtitle={service.subtitle}
                  description={service.description}
                  icon={service.icon as keyof typeof Icons}
                  iconBgColor={service.color.includes("red") ? "bg-red-100" : service.color.includes("blue") ? "bg-blue-100" : "bg-green-100"}
                  iconTextColor={service.iconColor}
                  spotlightColor={spotlightColors[index]}
                />
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Rally-style Comparison */}
      <DeliveryComparison />

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <HeaderSection
            title="How It Works"
            subtitle="Simple steps to get your packages delivered"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = Icons[step.icon as keyof typeof Icons];
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                    <Icon className="h-8 w-8 text-cossim-orange" />
                  </div>
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-cossim-orange">STEP {step.step}</span>
                    <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Delivery?"
        description="Join hundreds of businesses that trust Cossim for their last-mile delivery needs."
        primaryButton={{ text: "Get Started Today" }}
        secondaryButton={{ text: "Contact Sales" }}
        backgroundColor="orange"
      />
    </div>
  );
}

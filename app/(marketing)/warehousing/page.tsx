import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/shared/page-hero";
import CTASection from "@/components/shared/cta-section";
import FeatureSpotlightCard from "@/components/shared/feature-spotlight-card";

export const metadata: Metadata = constructMetadata({
  title: "Warehousing & Fulfillment Services - Cossim Ltd",
  description: "Comprehensive warehousing solutions including storage, inventory management, and fulfillment services. On-site and customer premises options available.",
});

const warehousingSolutions = [
  {
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage facilities across Kenya",
    icon: "warehouse",
    features: [
      "24/7 security monitoring",
      "Climate-controlled environment",
      "Flexible storage periods",
      "Insurance coverage available",
      "Easy access and retrieval"
    ],
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    title: "Fulfillment Services", 
    description: "End-to-end order fulfillment from receiving to shipping",
    icon: "package",
    features: [
      "Inventory receiving & inspection",
      "Order processing & picking",
      "Professional packing",
      "Shipping coordination",
      "Returns processing"
    ],
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600"
  },
  {
    title: "Fulfillment as a Service",
    description: "On-premises fulfillment management at your location",
    icon: "settings",
    features: [
      "On-site team deployment",
      "Custom workflow design",
      "Staff training & management",
      "Quality control systems",
      "Performance reporting"
    ],
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600"
  }
];

const warehouseFeatures = [
  {
    title: "Inventory Management",
    description: "Real-time tracking of all your inventory with detailed reporting",
    icon: "lineChart"
  },
  {
    title: "Quality Control",
    description: "Rigorous quality checks at every stage of the fulfillment process",
    icon: "check"
  },
  {
    title: "Scalable Operations",
    description: "Flexible solutions that grow with your business needs",
    icon: "arrowUpRight"
  },
  {
    title: "Technology Integration",
    description: "Seamless integration with your existing systems and platforms",
    icon: "laptop"
  },
  {
    title: "Custom Packaging",
    description: "Professional packaging solutions tailored to your brand",
    icon: "package"
  },
  {
    title: "Multi-channel Support",
    description: "Support for e-commerce, retail, and B2B distribution channels",
    icon: "settings"
  }
];

// Rally-style comparison
function WarehousingComparison() {
  return (
    <div className="py-20">
      <MaxWidthWrapper>
        <HeaderSection
          title="In-house Warehousing vs Cossim Solutions"
          subtitle="See how our warehousing services transform your operations"
        />
        
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* In-house Warehousing */}
          <div className="rounded-xl border bg-red-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-red-900">In-house Warehousing</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.warning className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">High overhead costs</p>
                  <p className="mt-1 text-sm text-gray-500">Rent, utilities, equipment, and staff costs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.warning className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Inventory management headaches</p>
                  <p className="mt-1 text-sm text-gray-500">Manual tracking leading to stockouts and overstock</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.warning className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Scaling challenges</p>
                  <p className="mt-1 text-sm text-gray-500">Difficult to expand during peak seasons</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.warning className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Limited expertise</p>
                  <p className="mt-1 text-sm text-gray-500">Lack of specialized warehouse management knowledge</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cossim Warehousing */}
          <div className="rounded-xl border bg-green-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-green-900">Cossim Warehousing</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.check className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Cost-effective solution</p>
                  <p className="mt-1 text-sm text-gray-500">Pay only for space and services you use</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.check className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Advanced inventory systems</p>
                  <p className="mt-1 text-sm text-gray-500">Real-time tracking and automated reorder points</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.check className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Instant scalability</p>
                  <p className="mt-1 text-sm text-gray-500">Scale up or down based on demand</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.check className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Expert management</p>
                  <p className="mt-1 text-sm text-gray-500">Dedicated warehouse professionals managing your inventory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

const processSteps = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "We analyze your requirements and design a custom warehousing solution",
    icon: "search"
  },
  {
    step: "02",
    title: "Setup & Integration",
    description: "Warehouse setup with system integration and staff training",
    icon: "settings"
  },
  {
    step: "03",
    title: "Inventory Receiving",
    description: "Professional receiving, inspection, and storage of your products",
    icon: "package"
  },
  {
    step: "04",
    title: "Order Fulfillment",
    description: "Efficient picking, packing, and shipping of customer orders",
    icon: "truck"
  }
];

export default function WarehousingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Warehousing &"
        highlightText="Fulfillment"
        description="Comprehensive warehousing solutions from secure storage to complete fulfillment services. Let us handle your inventory so you can focus on growing your business."
        primaryButton={{ text: "Get Custom Quote" }}
        secondaryButton={{ text: "Schedule Tour" }}
      />

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <HeaderSection
            title="Complete Warehousing Solutions"
            subtitle="From basic storage to full-service fulfillment"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {warehousingSolutions.map((solution, index) => {
              const spotlightColors = [
                "rgba(59, 130, 246, 0.2)", // Blue for Storage
                "rgba(34, 197, 94, 0.2)",  // Green for Fulfillment
                "rgba(147, 51, 234, 0.2)"  // Purple for FaaS
              ];
              
              return (
                <FeatureSpotlightCard
                  key={index}
                  title={solution.title}
                  description={solution.description}
                  icon={solution.icon as keyof typeof Icons}
                  iconBgColor={solution.color.includes("blue") ? "bg-blue-100" : solution.color.includes("green") ? "bg-green-100" : "bg-purple-100"}
                  iconTextColor={solution.iconColor}
                  spotlightColor={spotlightColors[index]}
                />
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <MaxWidthWrapper>
          <HeaderSection
            title="Why Choose Our Warehousing Services"
            subtitle="Advanced features that set us apart"
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {warehouseFeatures.map((feature, index) => {
              const Icon = Icons[feature.icon as keyof typeof Icons];
              return (
                <Card key={index} className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-orange-100 p-2">
                        <Icon className="h-5 w-5 text-cossim-orange" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Rally-style Comparison */}
      <WarehousingComparison />

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <HeaderSection
            title="Our Warehousing Process"
            subtitle="From consultation to fulfillment"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = Icons[step.icon as keyof typeof Icons];
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                    <Icon className="h-8 w-8 text-cossim-orange" />
                  </div>
                  <div>
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

      {/* Stats Section */}
      <section className="py-20">
        <MaxWidthWrapper>
          <div className="rounded-2xl bg-indigo-600 px-6 py-16 text-white">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold">Trusted by Leading Businesses</h2>
              <p className="mt-4 text-lg opacity-90">
                Our warehousing solutions power businesses across Kenya
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-4xl font-bold">50,000+</div>
                <div className="mt-2 text-sm opacity-90">Sq. Ft. Storage Space</div>
              </div>
              <div>
                <div className="text-4xl font-bold">99.8%</div>
                <div className="mt-2 text-sm opacity-90">Order Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold">24/7</div>
                <div className="mt-2 text-sm opacity-90">Security Monitoring</div>
              </div>
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="mt-2 text-sm opacity-90">Happy Clients</div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Optimize Your Warehousing?"
        description="Let's discuss how our warehousing solutions can streamline your operations and reduce costs."
        primaryButton={{ text: "Schedule Consultation" }}
        secondaryButton={{ text: "Download Brochure" }}
        backgroundColor="gray"
      />
    </div>
  );
}

import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/shared/page-hero";

export const metadata: Metadata = constructMetadata({
  title: "About Cossim Ltd - Kenya's Premier Logistics Company",
  description: "Learn about Cossim Ltd's journey since 2017, providing innovative B2B logistics solutions across Kenya including last-mile delivery, pickup stations, and warehousing.",
});

const values = [
  {
    title: "Reliability",
    description: "We deliver on our promises with consistent, dependable service that businesses can count on.",
    icon: "check"
  },
  {
    title: "Innovation",
    description: "Continuously improving our services with cutting-edge technology and creative solutions.",
    icon: "settings"
  },
  {
    title: "Customer Focus",
    description: "Every decision we make is centered around delivering exceptional value to our customers.",
    icon: "user"
  },
  {
    title: "Integrity",
    description: "Operating with transparency, honesty, and ethical business practices in all our interactions.",
    icon: "warning"
  }
];

const stats = [
  {
    number: "2017",
    label: "Founded"
  },
  {
    number: "50+",
    label: "Pickup Stations"
  },
  {
    number: "1000+",
    label: "Happy Clients"
  },
  {
    number: "99.8%",
    label: "Delivery Success Rate"
  }
];

const team = [
  {
    name: "John Kamau",
    role: "Chief Executive Officer",
    description: "15+ years in logistics and supply chain management",
    image: "/_static/avatars/team/member-1.jpg"
  },
  {
    name: "Grace Wanjiru",
    role: "Head of Operations",
    description: "Expert in last-mile delivery optimization",
    image: "/_static/avatars/team/member-2.jpg"
  },
  {
    name: "David Ochieng",
    role: "Technology Director",
    description: "Leading our digital transformation initiatives",
    image: "/_static/avatars/team/member-3.jpg"
  },
  {
    name: "Mary Njeri",
    role: "Customer Success Manager",
    description: "Ensuring exceptional customer experiences",
    image: "/_static/avatars/team/member-4.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="About"
        highlightText="Cossim Ltd"
        description="Since 2017, we've been revolutionizing logistics in Kenya with innovative solutions that connect businesses to their customers efficiently and reliably."
      />

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2017, Cossim Ltd emerged from a simple observation: Kenyan businesses 
                needed reliable, efficient logistics solutions that could scale with their growth.
              </p>
              <p className="mt-4 text-gray-600">
                What started as a small delivery service has evolved into Kenya's premier B2B 
                logistics platform, serving over 1,000 businesses across the country. We've built 
                our reputation on three pillars: speed, reliability, and innovation.
              </p>
              <p className="mt-4 text-gray-600">
                Today, we operate 50+ pickup stations, manage thousands of square feet of warehouse 
                space, and process thousands of deliveries daily. But our mission remains the same: 
                to empower Kenyan businesses with logistics solutions that drive growth.
              </p>
            </div>

          </div>
        </MaxWidthWrapper>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <MaxWidthWrapper>
          <HeaderSection
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = Icons[value.icon as keyof typeof Icons];
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                      <Icon className="h-6 w-6 text-cossim-orange" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cossim-orange">
        <MaxWidthWrapper>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">By the Numbers</h2>
            <p className="mt-4 text-lg opacity-90">
              Our growth reflects the trust businesses place in us
            </p>
            
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold">{stat.number}</div>
                  <div className="mt-2 text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <MaxWidthWrapper>
          <HeaderSection
            title="Meet Our Team"
            subtitle="The people behind Kenya's leading logistics platform"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto h-24 w-24 rounded-full"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-medium text-cossim-orange">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-6 text-xl text-gray-600">
              To empower Kenyan businesses with world-class logistics solutions that drive growth, 
              improve customer satisfaction, and create lasting value for all stakeholders.
            </p>
            
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <Icons.truck className="mx-auto h-12 w-12 text-cossim-orange" />
                <h3 className="mt-4 text-lg font-semibold">Reliable Delivery</h3>
                <p className="mt-2 text-gray-600">
                  Every package delivered safely and on time
                </p>
              </div>
              
              <div className="text-center">
                <Icons.warehouse className="mx-auto h-12 w-12 text-cossim-orange" />
                <h3 className="mt-4 text-lg font-semibold">Smart Logistics</h3>
                <p className="mt-2 text-gray-600">
                  Technology-driven solutions for modern businesses
                </p>
              </div>
              
              <div className="text-center">
                <Icons.headphones className="mx-auto h-12 w-12 text-cossim-orange" />
                <h3 className="mt-4 text-lg font-semibold">Exceptional Support</h3>
                <p className="mt-2 text-gray-600">
                  24/7 customer service that goes above and beyond
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

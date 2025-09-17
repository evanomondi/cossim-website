import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/shared/page-hero";
import CTASection from "@/components/shared/cta-section";

export const metadata: Metadata = constructMetadata({
  title: "Contact Cossim Ltd - Get in Touch for Logistics Solutions",
  description: "Contact Cossim Ltd for all your logistics needs. Get quotes, support, or information about our delivery, pickup station, and warehousing services.",
});

const contactInfo = [
  {
    title: "Head Office",
    details: [
      "Cossim Ltd",
      "ABC Place, Waiyaki Way",
      "Nairobi, Kenya",
      "P.O. Box 12345-00100"
    ],
    icon: "home"
  },
  {
    title: "Phone",
    details: [
      "+254 700 123 456",
      "+254 733 654 321",
      "Mon-Fri: 8:00 AM - 6:00 PM",
      "Sat: 9:00 AM - 1:00 PM"
    ],
    icon: "phone"
  },
  {
    title: "Email",
    details: [
      "info@cossim.co.ke",
      "support@cossim.co.ke",
      "sales@cossim.co.ke",
      "careers@cossim.co.ke"
    ],
    icon: "mail"
  }
];

const offices = [
  {
    city: "Nairobi",
    address: "ABC Place, Waiyaki Way",
    phone: "+254 700 123 456",
    email: "nairobi@cossim.co.ke"
  },
  {
    city: "Mombasa",
    address: "Digo Road, Near Nakumatt",
    phone: "+254 700 123 457",
    email: "mombasa@cossim.co.ke"
  },
  {
    city: "Kisumu",
    address: "Oginga Odinga Street",
    phone: "+254 700 123 458",
    email: "kisumu@cossim.co.ke"
  },
  {
    city: "Eldoret",
    address: "Uganda Road",
    phone: "+254 700 123 459",
    email: "eldoret@cossim.co.ke"
  }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Get in"
        highlightText="Touch"
        description="Ready to transform your logistics? Our team is here to help you find the perfect solution for your business needs."
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <div className="grid gap-8 md:grid-cols-3">
            {contactInfo.map((info, index) => {
              const Icon = Icons[info.icon as keyof typeof Icons];
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                      <Icon className="h-6 w-6 text-cossim-orange" />
                    </div>
                    <CardTitle>{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <MaxWidthWrapper>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
              <p className="mt-4 text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-1"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-1"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Interest
                  </label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lastmile">Last Mile Delivery</SelectItem>
                      <SelectItem value="pickup">Pickup Stations</SelectItem>
                      <SelectItem value="warehousing">Warehousing</SelectItem>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us about your logistics needs..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Map/Image Placeholder */}
            <div>
              <div className="sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Locations</h3>
                <div className="rounded-2xl bg-gray-100 p-6 mb-6" style={{ height: '300px' }}>
                  <div className="flex h-full items-center justify-center text-gray-500">
                    <div className="text-center">
                      <Icons.mapPin className="mx-auto h-12 w-12 mb-2" />
                      <p>Interactive Map Coming Soon</p>
                      <p className="text-sm">Find our offices across Kenya</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h4 className="font-semibold text-gray-900">{office.city}</h4>
                      <p className="text-sm text-gray-600">{office.address}</p>
                      <div className="mt-2 flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Icons.phone className="h-4 w-4" />
                          {office.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icons.mail className="h-4 w-4" />
                          {office.email}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <HeaderSection
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How do I get a quote?</h3>
                <p className="mt-2 text-gray-600">
                  You can get a quote by filling out our contact form, calling us directly, or using 
                  our online quote calculator on each service page.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">What are your delivery areas?</h3>
                <p className="mt-2 text-gray-600">
                  We provide services across all major cities in Kenya including Nairobi, Mombasa, 
                  Kisumu, Eldoret, Nakuru, and many more locations.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Do you offer same-day delivery?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! We offer express 1-hour delivery, same-day delivery within 6 hours, and 
                  next-day delivery options depending on your needs.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How can I track my shipment?</h3>
                <p className="mt-2 text-gray-600">
                  All shipments come with real-time tracking via SMS, WhatsApp, or our online portal. 
                  You'll receive updates at every stage of delivery.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
                <p className="mt-2 text-gray-600">
                  We accept mobile money (M-Pesa, Airtel Money), bank transfers, cash, and for 
                  enterprise clients, we offer credit terms.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Do you provide insurance?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer comprehensive insurance coverage for all shipments. Coverage options 
                  vary based on the value and type of goods being shipped.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Join over 1,000 businesses that trust Cossim for their logistics needs."
        primaryButton={{ text: "Get Free Quote" }}
        secondaryButton={{ text: "Call Now: +254 700 123 456" }}
        backgroundColor="orange"
      />
    </div>
  );
}

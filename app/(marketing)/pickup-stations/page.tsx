"use client";

import { Metadata } from "next";
import { useState } from "react";

import { constructMetadata } from "@/lib/utils";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/shared/page-hero";
import CTASection from "@/components/shared/cta-section";
import FeatureSpotlightCard from "@/components/shared/feature-spotlight-card";

// Sample pickup stations data
const pickupStations = [
  {
    id: 1,
    name: "Westlands Shopping Center",
    address: "Westlands Road, Nairobi",
    city: "Nairobi",
    county: "Nairobi",
    hours: "Mon-Sun: 8:00 AM - 10:00 PM",
    services: ["Package Pickup", "Rent-a-Shelf", "Cash Collection"],
    phone: "+254 700 123 456",
    coordinates: { lat: -1.2676, lng: 36.8108 }
  },
  {
    id: 2,
    name: "Sarit Centre",
    address: "Karuna Road, Nairobi",
    city: "Nairobi", 
    county: "Nairobi",
    hours: "Mon-Sun: 9:00 AM - 9:00 PM",
    services: ["Package Pickup", "Rent-a-Shelf"],
    phone: "+254 700 123 457",
    coordinates: { lat: -1.2596, lng: 36.7856 }
  },
  {
    id: 3,
    name: "Garden City Mall",
    address: "Thika Road, Nairobi",
    city: "Nairobi",
    county: "Nairobi", 
    hours: "Mon-Sun: 10:00 AM - 10:00 PM",
    services: ["Package Pickup", "Cash Collection"],
    phone: "+254 700 123 458",
    coordinates: { lat: -1.2367, lng: 36.8737 }
  },
  {
    id: 4,
    name: "Nakumatt Mombasa",
    address: "Digo Road, Mombasa",
    city: "Mombasa",
    county: "Mombasa",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM", 
    services: ["Package Pickup", "Rent-a-Shelf"],
    phone: "+254 700 123 459",
    coordinates: { lat: -4.0435, lng: 39.6682 }
  },
  {
    id: 5,
    name: "Kisumu Central Plaza",
    address: "Oginga Odinga Street, Kisumu",
    city: "Kisumu",
    county: "Kisumu",
    hours: "Mon-Sat: 8:00 AM - 8:00 PM",
    services: ["Package Pickup"],
    phone: "+254 700 123 460",
    coordinates: { lat: -0.0917, lng: 34.7680 }
  }
];

const services = [
  {
    title: "Package Pickup",
    description: "Collect your packages at your convenience within 7 working days",
    icon: "package",
    features: [
      "7-day holding period",
      "SMS & WhatsApp notifications",
      "Extended operating hours",
      "Secure storage",
      "ID verification required"
    ]
  },
  {
    title: "Rent-a-Shelf",
    description: "Rent dedicated shelf space for your business inventory",
    icon: "warehouse", 
    features: [
      "Flexible rental periods",
      "Prime retail locations",
      "Customer self-service",
      "Inventory management",
      "Sales reporting"
    ]
  },
  {
    title: "Cash Collection",
    description: "We collect cash payments on your behalf with secure remittance",
    icon: "creditCard",
    features: [
      "Secure remittance",
      "Full payment collection",
      "Transaction receipts",
      "Detailed reporting",
      "Secure handling"
    ]
  }
];

// Rally-style comparison
function StationComparison() {
  return (
    <div className="py-20">
      <MaxWidthWrapper>
        <HeaderSection
          title="Traditional Delivery vs Pickup Stations"
          subtitle="See why pickup stations are the future of last-mile delivery"
        />
        
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Traditional Delivery */}
          <div className="rounded-xl border bg-red-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-red-900">Traditional Delivery</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.warning className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Missed deliveries</p>
                  <p className="mt-1 text-sm text-gray-500">Customer not home, package returned to depot</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.warning className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Limited delivery windows</p>
                  <p className="mt-1 text-sm text-gray-500">Only available during business hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.warning className="h-5 w-5 text-red-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Multiple delivery attempts</p>
                  <p className="mt-1 text-sm text-gray-500">Increased costs and delays</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pickup Stations */}
          <div className="rounded-xl border bg-green-50/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-green-900">Cossim Pickup Stations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.check className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Convenient collection</p>
                  <p className="mt-1 text-sm text-gray-500">Pick up anytime during extended hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.check className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Multiple locations</p>
                  <p className="mt-1 text-sm text-gray-500">Choose from hundreds of convenient pickup points</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Icons.check className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">7-day holding</p>
                  <p className="mt-1 text-sm text-gray-500">Flexible pickup within a week of arrival</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default function PickupStationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("all");
  const [selectedService, setSelectedService] = useState("all");

  // Filter stations based on search criteria
  const filteredStations = pickupStations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         station.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         station.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCounty = selectedCounty === "all" || station.county === selectedCounty;
    
    const matchesService = selectedService === "all" || 
                          station.services.some(service => 
                            service.toLowerCase().includes(selectedService.toLowerCase())
                          );
    
    return matchesSearch && matchesCounty && matchesService;
  });

  const counties = [...new Set(pickupStations.map(station => station.county))];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Pickup Stations"
        highlightText="Across Kenya"
        description="Convenient pickup points in major cities and towns. Collect your packages when it suits you, with extended operating hours and secure storage."
      />

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Find a Pickup Station Near You</h2>
              
              <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Search by location, station name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select County" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Counties</SelectItem>
                    {counties.map(county => (
                      <SelectItem key={county} value={county}>{county}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="package pickup">Package Pickup</SelectItem>
                    <SelectItem value="rent-a-shelf">Rent-a-Shelf</SelectItem>
                    <SelectItem value="cash collection">Cash Collection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                Found {filteredStations.length} pickup station{filteredStations.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Stations Grid */}
      <section className="py-12">
        <MaxWidthWrapper>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredStations.map((station) => (
              <Card key={station.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span>{station.name}</span>
                    <Icons.mapPin className="h-5 w-5 text-cossim-orange flex-shrink-0 ml-2" />
                  </CardTitle>
                  <CardDescription>
                    {station.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icons.clock className="h-4 w-4 text-gray-500" />
                      {station.hours}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Icons.phone className="h-4 w-4 text-gray-500" />
                      {station.phone}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {station.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-4" variant="outline">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredStations.length === 0 && (
            <div className="text-center py-12">
              <Icons.search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">No stations found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </MaxWidthWrapper>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <MaxWidthWrapper>
          <HeaderSection
            title="Our Pickup Station Services"
            subtitle="More than just package collection"
          />
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const spotlightColors = [
                "rgba(255, 107, 53, 0.2)", // Orange for Package Pickup
                "rgba(147, 51, 234, 0.2)", // Purple for Rent-a-Shelf
                "rgba(34, 197, 94, 0.2)"   // Green for Cash Collection
              ];
              
              return (
                <FeatureSpotlightCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon as keyof typeof Icons}
                  iconBgColor="bg-orange-100"
                  iconTextColor="text-cossim-orange"
                  spotlightColor={spotlightColors[index]}
                />
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Rally-style Comparison */}
      <StationComparison />

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Using Pickup Stations?"
        description="Join thousands of customers who enjoy the convenience of our pickup network."
        primaryButton={{ text: "Find Nearest Station" }}
        secondaryButton={{ text: "Business Solutions" }}
        backgroundColor="orange"
      />
    </div>
  );
}

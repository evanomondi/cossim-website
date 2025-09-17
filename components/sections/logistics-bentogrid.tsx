import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import SpotlightCard from "@/components/shared/SpotlightCard";
import FeatureSpotlightCard from "@/components/shared/feature-spotlight-card";

export default function LogisticsBentoGrid() {
  return (
    <section className="py-32">
      <MaxWidthWrapper>
        <div className="relative z-10 grid grid-cols-6 gap-6">
          {/* Express Delivery Card */}
          <div className="col-span-full lg:col-span-2">
            <FeatureSpotlightCard
              title="1-Hour Delivery"
              description="Ultra-fast delivery for urgent packages within major cities"
              icon="truck"
              iconBgColor="bg-red-100"
              iconTextColor="text-red-600"
              badge={{ text: "Express", variant: "destructive" }}
              spotlightColor="rgba(239, 68, 68, 0.2)"
              className="text-center flex flex-col justify-center items-center"
            />
          </div>

          {/* Real-time Tracking Card with Cash Collection */}
          <div className="col-span-full lg:col-span-4">
            <SpotlightCard 
              className="h-full p-8" 
              spotlightColor="rgba(34, 197, 94, 0.2)"
            >
              <div className="grid sm:grid-cols-2 gap-6 h-full">
                <div className="relative z-10 flex flex-col justify-between space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border bg-green-50 before:absolute before:-inset-2 before:rounded-full before:border before:border-green-200">
                    <Icons.search className="m-auto size-6 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-white">
                      Real-time Tracking
                    </h2>
                    <p className="text-gray-300">
                      Monitor your shipments with live GPS tracking and instant notifications.
                    </p>
                  </div>
                  
                  {/* Cash Collection Feature */}
                  <div className="rounded-lg bg-orange-500/20 border border-orange-500/30 p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-orange-100 p-2">
                        <Icons.creditCard className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Cash Collection</h4>
                        <p className="text-xs text-gray-300">Secure remittance</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-lg border border-gray-600 bg-gray-900/50 p-4">
                  <div className="absolute left-3 top-2 flex gap-1">
                    <div className="size-2 rounded-full bg-red-500"></div>
                    <div className="size-2 rounded-full bg-yellow-500"></div>
                    <div className="size-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">Package #CS2024001</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        In Transit
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-gray-300">Picked up - Nairobi Hub</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-xs text-gray-300">En route - Westlands</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                        <span className="text-xs text-gray-400">Delivery - Customer</span>
                      </div>
                    </div>
                    
                    {/* Cash Collection Status */}
                    <div className="mt-4 pt-3 border-t border-gray-600">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">COD Amount</span>
                        <span className="text-sm font-semibold text-orange-400">KSh 2,500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Pickup Stations Card */}
          <div className="col-span-full lg:col-span-3">
            <FeatureSpotlightCard
              title="50+ Pickup Stations"
              subtitle="Across Kenya"
              description="Convenient pickup points with 24/7 access and rent-a-shelf options available nationwide."
              icon="mapPin"
              iconBgColor="bg-blue-100"
              iconTextColor="text-blue-600"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            />
          </div>

          {/* Warehousing Card */}
          <div className="col-span-full lg:col-span-3">
            <FeatureSpotlightCard
              title="Smart Warehousing"
              subtitle="Automated fulfillment"
              description="Advanced inventory management with real-time tracking and automated fulfillment processes."
              icon="warehouse"
              iconBgColor="bg-purple-100"
              iconTextColor="text-purple-600"
              spotlightColor="rgba(147, 51, 234, 0.2)"
              stats={[
                { label: "Storage Capacity", value: "50,000+ sq ft" },
                { label: "Order Accuracy", value: "99.8%", color: "text-green-400" },
                { label: "Processing Time", value: "< 2 hours" }
              ]}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
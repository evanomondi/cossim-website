import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Track Package - Cossim Ltd",
  description: "Track your package delivery status with Cossim Ltd. Enter your tracking number to get real-time updates on your shipment.",
});

export default function TrackPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Track Your Package
          </h1>
          <p className="text-xl text-muted-foreground">
            Enter your tracking number to get real-time updates on your shipment status.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-2xl font-semibold">Track Your Shipment</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="tracking" className="block text-sm font-medium mb-2">
                  Tracking Number
                </label>
                <input
                  type="text"
                  id="tracking"
                  placeholder="Enter your tracking number"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Track Package
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you're having trouble tracking your package or need assistance, our support team is here to help.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> support@cossim.co.ke</p>
              <p><strong>Phone:</strong> +254 700 000 000</p>
              <p><strong>Hours:</strong> Mon-Fri 8AM-6PM EAT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
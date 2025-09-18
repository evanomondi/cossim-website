import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "News & Updates - Cossim Ltd",
  description: "Stay updated with the latest news, announcements, and developments from Cossim Ltd.",
});

export default function NewsPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            News & Updates
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay informed about the latest developments, announcements, and milestones at Cossim Ltd.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      
      <div className="space-y-8">
        <article className="rounded-lg border bg-card p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime="2024-01-15">January 15, 2024</time>
              <span>•</span>
              <span>Company News</span>
            </div>
            <h2 className="text-2xl font-semibold">
              Cossim Ltd Expands Last-Mile Delivery Network Across Kenya
            </h2>
            <p className="text-muted-foreground">
              We're excited to announce the expansion of our delivery network to cover 15 new counties across Kenya, 
              bringing reliable logistics services to more businesses and communities.
            </p>
            <button className="text-primary hover:underline">Read more →</button>
          </div>
        </article>

        <article className="rounded-lg border bg-card p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime="2024-01-10">January 10, 2024</time>
              <span>•</span>
              <span>Product Update</span>
            </div>
            <h2 className="text-2xl font-semibold">
              New Real-Time Tracking Features Now Available
            </h2>
            <p className="text-muted-foreground">
              Our enhanced tracking system now provides real-time GPS updates, delivery photos, 
              and SMS notifications to keep you informed every step of the way.
            </p>
            <button className="text-primary hover:underline">Read more →</button>
          </div>
        </article>

        <article className="rounded-lg border bg-card p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime="2024-01-05">January 5, 2024</time>
              <span>•</span>
              <span>Partnership</span>
            </div>
            <h2 className="text-2xl font-semibold">
              Strategic Partnership with Leading E-commerce Platforms
            </h2>
            <p className="text-muted-foreground">
              Cossim Ltd partners with major e-commerce platforms to provide seamless fulfillment 
              and delivery solutions for online retailers across Kenya.
            </p>
            <button className="text-primary hover:underline">Read more →</button>
          </div>
        </article>

        <article className="rounded-lg border bg-card p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime="2023-12-20">December 20, 2023</time>
              <span>•</span>
              <span>Achievement</span>
            </div>
            <h2 className="text-2xl font-semibold">
              Cossim Ltd Achieves 99.5% On-Time Delivery Rate
            </h2>
            <p className="text-muted-foreground">
              We're proud to announce that we've achieved a 99.5% on-time delivery rate, 
              setting new standards for reliability in Kenya's logistics industry.
            </p>
            <button className="text-primary hover:underline">Read more →</button>
          </div>
        </article>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Want to stay updated? Follow us on social media or subscribe to our newsletter.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Subscribe to Newsletter
          </button>
          <button className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            Follow on Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
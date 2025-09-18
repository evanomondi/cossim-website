import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Help Center - Cossim Ltd",
  description: "Get help and support for Cossim Ltd services. Find answers to common questions and contact our support team.",
});

export default function HelpPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions and get the support you need for our logistics services.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-medium">
                  How do I track my package?
                </summary>
                <div className="mt-2 text-muted-foreground">
                  <p>
                    You can track your package using the tracking number provided when you placed your order. 
                    Visit our <a href="/track" className="text-primary hover:underline">tracking page</a> and 
                    enter your tracking number to get real-time updates.
                  </p>
                </div>
              </details>

              <details className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-medium">
                  What are your delivery timeframes?
                </summary>
                <div className="mt-2 text-muted-foreground">
                  <p>
                    We offer multiple delivery options:
                  </p>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Same-day delivery: Within 6 hours (Nairobi)</li>
                    <li>Next-day delivery: 24 hours</li>
                    <li>Standard delivery: 2-3 business days</li>
                  </ul>
                </div>
              </details>

              <details className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-medium">
                  How much does delivery cost?
                </summary>
                <div className="mt-2 text-muted-foreground">
                  <p>
                    Delivery costs vary based on distance, package size, and delivery speed. 
                    Contact us for a custom quote based on your specific needs.
                  </p>
                </div>
              </details>

              <details className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-medium">
                  What areas do you serve?
                </summary>
                <div className="mt-2 text-muted-foreground">
                  <p>
                    We provide delivery services across Kenya, with same-day delivery available in major cities 
                    including Nairobi, Mombasa, Kisumu, and Nakuru.
                  </p>
                </div>
              </details>

              <details className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-medium">
                  How do I schedule a pickup?
                </summary>
                <div className="mt-2 text-muted-foreground">
                  <p>
                    You can schedule a pickup through our online platform, mobile app, or by calling our 
                    customer service team. We'll arrange a convenient time for collection.
                  </p>
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Contact Support</h2>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Email Support</h3>
                <p className="text-muted-foreground mb-2">
                  Get help via email for non-urgent inquiries.
                </p>
                <p className="font-medium">support@cossim.co.ke</p>
                <p className="text-sm text-muted-foreground">Response time: 2-4 hours</p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Phone Support</h3>
                <p className="text-muted-foreground mb-2">
                  Call us for immediate assistance.
                </p>
                <p className="font-medium">+254 700 000 000</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-6PM EAT</p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Chat with our support team in real-time.
                </p>
                <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Start Live Chat
                </button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Quick Links</h2>
            <div className="space-y-2">
              <a href="/track" className="block rounded-md border bg-card p-3 hover:bg-accent">
                📦 Track Package
              </a>
              <a href="/pricing" className="block rounded-md border bg-card p-3 hover:bg-accent">
                💰 View Pricing
              </a>
              <a href="/docs" className="block rounded-md border bg-card p-3 hover:bg-accent">
                📚 API Documentation
              </a>
              <a href="/contact" className="block rounded-md border bg-card p-3 hover:bg-accent">
                📞 Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
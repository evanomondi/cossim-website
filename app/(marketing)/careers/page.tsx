import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Careers - Cossim Ltd",
  description: "Join our team at Cossim Ltd. Explore career opportunities in logistics, technology, and operations across Kenya.",
});

export default function CareersPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Careers at Cossim
          </h1>
          <p className="text-xl text-muted-foreground">
            Join our mission to revolutionize logistics in Kenya. Build your career with a growing company that values innovation and excellence.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      
      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-3xl font-semibold">Why Work With Us?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Advance your career with comprehensive training programs and clear promotion paths.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">Innovative Environment</h3>
              <p className="text-muted-foreground">
                Work with cutting-edge technology and contribute to transforming Kenya's logistics landscape.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">Competitive Benefits</h3>
              <p className="text-muted-foreground">
                Enjoy competitive salaries, health insurance, and performance bonuses.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-semibold">Open Positions</h2>
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Logistics Coordinator</h3>
                  <p className="text-muted-foreground">Nairobi • Full-time</p>
                  <p className="mt-2">
                    Coordinate delivery operations and ensure efficient last-mile delivery across Nairobi.
                  </p>
                </div>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Software Developer</h3>
                  <p className="text-muted-foreground">Nairobi • Full-time</p>
                  <p className="mt-2">
                    Build and maintain our logistics platform using modern web technologies.
                  </p>
                </div>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Customer Success Manager</h3>
                  <p className="text-muted-foreground">Nairobi • Full-time</p>
                  <p className="mt-2">
                    Ensure customer satisfaction and drive business growth through excellent service delivery.
                  </p>
                </div>
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-semibold">How to Apply</h2>
          <div className="rounded-lg border bg-card p-6">
            <p className="mb-4">
              Ready to join our team? Send your resume and cover letter to our HR team.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> careers@cossim.co.ke</p>
              <p><strong>Subject:</strong> Application for [Position Name]</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
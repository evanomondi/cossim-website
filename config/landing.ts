import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Streamline your logistics operations",
    description:
      "Transform your business with Cossim's comprehensive logistics solutions. From express delivery to warehousing, we handle the complexity so you can focus on growth.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Express Delivery",
        description: "1-hour, same-day, and next-day delivery across Kenya.",
        icon: "truck",
      },
      {
        title: "Secure Storage",
        description: "Safe warehousing with advanced inventory management.",
        icon: "warehouse",
      },
      {
        title: "Nationwide Coverage",
        description:
          "Pickup stations and delivery network covering all major cities.",
        icon: "mapPin",
      },
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our open-source SaaS seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Flexible",
        description:
          "Customize your integrations to fit your unique requirements.",
        icon: "laptop",
      },
      {
        title: "Efficient",
        description: "Streamline your processes and reducing manual effort.",
        icon: "search",
      },
      {
        title: "Reliable",
        description:
          "Rely on our robust infrastructure and comprehensive documentation.",
        icon: "settings",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    title: "Last Mile Delivery",
    description:
      "Express 1-hour delivery, same-day, and next-day services with real-time tracking and cash collection.",
    link: "/lastmile",
    icon: "truck",
  },
  {
    title: "Pickup Stations",
    description:
      "Convenient pickup points across Kenya with 7-day holding period and rent-a-shelf options.",
    link: "/pickup-stations",
    icon: "mapPin",
  },
  {
    title: "Warehousing Solutions",
    description:
      "Secure storage, inventory management, and fulfillment services on-site or at customer premises.",
    link: "/warehousing",
    icon: "warehouse",
  },
  {
    title: "Real-time Tracking",
    description:
      "Monitor your shipments in real-time with detailed tracking and delivery confirmation.",
    link: "/",
    icon: "search",
  },
  {
    title: "Cash on Delivery",
    description:
      "Collect payments on behalf of clients with secure remittance in full.",
    link: "/",
    icon: "creditCard",
  },
  {
    title: "Dedicated Support",
    description:
      "24/7 customer support with dedicated account managers for enterprise clients.",
    link: "/",
    icon: "headphones",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "Sarah Mwangi",
    job: "E-commerce Manager, TechHub Kenya",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    review:
      "Cossim's same-day delivery service has transformed our customer satisfaction rates. We went from 72% to 95% customer satisfaction in just 3 months. Their real-time tracking system gives our customers peace of mind, and the cash collection service has improved our cash flow significantly.",
  },
  {
    name: "James Kiprotich",
    job: "Operations Director, Fresh Grocers Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    review:
      "The pickup stations have been a game-changer for our business. Our customers love the convenience of collecting their orders at their preferred time and location. The 7-day holding period gives them flexibility, and we've seen a 40% reduction in failed deliveries.",
  },
  {
    name: "Grace Achieng",
    job: "Supply Chain Manager, Fashion Forward",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
    review:
      "Cossim's warehousing solutions allowed us to expand into new markets without the overhead of setting up our own facilities. Their inventory management system is top-notch, and we've reduced our fulfillment errors by 85%. Highly recommended!",
  },
  {
    name: "Peter Mutua",
    job: "CEO, Nairobi Electronics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    review:
      "The express 1-hour delivery service has given us a competitive edge in the electronics market. When customers need urgent repairs or replacements, we can deliver within an hour. This service alone has increased our revenue by 30%.",
  },
  {
    name: "Mary Wanjiku",
    job: "Logistics Coordinator, Pharma Plus",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    review:
      "As a pharmaceutical company, we need reliable and secure logistics. Cossim's temperature-controlled storage and secure delivery network ensures our products maintain their integrity throughout the supply chain. Their compliance with health regulations is excellent.",
  },
  {
    name: "David Otieno",
    job: "Founder, Artisan Crafts Kenya",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    review:
      "The rent-a-shelf service at pickup stations has been perfect for our artisan products. We can showcase our crafts in high-traffic locations without the cost of traditional retail space. Sales have increased by 60% since partnering with Cossim.",
  },
];

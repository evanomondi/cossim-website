<a href="https://cossim.co.ke">
  <img alt="Cossim Ltd" src="public/_static/og.jpg">
  <h1 align="center">Cossim Ltd - Logistics Website</h1>
</a>

<p align="center">
  Kenya's Premier B2B Logistics Solutions Platform
</p>

<p align="center">
  <a href="https://twitter.com/miickasmt">
    <img src="https://img.shields.io/twitter/follow/miickasmt?style=flat&label=miickasmt&logo=twitter&color=0bf&logoColor=fff" alt="Mickasmt Twitter follower count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a> ·
  <a href="#credits"><strong>Credits</strong></a>
</p>
<br/>

## Introduction

Cossim Ltd's comprehensive logistics website built with Next.js 14, featuring three main service offerings:
- **Last Mile Delivery**: Express 1-hour, same-day, and next-day delivery services
- **Pickup Stations**: Convenient pickup points across Kenya with rent-a-shelf options
- **Warehousing**: Storage, fulfillment, and fulfillment-as-a-service solutions

Built with modern tech stack including Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui, and Stripe.

## Installation

Clone this repository locally:

```bash
git clone https://github.com/cossim/website.git
cd website
```

## Deployment with CapRover

This project is configured for deployment using CapRover with GitHub webhooks for automated deployments.

### Local Development

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables:

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm run dev
```

### CapRover Deployment Setup

1. **Install CapRover** on your server following the [official documentation](https://caprover.com/docs/get-started.html)

2. **Create a new app** in CapRover:
   - Login to your CapRover dashboard
   - Create a new app (e.g., `cossim-website`)
   - Enable HTTPS and set up your domain

3. **Configure the app**:
   - Go to your app settings
   - Enable "Has Persistent Data" if needed
   - Set environment variables in the app settings

4. **Setup GitHub Webhook**:
   - In your CapRover app, go to "Deployment" tab
   - Copy the webhook URL
   - In your GitHub repository, go to Settings > Webhooks
   - Add a new webhook with:
     - Payload URL: Your CapRover webhook URL
     - Content type: `application/json`
     - Events: Select "Just the push event"
     - Active: ✓

5. **Create captain-definition file** (already included in this project):

```json
{
  "schemaVersion": 2,
  "dockerfilePath": "./Dockerfile"
}
```

6. **Environment Variables**:
   Set the following environment variables in CapRover:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   DATABASE_URL=your-database-url
   NEXTAUTH_SECRET=your-secret
   NEXTAUTH_URL=https://your-domain.com
   ```

### Automatic Deployment

Once set up, every push to the main branch will trigger an automatic deployment to CapRover.

> [!NOTE]  
> For updates, use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates): `ncu -i --format group`

## Roadmap
- [x] Complete website transformation for Cossim Ltd
- [x] Create three main service pages (Last Mile, Pickup Stations, Warehousing)
- [x] Implement Rally.com-inspired design and animations
- [x] Configure CapRover deployment with GitHub webhooks
- [x] Update branding and content for logistics industry
- [ ] Add interactive map for pickup stations
- [ ] Implement real-time package tracking
- [ ] Add multi-language support (Swahili)
- [ ] Integrate payment gateway for services
- [ ] Add admin dashboard for logistics management

## Tech Stack + Features

https://github.com/mickasmt/next-saas-stripe-starter/assets/62285783/828a4e0f-30e3-4cfe-96ff-4dfd9cd55124

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js
- [React Email](https://react.email/) – Versatile email framework for efficient and flexible email development

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Resend](https://resend.com/) – A powerful email framework for streamlined email development
- [Neon](https://neon.tech/) – Serverless Postgres with autoscaling, branching, bottomless storage and generous free tier.

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Shadcn/ui](https://ui.shadcn.com/) – Re-usable components built using Radix UI and Tailwind CSS
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge

### Hooks and Utilities

- `useIntersectionObserver` – React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/mickasmt/precedent/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way

## Author

Created by [@miickasmt](https://twitter.com/miickasmt) in 2023, released under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).

## Credits

This project was inspired by shadcn's [Taxonomy](https://github.com/shadcn-ui/taxonomy), Steven Tey’s [Precedent](https://github.com/steven-tey/precedent), and Antonio Erdeljac's [Next 13 AI SaaS](https://github.com/AntonioErdeljac/next13-ai-saas).

- Shadcn ([@shadcn](https://twitter.com/shadcn))
- Steven Tey ([@steventey](https://twitter.com/steventey))
- Antonio Erdeljac ([@YTCodeAntonio](https://twitter.com/AntonioErdeljac))

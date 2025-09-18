"use client"

import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

export function Analytics() {
  // Only load Vercel Analytics when deployed on Vercel
  if (process.env.VERCEL) {
    return <VercelAnalytics />
  }
  
  return null
}

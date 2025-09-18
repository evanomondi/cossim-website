import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import type { Provider } from "next-auth/providers";

import { env } from "@/env.mjs";
import { sendVerificationRequest } from "@/lib/email";

// Build providers array conditionally based on available environment variables
const providers: Provider[] = [];

// Always add Google provider if credentials are available
if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    })
  );
}

// Only add Resend provider if API key is available and valid (not placeholder)
if (env.RESEND_API_KEY && env.EMAIL_FROM && env.RESEND_API_KEY.startsWith('re_') && env.RESEND_API_KEY !== 're_placeholder_key') {
  providers.push(
    Resend({
      apiKey: env.RESEND_API_KEY,
      from: env.EMAIL_FROM,
      sendVerificationRequest,
    })
  );
}

export default {
  providers,
} satisfies NextAuthConfig;

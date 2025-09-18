import NextAuth from "next-auth";
import authConfig from "@/auth.middleware.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // Add any custom middleware logic here if needed
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
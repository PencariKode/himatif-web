import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const proxy = NextAuth(authConfig).auth;
export default proxy;

export const config = {
  matcher: ["/admin/:path*", "/login"],
};

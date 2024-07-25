import { NextRequest } from "next/server";
import { authMiddleware } from "next-firebase-auth-edge";
import { clientConfig, serverConfig } from "./config";

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    apiKey: clientConfig.apiKey,         // The Firebase Web API Key. Used to refresh and reset auth cookies
    cookieName: serverConfig.cookieName, // The name of the cookie stored in the browser
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
  });
}

export const config = {
  // Matcher tells NextJS to run this 
  // middleware on the specified routes
  matcher: [
    "/",
    "/((?!_next|api|.*\\.).*)",
    "/api/login",
    "/api/logout",
  ],
};
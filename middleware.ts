import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { nextUrl: url } = req;
  const { pathname } = url;

  // Skip public files or API routes
  if (PUBLIC_FILE.test(pathname) || pathname.includes("/api/")) return;

  // Check if locale is present in the pathname
  const pathnameIsMissingLocale = !/^\/(en|ar)/.test(pathname);

  if (pathnameIsMissingLocale) {
    const locale = req.headers.get("accept-language")?.split(",")[0] || "en";
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|assets).*)"],
};

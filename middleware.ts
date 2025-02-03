import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/create", "/testimonials", "/board"];
const authRoutes = ["/sign-in"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
  const url = req.nextUrl.clone();

  if (url.pathname === "/" && token) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }
  if (protectedRoutes.some((route) => url.pathname.startsWith(route))) {
    if (!token) {
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }
  }
  if (authRoutes.some((route) => url.pathname.startsWith(route))) {
    if (token) {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in", "/"],
};

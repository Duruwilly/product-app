import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  console.log(token);

  if (!token) {
    console.log("No token found, redirecting...");
    return NextResponse.redirect(new URL("/", req.url));
  }

  console.log("Token found, proceeding...");
  return NextResponse.next();
}

export const config = {
  matcher: "/product-preview",
};

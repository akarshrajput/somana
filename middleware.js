import { NextResponse } from "next/server";

export function middleware(req) {
  console.log(req.nextUrl); // Logs the URL of the request

  const res = NextResponse.next(); // Proceed with the request

  // Add the `Access-Control-Allow-Origin` header to the response
  res.headers.append("Access-Control-Allow-Origin", "https://somana.in");

  return res; // Return the modified response
}

// Apply the middleware to all API routes
export const config = {
  matcher: ["/api/:path*"],
};

// import { NextResponse } from "next/server";

// export function middleware(req) {
//   console.log(req.nextUrl); // Logs the URL of the request

//   const res = NextResponse.next(); // Proceed with the request

//   // Check if the request is coming from "https://www.somana.in"
//   if (req.nextUrl.origin === "https://www.somana.in") {
//     // Add the `Access-Control-Allow-Origin` header for that specific domain
//     res.headers.append("Access-Control-Allow-Origin", "https://www.somana.in");
//   }

//   return res; // Return the modified response
// }

// // Apply the middleware to all API routes
// export const config = {
//   matcher: ["/api/:path*"],
// };

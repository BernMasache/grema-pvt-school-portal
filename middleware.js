// middleware.ts
import cookie from "js-cookie";
import { NextResponse } from "next/server";
import useCrypto from "./services/cryptoJs";
const crypto = new useCrypto();
export async function middleware(request, response) {
  var tokenRaw = request.cookies.get("PTOKEN");
  if (tokenRaw == undefined) {
    if (request.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  } else {
    var token = JSON.parse(crypto.decrypt(tokenRaw.value)).token;

    // if (token == null && request.nextUrl.pathname == '/signin') {
    //   return NextResponse.redirect(new URL('/signin', request.url))
    // }

    //student
    if (token == null && request.nextUrl.pathname == "/portal") {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    // // //student
    if (token != null && request.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/portal", request.url));
    }

    // //student
    if (request.nextUrl.pathname == "/signin") {
      return NextResponse.redirect(new URL("/portal", request.url));
    }
  }
}

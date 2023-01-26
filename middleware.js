// middleware.ts
import cookie from 'js-cookie';
import { NextResponse } from 'next/server'
import useCrypto from './services/cryptoJs';
const crypto = new useCrypto()
export async function middleware(request, response) {

  var tokenRaw = request.cookies.get("TOKEN")
  var token = JSON.parse(crypto.decrypt(tokenRaw.value)).token
  
  if (request.nextUrl.pathname == '/') {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  if (token == null && request.nextUrl.pathname == '/signin') {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  //admins
  if (token == null && request.nextUrl.pathname == '/portal') {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  // //admins
  if (token != null && request.nextUrl.pathname == '/') {
    return NextResponse.redirect(new URL('/portal', request.url))
  }

  // //admins
  if (request.nextUrl.pathname == '/signin') {
    return NextResponse.redirect(new URL('/portal', request.url))
  }
}

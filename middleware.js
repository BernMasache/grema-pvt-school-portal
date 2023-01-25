// middleware.ts
import Cookies from 'js-cookie';
import { NextResponse } from 'next/server'

export async function middleware(request, response) {

  // var token = 'crypto.decrypt(Cookies.get("TOKEN"))'
  // 'crypto.decrypt(request.cookies.get("TOKEN"))'

  if (request.nextUrl.pathname == '/') {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // if (request.nextUrl.pathname == '/signin') {
  //   return NextResponse.redirect(new URL('/signin', request.url))
  // }
  //admins
  // if (request.nextUrl.pathname == '/portal') {
  //   return NextResponse.redirect(new URL('/signin', request.url))
  // }
  // //admins
  // if (request.nextUrl.pathname == '/') {
  //   return NextResponse.redirect(new URL('/signin', request.url))
  // }
}

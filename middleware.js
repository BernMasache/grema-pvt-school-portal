// middleware.ts

import { NextResponse } from 'next/server'
export async function middleware(request, response) {
  var url = request.url;

  if (request.nextUrl.pathname == '/') {
    return NextResponse.redirect(new URL('/portal', request.url))
  }

  if (request.nextUrl.pathname == '/api') {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  
  if (request.nextUrl.pathname == '/api/hello') {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}

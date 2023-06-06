import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isAuth = request.cookies.get('isAuth');

  if (!isAuth) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.rewrite(new URL('/login', request.url));
    }
  }

  if (isAuth) {
    if (url.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/admin/products', request.url));
    }
  }
}

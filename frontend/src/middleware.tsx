import { NextRequest, NextResponse } from 'next/server';

import { routes } from './constants';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isAuth = request.cookies.get('isAuth');

  if (!isAuth) {
    if (request.nextUrl.pathname.startsWith(routes.admin)) {
      return NextResponse.rewrite(new URL(routes.login, request.url));
    }
  }

  if (isAuth) {
    if (url.pathname.startsWith(routes.login)) {
      return NextResponse.redirect(new URL(routes.admin, request.url));
    }
  }
}

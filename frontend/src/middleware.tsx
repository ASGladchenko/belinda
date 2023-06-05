import { NextRequest, NextResponse } from 'next/server';

import { store } from './store';

export function middleware(request: NextRequest) {
  if (request.url.includes('admin')) {
    const { isAuth } = store.getState().auth;
    if (!isAuth) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

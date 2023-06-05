import { NextRequest, NextResponse } from 'next/server';

import { store } from './store';

export function middleware(request: NextRequest) {
  const { isAuth } = store.getState().auth;
  console.log('isAuth', isAuth);

  if (request.url.includes('admin')) {
    if (!isAuth) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

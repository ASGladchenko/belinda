import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('lang')?.value;
  const browserLang = request.headers
    .get('accept-language')
    ?.split(',')[0]
    .substring(0, 2);

  const lang = browserLang === 'en' ? 'en' : 'uk';

  const response = NextResponse.next();
  if (!cookie) {
    response.cookies.set('lang', lang, { maxAge: 365 * 24 * 60 * 60 * 1000 });
  }

  return response;
}

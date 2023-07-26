import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { expiresLang } from './constants';

const getLanguage = (lang: string | undefined) => {
  switch (lang) {
    case 'en':
      return 'en';

    case 'uk':
      return 'ua';

    default:
      return 'ua';
  }
};

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('lang')?.value;
  const browserLang = request.headers
    .get('accept-language')
    ?.split(',')[0]
    .substring(0, 2);

  const lang = getLanguage(browserLang);

  const response = NextResponse.next();
  if (!cookie) {
    response.cookies.set('lang', lang, {
      maxAge: expiresLang * 24 * 60 * 60 * 1000,
    });
  }

  return response;
}

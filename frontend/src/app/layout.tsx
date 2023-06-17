'use client';
import { SWRConfig } from 'swr';
import { Provider } from 'react-redux';
import { Inter, Pacifico } from 'next/font/google';

import { store } from '@/store';
import { getCookies } from '@/utils';
import { ChildrenProps } from '@/types';
import { USE_AUTH } from '@/constants';
import { Provider as ThemeProvider } from '@/components';

import '../styles/global.css';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const pacifico = Pacifico({
  weight: ['400'],
  variable: '--font-pacifico',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Belinda',
    template: '%s',
  },
  description: 'Belinda is a personal website',
};

export default function RootLayout({ children }: ChildrenProps) {
  const token = getCookies('refresh');

  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${inter.variable}`}>
        <SWRConfig
          value={{
            fallback: { [USE_AUTH]: token },
          }}
        >
          <Provider store={store}>
            <ThemeProvider>{children}</ThemeProvider>
          </Provider>
        </SWRConfig>
      </body>
    </html>
  );
}

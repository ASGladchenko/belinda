'use client';
import { Provider } from 'react-redux';
import { Inter, Pacifico } from 'next/font/google';

import { store } from '@/store';
import { ChildrenProps } from '@/types';
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
  title: 'Belinda',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${inter.variable}`}>
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

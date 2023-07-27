import { Inter, Pacifico, Jost } from 'next/font/google';

import { ChildrenProps } from '@/types';
import { LanguageProvider } from '@/context';
import { Provider as ThemeProvider, Toast } from '@/components';

import { ProviderSwr } from './provider-swr';
import { ProviderRedux } from './provider-redux';

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

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
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
  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${jost.variable}  ${inter.variable}`}
      >
        <ProviderSwr>
          <ProviderRedux>
            <LanguageProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </LanguageProvider>
            <Toast />
          </ProviderRedux>
        </ProviderSwr>
      </body>
    </html>
  );
}

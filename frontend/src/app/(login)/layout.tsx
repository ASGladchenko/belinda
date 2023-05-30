'use client';
import { Inter } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`${inter.className} transition-[background-color] duration-300 bg-admin-lighten-main dark:bg-admin-darken-main`}
    >
      {children}
    </main>
  );
}

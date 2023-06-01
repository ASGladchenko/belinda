'use client';
import { Inter, Pacifico } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin'],
});

export const pacifico = Pacifico({
  weight: ['400'],
  display: 'swap',
  variable: '--font-pacifico',
  subsets: ['latin', 'cyrillic'],
});

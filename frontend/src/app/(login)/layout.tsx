'use client';
import { inter } from '@/fonts/fonts';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`${inter.className} transition-[background-color] duration-300 bg-admin-lighten-main dark:bg-admin-darken-main`}
    >
      {children}
    </main>
  );
}

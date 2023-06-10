'use client';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';

import { ChildrenProps } from '@/types';
import { USE_AUTH, routes } from '@/constants';

export const metadata = {
  title: 'Login',
};

export default function Layout({ children }: ChildrenProps) {
  const router = useRouter();
  const { data } = useSWR(USE_AUTH);

  useEffect(() => {
    if (data) router.push(routes.admin);
  }, [router, data]);

  return (
    <main className="transition-[background-color] duration-300 bg-admin-lighten-main dark:bg-admin-darken-main">
      {children}
    </main>
  );
}

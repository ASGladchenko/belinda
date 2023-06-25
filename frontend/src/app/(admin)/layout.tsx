'use client';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';

import { ChildrenProps } from '@/types';
import { USE_AUTH, routes } from '@/constants';
import { Aside, HeaderAdmin } from '@/components';

export default function Layout({ children }: ChildrenProps) {
  const router = useRouter();
  // TODO: added loader
  const { data, isLoading } = useSWR(USE_AUTH);

  useEffect(() => {
    if (!data) router.push(routes.login);
  }, [router, data]);

  return (
    <div className="h-screen overflow-y-hidden">
      <HeaderAdmin />

      <div className="flex flex-nowrap h-[calc(100%-65px)]">
        <Aside />

        <main className="w-full p-5 overflow-y-auto bg-admin-lighten-main dark:bg-admin-darken-main">
          {children}
        </main>
      </div>
    </div>
  );
}

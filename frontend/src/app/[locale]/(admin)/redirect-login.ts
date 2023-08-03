'use client';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';

import { USE_AUTH, routes } from '@/constants';

export const RedirectLogin = () => {
  const router = useRouter();
  const { data } = useSWR(USE_AUTH);

  useEffect(() => {
    if (!data) router.push(routes.login);
  }, [router, data]);

  return null;
};

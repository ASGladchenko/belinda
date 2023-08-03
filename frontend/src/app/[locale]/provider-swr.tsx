'use client';
import { SWRConfig } from 'swr';

import { getCookies } from '@/utils';
import { USE_AUTH } from '@/constants';
import { ChildrenProps } from '@/types';

export const ProviderSwr = ({ children }: ChildrenProps) => {
  const token = getCookies('refresh');

  return (
    <SWRConfig
      value={{
        fallback: { [USE_AUTH]: token },
      }}
    >
      {children}
    </SWRConfig>
  );
};

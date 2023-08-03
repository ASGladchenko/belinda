'use client';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { ChildrenProps } from '@/types';

export const ProviderRedux = ({ children }: ChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};

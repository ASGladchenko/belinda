'use client';
import { ThemeProvider } from 'next-themes';

import { ChildrenProps } from '@/types';

const Provider = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export { Provider };

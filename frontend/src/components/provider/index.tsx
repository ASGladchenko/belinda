import { ThemeProvider } from 'next-themes';

import { ChildrenProps } from '@/types';

const Provider = ({ children }: ChildrenProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export { Provider };

import { ChildrenProps } from '@/types';

export default function Layout({ children }: ChildrenProps) {
  return (
    <main className="transition-[background-color] duration-300 bg-admin-lighten-main dark:bg-admin-darken-main">
      {children}
    </main>
  );
}

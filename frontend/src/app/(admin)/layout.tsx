import { Aside, HeaderAdmin } from '@/components';

export const metadata = {
  title: {
    default: 'Products',
    template: '%s',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-y-hidden">
      <HeaderAdmin />

      <div className="flex flex-nowrap h-[calc(100%-65px)]">
        <Aside />

        <main className="[postion:] w-full p-5 overflow-y-auto bg-admin-lighten-main dark:bg-admin-darken-main">
          {children}
        </main>
      </div>
    </div>
  );
}

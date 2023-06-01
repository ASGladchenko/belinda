import Aside from '@/components/admins/aside';
import Header from '@/components/admins/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-y-hidden">
      <Header />
      <div className="flex flex-nowrap h-[calc(100%-65px)]">
        <Aside />
        <main className="w-full p-5 overflow-y-auto bg-admin-lighten-main dark:bg-admin-darken-main">
          {children}
        </main>
      </div>
    </div>
  );
}

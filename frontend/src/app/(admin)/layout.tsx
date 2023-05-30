import AdminAside from '@/components/admin-aside';
import AdminHeader from '@/components/admin-header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen overflow-y-hidden'>
      <AdminHeader />
      <div className='flex flex-nowrap h-[calc(100%-65px)]'>
        <AdminAside />
        <main className='w-full p-5 overflow-y-auto bg-admin-lighten-main dark:bg-admin-darken-main'>
          {children}
        </main>
      </div>
    </div>
  );
}

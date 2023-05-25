import { MyFooter, MyHeader } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyHeader />
      <main>{children}</main>
      <MyFooter />
    </>
  );
}

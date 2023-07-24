import { Footer, Header } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-jost">
      <Header />
      <main className="h-[1600px]">{children}</main>
      <Footer />
    </div>
  );
}

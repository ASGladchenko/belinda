import { Footer, Header } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-jost">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

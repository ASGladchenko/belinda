import { Footer, Header } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-jost ">
      <Header />
      <main id="main" className="bg-white dark:bg-black">
        {children}
      </main>
      <Footer />
    </div>
  );
}

import { useTranslations } from 'next-intl';

import { Footer, Header } from '@/components';
import { ChildrenProps, IParams } from '@/types';

export default function Layout({
  children,
  params: { locale },
}: ChildrenProps<IParams>) {
  const footer = useTranslations('footer');
  const header = useTranslations('header-client');

  return (
    <div className="font-jost">
      <Header
        locale={locale}
        home={header('home')}
        about={header('about')}
        services={header('services')}
        products={header('products')}
        contacts={header('contacts')}
        seasonality={header('seasonality')}
      />

      <main
        id="main"
        className="bg-white dark:bg-black min-h-[calc(100vh-151px)] md:min-h-[calc(100vh-207px)]"
      >
        {children}
      </main>

      <Footer
        about={footer('about')}
        slogan={footer('slogan')}
        products={footer('products')}
        contacts={footer('contacts')}
      />
    </div>
  );
}

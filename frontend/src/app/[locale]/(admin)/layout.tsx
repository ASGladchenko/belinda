import { useTranslations } from 'next-intl';

import { ChildrenProps, IParams } from '@/types';
import { Aside, HeaderAdmin } from '@/components';

import { RedirectLogin } from './redirect-login';

export default function LayoutAdmin({
  children,
  params: { locale },
}: ChildrenProps<IParams>) {
  const header = useTranslations('header-admin');
  const aside = useTranslations('sidebar-admin');
  const asideText = {
    about: aside('about'),
    company: aside('company'),
    webPage: aside('webPage'),
    dashboard: aside('dashboard'),
  };

  return (
    <div className="h-screen overflow-y-hidden">
      <RedirectLogin />

      <HeaderAdmin text={header('exit')} locale={locale} />

      <div className="flex flex-nowrap h-[calc(100%-65px)]">
        <Aside {...asideText} />

        <main className="relative w-full p-5 overflow-y-auto bg-admin-lighten-main dark:bg-admin-darken-main">
          {children}
        </main>
      </div>
    </div>
  );
}

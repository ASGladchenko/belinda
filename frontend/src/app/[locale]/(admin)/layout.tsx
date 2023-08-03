import { ChildrenProps } from '@/types';
import { useTranslations } from 'next-intl';

import { Aside, HeaderAdmin } from '@/components';

import { RedirectLogin } from './redirect-login';

export default function LayoutAdmin({ children }: ChildrenProps) {
  const t = useTranslations('header-admin');

  return (
    <div className="h-screen overflow-y-hidden">
      <RedirectLogin />

      <HeaderAdmin text={t('exit')} />

      <div className="flex flex-nowrap h-[calc(100%-65px)]">
        <Aside />

        <main className="relative w-full p-5 overflow-y-auto bg-admin-lighten-main dark:bg-admin-darken-main">
          {children}
        </main>
      </div>
    </div>
  );
}

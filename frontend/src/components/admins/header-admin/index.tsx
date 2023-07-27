'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSWRConfig } from 'swr';

import { Login } from '@/assets/icons';
import { useLocaleText } from '@/locale';
import { removeTokensCookies } from '@/utils';
import { USE_AUTH, routes } from '@/constants';
import { Button, LanguageSelection, ThemeIcons } from '@/components';

export function HeaderAdmin() {
  const router = useRouter();
  const t = useLocaleText('headerAdmin');

  const { mutate } = useSWRConfig();

  const onExit = () => {
    removeTokensCookies();
    mutate(USE_AUTH, null);
    router.push(routes.login);
  };

  return (
    <header className="relative flex items-center justify-between transition w-full h-[65px] bg-admin-lighten-second dark:bg-admin-darken-second border-b border-admin-lighten-border dark:border-admin-darken-border drop-shadow-lg dark:drop-shadow-lg duration-0 px-8 z-999">
      <Link href="/admin" className={`text-xl cursor-pointer font-pacifico`}>
        Belinda
      </Link>

      <div className="flex items-center gap-3 sm:gap-5 flex-nowrap">
        <LanguageSelection />

        <ThemeIcons />

        <Button
          type="button"
          text={t.enter}
          onClick={onExit}
          variant="ghost-primary"
          className="px-2 py-1"
          icon={<Login width={20} height={20} />}
        />
      </div>
    </header>
  );
}

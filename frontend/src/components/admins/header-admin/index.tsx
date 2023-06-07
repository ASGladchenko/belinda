'use client';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import { Login } from '@/assets/icons';
import { deleteStorage } from '@/utils';
import { Button, LanguageSelection, ThemeIcons } from '@/components';
import Link from 'next/link';

export function HeaderAdmin() {
  const router = useRouter();
  const [lang, setLang] = useState('ukrainian');

  const onExit = () => {
    Cookies.remove('isAuth');
    router.push('/login');
    deleteStorage('token');
  };

  return (
    <header className="relative flex items-center justify-between transition w-full h-[65px] bg-admin-lighten-second dark:bg-admin-darken-second border-b border-admin-lighten-border dark:border-admin-darken-border drop-shadow-lg dark:drop-shadow-lg duration-0 px-8 z-999">
      <Link href="/admin" className={`text-xl cursor-pointer font-pacifico`}>
        Belinda
      </Link>
      <div className="flex items-center gap-6 flex-nowrap">
        <LanguageSelection selectLang={lang} onSelect={setLang} />

        <ThemeIcons />

        <Button
          text="Exit"
          type="button"
          onClick={onExit}
          variant="ghost-primary"
          className="px-2 py-1"
          icon={<Login width={20} height={20} />}
        />
      </div>
    </header>
  );
}

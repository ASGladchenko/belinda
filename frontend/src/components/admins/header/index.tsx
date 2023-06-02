'use client';
import { useState } from 'react';

import { Login } from '@/assets/icons';
import { Button } from '@/components/button';
import { ThemeIcons } from '@/components/theme-icons';
import LanguageSelection from '@/components/language-selection';

export default function Header() {
  const [lang, setLang] = useState('ukrainian');

  const onExit = () => console.log('Exit');

  return (
    <header className="flex items-center justify-between transition w-full h-[65px] bg-admin-lighten-second dark:bg-admin-darken-second border-b border-admin-lighten-border dark:border-admin-darken-border drop-shadow-lg dark:drop-shadow-lg duration-0 px-8">
      <h3 className={`text-xl cursor-pointer font-pacifico`}>Belinda</h3>
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
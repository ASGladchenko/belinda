'use client';
import { useState } from 'react';
import { Pacifico } from 'next/font/google';

import { ThemeIcons } from '../theme-icons';
import AdminBtnExit from '../admin-btn-exit';
import LanguageSelection from '../language-selection';

export const pacifico = Pacifico({
  weight: ['400'],
  display: 'swap',
  variable: '--font-pacifico',
  subsets: ['latin', 'cyrillic'],
});

export default function AdminHeader() {
  const [lang, setLang] = useState('ukrainian');

  const onExit = () => console.log('Exit');

  return (
    <header className='flex items-center justify-between transition w-full h-[65px] bg-admin-lighten-second dark:bg-admin-darken-second border-b border-admin-lighten-border dark:border-admin-darken-border drop-shadow-lg dark:drop-shadow-lg duration-0 px-8'>
      <h3 className={`${pacifico.className} text-xl cursor-pointer`}>Belinda</h3>
      <div className='flex items-center gap-6 flex-nowrap'>
        <LanguageSelection selectLang={lang} onSelect={setLang} />
        <ThemeIcons />
        <AdminBtnExit onClick={onExit} />
      </div>
    </header>
  );
}

import Link from 'next-intl/link';

import { LanguageSelection, ThemeIcons } from '@/components';

import { WrapperButton } from './wrapper-button';

export function HeaderAdmin({ text }: { text: string }) {
  return (
    <header className="relative flex items-center justify-between transition w-full h-[65px] bg-admin-lighten-second dark:bg-admin-darken-second border-b border-admin-lighten-border dark:border-admin-darken-border drop-shadow-lg dark:drop-shadow-lg duration-0 px-8 z-999">
      <Link href="/" className="text-xl cursor-pointer font-pacifico">
        Belinda
      </Link>

      <div className="flex items-center gap-3 sm:gap-5 flex-nowrap">
        <LanguageSelection />
        <ThemeIcons />
        <WrapperButton text={text} />
      </div>
    </header>
  );
}

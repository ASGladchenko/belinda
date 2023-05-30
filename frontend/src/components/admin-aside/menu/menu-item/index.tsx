'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IMenuItem } from '../types';

export default function MenuItem({ isNavBar, name, href, Icon }: IMenuItem) {
  const pathname = usePathname();

  const isActive = pathname === href;

  console.log(pathname === href);

  const linkNameClass = clsx(
    'whitespace-nowrap transition-links duration-500 overflow-hidden group-hover:pl-3 group-active:pl-3 select-none text-black dark:text-white group-hover:text-admin-primaryHover capitalize',
    { 'scale-0 transition ': !isNavBar },
    { 'text-admin-primaryHover pl-3': isActive }
  );

  const borderLinkClass = clsx(
    'absolute right-0 z-20 w-6 h-6 outline-none  bg-admin-lighten-main dark:bg-admin-darken-main after:block after:w-6 after:h-6 after:bg-admin-lighten-second dark:after:bg-admin-darken-second',
    {
      ' block': isActive,
      hidden: !isActive,
    }
  );
  const mainLinkClass = clsx(
    'relative flex items-center w-full gap-6 py-2 pl-2 rounded-l-full outline-none cursor-pointer   group',
    {
      'dark:bg-admin-darken-main bg-admin-lighten-main': isActive,
      'bg-admin-lighten-second  dark:bg-admin-darken-second': !isActive,
    }
  );
  const iconLinkClass = clsx(
    'transition-all duration-300 focus-visible:outline-none dark:fill-white dark:stroke-white',
    {
      'p-2 rounded-full bg-admin-primary drop-shadow-md fill-white dark:fill-black': isActive,
      'dark:group-hover:fill-admin-primary group-hover:fill-admin-primary ': !isActive,
    }
  );
  return (
    <li>
      <Link href={href} className={mainLinkClass}>
        <span className={`${borderLinkClass} -top-6 after:rounded-br-full`} />
        <span className={`${borderLinkClass} -bottom-6 after:rounded-tr-full`} />
        <div className={iconLinkClass}>
          <Icon width={24} height={24} />
        </div>
        <span className={linkNameClass}>{name}</span>
      </Link>
    </li>
  );
}

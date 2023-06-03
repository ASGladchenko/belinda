'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getStyles } from './styles';
import { IMenuItem } from '../types';

export function MenuItem({ isNavBar, name, href, Icon }: IMenuItem) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { border, title, icon, main } = getStyles(isActive, isNavBar);

  return (
    <li>
      <Link href={href} className={main}>
        <span
          className={`${border} -top-6 after:rounded-br-full invisible lg:visible`}
        />
        <span
          className={`${border} -bottom-6 after:rounded-tr-full invisible lg:visible`}
        />
        <div className={icon}>
          <Icon width={24} height={24} />
        </div>
        <span className={title}>{name}</span>
      </Link>
    </li>
  );
}

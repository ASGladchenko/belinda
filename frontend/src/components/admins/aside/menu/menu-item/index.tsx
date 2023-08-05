import Link from 'next-intl/link';

import { IMenuItem } from '../types';

import { getStyles } from './styles';

export function MenuItem({ isNavBar, name, href, Icon, isActive }: IMenuItem) {
  const { border, title, icon, main } = getStyles(isActive, isNavBar);

  return (
    <li>
      <Link href={href} className={main}>
        <span className={`${border} -top-6 after:rounded-br-full`} />
        <span className={`${border} -bottom-6 after:rounded-tr-full`} />
        <div className={icon}>
          <Icon width={24} height={24} />
        </div>
        <span className={title}>{name}</span>
      </Link>
    </li>
  );
}

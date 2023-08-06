import { usePathname } from 'next/navigation';

import { IMenu } from './types';
import { activeIdx } from './helpers';
import { MenuItem } from './menu-item';
import { getModifiedMenu } from './config';

export default function Menu({ isNavBar, ...props }: IMenu) {
  const pathname = usePathname();
  const modifiedMenu = getModifiedMenu(props);

  return (
    <ul className="flex flex-col gap-3 py-6 pl-3 pr-3 overflow-x-hidden lg:pr-0">
      {modifiedMenu.map((item, idx) => (
        <MenuItem
          {...item}
          isNavBar={isNavBar}
          key={`menu-list-${idx}`}
          isActive={activeIdx(pathname) === idx}
        />
      ))}
    </ul>
  );
}

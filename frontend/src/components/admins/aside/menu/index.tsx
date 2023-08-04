import { IMenu } from './types';
import { MenuItem } from './menu-item';
import { getModifiedMenu } from './config';

export default function Menu({ isNavBar, ...props }: IMenu) {
  const modifiedMenu = getModifiedMenu(props);

  return (
    <ul className="flex flex-col gap-3 py-6 pl-3 pr-3 overflow-x-hidden lg:pr-0">
      {modifiedMenu.map((item, idx) => (
        <MenuItem key={`menu-list-${idx}`} isNavBar={isNavBar} {...item} />
      ))}
    </ul>
  );
}

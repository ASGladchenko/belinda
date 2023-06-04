import { menuList } from './config';
import { MenuItem } from './menu-item';

export default function Menu({ isNavBar }: { isNavBar: boolean }) {
  return (
    <ul className="flex flex-col gap-3 py-6 pl-3 pr-3 overflow-x-hidden lg:pr-0">
      {menuList.map((item) => (
        <MenuItem key={item.name} isNavBar={isNavBar} {...item} />
      ))}
    </ul>
  );
}

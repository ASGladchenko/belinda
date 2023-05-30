import { menuList } from './config';
import MenuItem from './menu-item';

export default function Menu({ isNavBar }: { isNavBar: boolean }) {
  return (
    <ul className='flex flex-col gap-10 py-6 pl-3 overflow-x-hidden'>
      {menuList.map((item, index) => (
        <MenuItem key={`${index}_${item.name}`} isNavBar={isNavBar} {...item} />
      ))}
    </ul>
  );
}

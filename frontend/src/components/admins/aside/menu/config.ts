import { routes } from '@/constants';
import { Company, Product, Web } from '@/assets/icons';

import { IMenuList } from './types';

export const menuList: IMenuList[] = [
  {
    name: '',
    href: routes.admin,
    Icon: Product,
  },

  {
    name: '',
    href: routes.company,
    Icon: Company,
  },

  {
    name: '',
    href: routes.webpage,
    Icon: Web,
  },
];

export function getModifiedMenu(menuText: string[]) {
  return menuList.map((item, index) => {
    return {
      ...item,
      name: menuText[index],
    };
  });
}

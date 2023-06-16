import { routes } from '@/constants';
import { Company, Product, Web } from '@/assets/icons';

import { IMenuList } from './types';

export const menuList: IMenuList[] = [
  {
    name: 'products',
    href: routes.admin,
    Icon: Product,
  },

  {
    name: 'company',
    href: routes.company,
    Icon: Company,
  },

  {
    name: 'webpage',
    href: routes.webpage,
    Icon: Web,
  },
];

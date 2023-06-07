import { Company, Product, Web } from '@/assets/icons';

import { IMenuList } from './types';

export const menuList: IMenuList[] = [
  {
    name: 'products',
    href: '/admin',
    Icon: Product,
  },

  {
    name: 'company',
    href: '/admin/company',
    Icon: Company,
  },

  {
    name: 'webpage',
    href: '/admin/webpage',
    Icon: Web,
  },
];

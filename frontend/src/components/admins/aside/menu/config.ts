import { routes } from '@/constants';
import { Company, Product, Web } from '@/assets/icons';

import { IAsideText } from '@/types';

export function getModifiedMenu({ about, company, webPage }: IAsideText) {
  return [
    {
      name: company,
      href: routes.admin,
      Icon: Product,
    },

    {
      name: about,
      href: routes.company,
      Icon: Company,
    },

    {
      name: webPage,
      href: routes.webpage,
      Icon: Web,
    },
  ];
}

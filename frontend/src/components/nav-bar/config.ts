import { ITranslatedNavBar } from '@/types';

export const translatedNavbar = ({
  home,
  about,
  services,
  products,
  contacts,
  categories,
  seasonality,
}: Omit<ITranslatedNavBar, 'locale, isLoading'>) => {
  const menuItems = categories.map(({ name, id }) => ({
    name: name,
    path: `/category/${id}`,
  }));
  return [
    { name: home, path: '/' },
    { name: about, path: '/#aboutUs' },
    { name: services, path: '/#offered_you' },
    {
      name: products,
      path: '/',
      menu: [...menuItems, { name: seasonality, path: '/seasonality' }],
    },
    { name: contacts, path: '/contacts' },
  ];
};

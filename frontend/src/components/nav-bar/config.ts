import { IHeaderClient } from '@/types';

export const translatedNavbar = ({
  home,
  about,
  fruits,
  services,
  products,
  contacts,
  vegetables,
  seasonality,
}: Omit<IHeaderClient, 'locale'>) => {
  return [
    { name: home, path: '/' },
    { name: about, path: '#aboutUs' },
    { name: services, path: '#offered_you' },
    {
      name: products,
      path: '/',
      menu: [
        { name: fruits, path: '/' },
        { name: vegetables, path: '/' },
        { name: seasonality, path: '/' },
      ],
    },
    { name: contacts, path: '/contacts' },
  ];
};

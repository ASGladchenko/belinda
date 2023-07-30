import { useLocaleText } from '@/locale';

export const translatedNavbar = () => {
  const text = useLocaleText('headerClient');

  return [
    { name: text.home, path: '/' },
    { name: text.about, path: '#aboutUs' },
    { name: text.services, path: '/' },
    {
      name: text.products,
      path: '/',
      menu: [
        { name: text.fruits, path: '/' },
        { name: text.vegetables, path: '/' },
        { name: text.seasonality, path: '/' },
      ],
    },
    { name: text.contacts, path: '/' },
  ];
};

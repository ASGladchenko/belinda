import { IFooter } from '@/types';

export const translatedFooter = ({
  about,
  products,
  contacts,
}: Omit<IFooter, 'slogan'>) => {
  return [
    { name: about, path: '#aboutUs' },
    { name: products, path: '/' },
    { name: contacts, path: '/' },
  ];
};

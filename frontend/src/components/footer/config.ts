import { IFooter } from '@/types';

export const translatedFooter = ({
  about,
  contacts,
}: Omit<IFooter, 'slogan'>) => {
  return [
    { name: about, path: '/#aboutUs' },
    { name: contacts, path: '/contacts' },
  ];
};

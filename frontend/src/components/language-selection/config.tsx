import { Ua, En } from '@/assets/icons';

import { ILanguages } from './types';

export const languages: ILanguages[] = [
  {
    name: 'ukrainian',
    abb: 'uk',
    Icon: <Ua width={24} height={24} />,
  },
  {
    name: 'english',
    abb: 'en',
    Icon: <En width={24} height={24} />,
  },
];

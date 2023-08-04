import * as Buns from '@/assets/buns';

import { IBuns } from './types';

export const translatedBuns = ({
  textManager,
  textProduct,
  textImporter,
  textSupplies,
  titleManager,
  titleProduct,
  titleImporter,
  titleSupplies,
}: IBuns) => {
  return [
    {
      title: titleImporter,
      text: textImporter,
      background: 'bg-client-advantages-green',
    },
    {
      bgImg: Buns.box1.src,
    },
    {
      title: titleProduct,
      text: textProduct,
      background: 'bg-client-advantages-yellow',
    },
    {
      bgImg: Buns.box2.src,
    },
    {
      bgImg: Buns.box3.src,
    },
    {
      title: titleSupplies,
      text: textSupplies,
      background: 'bg-client-advantages-orange',
    },
    {
      bgImg: Buns.box4.src,
    },
    {
      title: titleManager,
      text: textManager,
      background: 'bg-client-advantages-blue',
    },
  ];
};

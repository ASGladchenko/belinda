import { useLocaleText } from '@/locale';

import * as Images from '../../assets/buns';

export const getCardsData = () => {
  const box1 = useLocaleText('bunsBox1');
  const box2 = useLocaleText('bunsBox2');
  const box3 = useLocaleText('bunsBox3');
  const box4 = useLocaleText('bunsBox4');

  return [
    {
      text: box1.text,
      title: box1.title,
      background: 'bg-client-advantages-green',
    },

    {
      bgImg: Images.box1.src,
    },

    {
      text: box2.text,
      title: box2.title,
      background: 'bg-client-advantages-yellow',
    },

    {
      bgImg: Images.box2.src,
    },

    {
      bgImg: Images.box3.src,
    },

    {
      text: box3.text,
      title: box3.title,
      background: 'bg-client-advantages-orange',
    },

    {
      bgImg: Images.box4.src,
    },

    {
      text: box4.text,
      title: box4.title,
      background: 'bg-client-advantages-blue',
    },
  ];
};

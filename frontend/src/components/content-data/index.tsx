import { useLocaleText } from '@/locale';
import * as Buns from '../../assets/buns';

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

export const translatedBuns = () => {
  const bunsContent = useLocaleText('bunsBox');

  return [
    {
      text: bunsContent.textBox1,
      title: bunsContent.titleBox1,
      background: 'bg-client-advantages-green',
    },
    {
      bgImg: Buns.box1.src,
    },
    {
      text: bunsContent.textBox2,
      title: bunsContent.titleBox2,
      background: 'bg-client-advantages-yellow',
    },
    {
      bgImg: Buns.box2.src,
    },
    {
      bgImg: Buns.box3.src,
    },
    {
      text: bunsContent.textBox3,
      title: bunsContent.titleBox3,
      background: 'bg-client-advantages-orange',
    },
    {
      bgImg: Buns.box4.src,
    },
    {
      text: bunsContent.textBox4,
      title: bunsContent.titleBox4,
      background: 'bg-client-advantages-blue',
    },
  ];
};

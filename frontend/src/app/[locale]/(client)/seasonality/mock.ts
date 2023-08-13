import { useTranslations } from 'next-intl';

export const SeasonMonths = () => {
  const months = useTranslations('seasonality');

  return [
    months('january'),
    months('february'),
    months('march'),
    months('april'),
    months('may'),
    months('june'),
    months('july'),
    months('august'),
    months('september'),
    months('october'),
    months('november'),
    months('december'),
  ];
};

export const seasonsProducts = [
  {
    id: '1',
    img: '',
    name: 'Kiwi',
    description: '',
    seasonality: [
      'january',
      'february',
      '',
      '',
      'may',
      '',
      '',
      '',
      '',
      'october',
      'november',
      'december',
    ],
  },
  {
    id: '2',
    img: '',
    name: 'Pomegranate',
    description: '',
    seasonality: [
      'january',
      'february',
      '',
      'april',
      'may',
      '',
      'july',
      '',
      'september',
      '',
      '',
      'december',
    ],
  },
  {
    id: '2',
    img: '',
    name: 'Apple',
    description: '',
    seasonality: [
      'january',
      '',
      '',
      'april',
      '',
      'june',
      'july',
      '',
      'september',
      'october',
      'november',
      '',
    ],
  },
];

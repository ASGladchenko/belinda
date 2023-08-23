import { useTranslations } from 'next-intl';

export const SeasonMonths = () => {
  const months = useTranslations('seasonality');

  return [
    months('jan'),
    months('feb'),
    months('mar'),
    months('apr'),
    months('may'),
    months('jun'),
    months('jul'),
    months('aug'),
    months('sep'),
    months('oct'),
    months('nov'),
    months('dec'),
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

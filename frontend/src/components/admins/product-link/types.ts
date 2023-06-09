export interface IProductLink {
  id: number;
  href: string;
  name: string;
}

export interface ISubCategory {
  id: number;
  url: string;
  name: string;
}

export interface IProduct {
  id: number;
  url: string;
  name: string;
  img_url?: string;
  varieties?: string[];
  seasonality: ISeasonality;
}

export type ISeasonality = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

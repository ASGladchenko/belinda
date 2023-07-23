export interface IProductLink {
  id: string;
  url: string;
  name: string;
  img?: string;
  name_ua: string;
  baseHref: string;
  swrStorage: string;
  notModify?: boolean;
  onEdit?: (id: string) => void;
}
export interface IProduct {
  id: string;
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

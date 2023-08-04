import { PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;
export type ParamsProps<T = unknown> = PropsWithChildren<T>;
export type LanguageType = 'ua' | 'en';
export interface IParams {
  params: { locale: string };
}

export interface Params {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface IAuth {
  role: string;
  password: string;
  remember?: boolean;
}

export interface IRootData {
  name: string;
  name_ua: string;
}

export interface IProductSend {
  name: string;
  name_ua: string;
  categoryId: string;
  img_url?: File | '';
  description?: string;
  description_ua?: string;
}

export interface IAsideText {
  about: string;
  company: string;
  webPage: string;
}

export interface IHeaderClient {
  home: string;
  about: string;
  locale: string;
  fruits: string;
  services: string;
  products: string;
  contacts: string;
  vegetables: string;
  seasonality: string;
}

export interface IFooter {
  about: string;
  slogan: string;
  products: string;
  contacts: string;
}

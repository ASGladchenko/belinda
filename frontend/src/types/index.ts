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
  name_en: string;
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
  dashboard: string;
}

export interface IHeaderClient {
  home: string;
  about: string;
  locale: string;
  services: string;
  products: string;
  contacts: string;
  seasonality: string;
}

export interface IFooter {
  about: string;
  slogan: string;
  products: string;
  contacts: string;
}

export interface IProductFormText {
  create: string;
  confirm: string;
  name_uk: string;
  name_eng: string;
  message: IMessage;
  description_uk: string;
  description_eng: string;
}

export interface IMessage {
  min2?: string;
  min3?: string;
  min4?: string;
  max16?: string;
  required?: string;
  matches_english?: string;
  matches_cyrillic?: string;
}

export interface IFormText {
  edit: string;
  create: string;
  name_uk: string;
  name_eng: string;
  btnCancel: string;
  message: IMessage;
  btnConfirm: string;
}

export interface ILoginPage {
  login: string;
  btnText: string;
  password: string;
  remember: string;
  forgot: string;
  message: IMessage;
}

export interface ICategoryNavbarItem {
  id: string;
  name: string;
}
export interface ITranslatedNavBar
  extends Omit<IHeaderClient, 'locale' | 'isLoading'> {
  categories: ICategoryNavbarItem[];
}
export interface INavBar extends IHeaderClient {
  isLoading?: boolean;
  categories: ICategoryNavbarItem[];
}

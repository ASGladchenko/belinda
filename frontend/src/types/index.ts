import { PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

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

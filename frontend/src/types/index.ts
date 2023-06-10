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

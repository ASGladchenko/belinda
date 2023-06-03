import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithChildren,
} from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export interface Params {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id?: string;
  name: string;
  label?: string;
  error?: string;
  placeholder?: string;
}

export interface IAuth {
  role: string;
  password: string;
}

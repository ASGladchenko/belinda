import { PropsWithChildren } from 'react';

import { files } from '@/locale/translated-files';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;
export type LanguageType = 'ua' | 'en';

export interface LocaleTranslations {
  [key: string]: string;
}

export interface Translations {
  en: LocaleTranslations;
  ua: LocaleTranslations;
}

export type FileType = keyof typeof files;

type AllTranslations = {
  [key in FileType]: Translations;
};

export type TypedLocaleTranslations<T extends FileType> =
  AllTranslations[T][LanguageType];

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

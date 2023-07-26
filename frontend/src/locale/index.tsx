import { useEffect, useState } from 'react';

import { getCookies } from '@/utils';
import { FileType, LanguageType, TypedLocaleTranslations } from '@/types';

import { files } from './translated-files';

export const LocaleText = <T extends FileType>(
  LocalePage: T,
): TypedLocaleTranslations<T> => {
  try {
    const localeData = files[LocalePage];
    const language = getCookies('lang') as LanguageType;
    const translations = localeData[language];

    if (!translations) {
      return {} as TypedLocaleTranslations<T>;
    }

    return translations as TypedLocaleTranslations<T>;
  } catch (error) {
    return {} as TypedLocaleTranslations<T>;
  }
};

export const useLocaleText = <T extends FileType>(langPage: T) => {
  const [lang, setLang] = useState<TypedLocaleTranslations<T>>({});

  useEffect(() => {
    setLang(LocaleText(langPage));
  }, [langPage]);

  return lang;
};

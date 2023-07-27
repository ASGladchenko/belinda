import { useContext, useEffect, useState } from 'react';

import { FileType, LanguageType, TypedLocaleTranslations } from '@/types';

import { files } from './translated-files';
import { LanguageContext } from '@/context';

export const LocaleText = <T extends FileType>(
  LocalePage: T,
  lang: LanguageType,
): TypedLocaleTranslations<T> => {
  try {
    const localeData = files[LocalePage];
    const translations = localeData[lang];

    if (!translations) {
      return {} as TypedLocaleTranslations<T>;
    }

    return translations as TypedLocaleTranslations<T>;
  } catch (error) {
    return {} as TypedLocaleTranslations<T>;
  }
};

export const useLocaleText = <T extends FileType>(langPage: T) => {
  const { language } = useContext(LanguageContext);
  const [lang, setLang] = useState<TypedLocaleTranslations<T>>({});

  useEffect(() => {
    setLang(LocaleText(langPage, language as LanguageType));
  }, [language]);

  return lang;
};

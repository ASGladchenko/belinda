'use client';
import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { ChildrenProps } from '@/types';

interface ILanguageContext {
  language: string;
  setLanguage: (lang: string) => void;
}
const langCookie = Cookies.get('lang') || 'ua';

export const LanguageContext = createContext<ILanguageContext>({
  language: '',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: ChildrenProps) => {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    setLanguage(langCookie);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

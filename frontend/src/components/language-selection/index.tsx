'use client';
import React, { useEffect, useMemo, useState } from 'react';

import { getCookies } from '@/utils';
import { Tooltip } from '@/components';

import { languages } from './config';
import { SelectableLanguage } from './selectable-language';

export function LanguageSelection() {
  const language = getCookies('lang');

  const [lang, setLang] = useState('uk');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (language) {
      setLang(language);
    }
  }, [language]);

  const { Icon, selectable } = useMemo(() => {
    const selectedLang = languages.find((item) => item.abb === lang);
    const selectable = languages.filter((item) => item.abb !== lang);
    return { Icon: selectedLang?.Icon, selectable };
  }, [lang]);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
      {Icon}

      <Tooltip isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        {selectable.map((item) => (
          <SelectableLanguage
            {...item}
            key={item.abb}
            onSelect={setLang}
            onClose={() => setIsOpen(false)}
          />
        ))}
      </Tooltip>
    </div>
  );
}

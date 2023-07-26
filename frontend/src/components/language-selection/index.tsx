'use client';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { Tooltip } from '@/components';
import { LanguageContext } from '@/context';

import { languages } from './config';
import { SelectableLanguage } from './selectable-language';

export function LanguageSelection() {
  const { language, setLanguage } = useContext(LanguageContext);

  const [isOpen, setIsOpen] = useState(false);

  const { Icon, selectable } = useMemo(() => {
    const selectedLang = languages.find((item) => item.abb === language);
    const selectable = languages.filter((item) => item.abb !== language);

    return { Icon: selectedLang?.Icon, selectable };
  }, [language]);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
      {Icon}

      <Tooltip isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        {selectable.map((item) => (
          <SelectableLanguage
            {...item}
            key={item.abb}
            setLanguage={setLanguage}
            onClose={() => setIsOpen(false)}
          />
        ))}
      </Tooltip>
    </div>
  );
}

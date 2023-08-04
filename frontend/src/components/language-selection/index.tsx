'use client';
import React, { useMemo, useState } from 'react';

import { Tooltip } from '@/components';

import { languages } from './config';
import { SelectableLanguage } from './selectable-language';

export function LanguageSelection({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const { Icon, selectable } = useMemo(() => {
    const selectedLang = languages.find((item) => item.abb === locale);
    const selectable = languages.filter((item) => item.abb !== locale);

    return { Icon: selectedLang?.Icon, selectable };
  }, [locale]);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
      {Icon}

      <Tooltip isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        {selectable.map((item) => (
          <SelectableLanguage
            {...item}
            key={item.abb}
            onClose={() => setIsOpen(false)}
          />
        ))}
      </Tooltip>
    </div>
  );
}

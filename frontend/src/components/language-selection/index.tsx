'use client';
import React, { useState } from 'react';

import Tooltip from '../tooltip';
import { languages } from './config';
import { ILanguageSelection } from './types';
import SelectableLanguage from './selectable-language';

export default function LanguageSelection({ selectLang, onSelect }: ILanguageSelection) {
  const [isOpen, setIsOpen] = useState(false);

  const [{ Icon }] = languages.filter((lang) => lang.name === selectLang);
  const selectable = languages.filter((lang) => lang.name !== selectLang);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer'>
      <Icon width={24} height={24} />

      <Tooltip isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        {selectable.map((lang, index) => (
          <SelectableLanguage
            key={`${index}_${lang.abb}`}
            {...lang}
            onSelect={onSelect}
            onClose={() => setIsOpen(false)}
          />
        ))}
      </Tooltip>
    </div>
  );
}

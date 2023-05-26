'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeIcons() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          role='button'
          className='stroke-2 w-7 h-7 stroke-lighten-color'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          role='button'
          className='w-6 h-6 stroke-2 stroke-darken-color'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return <>{renderThemeChanger()}</>;
}

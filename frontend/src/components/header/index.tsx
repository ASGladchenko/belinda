'use client';
import Link from 'next-intl/link';
import { useState, useEffect } from 'react';

import { IHeaderClient } from '@/types';

import { NavBar } from '../nav-bar';
import { getStyles } from './styles';

export const Header = (props: IHeaderClient) => {
  const [isScrollHeader, setIsScrollHeader] = useState(false);
  const { header, container, logo } = getStyles(isScrollHeader);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80 && !isScrollHeader) {
        setIsScrollHeader(true);
      }

      if (window.scrollY < 90 && isScrollHeader) {
        setIsScrollHeader(false);
      }
    });
  }, [isScrollHeader]);

  return (
    <header className={header}>
      <div className={container}>
        <Link href="/" className={logo}>
          Bellinda
        </Link>

        <NavBar {...props} />
      </div>
    </header>
  );
};

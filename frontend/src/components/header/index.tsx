'use client';
import { useState } from 'react';
import { NavBar } from '../nav-bar';
import { getStyles } from './styles';

export const Header = () => {
  const [isScrollHeader, setIsScrollHeader] = useState(false);
  const { header, container, logo } = getStyles(isScrollHeader);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 80 && !isScrollHeader) setIsScrollHeader(true);
    if (window.scrollY < 90 && isScrollHeader) setIsScrollHeader(false);
  });

  return (
    <header className={header}>
      <div className={container}>
        <a href="/" className={logo}>
          Bellinda
        </a>
        <NavBar />
      </div>
    </header>
  );
};

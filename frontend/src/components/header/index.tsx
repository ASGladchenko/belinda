'use client';
import { useState, useEffect } from 'react';
import { NavBar } from '../nav-bar';
import { getStyles } from './styles';

export const Header = () => {
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
        <a href="/" className={logo}>
          Bellinda
        </a>
        <NavBar />
      </div>
    </header>
  );
};

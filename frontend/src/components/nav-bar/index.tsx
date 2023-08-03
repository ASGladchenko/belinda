'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks';

import { getStyles } from './styles';
import { ThemeIcons } from '../theme-icons';
import { TranslatedNavbar } from '../content-data';
import { LanguageSelection } from '../language-selection';

export const NavBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const navbar = TranslatedNavbar();
  useOutsideClick(ref, () => setIsOpenDropDown(false));

  const {
    link,
    nav_bar,
    dropDown,
    btn_close,
    burgerIcon,
    dropDownLink,
    toogleDropDown,
    burger_container,
  } = getStyles(isOpen, isOpenDropDown);

  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    if (!isOpen) document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <>
      <div className={nav_bar} onClick={() => setIsOpen(!isOpen)}>
        <span className={burgerIcon}></span>
      </div>

      <div className={burger_container}>
        <span className={btn_close} onClick={() => setIsOpen(false)}></span>

        {navbar.map(({ name, path, menu }, idx) => (
          <React.Fragment key={`menu-${idx}`}>
            {!menu && (
              <Link href={path} className={link}>
                {name}
              </Link>
            )}

            {menu && (
              <div
                ref={ref}
                className="relative overflow-hidden lg:overflow-visible"
              >
                <p
                  className={`${link} flex gap-1 items-center`}
                  onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                >
                  {name} <span className={toogleDropDown}>&#9660;</span>
                </p>
                <div className={dropDown}>
                  {menu.map(({ name, path }, idx) => (
                    <a
                      href={path}
                      key={`menu-item-${idx}`}
                      className={`${link} ${dropDownLink}`}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}

        <LanguageSelection />

        <ThemeIcons />
      </div>
    </>
  );
};

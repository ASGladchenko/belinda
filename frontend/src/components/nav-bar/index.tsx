'use client';
import { useState } from 'react';

import { ThemeIcons } from '../theme-icons';
import { getStyles } from '../header/styles';
import { client_data } from '../content-data';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
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

  return (
    <>
      <div className={nav_bar} onClick={() => setIsOpen(!isOpen)}>
        <span className={burgerIcon}></span>
      </div>

      <div className={burger_container}>
        <span className={btn_close} onClick={() => setIsOpen(false)}></span>

        {client_data.nav_bar.map(({ name, path, menu }) => (
          <>
            {!menu && (
              <a href={path} className={link}>
                {name}
              </a>
            )}

            {menu && (
              <div className="relative overflow-hidden lg:overflow-visible">
                <p
                  className={`${link} flex gap-1 items-center`}
                  onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                >
                  {name} <span className={toogleDropDown}>&#9660;</span>
                </p>
                <div className={dropDown}>
                  {menu.map(({ name, path }) => (
                    <a href={path} className={`${link} ${dropDownLink}`}>
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        ))}

        <ThemeIcons />
      </div>
    </>
  );
};

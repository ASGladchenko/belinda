'use client';
import clsx from 'clsx';
import { useState } from 'react';

import { Right } from '@/assets/icons';

import Menu from './menu';

export default function Aside() {
  const [isNavBar, setIsNavBar] = useState(false);

  const asideClass = clsx(
    'fixed translate-x-[-100%] lg:translate-x-[0] w-full h-full lg:relative max-w-[250px] lg:max-w-[100px] duration-500 transition-aside bg-admin-lighten-second dark:bg-admin-darken-second py-5 pl-2 ',
    {
      'translate-x-[0] lg:max-w-[250px]': isNavBar === true,
    },
  );

  const switcherClass = clsx(
    'absolute bottom-[80px] p-3 lg:p-1 text-white transition duration-300 cursor-pointer  rounded-3xl bg-admin-primary hover:bg-admin-primaryHover z-100',
    {
      'translate-x-[-4px] duration-300 lg:translate-x-1/3 right-2 lg:right-0':
        isNavBar,
      'translate-x-full duration-300 lg:translate-x-1/3 right-[-4px] lg:right-0 ':
        !isNavBar,
    },
  );

  const headerClass = clsx(
    'flex w-full justify-center transition-all duration-300 mb-4 font-bold select-none',
    {
      'text-lg ': isNavBar,
      'text-xs  ': !isNavBar,
    },
  );

  return (
    <aside className={asideClass}>
      <div className={switcherClass} onClick={() => setIsNavBar(!isNavBar)}>
        <Right
          width={16}
          height={16}
          className={`${
            isNavBar ? 'rotate-180' : ''
          } transition-transform duration-300`}
        />
      </div>

      <h2 className={headerClass}>DASHBOARD</h2>

      <div className="w-full h-[95%] overflow-y-auto scroll lg:pb-0 lg:h-full overflow-x-hidden">
        <Menu isNavBar={isNavBar} />
      </div>
    </aside>
  );
}

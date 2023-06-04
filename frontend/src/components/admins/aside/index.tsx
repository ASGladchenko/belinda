'use client';
import { useState } from 'react';

import { Right } from '@/assets/icons';

import Menu from './menu';
import { getStyles } from './styles';

export function Aside() {
  const [isNavBar, setIsNavBar] = useState(false);
  const { aside, switcher, header } = getStyles(isNavBar);

  return (
    <aside className={aside}>
      <div className={switcher} onClick={() => setIsNavBar(!isNavBar)}>
        <Right
          width={16}
          height={16}
          className={`${
            isNavBar ? 'rotate-180' : ''
          } transition-transform duration-300`}
        />
      </div>

      <h2 className={header}>Dashboard</h2>

      <div className="w-full h-[95%] overflow-y-auto scroll lg:pb-0 lg:h-full overflow-x-hidden">
        <Menu isNavBar={isNavBar} />
      </div>
    </aside>
  );
}

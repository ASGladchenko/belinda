'use client';
import { useEffect, useState } from 'react';

import { IAsideText } from '@/types';
import { Right } from '@/assets/icons';
import { useWindowWidth } from '@/hooks/useWindowWidth';

import Menu from './menu';
import { getStyles } from './styles';

export function Aside(props: IAsideText) {
  const size = useWindowWidth();

  const [isNavBar, setIsNavBar] = useState(false);
  const { aside, switcher, header } = getStyles(isNavBar);

  useEffect(() => {
    if (size > 1024) setIsNavBar(true);
  }, [size]);

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

      <h2 className={header}>{props.dashboard}</h2>

      <div className="w-full h-[95%] overflow-y-auto scroll lg:pb-0 lg:h-full overflow-x-hidden">
        <Menu isNavBar={isNavBar} {...props} />
      </div>
    </aside>
  );
}

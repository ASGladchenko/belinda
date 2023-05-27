'use client';
import { useMemo, useState } from 'react';

import { Eye, EyeOff } from '@/assets/icons';

import { ISwitchPassword } from './types';

const SwitchPassword = (isPassword: boolean): ISwitchPassword => {
  const [isShow, setIsShow] = useState(!isPassword);

  const currentType = useMemo(() => (isShow ? 'text' : 'password'), [isShow]);

  const Component = (
    <div
      className='absolute right-1.5 flex cursor-pointer top-1/2 translate-y-[-50%] text-admin-lighten-border dark:text-admin-btnWhite'
      onClick={() => setIsShow(!isShow)}
    >
      {isShow ? <Eye width={24} height={24} /> : <EyeOff width={24} height={24} />}
    </div>
  );

  return {
    switcher: Component,
    currentType,
  };
};

export { SwitchPassword };

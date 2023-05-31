'use client';
import { useMemo, useState } from 'react';

import { Eye, EyeOff } from '@/assets/icons';

import { ISwitchPassword } from './types';

const SwitchPassword = (isPassword: boolean): ISwitchPassword => {
  const [isShow, setIsShow] = useState(!isPassword);

  const currentType = useMemo(() => (isShow ? 'text' : 'password'), [isShow]);

  const Component = (
    <div
      className='absolute right-1.5 flex cursor-pointer top-1/2 translate-y-[-50%] text-admin-lighten-border dark:text-admin-btnWhite hover:text-admin-primary dark:hover:text-admin-primary'
      onClick={() => setIsShow(!isShow)}
    >
      {isShow ? <Eye width={20} height={20} /> : <EyeOff width={20} height={20} />}
    </div>
  );

  return {
    switcher: Component,
    currentType,
  };
};

export { SwitchPassword };

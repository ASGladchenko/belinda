import clsx from 'clsx';

import { IVariant } from './type';

export const setClass = (variant: IVariant) => {
  return clsx(
    `flex items-center justify-center gap-2 py-2 px-4 box-border decoration-0 rounded disabled:opacity-[0.8] disabled:select-none transition-colors duration-300 ease-in-out border-[1px] border-transparent`,
    {
      'bg-admin-primary border-admin-primary enabled:hover:bg-admin-primaryHover enabled:active:bg-admin-primaryActive':
        variant === 'primary',
      'bg-transparent text-admin-primary border-admin-primary enabled:hover:bg-admin-primaryHover enabled:hover:text-admin-btnWhite enabled:active:bg-admin-primaryActive enabled:active:text-admin-btnWhite':
        variant === 'outline-primary',
      'bg-admin-secondary border-admin-secondary enabled:hover:bg-admin-secondaryHover enabled:active:bg-admin-secondaryActive':
        variant === 'secondary',
      'bg-transparent text-admin-secondary border-admin-secondary enabled:hover:bg-admin-secondaryHover enabled:hover:text-admin-btnWhite enabled:active:bg-admin-secondaryActive enabled:active:text-admin-btnWhite':
        variant === 'outline-secondary',

      'text-admin-lighten-grey dark:text-white enabled:hover:text-admin-primaryHover dark:enabled:hover:text-white  enabled:hover:bg-admin-lighten-main dark:enabled:hover:bg-admin-darken-main':
        variant === 'ghost-primary',
    },
  );
};

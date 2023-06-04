import clsx from 'clsx';

import { IVariant } from './type';

export const setClass = (variant: IVariant) => {
  const primaryColor =
    'border-admin-primary enabled:hover:bg-admin-primaryHover enabled:active:bg-admin-primaryActive';

  const secondaryColor =
    'bg-admin-secondary border-admin-secondary enabled:hover:bg-admin-secondaryHover enabled:active:bg-admin-secondaryActive ';

  const outlineVariant = 'bg-transparent enabled:hover:text-white';

  const ghostVariant =
    'enabled:text-black dark:enable:text-black dark:enabled:hover:text-white enabled:dark:text-white border-transparent';

  const baseVariant = 'enabled:text-white enabled:dark:text-white ';

  return clsx(
    `flex items-center justify-center gap-2 py-2 px-4 box-border max-h-10 decoration-0 rounded disabled:opacity-[0.8] disabled:select-none transition-colors duration-300 ease-in-out border`,
    {
      [`${primaryColor} ${baseVariant} bg-admin-primary`]:
        variant === 'primary',

      [`${primaryColor} ${outlineVariant} text-admin-primary`]:
        variant === 'outline-primary',

      [`${secondaryColor} ${baseVariant}`]: variant === 'secondary',

      [`${secondaryColor} ${outlineVariant} text-admin-secondary`]:
        variant === 'outline-secondary',

      [`${ghostVariant} enabled:hover:bg-admin-secondaryActive`]:
        variant === 'ghost-secondary',

      [`${ghostVariant} enabled:hover:bg-admin-lighten-main dark:enabled:hover:bg-admin-darken-main`]:
        variant === 'ghost-primary',
    },
  );
};

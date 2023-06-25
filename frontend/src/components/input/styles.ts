import clsx from 'clsx';

export const getStyles = (error?: string, isTypePassword?: boolean) => ({
  mainInput: clsx(
    'p-2 w-full h-10 border text-text dark:text-admin-btnWhite bg-transparent enabled:border-zinc-400 dark:border-admin-darken-border enabled:focus:border-admin-primary enabled:dark:focus:border-admin-primary enabled:active:border-admin-primary disabled:bg-lighten-bg-body dark:disabled:bg-darken-bg-body rounded-lg transition-colors duration-300 ease-in-out focus-visible:outline-none',
    {
      'border-admin-warning dark:border-admin-warning': error,
      'pr-8': isTypePassword,
    },
  ),

  textarea: clsx(
    'w-full h-24 p-2 bg-transparent border rounded-lg resize-none enabled:border-zinc-400 dark:border-admin-darken-border enabled:focus:border-admin-primary enabled:dark:focus:border-admin-primary enabled:active:border-admin-primary outline-0',
    {
      'border-admin-warning dark:border-admin-warning': error,
    },
  ),
});

import clsx from 'clsx';

export const getStyles = (isScrollHeader: boolean) => ({
  header: clsx(
    'h-[100px] w-full fixed flex justify-center bg-client-light-header items-center top-0 z-999  dark:bg-transparent',
    { 'backdrop-blur-[4px]': isScrollHeader },
    { 'backdrop-blur-[0] ': !isScrollHeader },
  ),

  container: clsx(
    'max-w-[1090px] w-full flex items-center justify-between px-[25px] lg:px-3',
  ),

  logo: clsx(
    'text-3xl transition duration-300 font-pacifico hover:text-admin-primary',
  ),
});

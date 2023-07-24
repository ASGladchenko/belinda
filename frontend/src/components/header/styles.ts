import clsx from 'clsx';

export const getStyles = (isScrollHeader: boolean) => ({
  header: clsx(
    'h-[100px] w-full sticky flex justify-center items-center top-0',
    { 'backdrop-blur-[2px]': isScrollHeader },
  ),

  container: clsx(
    'max-w-[1090px] w-full flex items-center justify-between px-[25px] lg:px-3',
  ),

  logo: clsx(
    'text-3xl transition duration-300 font-pacifico hover:text-admin-primary',
  ),
});

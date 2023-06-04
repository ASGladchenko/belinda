import clsx from 'clsx';

export const getStyles = (isNavBar: boolean) => ({
  aside: clsx(
    'fixed translate-x-[-100%] lg:translate-x-[0] w-full h-full lg:relative max-w-[250px] lg:max-w-[100px] duration-500 transition-aside bg-admin-lighten-second dark:bg-admin-darken-second py-5 pl-2 z-100 z-999 border-none',
    {
      'translate-x-[0] lg:max-w-[250px]': isNavBar,
    },
  ),

  switcher: clsx(
    'absolute p-3 lg:p-1 text-white transition duration-300 cursor-pointer rounded-full bg-admin-primary hover:bg-admin-primaryHover z-100',
    {
      'duration-300 translate-x-1/2  bottom-[135px] lg:bottom-20 right-0':
        isNavBar,
      'translate-x-full duration-300 lg:translate-x-1/3 bottom-[135px] lg:bottom-20 right-0 ':
        !isNavBar,
    },
  ),

  header: clsx(
    'flex w-full justify-center transition-all min-h-[28px] duration-300 mb-4 font-bold select-none',
    {
      'text-lg ': isNavBar,
      'text-xs  ': !isNavBar,
    },
  ),
});

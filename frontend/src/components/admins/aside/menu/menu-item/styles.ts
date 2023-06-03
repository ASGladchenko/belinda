import clsx from 'clsx';

export const getStyles = (isActive: boolean, isNavBar: boolean) => ({
  title: clsx(
    'whitespace-nowrap transition-links duration-500 overflow-hidden group-hover:pl-3 select-none  capitalize',
    { 'scale-0 transition ': !isNavBar },
    {
      'text-admin-primaryHover pl-3 ': isActive,
      'group-hover:text-admin-primaryHover dark:text-white ': !isActive,
    },
  ),

  border: clsx(
    'absolute right-0 z-20 w-6 h-6 outline-none  bg-admin-lighten-main dark:bg-admin-darken-main after:block after:w-6 after:h-6 after:bg-admin-lighten-second dark:after:bg-admin-darken-second',
    {
      ' block': isActive,
      hidden: !isActive,
    },
  ),

  main: clsx(
    'relative min-h-[56px] flex items-center w-full gap-6 pl-2 pr-2 lg:pr-0 rounded-l-full rounded-r-full lg:rounded-r-none outline-none cursor-pointer group',
    {
      'dark:bg-admin-darken-main bg-admin-lighten-main': isActive,
      'bg-admin-lighten-second dark:bg-admin-darken-second': !isActive,
    },
  ),

  icon: clsx(
    'transition-all duration-300 focus-visible:outline-none dark:fill-white dark:stroke-white',
    {
      'p-2 rounded-full bg-admin-primary drop-shadow-md fill-white dark:fill-black ml-0`':
        isActive,
      'dark:group-hover:fill-admin-primary group-hover:fill-admin-primary  ml-2':
        !isActive,
    },
  ),
});

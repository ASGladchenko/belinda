import clsx from 'clsx';

export const getStyles = ({ isAnimation }: { isAnimation: boolean }) => ({
  overlay: clsx(
    'w-full h-screen top-0 left-0 z-[999] fixed transition-all bg-admin-overlay dark:bg-admin-overlay1 duration-300 flex items-center justify-center ',
    {
      [`opacity-0`]: !isAnimation,
      'opacity-1': isAnimation,
    },
  ),

  window: clsx(
    'max-w-[600px] bg-admin-lighten-main drop-shadow-darken drop-shadow-2xl dark:drop-shadow-darken dark:bg-admin-darken-main p-3',
  ),

  menu: 'flex justify-center gap-10',
});

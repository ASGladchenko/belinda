import clsx from 'clsx';

export const getStyles = (isOpen: boolean, isOpenDropDown: boolean) => ({
  nav_bar: clsx('cursor-pointer h-[30px] flex items-center justify-center'),

  burgerIcon: clsx(
    "relative block lg:hidden rounded w-[30px] h-[3px] after:block after:content-[''] after:w-[30px] after:h-[3px] after:bg-white before:bg-white bg-white after:absolute before:block before:content-[''] before:w-[30px] before:h-[3px]  before:rounded after:rounded before:absolute after:origin-[-4px]-left before:origin-[-12px]-right ",
    {
      'bg-transparent after:left-0 before:left-0 after:rotate-45 before:-rotate-45 after:transition before:transition transition':
        isOpen,
    },
    {
      'bg-black after:left-0 after:-top-[8px] before:-bottom-[8px] before:left-0 after:rotate-0 after:transition before:transition transition':
        !isOpen,
    },
  ),

  burger_container: clsx(
    'fixed w-screen min-h-screen lg:min-h-fit lg:w-fit lg:w-full lg:relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 lg:max-w-[600px] lg:justify-between top-0 right-0 transition bg-black lg:bg-transparent text-white p-[50px] lg:p-0  duration-300 dark:text-white',
    { 'translate-x-full lg:translate-x-0': !isOpen },
    { 'translate-x-0': isOpen },
  ),

  btn_close: clsx(
    'absolute top-[24px] right-[24px] w-[30px] h-[30px] block after:content-[""] after:block after:w-full after:h-[3px] after:bg-white after:absolute after:top-1/2 after:center after:rotate-45 before:content-[""] before:block before:top-1/2 before:w-full before:h-[3px] before:bg-white before:absolute before:bottom-0 before:origin-center before:-rotate-45 cursor-pointer lg:hidden',
  ),

  link: clsx(
    'uppercase text-[15px] leading-4 font-[600] hover:text-admin-primary transition duration-100 cursor-pointer',
  ),

  toogleDropDown: clsx('transition-transform', {
    'rotate-180': isOpenDropDown,
  }),

  dropDown: clsx(
    'flex-col items-center gap-4 pt-2 lg:absolute lg:top-[30px] lg:py-4 z-999 lg:w-[220px] lg:left-0 lg:gap-0 lg:bg-white lg:rounded-xl lg:drop-shadow-xl lg:overflow-hidden lg:text-black ',
    { 'h-fit flex': isOpenDropDown },
    { 'h-0 hidden': !isOpenDropDown },
  ),
  dropDownLink: clsx(
    `text-sm lg:w-full lg:px-[15px] lg:py-[10px] lg:hover:bg-[#F8F9FA]`,
  ),
});

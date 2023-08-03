import clsx from 'clsx';

export const getStyles = (inView: boolean) => ({
  contentBlock: clsx(
    'lg:max-w-[45%] w-full py-[50px] lg:py-[100px] flex flex-col gap-2',
  ),

  title: clsx('relative w-full text-3xl font-bold font-jost opacity-0', {
    'animate-left-appearance': inView,
  }),

  content: clsx('text-base font-jost opacity-0 text-justify lg:text-start', {
    'animate-down-appearance': inView,
  }),

  img: clsx(
    'hidden w-full duration-500 bg-center bg-100% bg-no-repeat lg:block backdrop-grayscale-[20%]',
    {
      ' animate-scale-4': inView,
    },
  ),
});

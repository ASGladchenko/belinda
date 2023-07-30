import clsx from 'clsx';

export const getStyles = (background?: string) => ({
  card: clsx(
    'flex flex-col gap-2 min-h-[300px] xl:min-h-[360px] h-full bg-cover bg-center text-white',
    { [`p-[36px] ${background}`]: background },
  ),

  head: clsx('font-bold leading-[100%]'),

  content: clsx('opacity-[0.6]'),
});
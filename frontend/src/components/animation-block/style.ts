import clsx from 'clsx';

import { IGetStyles } from './types';

export const getStyles = ({ inView, animation, styles }: IGetStyles) => {
  return {
    animationBlock: clsx(`${styles ? styles : ''}`, {
      [`${animation}`]: inView,
    }),
  };
};

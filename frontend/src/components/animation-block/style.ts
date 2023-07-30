import clsx from 'clsx';

import { IGetStyles } from './types';

const selectAnimation = (animation: string) => {
  switch (animation) {
    case 'down':
      return 'animate-down-appearance-md';

    case 'left':
      return 'animate-left-appearance-md';

    default:
      '';
  }
};

export const getStyles = ({ inView, animation, styles }: IGetStyles) => {
  const animationClass = selectAnimation(animation);

  return {
    animationBlock: clsx(`${styles ? styles : ''}`, {
      [`${animation}`]: inView,
    }),
  };
};

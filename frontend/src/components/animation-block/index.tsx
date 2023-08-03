'use client';
import { useInView } from 'react-intersection-observer';

import { ChildrenProps } from '@/types';

import { getStyles } from './style';
import { IAnimationBlock } from './types';

export const AnimationBlock = ({
  styles,
  children,
  animation,
  triggerOnce,
}: ChildrenProps<IAnimationBlock>) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: triggerOnce ? triggerOnce : false,
  });

  const { animationBlock } = getStyles({ inView, animation, styles });

  return (
    <div ref={ref} className={animationBlock}>
      {children}
    </div>
  );
};

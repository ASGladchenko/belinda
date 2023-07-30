'use client';
import { useInView } from 'react-intersection-observer';

import { ChildrenProps } from '@/types';

import { getStyles } from './style';
import { IAnimationBlock } from './types';

export const AnimationBlock = ({
  styles,
  children,
  animation,
}: ChildrenProps<IAnimationBlock>) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { animationBlock } = getStyles({ inView, animation, styles });

  return (
    <div ref={ref} className={animationBlock}>
      {children}
    </div>
  );
};

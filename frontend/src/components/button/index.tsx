'use client';
import clsx from 'clsx';
import { IButton } from './type';
import { setClass } from './helpers';

export const Button = ({
  icon,
  text,
  variant,
  className,
  iconRight,
  ...rest
}: IButton) => {
  const btnStyles = setClass(variant);
  const classIcon = clsx({ 'order-1': iconRight, 'order-0': !iconRight });

  return (
    <button
      {...rest}
      className={className ? `${btnStyles} ${className}` : btnStyles}
    >
      {icon && <div className={classIcon}>{icon}</div>}
      {text && <span>{text}</span>}
    </button>
  );
};

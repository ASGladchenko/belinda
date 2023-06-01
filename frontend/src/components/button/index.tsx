'use client';
import clsx from 'clsx';
import { IButton } from './type';
import { setVariant } from './helpers';

export const Button = ({ variant, text, className, icon, iconRight, ...rest }: IButton) => {
  const btnClass = 'btn' + setVariant(variant);
  const classIcon = clsx('order-0', { 'order-1': iconRight });

  return (
    <button {...rest} className={className ? `${className} ${btnClass}` : btnClass}>
      {icon && <div className={classIcon}>{icon}</div>}
      {text && <span>{text}</span>}
    </button>
  );
};

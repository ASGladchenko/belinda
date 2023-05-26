'use client';
import { setVariant } from './helpers';
import { IButton } from './type';

export const Button = ({ variant, text, className, ...rest }: IButton) => {
  const btnClass = 'btn' + setVariant(variant);

  return (
    <button {...rest} className={className ? className + ' ' + btnClass : btnClass}>
      {text && text}
    </button>
  );
};

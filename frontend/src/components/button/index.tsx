'use client';

import { IButton } from './type';
import { setVariant } from './helpers';

export const Button = ({ variant, text, className, icon, iconRight, ...rest }: IButton) => {
  const btnClass = 'btn' + setVariant(variant);
  const classIcon = iconRight ? 'order-1' : ' order-0';

  return (
    <button {...rest} className={className ? `${className} ${btnClass}` : btnClass}>
      {icon && <div className={classIcon}>{icon}</div>}
      {text && <span>{text}</span>}
    </button>
  );
};

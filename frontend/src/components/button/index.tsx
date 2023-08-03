import clsx from 'clsx';
import { IButton } from './type';
import { setClass } from './helpers';

import './styles.css';

export const Button = ({
  icon,
  text,
  variant,
  disabled,
  className,
  iconRight,
  isFetching,
  ...rest
}: IButton) => {
  const btnStyles = setClass(variant);
  const classIcon = clsx({ 'order-1': iconRight, 'order-0': !iconRight });

  return (
    <button
      {...rest}
      className={className ? `${btnStyles} ${className}` : btnStyles}
      disabled={disabled}
    >
      {!isFetching ? (
        <>
          {icon && <div className={classIcon}>{icon}</div>}
          {text && <span className="select-none">{text}</span>}
        </>
      ) : (
        <span className="loader-btn"></span>
      )}
    </button>
  );
};

import clsx from 'clsx';

import { mainInput } from './class';
import { InputProps } from './types';
import { SwitchPassword } from './switch';

const Input = ({
  id,
  name,
  error,
  label,
  value,
  disabled,
  placeholder,
  type = 'text',
  ...props
}: InputProps) => {
  const isTypePassword = type === 'password';
  const { currentType, switcher } = SwitchPassword(isTypePassword);
  const changingType = isTypePassword ? currentType : type;

  const inputClass = clsx(mainInput, {
    'border-admin-warning dark:border-admin-warning': error,
    'pr-8': isTypePassword,
  });

  return (
    <label className='flex flex-col'>
      {label && (
        <span className='pl-1 mb-1 text-sm text-text dark:text-admin-btnWhite'>{label}</span>
      )}

      <div className='relative'>
        <input
          name={name}
          value={value}
          id={id ?? name}
          type={changingType}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
          onChange={(e) => {
            if (props.onChange) {
              props.onChange(e);
            }
          }}
          className={inputClass}
        />

        {isTypePassword && switcher}
      </div>

      {error && <span className='mt-1 text-xs text-admin-warning'>{error}</span>}
    </label>
  );
};

export { Input };

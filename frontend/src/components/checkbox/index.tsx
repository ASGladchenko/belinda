import { CheckIcon } from '@heroicons/react/20/solid';

import { CheckboxProps } from '../types';

const Checkbox = ({ id, name, label, checked, disabled, className, ...props }: CheckboxProps) => {
  return (
    <label
      htmlFor={id ?? name}
      className={`group ${
        disabled ? 'cursor-default' : 'cursor-pointer'
      } relative flex gap-2 items-center `}
    >
      <input
        name={name}
        type='checkbox'
        id={id ?? name}
        checked={checked}
        disabled={disabled}
        className='absolute appearance-none peer'
        {...props}
      />

      <span className='w-5 h-5 transition duration-300 ease-in-out border-2 rounded border-admin-lighten-border dark:border-admin-darken-border group-hover:border-admin-primary peer-checked:bg-admin-primary dark:group-hover:border-admin-primary peer-checked:border-admin-primary dark:peer-checked:border-admin-primary peer-disabled:bg-lighten-main dark:peer-disabled:bg-darken-main' />

      <CheckIcon className='absolute  opacity-0 stroke-2 group-hover:opacity-100 group-hover:stroke-admin-primary peer-checked:opacity-100 peer-disabled:opacity-0 peer-disabled:cursor-default left-[2px] h-4 w-4 text-lighten-blue dark:text-darken-blue peer-checked:stroke-white dark:peer-checked:stroke-white shrink-0 duration-300 ease-in-out z-10' />

      {label && (
        <span className='transition duration-300 ease-in-out group-hover:text-admin-primary text-admin-lighten-grey dark:text-admin-btnWhite'>
          {label}
        </span>
      )}
    </label>
  );
};

export { Checkbox };

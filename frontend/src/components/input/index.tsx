import { InputProps } from './types';

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
  return (
    <label className='flex flex-col'>
      {label && (
        <span className='pl-1 mb-1 text-sm text-text dark:text-admin-btnWhite'>{label}</span>
      )}

      <input
        name={name}
        type={type}
        value={value}
        id={id ?? name}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        className={`p-2 w-full h-10 border text-text dark:text-admin-btnWhite bg-transparent border-lighten-border dark:border-admin-darken-border enabled:focus:border-admin-primary enabled:dark:focus:border-admin-primary enabled:active:border-admin-primary
         disabled:bg-lighten-bg-body dark:disabled:bg-darken-bg-body rounded-lg transition-colors duration-300 ease-in-out focus-visible:outline-none
         ${error && 'border-admin-warning dark:border-admin-warning'}
         `}
      />

      {error && <span className='mt-1 text-xs text-admin-warning'>{error}</span>}
    </label>
  );
};

export { Input };

// 'use client';

// import { useField } from 'formik';

// import { InputProps, Input } from 'components';
// import { controlError } from 'utils/error';

// function InputField({ name, label, ...props }: InputProps) {
//   const [field, meta, helpers] = useField(name);
//   const { value, ...fieldProps } = field;

//   const error = controlError(meta, name, label);

//   return (
//     <Input
//       {...fieldProps}
//       name={name}
//       label={label}
//       error={error}
//       value={value ?? ''}
//       onChange={(event) => {
//         helpers.setValue(event.target.value || '');
//       }}
//       {...props}
//     />
//   );
// }

// export { InputField };

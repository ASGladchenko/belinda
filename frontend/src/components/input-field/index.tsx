import { Field, FieldProps } from 'formik';

import { Input } from '../input';
import { Checkbox } from '../checkbox';
import { InputProps } from '../input/types';
import { InputOnChangeEventType } from './types';

export const InputField = ({ name, label, ...props }: InputProps) => {
  return (
    <Field name={name}>
      {({ meta, form, field: { ...fieldProps } }: FieldProps) => {
        const error = meta.touched && meta.error ? meta.error : undefined;
        const change = async (newValue: InputOnChangeEventType) => {
          await form.setFieldValue(name, newValue);
          form.setFieldTouched(name);
        };

        return (
          <>
            {props.type === 'checkbox' && (
              <Checkbox
                {...props}
                name={name}
                label={label}
                onChange={(e) => change(e.target.checked)}
              />
            )}

            {props.type !== 'checkbox' && (
              <Input
                {...props}
                label={label}
                error={error}
                {...fieldProps}
                name={name}
                onChange={(e) =>
                  change(typeof e === 'string' ? e : e.target.value)
                }
              />
            )}
          </>
        );
      }}
    </Field>
  );
};

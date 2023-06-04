import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id?: string;
  name: string;
  label?: string;
  error?: string;
  placeholder?: string;
}

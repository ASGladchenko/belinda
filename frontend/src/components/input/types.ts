import {
  ReactNode,
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
type InputOnChangeEventType =
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | string;

interface CustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    HTMLInputElement | HTMLTextAreaElement
  > {}

export interface InputProps extends Omit<CustomInput, 'ref'> {
  id?: string;
  name: string;
  label?: string;
  error?: string;
  onChange?: (e: InputOnChangeEventType) => void;
}

export interface ISwitchPassword {
  switcher: ReactNode;
  currentType: 'password' | 'text';
}

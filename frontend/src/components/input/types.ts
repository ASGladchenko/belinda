import {
  ReactNode,
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id?: string;
  name: string;
  label?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISwitchPassword {
  switcher: ReactNode;
  currentType: 'password' | 'text';
}

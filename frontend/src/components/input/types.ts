import { type } from 'os';
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id?: string;
  name: string;
  label?: string;
  variant: IInputVariant;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

type IInputVariant = 'admin';

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface CustomButton
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export interface IButton extends Omit<CustomButton, 'ref'> {
  text?: string;
  icon?: ReactNode;
  variant: IVariant;
  iconRight?: boolean;
}

export type IVariant = 'primary' | 'outline-primary' | 'secondary' | 'outline-secondary';

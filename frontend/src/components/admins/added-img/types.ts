import { ChangeEvent } from 'react';
import { FormikProps } from 'formik';

export interface AddedImg {
  name: string;
  imgUrl: string;
}

export interface IOnClear {
  event: React.MouseEvent<HTMLDivElement>;
  form: FormikProps<any>;
}

export interface IHandleImageChange {
  event: ChangeEvent<HTMLInputElement>;
  form: FormikProps<any>;
}

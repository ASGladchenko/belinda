import { ChangeEvent } from 'react';
import { FormikProps, FormikValues } from 'formik';

export interface IAddedImg {
  name: string;
  imgUrl: string;
}

export interface IOnClear {
  event: React.MouseEvent<HTMLDivElement>;
  form: FormikProps<FormikValues>;
}

export interface IHandleImageChange {
  event: ChangeEvent<HTMLInputElement>;
  form: FormikProps<FormikValues>;
}

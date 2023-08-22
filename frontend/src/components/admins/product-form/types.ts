import { FormikValues } from 'formik';

import { IProductFormText } from '@/types';

export interface IProductForm {
  months: string[];
  pickerTitle: string;
  initialValues: IProduct;
  onSubmit: (values: FormikValues) => void;
  productFormText: IProductFormText;
}

export interface IProduct {
  id: string;
  name: string;
  name_ua: string;
  img_url: string;
  months: string[];
  description: string;
  description_ua: string;
}

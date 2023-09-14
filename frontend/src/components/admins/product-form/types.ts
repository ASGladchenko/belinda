import { FormikValues } from 'formik';

import { IProductFormText } from '@/types';

export interface IProductForm {
  months: string[];
  pickerTitle: string;
  initialValues: IProduct;
  productFormText: IProductFormText;
  onSubmit: (values: FormikValues) => void;
}

export interface IProduct {
  id: string;
  name_en: string;
  name_ua: string;
  img_url: string;
  months: string[];
  description_en: string;
  description_ua: string;
}

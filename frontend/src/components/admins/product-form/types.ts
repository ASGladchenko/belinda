import { FormikValues } from 'formik';

export interface IProductForm {
  initialValues: IProduct;
  onSubmit: (values: FormikValues) => void;
}

export interface IProduct {
  id: string;
  name: string;
  name_ua: string;
  description: string;
  description_ua: string;
  img_url: string;
}

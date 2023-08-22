import { IProductFormText } from '@/types';

export interface ICreatePage {
  months: string[];
  pickerTitle: string;
  categoriesText: {
    [key: string]: string;
  };
  productFormText: IProductFormText;
}

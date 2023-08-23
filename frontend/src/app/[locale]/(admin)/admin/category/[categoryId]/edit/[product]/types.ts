import { IProductFormText } from '@/types';

export interface IEditPage {
  months: string[];
  productId: string;
  pickerTitle: string;
  categoriesText: {
    [key: string]: string;
  };
  productFormText: IProductFormText;
}

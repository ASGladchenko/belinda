import { LanguageType } from './../decorators/language.decorator';

export interface IProductByLanguage {
  id: string;
  name: string;
  name_ua: string;
  description: string;
  description_ua: string;
  img_url: string;
  months: LanguageType[];
}

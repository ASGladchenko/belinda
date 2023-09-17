import { LanguageType } from './../decorators/language.decorator';

export interface IProductByLanguage {
  id: string;
  name: string;
  img_url: string;
  name_ua: string;
  description: string;
  description_ua: string;
  months: LanguageType[];
}

import * as Yup from 'yup';

import { IMessage } from '@/types';

import { IProduct } from './types';

const baseNameRegExp = /^[A-Za-z0-9\s.,!?;:()"'-]*$/;
const cyrillicRegExp = /^[А-Яа-яЁёЇїІіЄєҐґ0-9\s']+$/;

export const validationSchema = ({
  min2,
  min3,
  required,
  matches_english,
  matches_cyrillic,
}: IMessage) => {
  return Yup.object().shape({
    name_ua: Yup.string()
      .matches(cyrillicRegExp, matches_cyrillic)
      .required(required)
      .min(3, min3),
    name_en: Yup.string()
      .matches(baseNameRegExp, matches_english)
      .required(required)
      .min(3, min3),
    description_en: Yup.string()
      .matches(baseNameRegExp, matches_english)
      .required(required)
      .min(2, min2),
    description_ua: Yup.string()
      .matches(cyrillicRegExp, matches_cyrillic)
      .required(required)
      .min(2, min2),
    months: Yup.array().of(Yup.string()),
  });
};

export const getInitialValues = (initial?: IProduct) => ({
  id: initial?.id || '',
  name_en: initial?.name_en || '',
  months: initial?.months || [],
  name_ua: initial?.name_ua || '',
  img_url: initial?.img_url || '',
  description_en: initial?.description_en || '',
  description_ua: initial?.description_ua || '',
});

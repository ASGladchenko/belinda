import * as Yup from 'yup';

import { IMessage } from '@/types';

import { IProduct } from './types';

const baseNameRegExp = /^[A-Za-z0-9\s.,!?;:()"'-]*$/;
const cyrillicRegExp = /^[А-Яа-яЁёЇїІіЄєҐґ']+$/;

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
    name: Yup.string()
      .matches(baseNameRegExp, matches_english)
      .required(required)
      .min(3, min3),
    description: Yup.string()
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
  name: initial?.name || '',
  months: initial?.months || [],
  name_ua: initial?.name_ua || '',
  img_url: initial?.img_url || '',
  description: initial?.description || '',
  description_ua: initial?.description_ua || '',
});

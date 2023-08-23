import * as Yup from 'yup';

import { IMessage, IRootData } from '@/types';

const baseNameRegExp = /^[A-Za-z0-9\s.,!?;:()"'-]*$/;
const cyrillicRegExp = /^[А-Яа-яЁёЇїІіЄєҐґ']+$/;

export const getInitialValues = (initial?: IRootData) => ({
  name_ua: initial?.name_ua || '',
  name: initial?.name || '',
});

export const validationSchema = ({
  min4,
  required,
  matches_english,
  matches_cyrillic,
}: IMessage) => {
  return Yup.object().shape({
    name: Yup.string()
      .required(required)
      .min(4, min4)
      .matches(baseNameRegExp, matches_english),
    name_ua: Yup.string()
      .required(required)
      .min(4, min4)
      .matches(cyrillicRegExp, matches_cyrillic),
  });
};

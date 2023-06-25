import * as Yup from 'yup';

import { IRootData } from '@/types';

const baseNameRegExp = /^[A-Za-z0-9\s.,!?;:()"'-]*$/;
const rusRegExp = /^[А-Яа-яЁё0-9\s.,!?;:()"'-]*$/;

export const getInitialValues = (initial?: IRootData) => ({
  name_ua: initial?.name_ua || '',
  name: initial?.name || '',
});

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле')
    .min(4, 'Минимум 4 символов')
    .matches(baseNameRegExp, 'Only English letters'),
  name_ua: Yup.string()
    .required('Обязательное поле')
    .min(4, 'Минимум 4 символов')
    .matches(rusRegExp, 'Only the Cyrillic alphabet'),
});

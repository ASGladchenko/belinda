import * as Yup from 'yup';
import { IProduct } from './types';

const baseNameRegExp = /^[A-Za-z0-9\s.,!?;:()"'-]*$/;
const rusRegExp = /^[А-Яа-яЁё0-9\s.,!?;:()"'-]*$/;

export const validationSchema = Yup.object().shape({
  name_ua: Yup.string()
    .matches(rusRegExp, 'Only the Cyrillic alphabet')
    .required('Обязательное поле')
    .min(5, 'Мінімум 5 символів'),
  name: Yup.string()
    .matches(baseNameRegExp, 'Only English letters')
    .required('Обязательное поле')
    .min(5, 'Мінімум 5 символів'),
  description: Yup.string(),
  description_ua: Yup.string(),
  january: Yup.bool(),
  february: Yup.bool(),
  march: Yup.bool(),
  april: Yup.bool(),
  may: Yup.bool(),
  june: Yup.bool(),
  july: Yup.bool(),
  august: Yup.bool(),
  september: Yup.bool(),
  october: Yup.bool(),
  november: Yup.bool(),
  december: Yup.bool(),
});

export const initialValues = {
  name: '',
  base_name: '',
  base_description: '',
  description: '',
  image: '',
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: false,
};

export const getInitialValues = (initial?: IProduct) => ({
  id: initial?.id || '',
  name: initial?.name || '',
  name_ua: initial?.name_ua || '',
  img_url: initial?.img_url || '',
  description: initial?.description || '',
  description_ua: initial?.description_ua || '',
});

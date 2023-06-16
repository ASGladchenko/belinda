import * as Yup from 'yup';

import { IRootData } from '@/types';

export const getInitialValues = (initial?: IRootData) => ({
  name: initial?.name || '',
});

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле').min(4, 'Минимум 4 символов'),
});

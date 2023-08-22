import * as Yup from 'yup';

import { IMessage } from '@/types';

export const initialValues = {
  role: '',
  password: '',
  remember: false,
};

export const validationSchema = ({ required, min4, max16 }: IMessage) =>
  Yup.object().shape({
    role: Yup.string().required(required),
    password: Yup.string()
      .trim()
      .required(required)
      .min(4, min4)
      .max(16, max16),
    remember: Yup.boolean(),
  });

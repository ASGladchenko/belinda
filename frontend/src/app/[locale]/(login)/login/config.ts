import * as Yup from 'yup';

export const initialValues = {
  role: '',
  password: '',
  remember: false,
};

export const validationSchema = Yup.object().shape({
  role: Yup.string().required('Обязательное поле'),
  password: Yup.string()
    .trim()
    .required('Обязательное поле')
    .min(4, 'Минимум 4 символов')
    .max(16, 'Максимум 16 символов'),
  remember: Yup.boolean(),
});

import * as Yup from 'yup';
export const initialValues = {
  newCategory: '',
};

export const validationSchema = Yup.object().shape({
  newCategory: Yup.string()
    .min(6, 'Минимум 6 символов')
    .required('Обязательное поле'),
});

import { Formik, Form as FormikForm } from 'formik';

import { IFormText, IRootData } from '@/types';
import { Button, InputField } from '@/components';

import { getStyles } from './styles';
import { validationSchema } from './config';

interface ICategoryForm {
  title: string;
  isEdit?: boolean;
  onClose: () => void;
  isLoading?: boolean;
  formText: IFormText;
  initialValues: IRootData;
  onSubmit: (values: IRootData) => void;
}

const Form = ({
  title,
  onClose,
  onSubmit,
  formText,
  isLoading,
  initialValues,
}: ICategoryForm) => {
  const { text, container } = getStyles();

  return (
    <Formik
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues}
      validationSchema={validationSchema(formText.message)}
    >
      <FormikForm className={container}>
        <h2 className={`text-3xl capitalize ${text}`}>{title}</h2>

        <InputField
          name="name"
          className="text-white"
          label={formText.name_eng}
        />

        <InputField
          name="name_ua"
          className="text-white"
          label={formText.name_uk}
        />

        <div className="flex justify-end gap-5">
          <Button
            type="button"
            onClick={onClose}
            variant="secondary"
            text={formText.btnCancel}
            className=" max-w-[80px] md:max-w-[150px] w-full rounded-lg"
          />

          <Button
            type="submit"
            variant="primary"
            disabled={isLoading}
            isFetching={isLoading}
            text={formText.btnConfirm}
            className=" max-w-[80px] md:max-w-[150px] w-full rounded-lg"
          />
        </div>
      </FormikForm>
    </Formik>
  );
};
export { Form };

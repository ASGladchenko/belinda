import { Form as FormikForm, Formik } from 'formik';

import { IRootData } from '@/types';
import { Button, InputField } from '@/components';

import { getStyles } from './styles';
import { validationSchema } from './config';

interface ICategoryForm {
  title: string;
  isEdit?: boolean;
  onClose: () => void;
  initialValues: IRootData;
  onSubmit: (values: IRootData) => void;
}

const Form = ({ initialValues, onClose, onSubmit, title }: ICategoryForm) => {
  const { text, container } = getStyles();
  return (
    <Formik
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <FormikForm className={container}>
        <h2 className={`text-3xl capitalize ${text}`}>{title}</h2>

        <InputField name="name" label="Enter name" className="text-white" />

        <div className="flex justify-end gap-5">
          <Button
            type="button"
            text="Cancel"
            variant="secondary"
            onClick={onClose}
            className=" max-w-[80px] md:max-w-[150px] w-full rounded-lg"
          />

          <Button
            type="submit"
            text="Create"
            variant="primary"
            className=" max-w-[80px] md:max-w-[150px] w-full rounded-lg"
          />
        </div>
      </FormikForm>
    </Formik>
  );
};
export { Form };

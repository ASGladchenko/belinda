import { Form as FormikForm, Formik } from 'formik';

import { IRootData } from '@/types';
import { Button, InputField } from '@/components';

import { validationSchema } from './config';

interface ICategoryForm {
  isEdit?: boolean;
  onClose: () => void;
  initialValues: IRootData;
  onSubmit: (values: IRootData) => void;
}

const Form = ({ initialValues, onClose, onSubmit }: ICategoryForm) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <FormikForm className="flex flex-col w-[400px] gap-5">
        <h3 className="text-center select-none">Create Category</h3>

        <InputField name="name" label="Enter name" className="text-white" />

        <div className="flex justify-between">
          <Button
            text="Cancel"
            variant="primary"
            onClick={onClose}
            className="max-w-[150px] w-full"
          />

          <Button
            type="submit"
            text="Create"
            variant="primary"
            className="max-w-[150px] w-full"
          />
        </div>
      </FormikForm>
    </Formik>
  );
};
export { Form };

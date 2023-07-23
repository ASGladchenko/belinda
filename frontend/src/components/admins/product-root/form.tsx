import { Form as FormikForm, Formik } from 'formik';

import { IRootData } from '@/types';
import { Button, InputField } from '@/components';

import { getStyles } from './styles';
import { validationSchema } from './config';

interface ICategoryForm {
  title: string;
  isEdit?: boolean;
  onClose: () => void;
  isLoading?: boolean;
  initialValues: IRootData;
  onSubmit: (values: IRootData) => void;
}

const Form = ({
  title,
  onClose,
  onSubmit,
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
      validationSchema={validationSchema}
    >
      <FormikForm className={container}>
        <h2 className={`text-3xl capitalize ${text}`}>{title}</h2>

        <InputField
          name="name"
          className="text-white"
          label="Enter name. *Only english letters"
        />

        <InputField
          name="name_ua"
          className="text-white"
          label="Enter name in UA. *Only the Cyrillic alphabet "
        />

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
            disabled={isLoading}
            isFetching={isLoading}
            className=" max-w-[80px] md:max-w-[150px] w-full rounded-lg"
          />
        </div>
      </FormikForm>
    </Formik>
  );
};
export { Form };

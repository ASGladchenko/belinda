import { AddedImg, InputField } from '@/components';
import { Form, Formik } from 'formik';

const initialValues = {
  name: '',
};

export const CreateProduct = () => {
  return (
    <div className="w-full">
      <Formik onSubmit={() => alert(1)} initialValues={initialValues}>
        <Form className="flex">
          <InputField name="name" type="text" label="Enter name of products" />

          <AddedImg />
        </Form>
      </Formik>
    </div>
  );
};

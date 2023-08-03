'use client';
import { Form, Formik, FormikValues } from 'formik';

import { AddedImg, Button, CategoryWrapper, InputField } from '@/components';

import { seasonality } from './mock';
import { initialValues, validationSchema } from './config';

export const CreateProduct = () => {
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <CategoryWrapper>
      <Formik
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col items-center justify-center w-full gap-5 p-5 sm:gap-10">
          <div className="flex flex-col items-center justify-between w-full gap-5 sm:flex-row max-w-[600px]">
            <div className="flex flex-col gap-5 sm:gap-3 w-full sm:w-[300px] ">
              <InputField
                type="text"
                name="base_name"
                label="Enter Base name of products"
              />

              <InputField
                type="text"
                name="name"
                label="Enter name of products"
              />
            </div>

            <AddedImg imgUrl="" name="image" />
          </div>

          <div className="flex flex-wrap justify-between w-full gap-3">
            <h3 className="w-full text-center"> Seasonality</h3>
            {seasonality.map((month, idx) => {
              return (
                <div
                  key={`seasonality-${idx}`}
                  className="w-full max-w-[64px] flex"
                >
                  <InputField
                    name={month}
                    type="checkbox"
                    label={month[0].toUpperCase() + month.slice(1, 3)}
                  />
                </div>
              );
            })}
          </div>

          <InputField
            type="textarea"
            name="base_description"
            label="Enter Base Description of products"
          />

          <InputField
            type="textarea"
            name="description"
            label="Enter Description of products"
          />

          <Button
            type="submit"
            text="Confirm"
            variant="primary"
            className="w-[200px] self-end rounded-lg"
          />
        </Form>
      </Formik>
    </CategoryWrapper>
  );
};

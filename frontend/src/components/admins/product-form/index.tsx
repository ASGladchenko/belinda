'use client';
import { Form, Formik } from 'formik';

import { AddedImg, Button, CategoryWrapper, InputField } from '@/components';

import { IProductForm } from './types';
import { validationSchema } from './config';

import { seasonality } from '@/app/(admin)/admin/category/[categoryId]/mock';

export const ProductForm = ({ onSubmit, initialValues }: IProductForm) => {
  return (
    <CategoryWrapper>
      <Formik
        onSubmit={onSubmit}
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
                name="name_ua"
                label="Enter name of products"
              />
            </div>

            <AddedImg imgUrl={initialValues.img_url} name="img_url" />
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
            name="description"
            label="Enter Base Description of products"
          />

          <InputField
            type="textarea"
            id="description_ua"
            name="description_ua"
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

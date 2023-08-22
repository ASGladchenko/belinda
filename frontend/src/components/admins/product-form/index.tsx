import { Form, Formik } from 'formik';
import { usePathname } from 'next/navigation';

import { Button, AddedImg, InputField, CategoryWrapper } from '@/components';

import { IProductForm } from './types';
import { validationSchema } from './config';
import { MonthsPicker } from './month-picker';

export const ProductForm = ({
  months,
  onSubmit,
  pickerTitle,
  initialValues,
  productFormText,
}: IProductForm) => {
  const path = usePathname();
  const isCreate = path.includes('create');

  return (
    <CategoryWrapper>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema(productFormText.message)}
      >
        {({ values }) => (
          <Form className="flex flex-col items-center justify-center w-full gap-5 p-5 sm:gap-10">
            <div className="flex flex-col items-center justify-between w-full gap-5 sm:flex-row max-w-[600px]">
              <div className="flex flex-col gap-5 sm:gap-3 w-full sm:w-[300px] ">
                <InputField
                  type="text"
                  name="name"
                  label={productFormText.name_eng}
                />

                <InputField
                  type="text"
                  name="name_ua"
                  label={productFormText.name_uk}
                />
              </div>

              <AddedImg imgUrl={initialValues.img_url} name="img_url" />
            </div>

            <MonthsPicker
              name="months"
              months={months}
              pickerTitle={pickerTitle}
              activeMonths={values.months}
            />

            <InputField
              type="textarea"
              name="description"
              label={productFormText.description_eng}
            />

            <InputField
              type="textarea"
              id="description_ua"
              name="description_ua"
              label={productFormText.description_uk}
            />

            <Button
              variant="primary"
              className="w-[200px] self-end rounded-lg capitalize"
              text={isCreate ? productFormText.create : productFormText.confirm}
            />
          </Form>
        )}
      </Formik>
    </CategoryWrapper>
  );
};

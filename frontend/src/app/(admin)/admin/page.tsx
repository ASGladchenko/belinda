'use client';
import { Form, Formik, FormikValues } from 'formik';

import { useDelayAnimation } from '@/hooks';
import { initialValues, validationSchema } from '@/app/(login)/login/config';
import {
  Overlay,
  PageHead,
  InputField,
  ProductLink,
  MainWrapper,
  CategoryWrapper,
} from '@/components';

import { categories } from '@/components/admins/mock/mockdata';

function Products() {
  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const onSubmit = (e: FormikValues) => {
    console.log(e);
  };

  return (
    <MainWrapper>
      <PageHead head="Categories" onClick={() => setOpen(true)} />

      <CategoryWrapper>
        {categories.map((category) => (
          <ProductLink {...category} />
        ))}
      </CategoryWrapper>

      <Overlay
        isOpen={isOpen}
        duration={duration}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
        // TODO: PRoblem with create !!!!!!!!!!!
        onCreate={() => alert('Create')}
      >
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col w-[400px] gap-5">
            <h3 className="text-center select-none">Create Category</h3>
            <InputField
              name="newCategory"
              label="Enter name"
              className="text-white"
            />
          </Form>
        </Formik>
      </Overlay>
    </MainWrapper>
  );
}

export default Products;

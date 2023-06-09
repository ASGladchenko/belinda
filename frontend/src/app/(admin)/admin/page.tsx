'use client';
import { Form, Formik, FormikValues } from 'formik';

import { useDelayAnimation } from '@/hooks';
import { ProductLink, InputField, Overlay, PageHead } from '@/components';
import { initialValues, validationSchema } from '@/app/(login)/login/config';

import { categories } from '@/components/admins/product-link/mockdata';

function Products() {
  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const onSubmit = (e: FormikValues) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4">
      <PageHead head="Categories" onClick={() => setOpen(true)} />

      <div className="flex flex-col w-full gap-5 p-2 rounded-lg md:p-5 bg-admin-lighten-second dark:bg-admin-darken-second ">
        {categories.map((category) => (
          <ProductLink {...category} />
        ))}
      </div>

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
    </div>
  );
}

export default Products;

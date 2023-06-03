'use client';
import CommonLink from 'next/link';
import { Form, Formik, FormikValues } from 'formik';

import { Login } from '@/assets/icons';
import { Overlay } from '@/components/overlay';
import { Button, Checkbox } from '@/components';
import { useDelayAnimation } from '@/hooks/useDelay';
import { InputField } from '@/components/input-field';
import PageHead from '@/components/admins/page-header';
import { initialValues, validationSchema } from '@/app/(login)/login/config';

export default function Products() {
  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const onSubmit = (e: FormikValues) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <PageHead head="Products" onClick={() => setOpen(true)} />

      <Overlay
        isOpen={isOpen}
        duration={duration}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
        // TODO PRoblem !!!!!!!!!!!
        onCreate={() => alert('Create')}
      >
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col w-[400px] gap-5">
            <h3 className="text-center select-none">Create Category</h3>
            <InputField name="newCategory" label="Enter name" />

            <div className="flex justify-between w-full "></div>
          </Form>
        </Formik>
      </Overlay>
    </div>
  );
}

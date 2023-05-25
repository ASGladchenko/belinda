'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CommonLink from 'next/link';

import { initialValues, validationSchema } from './config';

export default function LogIn() {
  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('onSubmit');
  };

  return (
    <div className='flex justify-center items-center  min-h-screen  bg-sky-950 text-neutral-300'>
      <div className='flex  flex-col justify-center items-center gap-7 p-6  max-w-[460px] w-full rounded-lg shadow-xl bg-blue-950'>
        <h3 className='text-5xl '>Belinda</h3>
        <div className='flex flex-col gap-7 w-full'>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className='flex flex-col gap-5'>
              <div>
                <Field type='text' name='username' className='w-full' />
                <ErrorMessage name='username' component='div' className='text-red-600' />
              </div>

              <div>
                <Field type='password' name='password' className='w-full' />
                <ErrorMessage name='password' component='div' className='text-red-600' />
              </div>

              <div className='w-full flex justify-between '>
                <CommonLink href='#'>
                  <span>Забыли пароль?</span>
                </CommonLink>

                <label>
                  <input type='checkbox' /> Запомнить меня
                </label>
              </div>

              <button
                type='submit'
                className='ml-auto py-2 px-4 rounded-lg bg-violet-900 border-1 border-gray-600 '
              >
                Войти
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

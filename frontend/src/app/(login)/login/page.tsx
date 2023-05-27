'use client';

import CommonLink from 'next/link';
import { Pacifico } from 'next/font/google';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Euro } from '@/assets/icons';

import { Button, Checkbox } from '@/components';
import { initialValues, validationSchema } from './config';
import { InputField } from '@/components/input-field';

const pacific = Pacifico({ weight: ['400'], subsets: ['cyrillic'] });

export default function LogIn() {
  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('onSubmit');
  };

  return (
    <div className='flex items-center justify-center min-h-screen text-neutral-300'>
      <div className='flex  flex-col justify-center items-center gap-7 p-6  max-w-[460px] w-full rounded-lg shadow-xl bg-admin-second'>
        <h3 className={`text-5xl select-none ${pacific.className}`}>Belinda</h3>
        <div className='flex flex-col w-full gap-7'>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className='flex flex-col gap-5'>
              <div>
                <InputField name='login' />
              </div>

              <div>
                <Field type='password' name='password' className='w-full' />
                <ErrorMessage name='password' component='div' className='text-admin-warning' />
              </div>

              <div className='flex justify-between w-full '>
                <CommonLink href='/' className='transition duration-300 hover:text-admin-primary'>
                  <span>Забыли пароль?</span>
                </CommonLink>

                <Checkbox name='rememberMe' label='Запамонтить меня ' className='checkbox-admin' />
              </div>

              <Button
                text='Войти'
                variant='outline-primary'
                className='w-[250px] ml-auto'
                icon={<Euro width={24} height={24} />}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

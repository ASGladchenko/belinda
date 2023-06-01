'use client';
import CommonLink from 'next/link';
import { Pacifico } from 'next/font/google';
import { Formik, Form, FormikValues } from 'formik';

import { Login } from '@/assets/icons';
import { Button, Checkbox } from '@/components';
import { InputField } from '@/components/input-field';
import { initialValues, validationSchema } from './config';

export const pacifico = Pacifico({
  weight: ['400'],
  display: 'swap',
  variable: '--font-pacifico',
  subsets: ['latin', 'cyrillic'],
});

export default function LogIn() {
  const onSubmit = (e: FormikValues) => {
    console.log(e);
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-neutral-300">
      <div className="flex  flex-col justify-center items-center gap-7 p-6  max-w-[460px] w-full rounded-lg shadow-xl bg-admin-lighten-second dark:bg-admin-darken-second">
        <h3
          className={`${pacifico.className} text-5xl select-none text-admin-primary dark:text-admin-btnWhite`}
        >
          Belinda
        </h3>
        <div className="flex flex-col w-full gap-7">
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className="flex flex-col gap-5">
              <InputField name="username" label="Login" />
              <InputField name="password" type="password" label="Password" />

              <div className="flex justify-between w-full ">
                <CommonLink
                  href="/"
                  className="transition duration-300 text-admin-lighten-grey dark:text-white hover:text-admin-primary dark:hover:text-admin-primary"
                >
                  Forgot password?
                </CommonLink>

                <Checkbox
                  name="remeber"
                  label="Remember me"
                  className="checkbox-admin"
                />
              </div>

              <Button
                text="Enter"
                type="submit"
                variant="primary"
                className="w-[150px] ml-auto"
                icon={<Login width={24} height={24} />}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

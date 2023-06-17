'use client';
import Cookies from 'js-cookie';
import CommonLink from 'next/link';
import { useSWRConfig } from 'swr';
import { Formik, Form } from 'formik';
import useSWRMutation from 'swr/mutation';
import { useRouter } from 'next/navigation';

import { auth } from '@/http';
import { IAuth } from '@/types';
import { Login } from '@/assets/icons';
import { USE_AUTH, routes } from '@/constants';
import { Button, InputField, showMessage } from '@/components';

import { initialValues, validationSchema } from './config';

export default function LogIn() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { trigger, isMutating } = useSWRMutation('/auth/login', auth.login);

  const onSubmit = async ({ role, password, remember }: IAuth) => {
    try {
      const response = await trigger({ role, password });
      mutate(USE_AUTH, response.refresh_token);

      if (remember) {
        Cookies.set('access', JSON.stringify(response.access_token));
        Cookies.set('refresh', JSON.stringify(response.refresh_token), {
          expires: 7,
        });
      } else {
        Cookies.set('access', JSON.stringify(response.access_token));
        Cookies.set('refresh', JSON.stringify(response.refresh_token));
      }

      router.push(routes.admin);
    } catch (error: any) {
      showMessage.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-neutral-300">
      <div className="flex  flex-col justify-center items-center gap-7 p-6  max-w-[460px] w-full rounded-lg shadow-xl bg-admin-lighten-second dark:bg-admin-darken-second">
        <h3 className="text-5xl select-none text-admin-primary dark:text-admin-btnWhite font-pacifico">
          Belinda
        </h3>

        <div className="flex flex-col w-full gap-7">
          <Formik
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className="flex flex-col gap-5">
              <InputField name="role" label="Login" />
              <InputField name="password" type="password" label="Password" />

              <div className="flex justify-between w-full ">
                <CommonLink
                  href="/"
                  className="transition duration-300 text-admin-lighten-grey dark:text-white hover:text-admin-primary dark:hover:text-admin-primary"
                >
                  Forgot password?
                </CommonLink>

                <InputField
                  type="checkbox"
                  name="remember"
                  label="Remember me"
                  className="checkbox-admin"
                />
              </div>

              <Button
                text="Enter"
                type="submit"
                variant="primary"
                disabled={isMutating}
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

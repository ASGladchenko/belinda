import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import LogInPage from './login-page';

export default function LogIn() {
  const login = useTranslations('login');
  const validation = useTranslations('validation');

  const content = useMemo(
    () => ({
      login: login('login'),
      btnText: login('enter'),
      password: login('password'),
      remember: login('remember'),
      forgot: login('forgot'),
      message: {
        required: validation('required'),
        min4: validation('min4'),
        max: validation('max16'),
      },
    }),
    [login, validation],
  );

  return <LogInPage {...content} />;
}

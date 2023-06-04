import { IAuth } from '@/types';

import { belinda } from '.';

export const login = (data: IAuth) =>
  belinda.post('/auth/login', data).then(({ data }) => data);

export const logout = () =>
  belinda.post('/auth/logout', {}).then(({ data }) => data);

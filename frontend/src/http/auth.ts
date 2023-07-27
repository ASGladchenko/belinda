import { IAuth } from '@/types';

import { belinda } from './interceptor';

export const login = (url: string, { arg }: { arg: IAuth }) =>
  belinda.post(url, arg).then(({ data }) => data);

export const logout = () =>
  belinda.post('/auth/logout', {}).then(({ data }) => data);

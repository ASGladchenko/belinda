'use client';
import { mutate } from 'swr';
import Cookies from 'js-cookie';
import { USE_AUTH } from '@/constants';

export const getCookies = (key: string) => {
  const value = Cookies.get(key);
  return value ? value : '';
};

export const removeTokensCookies = () => {
  Cookies.remove('access');
  Cookies.remove('refresh');
  // TODO : Check this variant
  // window.location.pathname = '/login';
  mutate(USE_AUTH, undefined);
};

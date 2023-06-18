import Cookies from 'js-cookie';

export const getCookies = (key: string) => {
  const value = Cookies.get(key);
  return value ? value : '';
};

export const removeTokensCookies = () => {
  Cookies.remove('access');
  Cookies.remove('refresh');
};

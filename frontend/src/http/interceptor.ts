import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookies, removeTokensCookies } from '@/utils';

const initBelinda = ({ onAuthError }: { onAuthError: () => void }) => {
  axios.defaults.baseURL =
    /* 'http://31.202.177.131:5200/api' */ 'http://localhost:4200/api';

  axios.interceptors.request.use((config) => {
    const access = getCookies('access');
    const lang = getCookies('lang');

    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
      config.headers['Accept-Language'] = lang;
    }

    return config;
  });

  axios.interceptors.response.use(
    (config) => config,

    async (error) => {
      const originalRequest = error.config;
      const refresh = getCookies('refresh');

      if (error.response.status === 401 && !refresh) {
        onAuthError();
        return Promise.reject(error);
      }

      if (error.response.status === 401 && originalRequest.headers.isRetry) {
        onAuthError();
      }

      if (error.response.status === 401 && !originalRequest.headers.isRetry) {
        try {
          const response = await axios.post(
            `/auth/refresh`,
            {},
            {
              headers: {
                refresh: `${refresh}`,
                isRetry: true,
              },
            },
          );

          Cookies.set('access', response.data.access_token);

          return axios.request(originalRequest);
        } catch (error) {
          onAuthError();

          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    },
  );

  return axios;
};

const belinda = initBelinda({
  onAuthError: () => removeTokensCookies(),
});

export { belinda };

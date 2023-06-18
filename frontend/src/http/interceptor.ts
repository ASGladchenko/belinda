import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookies, removeTokensCookies } from '@/utils';
import { ref } from 'yup';

const initBelinda = ({ onAuthError }: { onAuthError: () => void }) => {
  axios.defaults.baseURL = 'http://31.202.177.131:5200/api';

  axios.interceptors.request.use((config) => {
    const access = getCookies('access');

    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
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

      if (error.response.status === 401 && originalRequest.isRetry) {
        onAuthError();
      }

      if (error.response.status === 401 && !originalRequest.isRetry) {
        originalRequest.isRetry = true;

        try {
          const response = await axios.post(
            `/auth/refresh`,
            {},
            {
              headers: {
                refresh: `${refresh}`,
              },
            },
          );
          console.log(response);

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

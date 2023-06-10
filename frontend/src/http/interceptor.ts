import axios from 'axios';
import Cookies from 'js-cookie';

import { deleteStorage, getCookies, getStorage, setStorage } from '@/utils';

const initBelinda = ({ onAuthError }: { onAuthError: () => void }) => {
  axios.defaults.baseURL = 'http://localhost:4200/api';

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

      if (error.response.status === 401 && !error.config.isRetry) {
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
          setStorage({ key: 'token', body: response.data });

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
  onAuthError: () => deleteStorage('token'),
});

export { belinda };

import axios from 'axios';

import { store } from '@/store';
import { setIsAuth } from '@/store/auth/slice';
import { getStorage, setStorage } from '@/utils';

interface IToken {
  access_token?: string;
  refresh_token?: string;
}

const initBelinda = ({ onAuthError }: { onAuthError: () => void }) => {
  axios.defaults.baseURL = 'http://localhost:4200/api';

  axios.interceptors.request.use((config) => {
    const token = getStorage('token');

    if (token) config.headers.Authorization = `Bearer ${token?.access_token}`;

    return config;
  });

  axios.interceptors.response.use(
    (config) => config,

    async (error) => {
      const originalRequest = error.config;
      const token = getStorage();

      if (error.response.status === 401 && !token?.refresh_token) {
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
                refresh: `${token?.refresh_token}`,
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
  onAuthError: () => store.dispatch(setIsAuth(false)),
});

export { belinda };

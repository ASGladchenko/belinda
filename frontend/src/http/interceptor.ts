import axios, { AxiosInstance } from 'axios';

interface IToken {
  access_token?: string;
  refresh_token?: string;
}

const belinda: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4200/api',
});
belinda.defaults.headers['Content-Type'] = 'application/json';

belinda.interceptors.request.use((config) => {
  const { access_token } = localStorage.getItem('token') as IToken;

  if (access_token) config.headers.Authorization = `Bearer ${access_token}`;

  return config;
});

belinda.interceptors.response.use(
  (config) => {
    console.log('response use');
    return config;
  },

  async (error) => {
    const originalRequest = error.config;
    const { refresh_token } = localStorage.getItem('token') as IToken;
    console.log('response error');
    if (
      error.response.status === 401 &&
      refresh_token &&
      !error.config.isRetry
    ) {
      originalRequest.isRetry = true;

      try {
        const response = await axios.post(
          `/auth/refresh`,
          {},
          {
            headers: {
              refresh: `${refresh_token}`,
            },
          },
        );

        localStorage.setItem('token', response.data);

        return belinda.request(originalRequest);
      } catch (error) {
        localStorage.removeItem('token');
        // TODO: clear storage isAuth
      }
    }
  },
);

export { belinda };

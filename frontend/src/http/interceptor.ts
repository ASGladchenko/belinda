import axios, { AxiosInstance } from 'axios';

interface IToken {
  access_token?: string;
  refresh_token?: string;
}

const belinda: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4200/api',
  // headers: { 'Content-Type': 'application/json' },
});

belinda.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') as IToken;

  if (token?.access_token)
    config.headers.Authorization = `Bearer ${token.access_token}`;

  return config;
});

belinda.interceptors.response.use(
  (config) => {
    console.log('response use');
    return config;
  },

  async (error) => {
    const originalRequest = error.config;
    console.log('error', error);
    const token = localStorage.getItem('token') as IToken;
    if (
      error.response.status === 401 &&
      token?.refresh_token &&
      !error.config.isRetry
    ) {
      console.log('response error2');
      originalRequest.isRetry = true;

      try {
        const response = await axios.post(
          `/auth/refresh`,
          {},
          {
            headers: {
              refresh: `${token.refresh_token}`,
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

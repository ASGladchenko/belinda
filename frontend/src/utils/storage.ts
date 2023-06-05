'use client';
interface ISetStorage {
  key: string;
  body: {
    access_token: string;
    refresh_token: string;
  };
}

export const setStorage = ({ key, body }: ISetStorage) => {
  const local = localStorage.getItem(key);
  const session = sessionStorage.getItem(key);

  if (local) localStorage.setItem(key, JSON.stringify(body));

  if (session) sessionStorage.setItem(key, JSON.stringify(body));
};

export const getStorage = (key: string) => {
  const local = localStorage.getItem(key);
  const session = sessionStorage.getItem(key);

  return JSON.parse(local || session || '');
};

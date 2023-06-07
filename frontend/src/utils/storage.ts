'use client';
interface IToken {
  access_token: string;
  refresh_token: string;
}
interface ISetStorage {
  key: string;
  body: IToken;
}

export const setStorage = ({ key, body }: ISetStorage) => {
  const local = localStorage.getItem(key);
  const session = sessionStorage.getItem(key);

  if (local) localStorage.setItem(key, JSON.stringify(body));

  if (session) sessionStorage.setItem(key, JSON.stringify(body));
};

export const getStorage = (
  key: string | undefined = 'token',
): IToken | null => {
  const local = localStorage.getItem(key);
  const session = sessionStorage.getItem(key);

  let parsed = null;

  try {
    if (local) parsed = JSON.parse(local);
    if (session) parsed = JSON.parse(session);
  } catch (error) {
    console.log(error);
  }

  return parsed as IToken | null;
};

export const deleteStorage = (key: string) => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};

'use client';
import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

const authInitialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setIsAuth: (state, { payload }) => {
      if (payload === false) {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        Cookies.remove('isAuth');
      }
      state.isAuth = payload;
    },
  },
});

const {
  reducer: authReducer,
  actions: { setIsAuth },
} = authSlice;

export const getIsAuth = (state: RootState) => state.auth;

export { authReducer, setIsAuth };

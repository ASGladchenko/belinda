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
import { createSlice } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem('token');
const initialUser = localStorage.getItem('user');

const initialState = {
  token: initialToken || null,
  user: initialUser ? JSON.parse(initialUser) : null,
  isAuthenticated: !!initialToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    loadAuth: (state) => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      state.token = token;
      state.user = user ? JSON.parse(user) : null;
      state.isAuthenticated = !!token;
    },
  },
});

export const { loginSuccess, logout, loadAuth } = authSlice.actions;
export default authSlice.reducer; 
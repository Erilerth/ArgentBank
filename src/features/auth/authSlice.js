import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'login',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;

      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;

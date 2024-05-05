import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//POST http://localhost:3001/api/v1/user/login net::ERR_BLOCKED_BY_CLIENT
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

export const login = createAsyncThunk('auth/login', async (token, thunkAPI) => {
  console.log(token);
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;

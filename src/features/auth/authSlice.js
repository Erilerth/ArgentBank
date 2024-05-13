import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
  id: user ? user.body.id : null,
  firstName: user ? user.body.firstName : null,
  lastName: user ? user.body.lastName : null,
  username: user ? user.body.userName : null,
  token: token ? token.body.token : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const tokenRes = await authService.login(user);
    const userRes = await authService.getUser();
    return userRes, tokenRes;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout();
});

export const changeUsername = createAsyncThunk(
  'auth/changeUsername',
  async (userName) => {
    const response = await authService.changeUsername(userName);

    return response;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(changeUsername.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeUsername.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(changeUsername.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectCurrentFirstName = (state) => state.auth.firstName;
export const selectCurrentLastName = (state) => state.auth.lastName;
export const selectCurrentUsername = (state) => state.auth.username;
export const selectCurrentToken = (state) => state.auth.token;
export const { reset } = authSlice.actions;
export default authSlice.reducer;

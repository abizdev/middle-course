import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../login-schema';
import { loginByUsername } from 'features/auth-by-username/model/login-service/login-by-username/login-by-username';

const initialState: LoginSchema = {
  username: '',
  password: '',
  error: '',
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state, _) => {
        state.error = undefined
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, _) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../user-schema';
import { USER_LOCALSTORAGE_KEY } from 'shared/localstorage-keys';

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (userData) {
        state.authData = JSON.parse(userData);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

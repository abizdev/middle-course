import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/user';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/store-provider';

interface LoginByUsernameProps {
  username: string;
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', authData)

      if (response.data) {
        throw new Error()
      }

      localStorage[USER_LOCALSTORAGE_KEY] = JSON.stringify(response.data)
      dispatch(userActions.setAuthData(response.data))
      extra.navigate('/about')

      return response.data
    } catch (error) {
      return rejectWithValue(i18n.t('loginErrorText'))
    }
  },
)

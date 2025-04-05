import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/store-provider';
import { Profile } from '../types';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<Profile>('/profile');

      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('profileErrorText'));
    }
  }
);

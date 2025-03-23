import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/profile';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: false,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

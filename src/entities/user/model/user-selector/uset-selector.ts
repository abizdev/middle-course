import { StateSchema } from 'app/providers/store-provider';
import { createSelector } from '@reduxjs/toolkit';

export const userReducer = (state: StateSchema) => state.user;

export const authData = createSelector(
  userReducer,
  (state) => state.authData
);

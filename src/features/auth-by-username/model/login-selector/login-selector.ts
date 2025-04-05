import { StateSchema } from 'app/providers/store-provider';
import { createSelector } from '@reduxjs/toolkit';

export const loginState = (state: StateSchema) => state?.login;

export const selectUsername = createSelector(
  loginState,
  (state) => state?.username ?? ''
);

export const selectPassword = createSelector(
  loginState,
  (state) => state?.password ?? ''
);

export const selectIsLoading = createSelector(
  loginState,
  (state) => state?.isLoading ?? false
);

export const selectError = createSelector(
  loginState,
  (state) => state?.error
);

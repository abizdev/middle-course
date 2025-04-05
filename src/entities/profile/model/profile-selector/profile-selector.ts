import { StateSchema } from 'app/providers/store-provider';
import { createSelector } from '@reduxjs/toolkit';

export const profileState =
  (state: StateSchema) => state.profile;

export const selectProfileData = createSelector(
  profileState,
  (state) => state?.data
);


export const selectProfileIsLoading = createSelector(
  profileState,
  (state) => state?.isLoading ?? false
);

export const selectProfileError = createSelector(
  profileState,
  (state) => state?.error
);

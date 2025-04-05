import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';

export const counterReducer = (state: StateSchema) => state.counter;

export const getCounter = createSelector(
  counterReducer,
  (state) => state.value
);

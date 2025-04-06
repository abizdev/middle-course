import { createSelector } from '@reduxjs/toolkit';
import { StaticReducers } from 'app/providers/store-provider';

export const counterReducer = (state: StaticReducers) => state.counter;

export const getCounter = createSelector(
  counterReducer,
  (state) => state.value
);

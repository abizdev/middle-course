import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/auth-by-username/model/login-slice/login-slice';

const defaultAsyncReducers: ReducersMapObject<StateSchema> = {
  login: loginReducer
}

export const StoreDecorator = (
  state: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
): Decorator => (Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
)

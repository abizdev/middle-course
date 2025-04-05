import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { loginReducer } from 'features/auth-by-username/model/login-slice/login-slice';
import { ReducersList } from 'shared/lib';
import { profileReducer } from 'entities/profile';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer
}

export const StoreDecorator = (
  state: StateSchema,
  asyncReducers?: ReducersList
): Decorator => (Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
)

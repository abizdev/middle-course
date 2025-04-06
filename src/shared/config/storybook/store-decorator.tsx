import { Decorator } from '@storybook/react';
import {
  // DynamicReducers,
  // StaticReducers,
  StoreProvider
} from 'app/providers/store-provider';

export const StoreDecorator = (
  // initialState?: StaticReducers,
  // asyncReducers?: DynamicReducers
  // eslint-disable-next-line react/display-name
): Decorator => (Story) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);

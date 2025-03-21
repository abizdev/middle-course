import { Decorator } from '@storybook/react';
import { StoreProvider } from 'app/providers/store-provider';

export const StoreDecorator: Decorator = (Story) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
)

import { Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';
import PageLoader from './page-loader';

const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
  args: {
    className: ''
  }
}  satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};

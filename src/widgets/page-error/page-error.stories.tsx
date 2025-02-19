import { Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';
import PageError from './page-error';

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodocs'],
  args: {
    className: ''
  }
}  satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};

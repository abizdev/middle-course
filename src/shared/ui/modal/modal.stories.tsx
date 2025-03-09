import type { Meta, StoryObj } from '@storybook/react';

import Modal from './modal';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers/theme-provider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consectetur culpa esse eveniet, in ipsa magnam pariatur sunt vitae! Aspernatur cum, cupiditate eius eligendi eveniet id ipsam, iste nam natus quae quos voluptate. Atque ea neque recusandae repudiandae voluptatibus. Atque error officia vero. Atque, aut debitis dolorum eos illum in incidunt inventore minus, modi nemo, nostrum quas qui quia quis ratione reiciendis rerum sequi tempora veniam voluptatibus. Aspernatur dicta distinctio ea necessitatibus, placeat recusandae repellendus tempora tenetur totam ut. Corporis culpa cumque iure odio possimus tempora voluptatum! Asperiores aspernatur atque consequuntur expedita fugiat nobis odio qui quidem soluta veritatis!',
    onClose: () => {}
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    open: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    open: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}


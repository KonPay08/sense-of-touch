import type { Meta, StoryObj } from '@storybook/react';
import { KeyboardTemplate } from 'src/presentation/Keyboard.template';
import { row1, row2, row3, row4, row5, row6 } from 'src/rows';

const meta: Meta<typeof KeyboardTemplate> = {
  component: KeyboardTemplate,
};

export default meta;
type Story = StoryObj<typeof KeyboardTemplate>;

export const Primary: Story = {
  args: {
    row1: row1,
    row2: row2,
    row3: row3,
    row4: row4,
    row5: row5,
    row6: row6,
  }
};
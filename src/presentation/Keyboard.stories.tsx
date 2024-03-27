import type { Meta, StoryObj } from '@storybook/react';
import { Keyboard } from 'src/presentation/Keyboard';
import { row1, row2, row3, row4, row5, row6 } from 'src/presentation/rows';

const meta: Meta<typeof Keyboard> = {
  component: Keyboard,
};

export default meta;
type Story = StoryObj<typeof Keyboard>;

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
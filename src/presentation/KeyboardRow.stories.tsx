import type { Meta, StoryObj } from '@storybook/react';
import { KeyboardRow } from 'src/presentation/KeyboardRow';
import { row2, row3 } from 'src/rows';

const meta: Meta<typeof KeyboardRow> = {
  component: KeyboardRow,
};

export default meta;
type Story = StoryObj<typeof KeyboardRow>;

export const Primary: Story = {
  args: {
    keys: row2,
  }
};

export const Row3: Story = {
  args: {
    keys: row3,
  }
};
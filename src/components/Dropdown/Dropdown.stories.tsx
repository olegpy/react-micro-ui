import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'select' },
      options: ['option1', 'option2', 'option3', 'option4'],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select an option',
    size: 'medium',
  },
};

export const WithValue: Story = {
  args: {
    options: defaultOptions,
    value: 'option2',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Small dropdown',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Large dropdown',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Disabled dropdown',
    size: 'medium',
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4', disabled: true },
    ],
    placeholder: 'Select an option',
    size: 'medium',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Dropdown
        options={defaultOptions}
        placeholder="Small"
        size="small"
      />
      <Dropdown
        options={defaultOptions}
        placeholder="Medium"
        size="medium"
      />
      <Dropdown
        options={defaultOptions}
        placeholder="Large"
        size="large"
      />
    </div>
  ),
};

export const LongOptions: Story = {
  args: {
    options: [
      { value: 'option1', label: 'This is a very long option text that might wrap' },
      { value: 'option2', label: 'Another long option with different content' },
      { value: 'option3', label: 'Short option' },
      { value: 'option4', label: 'Yet another option with even longer text content' },
    ],
    placeholder: 'Select from long options',
    size: 'medium',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Choose your favorite option...',
    size: 'medium',
  },
}; 
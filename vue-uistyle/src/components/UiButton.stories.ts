import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiButton from './UiButton.vue'

const meta = {
  title: 'UI/UiButton',
  component: UiButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: '저장',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    label: {
      control: 'text',
      description: '버튼에 표시할 문구',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: '버튼 종류',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: '버튼 크기',
    },
    disabled: {
      control: 'boolean',
      description: '비활성 여부',
    },
  },
} satisfies Meta<typeof UiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    label: '취소',
    variant: 'secondary',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
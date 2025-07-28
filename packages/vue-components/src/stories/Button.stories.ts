import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "../components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "link"],
    },
    danger: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    isIconButton: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "medium",
    variant: "primary",
    danger: false,
    disabled: false,
    isIconButton: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Button Text</Button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Button Text</Button>',
  }),
};

export const Small: Story = {
  args: {
    size: "small",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Button Text</Button>',
  }),
};

export const Danger: Story = {
  args: {
    danger: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Button Text</Button>',
  }),
};
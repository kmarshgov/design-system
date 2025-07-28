import { Button } from "../components";

const meta = {
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

export const Primary = {
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

export const Secondary = {
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

export const Small = {
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

export const Danger = {
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
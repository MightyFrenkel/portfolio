import { StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Example/Button",
  component: Button,
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password"],
    },
    handleChangeFunction: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextField: Story = {
  args: {
    type: "text",
    label: "Username",
    name: "username",
  },
};

export const WithValue: Story = {
  args: {
    type: "email",
    label: "Email",
    name: "email",
    value: "user@example.com",
  },
};

export const WithError: Story = {
  args: {
    type: "password",
    label: "Password",
    name: "password",
    errorMessage: "Le mot de passe est requis",
  },
};

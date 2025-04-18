import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import ArrowIcon from "@/assets/ArrowIcon"; // adapte le chemin si besoin

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    handleClick: { action: "clicked" },
    iconPosition: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    // classNames: {
    //   control: { type: "array" },
    // },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    type: "button",
    classNames: ["btn_primary"],
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    type: "button",
    classNames: ["btn_primary"],
    disabled: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Icon Left",
    type: "button",
    classNames: ["btn_primary", "with_icon"],
    icon: <ArrowIcon fill="white" width={16} height={16} />,
    iconPosition: "left",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "Icon Right",
    type: "submit",
    classNames: ["btn_primary", "with_icon"],
    icon: <ArrowIcon fill="white" width={16} height={16} />,
    iconPosition: "right",
  },
};

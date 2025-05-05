import type { Meta, StoryObj } from "@storybook/react";
import NavItems from "./index";
//import { FiHome } from "react-icons/fi"; // Utilisation d’une icône populaire pour l’exemple

const meta: Meta<typeof NavItems> = {
  title: "UI/NavItems",
  component: NavItems,
  tags: ["autodocs"],
  argTypes: {
    path: { control: "text" },
    label: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof NavItems>;

export const Default: Story = {
  args: {
    path: "/home",
    label: "Accueil",
  },
};

export const WithIcon: Story = {
  args: {
    path: "/dashboard",
    label: "Dashboard",
    // icon: <FiHome />,
  },
};

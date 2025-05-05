import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";
// import { FiHome, FiUser, FiSettings } from "react-icons/fi";

const meta: Meta<typeof Navbar> = {
  title: "UI/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const BasicNavbar: Story = {
  args: {
    navItems: [
      { path: "/", label: "Home" },
      { path: "/profile", label: "Profile" },
      { path: "/settings", label: "Settings" },
    ],
  },
};

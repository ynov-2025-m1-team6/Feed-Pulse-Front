"use client";
import React from "react";
import SidebarItems from "./SidebarItems";
import styles from "./sidebar.module.scss"

interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

type Props = {
  navItems: NavItem[];
};

const index = ({ navItems }: Props) => {
  return (
    <aside className={`${styles.sidebar}`}>
      <ul>
        {navItems.map((item, key) => {
          return <SidebarItems key={key} navItem={item} />;
        })}
      </ul>
    </aside>
  );
};

export default index;

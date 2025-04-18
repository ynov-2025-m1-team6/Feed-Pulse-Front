import React from "react";
import Link from "next/link";

import styles from "./sidebaritems.module.scss"
type Props = {
  navItem: {
    path: string;
    label: string;
    icon?: React.ReactNode;
  };
};

const Index = ({ navItem }: Props) => {
  return (
    <Link className={`${styles.navItem} ${styles.with_icon}`} href={navItem.path}>
      {navItem.icon && (
        <span className={styles.icon_wrapper}>{navItem.icon}</span>
      )}
      {navItem.label}
      </Link>
  );
};

export default Index;

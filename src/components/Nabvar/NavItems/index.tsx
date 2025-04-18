import Link from "next/link";
import React from "react";
import styles from ".//navitems.module.scss";

type Props = {
  path: string;
  label: string;
  icon?: React.ReactNode;
};

const index = ({ path, label, icon }: Props) => {
  return (
    <Link className={`${styles.navItem}`} href={path}>
      {icon && <span className={styles.icon_wrapper}>{icon}</span>}
      {label}
    </Link>
  );
};

export default index;

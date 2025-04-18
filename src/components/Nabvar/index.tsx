import React from 'react'
import styles from "./navbar.module.scss";
import NavItems from './NavItems';

interface NavItem {
    path: string;
    label: string;
    icon?: React.ReactNode;
  }
  
  type Props = {
    navItems: NavItem[];
  };
  

function index({navItems}: Props) {
  return (
    <nav className={styles.wrapper}>
        <ul>
            {navItems.map(({path, label, icon}) => (
                <NavItems key={path} path={path} label={label} icon={icon} />
            ))}
        </ul>
    </nav>
  )
}

export default index
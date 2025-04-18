import React from 'react'
import styles from "./footer.module.scss";

type Props = object

function index({}: Props) {
  return (
    <footer className={styles.wrapper}>
        <p>&copy; {new Date().getFullYear()} Feed Pulse. All rights reserved.</p>
    </footer>
  )
}

export default index
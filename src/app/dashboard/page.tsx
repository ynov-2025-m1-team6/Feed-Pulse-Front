import React from 'react'
import Sidebar from "@/components/Sidebar";
import styles from "./dashboard.module.scss";


export default function page() {
  return (
    <>
        <Sidebar navItems={[{ path: "/dashboard/metrics", label: "Metrics" },{ path: "/dashboard/chart", label: "Charts" }]} />
        <div className={styles.wrapper}>

        <h1>Dashboard</h1>
        </div>
    </>
  )
}
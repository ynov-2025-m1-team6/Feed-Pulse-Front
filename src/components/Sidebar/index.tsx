"use client";
import React, { useState } from "react";
import SidebarItems from "./SidebarItems";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import AddDataForm from "@/components/Forms/AddDataForm";
import styles from "./sidebar.module.scss";
import { logout } from "@/actions/auth";

interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

type Props = {
  navItems: NavItem[];
};

const Index = ({ navItems }: Props) => {
  const [showAddDataModal, setShowAddDataModal] = useState(false);

  const handleLogout = () => {
    logout();
  };
  return (
    <aside className={`${styles.sidebar}`}>
      <div>
        <ul>
          {navItems.map((item, key) => {
            return <SidebarItems key={key} navItem={item} />;
          })}
        </ul>
        <Button
          label={"Add data"}
          classNames={["btn_primary", "with_icon"]}
          type="submit"
          handleClick={() => {
            setShowAddDataModal(true);
          }}
        />
      </div>
      <div>
        <Button
          label={"Logout"}
          classNames={["btn_primary", "with_icon"]}
          type="button"
          handleClick={() => {
            handleLogout();
          }}
        />
      </div>
      {showAddDataModal && (
        <Modal
          close={() => {
            setShowAddDataModal(false);
          }}
          title="Add data"
        >
          <AddDataForm />
        </Modal>
      )}
    </aside>
  );
};

export default Index;

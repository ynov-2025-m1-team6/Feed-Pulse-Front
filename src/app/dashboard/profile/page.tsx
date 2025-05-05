import React from "react";
import styles from "./page.module.scss";
import { getUser } from "@/actions/auth";
import ProfileForm from "@/components/Forms/ProfileForm";

export default async function Profile() {
  const user = await getUser();
  return (
    <div className={styles.wrapper}>
      <ProfileForm user={user} />
    </div>
  );
}

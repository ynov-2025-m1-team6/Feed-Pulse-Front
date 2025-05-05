"use client";

import React, { useActionState } from "react";
import { addFile } from "@/actions/dashboard";
import { IFormState } from "@/interfaces";
import Button from "@/components/Button";
import styles from "./adddataForm.module.scss";

const initialState: IFormState = {
  message: "",
  errors: {},
  success: false,
};

export default function Index() {
  const [state, formAction] = useActionState(addFile, initialState);

  return (
    <form action={formAction} className={styles.wrapper}>
      <input name="file" type="file" accept=".json,.csv" required />
      <Button
        label={"Ajouter"}
        classNames={["btn_primary"]}
        type="submit"
        iconPosition="right"
      />
      {state.message && <p>{state.message}</p>}
    </form>
  );
}

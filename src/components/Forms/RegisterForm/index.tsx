"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ArrowIcon from "@/assets/ArrowIcon";
import styles from "./registerForm.module.scss";
import { register } from "@/actions/auth";
import { useActionState } from "react";
import Link from "next/link";
import { IFormState } from "@/interfaces";
import Toast from "@/components/Toast";

const inputFields = [
  { type: "text", label: "Username", name: "username" },
  { type: "text", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" },
];

const initialState: IFormState = {
  message: "",
  errors: {},
  success: false,
};

function Index() {
  const [isToastOpen, setIsToastOpen] = useState(false);

  const [state, formAction, pending] = useActionState(register, initialState);

  useEffect(() => {
    if (state?.message || Object.keys(state.errors || {}).length > 0) {
      setIsToastOpen(true);
    }
  }, [state]);

  const errorMessage =
  Object.values(state.errors).join("") || Object.values(state.errors || {}).join(", ");

  return (
    <form action={formAction} className={styles.wrapper}>
      {inputFields.map(({ type, label, name }) => (
        <Input
          key={name}
          type={type}
          label={label}
          name={name}
          errorMessage={state?.errors?.[name]}
        />
      ))}
      <Button
        label={pending ? "Loading..." : "Register"}
        classNames={["btn_primary", "with_icon"]}
        icon={<ArrowIcon fill="white" width={15} height={15} />}
        type="submit"
        iconPosition="right"
        disabled={pending}
      />
      <p className={styles.baseline}>
        Vous avez déjà un compte ? <Link href={"/auth/login"}>Connectez-vous !</Link>
      </p>

      <Toast
        isOpen={isToastOpen}
        variant="error"
        label={errorMessage}
        duration={3000}
        close={() => setIsToastOpen(false)}
      />
    </form>
  );
}

export default Index;

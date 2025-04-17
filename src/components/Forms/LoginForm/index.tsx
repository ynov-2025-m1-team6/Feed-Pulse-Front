"use client";

import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ArrowIcon from "@/assets/ArrowIcon";
import styles from "./loginForm.module.scss";
import { login } from "@/actions/auth";
import { useActionState } from "react";
import Link from "next/link";
import { IFormState } from "@/interfaces";

type Props = object;

const inputFields = [
  { type: "text", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" },
];

const initialState: IFormState = {
  message: "",
  errors: {},
  success: false,
};

function Index({}: Props) {
  const [state, formAction, pending] = useActionState<IFormState>(login, initialState);
  console.log(state?.errors);
  return (
    <form action={formAction} className={styles.wrapper}>
      {inputFields.map(({ type, label, name }) => (
        <Input key={name} type={type} label={label} name={name} errorMessage={state?.errors?.[name]}/>
      ))}
      <Button
        label={pending ? "Loading..." : "Login"}
        classNames={["btn_primary", "with_icon"]}
        icon={<ArrowIcon fill="white" width={15} height={15} />}
        type="submit"
        iconPosition="right"
        disabled={pending}
      ></Button>
      <p className={styles.baseline}>
        Pad de compte ?{" "}
        <Link href={"/auth/register"}>Inscrivez-vous !</Link>
      </p>
    </form>
  );
}

export default Index;

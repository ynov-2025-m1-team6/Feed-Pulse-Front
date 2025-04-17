"use client";

import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ArrowIcon from "@/assets/ArrowIcon";
import styles from "./registerForm.module.scss";
import { register } from "@/actions/auth";
import { useActionState } from "react";
import Link from "next/link";
import { IFormState } from "@/interfaces";

type Props = object;

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

const registerWithState = async (
  _prevState: IFormState,
  formData: FormData
): Promise<IFormState> => {
  return await register(formData);
};

function Index({}: Props) {
  // const [state, formAction, pending] = useActionState<IFormState>(register, initialState);
  const [state, formAction, pending] = useActionState(
    registerWithState,
    initialState
  );
  // console.log("state", state);
  console.log(state?.errors);
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
      ></Button>
      <p className={styles.baseline}>
        Vous avez déjà un compte ?{" "}
        <Link href={"/auth/login"}>Connectez-vous !</Link>
      </p>
    </form>
  );
}

export default Index;

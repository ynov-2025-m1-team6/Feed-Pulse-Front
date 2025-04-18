import React from "react";
import styles from "./input.module.scss";

type Props = {
  type: string;
  label: string;
  name: string;
  errorMessage?: string;
  value?: string;
  handleChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  label,
  name,
  errorMessage,
  value,
  handleChangeFunction,
}: Props) => {
  return (
    <div className={styles.auth_form_field}>
      <label htmlFor={name}>{label} :</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChangeFunction}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Input;

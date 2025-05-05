import React from "react";
import styles from "./input.module.scss";

type Props = {
  type: string;
  label: string;
  name: string;
  errorMessage?: string;
  value?: string;
  disabled: boolean;
  readonly: boolean;
  handleChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  label,
  name,
  errorMessage,
  value,
  handleChangeFunction,
  disabled,
  readonly,
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
        readOnly={readonly}
        disabled={disabled}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Input;

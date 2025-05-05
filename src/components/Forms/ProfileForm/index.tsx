"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/Input";
import { IUser } from "@/interfaces";

type Props = {
  user: IUser | null;
};

function Index({ user }: Props) {
  const excludedFields = React.useMemo(() => ["id", "password", "uuid", "UpdatedAt"], []);
  const readOnlyFields = ["CreatedAt", "username", "email"];

  const [form, setForm] = useState<
    Partial<Omit<IUser, "id" | "password" | "uuid" | "UpdatedAt">>
  >({});

  useEffect(() => {
    if (user) {
      const initialFormState = Object.entries(user).reduce(
        (acc, [key, value]) => {
          if (!excludedFields.includes(key)) {
            if (key === "password") {
              (acc as Partial<Omit<IUser, "id" | "uuid" | "UpdatedAt">>)[key] =
                "";
            } else if (key === "CreatedAt") {
              acc[key] = formatDate(value);
            } else {
              acc[key as keyof typeof acc] = value;
            }
          }
          return acc;
        },
        {} as Partial<Omit<IUser, "id" | "password" | "uuid" | "UpdatedAt">>,
      );

      setForm(initialFormState);
    }
  }, [user, excludedFields]);

  const formatDate = (timestamp: string): string => {
    const cleanTimestamp = timestamp.split(".")[0] + "Z";

    const date = new Date(cleanTimestamp);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  const inputFields = user
    ? Object.entries(user)
        .filter(([key]) => !excludedFields.includes(key))
        .map(([key, value]) => ({
          type: key === "password" ? "password" : "text",
          label: key.charAt(0).toUpperCase() + key.slice(1),
          name: key,
          readOnly: readOnlyFields.includes(key),
          value: key === "createdAt" ? formatDate(value) : value,
        }))
    : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      {inputFields.map(({ type, label, name, readOnly }) => (
        <Input
          key={name}
          type={type}
          label={label}
          name={name}
          value={form[name as keyof typeof form] || ""}
          handleChangeFunction={handleInputChange}
          readonly={readOnly}
          disabled={readOnly}
        />
      ))}
    </form>
  );
}

export default Index;

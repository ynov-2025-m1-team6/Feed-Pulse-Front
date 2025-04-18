"use server";

import { IFormState } from "@/interfaces";
import { fetchApi } from "@/utils/utils";
import { cookies } from "next/headers";

export async function login(formData: FormData): Promise<IFormState> {
  const login = formData.get("login");
  const password = formData.get("password");
  console.log(login, password);

  const errors: Record<string, string> = {};

  for (const [name, value] of formData.entries()) {
    if (name === "login" && !value) {
      errors.email = "Email or Username is required";
    }
    if (name === "password" && !value) {
      errors.password = "Password is required";
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: "Form validation failed",
      errors: errors,
      success: false,
    };
  }

  const res = await fetchApi("api/auth/login", "POST", { login, password });
  console.log("res", res);
  const token = res.headers.get("authorization");
  const cookieStore = await cookies();
  if (token) {
    cookieStore.set("jwt", token.replace("Bearer ", ""));
  }

  return {
    message: "Login successful",
    errors: {},
    success: true,
  };
}

export async function register(formData: FormData): Promise<IFormState> {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(formData);
  console.log(username, email, password);
  const res = await fetchApi("api/auth/register", "POST", {
    username,
    email,
    password,
  });
  console.log("res", res);
  return {
    message: "Login successful",
    errors: {},
    success: true,
  };
}

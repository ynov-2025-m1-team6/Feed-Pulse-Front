"use server";

import { IFormState } from "@/interfaces";
import { fetchApi } from "@/utils/utils";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formData: FormData): Promise<IFormState> {
  const login = formData.get("login");
  const password = formData.get("password");

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
      errors,
      success: false,
    };
  }

  try {
    const res = await fetchApi("api/auth/login", "POST", "", { login, password });

    const token = res.response.headers.get("authorization");
    const cookieStore = await cookies();

    if (token) {
      cookieStore.set("jwt", token.replace("Bearer ", ""));
    }

    return {
      message: "Login successful",
      errors: {},
      success: true,
    };
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return {
        message: "Invalid credentials",
        errors: { login: "Incorrect login or password" },
        success: false,
      };
    }

    return {
      message: "An unexpected error occurred",
      errors: {},
      success: false,
    };
  }
}


export async function register(
  state: IFormState,
  formData: FormData,
): Promise<IFormState> {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  // console.log(formData);
  // console.log(username, email, password);
  const res = await fetchApi("api/auth/register", "POST", "", {
    username,
    email,
    password,
  });
  console.log("server action", res);
  if (res.data.error) {
    return {
      message: "Form validation failed",
      errors: res.data.error,
      success: false,
    };
  }
  // redirect("/auth/login");
  return {
    message: "Login successful",
    errors: {},
    success: true,
  };
}

export async function getUser() {
  const cookieStore = await cookies();
  const token = await cookieStore.get("jwt");

  const res = await fetchApi("api/auth/user", "GET", token?.value);
  return res.data;
}

export async function logout() {
  const res = await fetchApi("api/auth/logout", "POST");
  console.log(res);
  const cookieStore = await cookies();
  cookieStore.delete("jwt");
  redirect("/auth/login");
}

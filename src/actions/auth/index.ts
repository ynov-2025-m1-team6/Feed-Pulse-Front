import { IFormState } from "@/interfaces";

export async function login(state: IFormState, formData: FormData): Promise<IFormState> {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);

  const errors: Record<string, string> = {};

  for (const [name, value] of formData.entries()) {
    if (name === "email" && !value) {
      errors.email = "Email is required";
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

  return {
    message: "Login successful",
    errors: {},
    success: true,
  };
}

export async function register(state: IFormState, formData: FormData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
    console.log(formData);
  console.log(username, email, password);
}

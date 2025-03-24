export const formatToUrlParam = (text: string) => {
  return text.trim().replace("'", "").toLowerCase().split(" ").join("+");
}

/* Checks if the error is an object, an instance of Error or a string and returns an error message */
export const getErrorMessage = (error: unknown) => {
  if (error && typeof error === "object" && "message" in error && typeof error.message === "string" || error instanceof Error && error.message === "string") {
    if (error.message.includes("email-already-in-use")) {
      return "This e-mail is already in use";

    } else if (error.message.includes("invalid-credential")) {
      return "Invalid credentials";
    } else {
      return "It was not possible to complete the action";
    }
  } else if (typeof error === "string") {
    return error;
  }
}

/* Gets the user first name if the display name is provided */
export const getUserFirstName = (displayName: string | null) => {
  if (displayName === null) return null;

  return displayName.split(" ")[0];
}
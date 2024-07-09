"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  // when user successfully logged in the user will be redicted to this
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

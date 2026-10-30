"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

export async function authenticateAdmin(prevState, formData) {
  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!username || !password) {
    return {
      error: "Username dan password wajib diisi.",
    };
  }

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Username atau password salah, atau akun bukan Admin.",
          };
        default:
          return {
            error: "Terjadi kesalahan saat proses autentikasi.",
          };
      }
    }
    throw error;
  }
}

export async function logoutAdmin() {
  await signOut({ redirectTo: "/login" });
}

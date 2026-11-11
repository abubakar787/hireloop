"use client"

import { AuthScreen, type AuthFormValues } from "@/components/auth-screen"
import { authClient } from "@/lib/auth-client"

export default function SignUpPage() {
  async function handleSignUp(values: AuthFormValues) {
    const { error } = await authClient.signUp.email({
      name: String(values.fullName ?? ""),
      email: String(values.email ?? ""),
      password: String(values.password ?? ""),
      callbackURL: "/",
    })

    if (error) {
      throw new Error(error.message)
    }
  }

  return <AuthScreen mode="sign-up" onFormSubmit={handleSignUp} />
}

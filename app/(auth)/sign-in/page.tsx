"use client"

import { AuthScreen, type AuthFormValues } from "@/components/auth-screen"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export default function SignInPage() {
  const router = useRouter()

  async function handleSignIn(values: AuthFormValues) {
    const { error } = await authClient.signIn.email({
      email: String(values.email ?? ""),
      password: String(values.password ?? ""),
      callbackURL: "/",
    })

    if (error) {
      throw new Error(error.message)
    }

    router.replace("/")
    router.refresh()
  }

  return <AuthScreen mode="sign-in" onFormSubmit={handleSignIn} />
}

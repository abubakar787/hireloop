"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react"
import { useState, type FormEvent } from "react"

type AuthMode = "sign-in" | "sign-up"
export type AuthFormValues = Record<string, FormDataEntryValue> & {
  accountType?: "seeker" | "recruiter" | "admin"
}

type AuthScreenProps = {
  mode: AuthMode
  onFormSubmit?: (values: AuthFormValues) => void | Promise<void>
}

const inputClass =
  "h-[52px] w-full rounded-xl border border-white/10 bg-[#111114] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#756cff] focus:ring-4 focus:ring-[#756cff]/15"

export function AuthScreen({ mode, onFormSubmit }: AuthScreenProps) {
  const isSignUp = mode === "sign-up"
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [accountType, setAccountType] = useState("seeker")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries()) as AuthFormValues

    // Development-only form preview. Never log credentials in production.
    if (process.env.NODE_ENV !== "production") {
      const preview = { ...values }

      for (const fieldName of ["password", "confirmPassword"]) {
        if (fieldName in preview) {
          preview[fieldName] = "[redacted]"
        }
      }

      console.info(`[HireLoop ${mode} form data]`, preview)
    }

    setIsSubmitting(true)
    setMessage("")

    try {
      if (onFormSubmit) {
        await onFormSubmit(values)
        setMessage("Your request completed successfully.")
      } else {
        setMessage(
          "Your form is ready. Authentication will be connected later."
        )
      }
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-svh bg-[#08080b] px-4 py-5 text-white sm:px-8 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100svh-2.5rem)] w-full max-w-[1320px] flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d0d11] shadow-[0_32px_120px_rgba(0,0,0,0.45)] sm:min-h-[calc(100svh-4rem)] lg:flex-row">
        <section className="relative hidden w-[46%] flex-col justify-between overflow-hidden bg-[#111116] p-10 lg:flex xl:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-44 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-[#5c53fe]/20 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-64 -left-28 size-[440px] rounded-full bg-[#5c53fe]/10 blur-[100px]"
          />

          <Link
            href="/"
            className="relative w-fit rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#8179ff]"
            aria-label="HireLoop home"
          >
            <Image
              src="/logo.png"
              alt="HireLoop"
              width={154}
              height={44}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <div className="relative max-w-[480px] py-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#756cff]/25 bg-[#756cff]/10 px-3.5 py-2 text-xs font-medium text-[#b9b4ff]">
              <span className="size-1.5 rounded-full bg-[#8b83ff]" />
              Your next opportunity starts here
            </div>
            <h1 className="font-manrope text-4xl leading-[1.12] font-bold tracking-[-0.04em] xl:text-[52px]">
              Find your place in the{" "}
              <span className="text-[#8b83ff]">work world.</span>
            </h1>
            <p className="mt-6 max-w-[410px] text-base leading-7 text-white/55">
              A better way to discover opportunities, connect with great teams,
              and make your next move.
            </p>

            <div className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-[#756cff]/15 text-[#aaa4ff]">
                  <BriefcaseBusiness className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Built for what’s next
                  </p>
                  <p className="mt-1 text-xs text-white/45">
                    One place for people and opportunities
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 border-t border-white/[0.08] pt-5">
                <div>
                  <p className="font-manrope text-xl font-bold">
                    50k<span className="text-[#8b83ff]">+</span>
                  </p>
                  <p className="mt-1 text-[11px] text-white/45">Open roles</p>
                </div>
                <div className="pl-4">
                  <p className="font-manrope text-xl font-bold">
                    12k<span className="text-[#8b83ff]">+</span>
                  </p>
                  <p className="mt-1 text-[11px] text-white/45">Companies</p>
                </div>
                <div className="pl-4">
                  <p className="font-manrope text-xl font-bold">
                    2m<span className="text-[#8b83ff]">+</span>
                  </p>
                  <p className="mt-1 text-[11px] text-white/45">Candidates</p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative text-xs text-white/35">
            © {new Date().getFullYear()} HireLoop. Find work that moves you.
          </p>
        </section>

        <section className="flex flex-1 items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-[440px]">
            <div className="mb-10 flex items-center justify-between gap-4 lg:hidden">
              <Link
                href="/"
                className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#8179ff]"
                aria-label="HireLoop home"
              >
                <Image
                  src="/logo.png"
                  alt="HireLoop"
                  width={154}
                  height={44}
                  priority
                  className="h-9 w-auto"
                />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
              >
                <ArrowLeft className="size-4" /> Back to home
              </Link>
            </div>
            <div className="mb-8">
              <p className="mb-3 text-sm font-medium tracking-wide text-[#9b94ff]">
                {isSignUp ? "GET STARTED" : "WELCOME BACK"}
              </p>
              <h2 className="font-manrope text-3xl font-bold tracking-[-0.035em] sm:text-[36px]">
                {isSignUp ? "Create your account" : "Sign in to HireLoop"}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/45">
                {isSignUp
                  ? "Join a community moving careers forward."
                  : "Pick up where your next opportunity begins."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignUp && (
                <>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Full name
                    </label>
                    <div className="relative">
                      <UserRound className="pointer-events-none absolute top-1/2 left-3.5 size-[17px] -translate-y-1/2 text-white/35" />
                      <input
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-white/80">
                      Account type
                    </legend>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          value: "seeker",
                          label: "Seeker",
                          icon: UserRound,
                        },
                        {
                          value: "recruiter",
                          label: "Recruiter",
                          icon: BriefcaseBusiness,
                        },
                        {
                          value: "admin",
                          label: "Admin",
                          icon: ShieldCheck,
                        },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setAccountType(option.value)}
                          aria-pressed={accountType === option.value}
                          className={`inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border px-2 text-xs transition sm:text-sm ${accountType === option.value ? "border-[#756cff]/70 bg-[#756cff]/12 text-white" : "border-white/10 bg-[#111114] text-white/55 hover:border-white/20 hover:text-white"}`}
                        >
                          <option.icon
                            className="size-4 shrink-0"
                            aria-hidden="true"
                          />
                          {option.label}
                        </button>
                      ))}
                    </div>
                    <input
                      type="hidden"
                      name="accountType"
                      value={accountType}
                    />
                    <p className="mt-2 text-xs text-white/40">
                      Admin access may require approval.
                    </p>
                  </fieldset>
                </>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute top-1/2 left-3.5 size-[17px] -translate-y-1/2 text-white/35" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-white/80"
                  >
                    Password
                  </label>
                  {!isSignUp && (
                    <button
                      type="button"
                      className="text-xs font-medium text-[#a49eff] transition hover:text-white"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute top-1/2 left-3.5 size-[17px] -translate-y-1/2 text-white/35" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete={
                      isSignUp ? "new-password" : "current-password"
                    }
                    minLength={8}
                    required
                    placeholder="At least 8 characters"
                    className={`${inputClass} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute top-1/2 right-3.5 -translate-y-1/2 rounded-md p-1 text-white/40 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#8b83ff]"
                  >
                    {showPassword ? (
                      <EyeOff className="size-[17px]" />
                    ) : (
                      <Eye className="size-[17px]" />
                    )}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Confirm password
                  </label>
                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute top-1/2 left-3.5 size-[17px] -translate-y-1/2 text-white/35" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      minLength={8}
                      required
                      placeholder="Enter your password again"
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              {isSignUp && (
                <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-white/50">
                  <input
                    name="termsAccepted"
                    type="checkbox"
                    required
                    className="mt-1 size-4 accent-[#756cff]"
                  />
                  <span>
                    I agree to the{" "}
                    <a
                      href="#terms"
                      className="text-[#aaa4ff] hover:text-white"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#privacy"
                      className="text-[#aaa4ff] hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#5c53fe] px-5 font-manrope text-sm font-bold text-white shadow-[0_8px_24px_rgba(92,83,254,0.22)] transition hover:bg-[#6d65ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9c96ff]"
              >
                {isSubmitting
                  ? "Please wait..."
                  : isSignUp
                    ? "Create account"
                    : "Sign in"}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              {message && (
                <p
                  role="status"
                  className="rounded-xl border border-[#756cff]/20 bg-[#756cff]/10 px-4 py-3 text-sm text-[#c4c0ff]"
                >
                  {message}
                </p>
              )}
            </form>

            <p className="mt-7 text-center text-sm text-white/45">
              {isSignUp ? "Already have an account?" : "New to HireLoop?"}{" "}
              <Link
                href={isSignUp ? "/sign-in" : "/sign-up"}
                className="font-semibold text-[#a49eff] transition hover:text-white"
              >
                {isSignUp ? "Sign in" : "Create an account"}
              </Link>
            </p>
            <p className="mt-10 text-center text-xs leading-5 text-white/30">
              By continuing, you agree to HireLoop’s Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

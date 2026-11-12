"use client"

import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useSession, signOut } from "@/lib/auth-client"

const navLinks = [
  { label: "Browse Jobs", href: "/#jobs" },
  { label: "Company", href: "/#companies" },
  { label: "Pricing", href: "/#pricing" },
]

const authLinkClass =
  "inline-flex h-13 items-center justify-center rounded-[12px] px-6 font-manrope text-lg font-semibold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-brand/50"

const signInClass = `${authLinkClass} text-brand hover:bg-white/5`

const getStartedClass = `${authLinkClass} border border-black/10 bg-brand text-brand-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-brand/90`

function SiteNavbar() {
  const { data: session } = useSession()
  console.log("user session navbar", session) // Replace with actual session data retrieval logic
  const handleSignOut = async () => {
    try {
      await signOut({ callbackURL: "/" })
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }
  
  
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[60px]">
        <nav className="mt-4 flex h-16 items-center justify-between rounded-[16px] bg-surface-dark pr-2 pl-4 md:mt-6 md:h-[74px] md:pl-6">
          <Link
            href="/"
            className="shrink-0 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-brand/50"
            aria-label="HireLoop home"
          >
            <Image
              src="/logo.png"
              alt="HireLoop"
              width={154}
              height={44}
              priority
              className="h-9 w-auto md:h-11"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center lg:flex">
            <ul className="flex items-center gap-10 pr-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md text-base text-white transition-colors outline-none hover:text-white/70 focus-visible:ring-3 focus-visible:ring-brand/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <span aria-hidden="true" className="h-6 w-px bg-[#a8a8a8]/40" />

            <div className="flex items-center gap-4 pl-6">
              {session?.user ? (
                <>
                <span className="text-white">Welcome, {session.user.name}</span>
                <Button
                  variant="ghost"
                  onClick={handleSignOut}
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  Sign Out
                </Button>
                </>
              ) : (
                <>
                  <Link href="/sign-in" className={signInClass}>
                    Sign In
                  </Link>
                  <Link href="/sign-up" className={getStartedClass}>
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile navigation */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-1 size-11 text-white hover:bg-white/10 hover:text-white lg:hidden"
                />
              }
            >
              <MenuIcon className="size-6" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="gap-0 border-l-white/10 bg-[#151516] p-0 text-white data-[side=right]:w-[85vw]! sm:data-[side=right]:w-[380px]!"
            >
              <SheetHeader className="flex-row items-center justify-between border-b border-white/10 px-6 py-5">
                <SheetTitle className="sr-only">HireLoop navigation</SheetTitle>
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/"
                      className="w-fit rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-brand/50"
                      aria-label="HireLoop home"
                    >
                      <Image
                        src="/logo.png"
                        alt="HireLoop"
                        width={154}
                        height={44}
                        className="h-9 w-auto"
                      />
                    </Link>
                  }
                />
                <SheetClose
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-10 text-white hover:bg-white/10 hover:text-white"
                    />
                  }
                >
                  <XIcon className="size-5" />
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-6 py-6">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className="rounded-[12px] px-4 py-3 text-base text-white/80 transition-colors outline-none hover:bg-white/5 hover:text-white focus-visible:ring-3 focus-visible:ring-brand/50"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>

              <SheetFooter className="mt-auto gap-3 border-t border-white/10 p-6">
                <Link
                  href="/sign-in"
                  className="inline-flex h-12 items-center justify-center rounded-[12px] border border-white/15 font-manrope text-base font-semibold text-white transition-colors outline-none hover:bg-white/5 focus-visible:ring-3 focus-visible:ring-brand/50"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="inline-flex h-12 items-center justify-center rounded-[12px] bg-brand font-manrope text-base font-semibold text-brand-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition-colors outline-none hover:bg-brand/90 focus-visible:ring-3 focus-visible:ring-brand/50"
                >
                  Get Started
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}

export { SiteNavbar }

import { SiteNavbar } from "@/components/site-navbar"

export default function Page() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-[#0e0b16]">
      <SiteNavbar />

      <main className="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col justify-center px-6 pt-28 pb-16 lg:px-[60px]">
        <div className="max-w-2xl">
          <h1 className="font-manrope text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
            Your next role is already looking for you
          </h1>
          <p className="mt-5 max-w-xl font-manrope text-lg text-white/70">
            Build a profile in three minutes. The matches start arriving
            tomorrow morning.
          </p>
        </div>
      </main>
    </div>
  )
}

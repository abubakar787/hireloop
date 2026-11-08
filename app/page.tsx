import { HeroSection } from "@/components/hero-section"
import { SiteNavbar } from "@/components/site-navbar"

export default function Page() {
  return (
    <div className="min-h-svh bg-[#010103]">
      <SiteNavbar />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}

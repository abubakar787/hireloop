"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  BriefcaseBusiness,
  ChartColumn,
  MapPin,
  Search,
  Star,
  UserSearch,
} from "lucide-react"

import { cn } from "@/lib/utils"

const stats = [
  { value: "50K", label: "Active Jobs", icon: Search },
  { value: "12K", label: "Companies", icon: ChartColumn },
  { value: "2M", label: "Job Seekers", icon: UserSearch },
  { value: "97%", label: "Satisfaction Rate", icon: Star },
]

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

const statVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

function HeroSection({ className }: React.ComponentProps<"section">) {
  return (
    <section className={cn("relative overflow-hidden bg-[#010103]", className)}>
      {/* Figma's subtle charcoal glow behind the hero copy */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-x-0 top-0 h-[380px]"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 50% 0%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.025) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Starfield and globe are layered behind the headline and stats. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero-stars.png"
          alt=""
          width={816}
          height={505}
          priority
          className="absolute top-[clamp(270px,calc(52vw_-_220px),538px)] left-1/2 h-auto w-[min(1180px,130vw)] max-w-none -translate-x-1/2 opacity-80"
        />
        <Image
          src="/images/globe.png"
          alt=""
          width={1440}
          height={1882}
          priority
          className="absolute top-[clamp(-250px,calc(340px_-_52vw),150px)] left-1/2 h-auto w-full max-w-[1440px] -translate-x-1/2"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 43%, black 55%, black 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-24 pb-16 md:pt-[204px] md:pb-[72px] lg:px-[60px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Announcement badge */}
          <motion.div variants={fadeInUp} className="flex items-center">
            <span
              aria-hidden="true"
              className="hidden h-px w-16 bg-white/20 sm:block"
            />
            <span className="flex h-12 items-center rounded-full border border-white/30 bg-[linear-gradient(180deg,#212126_0%,#040405_100%)] px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)] sm:px-5">
              <BriefcaseBusiness
                className="size-[18px] shrink-0 text-[#f5a623]"
                strokeWidth={2.2}
              />
              <span className="ml-2.5 font-mono text-[11px] tracking-[0.04em] whitespace-nowrap text-white sm:text-xs">
                <strong className="font-bold tracking-normal">50,000+</strong>
                <span className="ml-2 tracking-[0.16em] text-white/55 uppercase">
                  New jobs this month
                </span>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="hidden h-px w-16 bg-white/20 sm:block"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-8 font-manrope text-4xl leading-tight font-bold text-white sm:text-[40px] md:text-5xl lg:text-[56px]"
          >
            Find Your Dream Job Today
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-[784px] font-manrope text-base leading-6 text-white/70 sm:text-lg sm:leading-7"
          >
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </motion.p>

          {/* Figma search: keyword + location fields and a purple submit button */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 w-full max-w-[784px] sm:mt-10"
          >
            <form action="/jobs" method="get">
              <div className="rounded-2xl border border-white/20 bg-[#101010] p-2 transition-colors focus-within:border-brand focus-within:ring-3 focus-within:ring-brand/40 sm:flex sm:h-16 sm:items-center sm:rounded-[16px] sm:pr-2 sm:pl-5">
                <div className="flex h-12 items-center sm:h-full sm:min-w-0 sm:flex-1">
                  <Search
                    className="size-5 shrink-0 text-white"
                    strokeWidth={1.5}
                  />
                  <input
                    type="search"
                    name="q"
                    placeholder="Job title, skill or company"
                    aria-label="Job title, skill or company"
                    className="h-full min-w-0 flex-1 bg-transparent pl-3 text-xs text-white placeholder:text-white/65 focus:outline-none sm:text-sm"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-6 w-px bg-white/15 sm:block"
                />
                <div className="flex h-12 items-center border-t border-white/10 sm:h-full sm:min-w-0 sm:flex-1 sm:border-0 sm:pl-4">
                  <MapPin
                    className="size-5 shrink-0 text-white"
                    strokeWidth={1.5}
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location or Remote"
                    aria-label="Location or Remote"
                    className="h-full min-w-0 flex-1 bg-transparent pl-3 text-xs text-white placeholder:text-white/65 focus:outline-none sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Search jobs"
                  className="flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-12"
                >
                  <Search className="size-5" strokeWidth={1.7} />
                  <span className="text-sm font-medium sm:hidden">Search</span>
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:gap-1.5">
                <span className="mr-1 text-white/60 sm:text-sm">
                  Trending Position
                </span>
                {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map(
                  (term) => (
                    <Link
                      key={term}
                      href={`/jobs?q=${encodeURIComponent(term)}`}
                      className="rounded-full border border-white/10 bg-[#1a1a1b] px-3 py-1.5 text-[11px] text-white/85 transition-colors hover:border-white/25 hover:bg-white/10 sm:text-xs"
                    >
                      {term}
                    </Link>
                  )
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Live stats */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mt-40 md:mt-[415px]"
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative mx-auto max-w-2xl text-center font-heading text-2xl leading-snug font-medium text-white sm:text-3xl md:max-w-[600px] md:text-[40px] md:leading-[52px]"
          >
            Assisting over 15,000 job seekers find their dream positions.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="relative mx-auto mt-12 grid w-full max-w-[1320px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex min-h-[254px] flex-col rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#030304_0%,#151517_55%,#313131_135%)] p-6"
              >
                <stat.icon className="size-6 text-white" strokeWidth={1.5} />
                <div className="mt-auto">
                  <p className="font-manrope text-[40px] leading-none font-semibold text-white sm:text-[56px] sm:leading-[1.15]">
                    {stat.value}
                  </p>
                  <p className="mt-4 font-sans text-lg text-white">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </section>
  )
}

export { HeroSection }

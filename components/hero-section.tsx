"use client"

import { motion, type Variants } from "framer-motion"
import { Briefcase, ChartColumn, Search, Star, UserSearch } from "lucide-react"

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
      {/* Ambient background: aurora behind the navbar/hero copy */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-56 left-1/2 h-[620px] w-[1240px] max-w-none -translate-x-1/2 rounded-full opacity-30 blur-[120px] max-md:-top-24 max-md:h-[380px] max-md:w-[720px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(92,83,254,0.9) 0%, rgba(97,79,251,0.55) 55%, transparent 75%)",
          }}
        />
        <div
          className="absolute -top-24 left-[12%] h-[360px] w-[520px] rounded-full opacity-15 blur-[110px]"
          style={{ background: "#dc02ce" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-24 pb-16 lg:px-[60px] md:pt-[204px] md:pb-[72px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Announcement badge */}
          <motion.div variants={fadeInUp} className="flex items-center">
            <span aria-hidden="true" className="hidden h-px w-16 bg-white/20 sm:block" />
            <span className="flex items-center rounded-full border border-white/30 bg-[linear-gradient(180deg,#212126_0%,#040405_100%)] py-3 pr-6 pl-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)]">
              <Briefcase className="size-6 text-white" />
              <span className="ml-4 font-mono text-base text-white sm:text-lg">
                50,000+ new jobs this month
              </span>
            </span>
            <span aria-hidden="true" className="hidden h-px w-16 bg-white/20 sm:block" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-8 font-manrope text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]"
          >
            Find Your Dream Job Today
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl font-manrope text-lg text-white/70 sm:text-xl"
          >
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </motion.p>

          {/* Search bar */}
          <motion.div variants={fadeInUp} className="mt-11 w-full md:mt-[118px]">
            <form action="/jobs" method="get">
              <div className="flex h-16 items-center rounded-2xl border border-white/20 bg-[#101010] pr-4 pl-6 transition-colors outline-none focus-within:border-brand focus-within:ring-3 focus-within:ring-brand/50">
                <Search className="size-6 shrink-0 text-white" strokeWidth={1.5} />
                <input
                  type="search"
                  name="q"
                  placeholder="Job title, skill or company"
                  aria-label="Search jobs"
                  className="h-full w-full bg-transparent pl-8 text-base text-white placeholder:text-white/80 focus:outline-none"
                />
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
          {/* Glow + line art, positioned as in the Figma design */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div
              className="absolute top-1/2 left-1/2 h-[1036px] w-[1240px] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(92,83,254,0.85) 0%, rgba(92,83,254,0.6) 29%, rgba(92,83,254,0.5) 52%, rgba(92,83,254,0) 100%)",
              }}
            />
            <div
              className="absolute top-[-160px] left-1/2 w-[1100px] max-w-none -translate-x-1/2 md:top-[-415px] md:w-[1744px]"
              style={{
                aspectRatio: "1744 / 741",
                background: "url('/images/hero-lines.svg') center top / 100% 100% no-repeat",
              }}
            />
          </div>

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
                  <p className="mt-4 font-sans text-lg text-white">{stat.label}</p>
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

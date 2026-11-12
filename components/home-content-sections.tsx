"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Building2,
  Check,
  FileText,
  MapPin,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

const jobs = [
  {
    title: "Frontend Developer",
    company: "Linear",
    initials: "L",
    location: "Remote · United States",
    salary: "$120k – $160k",
    type: "Full-time",
    color: "bg-violet-500/15 text-violet-300",
  },
  {
    title: "Product Designer",
    company: "Figma",
    initials: "F",
    location: "New York, NY · Hybrid",
    salary: "$110k – $145k",
    type: "Full-time",
    color: "bg-orange-500/15 text-orange-300",
  },
  {
    title: "Senior Data Analyst",
    company: "Notion",
    initials: "N",
    location: "Remote · United States",
    salary: "$105k – $138k",
    type: "Full-time",
    color: "bg-sky-500/15 text-sky-300",
  },
  {
    title: "Backend Engineer",
    company: "Vercel",
    initials: "V",
    location: "San Francisco, CA · Hybrid",
    salary: "$145k – $190k",
    type: "Full-time",
    color: "bg-white/10 text-white",
  },
  {
    title: "UX Researcher",
    company: "Webflow",
    initials: "W",
    location: "Remote · United States",
    salary: "$100k – $132k",
    type: "Full-time",
    color: "bg-blue-500/15 text-blue-300",
  },
  {
    title: "Growth Marketing Manager",
    company: "Stripe",
    initials: "S",
    location: "Seattle, WA · Hybrid",
    salary: "$115k – $150k",
    type: "Full-time",
    color: "bg-emerald-500/15 text-emerald-300",
  },
]

const benefits = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: TrendingUp,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: Building2,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: Zap,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Sparkles,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: Users,
  },
]

const plans = [
  {
    name: "Starter",
    monthly: 0,
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    monthly: 17,
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    featured: true,
  },
  {
    name: "Premium",
    monthly: 99,
    description: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
]

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center justify-center gap-3 text-sm text-white/60">
      <span aria-hidden="true" className="size-2 rounded-[2px] bg-brand" />
      {children}
      <span aria-hidden="true" className="size-2 rounded-[2px] bg-brand" />
    </p>
  )
}

export function HomeContentSections() {
  const [yearly, setYearly] = useState(false)

  return (
    <>
      <section
        id="jobs"
        className="bg-[#010103] px-5 py-16 text-white sm:px-8 lg:px-[60px] lg:py-20"
      >
        <div className="mx-auto max-w-[1320px]">
          <header className="mx-auto mb-14 max-w-[600px] text-center">
            <SectionEyebrow>Smart job discovery</SectionEyebrow>
            <h2 className="font-manrope text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[48px]">
              The roles you&apos;d never find by searching
            </h2>
          </header>

          <div
            id="companies"
            className="grid scroll-mt-28 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {jobs.map((job) => (
              <article
                key={`${job.company}-${job.title}`}
                className="flex min-h-[300px] flex-col rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#101013_0%,#08080a_75%)] p-6 transition-colors hover:border-white/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-12 items-center justify-center rounded-xl font-manrope text-lg font-bold ${job.color}`}
                    >
                      {job.initials}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{job.company}</p>
                      <p className="mt-1 text-xs text-white/45">
                        Verified company
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Save ${job.title} at ${job.company}`}
                    className="rounded-lg p-2 text-white/45 transition hover:bg-white/5 hover:text-white"
                  >
                    <Bookmark className="size-5" />
                  </button>
                </div>
                <h3 className="mt-7 font-manrope text-xl font-semibold">
                  {job.title}
                </h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-white/55">
                  <MapPin className="size-4" /> {job.location}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65">
                    {job.type}
                  </span>
                  <span className="rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs text-[#b9b4ff]">
                    AI matched
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-manrope font-semibold text-white">
                    {job.salary}
                    <span className="ml-1 text-xs font-normal text-white/45">
                      / year
                    </span>
                  </span>
                  <Link
                    href="/jobs"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#aaa4ff] hover:text-white"
                  >
                    Apply Now <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/jobs"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6 text-sm font-semibold transition hover:bg-white/5"
            >
              View all open jobs <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="bg-[#08080b] px-5 py-16 text-white sm:px-8 lg:px-[60px] lg:py-20"
      >
        <div className="mx-auto max-w-[1320px]">
          <header className="mx-auto mb-14 max-w-[600px] text-center">
            <SectionEyebrow>Features for your job search</SectionEyebrow>
            <h2 className="font-manrope text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[48px]">
              Everything you need to succeed
            </h2>
          </header>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="flex items-start gap-4">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-[#a49eff]">
                  <benefit.icon className="size-7" strokeWidth={1.6} />
                </div>
                <div className="pt-1">
                  <h3 className="font-manrope text-base font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="bg-[#010103] px-5 py-16 text-white sm:px-8 lg:px-[60px] lg:py-20"
      >
        <div className="mx-auto max-w-[1320px]">
          <header className="mx-auto mb-10 max-w-[600px] text-center">
            <SectionEyebrow>Pricing</SectionEyebrow>
            <h2 className="font-manrope text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[48px]">
              Pay for the leverage, not the listings
            </h2>
          </header>

          <div className="mx-auto mb-10 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-[#111114] p-1.5">
            <button
              type="button"
              onClick={() => setYearly(false)}
              aria-pressed={!yearly}
              className={`rounded-full px-5 py-2 text-sm transition ${!yearly ? "bg-brand text-white" : "text-white/55 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              aria-pressed={yearly}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${yearly ? "bg-brand text-white" : "text-white/55 hover:text-white"}`}
            >
              Yearly{" "}
              <span className="text-[10px] font-semibold text-[#b9b4ff]">
                25%
              </span>
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => {
              const amount = yearly
                ? Math.round(plan.monthly * 0.75)
                : plan.monthly
              return (
                <article
                  key={plan.name}
                  className={`flex min-h-[450px] flex-col rounded-2xl border p-6 ${plan.featured ? "border-brand/70 bg-[linear-gradient(145deg,rgba(92,83,254,0.17),#101013_55%)] shadow-[0_0_50px_rgba(92,83,254,0.12)]" : "border-white/10 bg-[#0b0b0e]"}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-manrope text-xl font-semibold">
                      {plan.name}
                    </h3>
                    {plan.featured && (
                      <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-medium text-[#c5c0ff]">
                        Most popular
                      </span>
                    )}
                  </div>
                  <div className="mt-7 flex items-baseline gap-2">
                    <span className="font-manrope text-5xl font-bold">
                      ${amount}
                    </span>
                    <span className="text-sm text-white/45">/month</span>
                  </div>
                  <p className="mt-6 border-t border-white/10 pt-6 text-sm text-white/65">
                    {plan.description}
                  </p>
                  <ul className="mt-5 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-[#9b94ff]" />{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/sign-up"
                    className={`mt-auto flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition ${plan.featured ? "bg-brand text-white hover:bg-brand/90" : "border border-white/15 hover:bg-white/5"}`}
                  >
                    Choose This Plan <ArrowRight className="size-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 text-white sm:px-8 lg:px-[60px]">
        <div className="relative isolate -mx-5 overflow-hidden sm:-mx-8 lg:-mx-[60px]">
          <Image
            src="/images/cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-top opacity-90"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#000]/35 to-[#000]"
          />
          <div className="mx-auto flex min-h-[510px] max-w-[560px] flex-col items-center justify-center px-5 pt-16 pb-12 text-center sm:px-8 lg:min-h-[579px]">
            <h2 className="font-manrope text-3xl leading-[1.2] font-semibold tracking-[-0.04em] sm:text-[36px]">
              Your next role is already looking for you
            </h2>
            <p className="mt-4 max-w-[520px] text-xs leading-5 text-white/60 sm:text-[13px]">
              Build a profile in three minutes. The matches start arriving
              tomorrow morning.
            </p>
            <div className="mt-7 flex w-full flex-col justify-center gap-2 sm:w-auto sm:flex-row">
              <Link
                href="/sign-up"
                className="inline-flex h-[42px] items-center justify-center gap-2 rounded-lg bg-white px-4 font-manrope text-[11px] font-semibold text-black hover:bg-white/90"
              >
                Create a free account <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex h-[42px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/30 px-4 font-manrope text-[11px] font-medium hover:bg-white/5"
              >
                View pricing <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <footer className="mx-auto flex min-h-[385px] max-w-[1320px] flex-col justify-between py-8 lg:py-10">
          <div className="grid gap-10 md:grid-cols-[minmax(320px,1.2fr)_2fr]">
            <div className="max-w-[300px]">
              <Link href="/" aria-label="HireLoop home">
                <Image
                  src="/logo.png"
                  alt="HireLoop"
                  width={154}
                  height={44}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="mt-4 text-[11px] leading-[18px] text-white/40">
                The AI-native career platform. Built for people who take their
                work seriously.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <FooterColumn
                title="Product"
                links={[
                  ["Job discovery", "#jobs"],
                  ["Worker AI", "#features"],
                  ["Companies", "/companies"],
                  ["Salary data", "#features"],
                ]}
              />
              <FooterColumn
                title="Navigations"
                links={[
                  ["Help center", "/help"],
                  ["Career library", "/resources"],
                  ["Contact", "/contact"],
                ]}
              />
              <FooterColumn
                title="Resources"
                links={[
                  ["Brand Guideline", "/brand"],
                  ["Newsroom", "/news"],
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-5 pt-8 text-[10px] text-white/35 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-2" aria-label="Social media">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="flex size-[22px] items-center justify-center rounded bg-white/[0.06] text-[13px] font-bold text-white/55 hover:text-white"
              >
                f
              </Link>
              <Link
                href="https://pinterest.com"
                aria-label="Pinterest"
                className="flex size-[22px] items-center justify-center rounded bg-brand/50 text-[12px] font-bold text-white hover:bg-brand"
              >
                p
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex size-[22px] items-center justify-center rounded bg-white/[0.06] text-[11px] font-bold text-white/55 hover:text-white"
              >
                in
              </Link>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <p>Copyright 2024 — Programming Hero</p>
              <div className="flex gap-1">
                <Link href="/terms" className="hover:text-white">
                  Terms &amp; Policy
                </Link>
                <span>·</span>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Guideline
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: [string, string][]
}) {
  return (
    <div>
      <h3 className="font-manrope text-[11px] font-medium text-brand">
        {title}
      </h3>
      <ul className="mt-5 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-[11px] text-white/35 transition hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

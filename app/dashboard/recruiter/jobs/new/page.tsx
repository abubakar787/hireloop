"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, type FormEvent } from "react"
import { ArrowRight, ChevronRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createJob } from "@/lib/actions/jobs"
import type { JobFormData } from "@/lib/types/jobs"

const inputClass =
  "h-11 rounded-lg border-slate-200 bg-white px-3 text-sm shadow-none placeholder:text-slate-400 focus-visible:border-violet-500 focus-visible:ring-violet-500/20"

const labelClass = "mb-2 block text-sm font-medium text-slate-700"

function SectionCard({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-6 flex items-center gap-3 text-base font-semibold text-slate-900">
        <span className="size-2 rounded-sm bg-violet-600" />
        <span className="text-slate-400">{number}.</span> {title}
      </h2>
      {children}
    </section>
  )
}

export default function NewJobForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values: JobFormData = {
      title: String(formData.get("title") ?? ""),
      company: String(formData.get("company") ?? ""),
      category: String(formData.get("category") ?? ""),
      type: String(formData.get("type") ?? ""),
      location: String(formData.get("location") ?? ""),
      deadline: String(formData.get("deadline") ?? ""),
      currency: String(formData.get("currency") ?? "USD"),
      minSalary: String(formData.get("minSalary") ?? ""),
      maxSalary: String(formData.get("maxSalary") ?? ""),
      frequency: String(formData.get("frequency") ?? "monthly"),
      isRemote: formData.get("isRemote") === "on",
      responsibilities: String(formData.get("responsibilities") ?? ""),
      requirements: String(formData.get("requirements") ?? ""),
      benefits: String(formData.get("benefits") ?? ""),
    }

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      setSubmitResult(await createJob(values))
    } catch {
      setSubmitResult({
        success: false,
        message: "Could not submit the job. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-svh bg-slate-50 px-4 py-6 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">
          <Link href="/" aria-label="HireLoop home">
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
            href="/dashboard/recruiter"
            className="text-sm text-slate-500 transition hover:text-slate-900"
          >
            Recruiter dashboard
          </Link>
        </div>
        <header className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-3 flex items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/dashboard/recruiter/jobs"
                className="transition hover:text-slate-900"
              >
                Manage Jobs
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <span className="text-slate-700">Create New Listing</span>
            </nav>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Post a New Job
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Add the role details so candidates can find and apply to your
              opening.
            </p>
          </div>
        </header>

        {submitResult && (
          <div
            role={submitResult.success ? "status" : "alert"}
            className={`mb-5 rounded-lg border px-4 py-3 text-sm ${
              submitResult.success
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            {submitResult.message}
          </div>
        )}

        <form id="new-job-form" onSubmit={handleSubmit} className="space-y-5">
          <SectionCard number="1" title="Basic Information">
            <div className="space-y-5">
              <div>
                <label className={labelClass} htmlFor="job-title">
                  Job title <span className="text-red-600">*</span>
                </label>
                <Input
                  id="job-title"
                  name="title"
                  className={inputClass}
                  placeholder="e.g. Frontend Developer"
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="company-name">
                    Company name <span className="text-red-600">*</span>
                  </label>
                  <Input
                    id="company-name"
                    name="company"
                    className={inputClass}
                    placeholder="Your company"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="job-category">
                    Job category <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="job-category"
                    name="category"
                    className={`${inputClass} w-full appearance-none border border-slate-200 bg-white px-3`}
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option>Engineering &amp; Tech</option>
                    <option>Design</option>
                    <option>Product</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Operations</option>
                    <option>Customer Support</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="job-type">
                  Job type <span className="text-red-600">*</span>
                </label>
                <select
                  id="job-type"
                  name="type"
                  className={`${inputClass} w-full appearance-none border border-slate-200 bg-white px-3`}
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a job type
                  </option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>
          </SectionCard>

          <SectionCard number="2" title="Location & Compensation">
            <div className="space-y-5">
              <label className="flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="isRemote"
                  className="size-4 accent-violet-600"
                />
                Remote work available
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="job-location">
                    Job location <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <MapPin
                      className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <Input
                      id="job-location"
                      name="location"
                      className={`${inputClass} pl-9`}
                      placeholder="City, country or Remote"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="application-deadline">
                    Application deadline
                  </label>
                  <Input
                    id="application-deadline"
                    name="deadline"
                    type="date"
                    className={inputClass}
                  />
                </div>
              </div>

              <fieldset>
                <legend className={labelClass}>Salary range</legend>
                <div className="grid gap-3 sm:grid-cols-[1fr_1fr_120px_140px]">
                  <Input
                    name="minSalary"
                    type="number"
                    min="0"
                    className={inputClass}
                    placeholder="Minimum"
                    aria-label="Minimum salary"
                  />
                  <Input
                    name="maxSalary"
                    type="number"
                    min="0"
                    className={inputClass}
                    placeholder="Maximum"
                    aria-label="Maximum salary"
                  />
                  <select
                    name="currency"
                    aria-label="Salary currency"
                    className={`${inputClass} w-full appearance-none border border-slate-200 bg-white px-3`}
                    defaultValue="USD"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>CAD</option>
                  </select>
                  <select
                    name="frequency"
                    aria-label="Salary frequency"
                    className={`${inputClass} w-full appearance-none border border-slate-200 bg-white px-3`}
                    defaultValue="monthly"
                  >
                    <option value="hourly">Hourly</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </SectionCard>

          <SectionCard number="3" title="Responsibilities & Requirements">
            <div className="space-y-5">
              <div>
                <label className={labelClass} htmlFor="responsibilities">
                  Key responsibilities <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="responsibilities"
                  name="responsibilities"
                  rows={4}
                  required
                  placeholder="Describe the main responsibilities of this role."
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus-visible:border-violet-500 focus-visible:ring-3 focus-visible:ring-violet-500/20"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="requirements">
                  Qualifications &amp; requirements{" "}
                  <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  required
                  placeholder="List the experience, skills, and qualifications candidates need."
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus-visible:border-violet-500 focus-visible:ring-3 focus-visible:ring-violet-500/20"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="benefits">
                  Benefits{" "}
                  <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="benefits"
                  name="benefits"
                  rows={3}
                  placeholder="Share benefits, perks, or other details."
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus-visible:border-violet-500 focus-visible:ring-3 focus-visible:ring-violet-500/20"
                />
              </div>
            </div>
          </SectionCard>

          <div className="flex flex-col-reverse justify-end gap-3 pb-8 sm:flex-row">
            <Link
              href="/dashboard/recruiter/jobs"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Cancel
            </Link>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-10 bg-violet-600 px-5 text-white hover:bg-violet-700"
            >
              {isSubmitting ? "Publishing..." : "Publish Job"}
              {!isSubmitting && <ArrowRight aria-hidden="true" />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

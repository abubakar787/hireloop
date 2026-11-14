import Link from "next/link"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Ellipsis,
  MapPin,
  Megaphone,
  Pencil,
  Server,
  Trash2,
  Users,
  Workflow,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { JobFormData } from "@/lib/types/jobs"

type JobStatus = "Active" | "Expired"

type ManageJob = JobFormData & {
  id: string
  department: string
  applicants: number
  status: JobStatus
  postedLabel: string
}

const jobs: ManageJob[] = [
  {
    id: "job-frontend-dev",
    title: "Frontend Developer",
    company: "HirePulse Network",
    category: "Engineering & Tech",
    department: "Engineering",
    type: "Full-time",
    location: "New York, USA",
    isRemote: true,
    deadline: "2026-12-18",
    currency: "EUR",
    minSalary: "25",
    maxSalary: "40",
    frequency: "hourly",
    responsibilities: "Build and maintain accessible frontend experiences.",
    requirements: "React and TypeScript experience.",
    benefits: "Flexible remote work.",
    applicants: 34,
    status: "Active",
    postedLabel: "Posted 4d ago",
  },
  {
    id: "job-product-designer",
    title: "Senior Product Designer",
    company: "HirePulse Labs",
    category: "Design",
    department: "Design",
    type: "Full-time",
    location: "London, UK (Hybrid)",
    isRemote: false,
    deadline: "2026-12-24",
    currency: "EUR",
    minSalary: "90000",
    maxSalary: "115000",
    frequency: "monthly",
    responsibilities: "Lead product design from discovery to delivery.",
    requirements: "Product design portfolio and systems experience.",
    benefits: "Health coverage and learning budget.",
    applicants: 19,
    status: "Active",
    postedLabel: "Posted 1w ago",
  },
  {
    id: "job-devops",
    title: "DevOps Specialist",
    company: "HirePulse Platform",
    category: "Engineering & Tech",
    department: "Infrastructure",
    type: "Full-time",
    location: "Berlin, Germany",
    isRemote: false,
    deadline: "2026-12-30",
    currency: "EUR",
    minSalary: "95000",
    maxSalary: "120000",
    frequency: "monthly",
    responsibilities: "Improve cloud infrastructure and deployment workflows.",
    requirements: "Cloud platform and CI/CD experience.",
    benefits: "Flexible schedule.",
    applicants: 12,
    status: "Active",
    postedLabel: "Posted 2w ago",
  },
  {
    id: "job-marketing",
    title: "Product Marketing Lead",
    company: "HirePulse Network",
    category: "Marketing",
    department: "Marketing",
    type: "Full-time",
    location: "EU / US",
    isRemote: true,
    deadline: "2026-12-28",
    currency: "EUR",
    minSalary: "80000",
    maxSalary: "105000",
    frequency: "monthly",
    responsibilities: "Shape positioning and go-to-market programs.",
    requirements: "B2B product marketing experience.",
    benefits: "Remote-friendly team.",
    applicants: 27,
    status: "Active",
    postedLabel: "Posted 5d ago",
  },
  {
    id: "job-qa",
    title: "QA Automation Engineer",
    company: "HirePulse Platform",
    category: "Engineering & Tech",
    department: "Quality",
    type: "Part-time",
    location: "Dublin, Ireland (Hybrid)",
    isRemote: false,
    deadline: "2026-10-01",
    currency: "EUR",
    minSalary: "35",
    maxSalary: "50",
    frequency: "hourly",
    responsibilities: "Build and maintain automated test coverage.",
    requirements: "Hands-on browser test automation experience.",
    benefits: "Flexible part-time hours.",
    applicants: 8,
    status: "Expired",
    postedLabel: "Closed",
  },
]

const iconByDepartment: Record<string, typeof Code2> = {
  Engineering: Code2,
  Design: Workflow,
  Infrastructure: Server,
  Marketing: Megaphone,
  Quality: BriefcaseBusiness,
}

function formatCompensation(job: ManageJob) {
  const format = (amount: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: job.currency,
      maximumFractionDigits: 0,
    }).format(Number(amount))

  const frequency = {
    hourly: "hr",
    weekly: "wk",
    monthly: "mo",
  }[job.frequency]

  if (!job.minSalary && !job.maxSalary) return "Not specified"

  return `${format(job.minSalary)} – ${format(job.maxSalary)} / ${frequency ?? job.frequency}`
}

function formatDeadline(deadline: string) {
  if (!deadline) return "No deadline"

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(`${deadline}T00:00:00`))
}

function StatusPill({ status }: { status: JobStatus }) {
  const isActive = status === "Active"

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
        isActive
          ? "bg-emerald-400/10 text-emerald-300"
          : "bg-white/[0.07] text-white/45"
      }`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${isActive ? "bg-emerald-400" : "bg-white/35"}`}
      />
      {status}
    </span>
  )
}

function JobActions({ job }: { job: ManageJob }) {
  return (
    <div className="flex items-center gap-1.5">
      <Button
        type="button"
        size="sm"
        className="h-8 gap-1.5 bg-violet-600/20 px-2.5 text-[11px] text-violet-200 hover:bg-violet-600/30"
        aria-label={`Update ${job.title}`}
      >
        <Pencil aria-hidden="true" />
        Update
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="text-white/50 hover:bg-white/10 hover:text-white"
        aria-label={`Delete ${job.title}`}
      >
        <Trash2 aria-hidden="true" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="text-white/50 hover:bg-white/10 hover:text-white"
        aria-label={`More actions for ${job.title}`}
      >
        <Ellipsis aria-hidden="true" />
      </Button>
    </div>
  )
}

function JobDetails({ job }: { job: ManageJob }) {
  const DepartmentIcon = iconByDepartment[job.department] ?? BriefcaseBusiness

  return (
    <div className="flex min-w-[205px] items-center gap-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-violet-300">
        <DepartmentIcon className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-xs font-semibold text-white">
          {job.title}
        </span>
        <span className="mt-1 block truncate text-[10px] text-violet-300">
          {job.department}
        </span>
      </span>
    </div>
  )
}

function JobCard({ job }: { job: ManageJob }) {
  return (
    <Card className="gap-0 border-white/[0.08] bg-[#151515] py-0 text-white">
      <CardContent className="p-4">
      <div className="flex items-start justify-between gap-3">
        <JobDetails job={job} />
        <StatusPill status={job.status} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
        <div>
          <p className="text-[10px] tracking-wide text-white/40 uppercase">
            Company &amp; location
          </p>
          <p className="mt-1 font-medium text-white/80">{job.company}</p>
          <p className="mt-1 flex items-center gap-1 text-white/45">
            <MapPin className="size-3" aria-hidden="true" />
            {job.isRemote ? "Remote · " : ""}
            {job.location}
          </p>
        </div>
        <div>
          <p className="text-[10px] tracking-wide text-white/40 uppercase">
            Type &amp; compensation
          </p>
          <p className="mt-1 text-white/80">{job.type}</p>
          <p className="mt-1 text-white/55">{formatCompensation(job)}</p>
        </div>
        <div>
          <p className="text-[10px] tracking-wide text-white/40 uppercase">
            Applicants
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-white/75">
            <Users className="size-3.5" aria-hidden="true" />
            {job.applicants} candidates
          </p>
        </div>
        <div>
          <p className="text-[10px] tracking-wide text-white/40 uppercase">
            Deadline
          </p>
          <p className="mt-1 text-white/75">{formatDeadline(job.deadline)}</p>
          <p className="mt-0.5 text-[10px] text-white/40">{job.postedLabel}</p>
        </div>
      </div>
      <div className="mt-4 border-t border-white/[0.08] pt-3">
        <JobActions job={job} />
      </div>
      </CardContent>
    </Card>
  )
}

export default function ManageJobsPage() {
  return (
    <main className="min-h-svh w-full bg-[#111111] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1395px]">
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-2 text-xs text-white/45"
        >
          <span>Manage Jobs</span>
          <span aria-hidden="true">›</span>
          <span className="text-violet-300">Job Listings &amp; Postings</span>
        </nav>

        <header className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-[34px]">
              Manage Job Posts
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
              Review live listings, monitor applicants, and update job details
              across your organization.
            </p>
          </div>
          <Button
            nativeButton={false}
            render={<Link href="/dashboard/recruiter/jobs/new" />}
            className="h-10 gap-2 bg-violet-600 px-4 text-xs text-white hover:bg-violet-500"
          >
            <span aria-hidden="true" className="text-base leading-none">
              +
            </span>
            New Job Post
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Button>
        </header>

        <section aria-label="Job postings">
          <div className="hidden overflow-x-auto rounded-xl border border-white/[0.08] bg-[#151515] lg:block">
            <Table className="min-w-[1120px] table-fixed border-collapse text-left">
              <TableHeader className="bg-[#0d0d0d]">
                <TableRow className="border-0 text-[10px] font-medium tracking-[0.08em] text-white/45 uppercase hover:bg-transparent">
                  <TableHead className="w-[22%] px-5 py-4 text-white/45">
                    Job title &amp; dept
                  </TableHead>
                  <TableHead className="w-[18%] px-3 py-4 text-white/45">
                    Company &amp; location
                  </TableHead>
                  <TableHead className="w-[9%] px-3 py-4 text-white/45">
                    Type
                  </TableHead>
                  <TableHead className="w-[12%] px-3 py-4 text-white/45">
                    Compensation
                  </TableHead>
                  <TableHead className="w-[12%] px-3 py-4 text-white/45">
                    Applicants
                  </TableHead>
                  <TableHead className="w-[8%] px-3 py-4 text-white/45">
                    Status
                  </TableHead>
                  <TableHead className="w-[10%] px-3 py-4 text-white/45">
                    Deadline
                  </TableHead>
                  <TableHead className="w-[19%] px-3 py-4 text-right text-white/45">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-white/[0.06]">
                {jobs.map((job) => (
                  <TableRow
                    key={job.id}
                    className="border-white/[0.06] hover:bg-white/[0.025]"
                  >
                    <TableCell className="px-5 py-4">
                      <JobDetails job={job} />
                    </TableCell>
                    <TableCell className="px-3 py-4">
                      <p className="truncate text-xs font-medium text-white/85">
                        {job.company}
                      </p>
                      <p className="mt-1 flex items-center gap-1 truncate text-[10px] text-white/45">
                        <MapPin
                          className="size-3 shrink-0"
                          aria-hidden="true"
                        />
                        {job.isRemote ? "Remote · " : ""}
                        {job.location}
                      </p>
                    </TableCell>
                    <TableCell className="px-3 py-4">
                      <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[10px] text-white/70">
                        {job.type}
                      </span>
                    </TableCell>
                    <TableCell className="px-3 py-4 text-[11px] text-white/75">
                      {formatCompensation(job)}
                    </TableCell>
                    <TableCell className="px-3 py-4">
                      <span className="flex items-center gap-1.5 text-[11px] whitespace-nowrap text-violet-200">
                        <Users className="size-3.5" aria-hidden="true" />
                        {job.applicants} Candidates
                      </span>
                    </TableCell>
                    <TableCell className="px-3 py-4">
                      <StatusPill status={job.status} />
                    </TableCell>
                    <TableCell className="px-3 py-4">
                      <p className="text-[11px] whitespace-nowrap text-white/75">
                        {formatDeadline(job.deadline)}
                      </p>
                      <p className="mt-1 text-[10px] text-white/35">
                        {job.postedLabel}
                      </p>
                    </TableCell>
                    <TableCell className="px-3 py-4">
                      <div className="flex justify-end">
                        <JobActions job={job} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="space-y-3 lg:hidden">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

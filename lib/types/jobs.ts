export type JobFormData = {
  title: string
  company: string
  category: string
  type: string
  location: string
  deadline: string
  currency: string
  minSalary: string
  maxSalary: string
  frequency: string
  isRemote: boolean
  responsibilities: string
  requirements: string
  benefits: string
}

// Backwards-compatible name for the create-job server action.
export type JobPostValues = JobFormData

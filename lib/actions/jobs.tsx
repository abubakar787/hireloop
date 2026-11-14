"use server"

import type { JobFormData } from "@/lib/types/jobs"

type CreateJobResult = {
  success: boolean
  message: string
}

const API_URL = (
  process.env.API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000"
).replace(/\/$/, "")

export async function createJob(data: JobFormData): Promise<CreateJobResult> {
  try {
    const response = await fetch(`${API_URL}/jobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: "no-store",
    })

    let responseData: unknown
    try {
      responseData = await response.json()
    } catch {
      responseData = null
    }

    if (!response.ok) {
      const message =
        typeof responseData === "object" &&
        responseData !== null &&
        "message" in responseData &&
        typeof responseData.message === "string"
          ? responseData.message
          : `The jobs API rejected the request (${response.status}).`

      return { success: false, message }
    }

    return { success: true, message: "Job posted successfully." }
  } catch {
    return {
      success: false,
      message:
        "Could not reach the jobs API. Check that the backend is running.",
    }
  }
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bookmark,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  CreditCard,
  FilePlus2,
  LayoutDashboard,
  Settings,
  Users,
  WalletCards,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useSession } from "@/lib/auth-client"

type DashboardRole = "seeker" | "recruiter" | "admin"

type DashboardMenuItem = {
  id: string
  name: string
  url: string
  icon: typeof LayoutDashboard
}

const menuItemsByRole: Record<DashboardRole, DashboardMenuItem[]> = {
  seeker: [
    {
      id: "dashboard",
      name: "Dashboard",
      url: "/dashboard/seekers",
      icon: LayoutDashboard,
    },
    {
      id: "jobs",
      name: "Jobs",
      url: "/dashboard/seekers/jobs",
      icon: BriefcaseBusiness,
    },
    {
      id: "saved-jobs",
      name: "Saved Jobs",
      url: "/dashboard/seekers/saved",
      icon: Bookmark,
    },
    {
      id: "applications",
      name: "Applications",
      url: "/dashboard/seekers/applications",
      icon: ClipboardList,
    },
    {
      id: "billing",
      name: "Billing",
      url: "/dashboard/seekers/billing",
      icon: CreditCard,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/seekers/settings",
      icon: Settings,
    },
  ],
  recruiter: [
    {
      id: "dashboard",
      name: "Dashboard",
      url: "/dashboard/recruiter",
      icon: LayoutDashboard,
    },
    {
      id: "company",
      name: "My Company",
      url: "/dashboard/recruiter/company",
      icon: Building2,
    },
    {
      id: "jobs",
      name: "Manage Jobs",
      url: "/dashboard/recruiter/jobs",
      icon: BriefcaseBusiness,
    },
    {
      id: "create-job",
      name: "Add Job",
      url: "/dashboard/recruiter/jobs/new",
      icon: FilePlus2,
    },
    {
      id: "applications",
      name: "Applications",
      url: "/dashboard/recruiter/applications",
      icon: ClipboardList,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/recruiter/settings",
      icon: Settings,
    },
  ],
  admin: [
    {
      id: "dashboard",
      name: "Dashboard",
      url: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      id: "users",
      name: "Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
    {
      id: "companies",
      name: "Companies",
      url: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      id: "jobs",
      name: "Jobs",
      url: "/dashboard/admin/jobs",
      icon: BriefcaseBusiness,
    },
    {
      id: "payments",
      name: "Payments",
      url: "/dashboard/admin/payments",
      icon: WalletCards,
    },
    {
      id: "settings",
      name: "Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
}

function isDashboardRole(role: unknown): role is DashboardRole {
  return role === "seeker" || role === "recruiter" || role === "admin"
}

function getDashboardRole(
  pathname: string,
  role: unknown,
  accountType: unknown
): DashboardRole {
  // Use the dashboard area being viewed so each role area has its own menu.
  // This only selects navigation; server-side authorization must protect pages.
  if (pathname.startsWith("/dashboard/admin")) return "admin"
  if (pathname.startsWith("/dashboard/recruiter")) return "recruiter"
  if (pathname.startsWith("/dashboard/seekers")) return "seeker"

  // Admin navigation requires the authorized role; signup accountType alone
  // must never grant admin access.
  if (role === "admin") return "admin"
  if (role === "recruiter" || accountType === "recruiter") return "recruiter"
  if (isDashboardRole(role)) return role
  return "seeker"
}

export function DashboardSidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()
  // Better Auth may not set `role` for a new account. Use its selected account
  // type for seeker/recruiter navigation, but never to grant admin navigation.
  const role = getDashboardRole(
    pathname,
    session?.user?.role,
    session?.user?.accountType
  )

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItemsByRole[role].map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  render={<Link href={item.url} />}
                  onClick={() => {
                    if (isMobile) setOpenMobile(false)
                  }}
                >
                  <item.icon aria-hidden="true" />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

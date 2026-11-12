import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useSession } from "@/lib/auth-client";



const menuItemsByRole = {
  seeker: [
    { name: "Browse Jobs", url: "/#jobs", icon: () => <span>🔍</span> },
  ],
  recruiter: [
    { name: "Post Job", url: "/post-job", icon: () => <span>📝</span> },
  ],
  admin: [
    { name: "Manage Users", url: "/manage-users", icon: () => <span>👥</span> },
  ]
};

export function DashboardSidebar() {
 const{data: session, isPending} = useSession();
 const role = session?.user?.role || "seeker"; // Default to "seeker" if role is undefined
    return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />

        <SidebarMenu>
          {
        // //   menuItemsByRole[role]?.map((item) => (
        // //     <SidebarMenuItem key={item.id}>
        // //       <SidebarMenuButton render={<a href={item.url} />}>
        // //         <item.icon />
        // //         <span>{item.name}</span>
        // //       </SidebarMenuButton>
        // //     </SidebarMenuItem>
        //   ))
          }
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

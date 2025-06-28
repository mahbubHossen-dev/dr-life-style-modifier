
import Link from "next/link";
import { Sidebar, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { FaCircleExclamation } from "react-icons/fa6";
export function AppSidebar() {
  return (
    <div>



      <Sidebar>

        <div className="p-4">
          <img src="/assets/logo.PNG" alt="" />
          <div className="border border-blue-600 p-3 mt-6 bg-blue-100 rounded">
            <p className="text-blue-600 text-md font-semibold flex gap-1 place-items-center"><FaCircleExclamation /> Good Afternoon Admin</p>
            <p className="text-blue-600 mt-2">Afternoon are perfect for making a patient smile</p>
          </div>
        </div>

        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard">Dashboard</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/totalPrescriptions">Total Prescriptions</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/diagnosticHistory">Diagnostic History</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/totalPatient">Total Patient</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/pendingAppointments">Pending Appointments</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/totalSupplement">Total Supplement</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/patientSupplementList">Patient Supplement List</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/adminMessage">Admin Message</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/profileSetting">Profile Setting</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>
    </div>
  );
}

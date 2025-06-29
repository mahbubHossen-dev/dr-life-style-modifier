
import Link from "next/link";
import { Sidebar, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdEmail, MdFolderCopy, MdOutlineSecurity } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

export function AppSidebar() {
  return (
    <div>
      <Sidebar>

        <div className="px-4">
          <Link href={'/'}><img src="/assets/logo.PNG" alt="" /></Link>
          <div className="border border-blue-600 p-3 mt-6 bg-blue-100 rounded">
            <p className="text-blue-600 text-md font-semibold flex gap-1 place-items-center"><FaCircleExclamation /> Good Afternoon Admin</p>
            <p className="text-blue-600 mt-2">Afternoon are perfect for making a patient smile</p>
          </div>
        </div>

        <div className="w-full mx-auto px-4 py-2">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="xl:text-lg"><FaHome className="text-[28px]" /> Dashboard</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/totalPatient" className="xl:text-lg"><FaUsers /> Total Patient</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/totalPrescriptions" className="xl:text-lg"><MdFolderCopy /> Total Prescriptions</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/diagnosticHistory" className="xl:text-lg"><IoBagAddSharp /> Diagnostic History</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>



          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/pendingAppointments" className="xl:text-lg"><IoIosList /> Pending Appointments</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/totalSupplement" className="xl:text-lg"><GiMedicines /> Total Supplement</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/patientSupplementList" className="xl:text-lg"><GiMedicines /> Patient Supplement List</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/adminMessage" className="xl:text-lg"><MdEmail /> Admin Message</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/profileSetting" className="xl:text-lg"><MdOutlineSecurity /> Profile Setting</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>
    </div>
  );
}

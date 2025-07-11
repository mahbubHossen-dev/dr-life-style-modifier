
import { AppSidebar } from "@/components/DashboardComponents/app-sidebar";
import DashNavbar from "@/components/DashboardComponents/DashNavbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="text-black cursor-pointer" />
        <div className="flex w-11/12 flex-col md:mx-8">
          <nav className="my-5">
            <AppSidebar />
          </nav>
          <main>
            <div>
              <DashNavbar />
            </div>
            <div>
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>

    </div>
  );
}
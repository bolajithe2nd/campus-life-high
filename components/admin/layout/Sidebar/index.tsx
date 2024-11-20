import { Sidebar } from "@/components/ui/sidebar";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarTop } from "./SidebarTop";
import { SidebarFooter } from "./SidebarFooter";

function AdminSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      {/* Header */}
      <SidebarTop />

      {/* Navigation */}
      <SidebarNavigation />

      {/* Footer */}
      <SidebarFooter />
    </Sidebar>
  );
}

export default AdminSidebar;

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  LogOut,
  Settings2,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarFooter as Footer,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Users, label: "Switch Role" },
  { icon: BadgeCheck, label: "Profile" },
  { icon: Settings2, label: "Account Settings" },
  { icon: Bell, label: "Notifications" },
  { icon: LogOut, label: "Log out" },
];

const UserInfo = () => (
  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
    <Avatar className="h-8 w-8 rounded-lg">
      <AvatarImage src="someurl" alt="Profile Photo" />
      <AvatarFallback className="text-primary rounded-lg">LB</AvatarFallback>
    </Avatar>
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-semibold">Lanre Bello</span>
      <span className="truncate text-xs">lanrebello@email.com</span>
    </div>
  </div>
);

const MenuItem = ({ icon: Icon, label }) => (
  <DropdownMenuItem className="gap-3 rounded-lg cursor-pointer">
    {Icon && <Icon className="w-5" />}
    {label}
  </DropdownMenuItem>
);

export function SidebarFooter() {
  return (
    <Footer>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <UserInfo />
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl bg-background border-secondary dark:bg-background dark:border-secondary"
              side="bottom"
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <UserInfo />
              </DropdownMenuLabel>

              <DropdownMenuSeparator className="bg-secondary dark:bg-secondary" />

              <DropdownMenuGroup>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                  />
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </Footer>
  );
}

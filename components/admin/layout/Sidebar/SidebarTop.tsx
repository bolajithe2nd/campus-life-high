"use client";

import IMAGES from "@/assets/images";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronsUpDown, Plus } from "lucide-react";
import React from "react";

export function SidebarTop() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarDropdown />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}

function SidebarDropdown() {
  const schools = React.useMemo(
    () => [
      "Chrisland School",
      "Chrisland Primary School",
      "Chrisland Secondary School",
      "Chrisland Pre-Degree College",
    ],
    []
  );
  const [activeSchool, setActiveSchool] = React.useState(schools[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="gap-3 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {/* Logo */}
          <img src={IMAGES.CHRISLAND_LOGO} alt="School Logo" className="w-7" />

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{activeSchool}</span>
            <span className="truncate text-xs">Show forth the light</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="start"
        side="bottom"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Schools
        </DropdownMenuLabel>
        {schools.map((school) => (
          <DropdownMenuItem
            key={school}
            onClick={() => setActiveSchool(school)}
            className="gap-2 p-2"
          >
            {school}
            <DropdownMenuShortcut>
              ⌘{schools.indexOf(school) + 1}
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 p-2">
          <div className="flex size-6 items-center justify-center rounded-md border bg-background">
            <Plus className="size-4" />
          </div>
          <div className="font-medium text-muted-foreground">Add school</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

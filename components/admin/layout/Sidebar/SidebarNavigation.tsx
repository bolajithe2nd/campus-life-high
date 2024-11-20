"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

import { navigationLinks } from "@/lib/admin/navigationLinks";
import { RenderLink } from "./RenderLink";

export function SidebarNavigation() {
  return (
    <SidebarContent>
      {navigationLinks?.length > 0 &&
        navigationLinks.map((link, index) =>
          link.sublinks?.length ? (
            <SidebarGroup key={`${link.title}-${index}`}>
              <SidebarGroupLabel className="text-muted-foreground">
                {link.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {link.sublinks.map((sublink, subIndex) => (
                    <RenderLink
                      key={`${sublink.title}-${subIndex}`}
                      title={sublink.title}
                      icon={sublink.icon}
                      path={sublink.path}
                      notifications={sublink.notifications ?? false}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : null
        )}
    </SidebarContent>
  );
}

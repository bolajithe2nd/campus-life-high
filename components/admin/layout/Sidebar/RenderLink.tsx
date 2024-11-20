import Link from "next/link";
import { Sublink } from "@/types";
import { usePathname } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const Indicator = () => <span className="bg-red-500 h-2 w-2 rounded-full" />;

export const RenderLink: React.FC<Sublink> = ({
  title,
  icon,
  path,
  notifications,
}) => {
  const pathname = usePathname();
  const Icon = icon;

  // Check if the current pathname starts with the link path
  const isActive = path && pathname.startsWith(path);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className="rounded-lg hover:text-primary"
        tooltip={title}
        asChild
      >
        <Link
          href={path || "/admin"}
          className={`flex items-center justify-between 
            hover:text-primary 
            dark:hover:text-primary 
            transition-colors duration-200 ease-in-out 
            ${isActive ? "bg-secondary text-primary" : ""}
          `}
        >
          <div className="flex items-center gap-x-3">
            <Icon className={`w-5 ${isActive ? "text-primary" : ""}`} />
            <span>{title}</span>
          </div>

          {notifications && <Indicator />}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

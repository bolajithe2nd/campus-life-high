import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import Abbreviation from "../studentList/Abbreviation";

type Props = {
  name: string;
  id: string;
  abbreviation: string;
};

const ProfileCard: React.FC<Props> = ({ name, id, abbreviation }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-between gap-4">
          {/* Student's profile picture */}
          <div className="flex items-center gap-3">
            {/* Profile */}
            <Abbreviation text={abbreviation} />
            <div className="grid gap-2 flex-1 text-left leading-tight">
              <span className="truncate font-medium text-lg">{name}</span>
              <span className="truncate text-muted-foreground">
                Student ID: #{id}
              </span>
            </div>
          </div>

          {/* Profile dropdown */}
          <ChevronsUpDown className="w-5 h-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileCard;

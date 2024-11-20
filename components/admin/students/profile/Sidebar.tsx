import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Calendar,
  User,
  Users,
  Stethoscope,
} from "lucide-react";
import { Student } from "@/types";
import Abbreviation from "../studentList/Abbreviation";
import { TabButton } from "./TabButton";
import { Dispatch, SetStateAction } from "react";
import { useFormattedDate } from "@/hooks/useFormattedDate";

interface SidebarProps {
  student: Student;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export function Sidebar({ student, activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { name: "Personal", icon: <User className="w-5 h-5" /> },
    { name: "Medical", icon: <Stethoscope className="w-5 h-5" /> },
    { name: "Parent/Guardian(s)", icon: <Users className="w-5 h-5" /> },
    { name: "Academics", icon: <GraduationCap className="w-5 h-5" /> },
  ];

  const tags = [
    {
      value: student?.currentClass?.name,
      icon: <GraduationCap className="w-4 h-4 mr-2" />,
    },
    {
      value: useFormattedDate(student?.dateRegistered),
      icon: <Calendar className="w-4 h-4 mr-2" />,
    },
    { value: student?.status, icon: <User className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="sticky top-0 grid gap-y-6 content-start h-fit">
      {/* Student Details */}
      <div className="grid gap-y-4 p-5 border-b border-b-secondary">
        <div className="grid gap-y-4">
          <Abbreviation text={student?.abbreviation} />
          <div className="grid flex-1 text-left leading-tight">
            <span className="truncate font-medium text-2xl">{`${student?.firstname} ${student?.lastname}`}</span>
            <span className="truncate text-muted-foreground text-sm">
              Student ID: #{student?.username}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center justify-start flex-wrap gap-x-2 gap-y-3">
          {tags.map((tag) => (
            <Badge key={tag.value} variant="secondary" className="py-1">
              {tag.icon}
              <span>{tag.value}</span>
            </Badge>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <TabButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
    </div>
  );
}

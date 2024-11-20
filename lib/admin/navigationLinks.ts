import { NavigationLink } from "@/types";
import {
  RiAdminLine,
  RiBankCardLine,
  RiCalculatorLine,
  RiCalendarCheckLine,
  RiCalendarTodoLine,
  RiDashboardLine,
  RiFundsBoxLine,
  RiGroupLine,
  RiHistoryLine,
  RiParentLine,
  RiTeamLine,
  RiUser2Line,
  RiUserVoiceLine,
  RiDonutChartFill,
  RiBookLine,
  RiFileListLine,
  RiSettings4Line,
  RiNotification3Line,
  RiCalendarEventLine,
  RiMedalLine,
} from "@remixicon/react";

export const navigationLinks: NavigationLink[] = [
  {
    title: "Dashboard",
    sublinks: [
      {
        title: "Overview",
        path: "/admin/overview",
        icon: RiDashboardLine,
      },
      {
        title: "Analytics",
        path: "/admin/analytics",
        icon: RiDonutChartFill,
      },
    ],
  },
  {
    title: "Users Management",
    sublinks: [
      {
        title: "Students",
        path: "/admin/students",
        icon: RiTeamLine,
        notifications: true,
      },
      {
        title: "Teachers",
        path: "/admin/teachers",
        icon: RiUserVoiceLine,
      },
      {
        title: "Parents",
        path: "/admin/parents",
        icon: RiParentLine,
      },
      {
        title: "Staff",
        path: "/admin/staff",
        icon: RiUser2Line,
      },
      {
        title: "Administrators",
        path: "/admin/administrators",
        icon: RiAdminLine,
      },
    ],
  },
  {
    title: "Academic Management",
    sublinks: [
      {
        title: "Classrooms",
        path: "/admin/classrooms",
        icon: RiGroupLine,
      },
      {
        title: "Subjects",
        path: "/admin/subjects",
        icon: RiCalculatorLine,
      },
      {
        title: "Timetable",
        icon: RiCalendarTodoLine,
        path: "/admin/timetable",
      },
      {
        title: "Attendance",
        path: "/admin/attendance",
        icon: RiCalendarCheckLine,
      },
      {
        title: "Curriculum",
        path: "/admin/curriculum",
        icon: RiBookLine,
      },
      {
        title: "Examinations",
        path: "/admin/examinations",
        icon: RiFileListLine,
      },
    ],
  },
  {
    title: "Finance Management",
    sublinks: [
      {
        title: "Financial Dashboard",
        path: "/admin/finance-dashboard",
        icon: RiFundsBoxLine,
        notifications: true,
      },
      {
        title: "Payment History",
        path: "/admin/payment-history",
        icon: RiHistoryLine,
      },
      {
        title: "Fee Management",
        path: "/admin/fee-management",
        icon: RiBankCardLine,
      },
    ],
  },
  {
    title: "School Activities",
    sublinks: [
      {
        title: "Events Calendar",
        path: "/admin/events",
        icon: RiCalendarEventLine,
      },
      {
        title: "Announcements",
        path: "/admin/announcements",
        icon: RiNotification3Line,
        notifications: true,
      },
      {
        title: "Achievement Records",
        path: "/admin/achievements",
        icon: RiMedalLine,
      },
    ],
  },
  {
    title: "System Settings",
    sublinks: [
      {
        title: "General Settings",
        path: "/admin/settings",
        icon: RiSettings4Line,
      },
    ],
  },
];

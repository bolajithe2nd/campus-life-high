"use client";

import {
  Archive,
  Calendar,
  CalendarDays,
  Castle,
  Dna,
  House,
  MapPinCheckInside,
  MapPinHouse,
  MapPinned,
  School,
  UserCheck,
  UserRound,
  UserRoundPen,
  UsersRound,
} from "lucide-react";
import React, { ReactNode } from "react";
import Detail from "../studentList/Detail";

interface DetailItem {
  title: string;
  value?: string;
  icon?: ReactNode;
}

interface Section {
  title: string;
  details: DetailItem[];
}

const sections: Section[] = [
  {
    title: "Personal Information",
    details: [
      {
        title: "Other name",
        value: "Abdulmalik",
        icon: <UserRound className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Class",
        value: "SSS1",
        icon: <School className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Gender",
        value: "Male",
        icon: <Dna className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Date of birth",
        value: "July 21, 2005",
        icon: <CalendarDays className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Previous school attended",
        value: "",
        icon: <Archive className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Date registered",
        value: "February 15, 2022",
        icon: <Calendar className="text-muted-foreground w-4 h-4" />,
      },
    ],
  },
  {
    title: "Address Information",
    details: [
      {
        title: "House Address",
        value: "2A Gbadebo Street, Off Omilani",
        icon: <House className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "LGA",
        value: "Surulere",
        icon: <MapPinned className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "State of residence",
        value: "Lagos State",
        icon: <MapPinHouse className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "State Of Origin",
        value: "Oyo state",
        icon: <Castle className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "LGA",
        value: "Ilorin-West",
        icon: <MapPinCheckInside className="text-muted-foreground w-4 h-4" />,
      },
    ],
  },
  {
    title: "Father's Information",
    details: [
      {
        title: "Father's first name",
        value: "Abdulrahman",
        icon: <UsersRound className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Father's last name",
        value: "Olatunji",
        icon: <UserCheck className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Father's other name",
        value: "Kolawole",
        icon: <UserRoundPen className="text-muted-foreground w-4 h-4" />,
      },
    ],
  },
  {
    title: "Mother's Information",
    details: [
      {
        title: "Mother's first name",
        value: "Amina",
        icon: <UsersRound className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Mother's last name",
        value: "Olatunji",

        icon: <UserCheck className="text-muted-foreground w-4 h-4" />,
      },
      {
        title: "Mother's other name",
        value: "Aderonke",
        icon: <UserRoundPen className="text-muted-foreground w-4 h-4" />,
      },
    ],
  },
];

const DetailSections: React.FC = () => {
  return (
    <div className="grid gap-y-12">
      {sections.map((section) => (
        <>
          <div
            key={section.title}
            className="grid gap-y-4 border-t border-t-secondary py-4"
          >
            <p className="font-medium">{section.title}</p>
            <div className="grid gap-y-2">
              {section.details.map((detail, index) => (
                <Detail
                  key={index}
                  title={detail.title}
                  value={detail.value}
                  icon={detail.icon}
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DetailSections;

import React from "react";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import { Student } from "@/types";
import InformationDisplay from "../InformationDisplay";

interface Props {
  student: Student;
}

const Academics: React.FC<Props> = ({ student }) => {
  const sections = [
    {
      title: "Academic Details",
      description: "This section contains academic details about the student.",
      items: [
        { label: "Enrollment number", value: student?.username },
        {
          label: "Current class",
          value: student?.currentClass
            ? `${student?.currentClass?.name}${
                student?.currentClass?.division
                  ? ` (${student?.currentClass?.division})`
                  : ""
              }`
            : "N/A",
        },
        {
          label: "Registered on",
          value: useFormattedDate(student?.dateRegistered),
        },
        {
          label: "Previous school attended",
          value: student?.previousSchoolAttended || "N/A",
        },
      ],
    },

    // {
    //   title: "Attendance and Performance",
    //   description:
    //     "This section contains attendance and performance information.",
    //   items: [
    //     { label: "Total Attendance", value: student.attendance.total || "N/A" },
    //     {
    //       label: "Attendance Percentage",
    //       value: student.attendance.percentage
    //         ? `${student.attendance.percentage}%`
    //         : "N/A",
    //     },
    //     { label: "Last Exam Score", value: student.lastExamScore || "N/A" },
    //   ],
    // },
    // {
    //   title: "Extracurricular Activities",
    //   description:
    //     "This section contains information about extracurricular involvement.",
    //   items: [
    //     { label: "Clubs/Societies", value: student.clubs?.join(", ") || "N/A" },
    //     { label: "Sports Activities", value: student.sports || "N/A" },
    //     { label: "Awards", value: student.awards?.join(", ") || "N/A" },
    //   ],
    // },
  ];

  return <InformationDisplay sections={sections} />;
};

export default Academics;

import React from "react";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import { Student } from "@/types";
import InformationDisplay from "../InformationDisplay";

interface Props {
  student: Student;
}

const PersonalInformation: React.FC<Props> = ({ student }) => {
  const sections = [
    {
      title: "Personal Information",
      description: "This section contains personal details about the student.",
      items: [
        { label: "First name", value: student?.firstname },
        { label: "Last name", value: student?.lastname },
        { label: "Other name", value: student?.othername || "N/A" },
        { label: "Gender", value: student?.gender },
        {
          label: "Date of birth",
          value: useFormattedDate(student?.dateOfBirth) || "N/A",
        },
        { label: "Phone number", value: student?.phoneNumber || "N/A" },
        { label: "Email", value: student?.email || "N/A" },
      ],
    },
    {
      title: "Address/State Of Origin",
      description: "This section contains address details about the student.",
      items: [
        { label: "House Address", value: student?.address?.houseAddress },
        {
          label: "State of residence",
          value: student?.address?.stateOfResidence,
        },
        {
          label: "Local government area (LGA)",
          value: student.address.lgaOfHouse,
        },
        {
          label: "State of origin",
          value: student?.origin?.stateOfOrigin || "N/A",
        },
        {
          label: "LGA of origin",
          value: student?.origin?.lgaOfOrigin,
        },
      ],
    },
  ];

  return <InformationDisplay sections={sections} />;
};

export default PersonalInformation;

import { Student } from "@/types";
import React from "react";
import InformationDisplay from "../InformationDisplay";

interface Props {
  student: Student;
}

const Medical: React.FC<Props> = ({ student }) => {
  const sections = [
    {
      title: "Medical Information",
      description: "This section contains medical details about the student.",
      items: [
        {
          label: "Blood type",
          value: student.medicalInformation?.bloodType || "N/A",
        },
        {
          label: "Genotype",
          value: student.medicalInformation?.genotype || "N/A",
        },
        {
          label: "Allergies",
          value: student.medicalInformation?.allergies?.length
            ? student.medicalInformation.allergies.join(", ")
            : "N/A",
        },
        {
          label: "Medical history",
          value: student.medicalInformation?.medicalHistory?.length
            ? student.medicalInformation.medicalHistory.join(", ")
            : "N/A",
        },
        {
          label: "Current medication",
          value: student.medicalInformation?.currentMedications?.length
            ? student.medicalInformation.currentMedications.join(", ")
            : "N/A",
        },
      ],
    },
    {
      title: "Emergency Contact",
      description:
        "This section contains emergency contact details about the student.",
      items: [
        {
          label: "Name",
          value: student.emergencyContact?.name,
        },
        {
          label: "Relationship",
          value: student.emergencyContact?.relationship,
        },
        {
          label: "Phone number",
          value: student.emergencyContact?.phonenumber,
        },
      ],
    },
  ];

  return <InformationDisplay sections={sections} />;
};

export default Medical;

import React from "react";
import { Student } from "@/types";
import InformationDisplay from "../InformationDisplay";

interface Props {
  student: Student;
}

const ParentGuardian: React.FC<Props> = ({ student }) => {
  const sections =
    student.guardians.length > 0
      ? student.guardians.map((guardian) => ({
          title: `${guardian.relationship}'s Information`,
          description: `Details about the student's ${guardian.relationship.toLowerCase()}.`,
          items: [
            {
              label: "First name",
              value: guardian.firstname,
            },
            {
              label: "Last name",
              value: guardian.lastname,
            },
            {
              label: "Other name",
              value: guardian.othername || "N/A",
            },
            {
              label: "Phone number",
              value: guardian.phoneNumber,
            },
            {
              label: "Relationship",
              value: guardian.relationship,
            },
          ],
        }))
      : [
          {
            title: "Parent/Guardian(s) Information",
            description: "No parent or guardian information available.",
            items: [],
          },
        ];

  return <InformationDisplay sections={sections} />;
};

export default ParentGuardian;

import { Student } from "@/types";
import PersonalInformation from "./tabs/PersonalInformation";
import ParentGuardian from "./tabs/ParentGuardian";
import Medical from "./tabs/Medical";
import Academics from "./tabs/Academics";

interface TabContentRendererProps {
  activeTab: number;
  student: Student;
}

export function TabContentRenderer({
  activeTab,
  student,
}: TabContentRendererProps) {
  switch (activeTab) {
    case 1:
      return <PersonalInformation student={student} />;
    case 2:
      return <Medical student={student} />;
    case 3:
      return <ParentGuardian student={student} />;
    case 4:
      return <Academics student={student} />;
    default:
      return <div>Invalid tab selected.</div>;
  }
}

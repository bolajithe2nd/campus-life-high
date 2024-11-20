"use client";

import { Separator } from "@/components/ui/separator";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import { Student } from "@/types";
import { Calendar, Dna, School, UserRound } from "lucide-react";
import Abbreviation from "./Abbreviation";
import Detail from "./Detail";
import Pill from "./Pill";
import { StudentProfileDialog } from "../profile/StudentProfileDialog";
import { Button } from "@/components/ui/button";

const StudentCard = ({ student }: { student: Student }) => {
  return (
    <div className="grid gap-y-8 border bg-container py-8 px-6 rounded-3xl motion-preset-blur-up-md">
      {/*=== Item 1 ===*/}
      <div className="grid gap-y-4 place-items-center">
        <Abbreviation text={student.abbreviation} />
        <div className="grid gap-y-2 place-items-center">
          <div className="text-xl font-medium">
            {student.firstname} {student.lastname}
          </div>
          <Pill text={student.username} />
        </div>
      </div>

      {/*=== Item 2 ===*/}
      <div>
        <Separator className="h-[1.5px] mb-4" />
        <div className="grid gap-2">
          <Detail
            title="Other name"
            value={student.othername}
            icon={<UserRound className="text-muted-foreground w-4 h-4" />}
          />
          <Detail
            title="Class"
            value={
              student.currentClass
                ? `${student.currentClass.name}${
                    student.currentClass.division
                      ? ` (${student.currentClass.division})`
                      : ""
                  }`
                : "N/A"
            }
            icon={<School className="text-muted-foreground w-4 h-4" />}
          />

          <Detail
            title="Gender"
            value={student.gender}
            icon={<Dna className="text-muted-foreground w-4 h-4" />}
          />
          <Detail
            title="Registered on"
            value={useFormattedDate(student.dateRegistered)}
            icon={<Calendar className="text-muted-foreground w-4 h-4" />}
          />
        </div>
      </div>

      {/*=== Item 3 ===*/}
      <div className="flex items-center flex-wrap gap-x-4 gap-y-6">
        <Button variant="outline" className="flex-1 bg-transparent">
          Edit profile
        </Button>
        <StudentProfileDialog student={student} />
      </div>
    </div>
  );
};

export default StudentCard;

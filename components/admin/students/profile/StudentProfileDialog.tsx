"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Student } from "@/types";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TabContentRenderer } from "./TabContentRenderer";
import { Button } from "@/components/ui/button";

interface StudentProfileDialogProps {
  student: Student;
  trigger?: React.ReactNode;
}

export function StudentProfileDialog({
  student,
  trigger,
}: StudentProfileDialogProps) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button className="flex-1">View Profile</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[70%] lg:h-[95%] bg-sidebar p-0">
        <div className="grid grid-cols-1 overflow-y-scroll lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <Sidebar
            student={student}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Main content */}
          <div className="relative">
            <TabContentRenderer activeTab={activeTab} student={student} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

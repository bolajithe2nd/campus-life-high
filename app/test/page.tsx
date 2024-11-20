"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Book,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
} from "lucide-react";

export default function Component() {
  const [open, setOpen] = useState(false);

  const studentData = {
    name: "Sarah Johnson",
    id: "SJ2023001",
    avatar: "/placeholder.svg?height=100&width=100",
    major: "Computer Science",
    gpa: "3.8",
    year: "Junior",
    email: "sarah.johnson@university.edu",
    phone: "(555) 123-4567",
    address: "123 Campus Drive, College Town, ST 12345",
    enrollmentDate: "September 1, 2021",
    courses: [
      "Advanced Algorithms",
      "Database Systems",
      "Web Development",
      "Artificial Intelligence",
    ],
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">View Student Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Student Profile</DialogTitle>
          <DialogDescription>Details for {studentData.name}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="flex flex-col items-center mb-4">
            <Avatar className="w-24 h-24 mb-2">
              <AvatarImage src={studentData.avatar} alt={studentData.name} />
              <AvatarFallback>
                {studentData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{studentData.name}</h2>
            <p className="text-sm text-muted-foreground">
              Student ID: {studentData.id}
            </p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Academic Information
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  <span>{studentData.major}</span>
                </div>
                <div className="flex items-center">
                  <Book className="mr-2 h-4 w-4" />
                  <span>GPA: {studentData.gpa}</span>
                </div>
              </div>
              <p className="mt-2">Year: {studentData.year}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Contact Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>{studentData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>{studentData.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{studentData.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Enrollment</h3>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{studentData.enrollmentDate}</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Current Courses</h3>
              <div className="flex flex-wrap gap-2">
                {studentData.courses.map((course, index) => (
                  <Badge key={index} variant="secondary">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

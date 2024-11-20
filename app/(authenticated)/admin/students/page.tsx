"use client";

import ScrollToTop from "@/components/admin/students/ScrollToTop";
import StudentList from "@/components/admin/students/studentList/StudentList";
import StudentStats from "@/components/admin/students/StudentStats";
import Top from "@/components/admin/students/Top";
import { useFetchStudentsAndClasses } from "@/hooks/admin";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data, isLoading, error } = useFetchStudentsAndClasses();

  const [totalNoOfStudents, setTotalNoOfStudents] = useState<number>();
  const [totalNoOfRegisteredStudents, setTotalNoOfRegisteredStudents] =
    useState<number>();
  const [totalNoOfInactiveStudents, setTotalNoOfInactiveStudents] =
    useState<number>();
  const [totalNoOfGraduatedStudents, setTotalNoOfGraduatedStudents] =
    useState<number>();

  useEffect(() => {
    if (data?.students) {
      const { students } = data;
      const registeredStudents = students.filter(
        (student) => student.status === "Active"
      );
      const inactiveStudents = students.filter(
        (student) => student.status === "Inactive"
      );
      const graduatedStudents = students.filter(
        (student) => student.status === "Graduated"
      );

      setTotalNoOfStudents(students.length);
      setTotalNoOfRegisteredStudents(registeredStudents.length);
      setTotalNoOfInactiveStudents(inactiveStudents.length);
      setTotalNoOfGraduatedStudents(graduatedStudents.length);
    }

    return () => {
      setTotalNoOfRegisteredStudents(0);
      setTotalNoOfInactiveStudents(0);
    };
  }, [data]);

  return (
    <>
      <div className="grid gap-y-32">
        <div className="grid gap-y-8">
          {/* Top */}
          <Top />

          {/* Stats */}
          <StudentStats
            isLoading={isLoading}
            totalNoOfStudents={totalNoOfStudents}
            totalNoOfRegisteredStudents={totalNoOfRegisteredStudents}
            totalNoOfInactiveStudents={totalNoOfInactiveStudents}
            totalNoOfGraduatedStudents={totalNoOfGraduatedStudents}
          />
        </div>

        {/* Student List */}
        <StudentList data={data} isLoading={isLoading} error={error} />
      </div>

      <ScrollToTop />
    </>
  );
};

export default React.memo(Page);

// page.tsx
"use client";
import Title from "@/components/admin/layout/Title";
import { useFetchStudents } from "@/hooks/admin";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const Page = () => {
  const { data: students } = useFetchStudents();
  return (
    <div className="grid">
      <Title>Teachers</Title>
      <div className="">
        <DataTable columns={columns} data={students} />
      </div>
    </div>
  );
};

export default React.memo(Page);

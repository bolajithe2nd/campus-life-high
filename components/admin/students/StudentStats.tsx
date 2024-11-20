import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { UserCheck2, UserMinus2, UserPlus2Icon, Users2 } from "lucide-react";
import React from "react";

type StatsFunctionProps = {
  totalNoOfStudents: number;
  totalNoOfRegisteredStudents: number;
  totalNoOfInactiveStudents: number;
  totalNoOfGraduatedStudents: number;
  isLoading: boolean;
};

type StatProps = {
  title: string;
  icon: React.ReactNode;
  value: number;
  change?: string;
};

export default function StudentStats(props: StatsFunctionProps): JSX.Element {
  const stats: StatProps[] = [
    {
      title: "Total Students",
      icon: <Users2 className="h-6 w-6 text-primary" />,
      value: props.totalNoOfStudents,
      change: "+20.1% from last month",
    },
    {
      title: "Active Students",
      icon: <UserPlus2Icon className="h-6 w-6 text-primary" />,
      value: props.totalNoOfRegisteredStudents,
      change: "+20.1% from last month",
    },
    {
      title: "Inactive Students",
      icon: <UserMinus2 className="h-6 w-6 text-primary" />,
      value: props.totalNoOfInactiveStudents,
      change: "+180.1% from last month",
    },
    {
      title: "Graduated Students",
      icon: <UserCheck2 className="h-6 w-6 text-primary" />,
      value: props.totalNoOfGraduatedStudents,
      change: "+190 since last week",
    },
  ];

  if (props.isLoading) {
    return (
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <Skeleton className="border bg-container h-[130px] w-full rounded-3xl" />
        <Skeleton className="border bg-container h-[130px] w-full rounded-3xl" />
        <Skeleton className="border bg-container h-[130px] w-full rounded-3xl" />
        <Skeleton className="border bg-container h-[130px] w-full rounded-3xl" />
      </div>
    );
  }
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      {/* Stats Cards */}
      {stats.map((cardData, index) => (
        <Card key={index} className="bg-container">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {cardData.title}
            </CardTitle>
            {cardData.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cardData.value}</div>
            <p className="text-xs text-muted-foreground">{cardData.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

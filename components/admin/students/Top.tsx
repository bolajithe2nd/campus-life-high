import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Top() {
  return (
    <div className="flex flex-wrap gap-6 justify-between items-center">
      <div className="grid gap-y-2">
        <h2 className="text-3xl font-medium tracking-tight">Your Students</h2>
        <p className="text-muted-foreground lg:max-w-[80%]">
          Manage your students, view their profiles, and track their progress.
        </p>
      </div>

      <Button asChild>
        <Link href="/students/register">
          <Plus className="w-5 h-5" strokeWidth={2} />
          Register a new student
        </Link>
      </Button>
    </div>
  );
}

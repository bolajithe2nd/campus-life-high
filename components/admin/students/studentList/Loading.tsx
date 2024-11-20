import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid gap-y-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center flex-wrap gap-3 order-last lg:order-first">
          <Skeleton className="border bg-[#FBFAF8]/50 dark:bg-secondary/50 w-20 h-9 lg:w-36 rounded-xl" />
          <Skeleton className="border bg-[#FBFAF8]/50 dark:bg-secondary/50 w-20 h-9 lg:w-36 rounded-xl" />
          <Skeleton className="border bg-[#FBFAF8]/50 dark:bg-secondary/50 w-20 h-9 lg:w-36 rounded-xl" />
        </div>
        <Skeleton className="border bg-[#FBFAF8]/50 dark:bg-secondary/50 h-9 w-full md:w-60 rounded-xl" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton
            key={index}
            className="border bg-[#FBFAF8]/50 dark:bg-secondary/50 h-[400px] w-full rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;

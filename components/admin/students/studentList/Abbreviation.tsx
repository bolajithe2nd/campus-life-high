"use client";

import React from "react";

const Abbreviation = React.memo(({ text }: { text: string }) => {
  const colors = [
    "bg-green-500/90 dark:bg-green-500/30",
    "bg-yellow-500/90 dark:bg-yellow-500/30",
    "bg-purple-500/90 dark:bg-purple-500/30",
    "bg-orange-500/90 dark:bg-orange-500/30",
    "bg-red-500/90 dark:bg-red-500/30",
    "bg-blue-500/90 dark:bg-blue-500/30",
    "bg-pink-500/90 dark:bg-pink-500/30",
    "bg-teal-500/90 dark:bg-teal-500/30",
    "bg-indigo-500/90 dark:bg-indigo-500/30",
    "bg-cyan-500/90 dark:bg-cyan-500/30",
    "bg-lime-500/90 dark:bg-lime-500/30",
    "bg-amber-500/90 dark:bg-amber-500/30",
    "bg-fuchsia-500/90 dark:bg-fuchsia-500/30",
    "bg-rose-500/90 dark:bg-rose-500/30",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <div
        className={`h-16 w-16 grid place-items-center rounded-2xl ${randomColor}`}
      >
        <div className="text-xl font-bold text-white">{text}</div>
      </div>
    </>
  );
});

Abbreviation.displayName = "Abbreviation";

export default Abbreviation;

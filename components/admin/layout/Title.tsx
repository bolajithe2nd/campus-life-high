"use client";

import React from "react";

const Title = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`text-4xl font-semibold text-gray-800 dark:text-white ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;

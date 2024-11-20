"use client";
import React, { ReactNode } from "react";

interface DetailProps {
  title: string;
  value?: string;
  icon?: ReactNode; // Accept icon as a ReactNode instead of a function
}

const Detail: React.FC<DetailProps> = ({ title, value, icon }) => (
  <div className="flex items-start justify-between gap-4 text-sm">
    <div className="flex items-center space-x-2">
      {icon && <span>{icon}</span>}
      <span className="text-muted-foreground">{title}:</span>
    </div>
    <span className="font-medium text-right">{value || "N/A"}</span>
  </div>
);

export default Detail;

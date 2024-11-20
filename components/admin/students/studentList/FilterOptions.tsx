"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { classes } from "@/lib/dummy-data/classes";
import SortFilter from "./SortFilter";
import { useState, useEffect } from "react";

type Props = {
  resultCount: number | string;
  onSearch: (value: string) => void;
  onSortByClass: (value: string) => void;
  onSortByDivision: (value: string) => void;
  onSortByGender: (value: string) => void;
  onSortByDateRegistered: (value: string) => void;
  defaultSearchTerm?: string;
  defaultSortByClass?: string;
  defaultSortByDivision?: string;
  defaultSortByGender?: string;
  defaultSortByDateRegistered?: string;
};

const FilterOptions: React.FC<Props> = ({
  resultCount,
  onSearch,
  onSortByClass,
  onSortByDivision,
  onSortByGender,
  onSortByDateRegistered,
  defaultSearchTerm = "",
  defaultSortByClass = "all",
  defaultSortByDivision = "all",
  defaultSortByGender = "all",
  defaultSortByDateRegistered = "asc",
}) => {
  const [selectedClass, setSelectedClass] =
    useState<string>(defaultSortByClass);
  const [selectedDivision, setSelectedDivision] = useState<string>(
    defaultSortByDivision
  ); // Track the selected division
  const [divisionOptions, setDivisionOptions] = useState<
    { value: string; label: string }[]
  >([]);

  // Update division options whenever the selected class changes
  useEffect(() => {
    if (selectedClass === "all") {
      setDivisionOptions([
        { value: "all", label: "All" },
        ...classes.flatMap(
          (classItem) =>
            classItem.divisions?.map((division) => ({
              label: `${classItem.name}(${division})`,
              value: `${classItem.name}(${division})`,
            })) || []
        ),
      ]);
    } else {
      const selectedClassObj = classes.find(
        (classItem) => classItem.name === selectedClass
      );
      const divisions =
        selectedClassObj?.divisions?.map((division) => ({
          label: division,
          value: division,
        })) || [];

      setDivisionOptions([{ value: "all", label: "All" }, ...divisions]);
    }
  }, [selectedClass]);

  return (
    <div className="flex items-center justify-between gap-4 flex-wrap lg:sticky top-20 z-10">
      {/*=== Filters ===*/}
      <div className="flex items-center flex-wrap gap-3 order-last lg:order-first">
        <SortFilter
          label="Sort by class"
          placeholder="Sort by class"
          options={[
            { value: "all", label: "All" },
            ...classes.map((classItem) => ({
              value: classItem.name,
              label: classItem.name,
            })),
          ]}
          onChange={(value) => {
            setSelectedDivision("all"); // Reset the division state first
            setSelectedClass(value); // Then update the class state
            onSortByDivision("all"); // Notify parent of division reset
            onSortByClass(value); // Notify parent of class change
          }}
          defaultValue={defaultSortByClass}
        />

        <SortFilter
          label="Sort by division"
          placeholder="Sort by division"
          options={divisionOptions}
          onChange={(value) => {
            setSelectedDivision(value); // Update the selected division
            onSortByDivision(value); // Notify parent component
          }}
          defaultValue={selectedDivision}
        />

        <SortFilter
          label="Sort by gender"
          placeholder="Sort by gender"
          options={[
            { value: "all", label: "All" },
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Other", label: "Other" },
          ]}
          onChange={onSortByGender}
          defaultValue={defaultSortByGender}
        />

        <SortFilter
          label="Sort by date registered"
          placeholder="Sort by date"
          options={[
            { value: "asc", label: "Oldest" },
            { value: "desc", label: "Newest" },
          ]}
          onChange={onSortByDateRegistered}
          defaultValue={defaultSortByDateRegistered}
        />
      </div>

      {/*=== Search field ===*/}
      <div className="grid gap-y-1">
        <Label className="text-muted-foreground text-sm">
          Results: {resultCount}
        </Label>
        <div className="relative">
          <Input
            id="input-26"
            className="peer ps-9 rounded-xl bg-background/50 bg-opacity-50 backdrop-blur-md w-[340px] h-10"
            placeholder="Search..."
            type="search"
            onChange={(e) => onSearch(e.target.value)}
            defaultValue={defaultSearchTerm}
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <Search size={20} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;

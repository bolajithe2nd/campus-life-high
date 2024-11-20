"use client";

import useDebounce from "@/hooks/useDebounce";
import { Class, Student } from "@/types";
import { useCallback, useMemo, useState } from "react";
import StudentCard from "./StudentCard";
import { Button } from "@/components/ui/button";
import Loading from "./Loading";
import FilterOptions from "./FilterOptions";

type DataProps = {
  students: Student[] | null;
  classes: Class[] | null;
};

type StudentListProp = {
  data: DataProps;
  isLoading: boolean;
  error: Error;
};

type Filters = {
  searchTerm: string;
  sortByClass: "all" | string;
  sortByDivision: "all" | string;
  sortByGender: "all" | string;
  sortByDateRegistered: "asc" | "desc";
};

const StudentList: React.FC<StudentListProp> = ({ data, isLoading, error }) => {
  const batchSize = 12;
  const [filters, setFilters] = useState<Filters>({
    searchTerm: "",
    sortByClass: "all",
    sortByDivision: "all",
    sortByGender: "all",
    sortByDateRegistered: "asc",
  });

  const [displayedStudents, setDisplayedStudents] = useState(batchSize);
  const debouncedSearchTerm = useDebounce(filters.searchTerm, 300);

  const filteredStudents = useMemo(() => {
    if (!data?.students) return [];

    return data.students
      .filter((student) => {
        // Filter by search term
        const fullName =
          `${student.firstname} ${student.lastname}`.toLowerCase();
        const otherName = student.othername?.toLowerCase() || "";
        const username = student.username?.toLowerCase() || "";
        const searchTerm = debouncedSearchTerm.toLowerCase();

        return (
          fullName.includes(searchTerm) ||
          otherName.includes(searchTerm) ||
          username.includes(searchTerm)
        );
      })
      .filter((student) => {
        // Filter by class
        const studentClass = student.currentClass?.name?.toLowerCase() || "";
        return (
          filters.sortByClass === "all" ||
          studentClass === filters.sortByClass.toLowerCase()
        );
      })
      .filter((student) => {
        // Filter by division
        const studentDivision =
          student.currentClass?.division?.toLowerCase() || "";
        if (filters.sortByDivision === "all") return true;
        if (filters.sortByClass !== "all") {
          return studentDivision == filters.sortByDivision.toLowerCase();
        }
        return true;
      })
      .filter((student) => {
        // Filter by gender
        const studentGender = student.gender?.toLowerCase() || "";
        return (
          filters.sortByGender === "all" ||
          studentGender === filters.sortByGender.toLowerCase()
        );
      })
      .sort((a, b) => {
        // Sort by date registered
        const dateA = a.dateRegistered
          ? new Date(a.dateRegistered).getTime()
          : 0;
        const dateB = b.dateRegistered
          ? new Date(b.dateRegistered).getTime()
          : 0;

        return filters.sortByDateRegistered === "asc"
          ? dateA - dateB
          : dateB - dateA;
      });
  }, [data, debouncedSearchTerm, filters]);

  const handleFilterChange = useCallback(
    (name: keyof Filters, value: string) => {
      setFilters((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleLoadMore = () => {
    setDisplayedStudents((prev) => prev + batchSize);
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid gap-y-8">
      <div className="grid gap-y-2">
        <h2 className="text-3xl font-medium tracking-tight">Browse Students</h2>
        <p className="text-muted-foreground lg:max-w-[30%]">
          Browse through all registered students. Use the filters for easy
          navigation.
        </p>
      </div>
      <div className="grid gap-y-6">
        {/*=== Filters ===*/}
        <FilterOptions
          resultCount={filteredStudents.length}
          defaultSearchTerm={filters.searchTerm}
          defaultSortByClass="all"
          defaultSortByDivision="all"
          defaultSortByGender="all"
          defaultSortByDateRegistered="asc"
          onSearch={(term) => handleFilterChange("searchTerm", term)}
          onSortByClass={(value) => handleFilterChange("sortByClass", value)}
          onSortByDivision={(value) =>
            handleFilterChange("sortByDivision", value)
          }
          onSortByGender={(value) => handleFilterChange("sortByGender", value)}
          onSortByDateRegistered={(value) =>
            handleFilterChange("sortByDateRegistered", value)
          }
        />

        {/*=== List rendering ===*/}
        {filteredStudents.slice(0, displayedStudents).length > 0 ? (
          <div className="relative grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {filteredStudents.slice(0, displayedStudents).map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full py-10 border border-secondary rounded-2xl mt-6">
            <div className="grid gap-y-2">
              <h3 className="text-center text-2xl font-medium">
                Nothing was found.
              </h3>
              <p className="text-center text-muted-foreground">
                Try reloading the page or adjusting your filters or search term.
              </p>
            </div>
          </div>
        )}
        {displayedStudents < filteredStudents.length && (
          <div className="grid place-items-center mt-8">
            <Button
              variant="secondary"
              className="w-[300px] py-5 border"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;

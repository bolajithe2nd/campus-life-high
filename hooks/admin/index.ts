import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Class, Student } from "@/types";

interface FetchStudentsAndClassesResponse {
  students: Student[] | null;
  classes: Class[] | null;
}

const fetchStudents = async () => {
  const response = await axios.get(`/api/students`);
  return response.data;
};

const fetchClasses = async () => {
  const response = await axios.get(`/api/classes`);
  return response.data;
};

export const useFetchStudentsAndClasses = () => {
  return useQuery<FetchStudentsAndClassesResponse, Error>({
    queryKey: ["studentsAndClasses"],
    queryFn: async () => {
      const [studentsResult, classesResult] = await Promise.allSettled([
        fetchStudents(),
        fetchClasses(),
      ]);

      // Process results
      return {
        students:
          studentsResult.status === "fulfilled" ? studentsResult.value : null,
        classes:
          classesResult.status === "fulfilled" ? classesResult.value : null,
      };
    },
    staleTime: 5 * 60 * 1000,
  });
};

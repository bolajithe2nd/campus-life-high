import { create } from "zustand";

type StudentState = {
  studentCount: number;
};

type StudentAction = {
  setStudentCount: (newCount: number) => void;
};

export const useStudentStore = create<StudentState & StudentAction>((set) => ({
  studentCount: 0,
  setStudentCount: (newCount) => set({ studentCount: newCount }),
}));

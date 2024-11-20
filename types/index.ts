import { RemixiconComponentType } from "@remixicon/react";

export type Sublink = {
  title: string;
  path: string;
  icon: RemixiconComponentType;
  notifications?: boolean;
};

export type NavigationLink = {
  title: string;
  sublinks: Sublink[];
};

export type Class = {
  id: number;
  name: string;
  divisions: string[] | null;
};

export type AddressInfo = {
  houseAddress: string;
  stateOfResidence: string;
  lgaOfHouse: string;
};

export type OriginInfo = {
  stateOfOrigin: string;
  lgaOfOrigin: string;
};

export type GuardianInfo = {
  firstname: string;
  lastname: string;
  othername: string;
  phoneNumber: string;
  relationship: string;
};

export type EmergencyContact = {
  name: string;
  phoneNumber: string;
  relationship: string;
};

export type MedicalInfo = {
  bloodType: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  genotype: "AA" | "AS" | "SS" | "AC";
  allergies?: string[] | null;
  medicalHistory?: string[] | null;
  currentMedications?: string[] | null;
  lastVisitDate?: string | null;
  doctorNotes?: string | null;
};

export type CurrentClass = {
  name: string;
  division: string | null;
};

export type Student = {
  id: number;
  firstname: string;
  lastname: string;
  othername: string;
  username: string;
  gender: "Male" | "Female" | "Other";
  abbreviation: string;
  currentClass: CurrentClass;
  status: "Active" | "Inactive" | "Suspended" | "Expelled" | "Graduated";
  dateOfBirth: string;
  dateRegistered: string;
  emergencyContact: EmergencyContact;

  phoneNumber?: string;
  email?: string;

  medicalInformation?: MedicalInfo;
  previousSchoolAttended?: string | null;
  address?: AddressInfo;
  origin: OriginInfo;
  guardians?: GuardianInfo[];
};

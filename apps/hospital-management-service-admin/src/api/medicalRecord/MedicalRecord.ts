import { Patient } from "../patient/Patient";

export type MedicalRecord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  diagnosis: string | null;
  treatment: string | null;
  date: Date | null;
  patient?: Patient | null;
};

import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  date: Date | null;
  time: Date | null;
  doctor?: Doctor | null;
  patient?: Patient | null;
};

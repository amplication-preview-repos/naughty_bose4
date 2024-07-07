import { Appointment } from "../appointment/Appointment";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";

export type Patient = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  dateOfBirth: Date | null;
  address: string | null;
  phoneNumber: string | null;
  email: string | null;
  gender?: "Option1" | null;
  appointments?: Array<Appointment>;
  medicalRecords?: Array<MedicalRecord>;
};

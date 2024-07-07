import { Appointment } from "../appointment/Appointment";

export type Doctor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  specialty: string | null;
  phoneNumber: string | null;
  email: string | null;
  appointments?: Array<Appointment>;
};

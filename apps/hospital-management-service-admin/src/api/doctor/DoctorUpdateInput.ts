import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  fullName?: string | null;
  specialty?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
};

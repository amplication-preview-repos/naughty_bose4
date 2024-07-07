import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  fullName?: string | null;
  specialty?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
};

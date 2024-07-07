import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { MedicalRecordUpdateManyWithoutPatientsInput } from "./MedicalRecordUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  fullName?: string | null;
  dateOfBirth?: Date | null;
  address?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  gender?: "Option1" | null;
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  medicalRecords?: MedicalRecordUpdateManyWithoutPatientsInput;
};

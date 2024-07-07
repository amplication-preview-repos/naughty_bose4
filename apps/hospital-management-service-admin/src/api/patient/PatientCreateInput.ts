import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import { MedicalRecordCreateNestedManyWithoutPatientsInput } from "./MedicalRecordCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  fullName?: string | null;
  dateOfBirth?: Date | null;
  address?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  gender?: "Option1" | null;
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientsInput;
};

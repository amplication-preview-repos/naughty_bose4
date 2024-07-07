import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalRecordUpdateInput = {
  diagnosis?: string | null;
  treatment?: string | null;
  date?: Date | null;
  patient?: PatientWhereUniqueInput | null;
};

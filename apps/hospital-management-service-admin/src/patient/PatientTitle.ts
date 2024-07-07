import { Patient as TPatient } from "../api/patient/Patient";

export const PATIENT_TITLE_FIELD = "fullName";

export const PatientTitle = (record: TPatient): string => {
  return record.fullName?.toString() || String(record.id);
};

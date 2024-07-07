import { MedicalRecord as TMedicalRecord } from "../api/medicalRecord/MedicalRecord";

export const MEDICALRECORD_TITLE_FIELD = "id";

export const MedicalRecordTitle = (record: TMedicalRecord): string => {
  return record.id?.toString() || String(record.id);
};

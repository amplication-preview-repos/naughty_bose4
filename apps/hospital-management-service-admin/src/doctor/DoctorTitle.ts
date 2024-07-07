import { Doctor as TDoctor } from "../api/doctor/Doctor";

export const DOCTOR_TITLE_FIELD = "fullName";

export const DoctorTitle = (record: TDoctor): string => {
  return record.fullName?.toString() || String(record.id);
};

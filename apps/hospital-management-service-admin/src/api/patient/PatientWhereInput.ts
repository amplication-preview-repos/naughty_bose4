import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { MedicalRecordListRelationFilter } from "../medicalRecord/MedicalRecordListRelationFilter";

export type PatientWhereInput = {
  id?: StringFilter;
  fullName?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  address?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  gender?: "Option1";
  appointments?: AppointmentListRelationFilter;
  medicalRecords?: MedicalRecordListRelationFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalRecordWhereInput = {
  id?: StringFilter;
  diagnosis?: StringNullableFilter;
  treatment?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  patient?: PatientWhereUniqueInput;
};

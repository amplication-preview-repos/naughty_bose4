import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  date?: DateTimeNullableFilter;
  time?: DateTimeNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  patient?: PatientWhereUniqueInput;
};

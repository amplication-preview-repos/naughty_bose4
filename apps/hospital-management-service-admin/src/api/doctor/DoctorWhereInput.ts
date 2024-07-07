import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type DoctorWhereInput = {
  id?: StringFilter;
  fullName?: StringNullableFilter;
  specialty?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};

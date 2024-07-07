import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  date?: SortOrder;
  time?: SortOrder;
  doctorId?: SortOrder;
  patientId?: SortOrder;
};

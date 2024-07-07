import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fullName?: SortOrder;
  specialty?: SortOrder;
  phoneNumber?: SortOrder;
  email?: SortOrder;
};

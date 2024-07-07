import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fullName?: SortOrder;
  dateOfBirth?: SortOrder;
  address?: SortOrder;
  phoneNumber?: SortOrder;
  email?: SortOrder;
  gender?: SortOrder;
};

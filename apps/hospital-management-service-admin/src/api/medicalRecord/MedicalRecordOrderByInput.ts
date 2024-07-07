import { SortOrder } from "../../util/SortOrder";

export type MedicalRecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  diagnosis?: SortOrder;
  treatment?: SortOrder;
  date?: SortOrder;
  patientId?: SortOrder;
};

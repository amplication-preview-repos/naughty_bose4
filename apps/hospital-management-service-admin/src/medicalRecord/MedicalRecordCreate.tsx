import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";

export const MedicalRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Diagnosis" multiline source="diagnosis" />
        <TextInput label="Treatment" multiline source="treatment" />
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

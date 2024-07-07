import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { MedicalRecordTitle } from "../medicalRecord/MedicalRecordTitle";

export const PatientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Full Name" source="fullName" />
        <DateTimeInput label="Date of Birth" source="dateOfBirth" />
        <TextInput label="Address" multiline source="address" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="Email" source="email" type="email" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="medicalRecords"
          reference="MedicalRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MedicalRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

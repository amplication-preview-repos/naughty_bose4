/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PatientService } from "../patient.service";
import { PatientCreateInput } from "./PatientCreateInput";
import { Patient } from "./Patient";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { MedicalRecordFindManyArgs } from "../../medicalRecord/base/MedicalRecordFindManyArgs";
import { MedicalRecord } from "../../medicalRecord/base/MedicalRecord";
import { MedicalRecordWhereUniqueInput } from "../../medicalRecord/base/MedicalRecordWhereUniqueInput";

export class PatientControllerBase {
  constructor(protected readonly service: PatientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  async createPatient(
    @common.Body() data: PatientCreateInput
  ): Promise<Patient> {
    return await this.service.createPatient({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fullName: true,
        dateOfBirth: true,
        address: true,
        phoneNumber: true,
        email: true,
        gender: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @ApiNestedQuery(PatientFindManyArgs)
  async patients(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.patients({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fullName: true,
        dateOfBirth: true,
        address: true,
        phoneNumber: true,
        email: true,
        gender: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async patient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.patient({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fullName: true,
        dateOfBirth: true,
        address: true,
        phoneNumber: true,
        email: true,
        gender: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePatient(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.updatePatient({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fullName: true,
          dateOfBirth: true,
          address: true,
          phoneNumber: true,
          email: true,
          gender: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePatient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.deletePatient({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fullName: true,
          dateOfBirth: true,
          address: true,
          phoneNumber: true,
          email: true,
          gender: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        date: true,
        time: true,

        doctor: {
          select: {
            id: true,
          },
        },

        patient: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  async connectAppointments(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  async updateAppointments(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  async disconnectAppointments(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/medicalRecords")
  @ApiNestedQuery(MedicalRecordFindManyArgs)
  async findMedicalRecords(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<MedicalRecord[]> {
    const query = plainToClass(MedicalRecordFindManyArgs, request.query);
    const results = await this.service.findMedicalRecords(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        diagnosis: true,
        treatment: true,
        date: true,

        patient: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/medicalRecords")
  async connectMedicalRecords(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MedicalRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalRecords: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/medicalRecords")
  async updateMedicalRecords(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MedicalRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalRecords: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/medicalRecords")
  async disconnectMedicalRecords(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MedicalRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      medicalRecords: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }
}

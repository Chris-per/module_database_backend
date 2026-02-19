import { Observable } from 'rxjs';

export enum GcodeEnum {
  err = 0,
  G01 = 1,
  G30 = 14,
  M30 = 2,
  M300 = 3,
  M301 = 4,
  M302 = 5,
  M303 = 6,
  M304 = 15,
  M305 = 16,
  M306 = 17,
  M307 = 18,
  M54 = 7,
  M55 = 8,
  M56 = 9,
  M57 = 10,
  M58 = 11,
  G00 = 12,
  M06 = 13,
  M200 = 19,
}

export interface GcodeLine {
  id: GcodeEnum;
  x1?: number;
  y1?: number;
  z1?: number;
  x2?: number;
  y2?: number;
  z2?: number;
  A?: number;
  B?: number;
  F?: number;
  T?: number;
  pattern?: string;
  fiducial?: string;
  data?: number[];
  Q?: string;
}

export interface Gcode {
  line: GcodeLine[];
}

export interface SetGcodeReply {
  accepted: boolean;
  error?: string;
  message?: string;
}

export interface StartDispensingMessage {
  message?: string;
}

export interface FinishedDispensingMessage {
  success: boolean;
  error?: string;
}

export enum MachineDetail {
  pos = 0,
  line = 1,
  axis = 2,
  vermes = 3,
}

export interface RequestStatusMessage {
  detail: MachineDetail[];
}

export interface PartResponse {
  detail: MachineDetail;
  status: string;
}

export interface ResponseStatusMessage {
  detailstatus: PartResponse[];
}

export enum Urgency {
  RightNow = 0,
  AfterThisLine = 1,
  AfterThisProcess = 2,
}

export interface StopDispensingMessage {
  urgency: Urgency;
}

export interface StoppedDispensingMessage {
  message: string;
}

export interface RequestReferenceMessage {
  message?: string;
}

export interface ResponseReferenceMessage {
  success: boolean;
  error?: string;
}

export interface DispenserService {
  setGcode(data: Gcode): Observable<SetGcodeReply>;
  startDispensing(data: StartDispensingMessage): Observable<FinishedDispensingMessage>;
  requestStatus(data: RequestStatusMessage): Observable<ResponseStatusMessage>;
  stopDispensing(data: StopDispensingMessage): Observable<StoppedDispensingMessage>;
  requestReference(data: RequestReferenceMessage): Observable<ResponseReferenceMessage>;
}

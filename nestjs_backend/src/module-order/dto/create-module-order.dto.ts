import { batch_data, module_data, module_reqirements } from "src/interface";

export class CreateModuleOrderDto {
    readonly name: string;
  readonly batchfile: string;
  readonly svgProjectId?: string;
  readonly amount: number;
  readonly requirements?: module_reqirements;
  readonly modules?: module_data;
  readonly batches?: batch_data;

}

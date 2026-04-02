import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleBatchDto } from './create-module-batch.dto';
import { dielectric_print_job, dispenser_processing, laser_processing } from '../schemas/modules.schema';

export class UpdateModuleBatchDto extends PartialType(CreateModuleBatchDto) {
    readonly laser_processing?: laser_processing;
    readonly dielectric_print_job?: dielectric_print_job;
    readonly dispenser_processing?: dispenser_processing;
}

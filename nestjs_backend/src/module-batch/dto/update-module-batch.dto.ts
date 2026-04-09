import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleBatchDto } from './create-module-batch.dto';
import { dielectric_print_job, dispenser_processing, laser_processing, process_log_entry } from '../schemas/modules.schema';

export class UpdateModuleBatchDto extends PartialType(CreateModuleBatchDto) {
    readonly laser_processing?: laser_processing;
    readonly dielectric_print_job?: dielectric_print_job;
    readonly dispenser_processing?: dispenser_processing;
    /** Append one or more pre-built entries directly (skip the conversion step) */
    readonly process_log?: process_log_entry[];
}

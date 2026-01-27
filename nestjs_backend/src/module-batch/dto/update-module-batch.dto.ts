import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleBatchDto } from './create-module-batch.dto';
import { dielectric_print_job, laser_processing } from '../schemas/modules.schema';

export class UpdateModuleBatchDto extends PartialType(CreateModuleBatchDto) {
    /** 
     * Optionally, you can explicitly redeclare for clarity:
     * This property supports the laser processing feature.
     */
    readonly laser_processing?: laser_processing;
    readonly dielectric_print_job?: dielectric_print_job;
}

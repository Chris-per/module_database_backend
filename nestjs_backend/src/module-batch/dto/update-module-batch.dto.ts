import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleBatchDto } from './create-module-batch.dto';

export class UpdateModuleBatchDto extends PartialType(CreateModuleBatchDto) {}

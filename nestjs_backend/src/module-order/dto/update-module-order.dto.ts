import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleOrderDto } from './create-module-order.dto';

export class UpdateModuleOrderDto extends PartialType(CreateModuleOrderDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto, iv_results_dto, Process_data_dto_list } from './create-module.dto';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateModuleDto extends PartialType(CreateModuleDto) {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => iv_results_dto)
    add_iv_results?: iv_results_dto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => Process_data_dto_list)
    add_manufacturing_data?: Process_data_dto_list;

}



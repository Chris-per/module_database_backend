import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsEmail, IsNotEmpty, IsOptional, MinLength, IsNumber, ValidateNested, IsDefined, isNumber, IsDate, IsBoolean, IsArray } from 'class-validator';
import { Transform, Type } from "class-transformer";

import { IV, Modules, Process_data, WEB, X_Y } from '../schemas/modules.schema';


export class iv_dto {
    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    i: number

    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    v: number
}
export class iv_results_dto {

    @IsDate()
    @IsDefined()
    @IsNotEmpty()
    @Transform(({value}) => {
        return new Date(value)
    })
    date: Date

    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    illumination: number
    
    @IsDefined()
    @IsNotEmpty()
    @Type(() => iv_dto)
    @ValidateNested({ each: true } )
    iv: iv_dto[]

}



export class WEBDto {
    @IsNumber()
    web_id: number

    @IsNumber()
    web_pos: number

}

export class Process_data_dto {
    @IsDate()
    @IsDefined()
    @IsNotEmpty()
    @Transform(({value}) => {
        return new Date(value)
    })
    date: Date

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    machine: string

    @IsBoolean()
    @IsDefined()
    @IsNotEmpty()
    finished: boolean

    @IsString()
    notes: string

    @IsString()
    settings: string
}

export class Process_data_dto_list {

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Process_data_dto)
    process_data_list: Process_data_dto[];
    
}

export class CreateModuleDto  {

    @IsString()
    @IsNotEmpty()
    readonly order_id: string

    @IsString()
    @IsNotEmpty()
    readonly batchfile: string
    
    @IsString()
    readonly    batch_id: string;   
    
    @IsString()
    @IsNotEmpty()
    readonly    name: string;

    // { each: true } only for arrays
    @ValidateNested()
    @Type(() => WEBDto)
    @IsDefined()
    @IsNotEmpty()
    web: WEBDto

    // { each: true } only for arrays
    @ValidateNested({each: true})
    @Type(() => iv_results_dto)
    iv_result: iv_results_dto[]

    @ValidateNested({each: true})
    @Type(() => Process_data_dto_list)
    manufacturing_data: Process_data_dto_list

    constructor(){


    }


}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsEmail, IsNotEmpty, IsOptional, MinLength, IsNumber, ValidateNested, IsDefined } from 'class-validator';
import { Type } from "class-transformer";

import { IV, manufacturing_steps, WEB, X_Y } from '../schemas/modules.schema';



export class CreateModuleDto  {

    @IsString()
    @IsNotEmpty()
    readonly order_id: string

    @IsString()
    @IsNotEmpty()
    readonly batchfile: string
    
    @IsString()
    readonly    batch_id: string;

    @Type(() => WEB)
    @ValidateNested()
    @IsDefined()
    
    @IsNotEmpty()
    readonly web!: WEB
    
    @IsString()
    @IsNotEmpty()
    readonly    name: string;
    

    // readonly    iv_data: iv_results[];
    @IsString()
    @IsNotEmpty()
    readonly date:string

    @IsNumber()
    @IsNotEmpty()
    readonly illumination:number
    
    // iv: iv[]
    @Type(() => IV)
    @ValidateNested()
    readonly iv: IV

    @Type(() => manufacturing_steps)
    @ValidateNested()
    readonly manufacturing: manufacturing_steps
    

    @Type(() => X_Y)
    @ValidateNested()
    readonly x_y: X_Y


}

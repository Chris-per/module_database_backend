import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { json } from 'express';
import mongoose, { Document } from 'mongoose';
import * as blueprintData from '../../blueprint-data';

@Schema()

export class x_y extends Document {

    @Prop()
    x: number

    @Prop()
    y: number
}

export class web_pos extends Document {
    @Prop()
    web_id: number

    @Prop()
    web_pos: number

    @Prop()
    offset: x_y
}

export class laser_settings extends Document {
    @Prop()
    line_type: string

    @Prop()
    power: number

    @Prop()
    speed: number

    @Prop()
    pp: number

    @Prop()
    focus: number
}

export class laser_log extends Document {
    @Prop()
    start_date: Date
    
    @Prop()
    finish_date: Date

    @Prop()
    line_type: string

    @Prop()
    laser_power_start: number

    @Prop()
    laser_power_end: number

    @Prop()
    laser_power_avg: number

    @Prop({ type: Number })
    laser_power_mean_deviation: number;
}
export class laser_processing extends Document {
    @Prop()
    finished: boolean

    @Prop()
    processing_date: Date

    @Prop({ type: [laser_settings] })
    laser_settings: laser_settings[];

    @Prop({ type: [laser_log] })
    laser_log: laser_log[];


}

export class dielectric_print_job extends Document {
    @Prop()
    jobId: string;

    @Prop()
    timestamp: Date;

    @Prop()
    successful: boolean;

    @Prop()
    error: string;

    @Prop({ type: String })
    log: string;
}

export class module_batch_data extends Document {

    @Prop()
    module_id:string

    @Prop()
    webpos: web_pos;

    @Prop()
    origin: x_y;

    @Prop()
    name: string;

}

export type ModuleBatchDocument = ModuleBatch & Document;
@Schema()
export class ModuleBatch{
    
    @Prop({required: true})
    order_id: string

    @Prop({required: true})
    batchfile: string;

    @Prop()
    batch_name: string;

    @Prop()
    batch_id: string;

    @Prop()
    batch_size: x_y;

    @Prop()
    origin: x_y;

    @Prop()
    spacing: x_y;

    @Prop()
    fillWithModules: boolean;   

    @Prop({type: Object})
    blueprint?: blueprintData.BlueprintData;

    @Prop({ default: [] })
    modules: module_batch_data[];

    @Prop()
    webpos: web_pos;

    @Prop()
    laser_processing?: laser_processing;

    @Prop({ default: [] })
    dielectric_print_job?: dielectric_print_job;

    @Prop()
    qr_data?: x_y;



}

export const ModuleBatchSchema = SchemaFactory.createForClass(ModuleBatch);


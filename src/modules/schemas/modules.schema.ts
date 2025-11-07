import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { json } from 'express';
import mongoose, { Document } from 'mongoose';


@Schema()

export class X_Y extends Document {

    @Prop()
    x: number

    @Prop()
    y: number
}

export class WEB extends Document {
    @Prop({required:true})
    web_id: number

    @Prop({required:true})
    web_pos: number

    @Prop()
    offset: X_Y
}

export class module_batch_data extends Document {

    @Prop()
    module_id:string

    @Prop()
    webpos: WEB;

}

export class IV extends Document {
    @Prop()
    i: number

    @Prop()
    v: number
}

export class iv_results extends Document {

    @Prop({required:true})
    date:string

     @Prop({required:true})
    illumination:number

    @Prop()
    iv: IV[]

}

export class process_data extends Document {

    @Prop()
    date:string

     @Prop()
    machine:string

    @Prop()
    finished: boolean

    @Prop()
    notes: string

    @Prop()
    settings: string

}

export class manufacturing_steps extends Document {

    @Prop()
    laser_scribing:process_data

    @Prop()
    back_contacts:process_data

    @Prop()
    inkjet_isolation:process_data

    @Prop()
    silver_print:process_data

    @Prop()
    module_separation: process_data

    @Prop()
    iv_measurement: process_data
    

}



export type ModuleDocument = Modules& Document;
@Schema()
export class Modules{
    
    @Prop({required: true})
    order_id: string

    @Prop({required: true})
    batchfile: string;

    @Prop({required: true})
    batch_id: string;

    @Prop()
    web: WEB;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    iv_data: iv_results[];

    @Prop()
    manufacturing: manufacturing_steps; 



}



export const ModuleSchema = SchemaFactory.createForClass(Modules);


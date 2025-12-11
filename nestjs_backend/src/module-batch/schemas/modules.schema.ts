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



}


// export interface BatchLayout {
//   batch_name: string;
//   batchID?: string;
//   batchSize: BatchSize;
//   spacing: { x: number; y: number };
//   fillWithModules: boolean;
//   blueprint?: BlueprintData;
//   items: ModuleData[];
// }


export const ModuleBatchSchema = SchemaFactory.createForClass(ModuleBatch);


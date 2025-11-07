import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { json } from 'express';
import mongoose, { Document } from 'mongoose';


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

}


export type ModuleBatchDocument = ModuleBatch & Document;
@Schema()
export class ModuleBatch{
    
    @Prop({required: true})
    order_id: string

    @Prop({required: true})
    batchfile: string;

    @Prop({ default: [] })
    modules: module_batch_data[];

    @Prop()
    webpos: web_pos;



}



export const ModuleBatchSchema = SchemaFactory.createForClass(ModuleBatch);


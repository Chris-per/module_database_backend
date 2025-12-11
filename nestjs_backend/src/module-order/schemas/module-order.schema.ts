import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { json } from 'express';
import mongoose, { Document } from 'mongoose';


@Schema()
export class min_max extends Document {
    @Prop()
    min: Number

    @Prop()
    max: Number
}

export class module_requirements extends Document {
    @Prop()
    illumination : min_max

    @Prop()
    voc: min_max

    @Prop()
    isc: min_max

    @Prop()
    vmpp: min_max

    @Prop()
    impp: min_max

    @Prop()
    pmpp: min_max
}

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

export class module_data extends Document {

    @Prop()
    batchfile:string

    @Prop()
    batch_id:string

    @Prop()
    order_id: string

    @Prop()
    module_id: string

    @Prop()
    name: string

    @Prop()
    web_data: web_pos

}

export class batch_data extends Document {
    @Prop()
    order_id: string

    @Prop()
    modules: module_data[]
}


export type ModuleOrderDocument = ModuleOrder & Document;
@Schema()
export class ModuleOrder {
    
  @Prop({ required: true })
  name: string;

  @Prop()
  batchfile: string;

  @Prop({ default: 0 })
  amount: number;

  @Prop()
  requirements: module_requirements;

  @Prop({ default: {} })
  modules: module_data;

  @Prop({ default: {} })
  batches: batch_data;

}



export const ModuleOrderSchema = SchemaFactory.createForClass(ModuleOrder);


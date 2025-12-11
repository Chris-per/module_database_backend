import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { json } from 'express';
import mongoose, { Document } from 'mongoose';


@Schema()

export class X_Y {

    @Prop()
    x: number

    @Prop()
    y: number
}



export class WEB {
    @Prop({required:true})
    web_id: number

    @Prop({required:true})
    web_pos: number

    // @Prop()
    // offset: X_Y
}

export class module_batch_data {

    @Prop()
    module_id:string

    @Prop()
    webpos: WEB;

}

export class IV {
    @Prop()
    i: number

    @Prop()
    v: number
}

export class iv_results {

    @Prop({required:true})
    date:string

     @Prop({required:true})
    illumination:number

    @Prop()
    iv: IV[]

}

export class Process_data {

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

// export class manufacturing_steps {

//     @Prop({ type: [Process_data] })
//     process_data_list: Process_data[];
    

// }
export class Machines {
    @Prop()
    machine_id: string      
    @Prop()
    machine_name: string
    @Prop()             
    process: string
}

export class Manufacturing_plan {
    @Prop()
    plan_id: string

    @Prop()
    plan_data: Array<Machines>
}


export type ModuleDocument = Modules& Document;
@Schema()
export class Modules{
    
    @Prop({required: true})
    order_id: string

    @Prop({required: false})
    batchfile: string;

    @Prop({required: false})
    batch_id: string;

    @Prop({ required: false, default: 'monoscribe' })
    process_type: string;

    @Prop({ type: Manufacturing_plan, default: null })
    manufacturing_plan: Manufacturing_plan;

    @Prop()
    web: WEB;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    iv_result: iv_results[];

    @Prop({required: false})
    module_id: string;

    @Prop({ type: X_Y })
    origin: X_Y;

    @Prop({ type: [Process_data] })
    process_data_list: Process_data[];

    constructor() {
        console.log("modules.schema constructor")
        console.log(this)
    }



}



export const ModuleSchema = SchemaFactory.createForClass(Modules);


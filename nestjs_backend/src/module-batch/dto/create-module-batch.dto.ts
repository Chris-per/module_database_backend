import { module_batch_data, web_pos, laser_processing } from "../schemas/modules.schema";
import * as blueprintData from '../../blueprint-data';
import { CreateModuleDto } from "src/modules/dto/create-module.dto";

export class CreateModuleBatchDto {
    readonly order_id: string;
    readonly batchfile: string;
    readonly batch_id: string;
    readonly batch_name?: string;
    readonly batch_size?: {x: number, y: number};
    readonly origin?: {x: number, y: number};
    readonly fillWithModules?: boolean;   
    readonly blueprint?: blueprintData.BlueprintData;
    // readonly modules?: module_batch_data[];
    readonly modules?: CreateModuleDto[];
    readonly webpos?: web_pos;  
    readonly spacing?: {x: number, y: number};
    readonly laser_processing?: laser_processing;
}


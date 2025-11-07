// export interface X_Y_Dto {
//     x: number;
//     y: number;
// }

// export interface WEB_Dto {
//     web_id: number;
//     web_pos: number;
//     // offset?: X_Y_Dto;
// }

// export interface IV_Dto {
//     i: number;
//     v: number;
// }

// export interface IVResultsDto {
//     date: string;
//     illumination: number;
//     iv: IV_Dto[];
// }

// export interface ProcessDataDto {
//     date: string;
//     machine: string;
//     finished: boolean;
//     notes: string;
//     settings: string;
// }

// // export interface ManufacturingStepsDto {
// //     laser_scribing: ProcessDataDto;
// //     back_contacts: ProcessDataDto;
// //     inkjet_isolation: ProcessDataDto;
// //     silver_print: ProcessDataDto;
// //     module_separation: ProcessDataDto;
// //     iv_measurement: ProcessDataDto;
// // }

// export interface ProcessDataDto {
//     date: string;
//     machine: string;
//     finished: boolean;
//     notes: string;
//     settings: string;
// }

// export interface ModuleDto {
//     order_id: string;
//     batchfile: string;
//     batch_id: string;
//     web: WEB_Dto;
//     name: string;
//     iv_result: IVResultsDto[];
//     process_data: ProcessDataDto[];
// }
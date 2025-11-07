

import { at } from './messages';

export interface BlueprintData {
  id: string;
  name: string;
  version: number;
  batchFile: BatchFileInfoData;
}
 
export interface BatchFileInfoData {
  name: string;
  content: number[];
  jsonContent?: at.spg.protobuf.scribingdb.batchfile.IBatchDataFile;
  uploaded: string;
}
 
export interface BlueprintFileView {
  id: string;
  name: string;
  version: number;
  // Add other properties as needed based on your BlueprintFileView class
}

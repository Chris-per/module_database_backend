export class QueryBatchDataIncludeDto {
  /** Include the batch blueprint (protobuf/design data) */
  blueprint?: boolean;
  /** Include the batch batchfile name reference */
  batchfile?: boolean;
  /** Include the batch-level process_log (laser, dispenser, dielectric entries) */
  processLog?: boolean;
  /** Include the list of modules stored on the batch document */
  moduleList?: boolean;
  /** Include per-module process_data_list from the modules collection */
  moduleProcessData?: boolean;
  /** Include per-module iv_result from the modules collection */
  moduleIvData?: boolean;
}

export class QueryBatchDataDto {
  /**
   * Custom batch_id (e.g. "B001"). Provide either batchId or moduleId, not both.
   * If moduleId is given, the batch is resolved automatically.
   */
  batchId?: string;

  /**
   * Custom module_id (e.g. "M001"). The associated batch is resolved automatically.
   */
  moduleId?: string;

  /**
   * Controls which sections are included in the response.
   * All fields default to true when the include object is omitted entirely.
   */
  include?: QueryBatchDataIncludeDto;
}

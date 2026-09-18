import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Allocate master data to target organizations. */
    "kingdee.allocate_records": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /**
           * Comma-separated internal IDs of master data to allocate.
           * @minLength 1
           */
          PkIds: string;
          /**
           * Comma-separated target organization internal IDs.
           * @minLength 1
           */
          TOrgIds: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** Approve records through the audit operation. */
    "kingdee.audit_records": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /** Internal ID of the creating organization. */
          CreateOrgId?: number;
          /** Record numbers; required when selecting by numbers. */
          Numbers?: Array<string>;
          /**
           * Comma-separated record internal IDs; required when selecting by IDs.
           * @minLength 1
           */
          Ids?: string;
          /** Semicolon-separated interaction flags documented for this operation. */
          InterationFlags?: string;
          /** Internal ID of the using organization. */
          UseOrgId?: number;
          /** Whether to enable network concurrency control. */
          NetworkCtrl?: boolean;
          /** Whether to check running workflow instances associated with the record. */
          IsVerifyProcInst?: boolean;
          /** Whether to ignore interactions. */
          IgnoreInterationFlag?: boolean;
          /** Whether to apply the record batch-processing configuration. */
          UseBatControlTimes?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** Save multiple records, including updates, and preserve partial results. */
    "kingdee.batch_save_records": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /** Whether to look up master data by number. */
          NumberSearch?: boolean;
          /** Whether to validate business data; false disables validation. */
          ValidateFlag?: boolean;
          /** Whether to delete existing entries; upstream defaults to true. */
          IsDeleteEntry?: boolean;
          /** Whether to fill entries in batches. */
          IsEntryBatchFill?: boolean;
          /** Fields to update; Model must include record and applicable entry internal IDs. */
          NeedUpDateFields?: Array<string>;
          /** Fields to return; use entitykey.key for entry fields. */
          NeedReturnFields?: Array<string>;
          /** Subsystem ID containing the form. */
          SubSystemId?: string;
          /** Semicolon-separated interaction flags documented for this operation. */
          InterationFlags?: string;
          /**
           * Form-specific business data; obtain field keys and requirements from the official object documentation.
           * @minItems 1
           */
          Model: Array<Record<string, unknown>>;
          /** Number of server-side processing threads; only effective for larger batches. */
          BatchCount?: number;
          /** Whether to validate referenced master data; the operation determines the default. */
          IsVerifyBaseDataField?: boolean;
          /** Whether to reorder JSON fields automatically. */
          IsAutoAdjustField?: boolean;
          /** Whether to ignore interactions. */
          IgnoreInterationFlag?: boolean;
          /** Whether to validate amount, price and quantity precision. */
          IsControlPrecision?: boolean;
          /** Whether to reject duplicate JSON data. */
          ValidateRepeatJson?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete records by internal IDs or numbers. */
    "kingdee.delete_records": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /** Internal ID of the creating organization. */
          CreateOrgId?: number;
          /** Record numbers; required when selecting by numbers. */
          Numbers?: Array<string>;
          /**
           * Comma-separated record internal IDs; required when selecting by IDs.
           * @minLength 1
           */
          Ids?: string;
          /** Whether to enable network concurrency control. */
          NetworkCtrl?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** Save a draft, including changes to an existing draft. */
    "kingdee.draft_record": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /** Fields to update; Model must include record and applicable entry internal IDs. */
          NeedUpDateFields?: Array<string>;
          /** Fields to return; use entitykey.key for entry fields. */
          NeedReturnFields?: Array<string>;
          /** Whether to delete existing entries; upstream defaults to true. */
          IsDeleteEntry?: boolean;
          /** Subsystem ID containing the form. */
          SubSystemId?: string;
          /** Whether to validate referenced master data; the operation determines the default. */
          IsVerifyBaseDataField?: boolean;
          /** Whether to fill entries in batches. */
          IsEntryBatchFill?: boolean;
          /** Whether to validate business data; false disables validation. */
          ValidateFlag?: boolean;
          /** Whether to look up master data by number. */
          NumberSearch?: boolean;
          /** Whether to reorder JSON fields automatically. */
          IsAutoAdjustField?: boolean;
          /** Semicolon-separated interaction flags documented for this operation. */
          InterationFlags?: string;
          /** Whether to ignore interactions. */
          IgnoreInterationFlag?: boolean;
          /** Whether to validate amount, price and quantity precision. */
          IsControlPrecision?: boolean;
          /** Whether to reject duplicate JSON data. */
          ValidateRepeatJson?: boolean;
          /** Form-specific business data; obtain field keys and requirements from the official object documentation. */
          Model: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** View a record by its internal ID or number. */
    "kingdee.get_record": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /** Internal ID of the creating organization. */
          CreateOrgId?: number;
          /**
           * Record number; required when selecting by number.
           * @minLength 1
           */
          Number?: string;
          /**
           * Record internal ID; required when selecting by ID.
           * @minLength 1
           */
          Id?: string;
          /** Whether to sort entries by sequence. */
          IsSortBySeq?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** The form-specific record. */
        record: unknown;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** Convert source records or entries into target records using a conversion rule. */
    "kingdee.push_records": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /**
           * Comma-separated record internal IDs; required when selecting by IDs.
           * @minLength 1
           */
          Ids?: string;
          /** Record numbers; required when selecting by numbers. */
          Numbers?: Array<string>;
          /**
           * Comma-separated entry internal IDs; omit record IDs and numbers when pushing individual entries.
           * @minLength 1
           */
          EntryIds?: string;
          /** Conversion rule ID; required unless a default conversion rule is enabled. */
          RuleId?: string;
          /** Target bill type ID. */
          TargetBillTypeId?: string;
          /** Target organization internal ID. */
          TargetOrgId?: number;
          /** Target form ID; required when using a default conversion rule. */
          TargetFormId?: string;
          /** Whether to use the default conversion rule. */
          IsEnableDefaultRule?: boolean;
          /** Whether to save a draft if saving the converted record fails. */
          IsDraftWhenSaveFail?: boolean;
          /** Custom parameters passed through to conversion plugins. */
          CustomParams?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** Query business records by fields, filters and row offset. */
    "kingdee.query_records": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /**
           * Comma-separated field keys to return, in column order; use keys from the object documentation.
           * @minLength 1
           */
          FieldKeys: string;
          /** Documented filter expression or structured filter conditions; use the object documentation. */
          FilterString?: string | Array<Record<string, unknown>>;
          /** Sort expression using documented field keys. */
          OrderString?: string;
          /**
           * Maximum total rows requested by the query.
           * @minimum 0
           */
          TopRowCount?: number;
          /**
           * Zero-based starting row offset.
           * @minimum 0
           */
          StartRow?: number;
          /**
           * Maximum rows to return, up to 10000.
           * @minimum 0
           * @maximum 10000
           */
          Limit?: number;
          /** Subsystem ID containing the form. */
          SubSystemId?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Returned rows, without inferred totals or next-page flags. */
        rows: Array<Array<unknown>>;
        /** Column keys in requested order. */
        fieldKeys: Array<string>;
      };
    };
    /** Query a report using its form-specific filters. */
    "kingdee.query_report": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /**
           * Comma-separated field keys to return, in column order; use keys from the object documentation.
           * @minLength 1
           */
          FieldKeys: string;
          /** Internal ID of the report filter scheme. */
          SchemeId?: string;
          /**
           * Zero-based starting row offset.
           * @minimum 0
           */
          StartRow?: number;
          /**
           * Maximum rows to return, up to 10000.
           * @minimum 0
           * @maximum 10000
           */
          Limit?: number;
          /** Whether to validate referenced master data; the operation determines the default. */
          IsVerifyBaseDataField?: boolean;
          /** Documented filter expression or structured filter conditions; use the object documentation. */
          FilterString?: string | Array<Record<string, unknown>>;
          /** Form-specific business data; obtain field keys and requirements from the official object documentation. */
          Model: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The upstream report Result, including Rows and RowCount when supplied. */
        result: Record<string, unknown>;
      };
    };
    /** Save a record, including updates to existing records. */
    "kingdee.save_record": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /** Fields to update; Model must include record and applicable entry internal IDs. */
          NeedUpDateFields?: Array<string>;
          /** Fields to return; use entitykey.key for entry fields. */
          NeedReturnFields?: Array<string>;
          /** Whether to delete existing entries; upstream defaults to true. */
          IsDeleteEntry?: boolean;
          /** Subsystem ID containing the form. */
          SubSystemId?: string;
          /** Whether to validate referenced master data; the operation determines the default. */
          IsVerifyBaseDataField?: boolean;
          /** Whether to fill entries in batches. */
          IsEntryBatchFill?: boolean;
          /** Whether to validate business data; false disables validation. */
          ValidateFlag?: boolean;
          /** Whether to look up master data by number. */
          NumberSearch?: boolean;
          /** Whether to reorder JSON fields automatically. */
          IsAutoAdjustField?: boolean;
          /** Semicolon-separated interaction flags documented for this operation. */
          InterationFlags?: string;
          /** Whether to ignore interactions. */
          IgnoreInterationFlag?: boolean;
          /** Whether to validate amount, price and quantity precision. */
          IsControlPrecision?: boolean;
          /** Whether to reject duplicate JSON data. */
          ValidateRepeatJson?: boolean;
          /** Form-specific business data; obtain field keys and requirements from the official object documentation. */
          Model: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** Submit records for approval. */
    "kingdee.submit_records": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /** Internal ID of the creating organization. */
          CreateOrgId?: number;
          /** Record numbers; required when selecting by numbers. */
          Numbers?: Array<string>;
          /**
           * Comma-separated record internal IDs; required when selecting by IDs.
           * @minLength 1
           */
          Ids?: string;
          /** Employee position ID used to initiate workflow when the employee has multiple positions. */
          SelectedPostId?: number;
          /** Internal ID of the using organization. */
          UseOrgId?: number;
          /** Whether to enable network concurrency control. */
          NetworkCtrl?: boolean;
          /** Whether to ignore interactions. */
          IgnoreInterationFlag?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
    /** Reverse the audit status of records. */
    "kingdee.unaudit_records": {
      input: {
        /**
         * The official business object FormId, not a catalog node ID.
         * @minLength 1
         */
        formId: string;
        /** The complete business parameters with official field casing; Connector serializes the inner JSON. */
        data: {
          /** Internal ID of the creating organization. */
          CreateOrgId?: number;
          /** Record numbers; required when selecting by numbers. */
          Numbers?: Array<string>;
          /**
           * Comma-separated record internal IDs; required when selecting by IDs.
           * @minLength 1
           */
          Ids?: string;
          /** Semicolon-separated interaction flags documented for this operation. */
          InterationFlags?: string;
          /** Whether to ignore interactions. */
          IgnoreInterationFlag?: boolean;
          /** Internal ID of the using organization. */
          UseOrgId?: number;
          /** Whether to enable network concurrency control. */
          NetworkCtrl?: boolean;
          /** Whether to check running workflow instances associated with the record. */
          IsVerifyProcInst?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether every reported operation succeeded. */
        success: boolean;
        /** Whether both successful entities and errors were reported. */
        partialSuccess: boolean;
        /** Reported business errors. */
        errors: Array<unknown>;
        /** Successfully processed entities reported by Kingdee. */
        successfulEntities: Array<unknown>;
        /** The upstream Result, including additional fields. */
        result: Record<string, unknown>;
      };
    };
  }
}

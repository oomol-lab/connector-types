import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current operational status of Elsevier's ClinicalKey COUNTER 5.1 service. */
    "clinicalkey.get_service_status": {
      input: Record<string, never>;
      output: {
        /** The raw COUNTER 5.1 JSON object returned by Elsevier. */
        status: Record<string, unknown>;
      };
    };
    /** Retrieve one ClinicalKey COUNTER 5.1 usage report for an inclusive date range with optional standard filters and attributes. */
    "clinicalkey.get_usage_report": {
      input: {
        /**
         * The report identifier returned by list_reports, such as PR, PR_P1, TR_B1, or TR_J1.
         * @minLength 1
         * @pattern \S
         */
        reportId: string;
        /**
         * The inclusive first usage date in YYYY-MM-DD format.
         * @format date
         */
        beginDate: string;
        /**
         * The inclusive last usage date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /**
         * The official COUNTER Data_Type values to include, such as Book, Journal, or Reference_Work.
         * @minItems 1
         */
        dataTypes?: Array<string>;
        /**
         * The official COUNTER Access_Type values to include, such as Controlled, Open, or Free_To_Read.
         * @minItems 1
         */
        accessTypes?: Array<string>;
        /**
         * The official COUNTER Access_Method values to include, such as Regular or TDM.
         * @minItems 1
         */
        accessMethods?: Array<string>;
        /**
         * The official COUNTER Metric_Type values to include, such as Total_Item_Requests or Unique_Item_Requests.
         * @minItems 1
         */
        metricTypes?: Array<string>;
        /**
         * The publication years or ranges to include, such as 2024, 2020-2024, 0001, or 9999.
         * @minItems 1
         */
        yearsOfPublication?: Array<string>;
        /**
         * The database name to include when the selected report supports the Database filter.
         * @minLength 1
         * @pattern \S
         */
        database?: string;
        /**
         * The item identifier to include when the selected title report supports the Item_ID filter.
         * @minLength 1
         * @pattern \S
         */
        itemId?: string;
        /**
         * The additional official COUNTER columns or elements to include in the report.
         * @minItems 1
         */
        attributesToShow?: Array<string>;
        /** The JSON report usage granularity. */
        granularity?: "Month" | "Totals";
      };
      output: {
        /** The raw COUNTER 5.1 JSON object returned by Elsevier. */
        report: Record<string, unknown>;
      };
    };
    /** List the consortium members or sites associated with the connected ClinicalKey customer account. */
    "clinicalkey.list_members": {
      input: Record<string, never>;
      output: {
        /** The member account records, including customer and requestor identifiers returned by Elsevier. */
        members: Array<Record<string, unknown>>;
      };
    };
    /** List the COUNTER 5.1 usage reports currently available to the connected ClinicalKey customer account. */
    "clinicalkey.list_reports": {
      input: Record<string, never>;
      output: {
        /** The account-specific report definitions returned by Elsevier. */
        reports: Array<Record<string, unknown>>;
      };
    };
  }
}

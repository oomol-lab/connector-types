import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the Bright Data account status for the connected API key and return account request capability metadata. */
    "bright_data.get_account_status": {
      input: Record<string, never>;
      output: {
        /** The Bright Data account status. */
        status: string;
        /** The Bright Data customer identifier. */
        customer: string;
        /** Whether the account can make requests. */
        canMakeRequests: boolean;
        /** The upstream authentication failure reason, when returned. */
        authFailReason: string | null;
        /** The IP address Bright Data observed for the request. */
        ip: string | null;
        /** The raw Bright Data response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch Bright Data marketplace dataset field metadata for a dataset ID. */
    "bright_data.get_dataset_metadata": {
      input: {
        /**
         * The Bright Data dataset identifier.
         * @minLength 1
         */
        datasetId: string;
      };
      output: {
        /** The Bright Data dataset identifier. */
        id: string;
        /** Dataset fields keyed by field name. */
        fields: Record<string, {
            /** The Bright Data field data type. */
            type?: string;
            /** Whether the field is currently active. */
            active?: boolean;
            /** Whether the field is required when present. */
            required?: boolean;
            /** The field description returned by Bright Data. */
            description?: string;
            [key: string]: unknown;
          }>;
        /** The raw Bright Data response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch metadata for a Bright Data marketplace dataset snapshot. */
    "bright_data.get_snapshot_metadata": {
      input: {
        /**
         * The Bright Data snapshot identifier.
         * @minLength 1
         */
        snapshotId: string;
      };
      output: {
        /** Bright Data snapshot metadata. */
        snapshot: {
          /** The snapshot identifier. */
          id?: string;
          /**
           * The timestamp when the snapshot was created.
           * @format date-time
           */
          created?: string;
          /** The Bright Data snapshot status. */
          status?: "scheduled" | "building" | "ready" | "failed";
          /** The dataset identifier associated with the snapshot. */
          dataset_id?: string;
          /** The Bright Data customer identifier. */
          customer_id?: string;
          /** The number of records in the snapshot. */
          dataset_size?: number;
          /** The snapshot file size in bytes. */
          file_size?: number;
          /** The snapshot cost. */
          cost?: number;
          /** The snapshot error message when available. */
          error?: string;
          /** The snapshot error code when available. */
          error_code?: string;
          /** The snapshot warning message when available. */
          warning?: string;
          /** The snapshot warning code when available. */
          warning_code?: string;
          /** The Bright Data initiation type for the snapshot. */
          initiation_type?: string;
          [key: string]: unknown;
        };
        /** The raw Bright Data response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch the number of delivery parts for a ready Bright Data marketplace dataset snapshot. */
    "bright_data.get_snapshot_parts": {
      input: {
        /**
         * The Bright Data snapshot identifier.
         * @minLength 1
         */
        snapshotId: string;
        /** The snapshot delivery format. */
        format?: "json" | "ndjson" | "jsonl" | "csv";
        /** Whether the corresponding snapshot download uses gzip compression. */
        compress?: boolean;
        /**
         * The record count used for each response batch.
         * @minimum 1000
         */
        batchSize?: number;
      };
      output: {
        /** The number of snapshot delivery parts. */
        parts: number;
        /** The raw Bright Data response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Bright Data dataset views available to the connected account. */
    "bright_data.list_dataset_views": {
      input: Record<string, never>;
      output: {
        /** Dataset views returned by Bright Data. */
        views: Array<{
          /** The unique dataset view identifier. */
          id?: string;
          /** The customer-assigned dataset view name. */
          name?: string;
          /** The underlying Bright Data dataset identifier. */
          dataset_id?: string;
          /** The underlying Bright Data dataset name. */
          dataset_name?: string;
          /** The primary domain of the dataset. */
          domain?: string;
          [key: string]: unknown;
        }>;
        /** The raw Bright Data dataset views payload. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Bright Data marketplace dataset IDs available to the connected account. */
    "bright_data.list_datasets": {
      input: Record<string, never>;
      output: {
        /** Datasets returned by Bright Data. */
        datasets: Array<{
          /** The unique dataset identifier. */
          id: string;
          /** The human-readable dataset name. */
          name: string;
          /** The number of records in the dataset. */
          size: number;
        }>;
        /** The raw Bright Data dataset list payload. */
        raw: Array<Record<string, unknown>>;
      };
    };
  }
}

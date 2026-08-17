import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one or more Rewiser transactions in a single request. */
    "rewiser.create_multiple_transactions": {
      input: {
        /**
         * The transactions to create.
         * @minItems 1
         */
        transactions: Array<{
          /**
           * The identifier of the target Rewiser folder.
           * @minLength 1
           */
          folder_id: string;
          /** The transaction type. */
          type: "Expense" | "Income";
          /**
           * The transaction name or description.
           * @minLength 1
           */
          name: string;
          /**
           * The positive transaction amount.
           * @exclusiveMinimum 0
           */
          amount: number;
          /**
           * The planned transaction date in a format accepted by Rewiser.
           * @minLength 1
           */
          planned_date: string;
          /** Whether the transaction has already been paid. */
          is_paid?: boolean;
          /**
           * The payment date as an ISO 8601 date string.
           * @minLength 1
           */
          paid_date?: string;
          /** An optional note for the transaction. */
          note?: string;
          /** The optional recurrence interval. */
          repeat_type?: "monthly" | "weekly" | "yearly" | "daily" | null;
        }>;
      };
      output: {
        /** Whether Rewiser completed the batch request successfully. */
        success: boolean;
        /** The identifier assigned to the batch request. */
        request_id: string;
        /**
         * The number of transactions inserted.
         * @minimum 0
         */
        inserted_count: number;
        /**
         * The number of transactions that failed.
         * @minimum 0
         */
        failed_count: number;
        /**
         * The number of duplicate transactions detected.
         * @minimum 0
         */
        duplicate_count: number;
        /**
         * The number of transactions skipped.
         * @minimum 0
         */
        skipped_count: number;
        /**
         * The total number of transactions processed.
         * @minimum 0
         */
        total_processed: number;
        /** The server timestamp for the response. */
        timestamp: string;
        /** Transactions inserted by Rewiser. */
        inserted: Array<{
          /** The transaction identifier. */
          id?: string;
          /** The transaction name or description. */
          name?: string;
          /** The transaction amount. */
          amount?: number;
          /** The transaction type. */
          type?: "Expense" | "Income";
          /** The timestamp when the transaction was created. */
          created_at?: string;
          /** The identifier of the folder containing the transaction. */
          folder_id?: string;
          /** Whether the transaction has been paid. */
          is_paid?: boolean;
          /** The planned transaction date. */
          planned_date?: string;
          /** The optional transaction note. */
          note?: string | null;
          [key: string]: unknown;
        }>;
        /** Duplicate details returned by Rewiser. */
        duplicates: Array<Record<string, unknown>>;
        /** Skipped transaction details returned by Rewiser. */
        skipped: Array<Record<string, unknown>>;
        /** Rate-limit counters and reset details returned by Rewiser. */
        rate_limit_info: Record<string, unknown>;
        /** The complete Rewiser batch response. */
        raw: Record<string, unknown>;
      };
    };
    /** List the Rewiser folders available to the authenticated user. */
    "rewiser.get_folders": {
      input: Record<string, never>;
      output: {
        /** The available Rewiser folders. */
        folders: Array<{
          /** The folder identifier. */
          key: string;
          /** The folder display label. */
          label: string;
        }>;
      };
    };
    /** Get recent Rewiser transactions, optionally filtered by transaction type or folder. */
    "rewiser.get_recent_transactions": {
      input: {
        /** The transaction type. */
        type?: "Expense" | "Income";
        /**
         * The folder identifier used when folder_mode is single.
         * @minLength 1
         */
        folder_id?: string;
        /** Whether to search all folders or one specific folder. */
        folder_mode?: "all" | "single";
      };
      output: {
        /** Whether Rewiser completed the request successfully. */
        success: boolean;
        /**
         * The number of transactions returned.
         * @minimum 0
         */
        count: number;
        /** The server timestamp for the response. */
        timestamp: string;
        /** The recent transactions. */
        transactions: Array<{
          /** The transaction identifier. */
          id?: string;
          /** The transaction name or description. */
          name?: string;
          /** The transaction amount. */
          amount?: number;
          /** The transaction type. */
          type?: "Expense" | "Income";
          /** The timestamp when the transaction was created. */
          created_at?: string;
          /** The identifier of the folder containing the transaction. */
          folder_id?: string;
          /** Whether the transaction has been paid. */
          is_paid?: boolean;
          /** The planned transaction date. */
          planned_date?: string;
          /** The optional transaction note. */
          note?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}

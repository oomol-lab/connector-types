import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the input schema for a Gumloop saved flow. */
    "gumloop.get_input_schema": {
      input: {
        /**
         * The Gumloop saved flow ID.
         * @minLength 1
         */
        savedItemId: string;
        /**
         * The Gumloop user ID. If omitted, the user ID stored during connection is used.
         * @minLength 1
         */
        userId?: string;
        /**
         * The Gumloop project or team ID.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** Input definitions returned by Gumloop. */
        inputs: Array<{
          /** The Gumloop input data type. */
          data_type?: "string" | "file";
          /** The input description, if Gumloop provides one. */
          description?: string | null;
          /** The input name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** The raw Gumloop object. */
        raw: Record<string, unknown>;
      };
    };
    /** Poll a Gumloop flow run and retrieve state, logs, and output node values. */
    "gumloop.get_run_details": {
      input: {
        /**
         * The Gumloop run ID.
         * @minLength 1
         */
        runId: string;
        /**
         * The Gumloop user ID. If omitted, the user ID stored during connection is used.
         * @minLength 1
         */
        userId?: string;
        /**
         * The Gumloop project or team ID.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** The Gumloop user ID associated with the run. */
        userId?: string;
        /** The Gumloop run state. */
        state: "RUNNING" | "DONE" | "TERMINATING" | "FAILED" | "TERMINATED" | "QUEUED";
        /** Output values keyed by Gumloop output node name. */
        outputs?: Record<string, unknown>;
        /**
         * The timestamp when the run was created.
         * @format date-time
         */
        createdTs?: string;
        /**
         * The timestamp when the run finished.
         * @format date-time
         */
        finishedTs?: string;
        /** Log entries returned by Gumloop. */
        log?: Array<string>;
        /** The raw Gumloop object. */
        raw: Record<string, unknown>;
      };
    };
    /** Kill a Gumloop flow run and its subflow runs. */
    "gumloop.kill_flow_run": {
      input: {
        /**
         * The Gumloop run ID.
         * @minLength 1
         */
        runId: string;
        /**
         * The Gumloop user ID. If omitted, the user ID stored during connection is used.
         * @minLength 1
         */
        userId?: string;
        /**
         * The Gumloop project or team ID.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** Whether Gumloop reports that the run was killed. */
        success: boolean;
        /** The Gumloop run ID that was killed. */
        runId: string;
        /** The raw Gumloop object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve recent Gumloop run history for a workbook or saved flow. */
    "gumloop.list_run_history": {
      input: {
        /**
         * The Gumloop workbook ID.
         * @minLength 1
         */
        workbookId?: string;
        /**
         * The Gumloop saved flow ID.
         * @minLength 1
         */
        savedItemId?: string;
        /**
         * The Gumloop user ID. If omitted, the user ID stored during connection is used.
         * @minLength 1
         */
        userId?: string;
        /**
         * The Gumloop project or team ID.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** The raw Gumloop object. */
        runHistory: Record<string, unknown>;
        /** The raw Gumloop object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Gumloop saved flows for a user or team. */
    "gumloop.list_saved_flows": {
      input: {
        /**
         * The Gumloop user ID. If omitted, the user ID stored during connection is used.
         * @minLength 1
         */
        userId?: string;
        /**
         * The Gumloop project or team ID.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** Saved flows returned by Gumloop. */
        savedFlows: Array<{
          /** The ID of the saved flow. */
          saved_item_id?: string;
          /** The name of the saved flow. */
          name?: string;
          /** The description of the saved flow. */
          description?: string;
          /**
           * The timestamp when the saved flow was created.
           * @format date-time
           */
          created_ts?: string;
          [key: string]: unknown;
        }>;
        /** The raw Gumloop object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Gumloop workbooks and their saved flows for a user or team. */
    "gumloop.list_workbooks": {
      input: {
        /**
         * The Gumloop user ID. If omitted, the user ID stored during connection is used.
         * @minLength 1
         */
        userId?: string;
        /**
         * The Gumloop project or team ID.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** Workbooks returned by Gumloop. */
        workbooks: Array<{
          /** The ID of the workbook. */
          workbook_id?: string;
          /** The name of the workbook. */
          name?: string;
          /** The description of the workbook. */
          description?: string;
          /**
           * The timestamp when the workbook was created.
           * @format date-time
           */
          created_ts?: string;
          /** Saved flows in the workbook. */
          saved_items?: Array<{
            /** The ID of the saved flow. */
            saved_item_id?: string;
            /** The name of the saved flow. */
            name?: string;
            /** The description of the saved flow. */
            description?: string;
            /**
             * The timestamp when the saved flow was created.
             * @format date-time
             */
            created_ts?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The raw Gumloop object. */
        raw: Record<string, unknown>;
      };
    };
    /** Start a Gumloop saved flow run with small JSON input values. */
    "gumloop.start_flow_run": {
      input: {
        /**
         * The Gumloop saved flow ID.
         * @minLength 1
         */
        savedItemId: string;
        /**
         * The Gumloop user ID. If omitted, the user ID stored during connection is used.
         * @minLength 1
         */
        userId?: string;
        /**
         * The Gumloop project or team ID.
         * @minLength 1
         */
        projectId?: string;
        /** Small JSON input values keyed by Gumloop Input node name. File inputs are deferred in this connector pass. */
        inputs?: Record<string, unknown>;
      };
      output: {
        /** The started Gumloop run ID. */
        runId: string;
        /** The Gumloop saved flow ID returned for the run. */
        savedItemId: string;
        /** The Gumloop workbook ID returned for the run. */
        workbookId: string;
        /** The Gumloop run URL returned by the API. */
        url: string;
        /** The raw Gumloop object. */
        raw: Record<string, unknown>;
      };
    };
  }
}

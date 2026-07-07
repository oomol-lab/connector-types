import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a LangSmith dataset. */
    "langsmith.create_dataset": {
      input: {
        /**
         * The dataset name.
         * @minLength 1
         */
        name: string;
        /** The dataset description. */
        description?: string;
        /** The LangSmith dataset data type. */
        data_type?: "kv" | "llm" | "chat";
        /** A JSON object forwarded to or returned by LangSmith. */
        inputs_schema_definition?: Record<string, unknown>;
        /** A JSON object forwarded to or returned by LangSmith. */
        outputs_schema_definition?: Record<string, unknown>;
        /** Provider-defined metadata forwarded to LangSmith. */
        metadata?: Record<string, unknown>;
        /** Whether the dataset is externally managed. */
        externally_managed?: boolean;
      };
      output: {
        /** A LangSmith dataset. */
        dataset: {
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          tenant_id: string;
          /** The dataset name. */
          name: string;
          /** The dataset description when returned. */
          description: string | null;
          /** The LangSmith dataset data type. */
          data_type: "kv" | "llm" | "chat" | null;
          /** The dataset creation timestamp when returned. */
          created_at: string | null;
          /** The dataset modification timestamp when returned. */
          modified_at: string | null;
          /** The dataset example count when returned. */
          example_count: number | null;
          /** The dataset experiment session count when returned. */
          session_count: number | null;
          /** Provider-defined metadata forwarded to LangSmith. */
          metadata: Record<string, unknown> | null;
          /** The raw dataset object returned by LangSmith. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a LangSmith dataset example with JSON inputs, outputs, and metadata. */
    "langsmith.create_example": {
      input: {
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        datasetId: string;
        /** A JSON object forwarded to or returned by LangSmith. */
        inputs?: Record<string, unknown>;
        /** A JSON object forwarded to or returned by LangSmith. */
        outputs?: Record<string, unknown>;
        /** Provider-defined metadata forwarded to LangSmith. */
        metadata?: Record<string, unknown>;
        /** One or more LangSmith dataset splits. */
        split?: string | Array<string>;
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        id?: string;
        /** The example creation timestamp. */
        created_at?: string;
      };
      output: {
        /** A LangSmith dataset example. */
        example: {
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          dataset_id: string;
          /** The example name when returned. */
          name: string | null;
          /** The example creation timestamp when returned. */
          created_at: string | null;
          /** The example modification timestamp when returned. */
          modified_at: string | null;
          /** The example input values. */
          inputs: Record<string, unknown>;
          /** A JSON object forwarded to or returned by LangSmith. */
          outputs: Record<string, unknown> | null;
          /** Provider-defined metadata forwarded to LangSmith. */
          metadata: Record<string, unknown> | null;
          /** The raw example object returned by LangSmith. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a LangSmith tracing project. */
    "langsmith.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** The project description. */
        description?: string;
        /** The project start timestamp. */
        start_time?: string;
        /** The project end timestamp. */
        end_time?: string;
        /** A JSON object forwarded to or returned by LangSmith. */
        extra?: Record<string, unknown>;
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        default_dataset_id?: string;
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        reference_dataset_id?: string;
        /** Whether LangSmith should upsert a project with the same name. */
        upsert?: boolean;
      };
      output: {
        /** A LangSmith tracing project. */
        project: {
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          tenant_id: string;
          /** The project name when returned. */
          name: string | null;
          /** The project description when returned. */
          description: string | null;
          /** The project start timestamp when returned. */
          start_time: string | null;
          /** The project end timestamp when returned. */
          end_time: string | null;
          /** The number of runs in the project when returned. */
          run_count: number | null;
          /** The project error rate when returned. */
          error_rate: number | null;
          /**
           * The default dataset ID when returned.
           * @format uuid
           */
          default_dataset_id: string | null;
          /**
           * The reference dataset ID when returned.
           * @format uuid
           */
          reference_dataset_id: string | null;
          /** The raw project object returned by LangSmith. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a LangSmith dataset by ID. */
    "langsmith.get_dataset": {
      input: {
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        datasetId: string;
      };
      output: {
        /** A LangSmith dataset. */
        dataset: {
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          tenant_id: string;
          /** The dataset name. */
          name: string;
          /** The dataset description when returned. */
          description: string | null;
          /** The LangSmith dataset data type. */
          data_type: "kv" | "llm" | "chat" | null;
          /** The dataset creation timestamp when returned. */
          created_at: string | null;
          /** The dataset modification timestamp when returned. */
          modified_at: string | null;
          /** The dataset example count when returned. */
          example_count: number | null;
          /** The dataset experiment session count when returned. */
          session_count: number | null;
          /** Provider-defined metadata forwarded to LangSmith. */
          metadata: Record<string, unknown> | null;
          /** The raw dataset object returned by LangSmith. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a LangSmith dataset example by ID. */
    "langsmith.get_example": {
      input: {
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        exampleId: string;
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        datasetId?: string;
        /** The dataset version timestamp or latest. */
        as_of?: string;
      };
      output: {
        /** A LangSmith dataset example. */
        example: {
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          dataset_id: string;
          /** The example name when returned. */
          name: string | null;
          /** The example creation timestamp when returned. */
          created_at: string | null;
          /** The example modification timestamp when returned. */
          modified_at: string | null;
          /** The example input values. */
          inputs: Record<string, unknown>;
          /** A JSON object forwarded to or returned by LangSmith. */
          outputs: Record<string, unknown> | null;
          /** Provider-defined metadata forwarded to LangSmith. */
          metadata: Record<string, unknown> | null;
          /** The raw example object returned by LangSmith. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a LangSmith tracing project by ID. */
    "langsmith.get_project": {
      input: {
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        projectId: string;
        /** Whether LangSmith should include project statistics. */
        include_stats?: boolean;
      };
      output: {
        /** A LangSmith tracing project. */
        project: {
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          tenant_id: string;
          /** The project name when returned. */
          name: string | null;
          /** The project description when returned. */
          description: string | null;
          /** The project start timestamp when returned. */
          start_time: string | null;
          /** The project end timestamp when returned. */
          end_time: string | null;
          /** The number of runs in the project when returned. */
          run_count: number | null;
          /** The project error rate when returned. */
          error_rate: number | null;
          /**
           * The default dataset ID when returned.
           * @format uuid
           */
          default_dataset_id: string | null;
          /**
           * The reference dataset ID when returned.
           * @format uuid
           */
          reference_dataset_id: string | null;
          /** The raw project object returned by LangSmith. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List LangSmith datasets with optional name, type, and pagination filters. */
    "langsmith.list_datasets": {
      input: {
        /**
         * A non-empty string value.
         * @minLength 1
         */
        name?: string;
        /**
         * A non-empty string value.
         * @minLength 1
         */
        name_contains?: string;
        /** The LangSmith dataset data type. */
        data_type?: "kv" | "llm" | "chat";
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The datasets returned by LangSmith. */
        datasets: Array<{
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          tenant_id: string;
          /** The dataset name. */
          name: string;
          /** The dataset description when returned. */
          description: string | null;
          /** The LangSmith dataset data type. */
          data_type: "kv" | "llm" | "chat" | null;
          /** The dataset creation timestamp when returned. */
          created_at: string | null;
          /** The dataset modification timestamp when returned. */
          modified_at: string | null;
          /** The dataset example count when returned. */
          example_count: number | null;
          /** The dataset experiment session count when returned. */
          session_count: number | null;
          /** Provider-defined metadata forwarded to LangSmith. */
          metadata: Record<string, unknown> | null;
          /** The raw dataset object returned by LangSmith. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List LangSmith dataset examples with optional dataset and text filters. */
    "langsmith.list_examples": {
      input: {
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        datasetId?: string;
        /**
         * Text fragments that LangSmith should search for.
         * @minItems 1
         */
        full_text_contains?: Array<string>;
        /** The dataset version timestamp or latest. */
        as_of?: string;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The examples returned by LangSmith. */
        examples: Array<{
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          dataset_id: string;
          /** The example name when returned. */
          name: string | null;
          /** The example creation timestamp when returned. */
          created_at: string | null;
          /** The example modification timestamp when returned. */
          modified_at: string | null;
          /** The example input values. */
          inputs: Record<string, unknown>;
          /** A JSON object forwarded to or returned by LangSmith. */
          outputs: Record<string, unknown> | null;
          /** Provider-defined metadata forwarded to LangSmith. */
          metadata: Record<string, unknown> | null;
          /** The raw example object returned by LangSmith. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List LangSmith tracing projects with optional name and pagination filters. */
    "langsmith.list_projects": {
      input: {
        /**
         * A non-empty string value.
         * @minLength 1
         */
        name?: string;
        /**
         * A non-empty string value.
         * @minLength 1
         */
        name_contains?: string;
        /** Whether LangSmith should include project statistics. */
        include_stats?: boolean;
        /** Whether LangSmith should sort descending. */
        sort_by_desc?: boolean;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The projects returned by LangSmith. */
        projects: Array<{
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          tenant_id: string;
          /** The project name when returned. */
          name: string | null;
          /** The project description when returned. */
          description: string | null;
          /** The project start timestamp when returned. */
          start_time: string | null;
          /** The project end timestamp when returned. */
          end_time: string | null;
          /** The number of runs in the project when returned. */
          run_count: number | null;
          /** The project error rate when returned. */
          error_rate: number | null;
          /**
           * The default dataset ID when returned.
           * @format uuid
           */
          default_dataset_id: string | null;
          /**
           * The reference dataset ID when returned.
           * @format uuid
           */
          reference_dataset_id: string | null;
          /** The raw project object returned by LangSmith. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List LangSmith workspaces visible to the connected API key. */
    "langsmith.list_workspaces": {
      input: {
        /** Whether to include deleted workspaces in the response. */
        include_deleted?: boolean;
        /**
         * The LangSmith UUID.
         * @format uuid
         */
        data_plane_id?: string;
      };
      output: {
        /** The workspaces returned by LangSmith. */
        workspaces: Array<{
          /**
           * The LangSmith UUID.
           * @format uuid
           */
          id: string;
          /**
           * The organization ID that owns the workspace.
           * @format uuid
           */
          organization_id: string | null;
          /** The workspace display name. */
          display_name: string;
          /** Whether this is a personal workspace. */
          is_personal: boolean;
          /** Whether LangSmith marks the workspace as deleted. */
          is_deleted: boolean;
          /** The workspace handle when returned. */
          tenant_handle: string | null;
          /** The workspace data-plane URL when returned. */
          data_plane_url: string | null;
          /** The raw workspace object returned by LangSmith. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}

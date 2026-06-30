import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a Griptape Cloud assistant run. */
    "griptape.cancel_assistant_run": {
      input: {
        /**
         * The Griptape Cloud assistant run ID.
         * @minLength 1
         */
        assistant_run_id: string;
      };
      output: {
        /** A Griptape Cloud assistant run. */
        assistant_run: {
          /**
           * The Griptape Cloud assistant run ID.
           * @minLength 1
           */
          assistant_run_id?: string;
          /**
           * The assistant ID associated with this run.
           * @minLength 1
           */
          assistant_id?: string;
          /** Arguments passed to the assistant run. */
          args?: Array<string>;
          /** Input text passed to the assistant run. */
          input?: string;
          /** A raw Griptape Cloud JSON value. */
          output?: unknown;
          /** The model used for the assistant run. */
          model?: string;
          /** The assistant run status. */
          status?: "QUEUED" | "STARTING" | "RUNNING" | "SUCCEEDED" | "FAILED" | "ERROR" | "CANCELLED";
          /** A raw Griptape Cloud JSON value. */
          status_detail?: unknown;
          /** Whether the assistant run was requested as a streaming run. */
          stream?: boolean;
          /** The thread ID associated with the assistant run. */
          thread_id?: string;
          /** Knowledge base IDs used by the assistant run. */
          knowledge_base_ids?: Array<string>;
          /** Retriever IDs used by the assistant run. */
          retriever_ids?: Array<string>;
          /** Ruleset IDs used by the assistant run. */
          ruleset_ids?: Array<string>;
          /** Structure IDs used by the assistant run. */
          structure_ids?: Array<string>;
          /** Tool IDs used by the assistant run. */
          tool_ids?: Array<string>;
          /**
           * The assistant run completion timestamp.
           * @format date-time
           */
          completed_at?: string | null;
          /**
           * The assistant run creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the assistant run. */
          created_by?: string;
          /**
           * The assistant run update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Griptape Cloud assistant. */
    "griptape.create_assistant": {
      input: {
        /**
         * The assistant name.
         * @minLength 1
         * @maxLength 200
         */
        name: string;
        /**
         * The assistant description.
         * @minLength 1
         * @maxLength 200
         */
        description?: string;
        /** Default input instructions for the assistant. */
        input?: string;
        /** The model to use for the assistant. */
        model?: string;
        /** Knowledge base IDs to attach to the assistant. */
        knowledge_base_ids?: Array<string>;
        /** Retriever IDs to attach to the assistant. */
        retriever_ids?: Array<string>;
        /** Ruleset IDs to attach to the assistant. */
        ruleset_ids?: Array<string>;
        /** Structure IDs to attach to the assistant. */
        structure_ids?: Array<string>;
        /** Tool IDs to attach to the assistant. */
        tool_ids?: Array<string>;
      };
      output: {
        /** A Griptape Cloud assistant. */
        assistant: {
          /**
           * The Griptape Cloud assistant ID.
           * @minLength 1
           */
          assistant_id?: string;
          /** The assistant name. */
          name?: string;
          /** The assistant description. */
          description?: string;
          /** Default input instructions for the assistant. */
          input?: string;
          /** The model configured for the assistant. */
          model?: string;
          /** The organization ID that owns the assistant. */
          organization_id?: string;
          /** Knowledge base IDs attached to the assistant. */
          knowledge_base_ids?: Array<string>;
          /** Retriever IDs attached to the assistant. */
          retriever_ids?: Array<string>;
          /** Ruleset IDs attached to the assistant. */
          ruleset_ids?: Array<string>;
          /** Structure IDs attached to the assistant. */
          structure_ids?: Array<string>;
          /** Tool IDs attached to the assistant. */
          tool_ids?: Array<string>;
          /**
           * The assistant creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the assistant. */
          created_by?: string;
          /**
           * The assistant update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a run for a Griptape Cloud assistant. */
    "griptape.create_assistant_run": {
      input: {
        /**
         * The Griptape Cloud assistant ID.
         * @minLength 1
         */
        assistant_id: string;
        /** Input text for the assistant run. */
        input?: string;
        /** Arguments for the assistant run. */
        args?: Array<string>;
        /** The model to use for this run. */
        model?: string;
        /** Whether Griptape Cloud should create a new thread for this run. */
        new_thread?: boolean;
        /**
         * The existing thread ID to associate with this run.
         * @minLength 1
         */
        thread_id?: string;
        /** Knowledge base IDs to use for this run. */
        knowledge_base_ids?: Array<string>;
        /** Additional knowledge base IDs for this run. */
        additional_knowledge_base_ids?: Array<string>;
        /** Retriever IDs to use for this run. */
        retriever_ids?: Array<string>;
        /** Additional retriever IDs for this run. */
        additional_retriever_ids?: Array<string>;
        /** Ruleset IDs to use for this run. */
        ruleset_ids?: Array<string>;
        /** Additional ruleset IDs for this run. */
        additional_ruleset_ids?: Array<string>;
        /** Structure IDs to use for this run. */
        structure_ids?: Array<string>;
        /** Additional structure IDs for this run. */
        additional_structure_ids?: Array<string>;
        /** Tool IDs to use for this run. */
        tool_ids?: Array<string>;
        /** Additional tool IDs for this run. */
        additional_tool_ids?: Array<string>;
      };
      output: {
        /** A Griptape Cloud assistant run. */
        assistant_run: {
          /**
           * The Griptape Cloud assistant run ID.
           * @minLength 1
           */
          assistant_run_id?: string;
          /**
           * The assistant ID associated with this run.
           * @minLength 1
           */
          assistant_id?: string;
          /** Arguments passed to the assistant run. */
          args?: Array<string>;
          /** Input text passed to the assistant run. */
          input?: string;
          /** A raw Griptape Cloud JSON value. */
          output?: unknown;
          /** The model used for the assistant run. */
          model?: string;
          /** The assistant run status. */
          status?: "QUEUED" | "STARTING" | "RUNNING" | "SUCCEEDED" | "FAILED" | "ERROR" | "CANCELLED";
          /** A raw Griptape Cloud JSON value. */
          status_detail?: unknown;
          /** Whether the assistant run was requested as a streaming run. */
          stream?: boolean;
          /** The thread ID associated with the assistant run. */
          thread_id?: string;
          /** Knowledge base IDs used by the assistant run. */
          knowledge_base_ids?: Array<string>;
          /** Retriever IDs used by the assistant run. */
          retriever_ids?: Array<string>;
          /** Ruleset IDs used by the assistant run. */
          ruleset_ids?: Array<string>;
          /** Structure IDs used by the assistant run. */
          structure_ids?: Array<string>;
          /** Tool IDs used by the assistant run. */
          tool_ids?: Array<string>;
          /**
           * The assistant run completion timestamp.
           * @format date-time
           */
          completed_at?: string | null;
          /**
           * The assistant run creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the assistant run. */
          created_by?: string;
          /**
           * The assistant run update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Griptape Cloud assistant. */
    "griptape.delete_assistant": {
      input: {
        /**
         * The Griptape Cloud assistant ID.
         * @minLength 1
         */
        assistant_id: string;
      };
      output: {
        /** Whether the assistant was deleted. */
        deleted: boolean;
      };
    };
    /** Retrieve one Griptape Cloud assistant by ID. */
    "griptape.get_assistant": {
      input: {
        /**
         * The Griptape Cloud assistant ID.
         * @minLength 1
         */
        assistant_id: string;
      };
      output: {
        /** A Griptape Cloud assistant. */
        assistant: {
          /**
           * The Griptape Cloud assistant ID.
           * @minLength 1
           */
          assistant_id?: string;
          /** The assistant name. */
          name?: string;
          /** The assistant description. */
          description?: string;
          /** Default input instructions for the assistant. */
          input?: string;
          /** The model configured for the assistant. */
          model?: string;
          /** The organization ID that owns the assistant. */
          organization_id?: string;
          /** Knowledge base IDs attached to the assistant. */
          knowledge_base_ids?: Array<string>;
          /** Retriever IDs attached to the assistant. */
          retriever_ids?: Array<string>;
          /** Ruleset IDs attached to the assistant. */
          ruleset_ids?: Array<string>;
          /** Structure IDs attached to the assistant. */
          structure_ids?: Array<string>;
          /** Tool IDs attached to the assistant. */
          tool_ids?: Array<string>;
          /**
           * The assistant creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the assistant. */
          created_by?: string;
          /**
           * The assistant update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Griptape Cloud assistant run by ID. */
    "griptape.get_assistant_run": {
      input: {
        /**
         * The Griptape Cloud assistant run ID.
         * @minLength 1
         */
        assistant_run_id: string;
      };
      output: {
        /** A Griptape Cloud assistant run. */
        assistant_run: {
          /**
           * The Griptape Cloud assistant run ID.
           * @minLength 1
           */
          assistant_run_id?: string;
          /**
           * The assistant ID associated with this run.
           * @minLength 1
           */
          assistant_id?: string;
          /** Arguments passed to the assistant run. */
          args?: Array<string>;
          /** Input text passed to the assistant run. */
          input?: string;
          /** A raw Griptape Cloud JSON value. */
          output?: unknown;
          /** The model used for the assistant run. */
          model?: string;
          /** The assistant run status. */
          status?: "QUEUED" | "STARTING" | "RUNNING" | "SUCCEEDED" | "FAILED" | "ERROR" | "CANCELLED";
          /** A raw Griptape Cloud JSON value. */
          status_detail?: unknown;
          /** Whether the assistant run was requested as a streaming run. */
          stream?: boolean;
          /** The thread ID associated with the assistant run. */
          thread_id?: string;
          /** Knowledge base IDs used by the assistant run. */
          knowledge_base_ids?: Array<string>;
          /** Retriever IDs used by the assistant run. */
          retriever_ids?: Array<string>;
          /** Ruleset IDs used by the assistant run. */
          ruleset_ids?: Array<string>;
          /** Structure IDs used by the assistant run. */
          structure_ids?: Array<string>;
          /** Tool IDs used by the assistant run. */
          tool_ids?: Array<string>;
          /**
           * The assistant run completion timestamp.
           * @format date-time
           */
          completed_at?: string | null;
          /**
           * The assistant run creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the assistant run. */
          created_by?: string;
          /**
           * The assistant run update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Griptape Cloud organization by ID. */
    "griptape.get_organization": {
      input: {
        /**
         * The Griptape Cloud organization ID.
         * @minLength 1
         */
        organization_id: string;
      };
      output: {
        /** A Griptape Cloud organization. */
        organization: {
          /**
           * The Griptape Cloud organization ID.
           * @minLength 1
           */
          organization_id?: string;
          /** The organization name. */
          name?: string;
          /** The organization description. */
          description?: string;
          /** The default bucket ID for the organization. */
          default_bucket_id?: string;
          /** The organization entitlement tier. */
          entitlement?: string;
          /**
           * The organization creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the organization. */
          created_by?: string;
          /**
           * The organization update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** A raw Griptape Cloud object. */
          model_config?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** List non-streaming events for a Griptape Cloud assistant run. */
    "griptape.list_assistant_events": {
      input: {
        /**
         * The Griptape Cloud assistant run ID.
         * @minLength 1
         */
        assistant_run_id: string;
        /**
         * The maximum number of events to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The event offset to start from.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Griptape Cloud assistant events. */
        events: Array<{
          /**
           * The Griptape Cloud event ID.
           * @minLength 1
           */
          event_id?: string;
          /**
           * The assistant run ID associated with this event.
           * @minLength 1
           */
          assistant_run_id?: string;
          /** The event type. */
          type?: string;
          /** The event origin. */
          origin?: string;
          /** A raw Griptape Cloud JSON value. */
          payload?: unknown;
          /** The event timestamp. */
          timestamp?: number;
          /**
           * The event creation timestamp.
           * @format date-time
           */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** The number of events returned. */
        count: number;
        /** The requested event limit. */
        limit: number;
        /** The requested event offset. */
        offset: number;
        /** The next event offset, if available. */
        next_offset?: number;
        /** The total number of events. */
        total_count: number;
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** List runs for a Griptape Cloud assistant. */
    "griptape.list_assistant_runs": {
      input: {
        /**
         * The Griptape Cloud assistant ID.
         * @minLength 1
         */
        assistant_id: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
        /**
         * Assistant run statuses to filter by.
         * @minItems 1
         */
        status?: Array<"QUEUED" | "STARTING" | "RUNNING" | "SUCCEEDED" | "FAILED" | "ERROR" | "CANCELLED">;
      };
      output: {
        /** Griptape Cloud assistant runs. */
        assistant_runs: Array<{
          /**
           * The Griptape Cloud assistant run ID.
           * @minLength 1
           */
          assistant_run_id?: string;
          /**
           * The assistant ID associated with this run.
           * @minLength 1
           */
          assistant_id?: string;
          /** Arguments passed to the assistant run. */
          args?: Array<string>;
          /** Input text passed to the assistant run. */
          input?: string;
          /** A raw Griptape Cloud JSON value. */
          output?: unknown;
          /** The model used for the assistant run. */
          model?: string;
          /** The assistant run status. */
          status?: "QUEUED" | "STARTING" | "RUNNING" | "SUCCEEDED" | "FAILED" | "ERROR" | "CANCELLED";
          /** A raw Griptape Cloud JSON value. */
          status_detail?: unknown;
          /** Whether the assistant run was requested as a streaming run. */
          stream?: boolean;
          /** The thread ID associated with the assistant run. */
          thread_id?: string;
          /** Knowledge base IDs used by the assistant run. */
          knowledge_base_ids?: Array<string>;
          /** Retriever IDs used by the assistant run. */
          retriever_ids?: Array<string>;
          /** Ruleset IDs used by the assistant run. */
          ruleset_ids?: Array<string>;
          /** Structure IDs used by the assistant run. */
          structure_ids?: Array<string>;
          /** Tool IDs used by the assistant run. */
          tool_ids?: Array<string>;
          /**
           * The assistant run completion timestamp.
           * @format date-time
           */
          completed_at?: string | null;
          /**
           * The assistant run creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the assistant run. */
          created_by?: string;
          /**
           * The assistant run update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Griptape Cloud. */
        pagination: {
          /** The current page number. */
          page_number?: number;
          /** The number of records per page. */
          page_size?: number;
          /** The total number of records. */
          total_count?: number;
          /** The total number of pages. */
          total_pages?: number;
          /** The next page number, if one exists. */
          next_page?: number;
          /** The previous page number, if one exists. */
          previous_page?: number;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Griptape Cloud assistants with optional pagination. */
    "griptape.list_assistants": {
      input: {
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** Griptape Cloud assistants. */
        assistants: Array<{
          /**
           * The Griptape Cloud assistant ID.
           * @minLength 1
           */
          assistant_id?: string;
          /** The assistant name. */
          name?: string;
          /** The assistant description. */
          description?: string;
          /** Default input instructions for the assistant. */
          input?: string;
          /** The model configured for the assistant. */
          model?: string;
          /** The organization ID that owns the assistant. */
          organization_id?: string;
          /** Knowledge base IDs attached to the assistant. */
          knowledge_base_ids?: Array<string>;
          /** Retriever IDs attached to the assistant. */
          retriever_ids?: Array<string>;
          /** Ruleset IDs attached to the assistant. */
          ruleset_ids?: Array<string>;
          /** Structure IDs attached to the assistant. */
          structure_ids?: Array<string>;
          /** Tool IDs attached to the assistant. */
          tool_ids?: Array<string>;
          /**
           * The assistant creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the assistant. */
          created_by?: string;
          /**
           * The assistant update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Griptape Cloud. */
        pagination: {
          /** The current page number. */
          page_number?: number;
          /** The number of records per page. */
          page_size?: number;
          /** The total number of records. */
          total_count?: number;
          /** The total number of pages. */
          total_pages?: number;
          /** The next page number, if one exists. */
          next_page?: number;
          /** The previous page number, if one exists. */
          previous_page?: number;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Griptape Cloud organizations accessible to the API key. */
    "griptape.list_organizations": {
      input: Record<string, never>;
      output: {
        /** Accessible Griptape Cloud organizations. */
        organizations: Array<{
          /**
           * The Griptape Cloud organization ID.
           * @minLength 1
           */
          organization_id?: string;
          /** The organization name. */
          name?: string;
          /** The organization description. */
          description?: string;
          /** The default bucket ID for the organization. */
          default_bucket_id?: string;
          /** The organization entitlement tier. */
          entitlement?: string;
          /**
           * The organization creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the organization. */
          created_by?: string;
          /**
           * The organization update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** A raw Griptape Cloud object. */
          model_config?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Griptape Cloud assistant. */
    "griptape.update_assistant": {
      input: {
        /**
         * The Griptape Cloud assistant ID.
         * @minLength 1
         */
        assistant_id: string;
        /**
         * The assistant name.
         * @minLength 1
         * @maxLength 200
         */
        name?: string;
        /**
         * The assistant description.
         * @minLength 1
         * @maxLength 200
         */
        description?: string;
        /** Default input instructions for the assistant. */
        input?: string;
        /** The model to use for the assistant. */
        model?: string;
        /** Knowledge base IDs to attach to the assistant. */
        knowledge_base_ids?: Array<string>;
        /** Retriever IDs to attach to the assistant. */
        retriever_ids?: Array<string>;
        /** Ruleset IDs to attach to the assistant. */
        ruleset_ids?: Array<string>;
        /** Structure IDs to attach to the assistant. */
        structure_ids?: Array<string>;
        /** Tool IDs to attach to the assistant. */
        tool_ids?: Array<string>;
      };
      output: {
        /** A Griptape Cloud assistant. */
        assistant: {
          /**
           * The Griptape Cloud assistant ID.
           * @minLength 1
           */
          assistant_id?: string;
          /** The assistant name. */
          name?: string;
          /** The assistant description. */
          description?: string;
          /** Default input instructions for the assistant. */
          input?: string;
          /** The model configured for the assistant. */
          model?: string;
          /** The organization ID that owns the assistant. */
          organization_id?: string;
          /** Knowledge base IDs attached to the assistant. */
          knowledge_base_ids?: Array<string>;
          /** Retriever IDs attached to the assistant. */
          retriever_ids?: Array<string>;
          /** Ruleset IDs attached to the assistant. */
          ruleset_ids?: Array<string>;
          /** Structure IDs attached to the assistant. */
          structure_ids?: Array<string>;
          /** Tool IDs attached to the assistant. */
          tool_ids?: Array<string>;
          /**
           * The assistant creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The user that created the assistant. */
          created_by?: string;
          /**
           * The assistant update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** A raw Griptape Cloud object. */
        raw: Record<string, unknown>;
      };
    };
  }
}

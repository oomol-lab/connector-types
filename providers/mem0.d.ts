import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add new memories to Mem0 from messages or direct memory text. */
    "mem0.add_memories": {
      input: {
        /**
         * A single memory string to write directly.
         * @minLength 1
         */
        memory?: string;
        /**
         * The list of messages used to generate memory.
         * @minItems 1
         */
        messages?: Array<{
          /**
           * The message role, such as user or assistant.
           * @minLength 1
           */
          role: string;
          /**
           * The text content of the message.
           * @minLength 1
           */
          content: string;
        }>;
        /**
         * The associated user identifier.
         * @minLength 1
         */
        user_id?: string;
        /**
         * The associated agent identifier.
         * @minLength 1
         */
        agent_id?: string;
        /**
         * The associated application identifier.
         * @minLength 1
         */
        app_id?: string;
        /**
         * The associated run identifier.
         * @minLength 1
         */
        run_id?: string;
        /**
         * An optional organization identifier.
         * @minLength 1
         */
        org_id?: string;
        /**
         * An optional project identifier.
         * @minLength 1
         */
        project_id?: string;
        /** Metadata to attach to the new memory. */
        metadata?: Record<string, unknown>;
        /** The custom category definitions used during memory extraction. */
        custom_categories?: Record<string, string>;
        /** Whether graph memory extraction should be enabled for this request. */
        enable_graph?: boolean;
        /** Whether Mem0 should infer structured memory from the messages. */
        infer?: boolean;
        /** Whether the write should be processed asynchronously. */
        async_mode?: boolean;
        /** The response wrapper format version. */
        output_format?: "v1.0" | "v1.1";
        /** The memory extraction engine version. */
        version?: "v1" | "v2";
        /**
         * Additional instructions used to guide memory extraction.
         * @minLength 1
         */
        custom_instructions?: string;
        /** Whether the created memory should be treated as immutable. */
        immutable?: boolean;
        /** The Unix timestamp associated with the memory input. */
        timestamp?: number;
        /**
         * The expiration date to attach to the created memory.
         * @minLength 1
         */
        expiration_date?: string;
        /**
         * A string list of keywords that should be prioritized.
         * @minLength 1
         */
        includes?: string;
        /**
         * A string list of keywords that should be excluded.
         * @minLength 1
         */
        excludes?: string;
      };
      output: Array<{
        /** The asynchronous event identifier. */
        event_id: string;
        /** The asynchronous processing status. */
        status: string;
        /** A status message for asynchronous processing. */
        message: string;
      } | {
        /** The identifier of the created or updated memory. */
        id: string;
        /** The event type associated with this result. */
        event: string;
        /** The generated memory text returned by Mem0. */
        memory: string;
        /** The structured attributes extracted for the generated memory. */
        structured_attributes?: Record<string, unknown>;
        [key: string]: unknown;
      } | {
        /** The identifier of the created or updated memory. */
        id: string;
        /** The event type associated with this result. */
        event: string;
        /** The nested processed memory payload. */
        data: {
          /** The generated memory text returned by Mem0. */
          memory?: string;
          /** The structured attributes extracted for the generated memory. */
          structured_attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }> | {
        /** The list of memory creation results. */
        results: Array<{
          /** The asynchronous event identifier. */
          event_id: string;
          /** The asynchronous processing status. */
          status: string;
          /** A status message for asynchronous processing. */
          message: string;
        } | {
          /** The identifier of the created or updated memory. */
          id: string;
          /** The event type associated with this result. */
          event: string;
          /** The generated memory text returned by Mem0. */
          memory: string;
          /** The structured attributes extracted for the generated memory. */
          structured_attributes?: Record<string, unknown>;
          [key: string]: unknown;
        } | {
          /** The identifier of the created or updated memory. */
          id: string;
          /** The event type associated with this result. */
          event: string;
          /** The nested processed memory payload. */
          data: {
            /** The generated memory text returned by Mem0. */
            memory?: string;
            /** The structured attributes extracted for the generated memory. */
            structured_attributes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete a Mem0 memory by memory ID. */
    "mem0.delete_memory": {
      input: {
        /**
         * The unique identifier of the target memory.
         * @minLength 1
         */
        memory_id: string;
      };
      output: {
        /** The identifier of the deleted memory. */
        memory_id: string;
        /** Whether the memory was deleted successfully. */
        deleted: boolean;
        /** A deletion status message. */
        message?: string;
      };
    };
    /** Get a single Mem0 event by event ID. */
    "mem0.get_event": {
      input: {
        /**
         * The unique identifier of the target event.
         * @minLength 1
         */
        event_id: string;
      };
      output: {
        /** The unique identifier of the event. */
        id: string;
        /** The event type. */
        event_type: string;
        /** The processing status of the event. */
        status: string;
        /** The raw request payload captured for the event. */
        payload: Record<string, unknown>;
        /** The list of event processing results. */
        results?: Array<unknown>;
        /** Additional metadata attached to the event. */
        metadata?: Record<string, unknown>;
        latency?: number | null;
        /** The graph-memory processing status. */
        graph_status?: unknown;
        /** The timestamp when the event was created. */
        created_at: string;
        /** The timestamp when the event was last updated. */
        updated_at: string;
        /** The timestamp when event processing started. */
        started_at?: string | null;
        /** The timestamp when event processing completed. */
        completed_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** List Mem0 events for the current API key. */
    "mem0.get_events": {
      input: {
        /**
         * Filter events by event type.
         * @minLength 1
         */
        event_type?: string;
        /**
         * The start date filter, typically in YYYY-MM-DD format.
         * @minLength 1
         */
        start_date?: string;
        /**
         * The end date filter, typically in YYYY-MM-DD format.
         * @minLength 1
         */
        end_date?: string;
        /**
         * The page number to request, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** The total number of events matching the current query. */
        count: number;
        /** The URL of the next page, if present. */
        next?: string | null;
        /** The URL of the previous page, if present. */
        previous?: string | null;
        /** The list of event records. */
        results: Array<{
          /** The unique identifier of the event. */
          id: string;
          /** The event type. */
          event_type: string;
          /** The processing status of the event. */
          status: string;
          /** The raw request payload captured for the event. */
          payload: Record<string, unknown>;
          /** The list of event processing results. */
          results?: Array<unknown>;
          /** Additional metadata attached to the event. */
          metadata?: Record<string, unknown>;
          latency?: number | null;
          /** The graph-memory processing status. */
          graph_status?: unknown;
          /** The timestamp when the event was created. */
          created_at: string;
          /** The timestamp when the event was last updated. */
          updated_at: string;
          /** The timestamp when event processing started. */
          started_at?: string | null;
          /** The timestamp when event processing completed. */
          completed_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List memories from Mem0 with v2 advanced filters. */
    "mem0.get_memories": {
      input: {
        /** The advanced filter object supported by the Mem0 v2 memories API. */
        filters: Record<string, unknown>;
        /**
         * The page number to request, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /**
         * An optional organization identifier.
         * @minLength 1
         */
        org_id?: string;
        /**
         * An optional project identifier.
         * @minLength 1
         */
        project_id?: string;
      };
      output: Array<{
        /** The unique identifier of the memory. */
        id: string;
        /** The memory text content. */
        memory?: string;
        /** The updated memory text returned by some write operations. */
        text?: string;
        /** The content hash of the memory. */
        hash?: string;
        /** The associated user identifier. */
        user_id?: string;
        /** The associated agent identifier. */
        agent_id?: string;
        /** The associated application identifier. */
        app_id?: string;
        /** The associated run identifier. */
        run_id?: string;
        /** Additional metadata stored with the memory. */
        metadata?: Record<string, unknown>;
        /** The categories assigned to the memory. */
        categories?: Array<string>;
        /** The timestamp when the memory was created. */
        created_at?: string;
        /** The timestamp when the memory was last updated. */
        updated_at?: string;
        /** The expiration date of the memory. */
        expiration_date?: string;
        /** The relevance score returned by search results. */
        score?: number;
        /** The input messages used to generate the memory. */
        input?: Array<{
          /**
           * The message role, such as user or assistant.
           * @minLength 1
           */
          role: string;
          /**
           * The text content of the message.
           * @minLength 1
           */
          content: string;
        }>;
        /** Structured attributes extracted from the memory. */
        structured_attributes?: Record<string, unknown>;
        [key: string]: unknown;
      }>;
    };
    /** Get a single memory from Mem0 by memory ID. */
    "mem0.get_memory": {
      input: {
        /**
         * The unique identifier of the target memory.
         * @minLength 1
         */
        memory_id: string;
      };
      output: {
        /** The unique identifier of the memory. */
        id: string;
        /** The memory text content. */
        memory?: string;
        /** The updated memory text returned by some write operations. */
        text?: string;
        /** The content hash of the memory. */
        hash?: string;
        /** The associated user identifier. */
        user_id?: string;
        /** The associated agent identifier. */
        agent_id?: string;
        /** The associated application identifier. */
        app_id?: string;
        /** The associated run identifier. */
        run_id?: string;
        /** Additional metadata stored with the memory. */
        metadata?: Record<string, unknown>;
        /** The categories assigned to the memory. */
        categories?: Array<string>;
        /** The timestamp when the memory was created. */
        created_at?: string;
        /** The timestamp when the memory was last updated. */
        updated_at?: string;
        /** The expiration date of the memory. */
        expiration_date?: string;
        /** The relevance score returned by search results. */
        score?: number;
        /** The input messages used to generate the memory. */
        input?: Array<{
          /**
           * The message role, such as user or assistant.
           * @minLength 1
           */
          role: string;
          /**
           * The text content of the message.
           * @minLength 1
           */
          content: string;
        }>;
        /** Structured attributes extracted from the memory. */
        structured_attributes?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the change history of a Mem0 memory by memory ID. */
    "mem0.get_memory_history": {
      input: {
        /**
         * The unique identifier of the target memory.
         * @minLength 1
         */
        memory_id: string;
      };
      output: Array<{
        /** The unique identifier of the history entry. */
        id: string;
        /** The identifier of the related memory. */
        memory_id?: string;
        /** The history event type. */
        event?: string;
        /** The memory text before the change. */
        old_memory?: string | null;
        /** The memory text after the change. */
        new_memory?: string | null;
        /** The input messages that triggered the change. */
        input?: Array<{
          /**
           * The message role, such as user or assistant.
           * @minLength 1
           */
          role: string;
          /**
           * The text content of the message.
           * @minLength 1
           */
          content: string;
        }>;
        /** Additional metadata associated with the history entry. */
        metadata?: Record<string, unknown>;
        /** The timestamp when the history entry was created. */
        created_at?: string;
        /** The timestamp when the history entry was last updated. */
        updated_at?: string;
        /** The associated user identifier. */
        user_id?: string;
        [key: string]: unknown;
      }>;
    };
    /** List user entities from Mem0, optionally scoped by org and project. */
    "mem0.get_users": {
      input: {
        /**
         * An optional organization identifier.
         * @minLength 1
         */
        org_id?: string;
        /**
         * An optional project identifier.
         * @minLength 1
         */
        project_id?: string;
      };
      output: {
        /** The entity type returned by the current query. */
        entity_type?: string;
        /** The total number of user entities. */
        count: number;
        /** The URL of the next page, if present. */
        next?: string | null;
        /** The URL of the previous page, if present. */
        previous?: string | null;
        /** The list of user entities. */
        results: Array<{
          /** The unique identifier of the user entity. */
          id: string;
          /** The display name of the user entity. */
          name?: string;
          /** The entity type. */
          type?: string;
          /** The owner of the entity. */
          owner?: string;
          /** Additional metadata attached to the user entity. */
          metadata?: Record<string, unknown>;
          /** The timestamp when the user entity was created. */
          created_at?: string;
          /** The timestamp when the user entity was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search memories in Mem0 with semantic query and optional filters. */
    "mem0.search_memories": {
      input: {
        /**
         * The natural-language query used for semantic search.
         * @minLength 1
         */
        query: string;
        /** An optional advanced filter object. */
        filters?: Record<string, unknown>;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        top_k?: number;
        /** Whether Mem0 should rerank the initial search results. */
        rerank?: boolean;
        /** The semantic similarity threshold. */
        threshold?: number;
        /** The list of fields to return. */
        fields?: Array<string>;
        /** Whether Mem0 should perform keyword search instead of semantic search. */
        keyword_search?: boolean;
        /** Whether Mem0 should strictly apply the provided filters. */
        filter_memories?: boolean;
        /**
         * An optional organization identifier.
         * @minLength 1
         */
        org_id?: string;
        /**
         * An optional project identifier.
         * @minLength 1
         */
        project_id?: string;
      };
      output: Array<{
        /** The unique identifier of the memory. */
        id: string;
        /** The memory text content. */
        memory?: string;
        /** The updated memory text returned by some write operations. */
        text?: string;
        /** The content hash of the memory. */
        hash?: string;
        /** The associated user identifier. */
        user_id?: string;
        /** The associated agent identifier. */
        agent_id?: string;
        /** The associated application identifier. */
        app_id?: string;
        /** The associated run identifier. */
        run_id?: string;
        /** Additional metadata stored with the memory. */
        metadata?: Record<string, unknown>;
        /** The categories assigned to the memory. */
        categories?: Array<string>;
        /** The timestamp when the memory was created. */
        created_at?: string;
        /** The timestamp when the memory was last updated. */
        updated_at?: string;
        /** The expiration date of the memory. */
        expiration_date?: string;
        /** The relevance score returned by search results. */
        score?: number;
        /** The input messages used to generate the memory. */
        input?: Array<{
          /**
           * The message role, such as user or assistant.
           * @minLength 1
           */
          role: string;
          /**
           * The text content of the message.
           * @minLength 1
           */
          content: string;
        }>;
        /** Structured attributes extracted from the memory. */
        structured_attributes?: Record<string, unknown>;
        [key: string]: unknown;
      }>;
    };
    /** Update text or metadata of a Mem0 memory by memory ID. */
    "mem0.update_memory": {
      input: {
        /**
         * The unique identifier of the target memory.
         * @minLength 1
         */
        memory_id: string;
        /**
         * The new memory text to store.
         * @minLength 1
         */
        text?: string;
        /** The metadata to update on the memory. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The unique identifier of the memory. */
        id: string;
        /** The memory text content. */
        memory?: string;
        /** The updated memory text returned by some write operations. */
        text?: string;
        /** The content hash of the memory. */
        hash?: string;
        /** The associated user identifier. */
        user_id?: string;
        /** The associated agent identifier. */
        agent_id?: string;
        /** The associated application identifier. */
        app_id?: string;
        /** The associated run identifier. */
        run_id?: string;
        /** Additional metadata stored with the memory. */
        metadata?: Record<string, unknown>;
        /** The categories assigned to the memory. */
        categories?: Array<string>;
        /** The timestamp when the memory was created. */
        created_at?: string;
        /** The timestamp when the memory was last updated. */
        updated_at?: string;
        /** The expiration date of the memory. */
        expiration_date?: string;
        /** The relevance score returned by search results. */
        score?: number;
        /** The input messages used to generate the memory. */
        input?: Array<{
          /**
           * The message role, such as user or assistant.
           * @minLength 1
           */
          role: string;
          /**
           * The text content of the message.
           * @minLength 1
           */
          content: string;
        }>;
        /** Structured attributes extracted from the memory. */
        structured_attributes?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}

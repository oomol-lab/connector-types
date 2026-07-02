import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Deck.co website source from a URL and optional display name. */
    "deck_co.create_source": {
      input: {
        /**
         * The website or service URL to register as a Deck.co source.
         * @format uri
         */
        website_url: string;
        /**
         * Display name for the source.
         * @minLength 1
         */
        name?: string;
        /**
         * An optional Idempotency-Key header value for safe retries.
         * @minLength 1
         * @maxLength 256
         */
        idempotencyKey?: string;
      };
      output: {
        /** A Deck.co source object. */
        source: {
          /** Unique identifier for the source, prefixed with src_. */
          id: string;
          /** Resource type returned by Deck.co. */
          object: string;
          /** Display name for the source. */
          name: string | null;
          /** The source type. Deck.co currently supports website sources. */
          type: string;
          /** Website configuration for a Deck.co source. */
          website: {
            /** The website or service URL. Deck.co may normalize this value after create or update. */
            url: string;
            [key: string]: unknown;
          };
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          created_at: string;
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Deck.co agent by ID, including its task summaries. */
    "deck_co.get_agent": {
      input: {
        /**
         * Unique identifier for the agent, prefixed with agt_.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /** A Deck.co agent object. */
        agent: {
          /** Unique identifier for the agent, prefixed with agt_. */
          id: string;
          /** Resource type returned by Deck.co. */
          object: string;
          /** Display name for the agent. */
          name: string;
          /** Description of the agent purpose. */
          description: string | null;
          /** Tasks associated with the agent. */
          tasks: Array<{
            /** Unique identifier for the task, prefixed with task_. */
            id: string;
            /** Resource type returned by Deck.co. */
            object: string;
            /** Display name for the task. */
            name: string;
            /** Current task status, such as learning, test, or live. */
            status: string;
            [key: string]: unknown;
          }>;
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          created_at: string;
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Deck.co source by ID. */
    "deck_co.get_source": {
      input: {
        /**
         * Unique identifier for the source, prefixed with src_.
         * @minLength 1
         */
        source_id: string;
      };
      output: {
        /** A Deck.co source object. */
        source: {
          /** Unique identifier for the source, prefixed with src_. */
          id: string;
          /** Resource type returned by Deck.co. */
          object: string;
          /** Display name for the source. */
          name: string | null;
          /** The source type. Deck.co currently supports website sources. */
          type: string;
          /** Website configuration for a Deck.co source. */
          website: {
            /** The website or service URL. Deck.co may normalize this value after create or update. */
            url: string;
            [key: string]: unknown;
          };
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          created_at: string;
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Deck.co agents with cursor pagination. */
    "deck_co.list_agents": {
      input: {
        /**
         * Maximum number of items to return. Deck.co allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque cursor string returned by a previous Deck.co page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Agents returned for the requested page. */
        agents: Array<{
          /** Unique identifier for the agent, prefixed with agt_. */
          id: string;
          /** Resource type returned by Deck.co. */
          object: string;
          /** Display name for the agent. */
          name: string;
          /** Description of the agent purpose. */
          description: string | null;
          /** Tasks associated with the agent. */
          tasks: Array<{
            /** Unique identifier for the task, prefixed with task_. */
            id: string;
            /** Resource type returned by Deck.co. */
            object: string;
            /** Display name for the task. */
            name: string;
            /** Current task status, such as learning, test, or live. */
            status: string;
            [key: string]: unknown;
          }>;
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          created_at: string;
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Whether Deck.co has more agents beyond this page. */
        hasMore: boolean;
        /** Cursor to pass into the next request, when available. */
        nextCursor: string | null;
        /** Unique identifier for the Deck.co API request. */
        requestId: string | null;
      };
    };
    /** List Deck.co sources with cursor pagination. */
    "deck_co.list_sources": {
      input: {
        /**
         * Maximum number of items to return. Deck.co allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque cursor string returned by a previous Deck.co page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Sources returned for the requested page. */
        sources: Array<{
          /** Unique identifier for the source, prefixed with src_. */
          id: string;
          /** Resource type returned by Deck.co. */
          object: string;
          /** Display name for the source. */
          name: string | null;
          /** The source type. Deck.co currently supports website sources. */
          type: string;
          /** Website configuration for a Deck.co source. */
          website: {
            /** The website or service URL. Deck.co may normalize this value after create or update. */
            url: string;
            [key: string]: unknown;
          };
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          created_at: string;
          /**
           * ISO 8601 timestamp returned by Deck.co.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Whether Deck.co has more sources beyond this page. */
        hasMore: boolean;
        /** Cursor to pass into the next request, when available. */
        nextCursor: string | null;
        /** Unique identifier for the Deck.co API request. */
        requestId: string | null;
      };
    };
    /** Verify that a Deck.co secret key can authenticate with the v2 API. */
    "deck_co.test_api_key": {
      input: Record<string, never>;
      output: {
        /** Readiness status returned by Deck.co. */
        status: string;
        /** Deck.co API environment for the key. */
        environment: string;
        /** Unique identifier for the Deck.co API request. */
        request_id: string;
      };
    };
  }
}

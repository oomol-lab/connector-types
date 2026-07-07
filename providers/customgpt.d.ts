import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a CustomGPT conversation for an agent and return its session ID. */
    "customgpt.create_conversation": {
      input: {
        /**
         * The unique CustomGPT agent identifier used in project path parameters.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * Optional conversation name.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
      };
      output: {
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        conversation: Record<string, unknown>;
        /** The session ID used for follow-up conversation messages. */
        sessionId: string | null;
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details and current status for a CustomGPT agent. */
    "customgpt.get_agent": {
      input: {
        /**
         * The unique CustomGPT agent identifier used in project path parameters.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * Embed-code width to request from CustomGPT.
         * @minLength 1
         */
        width?: string;
        /**
         * Embed-code height to request from CustomGPT.
         * @minLength 1
         */
        height?: string;
      };
      output: {
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        agent: Record<string, unknown>;
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List CustomGPT agents in the authenticated account with optional pagination. */
    "customgpt.list_agents": {
      input: {
        /**
         * Page number to retrieve. Page numbering starts at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The duration filter for agents when supported by CustomGPT. */
        duration?: number;
        /** Sort direction for CustomGPT list results. */
        order?: "asc" | "desc";
        /** CustomGPT field used to sort list results. */
        orderBy?: "id" | "created_at";
        /**
         * Embed-code width to request from CustomGPT.
         * @minLength 1
         */
        width?: string;
        /**
         * Embed-code height to request from CustomGPT.
         * @minLength 1
         */
        height?: string;
        /**
         * Agent name filter.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** CustomGPT agents returned for this page. */
        agents: Array<Record<string, unknown>>;
        /** Normalized pagination metadata from CustomGPT list responses. */
        pagination: {
          /** The current response page number. */
          currentPage: number | null;
          /** The last available page number. */
          lastPage: number | null;
          /** The number of items returned per page. */
          perPage: number | null;
          /** The total number of items reported by CustomGPT. */
          total: number | null;
          /** The upstream URL for the next page when available. */
          nextPageUrl: string | null;
          /** The upstream URL for the previous page when available. */
          previousPageUrl: string | null;
        };
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List conversations for a CustomGPT agent. */
    "customgpt.list_conversations": {
      input: {
        /**
         * The unique CustomGPT agent identifier used in project path parameters.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * Page number to retrieve. Page numbering starts at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Sort direction for CustomGPT list results. */
        order?: "asc" | "desc";
        /** CustomGPT field used to sort list results. */
        orderBy?: "id" | "created_at";
        /** Conversation user-type filter. */
        userFilter?: "all" | "anonymous" | "team_member" | "me";
        /**
         * Conversation name filter.
         * @minLength 1
         */
        name?: string;
        /**
         * Return conversations updated after this timestamp.
         * @format date-time
         */
        lastUpdatedAfter?: string;
      };
      output: {
        /** CustomGPT conversations returned for this page. */
        conversations: Array<Record<string, unknown>>;
        /** Normalized pagination metadata from CustomGPT list responses. */
        pagination: {
          /** The current response page number. */
          currentPage: number | null;
          /** The last available page number. */
          lastPage: number | null;
          /** The number of items returned per page. */
          perPage: number | null;
          /** The total number of items reported by CustomGPT. */
          total: number | null;
          /** The upstream URL for the next page when available. */
          nextPageUrl: string | null;
          /** The upstream URL for the previous page when available. */
          previousPageUrl: string | null;
        };
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List indexed documents in a CustomGPT agent knowledge base. */
    "customgpt.list_documents": {
      input: {
        /**
         * The unique CustomGPT agent identifier used in project path parameters.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * Page number to retrieve. Page numbering starts at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of documents to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Sort direction for CustomGPT list results. */
        order?: "asc" | "desc";
        /**
         * Case-insensitive search term for document URL or filename.
         * @minLength 1
         */
        search?: string;
        /** Crawl status filter for documents. */
        crawlStatus?: "all" | "ok" | "failed" | "n/a" | "queued" | "limited";
        /** Index status filter for documents. */
        indexStatus?: "all" | "ok" | "failed" | "n/a" | "queued" | "limited";
      };
      output: {
        /** The CustomGPT agent object returned with the document page. */
        project: Record<string, unknown> | null;
        /** Indexed documents returned for this page. */
        documents: Array<Record<string, unknown>>;
        /** Normalized pagination metadata from CustomGPT list responses. */
        pagination: {
          /** The current response page number. */
          currentPage: number | null;
          /** The last available page number. */
          lastPage: number | null;
          /** The number of items returned per page. */
          perPage: number | null;
          /** The total number of items reported by CustomGPT. */
          total: number | null;
          /** The upstream URL for the next page when available. */
          nextPageUrl: string | null;
          /** The upstream URL for the previous page when available. */
          previousPageUrl: string | null;
        };
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List messages in a CustomGPT conversation. */
    "customgpt.list_messages": {
      input: {
        /**
         * The unique CustomGPT agent identifier used in project path parameters.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The CustomGPT conversation session ID.
         * @minLength 1
         */
        sessionId: string;
        /**
         * Page number to retrieve. Page numbering starts at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Sort direction for CustomGPT list results. */
        order?: "asc" | "desc";
        /** Whether CustomGPT should include customer intelligence data. */
        includeInsights?: boolean;
      };
      output: {
        /** CustomGPT messages returned for this page. */
        messages: Array<Record<string, unknown>>;
        /** Normalized pagination metadata from CustomGPT list responses. */
        pagination: {
          /** The current response page number. */
          currentPage: number | null;
          /** The last available page number. */
          lastPage: number | null;
          /** The number of items returned per page. */
          perPage: number | null;
          /** The total number of items reported by CustomGPT. */
          total: number | null;
          /** The upstream URL for the next page when available. */
          nextPageUrl: string | null;
          /** The upstream URL for the previous page when available. */
          previousPageUrl: string | null;
        };
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a non-streaming text prompt to a CustomGPT conversation and return the agent response. */
    "customgpt.send_message": {
      input: {
        /**
         * The unique CustomGPT agent identifier used in project path parameters.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The CustomGPT conversation session ID.
         * @minLength 1
         */
        sessionId: string;
        /**
         * Prompt text to send to the CustomGPT agent.
         * @minLength 1
         */
        prompt: string;
        /**
         * ISO 639-1 language code for the response language.
         * @minLength 2
         */
        lang?: string;
        /**
         * External prompt history identifier.
         * @minLength 1
         * @maxLength 128
         */
        externalId?: string;
        /**
         * Request-only persona override.
         * @minLength 1
         */
        customPersona?: string;
        /**
         * CustomGPT chatbot model identifier.
         * @minLength 1
         */
        chatbotModel?: string;
        /** Knowledge source mode for the response. */
        responseSource?: "default" | "own_content" | "openai_content";
        /**
         * Custom context supplied with this prompt.
         * @minLength 1
         */
        customContext?: string;
        /** CustomGPT agent capability preset. */
        agentCapability?: "fastest-responses" | "optimal-choice" | "advanced-reasoning" | "complex-tasks";
        /**
         * Source label IDs or names to search as one CustomGPT OR label group.
         * @minItems 1
         * @maxItems 50
         */
        labels?: Array<string>;
        /** Whether CustomGPT should search only pages with provided labels. */
        labelsExclusive?: boolean;
        /** Per-request action override object JSON-encoded into multipart form data. */
        actionOverrides?: Record<string, unknown>;
      };
      output: {
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        message: Record<string, unknown>;
        /** The CustomGPT prompt history identifier. */
        messageId: number | null;
        /** The agent response text when CustomGPT returned one. */
        response: string | null;
        /** Citation payload returned by CustomGPT for the message. */
        citations: unknown;
        /** A CustomGPT object returned by the upstream API, preserving provider-defined fields. */
        raw: Record<string, unknown>;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call any current TiMEM Space MCP tool with JSON arguments after checking its live schema and behavior annotations. */
    "timem_space.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. */
        result: unknown;
      };
    };
    /** Classify conversation messages into the general, coding, or writing TiMEM Space memory domain. */
    "timem_space.classify_memory_scene": {
      input: {
        /**
         * The messages whose memory domain should be classified.
         * @minItems 1
         * @maxItems 4
         */
        messages: Array<{
          /** The speaker role for this message. */
          role: "user" | "assistant";
          /**
           * The message text.
           * @minLength 1
           */
          content: string;
        }>;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. */
        result: unknown;
      };
    };
    /** Create durable TiMEM Space memories from one to four user and assistant conversation messages. */
    "timem_space.create_memory": {
      input: {
        /**
         * The conversation messages from which TiMEM Space should create memory.
         * @minItems 1
         * @maxItems 4
         */
        messages: Array<{
          /** The speaker role for this message. */
          role: "user" | "assistant";
          /**
           * The message text.
           * @minLength 1
           */
          content: string;
        }>;
        /** The memory domain for the conversation. */
        domain?: "general" | "coding" | "writing";
        /**
         * A concise hint describing the durable fact, preference, decision, or lesson to preserve.
         * @minLength 1
         */
        memory_hint?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. */
        result: unknown;
      };
    };
    /** Soft-delete one TiMEM Space memory after its identifier has been confirmed through search. */
    "timem_space.delete_memory": {
      input: {
        /**
         * The exact TiMEM Space memory identifier to delete.
         * @minLength 1
         */
        memory_id: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. */
        result: unknown;
      };
    };
    /** Discover every current TiMEM Space memory, rule-learning, knowledge, conversation, credit, and notification MCP tool with its live schema. */
    "timem_space.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to this TiMEM Space connection. */
        tools: Array<{
          /**
           * The exact TiMEM Space MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by TiMEM Space. */
          description?: string;
          /** MCP behavior hints supplied by TiMEM Space. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside TiMEM Space. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by TiMEM Space. */
          inputSchema: Record<string, unknown>;
          /** The current JSON Schema for the tool result when TiMEM Space supplies one. */
          outputSchema?: Record<string, unknown>;
        }>;
      };
    };
    /** Check TiMEM Space MCP authentication and service connectivity. */
    "timem_space.ready": {
      input: Record<string, never>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. */
        result: unknown;
      };
    };
    /** Search TiMEM Space for memories related to a semantic query, optionally within a memory domain. */
    "timem_space.search_memories": {
      input: {
        /**
         * The natural-language query used to recall relevant memories.
         * @minLength 1
         */
        query_text: string;
        /** The memory domain to search. */
        domain?: "general" | "coding" | "writing";
        /**
         * The maximum number of memories to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. */
        result: unknown;
      };
    };
  }
}

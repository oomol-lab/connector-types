import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send one non-streaming action to a Voiceflow conversation session. */
    "voiceflow.interact": {
      input: {
        /**
         * The session key returned by start_session.
         * @minLength 1
         */
        sessionKey: string;
        /** The Voiceflow action payload, such as a text action or launch action. */
        action: Record<string, unknown>;
        /** Variables to merge into the session before processing this turn. */
        variables?: Record<string, unknown>;
        /** Optional runtime state to send with this turn. */
        state?: Record<string, unknown>;
        /** Optional settings for this turn. */
        config?: {
          /**
           * The user's IANA timezone string.
           * @minLength 1
           */
          userTimezone?: string;
        };
      };
      output: {
        /** The traces emitted by the Voiceflow agent. */
        traces: Array<Record<string, unknown>>;
      };
    };
    /** List environments for the connected Voiceflow project. */
    "voiceflow.list_environments": {
      input: Record<string, never>;
      output: {
        /** The Voiceflow project environments. */
        environments: Array<{
          /** The Voiceflow environment ID. */
          id: string;
          /** The environment display name. */
          name: string;
          /** The stable environment alias. */
          alias: string;
          /** Whether this is the project's main environment. */
          isMain: boolean;
          /** The environment creation timestamp. */
          createdAt: string;
          /** The draft version ID for this environment. */
          draftVersionID: string;
          /** The published version ID for this environment. */
          publishedVersionID: string;
          /** The percentage of traffic routed to this environment. */
          trafficPercentage: number;
          /** The raw Voiceflow environment payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Query the Voiceflow knowledge base and return the synthesized answer and chunks. */
    "voiceflow.query_knowledge_base": {
      input: {
        /**
         * The question to ask the knowledge base.
         * @minLength 1
         */
        question: string;
        /**
         * Optional instruction for answer synthesis.
         * @minLength 1
         */
        instruction?: string;
        /**
         * The maximum number of chunks to retrieve.
         * @minimum 1
         * @maximum 30
         */
        chunkLimit?: number;
        /** Whether Voiceflow should synthesize an answer. */
        synthesis?: boolean;
        /**
         * The Voiceflow environment alias to target, such as main.
         * @minLength 1
         */
        environmentAlias?: string;
        /** Whether to query the draft or published environment version. */
        versionVariant?: "draft" | "published";
        /** Metadata filters to apply to the knowledge base query. */
        filters?: Record<string, unknown>;
        /** Model settings for answer synthesis. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** The Voiceflow response type. */
        type: string;
        /** The model used to answer the query. */
        model: string;
        /** The synthesized answer, when synthesis is enabled. */
        output: string | null;
        /** The query duration reported by Voiceflow. */
        duration: number;
        /** The total tokens consumed by the query. */
        tokens: number;
        /** The retrieved knowledge base chunks. */
        chunks: Array<Record<string, unknown>>;
        /** The raw Voiceflow query response. */
        raw: Record<string, unknown>;
      };
    };
    /** Start a Voiceflow conversation session for one user and return the session key used by non-streaming interact calls. */
    "voiceflow.start_session": {
      input: {
        /**
         * The stable user ID for the conversation session.
         * @minLength 1
         */
        userId: string;
        /**
         * The Voiceflow environment alias to target, such as main.
         * @minLength 1
         */
        environmentAlias?: string;
      };
      output: {
        /** The session-scoped key used as the authorization header for interact. */
        sessionKey: string;
      };
    };
  }
}

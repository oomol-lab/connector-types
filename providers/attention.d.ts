import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Ask Attention to analyze selected conversations or a deal using a natural-language prompt. */
    "attention.ask_attention": {
      input: {
        /**
         * Conversation IDs to analyze. Use this instead of dealId.
         * @minItems 1
         */
        conversationIds?: Array<string>;
        /**
         * Deal UUID to analyze. Use this instead of conversationIds.
         * @minLength 1
         */
        dealId?: string;
        /**
         * Natural-language question or instruction for Attention.
         * @minLength 1
         */
        prompt: string;
        /** Whether to include timestamped transcript segments. */
        includeTimestamps?: boolean;
        /** Whether to append a combined summary answer. */
        summarize?: boolean;
      };
      output: {
        /** Answers returned for the requested prompt. */
        answers: Array<{
          /** Conversation identifier for this answer, or summary for combined answers. */
          conversation_id: string;
          /** Textual answer produced by Attention. */
          output: string;
          /** Error message returned for this answer, or an empty string. */
          error: string;
          /** Timestamped segments relevant to the answer. */
          segments?: Array<{
            /** Start time of the segment in seconds. */
            start_sec?: number;
            /** End time of the segment in seconds. */
            end_sec?: number;
            /** Transcript excerpt for the segment. */
            text?: string;
            [key: string]: unknown;
          }>;
          /** Conversation title associated with the answer. */
          title?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve one Attention conversation by internal conversation ID or external import ID. */
    "attention.get_conversation": {
      input: {
        /**
         * Unique identifier of the conversation to retrieve.
         * @minLength 1
         */
        id: string;
        /** How to look up the conversation ID. */
        by?: "id" | "external_id";
        /** Whether to include internal participants in the response. */
        includeInternalParticipants?: boolean;
        /** Whether to include Zoom metadata in the response. */
        includeZoomMetadata?: boolean;
        /** Whether to include import metadata in the response. */
        includeImportMetadata?: boolean;
        /** Whether to include detailed transcript information. */
        detailedTranscript?: boolean;
      };
      output: {
        /** A conversation object returned by Attention. */
        conversation: {
          /** The JSON:API resource type returned by Attention. */
          type: string;
          /** Unique identifier of the conversation. */
          id: string;
          /** Conversation attributes, including transcript and metadata. */
          attributes?: Record<string, unknown>;
          /** Pagination links returned by Attention. */
          links?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a paginated list of Attention conversations with optional owner, participant, team, CRM, and status filters. */
    "attention.list_conversations": {
      input: {
        /**
         * Start date and time for filtering conversations.
         * @format date-time
         */
        fromDateTime?: string;
        /**
         * End date and time for filtering conversations.
         * @format date-time
         */
        toDateTime?: string;
        /**
         * Page number for pagination, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of conversations to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /**
         * Owner user IDs to filter conversations.
         * @minItems 1
         */
        ownerIds?: Array<string>;
        /**
         * Owner email addresses to filter conversations.
         * @minItems 1
         */
        ownerEmails?: Array<string>;
        /**
         * Case-insensitive partial title filter.
         * @minLength 1
         */
        title?: string;
        /**
         * Participant email addresses to filter conversations.
         * @minItems 1
         */
        participantEmails?: Array<string>;
        /**
         * External opportunity IDs to filter conversations.
         * @minItems 1
         */
        externalOpportunityIds?: Array<string>;
        /** CRM platform entity code to filter linked CRM records. */
        crmFieldEntityCode?: "companies" | "contacts" | "deals" | "owners" | "pipelines" | "users" | "account" | "contact" | "lead" | "opportunity" | "user";
        /**
         * CRM record field name to match on linked records.
         * @minLength 1
         */
        crmFieldFieldName?: string;
        /**
         * Exact CRM field values to match, up to 10 entries.
         * @minItems 1
         * @maxItems 10
         */
        crmFieldValues?: Array<string>;
        /**
         * Team IDs to filter conversations.
         * @minItems 1
         */
        teamIds?: Array<string>;
        /** Whether to exclude internal conversations from results. */
        hideInternal?: boolean;
        /** Whether to exclude conversations that have not been analyzed. */
        hideNonAnalyzed?: boolean;
        /** Whether to exclude conversations pending processing. */
        hidePending?: boolean;
        /** Whether to exclude conversations without transcripts. */
        hideTranscript?: boolean;
        /** Whether to exclude conversations that failed processing. */
        hideFailed?: boolean;
        /** Whether to include internal participants in the response. */
        includeInternalParticipants?: boolean;
        /** Whether to include Zoom metadata in the response. */
        includeZoomMetadata?: boolean;
        /** Whether to include import metadata in the response. */
        includeImportMetadata?: boolean;
        /** Whether to include detailed transcript information. */
        detailedTranscript?: boolean;
        /** Whether to include CRM records and re-enable extracted intelligence fields. */
        withCrmRecords?: boolean;
        /** Whether to include intelligence items in the response. */
        withIntelligenceItems?: boolean;
      };
      output: {
        /** Conversations returned for the requested page. */
        conversations: Array<{
          /** The JSON:API resource type returned by Attention. */
          type: string;
          /** Unique identifier of the conversation. */
          id: string;
          /** Conversation attributes, including transcript and metadata. */
          attributes?: Record<string, unknown>;
          /** Pagination links returned by Attention. */
          links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Attention. */
        links?: Record<string, unknown>;
        /** Pagination metadata returned by Attention. */
        meta?: Record<string, unknown>;
      };
    };
    /** List teams in the Attention organization. */
    "attention.list_teams": {
      input: Record<string, never>;
      output: {
        /** Teams returned by Attention. */
        teams: Array<{
          /** Unique identifier of the team. */
          uuid: string;
          /** Name of the team. */
          name?: string;
          /** Domain associated with the team. */
          domain?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Attention. */
        meta?: Record<string, unknown>;
      };
    };
    /** List Attention users with optional user ID, email, team, and deleted-user filters. */
    "attention.list_users": {
      input: {
        /**
         * User IDs to include.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * User email addresses to include.
         * @minItems 1
         */
        emails?: Array<string>;
        /**
         * Team UUID to filter users.
         * @minLength 1
         */
        teamUUID?: string;
        /** Whether to include deleted users. */
        includeDeleted?: boolean;
      };
      output: {
        /** Users returned by Attention. */
        users: Array<{
          /** Unique identifier of the user. */
          uuid: string;
          /**
           * Email address of the user.
           * @format email
           */
          email?: string;
          /** First name of the user. */
          firstName?: string;
          /** Last name of the user. */
          lastName?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Attention. */
        links?: Record<string, unknown>;
      };
    };
  }
}

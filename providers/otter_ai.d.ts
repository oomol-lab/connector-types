import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Otter.ai conversation by ID with requested related data. */
    "otter_ai.get_conversation": {
      input: {
        /**
         * The Otter.ai conversation ID.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Related Otter.ai conversation data to include.
         * @minItems 1
         */
        include: Array<"action_items" | "insights" | "outline" | "transcript" | "all">;
      };
      output: {
        /** An Otter.ai conversation object. */
        conversation: {
          /** The Otter.ai conversation ID. */
          id?: string | number;
          /** The conversation title. */
          title?: string;
          /**
           * The Otter.ai web URL for the conversation.
           * @format uri
           */
          url?: string;
          /** An Otter.ai user object. */
          owner?: {
            /** The Otter.ai user ID. */
            id?: string | number;
            /** The display name of the user. */
            name?: string;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** The conversation creation timestamp. */
          created_at?: string;
          /** Otter.ai processing status fields. */
          process_status?: {
            /** Processing status for the abstract summary. */
            abstract_summary?: string | null;
            /** Processing status for action items. */
            action_item?: string | null;
            /** Processing status for the outline. */
            outline?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Related Otter.ai resources requested with include. */
        relationships: Record<string, unknown>;
        /** Metadata returned by Otter.ai. */
        meta: {
          /** The timestamp when Otter.ai generated the response metadata. */
          retrieved_at?: string;
          /** Whether Otter.ai has another page of results. */
          has_more?: boolean;
          /** Cursor to pass into the next request, when one is available. */
          next_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get the temporary Otter.ai audio download URL for a conversation. */
    "otter_ai.get_conversation_audio": {
      input: {
        /**
         * The Otter.ai conversation ID.
         * @minLength 1
         */
        conversationId: string;
      };
      output: {
        /**
         * The temporary URL for downloading the conversation audio.
         * @format uri
         */
        audioUrl: string;
        /** Otter.ai conversation audio response data. */
        audio: {
          /**
           * The URL for downloading the conversation audio.
           * @format uri
           */
          url?: string;
          [key: string]: unknown;
        };
        /** Metadata returned by Otter.ai. */
        meta: {
          /** The timestamp when Otter.ai generated the response metadata. */
          retrieved_at?: string;
          /** Whether Otter.ai has another page of results. */
          has_more?: boolean;
          /** Cursor to pass into the next request, when one is available. */
          next_cursor?: string | null;
          [key: string]: unknown;
        };
        /** The raw Otter.ai audio response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current Otter.ai workspace for the connected API key. */
    "otter_ai.get_workspace": {
      input: Record<string, never>;
      output: {
        /** An Otter.ai workspace object. */
        workspace: {
          /** The Otter.ai workspace ID. */
          id?: string | number;
          /** The workspace name. */
          name?: string;
          /** An Otter.ai user object. */
          owner?: {
            /** The Otter.ai user ID. */
            id?: string | number;
            /** The display name of the user. */
            name?: string;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** The number of members in the workspace. */
          member_count?: number;
          /** The workspace handle. */
          handle?: string;
          /** The Otter.ai workspace type. */
          type?: string;
          [key: string]: unknown;
        };
        /** Metadata returned by Otter.ai. */
        meta: {
          /** The timestamp when Otter.ai generated the response metadata. */
          retrieved_at?: string;
          /** Whether Otter.ai has another page of results. */
          has_more?: boolean;
          /** Cursor to pass into the next request, when one is available. */
          next_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List members of an Otter.ai channel. */
    "otter_ai.list_channel_members": {
      input: {
        /**
         * The Otter.ai channel ID.
         * @minLength 1
         */
        channelId: string;
      };
      output: {
        /** Members returned by Otter.ai. */
        members: Array<{
          /** The Otter.ai user ID. */
          id?: string | number;
          /** The display name of the user. */
          name?: string;
          /** The first name of the user. */
          first_name?: string;
          /** The last name of the user. */
          last_name?: string;
          /**
           * The email address of the user.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        }>;
        /** Metadata returned by Otter.ai. */
        meta: {
          /** The timestamp when Otter.ai generated the response metadata. */
          retrieved_at?: string;
          /** Whether Otter.ai has another page of results. */
          has_more?: boolean;
          /** Cursor to pass into the next request, when one is available. */
          next_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Otter.ai channels available to the connected workspace. */
    "otter_ai.list_channels": {
      input: Record<string, never>;
      output: {
        /** Channels returned by Otter.ai. */
        channels: Array<{
          /** The Otter.ai channel ID. */
          id?: string | number;
          /** The channel name. */
          name?: string;
          /** An Otter.ai user object. */
          owner?: {
            /** The Otter.ai user ID. */
            id?: string | number;
            /** The display name of the user. */
            name?: string;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** The number of members in the channel. */
          member_count?: number;
          /** The channel discoverability setting. */
          discoverability?: string;
          [key: string]: unknown;
        }>;
        /** Metadata returned by Otter.ai. */
        meta: {
          /** The timestamp when Otter.ai generated the response metadata. */
          retrieved_at?: string;
          /** Whether Otter.ai has another page of results. */
          has_more?: boolean;
          /** Cursor to pass into the next request, when one is available. */
          next_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Otter.ai conversations with optional channel and pagination filters. */
    "otter_ai.list_conversations": {
      input: {
        /** Whether to include conversations shared with the workspace. */
        includeShared?: boolean;
        /**
         * Filter conversations to a specific Otter.ai channel ID.
         * @minLength 1
         */
        channelId?: string;
        /**
         * Maximum number of records to return. Otter.ai allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Cursor token returned by a previous Otter.ai page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Conversations returned by Otter.ai. */
        conversations: Array<{
          /** The Otter.ai conversation ID. */
          id?: string | number;
          /** The conversation title. */
          title?: string;
          /**
           * The Otter.ai web URL for the conversation.
           * @format uri
           */
          url?: string;
          /** An Otter.ai user object. */
          owner?: {
            /** The Otter.ai user ID. */
            id?: string | number;
            /** The display name of the user. */
            name?: string;
            /** The first name of the user. */
            first_name?: string;
            /** The last name of the user. */
            last_name?: string;
            /**
             * The email address of the user.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** The conversation creation timestamp. */
          created_at?: string;
          /** Otter.ai processing status fields. */
          process_status?: {
            /** Processing status for the abstract summary. */
            abstract_summary?: string | null;
            /** Processing status for action items. */
            action_item?: string | null;
            /** Processing status for the outline. */
            outline?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether Otter.ai has another page of conversations. */
        hasMore: boolean;
        /** Cursor to pass into the next request, when available. */
        nextCursor: string | null;
        /** Metadata returned by Otter.ai. */
        meta: {
          /** The timestamp when Otter.ai generated the response metadata. */
          retrieved_at?: string;
          /** Whether Otter.ai has another page of results. */
          has_more?: boolean;
          /** Cursor to pass into the next request, when one is available. */
          next_cursor?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}

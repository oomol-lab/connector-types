import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one collected Typebot result by bot and result identifier. */
    "typebot.get_result": {
      input: {
        /**
         * The Typebot bot identifier.
         * @minLength 1
         */
        typebotId: string;
        /**
         * The Typebot result identifier.
         * @minLength 1
         */
        resultId: string;
      };
      output: {
        /** One Typebot conversation result. */
        result: {
          /** The Typebot result identifier. */
          id: string;
          /** The result creation timestamp. */
          createdAt: string;
          /** The bot identifier that produced the result. */
          typebotId: string;
          /** The variables captured in the result. */
          variables: Array<{
            /** The result variable identifier. */
            id: string;
            /** The result variable name. */
            name: string;
            /** The string or string-array value captured for this variable. */
            value: unknown;
            /** Whether the variable belongs to the chat session rather than the saved result. */
            isSessionVariable?: boolean;
            [key: string]: unknown;
          }>;
          /** The answers captured in the result. */
          answers: Array<{
            /** The identifier of the input block that captured the answer. */
            blockId: string;
            /** The answer text content. */
            content: string;
            /** The uploaded file URLs attached to the answer. */
            attachedFileUrls?: Array<string>;
            [key: string]: unknown;
          }>;
          /** Whether the conversation reached completion. */
          isCompleted: boolean;
          /** Whether the conversation has started. */
          hasStarted: boolean | null;
          /** Whether the result is archived. */
          isArchived: boolean | null;
          /** The most recent chat session identifier when available. */
          lastChatSessionId: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve one Typebot definition and its graph configuration. */
    "typebot.get_typebot": {
      input: {
        /**
         * The Typebot bot identifier.
         * @minLength 1
         */
        typebotId: string;
        /** Whether Typebot should migrate the returned definition to the latest schema. */
        migrateToLatestVersion?: boolean;
      };
      output: {
        /** The Typebot definition, including its graph and configuration fields. */
        typebot: {
          /** The Typebot bot identifier. */
          id: string;
          /** The Typebot bot name. */
          name: string;
          /** The Typebot schema version. */
          version: string;
          /** The workspace identifier that owns the bot. */
          workspaceId: string;
          /** The bot creation timestamp. */
          createdAt: string;
          /** The bot last update timestamp. */
          updatedAt: string;
          /** The bot graph groups returned by Typebot. */
          groups: Array<Record<string, unknown>>;
          /** The bot graph edges returned by Typebot. */
          edges: Array<Record<string, unknown>>;
          /** The bot variables returned by Typebot. */
          variables: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
        /** The access right granted to the current Typebot user. */
        currentUserMode: "read" | "write" | "guest";
        [key: string]: unknown;
      };
    };
    /** Retrieve detailed information for one Typebot workspace. */
    "typebot.get_workspace": {
      input: {
        /**
         * The Typebot workspace identifier.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** Detailed Typebot workspace information. */
        workspace: {
          /** The Typebot workspace identifier. */
          id: string;
          /** The Typebot workspace name. */
          name: string;
          /** The workspace icon URL when one is configured. */
          icon: string | null;
          /** The billing plan assigned to the Typebot workspace. */
          plan: "FREE" | "STARTER" | "PRO" | "LIFETIME" | "OFFERED" | "CUSTOM" | "UNLIMITED" | "ENTERPRISE";
          /** The workspace creation timestamp. */
          createdAt: string;
          /** The workspace last update timestamp. */
          updatedAt: string;
          /** Whether the workspace is suspended. */
          isSuspended: boolean;
          /** Whether the workspace has an overdue subscription payment. */
          isPastDue: boolean;
          [key: string]: unknown;
        };
        /** The access right granted to the current Typebot user. */
        currentUserMode: "read" | "write" | "guest";
        [key: string]: unknown;
      };
    };
    /** List collected results for one Typebot bot with cursor and time filtering. */
    "typebot.list_results": {
      input: {
        /**
         * The Typebot bot identifier.
         * @minLength 1
         */
        typebotId: string;
        /**
         * The maximum number of results to return, from 1 through 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /** The numeric cursor returned by a previous result page. */
        cursor?: number;
        /** The predefined time range used to filter results. */
        timeFilter?: "today" | "last7Days" | "last30Days" | "monthToDate" | "lastMonth" | "yearToDate" | "allTime";
        /**
         * The IANA time zone used to interpret the selected time range.
         * @minLength 1
         */
        timeZone?: string;
      };
      output: {
        /** The Typebot results in this page. */
        results: Array<{
          /** The Typebot result identifier. */
          id: string;
          /** The result creation timestamp. */
          createdAt: string;
          /** The bot identifier that produced the result. */
          typebotId: string;
          /** The variables captured in the result. */
          variables: Array<{
            /** The result variable identifier. */
            id: string;
            /** The result variable name. */
            name: string;
            /** The string or string-array value captured for this variable. */
            value: unknown;
            /** Whether the variable belongs to the chat session rather than the saved result. */
            isSessionVariable?: boolean;
            [key: string]: unknown;
          }>;
          /** The answers captured in the result. */
          answers: Array<{
            /** The identifier of the input block that captured the answer. */
            blockId: string;
            /** The answer text content. */
            content: string;
            /** The uploaded file URLs attached to the answer. */
            attachedFileUrls?: Array<string>;
            [key: string]: unknown;
          }>;
          /** Whether the conversation reached completion. */
          isCompleted: boolean;
          /** Whether the conversation has started. */
          hasStarted: boolean | null;
          /** Whether the result is archived. */
          isArchived: boolean | null;
          /** The most recent chat session identifier when available. */
          lastChatSessionId: string | null;
          [key: string]: unknown;
        }>;
        /** The cursor for the next result page when another page exists. */
        nextCursor?: number | null;
        [key: string]: unknown;
      };
    };
    /** List Typebot bots in a workspace, optionally restricted to one folder. */
    "typebot.list_typebots": {
      input: {
        /**
         * The Typebot workspace identifier.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Only return bots in this Typebot folder.
         * @minLength 1
         */
        folderId?: string;
      };
      output: {
        /** The bots accessible in the workspace. */
        typebots: Array<{
          /** The Typebot bot identifier. */
          id: string;
          /** The Typebot bot name. */
          name: string;
          /** The bot icon URL when one is configured. */
          icon: string | null;
          /** The space identifier containing the bot when present. */
          spaceId: string | null;
          /** The bot creation timestamp. */
          createdAt: string;
          /** The access right granted to the current Typebot user. */
          accessRight: "read" | "write" | "guest";
          /** The published bot identifier when the bot has been published. */
          publishedTypebotId?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the Typebot workspaces accessible to the configured API token. */
    "typebot.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** The workspaces accessible to the token. */
        workspaces: Array<{
          /** The Typebot workspace identifier. */
          id: string;
          /** The Typebot workspace name. */
          name: string;
          /** The workspace icon URL when one is configured. */
          icon: string | null;
          /** The billing plan assigned to the Typebot workspace. */
          plan: "FREE" | "STARTER" | "PRO" | "LIFETIME" | "OFFERED" | "CUSTOM" | "UNLIMITED" | "ENTERPRISE";
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}

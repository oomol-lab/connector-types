import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for one Botpress bot in the connected workspace. */
    "botpress.get_bot": {
      input: {
        /**
         * The Botpress bot ID.
         * @minLength 1
         */
        botId: string;
      };
      output: {
        /** A Botpress bot details object. */
        bot: {
          /** The Botpress bot ID. */
          id?: string;
          /** The timestamp when the bot was created. */
          createdAt?: string;
          /** The timestamp when the bot was last updated. */
          updatedAt?: string;
          /** The bot name. */
          name?: string;
          /** The bot description when returned. */
          description?: string;
          /** The timestamp when the bot was last deployed. */
          deployedAt?: string;
          /** Whether this is a development bot. */
          dev?: boolean;
          /** Botpress tags to filter by. */
          tags?: Record<string, string>;
          /** The Botpress bot type when returned. */
          type?: string;
          /** The current bot status when returned. */
          status?: string;
          /** Bot integrations keyed by integration name or alias. */
          integrations?: Record<string, Record<string, unknown>>;
          /** Bot plugins keyed by plugin name or alias. */
          plugins?: Record<string, Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List Botpress bots in the connected workspace. */
    "botpress.list_bots": {
      input: {
        /** Whether to return development bots instead of production bots. */
        dev?: boolean;
        /** Botpress tags to filter by. */
        tags?: Record<string, string>;
        /**
         * The Botpress meta.nextToken value from the previous response.
         * @minLength 1
         */
        nextToken?: string;
        /** The Botpress field to sort by. */
        sortField?: "createdAt" | "updatedAt";
        /** The Botpress sort direction. */
        sortDirection?: "asc" | "desc";
      };
      output: {
        /** The bots returned by Botpress. */
        bots: Array<{
          /** The Botpress bot ID. */
          id?: string;
          /** The timestamp when the bot was created. */
          createdAt?: string;
          /** The timestamp when the bot was last updated. */
          updatedAt?: string;
          /** The bot name. */
          name?: string;
          /** The timestamp when the bot was last deployed. */
          deployedAt?: string;
          /** Botpress tags to filter by. */
          tags?: Record<string, string>;
          /** The Botpress bot type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Botpress. */
        meta: {
          /** The token to use to retrieve the next page of results. */
          nextToken?: string;
        };
      };
    };
    /** List Botpress workspaces accessible to the connected API token. */
    "botpress.list_workspaces": {
      input: {
        /**
         * The Botpress meta.nextToken value from the previous response.
         * @minLength 1
         */
        nextToken?: string;
        /**
         * The Botpress workspace handle to filter by.
         * @minLength 1
         */
        handle?: string;
      };
      output: {
        /** The workspaces returned by Botpress. */
        workspaces: Array<{
          /** The Botpress workspace ID. */
          id?: string;
          /** The workspace name. */
          name?: string;
          /** The workspace owner ID. */
          ownerId?: string;
          /** The timestamp when the workspace was created. */
          createdAt?: string;
          /** The timestamp when the workspace was last updated. */
          updatedAt?: string;
          /** The number of bots in the workspace. */
          botCount?: number;
          /** The Botpress billing version for the workspace. */
          billingVersion?: string;
          /** The Botpress plan for the workspace. */
          plan?: string;
          /** Whether the workspace is blocked. */
          blocked?: boolean;
          /** The configured workspace spending limit. */
          spendingLimit?: number;
          /** The workspace about text when returned. */
          about?: string;
          /** The workspace profile picture URL when returned. */
          profilePicture?: string;
          /** The workspace contact email when returned. */
          contactEmail?: string;
          /** The workspace website URL when returned. */
          website?: string;
          /** The workspace social accounts returned by Botpress. */
          socialAccounts?: Array<Record<string, unknown>>;
          /** Whether the workspace is public. */
          isPublic?: boolean;
          /** The public workspace handle when returned. */
          handle?: string;
          /** The active workspace trial ID. */
          activeTrialId?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Botpress. */
        meta: {
          /** The token to use to retrieve the next page of results. */
          nextToken?: string;
        };
      };
    };
  }
}

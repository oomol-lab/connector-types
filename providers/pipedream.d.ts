import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve metadata for one Pipedream app by app ID or name slug. */
    "pipedream.get_app": {
      input: {
        /**
         * The Pipedream app ID or name slug to retrieve.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** A normalized Pipedream app record. */
        app: {
          /** The Pipedream app ID. */
          id: string;
          /** The Pipedream app name slug when provided. */
          nameSlug: string | null;
          /** The Pipedream app display name when provided. */
          name: string | null;
          /** The app authentication type when provided. */
          authType: string | null;
          /** The app description when provided. */
          description: string | null;
          /** The app logo URL when provided. */
          imageUrl: string | null;
          /** The app categories returned by Pipedream. */
          categories: Array<string>;
          /** The raw Pipedream app object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the authenticated Pipedream user profile and accessible workspaces. */
    "pipedream.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated Pipedream user profile. */
        user: {
          /** The Pipedream user ID. */
          id: string;
          /** The Pipedream username when provided. */
          username: string | null;
          /** The user's email address when provided. */
          email: string | null;
          /** The workspaces available to this user. */
          workspaces: Array<{
            /** The Pipedream workspace ID. */
            id: string;
            /** The workspace display name when provided. */
            name: string | null;
            /** The workspace slug when provided. */
            orgname: string | null;
            /** The workspace email address when provided. */
            email: string | null;
            /** The daily credit quota when provided. */
            dailyCreditsQuota: number | null;
            /** The daily credits used when provided. */
            dailyCreditsUsed: number | null;
            /** The raw Pipedream workspace object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Pipedream user object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Pipedream workflow by workflow ID. */
    "pipedream.get_workflow": {
      input: {
        /**
         * The Pipedream workflow ID to retrieve.
         * @minLength 1
         */
        workflowId: string;
        /**
         * The Pipedream workspace ID used to scope user API key requests.
         * @minLength 1
         */
        orgId?: string;
      };
      output: {
        /** A normalized Pipedream workflow record. */
        workflow: {
          /** The Pipedream workflow ID. */
          id: string;
          /** The workflow name when provided. */
          name: string | null;
          /** Whether the workflow is active when provided. */
          active: boolean | null;
          /** The raw Pipedream workflow object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve recent emitted event summaries for one Pipedream workflow. */
    "pipedream.get_workflow_emits": {
      input: {
        /**
         * The Pipedream workflow ID whose events should be listed.
         * @minLength 1
         */
        workflowId: string;
        /** Whether to request expanded event payloads from Pipedream. */
        expandEvent?: boolean;
        /**
         * The number of emitted events to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous Pipedream response.
         * @minLength 1
         */
        after?: string;
        /**
         * The pagination cursor returned by a previous Pipedream response.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** The emitted event summaries returned for this page. */
        emits: Array<{
          /** The emitted event summary ID. */
          id: string;
          /** The event indexing timestamp in milliseconds when provided. */
          indexedAtMs: number | null;
          /** The event payload returned by Pipedream. */
          event: unknown;
          /** The event metadata returned by Pipedream. */
          metadata: Record<string, unknown>;
          /** The raw Pipedream event summary object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Pipedream list endpoints. */
        pageInfo: {
          /** The total number of matching records when provided. */
          totalCount: number | null;
          /** The number of records in this page when provided. */
          count: number | null;
          /** The first cursor in this page when provided. */
          startCursor: string | null;
          /** The last cursor in this page when provided. */
          endCursor: string | null;
          /** The raw Pipedream page_info object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Pipedream workspace and its current usage metadata. */
    "pipedream.get_workspace": {
      input: {
        /**
         * The Pipedream workspace ID to retrieve.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** A normalized Pipedream workspace record. */
        workspace: {
          /** The Pipedream workspace ID. */
          id: string;
          /** The workspace display name when provided. */
          name: string | null;
          /** The workspace slug when provided. */
          orgname: string | null;
          /** The workspace email address when provided. */
          email: string | null;
          /** The daily credit quota when provided. */
          dailyCreditsQuota: number | null;
          /** The daily credits used when provided. */
          dailyCreditsUsed: number | null;
          /** The raw Pipedream workspace object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search or list apps available in the Pipedream integration catalog. */
    "pipedream.list_apps": {
      input: {
        /**
         * A search query for app names or slugs.
         * @minLength 1
         */
        q?: string;
        /** Whether to return only apps with public triggers or actions. */
        hasComponents?: boolean;
        /** Whether to return only apps with public actions. */
        hasActions?: boolean;
        /** Whether to return only apps with public triggers. */
        hasTriggers?: boolean;
        /**
         * The number of apps to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous Pipedream response.
         * @minLength 1
         */
        after?: string;
        /**
         * The pagination cursor returned by a previous Pipedream response.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** The Pipedream apps returned for this page. */
        apps: Array<{
          /** The Pipedream app ID. */
          id: string;
          /** The Pipedream app name slug when provided. */
          nameSlug: string | null;
          /** The Pipedream app display name when provided. */
          name: string | null;
          /** The app authentication type when provided. */
          authType: string | null;
          /** The app description when provided. */
          description: string | null;
          /** The app logo URL when provided. */
          imageUrl: string | null;
          /** The app categories returned by Pipedream. */
          categories: Array<string>;
          /** The raw Pipedream app object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Pipedream list endpoints. */
        pageInfo: {
          /** The total number of matching records when provided. */
          totalCount: number | null;
          /** The number of records in this page when provided. */
          count: number | null;
          /** The first cursor in this page when provided. */
          startCursor: string | null;
          /** The last cursor in this page when provided. */
          endCursor: string | null;
          /** The raw Pipedream page_info object. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}

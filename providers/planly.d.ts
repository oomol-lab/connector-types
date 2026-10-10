import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create scheduled or immediate social posts in Planly. This endpoint creates scheduled posts, not drafts; publication status can be read with list_schedules. */
    "planly.create_schedules": {
      input: {
        /**
         * Social posts to schedule.
         * @minItems 1
         */
        schedules: Array<{
          /**
           * Connected channel ID returned by list_channels.
           * @minLength 1
           */
          channelId: string;
          /**
           * Publication date and time; omit to publish immediately.
           * @format date-time
           */
          publishOn?: string;
          /** Text content for the post. */
          content?: string;
          /** Previously imported Planly media. */
          media?: Array<{
            /**
             * Planly media ID returned by import_media or list_media.
             * @minLength 1
             */
            id: string;
            /** Platform-specific media options passed unchanged to Planly. */
            options?: Record<string, unknown>;
          }>;
          /** Social-network options passed unchanged to Planly. Pinterest publishing requires boardId; TikTok requires privacyLevel. See https://docs.planly.com/#social-network-options for all platform fields. */
          options?: Record<string, unknown>;
        }>;
      };
      output: {
        /** Created schedule groups. */
        data: {
          /** Created groups with schedules and publication status. */
          upsert?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Upstream error details, or null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Delete media resources from Planly by ID. */
    "planly.delete_media": {
      input: {
        /**
         * Media IDs to delete.
         * @minItems 1
         */
        ids: Array<string>;
      };
      output: {
        /** Whether the deletion succeeded. */
        data: boolean;
        /** Upstream error details, or null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Import a public media URL into Planly. Supports MP4, PNG, JPEG and WebP. */
    "planly.import_media": {
      input: {
        /**
         * Destination team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * Public media URL downloaded by Planly.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Imported media metadata. */
        data: {
          /** Media ID for use in schedules. */
          id?: string;
          /** Hosted media URL. */
          contentUri?: string;
          [key: string]: unknown;
        };
        /** Upstream error details, or null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** List connected social channels in a Planly team. */
    "planly.list_channels": {
      input: {
        /**
         * Team ID returned by list_teams.
         * @minLength 1
         */
        team_id: string;
        /** Exclude competitor channels; defaults to false. */
        excludeCompetitors?: boolean;
      };
      output: {
        /** Connected channels. */
        data: Array<{
          /** Channel ID. */
          id?: string;
          /** Channel name. */
          name?: string;
          /** Social network identifier. */
          social_network?: string;
          [key: string]: unknown;
        }>;
        /** Upstream error details, or null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** List a page of media in a Planly team. */
    "planly.list_media": {
      input: {
        /**
         * Team ID returned by list_teams.
         * @minLength 1
         */
        teamId: string;
        /** Cursor pagination options. */
        pagination?: {
          /** Cursor from the previous data.next; omit for the first page. */
          cursor?: string | null;
          /**
           * Sort property and direction.
           * @minItems 2
           * @maxItems 2
           */
          orderBy?: ["CreatedAt" | "ContentLength", "asc" | "desc"];
          /**
           * Number of results; Planly defaults to 50.
           * @minimum 1
           */
          pageSize?: number;
        };
      };
      output: {
        /** Page of Planly resources. */
        data: {
          /** Resources in this page. */
          rows: Array<Record<string, unknown>>;
          /** Cursor for the next page, when available. */
          next?: string | null;
          /** Total number of matching resources, when provided. */
          totalNumberOfRows?: number;
          [key: string]: unknown;
        };
        /** Upstream error details, or null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** List boards for a connected Pinterest channel to obtain publishing board IDs. */
    "planly.list_pinterest_boards": {
      input: {
        /**
         * Connected Pinterest channel ID.
         * @minLength 1
         */
        channelId: string;
      };
      output: {
        /** Pinterest boards result. */
        data: {
          /** Available boards. */
          boards?: Array<{
            /** Board ID. */
            value?: string;
            /** Board name. */
            label?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Upstream error details, or null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** List a page of Planly schedules and their publication status. */
    "planly.list_schedules": {
      input: {
        /**
         * Team ID returned by list_teams.
         * @minLength 1
         */
        teamId: string;
        /** Cursor pagination options. */
        pagination?: {
          /** Cursor from the previous data.next; omit for the first page. */
          cursor?: string | null;
          /**
           * Sort property and direction.
           * @minItems 2
           * @maxItems 2
           */
          orderBy?: ["CreatedAt" | "ContentLength", "asc" | "desc"];
          /**
           * Number of results; Planly defaults to 50.
           * @minimum 1
           */
          pageSize?: number;
        };
      };
      output: {
        /** Page of Planly resources. */
        data: {
          /** Resources in this page. */
          rows: Array<Record<string, unknown>>;
          /** Cursor for the next page, when available. */
          next?: string | null;
          /** Total number of matching resources, when provided. */
          totalNumberOfRows?: number;
          [key: string]: unknown;
        };
        /** Upstream error details, or null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** List the Planly teams accessible to the API key. */
    "planly.list_teams": {
      input: Record<string, never>;
      output: {
        /** Accessible teams. */
        data: Array<{
          /** Team ID. */
          id?: string;
          /** Team name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Upstream error details, or null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
  }
}

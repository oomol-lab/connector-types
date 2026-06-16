import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Typefully draft for a social set. */
    "typefully.create_draft": {
      input: {
        /**
         * The Typefully social set ID.
         * @exclusiveMinimum 0
         */
        social_set_id: number;
        /** Request body for creating a Typefully draft. */
        body: {
          /** Platform configurations keyed by social platform. */
          platforms: {
            /** A Typefully platform configuration used when creating or updating a draft. */
            x?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A Typefully platform configuration used when creating or updating a draft. */
            linkedin?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A Typefully platform configuration used when creating or updating a draft. */
            mastodon?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A Typefully platform configuration used when creating or updating a draft. */
            threads?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A Typefully platform configuration used when creating or updating a draft. */
            bluesky?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
          };
          /**
           * Internal draft title.
           * @minLength 1
           */
          draft_title?: string;
          /**
           * When to publish the draft: now, next-free-slot, or an ISO 8601 datetime with timezone.
           * @minLength 1
           */
          publish_at?: string;
          /** Plain text scratchpad notes for the draft. */
          scratchpad_text?: string;
          /** Whether Typefully should generate a public share URL. */
          share?: boolean;
          /** Tag slugs associated with the draft. */
          tags?: Array<string>;
        };
      };
      output: Record<string, unknown>;
    };
    /** Delete a Typefully draft by ID. */
    "typefully.delete_draft": {
      input: {
        /**
         * The Typefully social set ID.
         * @exclusiveMinimum 0
         */
        social_set_id: number;
        /**
         * The Typefully draft ID.
         * @exclusiveMinimum 0
         */
        draft_id: number;
      };
      output: {
        /** Whether the delete request was accepted by Typefully. */
        deleted: boolean;
      };
    };
    /** Retrieve the Typefully user associated with the current API key. */
    "typefully.get_current_user": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Retrieve a Typefully draft by ID. */
    "typefully.get_draft": {
      input: {
        /**
         * The Typefully social set ID.
         * @exclusiveMinimum 0
         */
        social_set_id: number;
        /**
         * The Typefully draft ID.
         * @exclusiveMinimum 0
         */
        draft_id: number;
        /** Whether returned draft text should omit Typefully comment-thread markers. */
        exclude_comment_markers?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Retrieve details for a Typefully social set. */
    "typefully.get_social_set": {
      input: {
        /**
         * The Typefully social set ID.
         * @exclusiveMinimum 0
         */
        social_set_id: number;
      };
      output: Record<string, unknown>;
    };
    /** List Typefully drafts for a social set with optional filters. */
    "typefully.list_drafts": {
      input: {
        /**
         * The Typefully social set ID.
         * @exclusiveMinimum 0
         */
        social_set_id: number;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Draft status used by Typefully. */
        status?: "draft" | "scheduled" | "published" | "publishing" | "error";
        /** A Typefully-supported social platform. */
        platform?: "x" | "linkedin" | "mastodon" | "threads" | "bluesky";
        /**
         * Date value accepted by Typefully for filtering.
         * @minLength 1
         */
        from_date?: string;
        /**
         * Date value accepted by Typefully for filtering.
         * @minLength 1
         */
        to_date?: string;
      };
      output: {
        /** The returned Typefully records. */
        results: Array<Record<string, unknown>>;
        /** Total number of records available. */
        count: number;
        /** Items per page used for this request. */
        limit: number;
        /** Current offset used for this request. */
        offset: number;
        [key: string]: unknown;
      };
    };
    /** List Typefully social sets available to the current API key. */
    "typefully.list_social_sets": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The returned Typefully records. */
        results: Array<Record<string, unknown>>;
        /** Total number of records available. */
        count: number;
        /** Items per page used for this request. */
        limit: number;
        /** Current offset used for this request. */
        offset: number;
        [key: string]: unknown;
      };
    };
    /** Update a Typefully draft by ID. */
    "typefully.update_draft": {
      input: {
        /**
         * The Typefully social set ID.
         * @exclusiveMinimum 0
         */
        social_set_id: number;
        /**
         * The Typefully draft ID.
         * @exclusiveMinimum 0
         */
        draft_id: number;
        /** Request body for updating a Typefully draft. */
        body: {
          /** Platform configurations keyed by social platform. */
          platforms?: {
            /** A Typefully platform configuration used when creating or updating a draft. */
            x?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A Typefully platform configuration used when creating or updating a draft. */
            linkedin?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A Typefully platform configuration used when creating or updating a draft. */
            mastodon?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A Typefully platform configuration used when creating or updating a draft. */
            threads?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** A Typefully platform configuration used when creating or updating a draft. */
            bluesky?: {
              /** Whether this platform is enabled for the draft. */
              enabled: boolean;
              /**
               * Posts for this platform.
               * @minItems 1
               */
              posts: Array<{
                /**
                 * Post text for the target platform.
                 * @minLength 1
                 */
                text: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
          };
          /**
           * Internal draft title.
           * @minLength 1
           */
          draft_title?: string;
          /**
           * When to publish the draft: now, next-free-slot, or an ISO 8601 datetime with timezone.
           * @minLength 1
           */
          publish_at?: string;
          /** Plain text scratchpad notes for the draft. */
          scratchpad_text?: string;
          /** Whether Typefully should generate a public share URL. */
          share?: boolean;
          /** Tag slugs associated with the draft. */
          tags?: Array<string>;
          /** Whether missing comment-thread markers should be accepted and resolved server-side. */
          force_overwrite_comments?: boolean;
        };
        /** Whether the returned draft text should omit Typefully comment-thread markers. */
        exclude_comment_markers?: boolean;
      };
      output: Record<string, unknown>;
    };
  }
}

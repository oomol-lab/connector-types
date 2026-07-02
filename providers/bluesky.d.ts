import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Bluesky text post in the authenticated account's repository. */
    "bluesky.create_text_post": {
      input: {
        /**
         * The primary post text.
         * @minLength 1
         * @maxLength 3000
         */
        text: string;
        /**
         * Client-declared timestamp for the post.
         * @format date-time
         */
        createdAt?: string;
        /**
         * Human language codes for the post text.
         * @maxItems 3
         */
        langs?: Array<string>;
        /**
         * Additional hashtag values without the hash prefix.
         * @maxItems 8
         */
        tags?: Array<string>;
        /** Rich text facets to attach to the post. */
        facets?: Array<Record<string, unknown>>;
        /** Reply references for creating a reply post. */
        reply?: {
          /** A Bluesky strong reference to a post. */
          root: {
            /**
             * A Bluesky AT URI for a post or record.
             * @minLength 1
             */
            uri: string;
            /**
             * A Bluesky content identifier.
             * @minLength 1
             */
            cid: string;
          };
          /** A Bluesky strong reference to a post. */
          parent: {
            /**
             * A Bluesky AT URI for a post or record.
             * @minLength 1
             */
            uri: string;
            /**
             * A Bluesky content identifier.
             * @minLength 1
             */
            cid: string;
          };
        };
        /** A Bluesky self-label object. */
        labels?: Record<string, unknown>;
      };
      output: {
        /**
         * A Bluesky AT URI for a post or record.
         * @minLength 1
         */
        uri: string;
        /**
         * A Bluesky content identifier.
         * @minLength 1
         */
        cid: string;
        /** The validation status returned by Bluesky. */
        validationStatus: string | null;
        /** The raw Bluesky object returned by the API. */
        commit: Record<string, unknown> | null;
      };
    };
    /** Get the detailed Bluesky profile for a handle or DID. */
    "bluesky.get_profile": {
      input: {
        /**
         * A Bluesky handle or DID.
         * @minLength 1
         */
        actor: string;
      };
      output: {
        /** The detailed Bluesky profile object returned by the API. */
        profile: {
          /** The decentralized identifier for the actor. */
          did?: string;
          /** The current handle for the actor. */
          handle?: string;
          /** The display name for the actor. */
          displayName?: string;
          /** The profile description for the actor. */
          description?: string;
          /**
           * The actor avatar URL.
           * @format uri
           */
          avatar?: string;
          /**
           * The actor banner URL.
           * @format uri
           */
          banner?: string;
          /** The number of followers for the actor. */
          followersCount?: number;
          /** The number of accounts followed by the actor. */
          followsCount?: number;
          /** The number of posts by the actor. */
          postsCount?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Search Bluesky posts with common filters and pagination. */
    "bluesky.search_posts": {
      input: {
        /**
         * The Bluesky search query string.
         * @minLength 1
         */
        q: string;
        /** The ranking order for matching posts. */
        sort?: "top" | "latest";
        /**
         * Return posts after this ISO date or datetime.
         * @minLength 1
         */
        since?: string;
        /**
         * Return posts before this ISO date or datetime.
         * @minLength 1
         */
        until?: string;
        /**
         * A Bluesky handle or DID.
         * @minLength 1
         */
        mentions?: string;
        /**
         * A Bluesky handle or DID.
         * @minLength 1
         */
        author?: string;
        /**
         * Filter posts by language code.
         * @minLength 1
         */
        lang?: string;
        /**
         * Filter posts by linked hostname.
         * @minLength 1
         */
        domain?: string;
        /**
         * Filter posts by linked URL.
         * @format uri
         */
        url?: string;
        /** Filter posts by hashtag values without the hash prefix. */
        tag?: Array<string>;
        /**
         * The maximum number of posts to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A cursor returned by Bluesky pagination.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Posts returned by Bluesky. */
        posts: Array<{
          /**
           * A Bluesky AT URI for a post or record.
           * @minLength 1
           */
          uri?: string;
          /**
           * A Bluesky content identifier.
           * @minLength 1
           */
          cid?: string;
          /** The Bluesky author view for the post. */
          author?: Record<string, unknown>;
          /** The raw Bluesky object returned by the API. */
          record?: Record<string, unknown>;
          /** The server timestamp when the post was indexed. */
          indexedAt?: string;
          [key: string]: unknown;
        }>;
        /**
         * A cursor returned by Bluesky pagination.
         * @minLength 1
         */
        cursor: string | null;
        /** The total hit count when returned by Bluesky. */
        hitsTotal: number | null;
      };
    };
  }
}

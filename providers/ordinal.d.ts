import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a specific Ordinal idea by ID. */
    "ordinal.get_idea": {
      input: {
        /**
         * The Ordinal idea ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A raw Ordinal resource object. */
        idea: Record<string, unknown>;
      };
    };
    /** Get a specific Ordinal post by ID. */
    "ordinal.get_post": {
      input: {
        /**
         * The Ordinal post ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A raw Ordinal resource object. */
        post: Record<string, unknown>;
      };
    };
    /** Get details about the current Ordinal workspace. */
    "ordinal.get_workspace": {
      input: Record<string, never>;
      output: {
        /** A raw Ordinal resource object. */
        workspace: Record<string, unknown>;
      };
    };
    /** List Ordinal engagement-only profiles connected to the workspace. */
    "ordinal.list_engagement_profiles": {
      input: Record<string, never>;
      output: {
        /** Engagement profiles returned by Ordinal. */
        profiles: Array<Record<string, unknown>>;
      };
    };
    /** List Ordinal ideas with pagination and optional filters. */
    "ordinal.list_ideas": {
      input: {
        /**
         * The maximum number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor from the previous Ordinal page.
         * @format uuid
         */
        cursor?: string;
        /** One or more Ordinal UUIDs. */
        ids?: string | Array<string>;
        /** The social channel to filter ideas by. */
        channel?: "LinkedIn" | "Twitter" | "TikTok" | "YouTubeShorts";
        /**
         * Filter ideas by LinkedIn profile ID.
         * @format uuid
         */
        linkedInProfileId?: string;
        /**
         * Filter ideas by X/Twitter profile ID.
         * @format uuid
         */
        xProfileId?: string;
        /**
         * Filter ideas by TikTok profile ID.
         * @format uuid
         */
        tikTokProfileId?: string;
        /**
         * Filter ideas by YouTube channel profile ID.
         * @format uuid
         */
        youTubeProfileId?: string;
        /** One or more Ordinal UUIDs. */
        labelIds?: string | Array<string>;
        /**
         * Only include ideas created on or after this datetime.
         * @format date-time
         */
        createdAtMin?: string;
        /**
         * Only include ideas created on or before this datetime.
         * @format date-time
         */
        createdAtMax?: string;
        /** The idea field to sort by. */
        sortBy?: "createdAt";
        /** The sort order for Ordinal results. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Ideas returned by Ordinal. */
        ideas: Array<Record<string, unknown>>;
        /** The cursor for the next page when available. */
        nextCursor: string | null;
        /** Whether Ordinal reported more ideas. */
        hasMore: boolean;
      };
    };
    /** List labels in the current Ordinal workspace. */
    "ordinal.list_labels": {
      input: Record<string, never>;
      output: {
        /** Labels returned by Ordinal. */
        labels: Array<Record<string, unknown>>;
      };
    };
    /** List Ordinal posts with pagination and optional filters. */
    "ordinal.list_posts": {
      input: {
        /**
         * The maximum number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor from the previous Ordinal page.
         * @format uuid
         */
        cursor?: string;
        /** One or more Ordinal UUIDs. */
        ids?: string | Array<string>;
        /** The Ordinal post status. */
        status?: "Tentative" | "ToDo" | "InProgress" | "ForReview" | "Blocked" | "Finalized" | "Scheduled" | "Posted";
        /** The social channel to filter posts by. */
        channel?: "LinkedIn" | "Twitter" | "Instagram" | "TikTok" | "YouTubeShorts";
        /**
         * Filter posts by LinkedIn profile ID.
         * @format uuid
         */
        linkedInProfileId?: string;
        /**
         * Filter posts by X/Twitter profile ID.
         * @format uuid
         */
        xProfileId?: string;
        /**
         * Filter posts by Instagram profile ID.
         * @format uuid
         */
        instagramProfileId?: string;
        /**
         * Filter posts by TikTok profile ID.
         * @format uuid
         */
        tikTokProfileId?: string;
        /**
         * Filter posts by YouTube channel profile ID.
         * @format uuid
         */
        youTubeProfileId?: string;
        /** One or more Ordinal UUIDs. */
        labelIds?: string | Array<string>;
        /**
         * Only include posts scheduled on or after this datetime.
         * @format date-time
         */
        publishDateMin?: string;
        /**
         * Only include posts scheduled on or before this datetime.
         * @format date-time
         */
        publishDateMax?: string;
        /**
         * Only include posts created on or after this datetime.
         * @format date-time
         */
        createdAtMin?: string;
        /**
         * Only include posts created on or before this datetime.
         * @format date-time
         */
        createdAtMax?: string;
        /** The post field to sort by. */
        sortBy?: "createdAt" | "publishAt";
        /** The sort order for Ordinal results. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Posts returned by Ordinal. */
        posts: Array<Record<string, unknown>>;
        /** The cursor for the next page when available. */
        nextCursor: string | null;
        /** Whether Ordinal reported more posts. */
        hasMore: boolean;
      };
    };
    /** List Ordinal scheduling profiles connected to the workspace. */
    "ordinal.list_scheduling_profiles": {
      input: Record<string, never>;
      output: {
        /** Scheduling profiles returned by Ordinal. */
        profiles: Array<Record<string, unknown>>;
      };
    };
    /** List users in the current Ordinal workspace. */
    "ordinal.list_users": {
      input: Record<string, never>;
      output: {
        /** Users returned by Ordinal. */
        users: Array<Record<string, unknown>>;
      };
    };
  }
}

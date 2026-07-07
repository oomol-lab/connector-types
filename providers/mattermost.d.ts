import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Mattermost post in a channel. */
    "mattermost.create_post": {
      input: {
        /**
         * A Mattermost object ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The Markdown message body to post.
         * @minLength 1
         */
        message: string;
        /**
         * Optional root post ID for replying in a thread.
         * @minLength 1
         */
        rootId?: string;
        /** Optional Mattermost post props object. */
        props?: Record<string, unknown>;
      };
      output: {
        /** A Mattermost post object. */
        post: Record<string, unknown>;
        /** The raw Mattermost API JSON response. */
        raw: unknown;
      };
    };
    /** Retrieve one Mattermost channel by ID. */
    "mattermost.get_channel": {
      input: {
        /**
         * A Mattermost object ID.
         * @minLength 1
         */
        channelId: string;
      };
      output: {
        /** A Mattermost API entity object. */
        channel: Record<string, unknown>;
        /** The raw Mattermost API JSON response. */
        raw: unknown;
      };
    };
    /** Get the Mattermost user associated with the Personal Access Token. */
    "mattermost.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Mattermost API entity object. */
        user: Record<string, unknown>;
        /** The raw Mattermost API JSON response. */
        raw: unknown;
      };
    };
    /** Retrieve one Mattermost team by ID. */
    "mattermost.get_team": {
      input: {
        /**
         * A Mattermost object ID.
         * @minLength 1
         */
        teamId: string;
      };
      output: {
        /** A Mattermost API entity object. */
        team: Record<string, unknown>;
        /** The raw Mattermost API JSON response. */
        raw: unknown;
      };
    };
    /** List Mattermost posts in a channel. */
    "mattermost.list_channel_posts": {
      input: {
        /**
         * A Mattermost object ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The zero-based page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         */
        perPage?: number;
        /**
         * Only return posts created after this Unix timestamp in milliseconds.
         * @minimum 0
         */
        since?: number;
        /**
         * Return posts before this Mattermost post ID.
         * @minLength 1
         */
        beforePostId?: string;
        /**
         * Return posts after this Mattermost post ID.
         * @minLength 1
         */
        afterPostId?: string;
      };
      output: {
        /** Mattermost posts returned by the API in response order. */
        posts: Array<Record<string, unknown>>;
        /** Mattermost post IDs in response order. */
        order: Array<string>;
        /** The raw Mattermost API JSON response. */
        raw: unknown;
      };
    };
    /** List public Mattermost channels in a team. */
    "mattermost.list_team_channels": {
      input: {
        /**
         * A Mattermost object ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * The zero-based page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** Mattermost channels returned by the API. */
        channels: Array<Record<string, unknown>>;
        /** The raw Mattermost API JSON response. */
        raw: unknown;
      };
    };
    /** List Mattermost teams visible to the current user. */
    "mattermost.list_user_teams": {
      input: Record<string, never>;
      output: {
        /** Mattermost teams returned by the API. */
        teams: Array<Record<string, unknown>>;
        /** The raw Mattermost API JSON response. */
        raw: unknown;
      };
    };
  }
}

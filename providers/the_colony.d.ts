import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a comment on a The Colony post. */
    "the_colony.create_comment": {
      input: {
        /**
         * The Colony post UUID.
         * @format uuid
         */
        postId: string;
        /**
         * The comment body. Markdown is supported.
         * @minLength 1
         */
        body: string;
        /**
         * The parent comment UUID for threaded replies.
         * @format uuid
         */
        parentId?: string;
        /**
         * An optional idempotency key used by The Colony to make retried writes safe.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** A The Colony comment object. */
        comment: Record<string, unknown>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** Create a The Colony post in a colony. */
    "the_colony.create_post": {
      input: {
        /**
         * The target The Colony colony UUID.
         * @format uuid
         */
        colonyId: string;
        /** The Colony post type. */
        postType: "finding" | "question" | "analysis" | "human_request" | "discussion" | "paid_task" | "poll";
        /**
         * The post title, up to 300 characters.
         * @minLength 1
         * @maxLength 300
         */
        title: string;
        /**
         * The post body. Markdown is supported.
         * @minLength 1
         */
        body: string;
        /** The post metadata object. The shape depends on postType. */
        metadata?: Record<string, unknown>;
        /**
         * The future publish time for a scheduled post.
         * @format date-time
         */
        scheduledFor?: string;
        /**
         * An optional idempotency key used by The Colony to make retried writes safe.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** A The Colony post object. */
        post: Record<string, unknown>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** Get the current The Colony API user profile. */
    "the_colony.get_me": {
      input: Record<string, never>;
      output: {
        /** A The Colony user object. */
        user: Record<string, unknown>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** Get one The Colony post by UUID. */
    "the_colony.get_post": {
      input: {
        /**
         * The Colony post UUID.
         * @format uuid
         */
        postId: string;
      };
      output: {
        /** A The Colony post object. */
        post: Record<string, unknown>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** Get The Colony context for a post, including comments and related content. */
    "the_colony.get_post_context": {
      input: {
        /**
         * The Colony post UUID.
         * @format uuid
         */
        postId: string;
      };
      output: {
        /** A The Colony post context response object. */
        context: Record<string, unknown>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** Get The Colony post comments as a threaded conversation tree. */
    "the_colony.get_post_conversation": {
      input: {
        /**
         * The Colony post UUID.
         * @format uuid
         */
        postId: string;
      };
      output: {
        /** A The Colony conversation object. */
        conversation: Record<string, unknown>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** List The Colony colonies. */
    "the_colony.list_colonies": {
      input: Record<string, never>;
      output: {
        /** The colonies returned by The Colony. */
        colonies: Array<Record<string, unknown>>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** List comments on a The Colony post. */
    "the_colony.list_comments": {
      input: {
        /**
         * The Colony post UUID.
         * @format uuid
         */
        postId: string;
        /** The Colony comment sort order. */
        sort?: "oldest" | "newest" | "best" | "top";
        /**
         * The one-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Only return comments created strictly after this timestamp.
         * @format date-time
         */
        since?: string;
      };
      output: {
        /** The comments returned by The Colony. */
        comments: Array<Record<string, unknown>>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** List The Colony posts with optional feed filters and pagination. */
    "the_colony.list_posts": {
      input: {
        /**
         * Filter posts by colony UUID.
         * @format uuid
         */
        colonyId?: string;
        /**
         * Filter posts by colony slug.
         * @minLength 1
         */
        colony?: string;
        /** The Colony post type. */
        postType?: "finding" | "question" | "analysis" | "human_request" | "discussion" | "paid_task" | "poll";
        /** The Colony post status filter. */
        status?: "open" | "claimed" | "fulfilled" | "resolved";
        /** The Colony author type filter. */
        authorType?: "agent" | "human";
        /**
         * Filter posts by author UUID.
         * @format uuid
         */
        authorId?: string;
        /**
         * Search text across post titles and bodies.
         * @minLength 1
         */
        search?: string;
        /** The Colony post sort order. */
        sort?: "new" | "top" | "hot" | "discussed";
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The posts returned by The Colony. */
        posts: Array<Record<string, unknown>>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** Search The Colony posts and users. */
    "the_colony.search": {
      input: {
        /**
         * The search query. The Colony requires at least two characters.
         * @minLength 2
         */
        q: string;
        /** The Colony post type. */
        postType?: "finding" | "question" | "analysis" | "human_request" | "discussion" | "paid_task" | "poll";
        /**
         * Filter search results by colony UUID.
         * @format uuid
         */
        colonyId?: string;
        /**
         * Filter search results by colony slug.
         * @minLength 1
         */
        colonyName?: string;
        /** The Colony author type filter. */
        authorType?: "agent" | "human";
        /** The Colony search sort order. */
        sort?: "relevance" | "newest" | "oldest" | "top" | "discussed";
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The post results returned by The Colony. */
        posts: Array<Record<string, unknown>>;
        /** The user results returned by The Colony. */
        users: Array<Record<string, unknown>>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** Upvote or downvote a The Colony comment. */
    "the_colony.vote_comment": {
      input: {
        /**
         * The Colony comment UUID.
         * @format uuid
         */
        commentId: string;
        /** The vote value to cast. */
        value: 1 | -1;
      };
      output: {
        /** A The Colony vote response object. */
        vote: Record<string, unknown>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
    /** Upvote or downvote a The Colony post. */
    "the_colony.vote_post": {
      input: {
        /**
         * The Colony post UUID.
         * @format uuid
         */
        postId: string;
        /** The vote value to cast. */
        value: 1 | -1;
      };
      output: {
        /** A The Colony vote response object. */
        vote: Record<string, unknown>;
        /** The raw The Colony API response payload. */
        raw: unknown;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Reply to a Reddit post or comment as the authenticated Reddit user. */
    "reddit.create_comment": {
      input: {
        /**
         * A Reddit fullname such as t3_postid for a post or t1_commentid for a comment.
         * @minLength 1
         */
        parentFullname: string;
        /**
         * The Markdown body of the comment.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** The raw object returned by the Reddit Data API. */
        comment: Record<string, unknown>;
      };
    };
    /** Create a text or link post in a subreddit as the authenticated Reddit user. */
    "reddit.create_post": {
      input: {
        /**
         * The subreddit name without the r/ prefix.
         * @minLength 1
         */
        subreddit: string;
        /**
         * The title of the Reddit post.
         * @minLength 1
         * @maxLength 300
         */
        title: string;
        /** Whether to create a text post or link post. */
        kind: "self" | "link";
        /** The Markdown body for a text post. */
        text?: string;
        /**
         * The destination URL for a link post.
         * @format uri
         */
        url?: string;
        /**
         * The subreddit link flair template ID to apply.
         * @maxLength 36
         */
        flairId?: string;
        /**
         * The custom link flair text to apply when supported.
         * @maxLength 64
         */
        flairText?: string;
        /** Whether Reddit should send inbox replies for the post. */
        sendReplies?: boolean;
        /** Whether the post should be marked not safe for work. */
        nsfw?: boolean;
        /** Whether the post should be marked as a spoiler. */
        spoiler?: boolean;
      };
      output: {
        /** The raw object returned by the Reddit Data API. */
        post: Record<string, unknown>;
        /** The resulting Reddit post URL, or null. */
        url: string | null;
      };
    };
    /** Permanently delete an authenticated user's Reddit post or comment. */
    "reddit.delete_content": {
      input: {
        /**
         * A Reddit fullname such as t3_postid for a post or t1_commentid for a comment.
         * @minLength 1
         */
        fullname: string;
      };
      output: {
        /** Whether Reddit accepted the deletion request. */
        accepted: boolean;
        /**
         * A Reddit fullname such as t3_postid for a post or t1_commentid for a comment.
         * @minLength 1
         */
        fullname: string;
      };
    };
    /** Replace the body of an authenticated user's Reddit comment or text post. */
    "reddit.edit_content": {
      input: {
        /**
         * A Reddit fullname such as t3_postid for a post or t1_commentid for a comment.
         * @minLength 1
         */
        fullname: string;
        /**
         * The replacement Markdown body.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** The raw object returned by the Reddit Data API. */
        content: Record<string, unknown>;
      };
    };
    /** Get the profile of the authenticated Reddit account. */
    "reddit.get_me": {
      input: Record<string, never>;
      output: {
        /** The raw object returned by the Reddit Data API. */
        account: Record<string, unknown>;
      };
    };
    /** Get a Reddit post and its comment tree. */
    "reddit.get_post_comments": {
      input: {
        /**
         * The base-36 Reddit post ID without the t3_ prefix.
         * @minLength 1
         */
        postId: string;
        /** The subreddit name without the r/ prefix. */
        subreddit?: string;
        /** The comment sort order. */
        sort?: "confidence" | "top" | "new" | "controversial" | "old" | "random" | "qa" | "live";
        /**
         * The maximum number of comments to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The maximum depth of comment subtrees to return.
         * @minimum 1
         */
        depth?: number;
      };
      output: {
        /** The raw object returned by the Reddit Data API. */
        post: Record<string, unknown>;
        /** The top-level comment things, including nested replies. */
        comments: Array<Record<string, unknown>>;
      };
    };
    /** List posts from a subreddit using a supported Reddit sort order. */
    "reddit.list_posts": {
      input: {
        /**
         * The subreddit name without the r/ prefix.
         * @minLength 1
         */
        subreddit: string;
        /**
         * The maximum number of items to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The Reddit fullname cursor after which to continue the listing. */
        after?: string;
        /** The Reddit fullname cursor before which to continue the listing. */
        before?: string;
        /** The Reddit listing sort order. */
        sort?: "hot" | "new" | "top" | "controversial" | "rising";
        /** The time range for top or controversial listings. */
        time?: "hour" | "day" | "week" | "month" | "year" | "all";
      };
      output: {
        /** The posts returned in this page. */
        posts: Array<Record<string, unknown>>;
        /** The fullname cursor for the next page, or null. */
        after: string | null;
        /** The fullname cursor for the previous page, or null. */
        before: string | null;
      };
    };
    /** Search Reddit posts globally or within one subreddit. */
    "reddit.search_posts": {
      input: {
        /**
         * The Reddit search query.
         * @minLength 1
         */
        query: string;
        /** The subreddit name without the r/ prefix. */
        subreddit?: string;
        /** The Reddit search sort order. */
        sort?: "relevance" | "hot" | "top" | "new" | "comments";
        /** The search time range. */
        time?: "hour" | "day" | "week" | "month" | "year" | "all";
        /**
         * The maximum number of items to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The Reddit fullname cursor after which to continue the listing. */
        after?: string;
        /** The Reddit fullname cursor before which to continue the listing. */
        before?: string;
      };
      output: {
        /** The posts returned in this page. */
        posts: Array<Record<string, unknown>>;
        /** The fullname cursor for the next page, or null. */
        after: string | null;
        /** The fullname cursor for the previous page, or null. */
        before: string | null;
      };
    };
  }
}

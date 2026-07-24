import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the latest Ask HN story IDs from Hacker News. */
    "hackernews.get_ask_stories": {
      input: {
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The list of story IDs. */
        story_ids: Array<number>;
      };
    };
    /** Get the best story IDs from Hacker News ranked by score. */
    "hackernews.get_best_stories": {
      input: {
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The list of story IDs. */
        story_ids: Array<number>;
        /** The total number of story IDs returned. */
        count: number;
      };
    };
    /** Get a Hacker News item by its numeric ID. */
    "hackernews.get_item": {
      input: {
        /**
         * The item ID to fetch.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The username of the item author. */
        by?: string;
        /** The unique identifier of the item. */
        id: number;
        /** The URL of the item. */
        url?: string;
        /** Whether the item is dead. */
        dead?: boolean;
        /** The list of child item IDs. */
        kids?: Array<number>;
        /** The associated poll ID. */
        poll?: number;
        /** The text content of the item. */
        text?: string;
        /** The creation time as a Unix timestamp. */
        time?: number;
        /** The type of a Hacker News item. */
        type: "job" | "story" | "comment" | "poll" | "pollopt";
        /** The list of poll option IDs. */
        parts?: Array<number>;
        /** The score of the item. */
        score?: number;
        /** The title of the item. */
        title?: string;
        /** The parent item ID. */
        parent?: number;
        /** Whether the item has been deleted. */
        deleted?: boolean;
        /** The total number of descendants. */
        descendants?: number;
        [key: string]: unknown;
      } | null;
    };
    /** Get a Hacker News item with a bounded nested comment tree. */
    "hackernews.get_item_with_id": {
      input: {
        /** A Hacker News item identifier. */
        item_id: number | string;
        /**
         * The maximum depth of the nested comment tree.
         * @minimum 0
         * @maximum 10
         * @default 2
         */
        max_depth?: number;
        /**
         * The maximum number of children per node.
         * @minimum 0
         * @maximum 100
         * @default 10
         */
        max_children?: number;
        /**
         * Whether to truncate long text content.
         * @default true
         */
        truncate_text?: boolean;
      };
      output: {
        /** Whether the item was found. */
        found: boolean;
        /** The item with nested children. */
        item?: {
          /** The item ID. */
          id: number;
          /** The item URL. */
          url?: string;
          /** The item text content. */
          text?: string;
          /** The type of a Hacker News item. */
          type: "job" | "story" | "comment" | "poll" | "pollopt";
          /** The item title. */
          title?: string;
          /** The item author username. */
          author?: string;
          /** The number of points. */
          points?: number;
          /** The poll option IDs. */
          options?: Array<number>;
          /** The nested child items. */
          children?: Array<unknown>;
          /** The parent story ID. */
          story_id?: number;
          /** The parent item ID. */
          parent_id?: number;
          /** The creation timestamp. */
          created_at?: string;
          /** The creation time as a Unix timestamp. */
          created_at_i?: number;
          /** The number of children shown. */
          children_shown?: number;
          /** Whether the maximum tree depth was reached. */
          max_depth_reached?: boolean;
          /** Whether the children list was truncated. */
          children_truncated?: boolean;
          /** The total number of child items. */
          total_children_count?: number;
          [key: string]: unknown;
        };
        /** The error message if the item was not found. */
        error_message?: string;
      };
    };
    /** Get the latest job story IDs from Hacker News. */
    "hackernews.get_job_stories": {
      input: {
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The list of story IDs. */
        story_ids: Array<number>;
      };
    };
    /** Get the latest Hacker News posts via Algolia search_by_date. */
    "hackernews.get_latest_posts": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 0
         * @default 0
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 0
         * @maximum 20
         * @default 5
         */
        size?: number;
        /** The filter tags. */
        tags?: Array<string>;
      };
      output: {
        /** The latest post hits. */
        hits: Array<{
          /** The URL of the post. */
          url?: string;
          /** The title of the post. */
          title?: string;
          /** The username of the post author. */
          author: string;
          /** The number of points. */
          points?: number;
          /** The Algolia object ID. */
          objectID: string;
          /** The Hacker News story ID. */
          story_id?: number;
          /** The creation timestamp. */
          created_at: string;
          /** The story text content. */
          story_text?: string;
          /** The parent story title. */
          story_title?: string;
          /** The parent story URL. */
          story_url?: string;
          /** The comment text content. */
          comment_text?: string;
          /** The creation time as a Unix timestamp. */
          created_at_i?: number;
          /** The number of comments. */
          num_comments?: number;
          /** The search tags. */
          _tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The total number of matching results. */
        nbHits: number;
        /** The current page number. */
        page: number;
        /** The total number of pages. */
        nbPages: number;
        /** The number of hits per page. */
        hitsPerPage: number;
      };
    };
    /** Get the current largest Hacker News item ID. */
    "hackernews.get_max_item_id": {
      input: {
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The current largest item ID. */
        max_item_id: number;
      };
    };
    /** Get the newest story IDs from Hacker News. */
    "hackernews.get_new_stories": {
      input: {
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The list of story IDs. */
        story_ids: Array<number>;
        /** The total number of story IDs returned. */
        count: number;
      };
    };
    /** Get the latest Show HN story IDs from Hacker News. */
    "hackernews.get_show_stories": {
      input: {
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The list of story IDs. */
        story_ids: Array<number>;
      };
    };
    /** Get the top story IDs from Hacker News sorted by front page position. */
    "hackernews.get_top_stories": {
      input: {
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The list of story IDs. */
        story_ids: Array<number>;
        /** The total number of story IDs returned. */
        count: number;
      };
    };
    /** Get recently changed items and user profiles from Hacker News. */
    "hackernews.get_updates": {
      input: {
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The recently changed item IDs. */
        items: Array<number>;
        /** The recently changed user profiles. */
        profiles: Array<string>;
      };
    };
    /** Get a Hacker News user's public profile summary by username. */
    "hackernews.get_user": {
      input: {
        /**
         * The username to look up.
         * @minLength 1
         */
        username: string;
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The username. */
        username: string;
        /** The user's karma score. */
        karma: number;
        /** The user's about text. */
        about?: string;
      } | null;
    };
    /** Get a Hacker News user's detailed public profile by username. */
    "hackernews.get_user_by_username": {
      input: {
        /**
         * The username to look up.
         * @minLength 1
         */
        username: string;
        /** The pretty-print flag for Firebase responses. */
        print?: "pretty";
      };
      output: {
        /** The username. */
        id: string;
        /** The user's about text. */
        about?: string;
        /** The user's karma score. */
        karma: number;
        /** The account creation time as a Unix timestamp. */
        created: number;
        /** The list of submitted item IDs. */
        submitted?: Array<number>;
        [key: string]: unknown;
      } | null;
    };
    /** Search Hacker News posts using Algolia full-text search. */
    "hackernews.search_posts": {
      input: {
        /**
         * The search query text.
         * @minLength 1
         */
        query: string;
        /**
         * The page number to fetch.
         * @minimum 0
         * @default 0
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 0
         * @maximum 20
         * @default 5
         */
        size?: number;
        /** The filter tags. */
        tags?: Array<string>;
      };
      output: {
        /** The search result hits. */
        hits: Array<{
          /** The URL of the post. */
          url?: string;
          /** The title of the post. */
          title?: string;
          /** The username of the post author. */
          author: string;
          /** The number of points. */
          points?: number;
          /** The Algolia object ID. */
          objectID: string;
          /** The Hacker News story ID. */
          story_id?: number;
          /** The creation timestamp. */
          created_at: string;
          /** The story text content. */
          story_text?: string;
          /** The parent story title. */
          story_title?: string;
          /** The parent story URL. */
          story_url?: string;
          /** The comment text content. */
          comment_text?: string;
          /** The creation time as a Unix timestamp. */
          created_at_i?: number;
          /** The number of comments. */
          num_comments?: number;
          /** The search tags. */
          _tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The total number of matching results. */
        nbHits: number;
        /** The current page number. */
        page: number;
        /** The total number of pages. */
        nbPages: number;
        /** The number of hits per page. */
        hitsPerPage: number;
        /** The search query that was executed. */
        query: string;
      };
    };
  }
}

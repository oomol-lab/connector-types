import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one public Ghost author by ID or slug. */
    "ghost.get_author": {
      input: {
        /**
         * The Ghost resource ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Ghost resource slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * Comma-separated Ghost include expression, such as authors,tags or count.posts.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Ghost field list to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated Ghost formats to return, such as html,plaintext.
         * @minLength 1
         */
        formats?: string;
      };
      output: {
        /** The raw Ghost Content API object. */
        author: Record<string, unknown> | null;
      };
    };
    /** Get one published Ghost page by ID or slug. */
    "ghost.get_page": {
      input: {
        /**
         * The Ghost resource ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Ghost resource slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * Comma-separated Ghost include expression, such as authors,tags or count.posts.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Ghost field list to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated Ghost formats to return, such as html,plaintext.
         * @minLength 1
         */
        formats?: string;
      };
      output: {
        /** The raw Ghost Content API object. */
        page: Record<string, unknown> | null;
      };
    };
    /** Get one published Ghost post by ID or slug. */
    "ghost.get_post": {
      input: {
        /**
         * The Ghost resource ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Ghost resource slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * Comma-separated Ghost include expression, such as authors,tags or count.posts.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Ghost field list to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated Ghost formats to return, such as html,plaintext.
         * @minLength 1
         */
        formats?: string;
      };
      output: {
        /** The raw Ghost Content API object. */
        post: Record<string, unknown> | null;
      };
    };
    /** Get one public Ghost tag by ID or slug. */
    "ghost.get_tag": {
      input: {
        /**
         * The Ghost resource ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Ghost resource slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * Comma-separated Ghost include expression, such as authors,tags or count.posts.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Ghost field list to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated Ghost formats to return, such as html,plaintext.
         * @minLength 1
         */
        formats?: string;
      };
      output: {
        /** The raw Ghost Content API object. */
        tag: Record<string, unknown> | null;
      };
    };
    /** List public authors from the connected Ghost site. */
    "ghost.list_authors": {
      input: {
        /**
         * The maximum number of resources to request from Ghost.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based page number to request from Ghost.
         * @minimum 1
         */
        page?: number;
        /**
         * Comma-separated Ghost include expression, such as authors,tags or count.posts.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Ghost field list to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated Ghost formats to return, such as html,plaintext.
         * @minLength 1
         */
        formats?: string;
        /**
         * Ghost Content API filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * Ghost Content API order expression.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** The Ghost authors returned by the Content API. */
        authors: Array<Record<string, unknown>>;
        /** The Ghost Content API pagination metadata. */
        meta: Record<string, unknown> | null;
      };
    };
    /** List published pages from the connected Ghost site. */
    "ghost.list_pages": {
      input: {
        /**
         * The maximum number of resources to request from Ghost.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based page number to request from Ghost.
         * @minimum 1
         */
        page?: number;
        /**
         * Comma-separated Ghost include expression, such as authors,tags or count.posts.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Ghost field list to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated Ghost formats to return, such as html,plaintext.
         * @minLength 1
         */
        formats?: string;
        /**
         * Ghost Content API filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * Ghost Content API order expression.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** The Ghost pages returned by the Content API. */
        pages: Array<Record<string, unknown>>;
        /** The Ghost Content API pagination metadata. */
        meta: Record<string, unknown> | null;
      };
    };
    /** List published posts from the connected Ghost site. */
    "ghost.list_posts": {
      input: {
        /**
         * The maximum number of resources to request from Ghost.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based page number to request from Ghost.
         * @minimum 1
         */
        page?: number;
        /**
         * Comma-separated Ghost include expression, such as authors,tags or count.posts.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Ghost field list to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated Ghost formats to return, such as html,plaintext.
         * @minLength 1
         */
        formats?: string;
        /**
         * Ghost Content API filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * Ghost Content API order expression.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** The Ghost posts returned by the Content API. */
        posts: Array<Record<string, unknown>>;
        /** The Ghost Content API pagination metadata. */
        meta: Record<string, unknown> | null;
      };
    };
    /** List public tags from the connected Ghost site. */
    "ghost.list_tags": {
      input: {
        /**
         * The maximum number of resources to request from Ghost.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based page number to request from Ghost.
         * @minimum 1
         */
        page?: number;
        /**
         * Comma-separated Ghost include expression, such as authors,tags or count.posts.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Ghost field list to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * Comma-separated Ghost formats to return, such as html,plaintext.
         * @minLength 1
         */
        formats?: string;
        /**
         * Ghost Content API filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * Ghost Content API order expression.
         * @minLength 1
         */
        order?: string;
      };
      output: {
        /** The Ghost tags returned by the Content API. */
        tags: Array<Record<string, unknown>>;
        /** The Ghost Content API pagination metadata. */
        meta: Record<string, unknown> | null;
      };
    };
    /** Read public settings for the connected Ghost site. */
    "ghost.read_settings": {
      input: Record<string, never>;
      output: {
        /** The raw Ghost settings object. */
        settings: Record<string, unknown> | null;
      };
    };
  }
}

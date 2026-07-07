import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a WordPress category. */
    "wordpress.create_category": {
      input: {
        /**
         * The term display name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * The WordPress URL slug.
         * @minLength 1
         * @pattern \S
         */
        slug?: string;
        /** The term description. */
        description?: string;
        /**
         * The parent term ID.
         * @exclusiveMinimum 0
         */
        parent?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A WordPress taxonomy term object. */
        category: {
          /**
           * The numeric WordPress term ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The term display name. */
          name: string;
          /** The WordPress term slug. */
          slug: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a WordPress page. */
    "wordpress.create_page": {
      input: {
        /**
         * The page title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** The page content. */
        content?: string;
        /** The page excerpt. */
        excerpt?: string;
        /**
         * The WordPress URL slug.
         * @minLength 1
         * @pattern \S
         */
        slug?: string;
        /** The WordPress publication status. */
        status?: "publish" | "future" | "draft" | "pending" | "private";
        /**
         * The parent page ID.
         * @exclusiveMinimum 0
         */
        parent?: number;
        /**
         * The featured media attachment ID.
         * @exclusiveMinimum 0
         */
        featuredMedia?: number;
        /** The page menu order. */
        menuOrder?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A WordPress page object. */
        page: {
          /**
           * The numeric WordPress page ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress page slug. */
          slug: string;
          /** The WordPress page status. */
          status: string;
          /** A WordPress rendered object. */
          title: {
            /** The rendered HTML value returned by WordPress. */
            rendered?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a WordPress post. */
    "wordpress.create_post": {
      input: {
        /**
         * The post title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** The post content. */
        content?: string;
        /** The post excerpt. */
        excerpt?: string;
        /**
         * The WordPress URL slug.
         * @minLength 1
         * @pattern \S
         */
        slug?: string;
        /** The WordPress publication status. */
        status?: "publish" | "future" | "draft" | "pending" | "private";
        /**
         * Category IDs assigned to the post.
         * @minItems 1
         */
        categories?: Array<number>;
        /**
         * Tag IDs assigned to the post.
         * @minItems 1
         */
        tags?: Array<number>;
        /**
         * The featured media attachment ID.
         * @exclusiveMinimum 0
         */
        featuredMedia?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A WordPress post object. */
        post: {
          /**
           * The numeric WordPress post ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress post slug. */
          slug: string;
          /** The WordPress post status. */
          status: string;
          /** A WordPress rendered object. */
          title: {
            /** The rendered HTML value returned by WordPress. */
            rendered?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a WordPress tag. */
    "wordpress.create_tag": {
      input: {
        /**
         * The term display name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * The WordPress URL slug.
         * @minLength 1
         * @pattern \S
         */
        slug?: string;
        /** The term description. */
        description?: string;
        /**
         * The parent term ID.
         * @exclusiveMinimum 0
         */
        parent?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A WordPress taxonomy term object. */
        tag: {
          /**
           * The numeric WordPress term ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The term display name. */
          name: string;
          /** The WordPress term slug. */
          slug: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a WordPress comment by ID. */
    "wordpress.delete_comment": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether to permanently delete the resource instead of moving it to trash. */
        force?: boolean;
      };
      output: {
        /** Whether WordPress deleted the resource. */
        deleted: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
      };
    };
    /** Delete a WordPress page by ID. */
    "wordpress.delete_page": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether to permanently delete the resource instead of moving it to trash. */
        force?: boolean;
      };
      output: {
        /** Whether WordPress deleted the resource. */
        deleted: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
      };
    };
    /** Delete a WordPress post by ID. */
    "wordpress.delete_post": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether to permanently delete the resource instead of moving it to trash. */
        force?: boolean;
      };
      output: {
        /** Whether WordPress deleted the resource. */
        deleted: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
      };
    };
    /** Get the authenticated WordPress user. */
    "wordpress.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated WordPress user. */
        user: {
          /**
           * The numeric WordPress user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress user display name. */
          name: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a WordPress page by ID. */
    "wordpress.get_page": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A WordPress page object. */
        page: {
          /**
           * The numeric WordPress page ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress page slug. */
          slug: string;
          /** The WordPress page status. */
          status: string;
          /** A WordPress rendered object. */
          title: {
            /** The rendered HTML value returned by WordPress. */
            rendered?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a WordPress post by ID. */
    "wordpress.get_post": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A WordPress post object. */
        post: {
          /**
           * The numeric WordPress post ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress post slug. */
          slug: string;
          /** The WordPress post status. */
          status: string;
          /** A WordPress rendered object. */
          title: {
            /** The rendered HTML value returned by WordPress. */
            rendered?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List WordPress categories with optional filters and pagination. */
    "wordpress.list_categories": {
      input: {
        /**
         * Limit results to resources matching this search string.
         * @minLength 1
         */
        search?: string;
        /**
         * The page number of WordPress results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of WordPress results to return.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The sort direction for WordPress list results. */
        order?: "asc" | "desc";
        /**
         * Term IDs to include in the response.
         * @minItems 1
         */
        include?: Array<number>;
        /**
         * Term IDs to exclude from the response.
         * @minItems 1
         */
        exclude?: Array<number>;
        /**
         * Parent term ID used to filter child terms.
         * @exclusiveMinimum 0
         */
        parent?: number;
        /**
         * Term slugs used to filter WordPress terms.
         * @minItems 1
         */
        slug?: Array<string>;
        /** Whether to hide terms not assigned to any post. */
        hideEmpty?: boolean;
        /** The field used to sort WordPress terms. */
        orderby?: "id" | "include" | "name" | "slug" | "include_slugs" | "term_group" | "description" | "count";
      };
      output: {
        /** The WordPress categories returned by the list request. */
        categories: Array<{
          /**
           * The numeric WordPress term ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The term display name. */
          name: string;
          /** The WordPress term slug. */
          slug: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned in WordPress response headers. */
        pagination: {
          /** The total number of matching WordPress resources. */
          total: number | null;
          /** The total number of WordPress result pages. */
          totalPages: number | null;
        };
      };
    };
    /** List WordPress comments with optional filters and pagination. */
    "wordpress.list_comments": {
      input: {
        /**
         * Limit results to resources matching this search string.
         * @minLength 1
         */
        search?: string;
        /**
         * The page number of WordPress results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of WordPress results to return.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The sort direction for WordPress list results. */
        order?: "asc" | "desc";
        /**
         * WordPress comment statuses to include.
         * @minItems 1
         */
        status?: Array<"hold" | "approve" | "approved" | "spam" | "trash">;
        /**
         * Post IDs used to filter comments.
         * @minItems 1
         */
        post?: Array<number>;
        /**
         * Author user IDs used to filter comments.
         * @minItems 1
         */
        author?: Array<number>;
        /**
         * Parent comment IDs used to filter comments.
         * @minItems 1
         */
        parent?: Array<number>;
        /**
         * Comment IDs to include in the response.
         * @minItems 1
         */
        include?: Array<number>;
        /**
         * Comment IDs to exclude from the response.
         * @minItems 1
         */
        exclude?: Array<number>;
        /** The field used to sort WordPress comments. */
        orderby?: "date" | "date_gmt" | "id" | "include" | "post" | "parent" | "type";
      };
      output: {
        /** The WordPress comments returned by the list request. */
        comments: Array<{
          /**
           * The numeric WordPress comment ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress comment status. */
          status: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned in WordPress response headers. */
        pagination: {
          /** The total number of matching WordPress resources. */
          total: number | null;
          /** The total number of WordPress result pages. */
          totalPages: number | null;
        };
      };
    };
    /** List WordPress pages with optional filters and pagination. */
    "wordpress.list_pages": {
      input: {
        /**
         * Limit results to resources matching this search string.
         * @minLength 1
         */
        search?: string;
        /**
         * The page number of WordPress results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of WordPress results to return.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The sort direction for WordPress list results. */
        order?: "asc" | "desc";
        /**
         * WordPress statuses to include.
         * @minItems 1
         */
        status?: Array<"publish" | "future" | "draft" | "pending" | "private">;
        /**
         * Page IDs to include in the response.
         * @minItems 1
         */
        include?: Array<number>;
        /**
         * Page IDs to exclude from the response.
         * @minItems 1
         */
        exclude?: Array<number>;
        /**
         * Parent page IDs used to filter WordPress pages.
         * @minItems 1
         */
        parent?: Array<number>;
        /**
         * Author user IDs used to filter WordPress pages.
         * @minItems 1
         */
        author?: Array<number>;
        /**
         * Page slugs used to filter WordPress pages.
         * @minItems 1
         */
        slug?: Array<string>;
        /** The field used to sort WordPress posts or pages. */
        orderby?: "author" | "date" | "id" | "include" | "modified" | "parent" | "relevance" | "slug" | "include_slugs" | "title";
      };
      output: {
        /** The WordPress pages returned by the list request. */
        pages: Array<{
          /**
           * The numeric WordPress page ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress page slug. */
          slug: string;
          /** The WordPress page status. */
          status: string;
          /** A WordPress rendered object. */
          title: {
            /** The rendered HTML value returned by WordPress. */
            rendered?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned in WordPress response headers. */
        pagination: {
          /** The total number of matching WordPress resources. */
          total: number | null;
          /** The total number of WordPress result pages. */
          totalPages: number | null;
        };
      };
    };
    /** List WordPress posts with optional filters and pagination. */
    "wordpress.list_posts": {
      input: {
        /**
         * Limit results to resources matching this search string.
         * @minLength 1
         */
        search?: string;
        /**
         * The page number of WordPress results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of WordPress results to return.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The sort direction for WordPress list results. */
        order?: "asc" | "desc";
        /**
         * WordPress statuses to include.
         * @minItems 1
         */
        status?: Array<"publish" | "future" | "draft" | "pending" | "private">;
        /**
         * Category IDs used to filter WordPress posts.
         * @minItems 1
         */
        categories?: Array<number>;
        /**
         * Tag IDs used to filter WordPress posts.
         * @minItems 1
         */
        tags?: Array<number>;
        /**
         * Post IDs to include in the response.
         * @minItems 1
         */
        include?: Array<number>;
        /**
         * Post IDs to exclude from the response.
         * @minItems 1
         */
        exclude?: Array<number>;
        /**
         * Author user IDs used to filter WordPress posts.
         * @minItems 1
         */
        author?: Array<number>;
        /**
         * Post slugs used to filter WordPress posts.
         * @minItems 1
         */
        slug?: Array<string>;
        /** The field used to sort WordPress posts or pages. */
        orderby?: "author" | "date" | "id" | "include" | "modified" | "parent" | "relevance" | "slug" | "include_slugs" | "title";
      };
      output: {
        /** The WordPress posts returned by the list request. */
        posts: Array<{
          /**
           * The numeric WordPress post ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress post slug. */
          slug: string;
          /** The WordPress post status. */
          status: string;
          /** A WordPress rendered object. */
          title: {
            /** The rendered HTML value returned by WordPress. */
            rendered?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned in WordPress response headers. */
        pagination: {
          /** The total number of matching WordPress resources. */
          total: number | null;
          /** The total number of WordPress result pages. */
          totalPages: number | null;
        };
      };
    };
    /** List WordPress tags with optional filters and pagination. */
    "wordpress.list_tags": {
      input: {
        /**
         * Limit results to resources matching this search string.
         * @minLength 1
         */
        search?: string;
        /**
         * The page number of WordPress results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of WordPress results to return.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The sort direction for WordPress list results. */
        order?: "asc" | "desc";
        /**
         * Term IDs to include in the response.
         * @minItems 1
         */
        include?: Array<number>;
        /**
         * Term IDs to exclude from the response.
         * @minItems 1
         */
        exclude?: Array<number>;
        /**
         * Parent term ID used to filter child terms.
         * @exclusiveMinimum 0
         */
        parent?: number;
        /**
         * Term slugs used to filter WordPress terms.
         * @minItems 1
         */
        slug?: Array<string>;
        /** Whether to hide terms not assigned to any post. */
        hideEmpty?: boolean;
        /** The field used to sort WordPress terms. */
        orderby?: "id" | "include" | "name" | "slug" | "include_slugs" | "term_group" | "description" | "count";
      };
      output: {
        /** The WordPress tags returned by the list request. */
        tags: Array<{
          /**
           * The numeric WordPress term ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The term display name. */
          name: string;
          /** The WordPress term slug. */
          slug: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned in WordPress response headers. */
        pagination: {
          /** The total number of matching WordPress resources. */
          total: number | null;
          /** The total number of WordPress result pages. */
          totalPages: number | null;
        };
      };
    };
    /** Update a WordPress comment by ID. */
    "wordpress.update_comment": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The comment content. */
        content?: string;
        /** The WordPress comment status. */
        status?: "hold" | "approve" | "approved" | "spam" | "trash";
        /**
         * The display name for the comment author.
         * @minLength 1
         */
        authorName?: string;
        /**
         * The email address for the comment author.
         * @format email
         */
        authorEmail?: string;
        /**
         * The URL for the comment author.
         * @format uri
         */
        authorUrl?: string;
      };
      output: {
        /** A WordPress comment object. */
        comment: {
          /**
           * The numeric WordPress comment ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress comment status. */
          status: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a WordPress page by ID. */
    "wordpress.update_page": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The page title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** The page content. */
        content?: string;
        /** The page excerpt. */
        excerpt?: string;
        /**
         * The WordPress URL slug.
         * @minLength 1
         * @pattern \S
         */
        slug?: string;
        /** The WordPress publication status. */
        status?: "publish" | "future" | "draft" | "pending" | "private";
        /**
         * The parent page ID.
         * @exclusiveMinimum 0
         */
        parent?: number;
        /**
         * The featured media attachment ID.
         * @exclusiveMinimum 0
         */
        featuredMedia?: number;
        /** The page menu order. */
        menuOrder?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A WordPress page object. */
        page: {
          /**
           * The numeric WordPress page ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress page slug. */
          slug: string;
          /** The WordPress page status. */
          status: string;
          /** A WordPress rendered object. */
          title: {
            /** The rendered HTML value returned by WordPress. */
            rendered?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Update a WordPress post by ID. */
    "wordpress.update_post": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The post title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** The post content. */
        content?: string;
        /** The post excerpt. */
        excerpt?: string;
        /**
         * The WordPress URL slug.
         * @minLength 1
         * @pattern \S
         */
        slug?: string;
        /** The WordPress publication status. */
        status?: "publish" | "future" | "draft" | "pending" | "private";
        /**
         * Category IDs assigned to the post.
         * @minItems 1
         */
        categories?: Array<number>;
        /**
         * Tag IDs assigned to the post.
         * @minItems 1
         */
        tags?: Array<number>;
        /**
         * The featured media attachment ID.
         * @exclusiveMinimum 0
         */
        featuredMedia?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A WordPress post object. */
        post: {
          /**
           * The numeric WordPress post ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress post slug. */
          slug: string;
          /** The WordPress post status. */
          status: string;
          /** A WordPress rendered object. */
          title: {
            /** The rendered HTML value returned by WordPress. */
            rendered?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}

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
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
        /**
         * A WordPress resource ID, or zero to clear the association.
         * @minimum 0
         */
        parent?: number;
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
    /** Create a WordPress comment or reply on a content object that allows comments. */
    "wordpress.create_comment": {
      input: {
        /**
         * The numeric ID of the content object being commented on.
         * @exclusiveMinimum 0
         */
        post: number;
        /**
         * The content of the comment.
         * @minLength 1
         */
        content: string;
        /**
         * The parent comment ID; zero creates a top-level comment.
         * @minimum 0
         */
        parent?: number;
        /**
         * The comment author user ID; must identify an existing WordPress user.
         * @exclusiveMinimum 0
         */
        author?: number;
        /** The display name of the comment author. */
        authorName?: string;
        /**
         * The email address of the comment author.
         * @format email
         */
        authorEmail?: string;
        /** The URL of the comment author. */
        authorUrl?: string;
        /** The IP address of the comment author. */
        authorIp?: string;
        /** The user agent of the comment author. */
        authorUserAgent?: string;
        /** An ISO8601 date in the site's timezone. */
        date?: string;
        /** An ISO8601 date in GMT. */
        dateGmt?: string;
        /** The comment moderation status accepted by this WordPress site. */
        status?: string;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
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
    /** Create a WordPress page. */
    "wordpress.create_page": {
      input: {
        /** The page title. */
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
         * The parent page ID; zero moves the page to the root level.
         * @minimum 0
         */
        parent?: number;
        /**
         * The featured media attachment ID; zero removes the featured image.
         * @minimum 0
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
        /** The post title. */
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
        /** Category IDs assigned to the post; an empty array clears all assignments. */
        categories?: Array<number>;
        /** Tag IDs assigned to the post; an empty array clears all assignments. */
        tags?: Array<number>;
        /**
         * The featured media attachment ID; zero removes the featured image.
         * @minimum 0
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
    /** Permanently delete a WordPress category. WordPress terms do not support trash. */
    "wordpress.delete_category": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether WordPress permanently deleted the resource. */
        deleted: boolean;
        /** Whether WordPress moved the resource to trash. */
        trashed: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
        /** The resource returned after moving it to trash; null after permanent deletion. */
        resource: Record<string, unknown> | null;
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
        /** Whether WordPress permanently deleted the resource. */
        deleted: boolean;
        /** Whether WordPress moved the resource to trash. */
        trashed: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
        /** The resource returned after moving it to trash; null after permanent deletion. */
        resource: Record<string, unknown> | null;
      };
    };
    /** Delete a WordPress media attachment. Permanent deletion requires force=true; trashing depends on the site configuration. */
    "wordpress.delete_media": {
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
        /** Whether WordPress permanently deleted the resource. */
        deleted: boolean;
        /** Whether WordPress moved the resource to trash. */
        trashed: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
        /** The resource returned after moving it to trash; null after permanent deletion. */
        resource: Record<string, unknown> | null;
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
        /** Whether WordPress permanently deleted the resource. */
        deleted: boolean;
        /** Whether WordPress moved the resource to trash. */
        trashed: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
        /** The resource returned after moving it to trash; null after permanent deletion. */
        resource: Record<string, unknown> | null;
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
        /** Whether WordPress permanently deleted the resource. */
        deleted: boolean;
        /** Whether WordPress moved the resource to trash. */
        trashed: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
        /** The resource returned after moving it to trash; null after permanent deletion. */
        resource: Record<string, unknown> | null;
      };
    };
    /** Permanently delete a WordPress tag. WordPress terms do not support trash. */
    "wordpress.delete_tag": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether WordPress permanently deleted the resource. */
        deleted: boolean;
        /** Whether WordPress moved the resource to trash. */
        trashed: boolean;
        /** The previous WordPress resource payload when returned. */
        previous: Record<string, unknown> | null;
        /** The resource returned after moving it to trash; null after permanent deletion. */
        resource: Record<string, unknown> | null;
      };
    };
    /** Get a WordPress category by ID. */
    "wordpress.get_category": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Scope determining the fields returned by WordPress. */
        context?: "view" | "embed" | "edit";
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
    /** Get a WordPress comment by ID, including comments on password-protected posts. */
    "wordpress.get_comment": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Scope determining the fields returned by WordPress. */
        context?: "view" | "embed" | "edit";
        /** The password of the parent post if it is password protected. */
        password?: string;
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
    /** Get a WordPress media attachment by ID. */
    "wordpress.get_media": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Scope determining the fields returned by WordPress. */
        context?: "view" | "embed" | "edit";
      };
      output: {
        /** A WordPress media attachment, including its source_url and upstream metadata. */
        media: {
          /**
           * The numeric WordPress resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The URL of the original media file.
           * @format uri
           */
          source_url: string;
          /** The attachment media type. */
          media_type: string;
          /** The MIME type of the attachment. */
          mime_type: string;
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
    /** Get a WordPress tag by ID. */
    "wordpress.get_tag": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Scope determining the fields returned by WordPress. */
        context?: "view" | "embed" | "edit";
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
    /** Get a WordPress user by ID. The edit context requires permission to view that user. */
    "wordpress.get_user": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Scope determining the fields returned by WordPress. */
        context?: "view" | "embed" | "edit";
      };
      output: {
        /** A WordPress user object. */
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
         * Term slugs used to filter WordPress terms.
         * @minItems 1
         */
        slug?: Array<string>;
        /** Whether to hide terms not assigned to any post. */
        hideEmpty?: boolean;
        /** The field used to sort WordPress terms. */
        orderby?: "id" | "include" | "name" | "slug" | "include_slugs" | "term_group" | "description" | "count";
        /**
         * Parent term ID used to filter child terms; zero selects root categories.
         * @minimum 0
         */
        parent?: number;
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
         * Limit comments to one status, or any for all statuses; requires authorization.
         * @minLength 1
         */
        status?: string;
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
    /** List WordPress media attachments with filters and pagination. */
    "wordpress.list_media": {
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
        /** Scope determining the fields returned by WordPress. */
        context?: "view" | "embed" | "edit";
        /** An ISO8601 date in the site's timezone. */
        after?: string;
        /** An ISO8601 date in the site's timezone. */
        before?: string;
        /** An ISO8601 date in the site's timezone. */
        modifiedAfter?: string;
        /** An ISO8601 date in the site's timezone. */
        modifiedBefore?: string;
        /**
         * Author IDs to include.
         * @minItems 1
         */
        author?: Array<number>;
        /**
         * Author IDs to exclude.
         * @minItems 1
         */
        authorExclude?: Array<number>;
        /**
         * Attachment IDs to include.
         * @minItems 1
         */
        include?: Array<number>;
        /**
         * Attachment IDs to exclude.
         * @minItems 1
         */
        exclude?: Array<number>;
        /**
         * The number of attachments to skip.
         * @minimum 0
         */
        offset?: number;
        /** The field used to sort WordPress posts or pages. */
        orderby?: "author" | "date" | "id" | "include" | "modified" | "parent" | "relevance" | "slug" | "include_slugs" | "title";
        /** Parent post IDs to include, with zero selecting unattached media. */
        parent?: Array<number>;
        /** Parent post IDs to exclude. */
        parentExclude?: Array<number>;
        /** Post columns searched by WordPress. */
        searchColumns?: Array<"post_title" | "post_content" | "post_excerpt">;
        /** Attachment slugs to include. */
        slug?: Array<string>;
        /** Attachment statuses to include; WordPress defaults to inherit. */
        status?: Array<string>;
        /** The attachment type to include. */
        mediaType?: "image" | "video" | "text" | "application" | "audio";
        /**
         * The attachment MIME type to include.
         * @minLength 1
         */
        mimeType?: string;
      };
      output: {
        /** The resources returned by WordPress list_media. */
        media: Array<{
          /**
           * The numeric WordPress resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The URL of the original media file.
           * @format uri
           */
          source_url: string;
          /** The attachment media type. */
          media_type: string;
          /** The MIME type of the attachment. */
          mime_type: string;
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
        status?: Array<string>;
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
        status?: Array<string>;
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
    /** List WordPress users with filters and pagination. User visibility and privileged filters depend on the connected user permissions. */
    "wordpress.list_users": {
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
        /** Scope determining the fields returned by WordPress. */
        context?: "view" | "embed" | "edit";
        /**
         * User IDs to include.
         * @minItems 1
         */
        include?: Array<number>;
        /**
         * User IDs to exclude.
         * @minItems 1
         */
        exclude?: Array<number>;
        /**
         * The number of users to skip.
         * @minimum 0
         */
        offset?: number;
        /** The field used to sort users. */
        orderby?: "id" | "include" | "name" | "registered_date" | "slug" | "include_slugs" | "email" | "url";
        /** User slugs to include. */
        slug?: Array<string>;
        /** Roles that at least one user role must match; requires permission to list users. */
        roles?: Array<string>;
        /** Capabilities that at least one user capability must match; requires permission to list users. */
        capabilities?: Array<string>;
        /** Limit results to authors; deprecated by WordPress in favor of capabilities. */
        who?: "authors";
        /** Whether users must have published posts, or the post types they must have published. */
        hasPublishedPosts?: boolean | Array<string>;
      };
      output: {
        /** The resources returned by WordPress list_users. */
        users: Array<{
          /**
           * The numeric WordPress user ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The WordPress user display name. */
          name: string;
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
    /** Search WordPress posts, terms or post formats with pagination and subtype filters. */
    "wordpress.search": {
      input: {
        /** Limit results to items matching this search string. */
        search?: string;
        /** Scope determining the fields returned in search results. */
        context?: "view" | "embed";
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
        /** The object type to search; WordPress defaults to post. */
        type?: "post" | "term" | "post-format";
        /**
         * Object subtypes to search, including site-specific subtypes; use any for all subtypes.
         * @minItems 1
         */
        subtype?: Array<string>;
        /**
         * Resource IDs to include in search results.
         * @minItems 1
         */
        include?: Array<number>;
        /**
         * Resource IDs to exclude from search results.
         * @minItems 1
         */
        exclude?: Array<number>;
      };
      output: {
        /** The resources returned by WordPress search. */
        results: Array<{
          /** The resource ID, which can be numeric or a string. */
          id: number | string;
          /** The title of the result. */
          title: string;
          /**
           * The URL of the result.
           * @format uri
           */
          url: string;
          /** The result object type. */
          type: string;
          /** The result object subtype. */
          subtype: string;
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
    /** Update a WordPress category by ID. */
    "wordpress.update_category": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The term display name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** The WordPress term slug; an empty string regenerates it. */
        slug?: string;
        /** The HTML description of the term. */
        description?: string;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
        /**
         * A WordPress resource ID, or zero to clear the association.
         * @minimum 0
         */
        parent?: number;
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
        status?: "hold" | "approve" | "approved" | "spam" | "unspam" | "trash" | "untrash" | "0" | "1";
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
    /** Update WordPress media metadata by ID, including replacing its caption and description. */
    "wordpress.update_media": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** An ISO8601 date in the site's timezone. */
        date?: string;
        /** An ISO8601 date in GMT. */
        dateGmt?: string;
        /** The WordPress attachment slug. */
        slug?: string;
        /** The WordPress publication status. */
        status?: "publish" | "future" | "draft" | "pending" | "private";
        /** The title of the attachment. */
        title?: string;
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        author?: number;
        /** Whether comments are open on the attachment. */
        commentStatus?: "open" | "closed";
        /** Whether the attachment can be pinged. */
        pingStatus?: "open" | "closed";
        /** The theme file used to display the attachment. */
        template?: string;
        /** Alternative text displayed when the attachment is not displayed. */
        altText?: string;
        /** The caption of the attachment. */
        caption?: string;
        /** The description of the attachment. */
        description?: string;
        /**
         * A WordPress resource ID, or zero to clear the association.
         * @minimum 0
         */
        post?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A WordPress media attachment, including its source_url and upstream metadata. */
        media: {
          /**
           * The numeric WordPress resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The URL of the original media file.
           * @format uri
           */
          source_url: string;
          /** The attachment media type. */
          media_type: string;
          /** The MIME type of the attachment. */
          mime_type: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a WordPress page by ID. */
    "wordpress.update_page": {
      input: {
        /** The page title. */
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
         * The parent page ID; zero moves the page to the root level.
         * @minimum 0
         */
        parent?: number;
        /**
         * The featured media attachment ID; zero removes the featured image.
         * @minimum 0
         */
        featuredMedia?: number;
        /** The page menu order. */
        menuOrder?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
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
    /** Update a WordPress post by ID. */
    "wordpress.update_post": {
      input: {
        /** The post title. */
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
        /** Category IDs assigned to the post; an empty array clears all assignments. */
        categories?: Array<number>;
        /** Tag IDs assigned to the post; an empty array clears all assignments. */
        tags?: Array<number>;
        /**
         * The featured media attachment ID; zero removes the featured image.
         * @minimum 0
         */
        featuredMedia?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
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
    /** Update a WordPress tag by ID. */
    "wordpress.update_tag": {
      input: {
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The term display name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** The WordPress term slug; an empty string regenerates it. */
        slug?: string;
        /** The HTML description of the term. */
        description?: string;
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
    /** Download fileUrl and upload it to the WordPress media library. Optional meta fields are applied after upload; if that step fails the error includes the created attachment ID. */
    "wordpress.upload_media": {
      input: {
        /**
         * A publicly accessible HTTP or HTTPS URL of the file to upload. The connector downloads it with SSRF protection.
         * @format uri
         */
        fileUrl: string;
        /**
         * The upload filename, including its extension. Defaults to the fileUrl path basename; provide it for URLs without a filename.
         * @minLength 1
         * @pattern \S
         */
        fileName?: string;
        /**
         * The upload MIME type. Defaults to the download Content-Type; WordPress also checks the file extension and contents.
         * @minLength 1
         */
        mimeType?: string;
        /**
         * The connector download size limit in bytes. Defaults to 20 MiB; raise it for larger files. The WordPress site may impose a lower limit.
         * @exclusiveMinimum 0
         */
        maximumBytes?: number;
        /** An ISO8601 date in the site's timezone. */
        date?: string;
        /** An ISO8601 date in GMT. */
        dateGmt?: string;
        /** The WordPress attachment slug. */
        slug?: string;
        /** The WordPress publication status. */
        status?: "publish" | "future" | "draft" | "pending" | "private";
        /** The title of the attachment. */
        title?: string;
        /**
         * The numeric WordPress resource ID.
         * @exclusiveMinimum 0
         */
        author?: number;
        /** Whether comments are open on the attachment. */
        commentStatus?: "open" | "closed";
        /** Whether the attachment can be pinged. */
        pingStatus?: "open" | "closed";
        /** The theme file used to display the attachment. */
        template?: string;
        /** Alternative text displayed when the attachment is not displayed. */
        altText?: string;
        /** The caption of the attachment. */
        caption?: string;
        /** The description of the attachment. */
        description?: string;
        /**
         * A WordPress resource ID, or zero to clear the association.
         * @minimum 0
         */
        post?: number;
        /** Meta fields to send to WordPress. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A WordPress media attachment, including its source_url and upstream metadata. */
        media: {
          /**
           * The numeric WordPress resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The URL of the original media file.
           * @format uri
           */
          source_url: string;
          /** The attachment media type. */
          media_type: string;
          /** The MIME type of the attachment. */
          mime_type: string;
          [key: string]: unknown;
        };
      };
    };
  }
}

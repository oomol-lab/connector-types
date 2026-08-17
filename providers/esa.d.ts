import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Append Markdown content to an esa post without first fetching its current body. */
    "esa.append_post": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /** Markdown content. Use four spaces for indentation where required. */
        content: string;
        /** WIP state after the append. Defaults to the current state. */
        wip?: boolean;
        /** Optional revision message. */
        message?: string;
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** Archive an esa post by moving it to the Archived category. */
    "esa.archive_post": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /** Optional archive revision message. */
        message?: string;
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      } | {
        /** Archive result message. */
        message: string;
        /** The existing Archived category path. */
        category: string;
      };
    };
    /** Create a Markdown comment on an existing esa post. */
    "esa.create_comment": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /** Markdown content. Use four spaces for indentation where required. */
        bodyMd: string;
        /**
         * Comment author's screen name. Requires owner permission.
         * @minLength 1
         * @pattern \S
         */
        user?: string;
      };
      output: {
        /**
         * The comment ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The post number that owns the comment.
         * @exclusiveMinimum 0
         */
        post_number: number;
        /**
         * The comment URL.
         * @format uri
         */
        url: string;
        /** The comment body in Markdown. */
        body_md?: string;
        /**
         * When the comment was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the comment was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Comment counters returned by esa. */
        stats?: {
          /**
           * Number of users who starred the comment.
           * @minimum 0
           */
          stargazers_count?: number;
          /** Whether the authenticated user starred the comment. */
          star?: boolean;
          [key: string]: unknown;
        };
        /** Users who starred the comment. */
        stargazers?: Array<{
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a new esa post with optional Markdown body, tags, category, WIP state, and revision message. */
    "esa.create_post": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The post title. A category/title value is split when category is omitted.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Markdown content. Use four spaces for indentation where required. */
        bodyMd?: string;
        /** Tags to assign to the post. */
        tags?: Array<string>;
        /** Category path such as dev/docs. */
        category?: string;
        /**
         * Whether to create the post as WIP. Defaults to true.
         * @default true
         */
        wip?: boolean;
        /** Optional revision message. */
        message?: string;
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** Permanently delete an esa comment by ID. */
    "esa.delete_comment": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa comment ID.
         * @exclusiveMinimum 0
         */
        commentId: number;
      };
      output: {
        /** Whether the comment was deleted. */
        success: true;
        /** Deletion result message. */
        message: string;
      };
    };
    /** Duplicate an esa post into a new WIP post in the same or another accessible team. */
    "esa.duplicate_post": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /**
         * Destination team subdomain. Defaults to the source team.
         * @minLength 1
         * @pattern \S
         */
        targetTeamName?: string;
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** List esa category paths with pagination and optional path filters. */
    "esa.get_all_category_paths": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Keep paths beginning with this value. */
        prefix?: string;
        /** Keep paths ending with this value. */
        suffix?: string;
        /** Keep paths containing this value. */
        match?: string;
        /** Keep only exactly matching paths. */
        exactMatch?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get an esa attachment as a local transit file when possible, otherwise return its downloadable URL. */
    "esa.get_attachment": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /** A public HTTPS esa attachment URL or an /uploads/... path. */
        url: string;
        /**
         * Skip the transit download and return the resolved URL. Secure esa attachments use a signed URL.
         * @default false
         */
        forceSignedUrl?: boolean;
      };
      output: {
        /**
         * The resolved signed or public attachment URL.
         * @format uri
         */
        url: string;
        /** A downloaded attachment uploaded to file transit storage. */
        file?: {
          /**
           * The public transit URL for the downloaded attachment.
           * @format uri
           */
          s3url: string;
          /**
           * Downloaded file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /** Downloaded file name. */
          name: string;
          /** Downloaded file MIME type. */
          mimetype: string;
        };
      };
    };
    /** Get an esa category, its child categories, and optional posts or parents. */
    "esa.get_categories": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /** Category path to retrieve. */
        select: string;
        /** Additional data to include. */
        include?: "posts" | "parent_categories";
        /** Include descendant posts when include is posts. */
        descendantPosts?: boolean;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The selected category path. */
        current_category?: string;
        /** Categories at the selected level. */
        categories?: Array<{
          /** The full category path. */
          full_name: string;
          /**
           * Number of posts in the category.
           * @minimum 0
           */
          count: number;
          /** Whether the category has child categories. */
          has_child: boolean;
          [key: string]: unknown;
        }>;
        /** Parent category levels. */
        parent_categories?: Array<{
          /** The parent category path. */
          current_category?: string;
          /** Categories under that parent. */
          categories?: Array<{
            /** The full category path. */
            full_name: string;
            /**
             * Number of posts in the category.
             * @minimum 0
             */
            count: number;
            /** Whether the category has child categories. */
            has_child: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** An esa post shaped for agent use. */
        readme?: {
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        };
        /** An esa category summary. */
        no_category?: {
          /** The full category path. */
          full_name: string;
          /**
           * Number of posts in the category.
           * @minimum 0
           */
          count: number;
          /** Whether the category has child categories. */
          has_child: boolean;
          [key: string]: unknown;
        };
        /** Posts in descendant categories. */
        descendant_posts?: Array<{
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        }>;
        /** Posts directly in the selected category. */
        posts?: Array<{
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** Get one esa comment by ID, optionally including its stargazers. */
    "esa.get_comment": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa comment ID.
         * @exclusiveMinimum 0
         */
        commentId: number;
        /** Include users who starred the comment. */
        include?: "stargazers";
      };
      output: {
        /**
         * The comment ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The post number that owns the comment.
         * @exclusiveMinimum 0
         */
        post_number: number;
        /**
         * The comment URL.
         * @format uri
         */
        url: string;
        /** The comment body in Markdown. */
        body_md?: string;
        /**
         * When the comment was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the comment was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Comment counters returned by esa. */
        stats?: {
          /**
           * Number of users who starred the comment.
           * @minimum 0
           */
          stargazers_count?: number;
          /** Whether the authenticated user starred the comment. */
          star?: boolean;
          [key: string]: unknown;
        };
        /** Users who starred the comment. */
        stargazers?: Array<{
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get esa's official Markdown-syntax documentation post. */
    "esa.get_markdown_syntax_help": {
      input: Record<string, never>;
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** Get one esa post by number. The body is truncated by default to keep agent context bounded. */
    "esa.get_post": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /**
         * Whether to truncate a long Markdown body. Defaults to true.
         * @default true
         */
        truncate?: boolean;
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** List posts that link to a specific esa post. */
    "esa.get_post_backlinks": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Post summaries returned by esa. */
        posts: Array<{
          /**
           * The esa post number.
           * @exclusiveMinimum 0
           */
          number: number;
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** List comments on an esa post with pagination. */
    "esa.get_post_comments": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Comments returned by esa. */
        comments: Array<{
          /**
           * The comment ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The post number that owns the comment.
           * @exclusiveMinimum 0
           */
          post_number: number;
          /**
           * The comment URL.
           * @format uri
           */
          url: string;
          /** The comment body in Markdown. */
          body_md?: string;
          /**
           * When the comment was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the comment was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Comment counters returned by esa. */
          stats?: {
            /**
             * Number of users who starred the comment.
             * @minimum 0
             */
            stargazers_count?: number;
            /** Whether the authenticated user starred the comment. */
            star?: boolean;
            [key: string]: unknown;
          };
          /** Users who starred the comment. */
          stargazers?: Array<{
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** Build the summary prompt for an esa post. The caller supplies the returned prompt to its model. */
    "esa.get_post_summary_prompt": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
      };
      output: {
        /** A complete prompt containing post metadata and Markdown body. */
        prompt: string;
      };
    };
    /** Get esa's official search-syntax documentation post. */
    "esa.get_search_options_help": {
      input: Record<string, never>;
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** List comments in an esa team with pagination. */
    "esa.get_team_comments": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Comments returned by esa. */
        comments: Array<{
          /**
           * The comment ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The post number that owns the comment.
           * @exclusiveMinimum 0
           */
          post_number: number;
          /**
           * The comment URL.
           * @format uri
           */
          url: string;
          /** The comment body in Markdown. */
          body_md?: string;
          /**
           * When the comment was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the comment was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Comment counters returned by esa. */
          stats?: {
            /**
             * Number of users who starred the comment.
             * @minimum 0
             */
            stargazers_count?: number;
            /** Whether the authenticated user starred the comment. */
            star?: boolean;
            [key: string]: unknown;
          };
          /** Users who starred the comment. */
          stargazers?: Array<{
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** List members of an esa team with their roles and profiles. */
    "esa.get_team_members": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Member sort key. */
        sort?: "posts_count" | "joined" | "last_accessed";
        /** Sort direction. */
        order?: "asc" | "desc";
      };
      output: {
        /** Team members returned by esa. */
        members: Array<{
          /** The member's esa user ID. */
          id?: number;
          /** The member's display name. */
          name?: string;
          /** The member's esa screen name. */
          screen_name?: string;
          /** The member's team role. */
          role?: string;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** Get member, post, comment, star, watch, and activity statistics for an esa team. */
    "esa.get_team_stats": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
      };
      output: Record<string, unknown>;
    };
    /** List tags used by posts in an esa team with their counts. */
    "esa.get_team_tags": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Tags used in the team. */
        tags: Array<{
          /** The tag name. */
          name?: string;
          /**
           * Number of posts carrying the tag.
           * @minimum 0
           */
          posts_count?: number;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** List esa teams available to the authenticated user. */
    "esa.get_teams": {
      input: {
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Optional membership-role filter. */
        role?: "member" | "owner";
      };
      output: {
        /** Teams available to the authenticated user. */
        teams: Array<{
          /**
           * The team URL.
           * @format uri
           */
          url?: string;
          /** The team subdomain. */
          name?: string;
          /** The team description. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** Get all top-level esa categories for a team. */
    "esa.get_top_categories": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
      };
      output: {
        /** The selected category path. */
        current_category?: string;
        /** Categories at the selected level. */
        categories?: Array<{
          /** The full category path. */
          full_name: string;
          /**
           * Number of posts in the category.
           * @minimum 0
           */
          count: number;
          /** Whether the category has child categories. */
          has_child: boolean;
          [key: string]: unknown;
        }>;
        /** Parent category levels. */
        parent_categories?: Array<{
          /** The parent category path. */
          current_category?: string;
          /** Categories under that parent. */
          categories?: Array<{
            /** The full category path. */
            full_name: string;
            /**
             * Number of posts in the category.
             * @minimum 0
             */
            count: number;
            /** Whether the category has child categories. */
            has_child: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** An esa post shaped for agent use. */
        readme?: {
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        };
        /** An esa category summary. */
        no_category?: {
          /** The full category path. */
          full_name: string;
          /**
           * Number of posts in the category.
           * @minimum 0
           */
          count: number;
          /** Whether the category has child categories. */
          has_child: boolean;
          [key: string]: unknown;
        };
        /** Posts in descendant categories. */
        descendant_posts?: Array<{
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        }>;
        /** Posts directly in the selected category. */
        posts?: Array<{
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** List recently updated esa posts. This is the action equivalent of the esa_recent_posts MCP resource. */
    "esa.list_recent_posts": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Posts returned by esa. */
        posts: Array<{
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** Prepend Markdown content to an esa post without first fetching its current body. */
    "esa.prepend_post": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /** Markdown content. Use four spaces for indentation where required. */
        content: string;
        /** WIP state after the prepend. Defaults to the current state. */
        wip?: boolean;
        /** Optional revision message. */
        message?: string;
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** Restore an esa post to a selected revision and create a new revision from it. */
    "esa.rollback_post_revision": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /**
         * The revision number to restore.
         * @exclusiveMinimum 0
         */
        revisionNumber: number;
        /** WIP state after rollback. Defaults to the target revision state. */
        wip?: boolean;
        /** Optional rollback revision message. */
        message?: string;
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** Search esa's official documentation team with esa query syntax. */
    "esa.search_help": {
      input: {
        /** esa search query for the official docs team. */
        query: string;
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Posts returned by esa. */
        posts: Array<{
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** Search posts in an esa team with esa query syntax and pagination. */
    "esa.search_posts": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /** esa search query. An empty string lists posts. */
        query: string;
        /** Sort key. */
        sort?: "updated" | "created" | "number" | "stars" | "watches" | "comments" | "best_match";
        /** Sort direction. */
        order?: "asc" | "desc";
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Items per page. esa accepts at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Posts returned by esa. */
        posts: Array<{
          /**
           * The post URL.
           * @format uri
           */
          url: string;
          /**
           * The current revision number.
           * @minimum 0
           */
          revision_number: number;
          /** The publication state of the post. */
          wip: "WIP" | "Shipped";
          /** The esa post kind. */
          kind: string;
          /** The post category, title, and tags. */
          category_and_title_and_tags: string;
          /** The post body in Markdown. */
          body_md?: string;
          /** The full post body size before output truncation. */
          body_md_stats?: {
            /**
             * Number of user-perceived characters.
             * @minimum 0
             */
            characters: number;
            /**
             * Number of newline-separated lines.
             * @minimum 0
             */
            lines: number;
          };
          /**
           * When the post was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * When the post was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** An esa user profile. */
          created_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An esa user profile. */
          updated_by?: {
            /** The esa user ID. */
            id?: number;
            /** The user's display name. */
            name?: string;
            /** The user's esa screen name. */
            screen_name?: string;
            /**
             * The user's icon URL.
             * @format uri
             */
            icon?: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Post counters returned by esa. */
          stats?: {
            /**
             * Number of tasks in the post.
             * @minimum 0
             */
            tasks_count?: number;
            /**
             * Number of completed tasks in the post.
             * @minimum 0
             */
            done_tasks_count?: number;
            /**
             * Number of comments on the post.
             * @minimum 0
             */
            comments_count?: number;
            /**
             * Number of users who starred the post.
             * @minimum 0
             */
            stargazers_count?: number;
            /**
             * Number of users watching the post.
             * @minimum 0
             */
            watchers_count?: number;
            [key: string]: unknown;
          };
          /**
           * Number of posts that link to this post.
           * @minimum 0
           */
          backlinks_count?: number;
          [key: string]: unknown;
        }>;
        /** The previous page, or null when this is the first page. */
        prev_page?: number | null;
        /** The next page, or null when this is the last page. */
        next_page?: number | null;
        /**
         * Total number of matching items.
         * @minimum 0
         */
        total_count?: number;
        /**
         * The current page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items in this page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The maximum page size accepted by esa.
         * @exclusiveMinimum 0
         */
        max_per_page?: number;
        [key: string]: unknown;
      };
    };
    /** Mark an esa post as shipped without changing other fields. */
    "esa.ship_post": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
    /** Update an existing esa comment. */
    "esa.update_comment": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa comment ID.
         * @exclusiveMinimum 0
         */
        commentId: number;
        /** Markdown content. Use four spaces for indentation where required. */
        bodyMd: string;
        /**
         * Comment author's screen name. Requires owner permission.
         * @minLength 1
         * @pattern \S
         */
        user?: string;
      };
      output: {
        /**
         * The comment ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The post number that owns the comment.
         * @exclusiveMinimum 0
         */
        post_number: number;
        /**
         * The comment URL.
         * @format uri
         */
        url: string;
        /** The comment body in Markdown. */
        body_md?: string;
        /**
         * When the comment was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the comment was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Comment counters returned by esa. */
        stats?: {
          /**
           * Number of users who starred the comment.
           * @minimum 0
           */
          stargazers_count?: number;
          /** Whether the authenticated user starred the comment. */
          star?: boolean;
          [key: string]: unknown;
        };
        /** Users who starred the comment. */
        stargazers?: Array<{
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update selected fields of an existing esa post. Use append_post or prepend_post to add Markdown without fetching the body. */
    "esa.update_post": {
      input: {
        /**
         * The esa team subdomain, optionally including the .esa.io suffix.
         * @minLength 1
         * @pattern \S
         */
        teamName: string;
        /**
         * The numeric esa post number.
         * @exclusiveMinimum 0
         */
        postNumber: number;
        /** New post title. A category/title value is split when category is omitted. */
        name?: string;
        /** Markdown content. Use four spaces for indentation where required. */
        bodyMd?: string;
        /** Replacement tag list. */
        tags?: Array<string>;
        /** Replacement category path. */
        category?: string;
        /** Whether the post remains WIP. */
        wip?: boolean;
        /** Optional revision message. */
        message?: string;
        /** A post revision used to detect conflicting updates. */
        originalRevision?: {
          /** Markdown content. Use four spaces for indentation where required. */
          bodyMd: string;
          /**
           * The original revision number.
           * @exclusiveMinimum 0
           */
          number: number;
          /**
           * The original revision author's screen name.
           * @minLength 1
           * @pattern \S
           */
          user: string;
        };
      };
      output: {
        /**
         * The post URL.
         * @format uri
         */
        url: string;
        /**
         * The current revision number.
         * @minimum 0
         */
        revision_number: number;
        /** The publication state of the post. */
        wip: "WIP" | "Shipped";
        /** The esa post kind. */
        kind: string;
        /** The post category, title, and tags. */
        category_and_title_and_tags: string;
        /** The post body in Markdown. */
        body_md?: string;
        /** The full post body size before output truncation. */
        body_md_stats?: {
          /**
           * Number of user-perceived characters.
           * @minimum 0
           */
          characters: number;
          /**
           * Number of newline-separated lines.
           * @minimum 0
           */
          lines: number;
        };
        /**
         * When the post was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * When the post was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** An esa user profile. */
        created_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** An esa user profile. */
        updated_by?: {
          /** The esa user ID. */
          id?: number;
          /** The user's display name. */
          name?: string;
          /** The user's esa screen name. */
          screen_name?: string;
          /**
           * The user's icon URL.
           * @format uri
           */
          icon?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Post counters returned by esa. */
        stats?: {
          /**
           * Number of tasks in the post.
           * @minimum 0
           */
          tasks_count?: number;
          /**
           * Number of completed tasks in the post.
           * @minimum 0
           */
          done_tasks_count?: number;
          /**
           * Number of comments on the post.
           * @minimum 0
           */
          comments_count?: number;
          /**
           * Number of users who starred the post.
           * @minimum 0
           */
          stargazers_count?: number;
          /**
           * Number of users watching the post.
           * @minimum 0
           */
          watchers_count?: number;
          [key: string]: unknown;
        };
        /**
         * Number of posts that link to this post.
         * @minimum 0
         */
        backlinks_count?: number;
        [key: string]: unknown;
      };
    };
  }
}

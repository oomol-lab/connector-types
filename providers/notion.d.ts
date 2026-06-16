import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Append a single paragraph block to a Notion page. This is a simplified compatibility helper over `append_block_children`. */
    "notion.append_block": {
      input: {
        /** The page ID to append the block to. */
        pageId: string;
        /** The text content of the paragraph block. */
        text: string;
      };
      output: {
        /** The Notion object type for a paginated response. */
        object: "list";
        /** The list of result objects. */
        results: Array<{
          /** The Notion object type. */
          object?: "block";
          /** The block ID. */
          id?: string;
          /** The parent object that contains this Notion object. */
          parent?: {
            /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
            type?: string;
            [key: string]: unknown;
          };
          /**
           * The time when the block was created.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time when the block was last edited.
           * @format date-time
           */
          last_edited_time?: string;
          /** A Notion user reference. */
          created_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Notion user reference. */
          last_edited_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Whether the block has child blocks. */
          has_children?: boolean;
          /** Whether the block is in the trash. */
          in_trash?: boolean;
          /** The block type, such as paragraph, heading_1, child_page, or to_do. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of results. */
        next_cursor: string | null;
        /** Whether more results are available. */
        has_more: boolean;
        /** The type-specific pagination metadata field name. */
        type: "block";
        /** Pagination metadata for block results. */
        block: Record<string, never>;
        /** The pagination request status returned by Notion. */
        request_status?: {
          /** The request status type returned by Notion. */
          type?: string;
          /** The reason the response is incomplete. */
          incomplete_reason?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Append raw Notion child blocks to an existing parent block, using the official block-children append API. */
    "notion.append_block_children": {
      input: {
        /** The parent block ID to append children to. */
        blockId: string;
        /** The list of Notion API objects. */
        children: Array<Record<string, unknown>>;
        /** The official Notion block insertion position object. */
        position?: {
          /** Insert the children at the end of the parent block. */
          type: "end";
        } | {
          /** Insert the children at the start of the parent block. */
          type: "start";
        } | {
          /** Insert the children after an existing sibling block. */
          type: "after_block";
          /** The sibling block reference. */
          after_block: {
            /** The sibling block ID to insert after. */
            id: string;
          };
        };
      };
      output: {
        /** The Notion object type for a paginated response. */
        object: "list";
        /** The list of result objects. */
        results: Array<{
          /** The Notion object type. */
          object?: "block";
          /** The block ID. */
          id?: string;
          /** The parent object that contains this Notion object. */
          parent?: {
            /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
            type?: string;
            [key: string]: unknown;
          };
          /**
           * The time when the block was created.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time when the block was last edited.
           * @format date-time
           */
          last_edited_time?: string;
          /** A Notion user reference. */
          created_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Notion user reference. */
          last_edited_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Whether the block has child blocks. */
          has_children?: boolean;
          /** Whether the block is in the trash. */
          in_trash?: boolean;
          /** The block type, such as paragraph, heading_1, child_page, or to_do. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of results. */
        next_cursor: string | null;
        /** Whether more results are available. */
        has_more: boolean;
        /** The type-specific pagination metadata field name. */
        type: "block";
        /** Pagination metadata for block results. */
        block: Record<string, never>;
        /** The pagination request status returned by Notion. */
        request_status?: {
          /** The request status type returned by Notion. */
          type?: string;
          /** The reason the response is incomplete. */
          incomplete_reason?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a Notion data source under a parent database with a properties schema. */
    "notion.create_data_source": {
      input: {
        /** The official Notion parent object for the new data source. */
        parent: Record<string, unknown>;
        /** The data source properties schema keyed by property name. */
        properties: Record<string, unknown>;
        /** The Notion rich text objects for this field. */
        title?: Array<Record<string, unknown>>;
        /** The data source icon object. */
        icon?: Record<string, unknown>;
      };
      output: {
        /** The Notion object type. */
        object?: "data_source";
        /** The data source ID. */
        id?: string;
        /**
         * The time when the data source was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the data source was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The data source title rich text objects. */
        title?: Array<Record<string, unknown>>;
        /** The data source description rich text objects. */
        description?: Array<Record<string, unknown>>;
        /** The data source icon object, or null when it has no icon. */
        icon?: Record<string, unknown> | null;
        /** The Notion page, database, or data source properties keyed by property name. */
        properties?: Record<string, unknown>;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The canonical Notion URL for the data source.
         * @format uri
         */
        url?: string;
        /** Whether the data source is in the trash. */
        in_trash?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a Notion database container under a parent page or workspace, optionally with an initial data source. */
    "notion.create_database": {
      input: {
        /** The official Notion parent object for the new database. */
        parent: Record<string, unknown>;
        /** The Notion rich text objects for this field. */
        title?: Array<Record<string, unknown>>;
        /** The Notion rich text objects for this field. */
        description?: Array<Record<string, unknown>>;
        /** Whether the database should be displayed inline in its parent. */
        is_inline?: boolean;
        /** The official Notion initial data source payload, including its properties schema. */
        initial_data_source?: Record<string, unknown>;
        /** The database icon object. */
        icon?: Record<string, unknown>;
        /** The database cover object. */
        cover?: Record<string, unknown>;
      };
      output: {
        /** The Notion object type. */
        object?: "database";
        /** The database ID. */
        id?: string;
        /** The child data sources contained in this database. */
        data_sources?: Array<Record<string, unknown>>;
        /**
         * The time when the database was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the database was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The database title rich text objects. */
        title?: Array<Record<string, unknown>>;
        /** The database description rich text objects. */
        description?: Array<Record<string, unknown>>;
        /** The database icon object, or null when the database has no icon. */
        icon?: Record<string, unknown> | null;
        /** The database cover object, or null when the database has no cover. */
        cover?: Record<string, unknown> | null;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The canonical Notion URL for the database.
         * @format uri
         */
        url?: string;
        /**
         * The public Notion URL if the database is published to the web.
         * @format uri
         */
        public_url?: string | null;
        /** Whether the database is in the trash. */
        in_trash?: boolean;
        /** Whether the database is inline within a page. */
        is_inline?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a Notion page under a parent page, data source, or workspace-level private area. Use parentId + title for a simple child page under an existing page. Use parent with an official Notion parent payload for advanced cases: { page_id: "..." }, { data_source_id: "..." }, or { workspace: true } for OAuth public integrations. When parent is provided, do not use the top-level title field; provide the page title through properties.title instead. Internal integration secrets usually cannot create workspace-level private pages and should use a parent page or data source. */
    "notion.create_page": {
      input: {
        /** The parent page ID. */
        parentId?: string;
        /** The page title. */
        title?: string;
        /** The official Notion parent object payload. Use { page_id: "..." } for a child page under an existing page, { data_source_id: "..." } for a data source row, or { workspace: true } to create a workspace-level private page when the credential is an OAuth public integration. When parent is provided, do not use the top-level title field; set the title through properties.title instead. Internal integration secrets usually cannot create workspace-level private pages and should use a parent page or data source. */
        parent?: Record<string, unknown>;
        /** The page properties. */
        properties?: Record<string, unknown>;
        /** The child blocks to add. */
        children?: Array<Record<string, unknown>>;
        /** Enhanced Markdown content to create page content. Mutually exclusive with children. Markdown-only private pages without parent are supported only for OAuth public connections or personal access tokens; internal integration secrets should provide a parent page or data source. */
        markdown?: string;
        /** The data source template payload to apply to the created page. */
        template?: Record<string, unknown>;
        /** The page icon object. */
        icon?: Record<string, unknown>;
        /** The page cover object. */
        cover?: Record<string, unknown>;
      };
      output: {
        /** The Notion object type. */
        object?: "page";
        /** The page ID. */
        id?: string;
        /**
         * The time when the page was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the page was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The page cover object, or null when the page has no cover. */
        cover?: Record<string, unknown> | null;
        /** The page icon object, or null when the page has no icon. */
        icon?: Record<string, unknown> | null;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /** Whether the page has been archived. */
        is_archived?: boolean;
        /** Whether the page is in the trash. */
        in_trash?: boolean;
        /** Whether the page is locked. */
        is_locked?: boolean;
        /** The Notion page, database, or data source properties keyed by property name. */
        properties?: Record<string, unknown>;
        /**
         * The canonical Notion URL for the page.
         * @format uri
         */
        url?: string;
        /**
         * The public Notion URL if the page is published to the web.
         * @format uri
         */
        public_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Archive a Notion block through the official delete endpoint. */
    "notion.delete_block": {
      input: {
        /** The block ID to delete. */
        blockId: string;
      };
      output: {
        /** The Notion object type. */
        object?: "block";
        /** The block ID. */
        id?: string;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The time when the block was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the block was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Whether the block has child blocks. */
        has_children?: boolean;
        /** Whether the block is in the trash. */
        in_trash?: boolean;
        /** The block type, such as paragraph, heading_1, child_page, or to_do. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Notion page together with its first-level child blocks. This is a repo-level aggregate helper over page retrieval plus block-children listing. */
    "notion.get_page": {
      input: {
        /** The page ID to retrieve. */
        pageId: string;
      };
      output: {
        /** The full page object. */
        page: {
          /** The Notion object type. */
          object?: "page";
          /** The page ID. */
          id?: string;
          /**
           * The time when the page was created.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time when the page was last edited.
           * @format date-time
           */
          last_edited_time?: string;
          /** A Notion user reference. */
          created_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Notion user reference. */
          last_edited_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The page cover object, or null when the page has no cover. */
          cover?: Record<string, unknown> | null;
          /** The page icon object, or null when the page has no icon. */
          icon?: Record<string, unknown> | null;
          /** The parent object that contains this Notion object. */
          parent?: {
            /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
            type?: string;
            [key: string]: unknown;
          };
          /** Whether the page has been archived. */
          is_archived?: boolean;
          /** Whether the page is in the trash. */
          in_trash?: boolean;
          /** Whether the page is locked. */
          is_locked?: boolean;
          /** The Notion page, database, or data source properties keyed by property name. */
          properties?: Record<string, unknown>;
          /**
           * The canonical Notion URL for the page.
           * @format uri
           */
          url?: string;
          /**
           * The public Notion URL if the page is published to the web.
           * @format uri
           */
          public_url?: string | null;
          [key: string]: unknown;
        };
        /** The official Notion list response for the page's first-level child blocks. */
        block_children: {
          /** The Notion object type for a paginated response. */
          object: "list";
          /** The list of result objects. */
          results: Array<{
            /** The Notion object type. */
            object?: "block";
            /** The block ID. */
            id?: string;
            /** The parent object that contains this Notion object. */
            parent?: {
              /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
              type?: string;
              [key: string]: unknown;
            };
            /**
             * The time when the block was created.
             * @format date-time
             */
            created_time?: string;
            /**
             * The time when the block was last edited.
             * @format date-time
             */
            last_edited_time?: string;
            /** A Notion user reference. */
            created_by?: {
              /** The Notion object type. */
              object?: "user";
              /** The Notion user ID. */
              id?: string;
              /** The user's display name, or null when unavailable. */
              name?: string | null;
              /** The user's avatar URL, or null when unavailable. */
              avatar_url?: string | null;
              /** The user type returned by Notion. */
              type?: "person" | "bot";
              /** Details about a person user. */
              person?: {
                /**
                 * The person's email address.
                 * @format email
                 */
                email?: string;
                [key: string]: unknown;
              };
              /** Details about a bot user. */
              bot?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** A Notion user reference. */
            last_edited_by?: {
              /** The Notion object type. */
              object?: "user";
              /** The Notion user ID. */
              id?: string;
              /** The user's display name, or null when unavailable. */
              name?: string | null;
              /** The user's avatar URL, or null when unavailable. */
              avatar_url?: string | null;
              /** The user type returned by Notion. */
              type?: "person" | "bot";
              /** Details about a person user. */
              person?: {
                /**
                 * The person's email address.
                 * @format email
                 */
                email?: string;
                [key: string]: unknown;
              };
              /** Details about a bot user. */
              bot?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** Whether the block has child blocks. */
            has_children?: boolean;
            /** Whether the block is in the trash. */
            in_trash?: boolean;
            /** The block type, such as paragraph, heading_1, child_page, or to_do. */
            type?: string;
            [key: string]: unknown;
          }>;
          /** The cursor for the next page of results. */
          next_cursor: string | null;
          /** Whether more results are available. */
          has_more: boolean;
          /** The type-specific pagination metadata field name. */
          type: "block";
          /** Pagination metadata for block results. */
          block: Record<string, never>;
          /** The pagination request status returned by Notion. */
          request_status?: {
            /** The request status type returned by Notion. */
            type?: string;
            /** The reason the response is incomplete. */
            incomplete_reason?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List the direct child blocks under a Notion block with pagination. */
    "notion.list_block_children": {
      input: {
        /** The parent block ID. */
        blockId: string;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The cursor for pagination. */
        startCursor?: string;
      };
      output: {
        /** The Notion object type for a paginated response. */
        object: "list";
        /** The list of result objects. */
        results: Array<{
          /** The Notion object type. */
          object?: "block";
          /** The block ID. */
          id?: string;
          /** The parent object that contains this Notion object. */
          parent?: {
            /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
            type?: string;
            [key: string]: unknown;
          };
          /**
           * The time when the block was created.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time when the block was last edited.
           * @format date-time
           */
          last_edited_time?: string;
          /** A Notion user reference. */
          created_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Notion user reference. */
          last_edited_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Whether the block has child blocks. */
          has_children?: boolean;
          /** Whether the block is in the trash. */
          in_trash?: boolean;
          /** The block type, such as paragraph, heading_1, child_page, or to_do. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of results. */
        next_cursor: string | null;
        /** Whether more results are available. */
        has_more: boolean;
        /** The type-specific pagination metadata field name. */
        type: "block";
        /** Pagination metadata for block results. */
        block: Record<string, never>;
        /** The pagination request status returned by Notion. */
        request_status?: {
          /** The request status type returned by Notion. */
          type?: string;
          /** The reason the response is incomplete. */
          incomplete_reason?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List templates available on a Notion data source. */
    "notion.list_data_source_templates": {
      input: {
        /** The data source ID whose templates should be listed. */
        dataSourceId: string;
        /**
         * The number of templates per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The cursor for pagination. */
        startCursor?: string;
      };
      output: {
        /** The templates available on the data source. */
        templates: Array<{
          /** The template ID. */
          id?: string;
          /** The template name. */
          name?: string;
          /** Whether this template is the data source's default template. */
          is_default?: boolean;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of templates. */
        next_cursor: string | null;
        /** Whether more templates are available. */
        has_more: boolean;
      };
    };
    /** List users in the Notion workspace with pagination. */
    "notion.list_users": {
      input: {
        /**
         * The number of users per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The cursor for pagination. */
        startCursor?: string;
      };
      output: {
        /** The Notion object type for a paginated response. */
        object: "list";
        /** The list of result objects. */
        results: Array<{
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of results. */
        next_cursor: string | null;
        /** Whether more results are available. */
        has_more: boolean;
        /** The type-specific pagination metadata field name. */
        type: "user";
        /** Pagination metadata for user results. */
        user: Record<string, never>;
        /** The pagination request status returned by Notion. */
        request_status?: {
          /** The request status type returned by Notion. */
          type?: string;
          /** The reason the response is incomplete. */
          incomplete_reason?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Move a Notion page under another page or under a data source through the official page move API. */
    "notion.move_page": {
      input: {
        /** The ID of the page to move. */
        pageId: string;
        /** The new parent of the page. */
        parent: {
          /** The ID of the parent page, with or without dashes. */
          page_id: string;
          /** Always `page_id`. */
          type?: "page_id";
        } | {
          /** The ID of the parent data source, with or without dashes. */
          data_source_id: string;
          /** Always `data_source_id`. */
          type?: "data_source_id";
        };
      };
      output: {
        /** The Notion object type. */
        object?: "page";
        /** The page ID. */
        id?: string;
        /**
         * The time when the page was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the page was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The page cover object, or null when the page has no cover. */
        cover?: Record<string, unknown> | null;
        /** The page icon object, or null when the page has no icon. */
        icon?: Record<string, unknown> | null;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /** Whether the page has been archived. */
        is_archived?: boolean;
        /** Whether the page is in the trash. */
        in_trash?: boolean;
        /** Whether the page is locked. */
        is_locked?: boolean;
        /** The Notion page, database, or data source properties keyed by property name. */
        properties?: Record<string, unknown>;
        /**
         * The canonical Notion URL for the page.
         * @format uri
         */
        url?: string;
        /**
         * The public Notion URL if the page is published to the web.
         * @format uri
         */
        public_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Query a Notion data source with filters, sorts, pagination, and optional property filtering. */
    "notion.query_data_source": {
      input: {
        /** The data source ID to query. */
        dataSourceId: string;
        /** The filter object to narrow results. */
        filter?: Record<string, unknown>;
        /** The list of Notion API objects. */
        sorts?: Array<Record<string, unknown>>;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The cursor for pagination. */
        startCursor?: string;
        /** The property names to include in results. */
        filterProperties?: Array<string>;
        /** Whether only trashed pages or data sources should be included. */
        in_trash?: boolean;
        /** The result object type to return. */
        result_type?: "page" | "data_source";
      };
      output: {
        /** The Notion object type for a paginated response. */
        object: "list";
        /** The list of result objects. */
        results: Array<{
          /** The Notion object type. */
          object?: "page";
          /** The page ID. */
          id?: string;
          /**
           * The time when the page was created.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time when the page was last edited.
           * @format date-time
           */
          last_edited_time?: string;
          /** A Notion user reference. */
          created_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Notion user reference. */
          last_edited_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The page cover object, or null when the page has no cover. */
          cover?: Record<string, unknown> | null;
          /** The page icon object, or null when the page has no icon. */
          icon?: Record<string, unknown> | null;
          /** The parent object that contains this Notion object. */
          parent?: {
            /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
            type?: string;
            [key: string]: unknown;
          };
          /** Whether the page has been archived. */
          is_archived?: boolean;
          /** Whether the page is in the trash. */
          in_trash?: boolean;
          /** Whether the page is locked. */
          is_locked?: boolean;
          /** The Notion page, database, or data source properties keyed by property name. */
          properties?: Record<string, unknown>;
          /**
           * The canonical Notion URL for the page.
           * @format uri
           */
          url?: string;
          /**
           * The public Notion URL if the page is published to the web.
           * @format uri
           */
          public_url?: string | null;
          [key: string]: unknown;
        } | {
          /** The Notion object type. */
          object?: "data_source";
          /** The data source ID. */
          id?: string;
          /**
           * The time when the data source was created.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time when the data source was last edited.
           * @format date-time
           */
          last_edited_time?: string;
          /** A Notion user reference. */
          created_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Notion user reference. */
          last_edited_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The data source title rich text objects. */
          title?: Array<Record<string, unknown>>;
          /** The data source description rich text objects. */
          description?: Array<Record<string, unknown>>;
          /** The data source icon object, or null when it has no icon. */
          icon?: Record<string, unknown> | null;
          /** The Notion page, database, or data source properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** The parent object that contains this Notion object. */
          parent?: {
            /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
            type?: string;
            [key: string]: unknown;
          };
          /**
           * The canonical Notion URL for the data source.
           * @format uri
           */
          url?: string;
          /** Whether the data source is in the trash. */
          in_trash?: boolean;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of results. */
        next_cursor: string | null;
        /** Whether more results are available. */
        has_more: boolean;
        /** The type-specific pagination metadata field name. */
        type: "page_or_data_source";
        /** Pagination metadata for data source query results that can be pages or data sources. */
        page_or_data_source: Record<string, never>;
        /** The pagination request status returned by Notion. */
        request_status?: {
          /** The request status type returned by Notion. */
          type?: string;
          /** The reason the response is incomplete. */
          incomplete_reason?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve a Notion block by block ID. */
    "notion.retrieve_block": {
      input: {
        /** The block ID to retrieve. */
        blockId: string;
      };
      output: {
        /** The Notion object type. */
        object?: "block";
        /** The block ID. */
        id?: string;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The time when the block was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the block was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Whether the block has child blocks. */
        has_children?: boolean;
        /** Whether the block is in the trash. */
        in_trash?: boolean;
        /** The block type, such as paragraph, heading_1, child_page, or to_do. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Notion data source by data source ID. */
    "notion.retrieve_data_source": {
      input: {
        /** The data source ID to retrieve. */
        dataSourceId: string;
      };
      output: {
        /** The Notion object type. */
        object?: "data_source";
        /** The data source ID. */
        id?: string;
        /**
         * The time when the data source was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the data source was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The data source title rich text objects. */
        title?: Array<Record<string, unknown>>;
        /** The data source description rich text objects. */
        description?: Array<Record<string, unknown>>;
        /** The data source icon object, or null when it has no icon. */
        icon?: Record<string, unknown> | null;
        /** The Notion page, database, or data source properties keyed by property name. */
        properties?: Record<string, unknown>;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The canonical Notion URL for the data source.
         * @format uri
         */
        url?: string;
        /** Whether the data source is in the trash. */
        in_trash?: boolean;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Notion database's metadata and schema by database ID. */
    "notion.retrieve_database": {
      input: {
        /** The database ID to retrieve. */
        databaseId: string;
      };
      output: {
        /** The Notion object type. */
        object?: "database";
        /** The database ID. */
        id?: string;
        /** The child data sources contained in this database. */
        data_sources?: Array<Record<string, unknown>>;
        /**
         * The time when the database was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the database was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The database title rich text objects. */
        title?: Array<Record<string, unknown>>;
        /** The database description rich text objects. */
        description?: Array<Record<string, unknown>>;
        /** The database icon object, or null when the database has no icon. */
        icon?: Record<string, unknown> | null;
        /** The database cover object, or null when the database has no cover. */
        cover?: Record<string, unknown> | null;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The canonical Notion URL for the database.
         * @format uri
         */
        url?: string;
        /**
         * The public Notion URL if the database is published to the web.
         * @format uri
         */
        public_url?: string | null;
        /** Whether the database is in the trash. */
        in_trash?: boolean;
        /** Whether the database is inline within a page. */
        is_inline?: boolean;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Notion page's properties and metadata by page ID. This does not include child block content. */
    "notion.retrieve_page": {
      input: {
        /** The page ID to retrieve. */
        pageId: string;
      };
      output: {
        /** The Notion object type. */
        object?: "page";
        /** The page ID. */
        id?: string;
        /**
         * The time when the page was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the page was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The page cover object, or null when the page has no cover. */
        cover?: Record<string, unknown> | null;
        /** The page icon object, or null when the page has no icon. */
        icon?: Record<string, unknown> | null;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /** Whether the page has been archived. */
        is_archived?: boolean;
        /** Whether the page is in the trash. */
        in_trash?: boolean;
        /** Whether the page is locked. */
        is_locked?: boolean;
        /** The Notion page, database, or data source properties keyed by property name. */
        properties?: Record<string, unknown>;
        /**
         * The canonical Notion URL for the page.
         * @format uri
         */
        url?: string;
        /**
         * The public Notion URL if the page is published to the web.
         * @format uri
         */
        public_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Notion page or block subtree rendered as enhanced Markdown through the official page markdown API. */
    "notion.retrieve_page_markdown": {
      input: {
        /**
         * The page ID, or a block ID returned in unknownBlockIds.
         * @minLength 1
         */
        pageId: string;
        /** Whether to include meeting note transcripts. */
        includeTranscript?: boolean;
      };
      output: {
        /** The Notion object type. */
        object?: "page_markdown";
        /** The ID of the page or block returned by Notion. */
        id?: string;
        /** The page content rendered as enhanced Markdown. */
        markdown?: string;
        /** Whether Notion truncated the content due to record limits. */
        truncated?: boolean;
        /** Block IDs that could not be loaded and can be passed back as the pageId input. */
        unknown_block_ids?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a specific property item from a Notion page by page ID and property ID. Title, rich_text, relation, and people properties return the paginated list response with type property_item. */
    "notion.retrieve_page_property": {
      input: {
        /** The page ID. */
        pageId: string;
        /** The property ID to retrieve. */
        propertyId: string;
        /**
         * The number of property items per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The cursor for paginated property item results. */
        startCursor?: string;
      };
      output: {
        /** The Notion object type. */
        object?: "property_item";
        /** The property ID. */
        id?: string;
        /** The property type returned by Notion. */
        type?: "rich_text" | "number" | "select" | "multi_select" | "date" | "formula" | "relation" | "rollup" | "title" | "people" | "files" | "checkbox" | "url" | "email" | "phone_number" | "created_time" | "created_by" | "last_edited_time" | "last_edited_by";
        /** The title rich text values returned for direct title property items. */
        title?: Array<Record<string, unknown>>;
        /** The rich text values returned for direct rich_text property items. */
        rich_text?: Array<Record<string, unknown>>;
        /** The number property value. */
        number?: number | null;
        /** The select option value, or null when empty. */
        select?: Record<string, unknown> | null;
        /** The selected multi-select option values. */
        multi_select?: Array<Record<string, unknown>>;
        /** The date property value, or null when empty. */
        date?: Record<string, unknown> | null;
        /** A Notion formula property item value. */
        formula?: {
          /** The formula result type, such as string, number, boolean, or date. */
          type?: string;
          /** The string formula result when type is string. */
          string?: string | null;
          /** The number formula result when type is number. */
          number?: number | null;
          /** The boolean formula result when type is boolean. */
          boolean?: boolean;
          /** The date formula result when type is date. */
          date?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** The relation page references returned for direct relation property items. */
        relation?: Array<{
          /** The related Notion page ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The rollup aggregation metadata and partial or final value returned by Notion. */
        rollup?: {
          /** The rollup result type returned by Notion. */
          type?: "number" | "date" | "array" | "unsupported" | "incomplete";
          /** The rollup aggregation function configured in Notion. */
          function?: string;
          /** The number rollup result when type is number. */
          number?: number | null;
          /** The date rollup result when type is date. */
          date?: Record<string, unknown> | null;
          /** The array rollup result when type is array. */
          array?: Array<Record<string, unknown>>;
          /** The unsupported rollup marker returned when type is unsupported. */
          unsupported?: Record<string, never>;
          /** The incomplete rollup marker returned while more relation items must be paginated. */
          incomplete?: Record<string, never>;
          [key: string]: unknown;
        };
        /** The user objects returned for direct people property items. */
        people?: Array<{
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The file property values. */
        files?: Array<Record<string, unknown>>;
        /** The checkbox property value. */
        checkbox?: boolean;
        /** The URL property value, or null when empty. */
        url?: string | null;
        /**
         * The email property value, or null when empty.
         * @format email
         */
        email?: string | null;
        /** The phone number property value, or null when empty. */
        phone_number?: string | null;
        /**
         * The page creation time for created_time properties.
         * @format date-time
         */
        created_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /**
         * The last edit time for last_edited_time properties.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      } | {
        /** The Notion object type for a paginated response. */
        object?: "list";
        /** The paginated property item entries. */
        results?: Array<{
          /** The Notion object type. */
          object?: "property_item";
          /** The property ID. */
          id?: string;
          /** The property type returned by Notion. */
          type?: "rich_text" | "number" | "select" | "multi_select" | "date" | "formula" | "relation" | "rollup" | "title" | "people" | "files" | "checkbox" | "url" | "email" | "phone_number" | "created_time" | "created_by" | "last_edited_time" | "last_edited_by";
          /** A single Notion rich text object returned as a paginated title property item. */
          title?: Record<string, unknown>;
          /** A single Notion rich text object returned as a paginated rich_text property item. */
          rich_text?: Record<string, unknown>;
          /** A Notion relation page reference. */
          relation?: {
            /** The related Notion page ID. */
            id?: string;
            [key: string]: unknown;
          };
          /** A single Notion user returned as a paginated people property item. */
          people?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of results. */
        next_cursor?: string | null;
        /** Whether more results are available. */
        has_more?: boolean;
        /** The pagination result type returned by Notion. */
        type?: "property_item";
        /** The metadata and type-specific wrapper for a paginated Notion page property response. */
        property_item?: {
          /** The property ID. */
          id?: string;
          /**
           * The URL for the next page of property items when available.
           * @format uri
           */
          next_url?: string | null;
          /** The property type returned by Notion. */
          type?: "rich_text" | "number" | "select" | "multi_select" | "date" | "formula" | "relation" | "rollup" | "title" | "people" | "files" | "checkbox" | "url" | "email" | "phone_number" | "created_time" | "created_by" | "last_edited_time" | "last_edited_by";
          /** The title pagination metadata object; read title item values from results[].title. */
          title?: Record<string, never>;
          /** The rich_text pagination metadata object; read rich text item values from results[].rich_text. */
          rich_text?: Record<string, never>;
          /** The relation pagination metadata object; read relation page references from results[].relation. */
          relation?: Record<string, never>;
          /** The people pagination metadata object; read user items from results[].people. */
          people?: Record<string, never>;
          /** The rollup aggregation metadata and partial or final value returned by Notion. */
          rollup?: {
            /** The rollup result type returned by Notion. */
            type?: "number" | "date" | "array" | "unsupported" | "incomplete";
            /** The rollup aggregation function configured in Notion. */
            function?: string;
            /** The number rollup result when type is number. */
            number?: number | null;
            /** The date rollup result when type is date. */
            date?: Record<string, unknown> | null;
            /** The array rollup result when type is array. */
            array?: Array<Record<string, unknown>>;
            /** The unsupported rollup marker returned when type is unsupported. */
            unsupported?: Record<string, never>;
            /** The incomplete rollup marker returned while more relation items must be paginated. */
            incomplete?: Record<string, never>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve a Notion user by user ID. */
    "notion.retrieve_user": {
      input: {
        /** The user ID to retrieve. */
        userId: string;
      };
      output: {
        /** The Notion object type. */
        object?: "user";
        /** The Notion user ID. */
        id?: string;
        /** The user's display name, or null when unavailable. */
        name?: string | null;
        /** The user's avatar URL, or null when unavailable. */
        avatar_url?: string | null;
        /** The user type returned by Notion. */
        type?: "person" | "bot";
        /** Details about a person user. */
        person?: {
          /**
           * The person's email address.
           * @format email
           */
          email?: string;
          [key: string]: unknown;
        };
        /** Details about a bot user. */
        bot?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search Notion pages and data sources with optional filter, sort, and pagination controls. */
    "notion.search": {
      input: {
        /** The search query text. */
        query: string;
        /** The filter object to narrow results. */
        filter?: Record<string, unknown>;
        /** The sort object to order results. */
        sort?: Record<string, unknown>;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The cursor for pagination. */
        startCursor?: string;
      };
      output: {
        /** The Notion object type for a paginated response. */
        object: "list";
        /** The list of result objects. */
        results: Array<{
          /** The Notion object type. */
          object?: "page";
          /** The page ID. */
          id?: string;
          /**
           * The time when the page was created.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time when the page was last edited.
           * @format date-time
           */
          last_edited_time?: string;
          /** A Notion user reference. */
          created_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Notion user reference. */
          last_edited_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The page cover object, or null when the page has no cover. */
          cover?: Record<string, unknown> | null;
          /** The page icon object, or null when the page has no icon. */
          icon?: Record<string, unknown> | null;
          /** The parent object that contains this Notion object. */
          parent?: {
            /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
            type?: string;
            [key: string]: unknown;
          };
          /** Whether the page has been archived. */
          is_archived?: boolean;
          /** Whether the page is in the trash. */
          in_trash?: boolean;
          /** Whether the page is locked. */
          is_locked?: boolean;
          /** The Notion page, database, or data source properties keyed by property name. */
          properties?: Record<string, unknown>;
          /**
           * The canonical Notion URL for the page.
           * @format uri
           */
          url?: string;
          /**
           * The public Notion URL if the page is published to the web.
           * @format uri
           */
          public_url?: string | null;
          [key: string]: unknown;
        } | {
          /** The Notion object type. */
          object?: "data_source";
          /** The data source ID. */
          id?: string;
          /**
           * The time when the data source was created.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time when the data source was last edited.
           * @format date-time
           */
          last_edited_time?: string;
          /** A Notion user reference. */
          created_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A Notion user reference. */
          last_edited_by?: {
            /** The Notion object type. */
            object?: "user";
            /** The Notion user ID. */
            id?: string;
            /** The user's display name, or null when unavailable. */
            name?: string | null;
            /** The user's avatar URL, or null when unavailable. */
            avatar_url?: string | null;
            /** The user type returned by Notion. */
            type?: "person" | "bot";
            /** Details about a person user. */
            person?: {
              /**
               * The person's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Details about a bot user. */
            bot?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The data source title rich text objects. */
          title?: Array<Record<string, unknown>>;
          /** The data source description rich text objects. */
          description?: Array<Record<string, unknown>>;
          /** The data source icon object, or null when it has no icon. */
          icon?: Record<string, unknown> | null;
          /** The Notion page, database, or data source properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** The parent object that contains this Notion object. */
          parent?: {
            /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
            type?: string;
            [key: string]: unknown;
          };
          /**
           * The canonical Notion URL for the data source.
           * @format uri
           */
          url?: string;
          /** Whether the data source is in the trash. */
          in_trash?: boolean;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of results. */
        next_cursor: string | null;
        /** Whether more results are available. */
        has_more: boolean;
        /** The type-specific pagination metadata field name. */
        type: "page_or_data_source";
        /** Pagination metadata for search results that can be pages or data sources. */
        page_or_data_source: Record<string, never>;
        /** The pagination request status returned by Notion. */
        request_status?: {
          /** The request status type returned by Notion. */
          type?: string;
          /** The reason the response is incomplete. */
          incomplete_reason?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Notion block using raw block fields, including block-type payloads and optional trash state. */
    "notion.update_block": {
      input: {
        /** The block ID to update. */
        blockId: string;
        [key: string]: unknown;
      };
      output: {
        /** The Notion object type. */
        object?: "block";
        /** The block ID. */
        id?: string;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The time when the block was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the block was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Whether the block has child blocks. */
        has_children?: boolean;
        /** Whether the block is in the trash. */
        in_trash?: boolean;
        /** The block type, such as paragraph, heading_1, child_page, or to_do. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** Update a Notion data source's title, icon, properties schema, parent, or trash status. */
    "notion.update_data_source": {
      input: {
        /** The data source ID to update. */
        dataSourceId: string;
        /** The Notion rich text objects for this field. */
        title?: Array<Record<string, unknown>>;
        /** The Notion rich text objects for this field. */
        description?: Array<Record<string, unknown>>;
        /** The data source icon object. */
        icon?: Record<string, unknown>;
        /** The data source properties schema updates keyed by property name. Use null values for property removals when supported by Notion. */
        properties?: Record<string, unknown>;
        /** Whether to move the data source to trash. */
        in_trash?: boolean;
        /** The official Notion parent object for moving the data source. */
        parent?: Record<string, unknown>;
      };
      output: {
        /** The Notion object type. */
        object?: "data_source";
        /** The data source ID. */
        id?: string;
        /**
         * The time when the data source was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the data source was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The data source title rich text objects. */
        title?: Array<Record<string, unknown>>;
        /** The data source description rich text objects. */
        description?: Array<Record<string, unknown>>;
        /** The data source icon object, or null when it has no icon. */
        icon?: Record<string, unknown> | null;
        /** The Notion page, database, or data source properties keyed by property name. */
        properties?: Record<string, unknown>;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The canonical Notion URL for the data source.
         * @format uri
         */
        url?: string;
        /** Whether the data source is in the trash. */
        in_trash?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update a Notion database container's parent, title, description, icon, cover, inline display, trash status, or locked state. */
    "notion.update_database": {
      input: {
        /** The database ID to update. */
        databaseId: string;
        /** The official Notion parent object for moving the database. */
        parent?: Record<string, unknown>;
        /** The Notion rich text objects for this field. */
        title?: Array<Record<string, unknown>>;
        /** The Notion rich text objects for this field. */
        description?: Array<Record<string, unknown>>;
        /** Whether the database should be displayed inline in its parent. */
        is_inline?: boolean;
        /** The database icon object. */
        icon?: Record<string, unknown>;
        /** The database cover object. */
        cover?: Record<string, unknown>;
        /** Whether to move the database to trash. */
        in_trash?: boolean;
        /** Whether to lock or unlock the database in the Notion app UI. */
        is_locked?: boolean;
      };
      output: {
        /** The Notion object type. */
        object?: "database";
        /** The database ID. */
        id?: string;
        /** The child data sources contained in this database. */
        data_sources?: Array<Record<string, unknown>>;
        /**
         * The time when the database was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the database was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The database title rich text objects. */
        title?: Array<Record<string, unknown>>;
        /** The database description rich text objects. */
        description?: Array<Record<string, unknown>>;
        /** The database icon object, or null when the database has no icon. */
        icon?: Record<string, unknown> | null;
        /** The database cover object, or null when the database has no cover. */
        cover?: Record<string, unknown> | null;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /**
         * The canonical Notion URL for the database.
         * @format uri
         */
        url?: string;
        /**
         * The public Notion URL if the database is published to the web.
         * @format uri
         */
        public_url?: string | null;
        /** Whether the database is in the trash. */
        in_trash?: boolean;
        /** Whether the database is inline within a page. */
        is_inline?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update a Notion page's properties, title, icon, cover, trash status, or locked state. */
    "notion.update_page": {
      input: {
        /** The page ID to update. */
        pageId: string;
        /** The new page title. */
        title?: string;
        /** The page properties to update. */
        properties?: Record<string, unknown>;
        /** The new page icon object. */
        icon?: Record<string, unknown>;
        /** The new page cover object. */
        cover?: Record<string, unknown>;
        /** The data source template payload to apply to the existing page. */
        template?: Record<string, unknown>;
        /** Whether to move the page to trash. */
        in_trash?: boolean;
        /** Whether to lock or unlock the page in the Notion app UI. */
        is_locked?: boolean;
        /** Whether to delete all child blocks from the page before applying template changes. */
        erase_content?: boolean;
      };
      output: {
        /** The Notion object type. */
        object?: "page";
        /** The page ID. */
        id?: string;
        /**
         * The time when the page was created.
         * @format date-time
         */
        created_time?: string;
        /**
         * The time when the page was last edited.
         * @format date-time
         */
        last_edited_time?: string;
        /** A Notion user reference. */
        created_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A Notion user reference. */
        last_edited_by?: {
          /** The Notion object type. */
          object?: "user";
          /** The Notion user ID. */
          id?: string;
          /** The user's display name, or null when unavailable. */
          name?: string | null;
          /** The user's avatar URL, or null when unavailable. */
          avatar_url?: string | null;
          /** The user type returned by Notion. */
          type?: "person" | "bot";
          /** Details about a person user. */
          person?: {
            /**
             * The person's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Details about a bot user. */
          bot?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The page cover object, or null when the page has no cover. */
        cover?: Record<string, unknown> | null;
        /** The page icon object, or null when the page has no icon. */
        icon?: Record<string, unknown> | null;
        /** The parent object that contains this Notion object. */
        parent?: {
          /** The parent type, such as workspace, page_id, data_source_id, database_id, or block_id. */
          type?: string;
          [key: string]: unknown;
        };
        /** Whether the page has been archived. */
        is_archived?: boolean;
        /** Whether the page is in the trash. */
        in_trash?: boolean;
        /** Whether the page is locked. */
        is_locked?: boolean;
        /** The Notion page, database, or data source properties keyed by property name. */
        properties?: Record<string, unknown>;
        /**
         * The canonical Notion URL for the page.
         * @format uri
         */
        url?: string;
        /**
         * The public Notion URL if the page is published to the web.
         * @format uri
         */
        public_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Update a Notion page's content as enhanced Markdown through the official page markdown API. */
    "notion.update_page_markdown": {
      input: {
        /** The ID of the page to update. */
        pageId: string;
        /** Always `insert_content`. */
        type: "insert_content";
        /** Insert new content into the page. This official branch is deprecated by Notion. */
        insert_content: {
          /** The enhanced markdown content to insert into the page. */
          content: string;
          /** Selection of existing content to insert after, using the ellipsis format ("start text...end text"). Omit to append at the end of the page. */
          after?: string;
          /** The explicit position for inserted content. */
          position?: {
            /** Insert the content at the start of the page. */
            type: "start";
          } | {
            /** Insert the content at the end of the page. */
            type: "end";
          };
        };
      } | {
        /** The ID of the page to update. */
        pageId: string;
        /** Always `replace_content_range`. */
        type: "replace_content_range";
        /** Replace a range of content in the page. This official branch is deprecated by Notion. */
        replace_content_range: {
          /** The new enhanced markdown content to replace the matched range. */
          content: string;
          /** Selection of existing content to replace, using the ellipsis format ("start text...end text"). */
          content_range: string;
          /** Set to true to allow deleting child pages or databases. Defaults to false. */
          allow_deleting_content?: boolean;
        };
      } | {
        /** The ID of the page to update. */
        pageId: string;
        /** Always `update_content`. */
        type: "update_content";
        /** Update specific content using search-and-replace operations. */
        update_content: {
          /**
           * An array of search-and-replace operations.
           * @maxItems 100
           */
          content_updates: Array<{
            /** The existing content string to find and replace. Must exactly match the page content. */
            old_str: string;
            /** The new content string to replace old_str with. */
            new_str: string;
            /** If true, replace all occurrences of old_str. If false, the operation fails when there are multiple matches. */
            replace_all_matches?: boolean;
          }>;
          /** Set to true to allow deleting child pages or databases. Defaults to false. */
          allow_deleting_content?: boolean;
        };
      } | {
        /** The ID of the page to update. */
        pageId: string;
        /** Always `replace_content`. */
        type: "replace_content";
        /** Replace the entire page content with new markdown. */
        replace_content: {
          /** The new enhanced markdown content to replace the entire page. */
          new_str: string;
          /** Set to true to allow deleting child pages or databases. Defaults to false. */
          allow_deleting_content?: boolean;
        };
      };
      output: {
        /** The Notion object type. */
        object?: "page_markdown";
        /** The ID of the page or block returned by Notion. */
        id?: string;
        /** The page content rendered as enhanced Markdown. */
        markdown?: string;
        /** Whether Notion truncated the content due to record limits. */
        truncated?: boolean;
        /** Block IDs that could not be loaded and can be passed back as the pageId input. */
        unknown_block_ids?: Array<string>;
        [key: string]: unknown;
      };
    };
  }
}

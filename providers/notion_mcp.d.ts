import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Comment on a Notion page through notion-create-comment: at the top level, as a reply to a comment or a discussion, or as a new discussion on selected content. Returns the comment the server named and the raw response. */
    "notion_mcp.create_comment": {
      input: {
        /**
         * The page to comment on, by ID.
         * @minLength 1
         */
        page_id: string;
        /**
         * The comment in inline Notion-flavored Markdown.
         * @minLength 1
         */
        markdown: string;
        /** A comment ID to reply to. */
        reply_to_comment_id?: string;
        /** A discussion ID or URL to reply in. */
        discussion_id?: string;
        /** The content to comment on, as the tool takes it: about ten characters from its start, an ellipsis, about ten from its end. */
        selection_with_ellipsis?: string;
        [key: string]: unknown;
      };
      output: {
        /** The comment as the server named it. */
        comment?: {
          /** The comment ID. */
          id?: string;
          /** The discussion the comment belongs to. */
          discussion_id?: string;
          [key: string]: unknown;
        };
        /** The untouched text Notion's MCP tool returned, kept beside the typed fields so a changed tool shape can still be read. */
        raw: string;
      };
    };
    /** Create one or more Notion pages through notion-create-pages, under a page, a database, a data source or a teamspace, or as a private draft. Returns the pages the server named, an async task ID when it deferred the work, and the raw response. */
    "notion_mcp.create_pages": {
      input: {
        /**
         * The pages to create; every page in one call shares the parent.
         * @minItems 1
         * @maxItems 100
         */
        pages: Array<{
          /** Property names to values. Outside a database the only property is title; inside one, the data source's own properties in the spellings notion-fetch shows. */
          properties?: Record<string, unknown>;
          /** The page body in Notion-flavored Markdown. */
          content?: string;
          /** An emoji, a Notion icon identifier, or an external image URL. */
          icon?: string;
          /** An external image URL for the cover. */
          cover?: string;
          [key: string]: unknown;
        }>;
        /** Where the pages go, as the tool takes it: {page_id}, {database_id}, {data_source_id} or {teamspace_id}. Omitted with no creation_mode, the pages are private at the workspace level. */
        parent?: Record<string, unknown>;
        /** draft creates a durable private page; it cannot be combined with a parent. */
        creation_mode?: "draft";
        /** Let the server accept the creation for background execution and answer an async task instead of the pages. */
        allow_async?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The pages the server named, in its order; empty when the answer named none, such as an async task. */
        pages: Array<{
          /** The page ID. */
          id?: string;
          /** The page URL. */
          url?: string;
          /** The page title, when the server names one. */
          title?: string;
          [key: string]: unknown;
        }>;
        /** The async task ID when the server accepted the creation for background execution. */
        async_task_id?: string;
        /** The untouched text Notion's MCP tool returned, kept beside the typed fields so a changed tool shape can still be read. */
        raw: string;
      };
    };
    /** Read one Notion page through notion-fetch by ID or URL. Returns the title, properties block, Markdown content, a truncated flag, and the raw response. */
    "notion_mcp.fetch_page": {
      input: {
        /**
         * The Notion page ID or URL.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The requested page ID or URL, echoed back. */
        id?: string;
        /** The page title, when the server names one. */
        title?: string;
        /** The Notion URL of the page, when the server names one. */
        url?: string;
        /** The last-edited time, when the server reports one. */
        page_last_edited_at?: string;
        /** The page's properties block as the server rendered it. */
        properties?: string;
        /** The page content as Markdown. */
        content?: string;
        /** Whether the server cut the content short. */
        truncated?: boolean;
        /** The untouched text Notion's MCP tool returned, kept beside the typed fields so a changed tool shape can still be read. */
        raw?: string;
      };
    };
    /** Identify the connected Notion user through notion-get-users with user_id self. Returns the user ID, name, and email the server reports. */
    "notion_mcp.get_self": {
      input: Record<string, never>;
      output: {
        /** A Notion user as the MCP server reports it. Fields the server omits are absent. */
        user?: {
          /** The Notion user ID. */
          id?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address, when the server reports one. */
          email?: string;
          /** The user type, such as person or bot. */
          type?: string;
          [key: string]: unknown;
        };
        /** The untouched text Notion's MCP tool returned, kept beside the typed fields so a changed tool shape can still be read. */
        raw?: string;
      };
    };
    /** List the comments on one Notion page through notion-get-comments, flattened across discussions. Block-level and resolved discussions are included unless turned off; the server offers no paging. */
    "notion_mcp.list_comments": {
      input: {
        /**
         * The Notion page ID.
         * @minLength 1
         */
        page_id: string;
        /** Whether to include comments on every block of the page. Defaults to true. */
        include_all_blocks?: boolean;
        /** Whether to include resolved discussions. Defaults to true. */
        include_resolved?: boolean;
      };
      output: {
        /** Comments in the server's order. */
        comments?: Array<{
          /** The comment ID. */
          id?: string;
          /** The discussion thread the comment belongs to. */
          discussion_id?: string;
          /** The comment text. */
          plain_text?: string;
          /** When the comment was created. */
          created_time?: string;
          /** A Notion user as the MCP server reports it. Fields the server omits are absent. */
          created_by?: {
            /** The Notion user ID. */
            id?: string;
            /** The user's display name. */
            name?: string;
            /** The user's email address, when the server reports one. */
            email?: string;
            /** The user type, such as person or bot. */
            type?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The untouched text Notion's MCP tool returned, kept beside the typed fields so a changed tool shape can still be read. */
        raw?: string;
      };
    };
    /** Search Notion pages through notion-search with optional text, sort, page size, date-range and creator filters. Returns typed results, the search type that ran, the server's notices about dropped filters, and the raw response. Filtering by editor or last-edited date and sorting by date need a Business or Enterprise plan; other plans drop them and name them in notices. When the connection can use AI search, a non-empty keyword query with no exact filter and relevance order runs AI search and can return results from connected apps. Notion allows 30 searches a minute. */
    "notion_mcp.search": {
      input: {
        /** Search text. An empty string lists pages by the sort order alone. */
        query?: string;
        /** Result order. The beta server accepted "relevance" (the default), "last_edited" and "created"; the value is passed through as given. Date sorts need a Business or Enterprise plan; other plans fall back to relevance and say so in notices. */
        sort?: string;
        /**
         * Maximum number of results. Notion allows 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /**
         * Maximum length of the highlight snippet on each result; 0 turns highlights off.
         * @minimum 0
         */
        max_highlight_length?: number;
        /** Only pages last edited in this day-precision range. Business and Enterprise plans only; other plans drop the filter and name it in notices. */
        last_edited_date_range?: {
          /** The earliest day, inclusive, as YYYY-MM-DD. */
          start_date?: string;
          /** The latest day, inclusive, as YYYY-MM-DD. */
          end_date?: string;
        };
        /** Only pages created in this day-precision range. */
        created_date_range?: {
          /** The earliest day, inclusive, as YYYY-MM-DD. */
          start_date?: string;
          /** The latest day, inclusive, as YYYY-MM-DD. */
          end_date?: string;
        };
        /** Only pages created by these Notion user IDs. */
        created_by_user_ids?: Array<string>;
        /** Only pages edited by these Notion user IDs. Business and Enterprise plans only; other plans drop the filter and name it in notices. */
        edited_by_user_ids?: Array<string>;
        /** Extra filters passed through under the tool's filters argument as given. The typed filters above take precedence over the same keys here. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** Which search ran, as the server reports it: "workspace_search", or "ai_search" when Notion routed a keyword query to AI search, whose results can come from connected apps such as Slack that fetch_page cannot read. */
        type?: string;
        /** Results in the server's order. */
        results?: Array<{
          /** The page or data source ID. */
          id?: string;
          /** The result title. */
          title?: string;
          /** The Notion URL of the result. */
          url?: string;
          /** The result type, such as page. */
          type?: string;
          /** The last-edited time the server reports for the result. */
          timestamp?: string;
          /** The breadcrumb path to the result. */
          path?: string;
          [key: string]: unknown;
        }>;
        /** Server notices as plain text, such as a filter dropped on this plan. */
        notices?: Array<string>;
        /** The untouched text Notion's MCP tool returned, kept beside the typed fields so a changed tool shape can still be read. */
        raw?: string;
      };
    };
    /** Report each MCP tool's access status on the connected Notion plan through notion-get-tool-access, keyed by the tool's base name such as search, with the parameters the plan restricts and the reason for each, such as the edited-by search filter below the Business plan. */
    "notion_mcp.tool_access": {
      input: Record<string, never>;
      output: {
        /** One entry per tool the connection exposes, in the server's order. */
        tools?: Array<{
          /** The tool's base name as the server keys it, such as search or ai_search: the notion- prefix dropped and hyphens turned into underscores. */
          tool?: string;
          /** The access status: available, available_with_limit, plan_required, upgrade_required, full_version_required, or not_enabled. */
          status?: string;
          /** Parameters the plan restricts, independent of the status. */
          restricted_parameters?: Array<{
            /** The parameter path, such as filters.title_only. */
            parameter: string;
            /** Why the parameter is unavailable, as the server words it. Check it against the value you plan to send: a restriction on several teamspaces still allows one. */
            reason: string;
          }>;
          /** Where a workspace upgrade changes the status. */
          upgrade_url?: string;
          /** Where to get the full version of Notion MCP when the tool needs it. */
          full_version_url?: string;
          /** The plan landing page Notion routes the user through. */
          landing_page_url?: string;
          /** What the landing page offers: start_trial, request_trial, or learn_more. */
          landing_page_action?: string;
          [key: string]: unknown;
        }>;
        /** The untouched text Notion's MCP tool returned, kept beside the typed fields so a changed tool shape can still be read. */
        raw?: string;
      };
    };
    /** Change one Notion page through notion-update-page: its properties, a targeted search-and-replace in its content, its whole content, or an insertion at the start or the end. Returns the page ID, the URL when the server names one, an async task ID when it deferred the work, and the raw response. */
    "notion_mcp.update_page": {
      input: {
        /**
         * The page to update, by ID.
         * @minLength 1
         */
        page_id: string;
        /** What to change: the properties, a targeted search-and-replace in the content, the whole content, or an insertion at the start or the end. */
        command: "update_properties" | "update_content" | "replace_content" | "insert_content";
        /** For update_properties: property names to values; null removes a value. */
        properties?: Record<string, unknown>;
        /**
         * For update_content: search-and-replace operations.
         * @minItems 1
         * @maxItems 100
         */
        content_updates?: Array<{
          /**
           * The existing content to find; it must match the page exactly.
           * @minLength 1
           */
          old_str: string;
          /** The replacement. */
          new_str: string;
          /** Replace every match; off, several matches fail the operation. */
          replace_all_matches?: boolean;
        }>;
        /** For replace_content: the whole new content in Notion-flavored Markdown. */
        new_str?: string;
        /** For insert_content: the Markdown to insert. */
        content?: string;
        /** For insert_content: {type: start} or {type: end}; omitted, the end. */
        position?: Record<string, unknown>;
        /** Allow a content change to drop child pages and databases it no longer references; off, the server refuses and lists them. */
        allow_deleting_content?: boolean;
        /** Let the server accept the update for background execution and answer an async task instead of the page. */
        allow_async?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The requested page ID, echoed back. */
        page_id: string;
        /** The page URL, when the server names one. */
        url?: string;
        /** The async task ID when the server accepted the update for background execution. */
        async_task_id?: string;
        /** Warnings about changes that were skipped or automatically corrected; omitted for clean updates. */
        warnings?: Array<{
          /** Warning code. */
          code: string;
          /** Explanation of the skipped or corrected change. */
          message: string;
          /** Markdown parser warning category, when available. */
          category?: string;
          /** Whether the parser automatically corrected the content. */
          autofix?: boolean;
          [key: string]: unknown;
        }>;
        /** The untouched text Notion's MCP tool returned, kept beside the typed fields so a changed tool shape can still be read. */
        raw: string;
      };
    };
  }
}

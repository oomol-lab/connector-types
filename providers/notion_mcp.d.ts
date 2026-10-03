import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
  }
}

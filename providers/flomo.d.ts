import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a flomo memo by sending markdown or plain text to the incoming webhook. */
    "flomo.create_memo": {
      input: {
        /**
         * The memo content to publish to flomo.
         * @minLength 1
         */
        content: string;
        /** Set to `markdown` to send flomo webhook `content_type: markdown`; this is mapped to MCP `format` when custom_credential auth is used. */
        contentType?: "markdown";
        /** The flomo MCP content format, such as `markdown`. */
        format?: string;
      };
      output: {
        /** The flomo response code. `0` means the memo was recorded. */
        code: number;
        /** The flomo response message. */
        message: string;
        /** The memo object created by flomo. */
        memo: {
          /** The flomo creator ID that owns the created memo. */
          creator_id?: number;
          /** The flomo source name for the created memo. */
          source?: string;
          /** The flomo memo origin for the created memo. */
          memo_from?: string;
          /** The created memo content rendered as HTML by flomo. */
          content?: string;
          /** Tags parsed by flomo from the memo content. */
          tags?: Array<string>;
          /** The flomo local timestamp when the memo was last updated. */
          updated_at?: string;
          /** The flomo local timestamp when the memo was created. */
          created_at?: string;
          /** Linked memo objects detected by flomo. */
          linked_memos?: Array<Record<string, unknown>>;
          /** The number of linked memos detected by flomo. */
          linked_count?: number;
          /** The flomo slug for the created memo. */
          slug?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      } | {
        /** The flomo memo ID. */
        id: string;
        /** The memo content in Markdown. */
        content?: string;
        /** The memo creation time in ISO 8601 format. */
        created_at: string;
        /** The memo update time in ISO 8601 format. */
        updated_at: string;
        /** The memo source type. */
        from: string;
        /** Tags attached to the memo. */
        tags: Array<string> | null;
        /** Whether the memo contains an image. */
        has_image: boolean;
        /** Whether the memo contains a link. */
        has_link: boolean;
        /** Whether the memo contains a voice attachment. */
        has_voice: boolean;
        /** Files attached to the memo. */
        files: Array<{
          /** The file type. */
          type: string;
          /**
           * A short-lived signed download URL for the file.
           * @format uri
           */
          url: string;
        }> | null;
        /** IDs of memos linked from this memo. */
        linked_memos: Array<string> | null;
        /** The original memo content length in characters. */
        word_count: number;
      };
    };
    /** Fetch flomo daily review content through the flomo Max MCP server. */
    "flomo.get_daily_review": {
      input: Record<string, never>;
      output: Record<string, Array<{
          /** The flomo memo ID. */
          id: string;
          /** The memo content in Markdown. */
          content?: string;
          /** The memo creation time in ISO 8601 format. */
          created_at: string;
          /** The memo update time in ISO 8601 format. */
          updated_at: string;
          /** The memo source type. */
          from: string;
          /** Tags attached to the memo. */
          tags: Array<string> | null;
          /** Whether the memo contains an image. */
          has_image: boolean;
          /** Whether the memo contains a link. */
          has_link: boolean;
          /** Whether the memo contains a voice attachment. */
          has_voice: boolean;
          /** Files attached to the memo. */
          files: Array<{
            /** The file type. */
            type: string;
            /**
             * A short-lived signed download URL for the file.
             * @format uri
             */
            url: string;
          }> | null;
          /** IDs of memos linked from this memo. */
          linked_memos: Array<string> | null;
          /** The original memo content length in characters. */
          word_count: number;
          /** The search relevance score returned by flomo. */
          relevance?: number | null;
        }> | null>;
    };
    /** Fetch flomo memo formatting guidance through the flomo Max MCP server. */
    "flomo.get_format_guide": {
      input: Record<string, never>;
      output: {
        /** The returned Markdown content. */
        content: string;
      };
    };
    /** Fetch flomo tag usage guidance through the flomo Max MCP server. */
    "flomo.get_tag_guide": {
      input: Record<string, never>;
      output: {
        /** The returned Markdown content. */
        content: string;
      };
    };
    /** Fetch multiple flomo memos through the flomo Max MCP server in a single tool call. */
    "flomo.memo_batch_get": {
      input: {
        /** One memo ID to fetch. */
        id?: string;
        /** Memo IDs to fetch, as an array or comma-separated string. */
        ids?: Array<string> | string;
      };
      output: Record<string, Array<{
          /** The flomo memo ID. */
          id: string;
          /** The memo content in Markdown. */
          content?: string;
          /** The memo creation time in ISO 8601 format. */
          created_at: string;
          /** The memo update time in ISO 8601 format. */
          updated_at: string;
          /** The memo source type. */
          from: string;
          /** Tags attached to the memo. */
          tags: Array<string> | null;
          /** Whether the memo contains an image. */
          has_image: boolean;
          /** Whether the memo contains a link. */
          has_link: boolean;
          /** Whether the memo contains a voice attachment. */
          has_voice: boolean;
          /** Files attached to the memo. */
          files: Array<{
            /** The file type. */
            type: string;
            /**
             * A short-lived signed download URL for the file.
             * @format uri
             */
            url: string;
          }> | null;
          /** IDs of memos linked from this memo. */
          linked_memos: Array<string> | null;
          /** The original memo content length in characters. */
          word_count: number;
          /** The search relevance score returned by flomo. */
          relevance?: number | null;
        }> | null>;
    };
    /** Find flomo memos related to a target memo through the flomo Max MCP server. */
    "flomo.memo_recommended": {
      input: {
        /** The target memo ID. */
        id: string;
        /** Maximum number of related memos to return. */
        limit?: number;
        /** Whether to exclude memos that share the same tag. */
        no_same_tag?: boolean;
      };
      output: Record<string, Array<{
          /** The flomo memo ID. */
          id: string;
          /** The memo content in Markdown. */
          content?: string;
          /** The memo creation time in ISO 8601 format. */
          created_at: string;
          /** The memo update time in ISO 8601 format. */
          updated_at: string;
          /** The memo source type. */
          from: string;
          /** Tags attached to the memo. */
          tags: Array<string> | null;
          /** Whether the memo contains an image. */
          has_image: boolean;
          /** Whether the memo contains a link. */
          has_link: boolean;
          /** Whether the memo contains a voice attachment. */
          has_voice: boolean;
          /** Files attached to the memo. */
          files: Array<{
            /** The file type. */
            type: string;
            /**
             * A short-lived signed download URL for the file.
             * @format uri
             */
            url: string;
          }> | null;
          /** IDs of memos linked from this memo. */
          linked_memos: Array<string> | null;
          /** The original memo content length in characters. */
          word_count: number;
          /** The search relevance score returned by flomo. */
          relevance?: number | null;
        }> | null>;
    };
    /** Search flomo memos through the flomo Max MCP server by keywords, tags, time range, or semantic search options. */
    "flomo.memo_search": {
      input: {
        /** Keywords to search for in memo content. */
        keywords?: string;
        /** Only return memos with this tag. */
        tag?: string;
        /** Only return memos created on or after this date. */
        start_date?: string;
        /** Only return memos created on or before this date. */
        end_date?: string;
        /** Only return memos from this source type. */
        from?: string;
        /** Filter memos by whether they have tags. */
        has_tag?: boolean | null;
        /** Maximum number of memos to return. */
        limit?: number;
      };
      output: Record<string, Array<{
          /** The flomo memo ID. */
          id: string;
          /** The memo content in Markdown. */
          content?: string;
          /** The memo creation time in ISO 8601 format. */
          created_at: string;
          /** The memo update time in ISO 8601 format. */
          updated_at: string;
          /** The memo source type. */
          from: string;
          /** Tags attached to the memo. */
          tags: Array<string> | null;
          /** Whether the memo contains an image. */
          has_image: boolean;
          /** Whether the memo contains a link. */
          has_link: boolean;
          /** Whether the memo contains a voice attachment. */
          has_voice: boolean;
          /** Files attached to the memo. */
          files: Array<{
            /** The file type. */
            type: string;
            /**
             * A short-lived signed download URL for the file.
             * @format uri
             */
            url: string;
          }> | null;
          /** IDs of memos linked from this memo. */
          linked_memos: Array<string> | null;
          /** The original memo content length in characters. */
          word_count: number;
          /** The search relevance score returned by flomo. */
          relevance?: number | null;
        }> | null>;
    };
    /** Update an existing flomo memo through the flomo Max MCP server. The exact arguments are validated by flomo MCP. */
    "flomo.memo_update": {
      input: {
        /** The ID of the memo to update. */
        id: string;
        /** The updated memo content. */
        content?: string;
        /** The flomo MCP content format, such as `markdown`. */
        format?: string;
        /** The expected local update timestamp for conflict checks. */
        local_updated_at?: string;
      };
      output: {
        /** The flomo memo ID. */
        id: string;
        /** The memo content in Markdown. */
        content?: string;
        /** The memo creation time in ISO 8601 format. */
        created_at: string;
        /** The memo update time in ISO 8601 format. */
        updated_at: string;
        /** The memo source type. */
        from: string;
        /** Tags attached to the memo. */
        tags: Array<string> | null;
        /** Whether the memo contains an image. */
        has_image: boolean;
        /** Whether the memo contains a link. */
        has_link: boolean;
        /** Whether the memo contains a voice attachment. */
        has_voice: boolean;
        /** Files attached to the memo. */
        files: Array<{
          /** The file type. */
          type: string;
          /**
           * A short-lived signed download URL for the file.
           * @format uri
           */
          url: string;
        }> | null;
        /** IDs of memos linked from this memo. */
        linked_memos: Array<string> | null;
        /** The original memo content length in characters. */
        word_count: number;
      };
    };
    /** Read the generated flomo memory context through the flomo Max MCP server. */
    "flomo.memory_context": {
      input: Record<string, never>;
      output: {
        /** The returned Markdown content. */
        content: string;
      };
    };
    /** Read the generated flomo memory user profile through the flomo Max MCP server. */
    "flomo.memory_user": {
      input: Record<string, never>;
      output: {
        /** The returned Markdown content. */
        content: string;
      };
    };
    /** Rename flomo tags through the flomo Max MCP server and update associated memos. */
    "flomo.tag_rename": {
      input: {
        /** The existing tag name to rename. */
        old_tag: string;
        /** The new tag name. */
        new_tag?: string;
        /** Maximum number of associated memos to update. */
        max_memos?: number;
      };
      output: {
        /** The previous tag name. */
        old_tag: string;
        /** The new tag name. */
        new_tag: string;
        /** The number of matching memos. */
        matched_memos: number;
        /** The number of updated memos. */
        updated_memos: number;
        /** The number of updated tag records. */
        updated_tags: number;
        /** Whether a notification-settings update job was enqueued. */
        notify_settings_job_enqueued: boolean;
        /** Warnings returned by flomo. */
        warnings?: Array<string> | null;
      };
    };
    /** Search flomo tags through the flomo Max MCP server. */
    "flomo.tag_search": {
      input: {
        /** Keywords to search for in tag names. */
        keywords: string;
        /** Maximum number of tags to return. */
        limit?: number;
      };
      output: Record<string, Array<{
          /** The tag name. */
          name: string;
        }> | null>;
    };
    /** Fetch the flomo tag tree through the flomo Max MCP server. */
    "flomo.tag_tree": {
      input: {
        /** Only return tags under this prefix. */
        prefix?: string;
        /** Maximum tag tree depth to return. */
        depth?: number;
      };
      output: Record<string, unknown>;
    };
  }
}

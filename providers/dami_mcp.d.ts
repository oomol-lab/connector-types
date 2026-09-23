import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a DAMI TikTok Shop tool after inspecting list_tools. Available tools cover shops, products, creator discovery, competitor research, outreach tasks and creator conversations. Calls can consume DAMI credits and may send invitations or messages. */
    "dami_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** Arguments matching the selected tool's live input schema. */
        arguments?: Record<string, unknown>;
        /**
         * A stable unique key for this business operation. Reuse it only when retrying the same tool with identical arguments. When omitted, Connector uses the current execution ID or generates a UUID v7.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Search competitor TikTok Shop products through DAMI. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.competitor_product_list": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Create a DAMI conversation with one TikTok creator for direct outreach. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.conversation_create": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Send a message in an existing DAMI creator conversation. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.conversation_send": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Get creator-filter options for DAMI's full creator database or an authorized shop's TikTok creator marketplace. FULL source does not require shopId; MARKET source requires an authorized shopId returned by shop_auth_list. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.creator_filter_options": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** List first-level creator categories available for DAMI creator discovery. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.creator_first_category": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** List creators associated with or promoting a selected competitor product in DAMI. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.creator_list_by_product_id": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Search and filter creators in DAMI's full creator database. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.creator_list_filter_all": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Search and filter creators in an authorized shop's TikTok creator marketplace through DAMI. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.creator_list_filter_square": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Recommend DAMI creators for a selected TikTok Shop product. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.creator_recommend_by_product": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** List second-level creator categories for a parent creator category in DAMI. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.creator_second_category": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Check and filter creators before creating a DAMI invitation task, excluding creators that cannot be invited. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.filter_creators_for_invite": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Check and filter creators before creating a DAMI messaging task, excluding creators that cannot be messaged. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.filter_creators_for_message": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Get the connected DAMI account's current shared CRM credit balance. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.get_consumption_balance": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Update the configuration for a DAMI automatic creator-invitation workflow. This can replace existing workflow settings. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.invite_auto_match_config_update": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Create and start a DAMI automatic creator-invitation task after reviewing its prepared configuration. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.invite_auto_match_create": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Prepare and preview a DAMI automatic creator-invitation workflow before creating the task. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.invite_auto_match_prepare": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Get the products, creators and other source options used to configure a DAMI automatic invitation workflow. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.invite_config_sources": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Generate invitation content for a DAMI creator-outreach workflow. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.invite_content_generate": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Discover the DAMI TikTok Shop tools currently enabled for the connected account, API key, package and server allowlist, including live argument schemas and behavior hints. */
    "dami_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently available to the connected DAMI account. */
        tools: Array<{
          /**
           * The exact DAMI MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current DAMI tool description. */
          description?: string;
          /** MCP behavior hints supplied by DAMI. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify DAMI data. */
            readOnlyHint?: boolean;
            /** Whether the tool may remove or overwrite DAMI data. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments have no additional effect. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with TikTok Shop or another external system. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for this tool's arguments. */
          inputSchema: Record<string, unknown>;
          /** The current JSON Schema for this tool's result. */
          outputSchema?: Record<string, unknown>;
          /** DAMI-specific requirements for one MCP tool. */
          metadata?: {
            /** Whether the tool requires an authorized TikTok Shop ID. */
            "dami/requiresShop"?: boolean;
            /** DAMI scopes required by the tool. */
            "dami/requiredScopes"?: Array<string>;
            /** The DAMI package action required to use the tool. */
            "dami/requiredPackageAction"?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Create and start a DAMI automatic creator-messaging task after reviewing its prepared configuration. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.message_auto_match_create": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Prepare and preview a DAMI automatic creator-messaging workflow before creating the task. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.message_auto_match_prepare": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Get the creators, content and other source options used to configure a DAMI automatic messaging workflow. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.message_config_sources": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Update the configuration for a DAMI automatic creator-messaging workflow. This can replace existing workflow settings. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.message_config_update": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Generate message content for a DAMI creator-outreach workflow. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.message_content_generate": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** List DAMI's first-level TikTok Shop product categories. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.product_first_category": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** List second-level TikTok Shop product categories for a parent category in DAMI. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.product_second_category": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** List third-level TikTok Shop product categories for a parent category in DAMI. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.product_third_category": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Search competitor TikTok Shop stores through DAMI. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.query_competitor_shop_list": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Query DAMI creator invitation history and statuses. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.query_creator_invite_records": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** Query DAMI creator messaging history and statuses. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.query_creator_message_records": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** List public-plan products available to an authorized TikTok Shop store in DAMI. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.query_public_plan_products": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
    /** List TikTok Shop stores currently authorized in DAMI. Use the returned shop ID for tools that require shop context. DAMI publishes the current argument fields through list_tools; inspect that action before calling when the live schema is not already known. */
    "dami_mcp.shop_auth_list": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope returned by DAMI. */
        result: unknown;
        /**
         * The idempotency key used for this paid DAMI tool call. Reuse it when retrying the same business operation after an uncertain transport failure.
         * @minLength 1
         */
        idempotencyKey: string;
      };
    };
  }
}

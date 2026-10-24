import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call any current AppGrowing Global MCP tool after inspecting list_tools. Arguments must match the live schema. Calls may consume AppGrowing credits; inspect behavior annotations before invoking newly added tools. */
    "appgrowing_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** Arguments matching the selected tool's live input schema. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected AppGrowing Global account. */
        result: unknown;
      };
    };
    /** Read narration, selling points and AI analysis for up to 100 creative resources. Pair each resource ID with one of its ad format IDs. */
    "appgrowing_mcp.creativeAIAnalysisData": {
      input: {
        /**
         * Resource IDs from material.creative.resource[].id, in their original form.
         * @minItems 1
         * @maxItems 100
         */
        ids: Array<string>;
        /**
         * One material.format[].id for each resource, in the same order as ids.
         * @minItems 1
         * @maxItems 100
         */
        format: Array<number>;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected AppGrowing Global account. */
        result: unknown;
      };
    };
    /** Refresh expired creative download links using the resource filenames, including their extensions. */
    "appgrowing_mcp.creativeResourceUrl": {
      input: {
        /**
         * Resource filenames from expired URLs, not resource IDs.
         * @minItems 1
         */
        key: Array<string | null>;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected AppGrowing Global account. */
        result: unknown;
      };
    };
    /** Compare selling-point trends for games and apps by category, style and country. */
    "appgrowing_mcp.creativeSellingPointTrends": {
      input: {
        /** Promoted product: 1 game, 2 app. */
        purpose: 1 | 2;
        /** Store categories for the selected product type; obtain IDs from filterOptions. */
        category?: Array<number | null>;
        /** App styles for the selected product type; obtain IDs from filterOptions. */
        appStyle?: Array<number | null>;
        /** Countries to include; obtain codes from filterOptions. */
        area?: Array<string | null>;
        /** Selling-point categories. */
        wordAttr?: Array<string | null>;
        /** Search keyword. */
        keyword?: string;
        /** Sort order. */
        order?: "adverts_desc" | "material_cnt_desc" | "shot_cnt_desc" | "product_cnt_desc" | "ratio_desc";
        /**
         * Page number, starting at 1. Each page contains up to 100 results.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected AppGrowing Global account. */
        result: unknown;
      };
    };
    /** List the advertising filters available to your AppGrowing account. Business queries consume account credits. */
    "appgrowing_mcp.filterOptions": {
      input: Record<string, never>;
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected AppGrowing Global account. */
        result: unknown;
      };
    };
    /** Discover current AppGrowing Global MCP tools, live argument schemas and behavior annotations for advertising creative, app, publisher and developer research. */
    "appgrowing_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools available to the connected AppGrowing Global account. */
        tools: Array<{
          /**
           * The exact tool name.
           * @minLength 1
           */
          name: string;
          /** The current official tool description. */
          description?: string;
          /** Official MCP behavior annotations. */
          annotations?: Record<string, unknown>;
          /** The current JSON Schema for tool arguments. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Find global advertising creatives by product, audience and campaign filters. Use filterOptions for valid IDs and page to continue through results. */
    "appgrowing_mcp.searchAdCreatives": {
      input: {
        /** Promoted product: 1 game, 2 app, 3 website. */
        purpose: 1 | 2 | 3;
        /**
         * First date to include.
         * @format date
         */
        startDate?: string;
        /**
         * Last date to include.
         * @format date
         */
        endDate?: string;
        /** Use 1 to search all dates, or 0 to use the date range. */
        isAllDate?: number;
        /** Store categories for the selected product type; obtain IDs from filterOptions. */
        category?: Array<number | null>;
        /** Visual element tags for games or apps. */
        resourceElement?: Array<number | null>;
        /** App styles for the selected product type; obtain IDs from filterOptions. */
        appStyle?: Array<number | null>;
        /** Advertising channels for the selected product type. */
        media?: Array<number | null>;
        /** Countries to include; obtain codes from filterOptions. */
        area?: Array<string | null>;
        /** Advertising formats for the selected product type. */
        format?: Array<number | null>;
        /** Promotion platforms for games or apps. */
        platform?: Array<number | null>;
        /** Creative languages. */
        language?: Array<string | null>;
        /** Video duration filter ID from filterOptions, not seconds. */
        videoTime?: number;
        /**
         * Minimum advertising days as a numeric string.
         * @pattern ^[0-9]*$
         */
        minDuration?: string;
        /**
         * Maximum advertising days as a numeric string.
         * @pattern ^[0-9]*$
         */
        maxDuration?: string;
        /** Use 1 for an exact ordered keyword match, or 0 for broad matching. */
        accurateSearch?: number;
        /** Use 1 for new creatives only, or 0 to include existing creatives. */
        isNew?: number;
        /** Use 1 for new advertisements only, or 0 to include existing advertisements. */
        isNewAd?: number;
        /** Use 1 for high-definition creatives, or 0 to include other resolutions. */
        resolution?: number;
        /** Search keyword. */
        keyword?: string;
        /** Sort order. */
        order: "_score_desc" | "max_dt_desc" | "max_dt" | "min_dt_desc" | "min_dt" | "cnt_ad_id_desc" | "cnt_dt_desc" | "cnt_dt" | "impression_inc_2y_desc" | "similar_cnt_desc";
        /**
         * Page number, starting at 1. Each page contains up to 100 results.
         * @minimum 1
         */
        page?: number;
        /** Use 1 for innovative game or app creatives, or 0 for other creatives. */
        isCreative?: number;
        /** Audience genders for games or apps. */
        gender?: Array<number | null>;
        /** Audience age groups for games or apps. */
        ageRange?: Array<string | null>;
        /** Use 1 for web-to-app promotion; omit to leave it unfiltered. */
        isW2a?: number;
        /** For games or apps, use 0 with isW2a=1 or 1 with isW2a=0; otherwise omit. */
        excludeW2a?: number;
        /** Use 1 when filtering game or app promotion types; otherwise omit. */
        campaignTypeCombine?: number;
        /** Game or app promotion types. */
        campaignType?: Array<number | null>;
        /** Platform-specific promotion types. */
        platformCampaignType?: Array<number | null>;
        /** Game or app monetization methods. */
        appCashWay?: Array<"iaa" | "iap" | "iaa_iap" | "subscribable" | null>;
        /** Creative aspect ratios. */
        materialRatio?: Array<string | null>;
        /** Creative IDs to exclude. */
        blockIds?: Array<string | null>;
        /** Promoted product IDs to exclude. */
        blockAppIds?: Array<string | null>;
        /** Use 1 for games with preregistration campaigns, or 0 for other games. */
        isPre?: number;
        /** Use 1 for narrated creatives, or 0 for creatives without narration. */
        asr?: number;
        /** Narration language from filterOptions. */
        asrLanguage?: string;
        /** Field-level search conditions. The upstream equal operator may not narrow results; prefer contain when appropriate. */
        searchDsl?: Array<{
          /** Field to search. */
          key: "campaign_name" | "appid" | "slogan" | "asr" | "brands_name" | "developer_name" | "website";
          /** Matching operator. */
          type: "contain" | "exclude" | "equal" | "notEqual";
          /** Value to match. */
          value: string;
        } | null>;
        /** Use 1 for policy-violating game or app advertisements, or 0 for other advertisements. */
        isViolation?: number;
        /** Use 1 for ads featuring a collaborating creator, or 0 for other ads. */
        hasCooperate?: number;
        /** Game or app selling-point word returned by creativeSellingPointTrends. */
        marketingWord?: string;
        /** Use 1 for ads running in a single region, or 0 for other ads. */
        singleArea?: number;
        /** Use 1 to filter original advertising posts, or 0 for other creatives. */
        postpage?: number;
        /** Custom product page filter for games or apps. */
        hasPpid?: number;
        /** Use 1 to exclude low-quality creatives, or 0 to include them. The provider excludes them by default. */
        excludeLowQuality?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the complete MCP content envelope. Data availability and Credits depend on the connected AppGrowing Global account. */
        result: unknown;
      };
    };
  }
}

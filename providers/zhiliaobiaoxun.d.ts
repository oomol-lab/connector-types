import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read available credits and cumulative charged and consumed credits for the connected account. This endpoint does not consume credits. */
    "zhiliaobiaoxun.get_account_balance": {
      input: Record<string, never>;
      output: {
        /** Whether the request succeeded. */
        success: true;
        /** Account credit balance. */
        data: {
          /** The account ID associated with the API key. */
          user_id?: number;
          /** Available credits. */
          balance?: number;
          /** Cumulative credits added to the account. */
          total_charged?: number;
          /** Cumulative credits consumed. */
          total_consumed?: number;
          [key: string]: unknown;
        };
        /** Upstream error information; null on success. */
        error: Record<string, unknown> | null;
        /** Request and billing metadata. */
        meta: {
          /** The upstream request ID. */
          request_id?: string;
          /** The upstream tool name. */
          tool_name?: string;
          /** Credits charged for this request. */
          cost_units?: number;
          /** Upstream execution time in milliseconds. */
          execution_time_ms?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read a procurement notice with its full text and attachment links. Supply a notice URL, unique key, or notice ID. Charges provider credits; attachments are returned as URLs. */
    "zhiliaobiaoxun.get_bid_detail": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: true;
        /** Notice details, preserving additional provider fields. */
        data: {
          /** The notice ID. */
          bid_id?: number;
          /** The notice title. */
          title?: string;
          /** The notice type returned by the provider, such as 招标 or 中标. */
          bid_type?: string;
          /** The procurement stage name. */
          bid_process?: string;
          /** The publication time as returned by the provider. */
          pub_time?: string;
          /** The amount in CNY. */
          money?: number | null;
          /** The amount in ten thousand CNY. */
          money_wan?: number | null;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The county or district name. */
          county?: string;
          /** The purchaser name. */
          caller_name?: string;
          /** Winning suppliers. */
          winner_names?: Array<string>;
          /** The notice URL on Zhiliao Biaoxun. */
          url?: string;
          /** The provider's unique notice key. */
          uniq_key?: string;
          /** The notice body. */
          source?: string;
          /** Extracted attachment content. */
          source_ext?: string;
          /** The original publication URL. */
          source_url?: string;
          /** Attachment URLs; no files are downloaded by this action. */
          attachment_urls?: Array<string>;
          /** Provider contact visibility: full or masked, depending on the account. */
          contact_privacy?: string;
          [key: string]: unknown;
        };
        /** Upstream error information; null on success. */
        error: Record<string, unknown> | null;
        /** Request and billing metadata. */
        meta: {
          /** The upstream request ID. */
          request_id?: string;
          /** The upstream tool name. */
          tool_name?: string;
          /** Credits charged for this request. */
          cost_units?: number;
          /** Upstream execution time in milliseconds. */
          execution_time_ms?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve notices for every stage of the same procurement project, ordered by publication time ascending. Supply a notice URL or a notice ID with its type. Charges provider credits. */
    "zhiliaobiaoxun.get_bid_timeline": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: true;
        /** The project timeline. */
        data: {
          /** The number of notices across project stages. */
          total?: number;
          /** Project notices ordered by publication time ascending. */
          items?: Array<{
            /** The notice ID. */
            bid_id?: number;
            /** The notice title. */
            title?: string;
            /** The notice type returned by the provider, such as 招标 or 中标. */
            bid_type?: string;
            /** The procurement stage name. */
            bid_process?: string;
            /** The publication time as returned by the provider. */
            pub_time?: string;
            /** The amount in CNY. */
            money?: number | null;
            /** The amount in ten thousand CNY. */
            money_wan?: number | null;
            /** The province name. */
            province?: string;
            /** The city name. */
            city?: string;
            /** The county or district name. */
            county?: string;
            /** The purchaser name. */
            caller_name?: string;
            /** Winning suppliers. */
            winner_names?: Array<string>;
            /** The notice URL on Zhiliao Biaoxun. */
            url?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Upstream error information; null on success. */
        error: Record<string, unknown> | null;
        /** Request and billing metadata. */
        meta: {
          /** The upstream request ID. */
          request_id?: string;
          /** The upstream tool name. */
          tool_name?: string;
          /** Credits charged for this request. */
          cost_units?: number;
          /** Upstream execution time in milliseconds. */
          execution_time_ms?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Chinese tender and award notices by keywords, region, publication date, or amount. Returns one page per call and charges provider credits. Increase page to continue. */
    "zhiliaobiaoxun.search_bids": {
      input: {
        /**
         * Search keywords.
         * @minItems 1
         */
        keywords: Array<string>;
        /** Fields in which to match keywords; omit for provider defaults. */
        match_modes?: Array<"all" | "sm" | "title" | "brand" | "fulltext" | "caller" | "winner" | "winner_tender" | "tender" | "agency">;
        /** Notice category: 招标 for tenders, 中标 for awards, 全部 for both. */
        bid_type?: "招标" | "中标" | "全部";
        /** Procurement stages: 1 intent, 2 pre-tender, 4 tender, 5 amendment, 6 award candidates, 7 award, 8 contract, 9 acceptance, 10 cancellation. Default: [1,2,4,7,8]. */
        bid_process?: Array<number>;
        /**
         * Inclusive publication start date, YYYY-MM-DD.
         * @format date
         */
        begin_date?: string;
        /**
         * Inclusive publication end date, YYYY-MM-DD.
         * @format date
         */
        end_date?: string;
        /** Province names, such as 北京 or 内蒙古. */
        provinces?: Array<string>;
        /** City names, such as 石家庄 or 合肥. */
        cities?: Array<string>;
        /** County or district names, such as 长安区. */
        counties?: Array<string>;
        /** Minimum amount in ten thousand CNY. */
        min_amount?: number;
        /** Maximum amount in ten thousand CNY. */
        max_amount?: number;
        /**
         * Page number, starting at 1; defaults to 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Notices per page; defaults to 20.
         * @minimum 1
         * @default 20
         */
        page_size?: number;
      };
      output: {
        /** Whether the request succeeded. */
        success: true;
        /** Matching procurement notices. */
        data: {
          /** The total number of matching notices. */
          total?: number;
          /** The number of notices returned on this page. */
          returned?: number;
          /** Notices on this page. */
          items?: Array<{
            /** The notice ID. */
            bid_id?: number;
            /** The notice title. */
            title?: string;
            /** The notice type returned by the provider, such as 招标 or 中标. */
            bid_type?: string;
            /** The procurement stage name. */
            bid_process?: string;
            /** The publication time as returned by the provider. */
            pub_time?: string;
            /** The amount in CNY. */
            money?: number | null;
            /** The amount in ten thousand CNY. */
            money_wan?: number | null;
            /** The province name. */
            province?: string;
            /** The city name. */
            city?: string;
            /** The county or district name. */
            county?: string;
            /** The purchaser name. */
            caller_name?: string;
            /** Winning suppliers. */
            winner_names?: Array<string>;
            /** The notice URL on Zhiliao Biaoxun. */
            url?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Upstream error information; null on success. */
        error: Record<string, unknown> | null;
        /** Request and billing metadata. */
        meta: {
          /** The upstream request ID. */
          request_id?: string;
          /** The upstream tool name. */
          tool_name?: string;
          /** Credits charged for this request. */
          cost_units?: number;
          /** Upstream execution time in milliseconds. */
          execution_time_ms?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}

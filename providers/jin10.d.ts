import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get minute-level K-line data for a supported Jin10 instrument code. */
    "jin10.get_kline": {
      input: {
        /**
         * The quote instrument code, such as `XAUUSD`. Use `list_quote_codes` to discover supported codes.
         * @minLength 1
         */
        code: string;
        /** The start Unix timestamp in seconds, within the last 24 hours. */
        time?: number;
        /**
         * The number of minute K-lines to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
      };
      output: {
        /** Jin10 K-line data for one instrument. */
        data: {
          /** The quote instrument code. */
          code: string;
          /** The quote instrument name. */
          name: string;
          /** Minute-level K-lines. */
          klines: Array<{
            /** The K-line timestamp in Unix seconds. */
            time: number;
            /** The opening price. */
            open: string;
            /** The closing price. */
            close: string;
            /** The highest price. */
            high: string;
            /** The lowest price. */
            low: string;
            /** The traded volume. */
            volume: number;
          }>;
        } | null;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
    /** Get the full details for one Jin10 news article by article ID. */
    "jin10.get_news": {
      input: {
        /**
         * The Jin10 article ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Jin10 news article detail. */
        data: {
          /** The article ID. */
          id: string;
          /** The article title. */
          title: string;
          /** The article introduction. */
          introduction: string;
          /** The article body. */
          content: string;
          /** The article publication time. */
          time: string;
          /**
           * The original article URL.
           * @format uri
           */
          url: string;
        } | null;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
    /** Get a real-time Jin10 quote for a supported instrument code. */
    "jin10.get_quote": {
      input: {
        /**
         * The quote instrument code, such as `XAUUSD`. Use `list_quote_codes` to discover supported codes.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** A real-time quote returned by Jin10. */
        data: {
          /** The quote instrument code. */
          code: string;
          /** The quote instrument name. */
          name: string;
          /** The quote publication time in RFC 3339 format. */
          time: string;
          /** The opening price. */
          open: string;
          /** The latest or closing price. */
          close: string;
          /** The highest price. */
          high: string;
          /** The lowest price. */
          low: string;
          /** The traded volume. */
          volume: number;
          /** The price change. */
          ups_price: string;
          /** The percentage price change. */
          ups_percent: string;
        } | null;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
    /** Get Jin10 economic calendar items for the current natural week. */
    "jin10.list_calendar": {
      input: Record<string, never>;
      output: {
        /** Economic calendar items for the current natural week. */
        data: Array<{
          /** The scheduled publication time. */
          pub_time: string;
          /** The importance level. */
          star: number;
          /** The calendar indicator title. */
          title: string;
          /** The previous value. */
          previous: string | null;
          /** The consensus forecast value. */
          consensus: string | null;
          /** The actual published value. */
          actual: string | null;
          /** The revised value. */
          revised: string | null;
          /** The market impact description. */
          affect_txt: string;
        }>;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
    /** List the latest Jin10 flash news items with cursor pagination. */
    "jin10.list_flash": {
      input: {
        /** The pagination cursor from `data.next_cursor` of the previous page. */
        cursor?: string;
      };
      output: {
        /** A paginated Jin10 flash news result. */
        data: {
          /** Flash news items on this page. */
          items: Array<{
            /** The flash news title. This may be empty. */
            title?: string;
            /** The flash news body. */
            content: string;
            /** The flash news publication time. */
            time: string;
            /**
             * The original flash news URL.
             * @format uri
             */
            url: string;
          }>;
          /** The cursor for the next page, or an empty string when there is no page. */
          next_cursor: string;
          /** Whether more pages are available. */
          has_more: boolean;
        } | null;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
    /** List the latest Jin10 news articles with cursor pagination. */
    "jin10.list_news": {
      input: {
        /** The pagination cursor from `data.next_cursor` of the previous page. */
        cursor?: string;
      };
      output: {
        /** A paginated Jin10 article result. */
        data: {
          /** Article summaries on this page. */
          items: Array<{
            /** The article ID. */
            id: string;
            /** The article title. */
            title: string;
            /** The article introduction. */
            introduction: string;
            /** The article publication time. */
            time: string;
            /**
             * The original article URL.
             * @format uri
             */
            url: string;
          }>;
          /** The cursor for the next page, or an empty string when there is no page. */
          next_cursor: string;
          /** Whether more pages are available. */
          has_more: boolean;
        } | null;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
    /** List quote instrument codes supported by Jin10 from the `quote://codes` MCP resource. */
    "jin10.list_quote_codes": {
      input: Record<string, never>;
      output: {
        /** Supported quote instrument codes. */
        data: Array<{
          /** The quote instrument code. */
          code: string;
          /** The quote instrument display name. */
          name: string;
        }>;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
    /** Search Jin10 flash news by keyword. The MCP tool returns up to 150 items without pagination. */
    "jin10.search_flash": {
      input: {
        /**
         * The search keyword.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** Jin10 flash news search results. */
        data: {
          /**
           * Matching flash news items. The upstream MCP tool returns up to 150.
           * @maxItems 150
           */
          items: Array<{
            /** The flash news title. This may be empty. */
            title?: string;
            /** The flash news body. */
            content: string;
            /** The flash news publication time. */
            time: string;
            /**
             * The original flash news URL.
             * @format uri
             */
            url: string;
          }>;
        } | null;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
    /** Search Jin10 news articles by keyword with cursor pagination. */
    "jin10.search_news": {
      input: {
        /**
         * The search keyword.
         * @minLength 1
         */
        keyword: string;
        /** The pagination cursor from `data.next_cursor` of the previous page. */
        cursor?: string;
      };
      output: {
        /** A paginated Jin10 article result. */
        data: {
          /** Article summaries on this page. */
          items: Array<{
            /** The article ID. */
            id: string;
            /** The article title. */
            title: string;
            /** The article introduction. */
            introduction: string;
            /** The article publication time. */
            time: string;
            /**
             * The original article URL.
             * @format uri
             */
            url: string;
          }>;
          /** The cursor for the next page, or an empty string when there is no page. */
          next_cursor: string;
          /** Whether more pages are available. */
          has_more: boolean;
        } | null;
        /** The Jin10 status code. `200` means the request succeeded. */
        status: number;
        /** The Jin10 status message or error description. */
        message: string;
      };
    };
  }
}

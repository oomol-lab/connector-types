import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query Eastmoney Miaoxiang market, financial, company and relationship data using natural language. Specify securities, indicators and a bounded date range to keep results manageable. */
    "eastmoney_miaoxiang.query_financial_data": {
      input: {
        /**
         * A natural-language question specifying securities, indicators and dates.
         * @minLength 1
         */
        toolQuery: string;
      };
      output: {
        /** The global API status; zero indicates success. */
        status: number;
        /** The provider's response message. */
        message?: string;
        /** Financial data and query metadata. */
        data?: {
          /** The unique identifier for this query. */
          questionId?: string;
          /** Standardized indicator tables. */
          dataTableDTOList?: Array<{
            /** The security code including its market suffix. */
            code?: string;
            /** The security name. */
            entityName?: string;
            /** The indicator table title. */
            title?: string;
            /** Indicator values keyed by indicator code, with time or dimension values under headName. */
            table?: Record<string, unknown>;
            /** Mappings from indicator codes to display names. */
            nameMap?: Record<string, unknown>;
            /** The display order of indicator columns. */
            indicatorOrder?: Array<string>;
            [key: string]: unknown;
          }>;
          /** Original unprocessed indicator tables. */
          rawDataTableDTOList?: Array<Record<string, unknown>>;
          /** The interpreted query conditions. */
          condition?: Record<string, unknown>;
          /** Distinct security entities involved in the query. */
          entityTagDTOList?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Screen securities by natural-language market or financial conditions, or find sector and index constituents. Preserve the same keyword while paging; result formats depend on the interpreted query. */
    "eastmoney_miaoxiang.screen_stocks": {
      input: {
        /**
         * Natural-language screening conditions or a constituent query.
         * @minLength 1
         */
        keyword: string;
        /**
         * The page number, starting at one. Defaults to 1.
         * @minimum 1
         * @default 1
         */
        pageNo?: number;
        /**
         * The requested number of results per page. Defaults to 20.
         * @minimum 1
         * @default 20
         */
        pageSize?: number;
      };
      output: {
        /** The global API status; zero indicates success. */
        status: number;
        /** The provider's response message. */
        message?: string;
        /** Screening business status and results. */
        data?: {
          /** The screening business status; 100 indicates successful parsing. */
          code?: string;
          /** The screening business message. */
          msg?: string;
          /** Screening results, conditions and provider-specific result variants. */
          data?: {
            /** The result format; 2000 denotes standard stock screening. */
            resultType?: number;
            /** A standard screening result table. */
            result?: {
              /** The total number of matches. */
              total?: number;
              /** The provider's total record count. */
              totalRecordCount?: number;
              /** Column definitions mapping display names to row keys. */
              columns?: Array<Record<string, unknown>>;
              /** Rows matching the screening conditions. */
              dataList?: Array<Record<string, unknown>>;
              [key: string]: unknown;
            };
            /** An alternative full-results wrapper returned by the provider. */
            allResults?: Record<string, unknown>;
            /** A partial-result Markdown table when returned by the provider. */
            partialResults?: string;
            /** The interpreted screening conditions. */
            parserText?: string;
            /** Per-condition match statistics. */
            responseConditionList?: Array<Record<string, unknown>>;
            /** Combined screening conditions and match count. */
            totalCondition?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Search Eastmoney Miaoxiang financial news, announcements, research reports and policies using a natural-language question. */
    "eastmoney_miaoxiang.search_news": {
      input: {
        /**
         * The financial topic, security, event or date range to search.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The global API status; zero indicates success. */
        status: number;
        /** The provider's response message. */
        message?: string;
        /** The search response, preserving source metadata and provider-defined content. */
        data?: {
          /** Search results and interpreted query metadata. */
          data?: {
            /** The financial search result payload. */
            llmSearchResponse?: {
              /** Relevant financial information items. */
              data?: Array<{
                /** The information title. */
                title?: string;
                /** The information content. */
                content?: string;
                /** The source publication date. */
                date?: string;
                /** The publishing institution. */
                insName?: string;
                /** The provider's information category. */
                informationType?: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
  }
}

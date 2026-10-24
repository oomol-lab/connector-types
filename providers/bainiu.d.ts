import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read company registration and business information. Queries may consume provider credits. */
    "bainiu.get_company": {
      input: {
        /**
         * Company identifier, name, unified social credit code, registration number or organization code.
         * @minLength 1
         */
        key: string;
        /** Identifier type: 0 entity ID (default), 1 company name, 2 unified social credit code, 3 registration number, 4 organization code. */
        key_type?: "0" | "1" | "2" | "3" | "4";
      };
      output: {
        /** Upstream response code; 200 indicates success. */
        code: string;
        /** Upstream response message. */
        message: string;
        /** Requested company detail nodes. */
        result: {
          /** Returned detail node codes. */
          versions?: Array<string>;
          /** One upstream company record, including provider-specific fields. */
          basic?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Upstream request or order identifier. */
        ordernum?: string;
        /** Billing indicator: 0 not charged, 1 charged. */
        is_verify?: string;
        [key: string]: unknown;
      };
    };
    /** List company branches with pagination. Queries may consume provider credits. */
    "bainiu.list_company_branches": {
      input: {
        /**
         * Company identifier, name, unified social credit code, registration number or organization code.
         * @minLength 1
         */
        key: string;
        /** Identifier type: 0 entity ID (default), 1 company name, 2 unified social credit code, 3 registration number, 4 organization code. */
        key_type?: "0" | "1" | "2" | "3" | "4";
        /**
         * Page number, starting at 1. Omit for the provider default.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of records per page. Omit for the provider default.
         * @minimum 1
         */
        page_size?: number;
      };
      output: {
        /** Upstream response code; 200 indicates success. */
        code: string;
        /** Upstream response message. */
        message: string;
        /** Requested company detail nodes. */
        result: {
          /** Returned detail node codes. */
          versions?: Array<string>;
          /** A page of upstream records. */
          filiation?: {
            /** Records on this page. */
            datalist?: Array<Record<string, unknown>>;
            /** Total matching records. */
            total?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Upstream request or order identifier. */
        ordernum?: string;
        /** Billing indicator: 0 not charged, 1 charged. */
        is_verify?: string;
        [key: string]: unknown;
      };
    };
    /** List company registration changes with optional type and date filters. Queries may consume provider credits. */
    "bainiu.list_company_changes": {
      input: {
        /**
         * Company identifier, name, unified social credit code, registration number or organization code.
         * @minLength 1
         */
        key: string;
        /** Identifier type: 0 entity ID (default), 1 company name, 2 unified social credit code, 3 registration number, 4 organization code. */
        key_type?: "0" | "1" | "2" | "3" | "4";
        /**
         * Page number, starting at 1. Omit for the provider default.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of records per page. Omit for the provider default.
         * @minimum 1
         */
        page_size?: number;
        /** Upstream change type code, for example 01 name, 03 representative, 10 business scope or 20 registered capital. */
        alttype?: string;
        /**
         * Inclusive change date lower bound (YYYY-MM-DD).
         * @format date
         */
        altdate_start?: string;
        /**
         * Exclusive change date upper bound (YYYY-MM-DD).
         * @format date
         */
        altdate_end?: string;
      };
      output: {
        /** Upstream response code; 200 indicates success. */
        code: string;
        /** Upstream response message. */
        message: string;
        /** Requested company detail nodes. */
        result: {
          /** Returned detail node codes. */
          versions?: Array<string>;
          /** A page of upstream records. */
          alter?: {
            /** Records on this page. */
            datalist?: Array<Record<string, unknown>>;
            /** Total matching records. */
            total?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Upstream request or order identifier. */
        ordernum?: string;
        /** Billing indicator: 0 not charged, 1 charged. */
        is_verify?: string;
        [key: string]: unknown;
      };
    };
    /** List company shareholders and managers with pagination. Queries may consume provider credits. */
    "bainiu.list_company_shareholders": {
      input: {
        /**
         * Company identifier, name, unified social credit code, registration number or organization code.
         * @minLength 1
         */
        key: string;
        /** Identifier type: 0 entity ID (default), 1 company name, 2 unified social credit code, 3 registration number, 4 organization code. */
        key_type?: "0" | "1" | "2" | "3" | "4";
        /**
         * Page number, starting at 1. Omit for the provider default.
         * @minimum 1
         */
        page_index?: number;
        /**
         * Number of records per page. Omit for the provider default.
         * @minimum 1
         */
        page_size?: number;
      };
      output: {
        /** Upstream response code; 200 indicates success. */
        code: string;
        /** Upstream response message. */
        message: string;
        /** Requested company detail nodes. */
        result: {
          /** Returned detail node codes. */
          versions?: Array<string>;
          /** A page of upstream records. */
          shareholder?: {
            /** Records on this page. */
            datalist?: Array<Record<string, unknown>>;
            /** Total matching records. */
            total?: number;
            [key: string]: unknown;
          };
          /** A page of upstream records. */
          person?: {
            /** Records on this page. */
            datalist?: Array<Record<string, unknown>>;
            /** Total matching records. */
            total?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Upstream request or order identifier. */
        ordernum?: string;
        /** Billing indicator: 0 not charged, 1 charged. */
        is_verify?: string;
        [key: string]: unknown;
      };
    };
    /** Resolve company identifiers in a batch. Separate multiple lookup keys with commas; queries may consume provider credits. */
    "bainiu.resolve_companies": {
      input: {
        /**
         * Company identifier, name, unified social credit code, registration number or organization code.
         * @minLength 1
         */
        key: string;
        /** Identifier type: 0 entity ID (default), 1 company name, 2 unified social credit code, 3 registration number, 4 organization code. */
        key_type?: "0" | "1" | "2" | "3" | "4";
      };
      output: {
        /** Upstream response code; 200 indicates success. */
        code: string;
        /** Upstream response message. */
        message: string;
        /** Mapping from each lookup key to its entity ID. */
        result: Record<string, string>;
        /** Upstream request or order identifier. */
        ordernum?: string;
        /** Billing indicator: 0 not charged, 1 charged. */
        is_verify?: string;
        [key: string]: unknown;
      };
    };
    /** Search companies using Bainiu's DSL with filters, sorting, highlighting and pagination. Queries may consume provider credits. */
    "bainiu.search_companies": {
      input: {
        /** Search request encoded as JSON by Connector. Supports the full upstream query DSL and additional provider options. */
        data: {
          /** Bainiu filter tree, using must/should and field operators any/all/not/range/exist. Example: {"must":[{"main__ENTNAME":{"all":["小米"]}}]}. */
          dsl_query: Record<string, unknown>;
          /** Upstream sort configuration, including algorithm or geographical sorting. */
          sort?: Record<string, unknown>;
          /** Upstream highlight configuration. */
          highlight?: Record<string, unknown>;
          /**
           * Page number, starting at 1. Omit for the provider default.
           * @minimum 1
           */
          page_index?: number;
          /**
           * Number of records per page. Omit for the provider default.
           * @minimum 1
           */
          page_size?: number;
          [key: string]: unknown;
        };
      };
      output: {
        /** Upstream response code; 200 indicates success. */
        code: string;
        /** Upstream response message. */
        message: string;
        /** A page of upstream records. */
        result: {
          /** Records on this page. */
          datalist?: Array<Record<string, unknown>>;
          /** Total matching records. */
          total?: number;
          [key: string]: unknown;
        };
        /** Upstream request or order identifier. */
        ordernum?: string;
        /** Billing indicator: 0 not charged, 1 charged. */
        is_verify?: string;
        [key: string]: unknown;
      };
    };
  }
}

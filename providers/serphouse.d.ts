import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve account and credit usage information for the connected SERPHouse key. */
    "serphouse.account_info": {
      input: Record<string, never>;
      output: {
        /** SERPHouse response status. */
        status: string;
        /** SERPHouse response message. */
        msg: string;
        /** SERPHouse account object with the API key field omitted when present. */
        account: {
          /** Account email address returned by SERPHouse. */
          email?: string;
          /** Account name returned by SERPHouse. */
          name?: string;
          /** Plans returned by SERPHouse. */
          plan?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List search engine domains supported by SERPHouse SERP requests. */
    "serphouse.list_domains": {
      input: Record<string, never>;
      output: {
        /** SERPHouse response status. */
        status: string;
        /** SERPHouse response message. */
        msg: string;
        /** Search engine domains supported by SERPHouse. */
        domains: Array<string>;
      };
    };
    /** List SERPHouse language codes for one supported search engine type. */
    "serphouse.list_languages": {
      input: {
        /** Search engine type accepted by SERPHouse lookup endpoints. */
        type: "google" | "bing" | "yahoo";
      };
      output: {
        /** SERPHouse response status. */
        status: string;
        /** SERPHouse response message. */
        msg: string;
        /** Language names keyed by SERPHouse language code. */
        languages: Record<string, string>;
      };
    };
    /** Search SERPHouse locations for geo-targeted SERP requests. */
    "serphouse.search_locations": {
      input: {
        /**
         * Location search text.
         * @minLength 1
         */
        q: string;
        /** Search engine type for the location database. */
        type: "google" | "bing";
      };
      output: {
        /** SERPHouse response status. */
        status: string;
        /** SERPHouse response message. */
        msg: string;
        /** SERPHouse location matches. */
        locations: Array<{
          /** SERPHouse location identifier. */
          id: number;
          /** Location display name. */
          name: string;
          /** Location string accepted by SERPHouse SERP requests. */
          loc: string;
          /** Location type returned by SERPHouse. */
          type: string;
          /** Country code returned by SERPHouse. */
          country_code: string;
        }>;
      };
    };
    /** Run a synchronous SERPHouse web SERP request and return structured JSON results. */
    "serphouse.search_web": {
      input: {
        /**
         * Search phrase to send to SERPHouse.
         * @minLength 1
         */
        q: string;
        /**
         * Search engine domain such as google.com, bing.com, or yahoo.com.
         * @minLength 1
         */
        domain: string;
        /**
         * Language code such as en or fr.
         * @minLength 1
         */
        lang: string;
        /** Device type used for the SERP request. */
        device: "desktop" | "mobile";
        /**
         * SERPHouse location string to target.
         * @minLength 1
         */
        loc?: string;
        /** SERPHouse location identifier to target. */
        loc_id?: number;
        /**
         * Google verbatim mode where 0 disables and 1 enables it.
         * @minimum 0
         * @maximum 1
         */
        verbatim?: number;
        /**
         * Search filter mode where 1 enables similar and omitted result filtering and 0 disables it.
         * @minimum 0
         * @maximum 1
         */
        gfilter?: number;
        /**
         * Result page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results to request per page.
         * @minimum 1
         * @maximum 10
         */
        num_result?: number;
        /**
         * Date filter accepted by SERPHouse, such as h, d, w, m, y, or YYYY-MM-DD,YYYY-MM-DD.
         * @minLength 1
         */
        date_range?: string;
      };
      output: {
        /** SERPHouse response status. */
        status: string;
        /** SERPHouse response message. */
        msg: string;
        /** Search metadata returned by SERPHouse. */
        search_metadata: Record<string, unknown>;
        /** Search parameters returned by SERPHouse. */
        search_parameters: Record<string, unknown>;
        /** Structured web SERP result sections returned by SERPHouse. */
        results: Record<string, unknown>;
      };
    };
  }
}

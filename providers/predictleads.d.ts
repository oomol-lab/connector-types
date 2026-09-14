import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List financing events detected for a company domain. */
    "predictleads.list_financing_events": {
      input: {
        /**
         * The company website domain, such as example.com.
         * @minLength 1
         */
        domain: string;
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The primary resources returned by PredictLeads. */
        data: Array<{
          /** The stable PredictLeads resource identifier. */
          id?: string;
          /** The PredictLeads resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related resources referenced by the primary resources. */
        included?: Array<Record<string, unknown>>;
        /** Pagination and dataset metadata returned by PredictLeads. */
        meta?: Record<string, unknown>;
      };
    };
    /** List job openings detected for a company domain. */
    "predictleads.list_job_openings": {
      input: {
        /**
         * The company website domain, such as example.com.
         * @minLength 1
         */
        domain: string;
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The primary resources returned by PredictLeads. */
        data: Array<{
          /** The stable PredictLeads resource identifier. */
          id?: string;
          /** The PredictLeads resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related resources referenced by the primary resources. */
        included?: Array<Record<string, unknown>>;
        /** Pagination and dataset metadata returned by PredictLeads. */
        meta?: Record<string, unknown>;
      };
    };
    /** List news events detected for a company domain. */
    "predictleads.list_news_events": {
      input: {
        /**
         * The company website domain, such as example.com.
         * @minLength 1
         */
        domain: string;
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The primary resources returned by PredictLeads. */
        data: Array<{
          /** The stable PredictLeads resource identifier. */
          id?: string;
          /** The PredictLeads resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related resources referenced by the primary resources. */
        included?: Array<Record<string, unknown>>;
        /** Pagination and dataset metadata returned by PredictLeads. */
        meta?: Record<string, unknown>;
      };
    };
    /** List technologies detected on or associated with a company domain. */
    "predictleads.list_technology_detections": {
      input: {
        /**
         * The company website domain, such as example.com.
         * @minLength 1
         */
        domain: string;
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The primary resources returned by PredictLeads. */
        data: Array<{
          /** The stable PredictLeads resource identifier. */
          id?: string;
          /** The PredictLeads resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related resources referenced by the primary resources. */
        included?: Array<Record<string, unknown>>;
        /** Pagination and dataset metadata returned by PredictLeads. */
        meta?: Record<string, unknown>;
      };
    };
    /** Retrieve PredictLeads company firmographic data for a website domain. */
    "predictleads.lookup_company": {
      input: {
        /**
         * The company website domain, such as example.com.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The primary resources returned by PredictLeads. */
        data: Array<{
          /** The stable PredictLeads resource identifier. */
          id?: string;
          /** The PredictLeads resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related resources referenced by the primary resources. */
        included?: Array<Record<string, unknown>>;
        /** Pagination and dataset metadata returned by PredictLeads. */
        meta?: Record<string, unknown>;
      };
    };
  }
}

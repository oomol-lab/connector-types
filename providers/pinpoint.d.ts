import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Pinpoint application by its resource ID. */
    "pinpoint.get_application": {
      input: {
        /**
         * The Pinpoint resource ID.
         * @minLength 1
         */
        id: string;
        /** Related JSON:API resources to include in the response. */
        include?: Array<string>;
        /** Fields of the primary resource to include in the response. */
        fields?: Array<string>;
        /** Optional or computationally expensive fields of the primary resource to include. */
        extraFields?: Array<string>;
      };
      output: {
        /** A Pinpoint JSON:API resource object. */
        data: {
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        };
        /** Related resources included by Pinpoint. */
        included?: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related links returned by Pinpoint. */
        links?: Record<string, unknown>;
        /** Resource metadata returned by Pinpoint. */
        meta?: Record<string, unknown>;
      };
    };
    /** Get one Pinpoint candidate by its resource ID. */
    "pinpoint.get_candidate": {
      input: {
        /**
         * The Pinpoint resource ID.
         * @minLength 1
         */
        id: string;
        /** Related JSON:API resources to include in the response. */
        include?: Array<string>;
        /** Fields of the primary resource to include in the response. */
        fields?: Array<string>;
        /** Optional or computationally expensive fields of the primary resource to include. */
        extraFields?: Array<string>;
      };
      output: {
        /** A Pinpoint JSON:API resource object. */
        data: {
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        };
        /** Related resources included by Pinpoint. */
        included?: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related links returned by Pinpoint. */
        links?: Record<string, unknown>;
        /** Resource metadata returned by Pinpoint. */
        meta?: Record<string, unknown>;
      };
    };
    /** Get one Pinpoint job by its resource ID. */
    "pinpoint.get_job": {
      input: {
        /**
         * The Pinpoint resource ID.
         * @minLength 1
         */
        id: string;
        /** Related JSON:API resources to include in the response. */
        include?: Array<string>;
        /** Fields of the primary resource to include in the response. */
        fields?: Array<string>;
        /** Optional or computationally expensive fields of the primary resource to include. */
        extraFields?: Array<string>;
      };
      output: {
        /** A Pinpoint JSON:API resource object. */
        data: {
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        };
        /** Related resources included by Pinpoint. */
        included?: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related links returned by Pinpoint. */
        links?: Record<string, unknown>;
        /** Resource metadata returned by Pinpoint. */
        meta?: Record<string, unknown>;
      };
    };
    /** List applications in a Pinpoint account with documented filters and pagination. */
    "pinpoint.list_applications": {
      input: {
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /** Related JSON:API resources to include in the response. */
        include?: Array<string>;
        /** Fields of the primary resource to include in the response. */
        fields?: Array<string>;
        /** Optional or computationally expensive fields of the primary resource to include. */
        extraFields?: Array<string>;
        /** Sort fields, using a leading minus sign for descending order. */
        sort?: Array<string>;
        /** Filters keyed by the documented name without the filter brackets. */
        filters?: Record<string, string | boolean | number | Array<string>>;
        /** Whether to include the matched record count in the response metadata. */
        includeTotal?: boolean;
      };
      output: {
        /** The resources returned by Pinpoint. */
        data: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related resources included by Pinpoint. */
        included?: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Pagination or related links returned by Pinpoint. */
        links?: Record<string, unknown>;
        /** Collection metadata returned by Pinpoint. */
        meta?: Record<string, unknown>;
      };
    };
    /** List candidates in a Pinpoint account with documented filters and pagination. */
    "pinpoint.list_candidates": {
      input: {
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /** Related JSON:API resources to include in the response. */
        include?: Array<string>;
        /** Fields of the primary resource to include in the response. */
        fields?: Array<string>;
        /** Optional or computationally expensive fields of the primary resource to include. */
        extraFields?: Array<string>;
        /** Sort fields, using a leading minus sign for descending order. */
        sort?: Array<string>;
        /** Filters keyed by the documented name without the filter brackets. */
        filters?: Record<string, string | boolean | number | Array<string>>;
        /** Whether to include the matched record count in the response metadata. */
        includeTotal?: boolean;
      };
      output: {
        /** The resources returned by Pinpoint. */
        data: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related resources included by Pinpoint. */
        included?: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Pagination or related links returned by Pinpoint. */
        links?: Record<string, unknown>;
        /** Collection metadata returned by Pinpoint. */
        meta?: Record<string, unknown>;
      };
    };
    /** List jobs in a Pinpoint account with documented filters and pagination. */
    "pinpoint.list_jobs": {
      input: {
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /** Related JSON:API resources to include in the response. */
        include?: Array<string>;
        /** Fields of the primary resource to include in the response. */
        fields?: Array<string>;
        /** Optional or computationally expensive fields of the primary resource to include. */
        extraFields?: Array<string>;
        /** Sort fields, using a leading minus sign for descending order. */
        sort?: Array<string>;
        /** Filters keyed by the documented name without the filter brackets. */
        filters?: Record<string, string | boolean | number | Array<string>>;
        /** Whether to include the matched record count in the response metadata. */
        includeTotal?: boolean;
      };
      output: {
        /** The resources returned by Pinpoint. */
        data: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Related resources included by Pinpoint. */
        included?: Array<{
          /** The resource ID. */
          id?: string;
          /** The JSON:API resource type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Pagination or related links returned by Pinpoint. */
        links?: Record<string, unknown>;
        /** Collection metadata returned by Pinpoint. */
        meta?: Record<string, unknown>;
      };
    };
  }
}

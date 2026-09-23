import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Peec brand visibility, sentiment, position, and share-of-voice report rows. */
    "peec.get_brands_report": {
      input: {
        /**
         * Peec project ID. Required by upstream when the connection uses a company-scoped API key.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Maximum number of rows to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * Number of rows to skip before returning results.
         * @minimum 0
         * @maximum 500000
         */
        offset?: number;
        /**
         * First date included in the report window, in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * Last date included in the report window, in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /** Dimensions used to split report rows. */
        dimensions?: Array<"prompt_id" | "model_channel_id" | "tag_id" | "topic_id" | "date" | "week" | "month" | "country_code" | "chat_id">;
        /** Pre-aggregation filters. These change both numerator and denominator values for ratio metrics. */
        filters?: Array<{
          /**
           * The Peec field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected field.
           * @minLength 1
           */
          operator: string;
          /**
           * Values for a set predicate.
           * @minItems 1
           */
          values: Array<unknown>;
          [key: string]: unknown;
        }>;
        /** Post-aggregation predicates. Use these to select rows without changing ratio-metric denominators. */
        having?: Array<{
          /**
           * The Peec field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected field.
           * @minLength 1
           */
          operator: string;
          /**
           * Values for a set predicate.
           * @minItems 1
           */
          values: Array<unknown>;
          [key: string]: unknown;
        } | {
          /**
           * The Peec metric field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected metric.
           * @minLength 1
           */
          operator: string;
          /** The scalar metric value to compare. */
          value: number;
          [key: string]: unknown;
        }>;
        /** Sort instructions applied in order. */
        orderBy?: Array<{
          /**
           * The report field to sort by.
           * @minLength 1
           */
          field: string;
          /** The sort direction. */
          direction?: "asc" | "desc";
        }>;
        /**
         * First date of an explicit comparison window; provide it with previousEndDate.
         * @format date
         */
        previousStartDate?: string;
        /**
         * Last date of an explicit comparison window; provide it with previousStartDate.
         * @format date
         */
        previousEndDate?: string;
        /** Whether to include metrics for the adjacent equal-length comparison window. */
        includePreviousPeriod?: boolean;
      };
      output: {
        /** The report rows returned by Peec. Row fields depend on the report and requested dimensions. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Get Peec source-domain retrieval and citation report rows. */
    "peec.get_domains_report": {
      input: {
        /**
         * Peec project ID. Required by upstream when the connection uses a company-scoped API key.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Maximum number of rows to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * Number of rows to skip before returning results.
         * @minimum 0
         * @maximum 500000
         */
        offset?: number;
        /**
         * First date included in the report window, in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * Last date included in the report window, in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /** Dimensions used to split report rows. */
        dimensions?: Array<"prompt_id" | "model_channel_id" | "tag_id" | "topic_id" | "date" | "week" | "month" | "country_code" | "chat_id">;
        /** Pre-aggregation filters. These change both numerator and denominator values for ratio metrics. */
        filters?: Array<{
          /**
           * The Peec field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected field.
           * @minLength 1
           */
          operator: string;
          /**
           * Values for a set predicate.
           * @minItems 1
           */
          values: Array<unknown>;
          [key: string]: unknown;
        }>;
        /** Post-aggregation predicates. Use these to select rows without changing ratio-metric denominators. */
        having?: Array<{
          /**
           * The Peec field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected field.
           * @minLength 1
           */
          operator: string;
          /**
           * Values for a set predicate.
           * @minItems 1
           */
          values: Array<unknown>;
          [key: string]: unknown;
        } | {
          /**
           * The Peec metric field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected metric.
           * @minLength 1
           */
          operator: string;
          /** The scalar metric value to compare. */
          value: number;
          [key: string]: unknown;
        }>;
        /** Sort instructions applied in order. */
        orderBy?: Array<{
          /**
           * The report field to sort by.
           * @minLength 1
           */
          field: string;
          /** The sort direction. */
          direction?: "asc" | "desc";
        }>;
      };
      output: {
        /** The report rows returned by Peec. Row fields depend on the report and requested dimensions. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Get Peec source-URL retrieval and citation report rows. */
    "peec.get_urls_report": {
      input: {
        /**
         * Peec project ID. Required by upstream when the connection uses a company-scoped API key.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Maximum number of rows to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * Number of rows to skip before returning results.
         * @minimum 0
         * @maximum 500000
         */
        offset?: number;
        /**
         * First date included in the report window, in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * Last date included in the report window, in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /** Dimensions used to split report rows. */
        dimensions?: Array<"prompt_id" | "model_channel_id" | "tag_id" | "topic_id" | "date" | "week" | "month" | "country_code" | "chat_id">;
        /** Pre-aggregation filters. These change both numerator and denominator values for ratio metrics. */
        filters?: Array<{
          /**
           * The Peec field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected field.
           * @minLength 1
           */
          operator: string;
          /**
           * Values for a set predicate.
           * @minItems 1
           */
          values: Array<unknown>;
          [key: string]: unknown;
        }>;
        /** Post-aggregation predicates. Use these to select rows without changing ratio-metric denominators. */
        having?: Array<{
          /**
           * The Peec field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected field.
           * @minLength 1
           */
          operator: string;
          /**
           * Values for a set predicate.
           * @minItems 1
           */
          values: Array<unknown>;
          [key: string]: unknown;
        } | {
          /**
           * The Peec metric field to filter.
           * @minLength 1
           */
          field: string;
          /**
           * The comparison operator accepted for the selected metric.
           * @minLength 1
           */
          operator: string;
          /** The scalar metric value to compare. */
          value: number;
          [key: string]: unknown;
        }>;
        /** Sort instructions applied in order. */
        orderBy?: Array<{
          /**
           * The report field to sort by.
           * @minLength 1
           */
          field: string;
          /** The sort direction. */
          direction?: "asc" | "desc";
        }>;
      };
      output: {
        /** The report rows returned by Peec. Row fields depend on the report and requested dimensions. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** List Peec projects available to a company-scoped API key. */
    "peec.list_projects": {
      input: {
        /**
         * Maximum number of rows to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * Number of rows to skip before returning results.
         * @minimum 0
         * @maximum 500000
         */
        offset?: number;
        /**
         * Only return the project with this external ID.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Only return projects created on or after this date.
         * @format date
         */
        startDate?: string;
        /**
         * Only return projects created on or before this date.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The returned Peec projects. */
        projects: Array<{
          /**
           * The Peec project ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The project display name.
           * @minLength 1
           */
          name?: string;
          /** The current project status. */
          status?: string;
          /** The project's ISO 3166-1 alpha-2 country code. */
          countryCode?: string;
          /** The project's ISO 639-1 prompt language code. */
          languageCode?: string;
          /** The caller-defined external project ID. */
          externalId?: string;
          /**
           * The project creation date.
           * @format date
           */
          createdAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the processing state and account-configured JSON result for one Insites audit. */
    "insites.get_audit": {
      input: {
        /**
         * The Insites audit report ID.
         * @minLength 1
         */
        reportId: string;
        /** Whether to include additional datasets such as broken links. */
        includeDatasets?: boolean;
        /** Whether to include the IDs of available audit versions. */
        availableVersions?: boolean;
        /**
         * A specific audit version ID to retrieve.
         * @minLength 1
         */
        versionId?: string;
        /** Whether to retrieve the staging audit associated with this business. */
        staging?: boolean;
        /** Whether to include categories from the account overview layout. */
        categories?: boolean;
        /** Whether to include percentile data for this business. */
        percentiles?: boolean;
      };
      output: {
        /** The request status returned by Insites. */
        status: string;
        /** The audit processing state returned by Insites. */
        reportStatus: string;
        /** The account-configured Insites audit data returned for this website. */
        report?: Record<string, unknown> | null;
      };
    };
    /** Get the LLM-optimized JSON result for one Insites audit with a compact AI-oriented payload. */
    "insites.get_llm_audit": {
      input: {
        /**
         * The Insites audit report ID.
         * @minLength 1
         */
        reportId: string;
      };
      output: {
        /** The request status returned by Insites. */
        status: string;
        /** The audit processing state returned by Insites. */
        reportStatus: string;
        /** The account-configured Insites audit data returned for this website. */
        report?: Record<string, unknown> | null;
      };
    };
    /** Search existing Insites audits with documented filters, ordering, and offset pagination. */
    "insites.list_audits": {
      input: {
        /** The filters applied to existing audits. */
        filters?: Array<{
          /** The comparison operator applied by Insites. */
          operator: "equal" | "not_equal" | "more_than" | "less_than" | "str_contains";
          /**
           * A documented audit property, such as domain, overall_score, or report_id.
           * @minLength 1
           */
          property: string;
          /** The value compared against the selected audit property. */
          targetValue: string | number | boolean;
        }>;
        /** The audit property used to order results. */
        orderBy?: "id" | "user_email" | "report_hash" | "run_date" | "overall_score" | "overall";
        /** The audit result sort direction. */
        orderDirection?: "asc" | "desc";
        /**
         * The maximum number of audit rows to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of audit rows to skip.
         * @minimum 0
         */
        offset?: number;
        /** Whether to include old versions of business audits. */
        includeHistoric?: boolean;
        /**
         * The 32-character hexadecimal Insites list ID.
         * @minLength 32
         * @maxLength 32
         */
        listId?: string;
      };
      output: {
        /** The request status returned by Insites. */
        status: string;
        /** The matching account-configured audit summaries. */
        reports: Array<Record<string, unknown>>;
      };
    };
    /** Start an Insites SEO and AEO website audit and return the report ID for status polling. */
    "insites.start_audit": {
      input: {
        /**
         * The website URL or hostname to analyze.
         * @minLength 1
         */
        url: string;
        /** The audit queue priority. */
        priority?: "normal" | "batch";
        /** How Insites matches this request to an existing audit. */
        dedupeMethod?: "none" | "match_hostname";
        /** The customer name used when the audit is shared by email. */
        customerName?: string;
        /**
         * The customer email used when the audit is shared by email.
         * @format email
         */
        customerEmail?: string;
        /** The business name used by local presence and review checks. */
        businessName?: string;
        /** The business phone number used by local presence and review checks. */
        phone?: string;
        /** The first line of the business address. */
        address?: string;
        /** The building number used to improve location accuracy. */
        buildingNumber?: string;
        /** The street name used to improve location accuracy. */
        street?: string;
        /** The business city used to improve location accuracy. */
        city?: string;
        /** The business state or county used to improve location accuracy. */
        state?: string;
        /** The business ZIP code or postcode. */
        postalCode?: string;
        /**
         * The ISO 3166-1 alpha-2 business country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** The business latitude used to improve location accuracy. */
        latitude?: string;
        /** The business longitude used to improve location accuracy. */
        longitude?: string;
        /** The Google Place ID for the business. */
        googlePlaceId?: string;
        /** Comma-separated products and services offered by the business. */
        products?: string;
        /** Comma-separated locations served by the business. */
        locations?: string;
        /** An existing audit ID to which this audit should be added as a competitor. */
        competitorReportId?: string;
        /**
         * The number of website pages to include in the audit.
         * @minimum 1
         */
        pagesToAnalyze?: number;
        /** Whether Insites should automatically generate business keywords. */
        generateKeywords?: boolean;
      };
      output: {
        /** The request status returned by Insites. */
        status: string;
        /**
         * The Insites audit report ID.
         * @minLength 1
         */
        reportId: string;
      };
    };
  }
}

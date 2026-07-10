import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search supported Google countries in Autom and return matching country codes. */
    "autom.find_google_countries": {
      input: {
        /**
         * Search text used to filter Autom finder results.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The matching Google countries. */
        countries: Array<{
          /** The Google country code. */
          country_code: string;
          /** The Google country name. */
          country_name: string;
        }>;
      };
    };
    /** Search supported Google languages in Autom and return matching language codes. */
    "autom.find_google_languages": {
      input: {
        /**
         * Search text used to filter Autom finder results.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The matching Google languages. */
        languages: Array<{
          /** The Google language code. */
          language_code: string;
          /** The Google language name. */
          language_name: string;
        }>;
      };
    };
    /** Search supported Google locations in Autom and return matching location IDs. */
    "autom.find_google_locations": {
      input: {
        /**
         * Search text used to filter Autom finder results.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The matching Google locations. */
        locations: Array<{
          /** The Autom location identifier. */
          id: string;
          /** The location GPS coordinates as latitude and longitude. */
          gps: Array<number>;
          /** The location name. */
          name: string;
          /** The estimated Google reach for the location. */
          reach: number;
          /** The Google location identifier. */
          google_id: number;
          /** The Google target type. */
          target_type: string;
          /** The Google country code for the location. */
          country_code: string;
          /** The canonical Google location name. */
          canonical_name: string;
        }>;
      };
    };
    /** Get current Autom credit usage, subscription quota, rate limits, account metadata, and API key metadata. */
    "autom.get_usage": {
      input: Record<string, never>;
      output: {
        /** Credits available right now. */
        remaining: number;
        /** Credits consumed in the current billing period. */
        total_used: number;
        /** The ISO 8601 date when the subscription renews. */
        renewal_date: string;
        /** The current Autom billing period. */
        period: {
          /** The start date of the current billing period. */
          start: string;
          /** The end date of the current billing period. */
          end: string;
        };
        /** Autom subscription quota usage. */
        subscription: {
          /** The number of subscription calls used in the current billing period. */
          used: number;
          /** The subscription call quota for the current billing period. */
          total: number;
          /** The number of subscription calls remaining. */
          remaining: number;
          /** The percentage of subscription quota consumed. */
          percent_used: number;
        };
        /** Autom extra credit usage. */
        credits: {
          /** The number of extra credits added to the account. */
          given: number;
          /** The number of extra credits consumed. */
          consumed: number;
          /** The number of extra credits remaining. */
          remaining: number;
          /** The percentage of extra credits consumed when returned. */
          percent_used?: number;
          [key: string]: unknown;
        };
        /** Autom account rate limits. */
        rate_limit: {
          /** The requests-per-minute limit, or null when unlimited. */
          per_minute: number | null;
          /** The requests-per-second limit, or null when unlimited. */
          per_second: number | null;
        };
        /** Autom account metadata. */
        account: {
          /** The Autom account name. */
          name: string;
          /** The Autom account slug. */
          slug: string;
        };
        /** Autom API key metadata. */
        api_key: {
          /** The friendly API key alias. */
          alias: string;
          /** Whether the API key is active. */
          active: boolean;
          /** The API key category. */
          category: string;
          /** The API key expiry date, or null when it never expires. */
          expires: string | null;
          /** Custom per-key quotas. */
          quotas: {
            /** The configured per-key quota, or null when unlimited. */
            total?: number | null;
            /** The configured per-key quota, or null when unlimited. */
            daily?: number | null;
            /** The configured per-key quota, or null when unlimited. */
            weekly?: number | null;
            /** The configured per-key quota, or null when unlimited. */
            monthly?: number | null;
            [key: string]: unknown;
          };
        };
      };
    };
  }
}

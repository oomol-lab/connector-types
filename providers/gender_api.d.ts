import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get likely country-of-origin and ethnicity metadata for one first name, full name, or email address. */
    "gender_api.get_country_of_origin": {
      input: {
        /**
         * The first name to analyze with Gender-API.com.
         * @minLength 1
         * @maxLength 50
         */
        first_name?: string;
        /**
         * The full name to analyze with Gender-API.com.
         * @minLength 3
         * @maxLength 100
         */
        full_name?: string;
        /**
         * The email address to analyze with Gender-API.com.
         * @minLength 3
         * @maxLength 100
         * @format email
         */
        email?: string;
        /** An optional caller-supplied ID echoed by Gender-API.com. */
        id?: string | number;
      };
      output: {
        /** The submitted payload echoed by Gender-API.com. */
        input: Record<string, unknown>;
        /** Technical details returned by Gender-API.com. */
        details: {
          /**
           * The number of credits consumed by this query.
           * @minimum 0
           */
          credits_used?: number;
          /**
           * The number of records that matched the query.
           * @minimum 0
           */
          samples?: number;
          /** The country Gender-API.com found or applied to the query. */
          country?: string | null;
          /** The first name after Gender-API.com normalization. */
          first_name_sanitized?: string;
          /** The full name after Gender-API.com normalization. */
          full_name_sanitized?: string;
          /** The email address after Gender-API.com normalization. */
          email_sanitized?: string;
          /** The server-side processing duration. */
          duration?: string;
          [key: string]: unknown;
        };
        /** Whether Gender-API.com found origin metadata for the input. */
        result_found: boolean;
        /** The likely countries of origin returned by Gender-API.com. */
        country_of_origin?: Array<{
          /** The localized country name. */
          country_name?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          /**
           * The probability that the queried name originates from this country.
           * @minimum 0
           * @maximum 1
           */
          probability?: number;
          /** The continental region containing the country. */
          continental_region?: string;
          /** The statistical region containing the country. */
          statistical_region?: string;
        }>;
        /**
         * A Gender-API.com map URL for the returned country-of-origin distribution.
         * @format uri
         */
        country_of_origin_map_url?: string;
        /** The first name Gender-API.com used for the analysis. */
        first_name?: string;
        /**
         * The probability score for the inferred gender.
         * @minimum 0
         * @maximum 1
         */
        probability?: number;
        /** The inferred gender value returned by Gender-API.com. */
        gender?: "male" | "female" | "unknown";
        /** The likely language of origin when returned. */
        language_of_origin?: string;
        /** The documented name meaning when returned. */
        meaning?: string;
        /** Ethnicity details returned by Gender-API.com. */
        ethnicity?: {
          /** The primary ethnicity identifier. */
          id?: string;
          /** The primary ethnicity name. */
          name?: string;
          /** The ethnicity distribution entries returned by Gender-API.com. */
          distribution?: Array<{
            /** The ethnicity identifier. */
            id?: string;
            /** The ethnicity name. */
            name?: string;
            /**
             * The percentage for this ethnicity distribution entry.
             * @minimum 0
             * @maximum 100
             */
            percentage?: number;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Read remaining credits and recent usage statistics for the connected account. */
    "gender_api.get_statistics": {
      input: Record<string, never>;
      output: {
        /** Whether the account has reached its current usage limit. */
        is_limit_reached: boolean;
        /**
         * The credits remaining on the account.
         * @minimum 0
         */
        remaining_credits: number;
        /** Technical details returned by the Gender-API.com statistics endpoint. */
        details?: {
          /**
           * The number of credits consumed by this statistics query.
           * @minimum 0
           */
          credits_used?: number;
          /** The server-side processing duration. */
          duration?: string;
        };
        /** Gender-API.com usage information for the previous month. */
        usage_last_month?: {
          /** The month represented by this usage entry. */
          date?: string;
          /**
           * The credits consumed during the previous month.
           * @minimum 0
           */
          credits_used?: number;
        };
      };
    };
    /** Determine the likely gender for one email address after Gender-API.com extracts a name from it. */
    "gender_api.query_gender_by_email_address": {
      input: {
        /**
         * The email address to classify with Gender-API.com.
         * @minLength 3
         * @maxLength 100
         * @format email
         */
        email: string;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to localize the query.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The optional browser locale used by Gender-API.com to localize the query.
         * @minLength 1
         * @maxLength 35
         */
        locale?: string;
        /**
         * The optional IPv4 or IPv6 address used by Gender-API.com to localize the query.
         * @minLength 1
         * @maxLength 45
         */
        ip?: string;
        /** An optional caller-supplied ID echoed by Gender-API.com. */
        id?: string | number;
      };
      output: {
        /** The submitted payload echoed by Gender-API.com. */
        input: Record<string, unknown>;
        /** Technical details returned by Gender-API.com. */
        details: {
          /**
           * The number of credits consumed by this query.
           * @minimum 0
           */
          credits_used?: number;
          /**
           * The number of records that matched the query.
           * @minimum 0
           */
          samples?: number;
          /** The country Gender-API.com found or applied to the query. */
          country?: string | null;
          /** The first name after Gender-API.com normalization. */
          first_name_sanitized?: string;
          /** The full name after Gender-API.com normalization. */
          full_name_sanitized?: string;
          /** The email address after Gender-API.com normalization. */
          email_sanitized?: string;
          /** The server-side processing duration. */
          duration?: string;
          [key: string]: unknown;
        };
        /** Whether Gender-API.com found a gender result for the input. */
        result_found: boolean;
        /** The first name Gender-API.com used for genderization. */
        first_name?: string;
        /** The last name extracted by Gender-API.com when available. */
        last_name?: string;
        /** The full name Gender-API.com used for genderization when available. */
        full_name?: string;
        /**
         * The email address Gender-API.com used for genderization when available.
         * @format email
         */
        email?: string;
        /**
         * The probability score for the inferred gender.
         * @minimum 0
         * @maximum 1
         */
        probability?: number;
        /** The inferred gender value returned by Gender-API.com. */
        gender?: "male" | "female" | "unknown";
      };
    };
    /** Determine the likely gender for one first name with optional country, locale, IP, and caller ID hints. */
    "gender_api.query_gender_by_first_name": {
      input: {
        /**
         * The first name to classify with Gender-API.com.
         * @minLength 1
         * @maxLength 50
         */
        first_name: string;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to localize the query.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The optional browser locale used by Gender-API.com to localize the query.
         * @minLength 1
         * @maxLength 35
         */
        locale?: string;
        /**
         * The optional IPv4 or IPv6 address used by Gender-API.com to localize the query.
         * @minLength 1
         * @maxLength 45
         */
        ip?: string;
        /** An optional caller-supplied ID echoed by Gender-API.com. */
        id?: string | number;
      };
      output: {
        /** The submitted payload echoed by Gender-API.com. */
        input: Record<string, unknown>;
        /** Technical details returned by Gender-API.com. */
        details: {
          /**
           * The number of credits consumed by this query.
           * @minimum 0
           */
          credits_used?: number;
          /**
           * The number of records that matched the query.
           * @minimum 0
           */
          samples?: number;
          /** The country Gender-API.com found or applied to the query. */
          country?: string | null;
          /** The first name after Gender-API.com normalization. */
          first_name_sanitized?: string;
          /** The full name after Gender-API.com normalization. */
          full_name_sanitized?: string;
          /** The email address after Gender-API.com normalization. */
          email_sanitized?: string;
          /** The server-side processing duration. */
          duration?: string;
          [key: string]: unknown;
        };
        /** Whether Gender-API.com found a gender result for the input. */
        result_found: boolean;
        /** The first name Gender-API.com used for genderization. */
        first_name?: string;
        /** The last name extracted by Gender-API.com when available. */
        last_name?: string;
        /** The full name Gender-API.com used for genderization when available. */
        full_name?: string;
        /**
         * The email address Gender-API.com used for genderization when available.
         * @format email
         */
        email?: string;
        /**
         * The probability score for the inferred gender.
         * @minimum 0
         * @maximum 1
         */
        probability?: number;
        /** The inferred gender value returned by Gender-API.com. */
        gender?: "male" | "female" | "unknown";
      };
    };
    /** Determine the likely gender for one full name while letting Gender-API.com split the name. */
    "gender_api.query_gender_by_full_name": {
      input: {
        /**
         * The full name to classify with Gender-API.com.
         * @minLength 3
         * @maxLength 100
         */
        full_name: string;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to localize the query.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The optional browser locale used by Gender-API.com to localize the query.
         * @minLength 1
         * @maxLength 35
         */
        locale?: string;
        /**
         * The optional IPv4 or IPv6 address used by Gender-API.com to localize the query.
         * @minLength 1
         * @maxLength 45
         */
        ip?: string;
        /** An optional caller-supplied ID echoed by Gender-API.com. */
        id?: string | number;
      };
      output: {
        /** The submitted payload echoed by Gender-API.com. */
        input: Record<string, unknown>;
        /** Technical details returned by Gender-API.com. */
        details: {
          /**
           * The number of credits consumed by this query.
           * @minimum 0
           */
          credits_used?: number;
          /**
           * The number of records that matched the query.
           * @minimum 0
           */
          samples?: number;
          /** The country Gender-API.com found or applied to the query. */
          country?: string | null;
          /** The first name after Gender-API.com normalization. */
          first_name_sanitized?: string;
          /** The full name after Gender-API.com normalization. */
          full_name_sanitized?: string;
          /** The email address after Gender-API.com normalization. */
          email_sanitized?: string;
          /** The server-side processing duration. */
          duration?: string;
          [key: string]: unknown;
        };
        /** Whether Gender-API.com found a gender result for the input. */
        result_found: boolean;
        /** The first name Gender-API.com used for genderization. */
        first_name?: string;
        /** The last name extracted by Gender-API.com when available. */
        last_name?: string;
        /** The full name Gender-API.com used for genderization when available. */
        full_name?: string;
        /**
         * The email address Gender-API.com used for genderization when available.
         * @format email
         */
        email?: string;
        /**
         * The probability score for the inferred gender.
         * @minimum 0
         * @maximum 1
         */
        probability?: number;
        /** The inferred gender value returned by Gender-API.com. */
        gender?: "male" | "female" | "unknown";
      };
    };
  }
}

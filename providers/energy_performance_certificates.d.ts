import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get full details for one Energy Performance Certificate or Display Energy Certificate by certificate number. */
    "energy_performance_certificates.get_certificate": {
      input: {
        /**
         * The Energy Performance Certificate or Display Energy Certificate number.
         * @minLength 1
         */
        certificateNumber: string;
      };
      output: {
        /** An Energy Performance Certificate row returned by the API. */
        certificate: Record<string, unknown>;
        /** The raw Energy Performance Certificates API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search display Energy Performance Certificates for public buildings with supported query filters. */
    "energy_performance_certificates.search_display_certificates": {
      input: {
        /**
         * Address text to search for.
         * @minLength 1
         */
        address?: string;
        /**
         * Postcode to search for.
         * @minLength 1
         */
        postcode?: string;
        /** Unique Property Reference Number to search for. */
        uprn?: number | string;
        /**
         * Council names or codes to filter by.
         * @minItems 1
         */
        councils?: Array<string>;
        /**
         * Parliamentary constituency names or codes to filter by.
         * @minItems 1
         */
        constituencies?: Array<string>;
        /**
         * Energy efficiency ratings to filter by.
         * @minItems 1
         */
        energyRatings?: Array<"A" | "B" | "C" | "D" | "E" | "F" | "G">;
        /**
         * Start date of the certificate registration date range.
         * @format date
         */
        dateStart?: string;
        /**
         * End date of the certificate registration date range.
         * @format date
         */
        dateEnd?: string;
        /**
         * Maximum number of certificate rows to return per page.
         * @minimum 1
         * @maximum 5000
         */
        pageSize?: number;
        /**
         * Page number to fetch when retrieving paginated results.
         * @minimum 1
         */
        currentPage?: number;
      };
      output: {
        /** Certificate rows returned by the API. */
        rows: Array<Record<string, unknown>>;
        /** Pagination metadata returned by the API. */
        pagination: Record<string, unknown> | null;
        /** The raw Energy Performance Certificates API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search domestic Energy Performance Certificates with supported query filters. */
    "energy_performance_certificates.search_domestic_certificates": {
      input: {
        /**
         * Address text to search for.
         * @minLength 1
         */
        address?: string;
        /**
         * Postcode to search for.
         * @minLength 1
         */
        postcode?: string;
        /** Unique Property Reference Number to search for. */
        uprn?: number | string;
        /**
         * Council names or codes to filter by.
         * @minItems 1
         */
        councils?: Array<string>;
        /**
         * Parliamentary constituency names or codes to filter by.
         * @minItems 1
         */
        constituencies?: Array<string>;
        /**
         * Energy efficiency ratings to filter by.
         * @minItems 1
         */
        energyRatings?: Array<"A" | "B" | "C" | "D" | "E" | "F" | "G">;
        /**
         * Start date of the certificate registration date range.
         * @format date
         */
        dateStart?: string;
        /**
         * End date of the certificate registration date range.
         * @format date
         */
        dateEnd?: string;
        /**
         * Maximum number of certificate rows to return per page.
         * @minimum 1
         * @maximum 5000
         */
        pageSize?: number;
        /**
         * Page number to fetch when retrieving paginated results.
         * @minimum 1
         */
        currentPage?: number;
      };
      output: {
        /** Certificate rows returned by the API. */
        rows: Array<Record<string, unknown>>;
        /** Pagination metadata returned by the API. */
        pagination: Record<string, unknown> | null;
        /** The raw Energy Performance Certificates API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search non-domestic Energy Performance Certificates with supported query filters. */
    "energy_performance_certificates.search_non_domestic_certificates": {
      input: {
        /**
         * Address text to search for.
         * @minLength 1
         */
        address?: string;
        /**
         * Postcode to search for.
         * @minLength 1
         */
        postcode?: string;
        /** Unique Property Reference Number to search for. */
        uprn?: number | string;
        /**
         * Council names or codes to filter by.
         * @minItems 1
         */
        councils?: Array<string>;
        /**
         * Parliamentary constituency names or codes to filter by.
         * @minItems 1
         */
        constituencies?: Array<string>;
        /**
         * Energy efficiency ratings to filter by.
         * @minItems 1
         */
        energyRatings?: Array<"A" | "B" | "C" | "D" | "E" | "F" | "G">;
        /**
         * Start date of the certificate registration date range.
         * @format date
         */
        dateStart?: string;
        /**
         * End date of the certificate registration date range.
         * @format date
         */
        dateEnd?: string;
        /**
         * Maximum number of certificate rows to return per page.
         * @minimum 1
         * @maximum 5000
         */
        pageSize?: number;
        /**
         * Page number to fetch when retrieving paginated results.
         * @minimum 1
         */
        currentPage?: number;
      };
      output: {
        /** Certificate rows returned by the API. */
        rows: Array<Record<string, unknown>>;
        /** Pagination metadata returned by the API. */
        pagination: Record<string, unknown> | null;
        /** The raw Energy Performance Certificates API response. */
        raw: Record<string, unknown>;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Check tax agency by ID. */
    "check.get_agency": {
      input: {
        /**
         * The Check agency ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Check agency. */
        agency: {
          /** The unique Check agency identifier. */
          id: string;
          /** The human-readable agency name. */
          label: string;
          /** The lowercase jurisdiction code for the agency. */
          jurisdiction: string;
          /** The raw agency object returned by Check. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Check tax agencies with optional ID, jurisdiction, label, and page size filters. */
    "check.list_agencies": {
      input: {
        /**
         * The Check agency IDs to look up. Check accepts repeated id query parameters.
         * @minItems 1
         * @maxItems 500
         */
        ids?: Array<string>;
        /**
         * The lowercase jurisdiction codes used to filter agencies, such as fed, ny, or pa.
         * @minItems 1
         */
        jurisdictions?: Array<string>;
        /**
         * A case-insensitive substring filter applied to the agency label.
         * @minLength 1
         */
        labelContains?: string;
        /**
         * The number of agencies to return per page. Check allows up to 500.
         * @maximum 500
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The URL of the next page, or null if there is no next page. */
        next: string | null;
        /** The URL of the previous page, or null if there is no previous page. */
        previous: string | null;
        /** The agencies returned by Check. */
        agencies: Array<{
          /** The unique Check agency identifier. */
          id: string;
          /** The human-readable agency name. */
          label: string;
          /** The lowercase jurisdiction code for the agency. */
          jurisdiction: string;
          /** The raw agency object returned by Check. */
          raw: Record<string, unknown>;
        }>;
        /** The raw paginated agency list response returned by Check. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate a US address using Check's address validation endpoint. */
    "check.validate_address": {
      input: {
        /**
         * A street address line to validate with Check.
         * @minLength 1
         */
        line1: string;
        /**
         * A street address line to validate with Check.
         * @minLength 1
         */
        line2?: string;
        /**
         * The city for the address to validate.
         * @minLength 1
         */
        city: string;
        /**
         * The US state code for the address to validate.
         * @minLength 1
         */
        state: string;
        /**
         * The postal code for the address to validate.
         * @minLength 1
         */
        postalCode: string;
        /**
         * The country code for the address to validate.
         * @minLength 1
         */
        country?: string;
      };
      output: {
        /** The raw Check address validation result. */
        result: Record<string, unknown>;
      };
    };
  }
}

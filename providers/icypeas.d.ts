import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Icypeas search item by ID and expose its processing status. */
    "icypeas.get_search_item": {
      input: {
        /**
         * The Icypeas search item ID returned by a submit action.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Icypeas accepted the result lookup. */
        success: boolean;
        /** An Icypeas search item result. */
        item: {
          /** The Icypeas search item ID. */
          _id?: string;
          /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
          status?: string;
          /** The search item name returned by Icypeas. */
          name?: string;
          /** The bulk file ID associated with the item, when present. */
          file?: string;
          /** The item order inside a bulk search, when present. */
          order?: number;
          /** A raw object returned by Icypeas. */
          results?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          userData?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          system?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        /** Search items returned by Icypeas. */
        items: Array<{
          /** The Icypeas search item ID. */
          _id?: string;
          /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
          status?: string;
          /** The search item name returned by Icypeas. */
          name?: string;
          /** The bulk file ID associated with the item, when present. */
          file?: string;
          /** The item order inside a bulk search, when present. */
          order?: number;
          /** A raw object returned by Icypeas. */
          results?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          userData?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          system?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
        status: string | null;
        /**
         * The total number of matching search items.
         * @minimum 0
         */
        total: number | null;
        /** Pagination cursor tuples returned by Icypeas. */
        sorts: Array<unknown>;
        /** Validation errors returned by Icypeas. */
        validationErrors: Array<{
          /** The expected value or type for the invalid field. */
          expected?: unknown;
          /** The actual value that Icypeas received for the invalid field. */
          actual?: unknown;
          /** The Icypeas validation error type. */
          type?: string;
          /** The field that caused the validation error. */
          field?: string;
          /** The machine-readable validation error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** A raw object returned by Icypeas. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch Icypeas subscription details and remaining credit balances by account email. */
    "icypeas.get_subscription_information": {
      input: {
        /**
         * The email address of the Icypeas account owner.
         * @format email
         */
        email: string;
      };
      output: {
        /** A raw object returned by Icypeas. */
        subscription: Record<string, unknown>;
        /** A raw object returned by Icypeas. */
        raw: Record<string, unknown>;
      };
    };
    /** Find a LinkedIn profile URL behind one professional email address with Icypeas. */
    "icypeas.reverse_email_lookup": {
      input: {
        /**
         * The professional email address to look up.
         * @format email
         */
        email: string;
      };
      output: {
        /** Whether Icypeas processed the reverse email lookup request. */
        success: boolean;
        /** The Icypeas search item ID for this reverse lookup. */
        searchId: string | null;
        /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
        status: string | null;
        /** The LinkedIn profile URL returned by Icypeas, or an empty string when not found. */
        result: string | null;
        /** Validation errors returned by Icypeas. */
        validationErrors?: Array<{
          /** The expected value or type for the invalid field. */
          expected?: unknown;
          /** The actual value that Icypeas received for the invalid field. */
          actual?: unknown;
          /** The Icypeas validation error type. */
          type?: string;
          /** The field that caused the validation error. */
          field?: string;
          /** The machine-readable validation error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** A raw object returned by Icypeas. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit one Icypeas domain scan for role-based email addresses. */
    "icypeas.submit_domain_scan": {
      input: {
        /**
         * The domain or company name to scan.
         * @minLength 1
         */
        domainOrCompany: string;
        /** Optional custom tracking data attached to one Icypeas single search. */
        custom?: {
          /**
           * A webhook URL that Icypeas should call when this search finishes.
           * @format uri
           */
          webhookUrl?: string;
          /**
           * A custom ID that Icypeas stores with this search item.
           * @minLength 1
           */
          externalId?: string;
        };
      };
      output: {
        /** Whether Icypeas accepted the request. */
        success: boolean;
        /** The created Icypeas search item ID. */
        searchId: string | null;
        /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
        status: string | null;
        /** An Icypeas search item result. */
        item: {
          /** The Icypeas search item ID. */
          _id?: string;
          /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
          status?: string;
          /** The search item name returned by Icypeas. */
          name?: string;
          /** The bulk file ID associated with the item, when present. */
          file?: string;
          /** The item order inside a bulk search, when present. */
          order?: number;
          /** A raw object returned by Icypeas. */
          results?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          userData?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          system?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        /** Validation errors returned by Icypeas. */
        validationErrors?: Array<{
          /** The expected value or type for the invalid field. */
          expected?: unknown;
          /** The actual value that Icypeas received for the invalid field. */
          actual?: unknown;
          /** The Icypeas validation error type. */
          type?: string;
          /** The field that caused the validation error. */
          field?: string;
          /** The machine-readable validation error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** A raw object returned by Icypeas. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit one Icypeas email discovery search for a person and company. */
    "icypeas.submit_email_search": {
      input: {
        /**
         * The person's first name. Required when lastname is omitted.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The person's last name. Required when firstname is omitted.
         * @minLength 1
         */
        lastname?: string;
        /**
         * The person's company domain or company name.
         * @minLength 1
         */
        domainOrCompany: string;
        /** Optional custom tracking data attached to one Icypeas single search. */
        custom?: {
          /**
           * A webhook URL that Icypeas should call when this search finishes.
           * @format uri
           */
          webhookUrl?: string;
          /**
           * A custom ID that Icypeas stores with this search item.
           * @minLength 1
           */
          externalId?: string;
        };
      };
      output: {
        /** Whether Icypeas accepted the request. */
        success: boolean;
        /** The created Icypeas search item ID. */
        searchId: string | null;
        /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
        status: string | null;
        /** An Icypeas search item result. */
        item: {
          /** The Icypeas search item ID. */
          _id?: string;
          /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
          status?: string;
          /** The search item name returned by Icypeas. */
          name?: string;
          /** The bulk file ID associated with the item, when present. */
          file?: string;
          /** The item order inside a bulk search, when present. */
          order?: number;
          /** A raw object returned by Icypeas. */
          results?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          userData?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          system?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        /** Validation errors returned by Icypeas. */
        validationErrors?: Array<{
          /** The expected value or type for the invalid field. */
          expected?: unknown;
          /** The actual value that Icypeas received for the invalid field. */
          actual?: unknown;
          /** The Icypeas validation error type. */
          type?: string;
          /** The field that caused the validation error. */
          field?: string;
          /** The machine-readable validation error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** A raw object returned by Icypeas. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit one Icypeas email verification request and return the search item handle. */
    "icypeas.submit_email_verification": {
      input: {
        /**
         * The email address to verify.
         * @format email
         */
        email: string;
        /** Optional custom tracking data attached to one Icypeas single search. */
        custom?: {
          /**
           * A webhook URL that Icypeas should call when this search finishes.
           * @format uri
           */
          webhookUrl?: string;
          /**
           * A custom ID that Icypeas stores with this search item.
           * @minLength 1
           */
          externalId?: string;
        };
      };
      output: {
        /** Whether Icypeas accepted the request. */
        success: boolean;
        /** The created Icypeas search item ID. */
        searchId: string | null;
        /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
        status: string | null;
        /** An Icypeas search item result. */
        item: {
          /** The Icypeas search item ID. */
          _id?: string;
          /** The Icypeas search item processing status, such as NONE, IN_PROGRESS, FOUND, or DEBITED. */
          status?: string;
          /** The search item name returned by Icypeas. */
          name?: string;
          /** The bulk file ID associated with the item, when present. */
          file?: string;
          /** The item order inside a bulk search, when present. */
          order?: number;
          /** A raw object returned by Icypeas. */
          results?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          userData?: Record<string, unknown>;
          /** A raw object returned by Icypeas. */
          system?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        /** Validation errors returned by Icypeas. */
        validationErrors?: Array<{
          /** The expected value or type for the invalid field. */
          expected?: unknown;
          /** The actual value that Icypeas received for the invalid field. */
          actual?: unknown;
          /** The Icypeas validation error type. */
          type?: string;
          /** The field that caused the validation error. */
          field?: string;
          /** The machine-readable validation error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** A raw object returned by Icypeas. */
        raw: Record<string, unknown>;
      };
    };
  }
}

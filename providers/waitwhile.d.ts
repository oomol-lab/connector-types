import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Waitwhile customer with contact information, location associations, tags and metadata. */
    "waitwhile.create_customer": {
      input: {
        /** Customer fields to create. */
        customer: {
          /**
           * Customer name.
           * @maxLength 100
           */
          name?: string | null;
          /**
           * First name of customer.
           * @maxLength 100
           */
          firstName?: string | null;
          /**
           * Last name of customer.
           * @maxLength 100
           */
          lastName?: string | null;
          /** Phone number in E.164 format. */
          phone?: string | null;
          /**
           * Email address.
           * @maxLength 100
           */
          email?: string | null;
          /**
           * Legacy customer notes; deprecated upstream in favor of customer note entries.
           * @maxLength 1000
           */
          notes?: string | null;
          /**
           * Customer tags.
           * @maxItems 10
           */
          tags?: Array<"NO-SHOW" | "CANCELLED" | "REMOVED" | "ALERTED" | "ARRIVED" | "DELAYED" | "CONFIRMED" | "EXPIRED" | "FLAGGED" | "IMPORTED" | "PRIORITIZED" | "CAPACITY" | "REJECTED">;
          /** Location identifiers. */
          locationIds?: Array<string>;
          /**
           * Tags to add to existing tags.
           * @maxItems 10
           */
          addTags?: Array<"NO-SHOW" | "CANCELLED" | "REMOVED" | "ALERTED" | "ARRIVED" | "DELAYED" | "CONFIRMED" | "EXPIRED" | "FLAGGED" | "IMPORTED" | "PRIORITIZED" | "CAPACITY" | "REJECTED">;
          /**
           * Tags to remove from existing tags.
           * @maxItems 10
           */
          removeTags?: Array<"NO-SHOW" | "CANCELLED" | "REMOVED" | "ALERTED" | "ARRIVED" | "DELAYED" | "CONFIRMED" | "EXPIRED" | "FLAGGED" | "IMPORTED" | "PRIORITIZED" | "CAPACITY" | "REJECTED">;
          /** Up to 20 metadata keys, each at most 40 characters, with string values up to 500 characters. */
          metadata?: Record<string, string> | null;
          /**
           * External customer identifier; takes priority over contact information when deriving the customer ID.
           * @maxLength 100
           */
          externalId?: string | null;
        };
      };
      output: {
        /** Customer identifier. */
        id?: string;
        /** Customer name. */
        name?: string | null;
        /** External customer identifier. */
        externalId?: string | null;
        /** Customer email address. */
        email?: string | null;
        /** Customer phone number. */
        phone?: string | null;
        [key: string]: unknown;
      };
    };
    /** Delete a Waitwhile customer by ID. */
    "waitwhile.delete_customer": {
      input: {
        /**
         * Identifier of customer.
         * @pattern ^[a-zA-Z0-9]{22}$
         */
        customerId: string;
      };
      output: {
        /** HTTP status code reported by Waitwhile. */
        statusCode?: number;
        /** Message describing the result. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Waitwhile customer by ID. */
    "waitwhile.get_customer": {
      input: {
        /**
         * Identifier of customer.
         * @pattern ^[a-zA-Z0-9]{22}$
         */
        customerId: string;
      };
      output: {
        /** Customer identifier. */
        id?: string;
        /** Customer name. */
        name?: string | null;
        /** External customer identifier. */
        externalId?: string | null;
        /** Customer email address. */
        email?: string | null;
        /** Customer phone number. */
        phone?: string | null;
        [key: string]: unknown;
      };
    };
    /** List Waitwhile customers with location, external ID, date filters and cursor pagination. */
    "waitwhile.list_customers": {
      input: {
        /**
         * Maximum number of results, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Comma-separated pagination values; pass the previous endAt as startAfter. */
        startAfter?: string;
        /** Return results in descending order. */
        desc?: boolean;
        /**
         * Identifier of location.
         * @pattern ^[a-zA-Z0-9]{20}$
         */
        locationId?: string;
        /** Date and time in ISO-8601 format or milliseconds from epoch. */
        fromDate?: string | number;
        /** Date and time in ISO-8601 format or milliseconds from epoch. */
        toDate?: string | number;
        /**
         * External customer identifier; takes priority over contact information when deriving the customer ID.
         * @maxLength 100
         */
        externalId?: string | null;
      };
      output: {
        /** Customers in this page. */
        results: Array<{
          /** Customer identifier. */
          id?: string;
          /** Customer name. */
          name?: string | null;
          /** External customer identifier. */
          externalId?: string | null;
          /** Customer email address. */
          email?: string | null;
          /** Customer phone number. */
          phone?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * Maximum number of results, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Comma-separated pagination values; pass the previous endAt as startAfter. */
        startAt?: string;
        /** Comma-separated pagination values; pass the previous endAt as startAfter. */
        endAt?: string;
        [key: string]: unknown;
      };
    };
    /** List accessible Waitwhile locations with cursor pagination. */
    "waitwhile.list_locations": {
      input: {
        /**
         * Maximum number of results, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Comma-separated pagination values; pass the previous endAt as startAfter. */
        startAfter?: string;
        /** Return results in descending order. */
        desc?: boolean;
        /**
         * External location identifier.
         * @maxLength 100
         */
        externalId?: string | null;
        /**
         * Two-letter uppercase country code.
         * @pattern ^[A-Z]{2}$
         */
        countryCode?: string;
      };
      output: {
        /** Locations in this page. */
        results: Array<{
          /** Location identifier. */
          id?: string;
          /** Location name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /**
         * Maximum number of results, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Comma-separated pagination values; pass the previous endAt as startAfter. */
        startAt?: string;
        /** Comma-separated pagination values; pass the previous endAt as startAfter. */
        endAt?: string;
        [key: string]: unknown;
      };
    };
    /** Search Waitwhile customers by name, phone, email or identifier prefix with page-number pagination. */
    "waitwhile.search_customers": {
      input: {
        /**
         * Identifier of location.
         * @pattern ^[a-zA-Z0-9]{20}$
         */
        locationId?: string;
        /** Date and time in ISO-8601 format or milliseconds from epoch. */
        fromDate?: string | number;
        /** Date and time in ISO-8601 format or milliseconds from epoch. */
        toDate?: string | number;
        /**
         * Prefix to match against name, phone, email or customer identifier.
         * @maxLength 100
         */
        q?: string;
        /** Visit state to filter by. */
        state?: "PENDING" | "DRAFT" | "BOOKED" | "WAITING" | "SERVING" | "COMPLETE";
        /** Tag associated with a visit. */
        tag?: "NO-SHOW" | "CANCELLED" | "REMOVED" | "ALERTED" | "ARRIVED" | "DELAYED" | "CONFIRMED" | "EXPIRED" | "FLAGGED" | "IMPORTED" | "PRIORITIZED" | "CAPACITY" | "REJECTED";
        /**
         * Maximum number of results, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @maximum 1000000
         */
        page?: number;
      };
      output: {
        /** Matching customers in this page. */
        results: Array<{
          /** Customer identifier. */
          id?: string;
          /** Customer name. */
          name?: string | null;
          /** External customer identifier. */
          externalId?: string | null;
          /** Customer email address. */
          email?: string | null;
          /** Customer phone number. */
          phone?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * Maximum number of results, from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Current page number. */
        page?: number;
        [key: string]: unknown;
      };
    };
    /** Update a Waitwhile customer's contact information, location associations, tags or metadata; nullable fields can be cleared. */
    "waitwhile.update_customer": {
      input: {
        /**
         * Identifier of customer.
         * @pattern ^[a-zA-Z0-9]{22}$
         */
        customerId: string;
        /** Customer fields to update; omitted fields remain unchanged. */
        customer: {
          /**
           * Customer name.
           * @maxLength 100
           */
          name?: string | null;
          /**
           * First name of customer.
           * @maxLength 100
           */
          firstName?: string | null;
          /**
           * Last name of customer.
           * @maxLength 100
           */
          lastName?: string | null;
          /** Phone number in E.164 format. */
          phone?: string | null;
          /**
           * Email address.
           * @maxLength 100
           */
          email?: string | null;
          /**
           * Legacy customer notes; deprecated upstream in favor of customer note entries.
           * @maxLength 1000
           */
          notes?: string | null;
          /**
           * Customer tags.
           * @maxItems 10
           */
          tags?: Array<"NO-SHOW" | "CANCELLED" | "REMOVED" | "ALERTED" | "ARRIVED" | "DELAYED" | "CONFIRMED" | "EXPIRED" | "FLAGGED" | "IMPORTED" | "PRIORITIZED" | "CAPACITY" | "REJECTED">;
          /** Location identifiers. */
          locationIds?: Array<string>;
          /**
           * Tags to add to existing tags.
           * @maxItems 10
           */
          addTags?: Array<"NO-SHOW" | "CANCELLED" | "REMOVED" | "ALERTED" | "ARRIVED" | "DELAYED" | "CONFIRMED" | "EXPIRED" | "FLAGGED" | "IMPORTED" | "PRIORITIZED" | "CAPACITY" | "REJECTED">;
          /**
           * Tags to remove from existing tags.
           * @maxItems 10
           */
          removeTags?: Array<"NO-SHOW" | "CANCELLED" | "REMOVED" | "ALERTED" | "ARRIVED" | "DELAYED" | "CONFIRMED" | "EXPIRED" | "FLAGGED" | "IMPORTED" | "PRIORITIZED" | "CAPACITY" | "REJECTED">;
          /** Up to 20 metadata keys, each at most 40 characters, with string values up to 500 characters. */
          metadata?: Record<string, string> | null;
        };
      };
      output: {
        /** Customer identifier. */
        id?: string;
        /** Customer name. */
        name?: string | null;
        /** External customer identifier. */
        externalId?: string | null;
        /** Customer email address. */
        email?: string | null;
        /** Customer phone number. */
        phone?: string | null;
        [key: string]: unknown;
      };
    };
  }
}

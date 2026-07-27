import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Planhat company. */
    "planhat.create_company": {
      input: {
        /**
         * The company name.
         * @minLength 1
         */
        name: string;
        /**
         * The Planhat user ID of the company owner.
         * @minLength 1
         */
        owner?: string;
        /**
         * The Planhat user ID of the company co-owner.
         * @minLength 1
         */
        coOwner?: string;
        /**
         * The company ID from your own system.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The company ID from an integration source.
         * @minLength 1
         */
        sourceId?: string;
        /**
         * The Planhat lifecycle phase name.
         * @minLength 1
         */
        phase?: string;
        /** The Planhat company status. */
        status?: "prospect" | "coming" | "customer" | "canceled" | "lost";
        /** Company domains. */
        domains?: Array<string>;
        /** String values. */
        tags?: Array<string>;
        /** The company description. */
        description?: string;
        /** The company physical address. */
        address?: string;
        /** The company country. */
        country?: string;
        /** The company city. */
        city?: string;
        /** The company postal code. */
        zip?: string;
        /** The company primary phone number. */
        phonePrimary?: string;
        /** The company website URL. */
        web?: string;
        /** Custom Planhat field values keyed by field name. */
        custom?: Record<string, unknown>;
        /** Additional documented top-level Planhat properties forwarded as-is. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** A normalized Planhat company resource. */
        company: {
          /** The Planhat company ID. */
          id?: string;
          /** The company name. */
          name?: string | null;
          /** The company ID from your own system. */
          externalId?: string | null;
          /** The company ID from an integration source. */
          sourceId?: string | null;
          /** The Planhat company status. */
          status?: string | null;
          /** The Planhat lifecycle phase name. */
          phase?: string | null;
          /** Raw object returned by the official Planhat API. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Planhat API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Planhat end user. */
    "planhat.create_enduser": {
      input: {
        /**
         * The end user email address.
         * @format email
         */
        email: string;
        /**
         * The related company ID. Use extid- or srcid-prefixed values to reference a company externalId or sourceId.
         * @minLength 1
         */
        companyId?: string;
        /** The end user first name. */
        firstName?: string;
        /** The end user last name. */
        lastName?: string;
        /** The end user display name. */
        name?: string;
        /**
         * The end user ID from your own system.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The end user ID from an integration source.
         * @minLength 1
         */
        sourceId?: string;
        /** The end user role or position. */
        position?: string;
        /** The end user phone number. */
        phone?: string;
        /** String values. */
        tags?: Array<string>;
        /** Whether the end user is a featured contact. */
        featured?: boolean;
        /** Whether Planhat should give this end user extra email weighting. */
        primary?: boolean;
        /** Whether the end user should be archived. */
        archived?: boolean;
        /** Additional end user email addresses. */
        otherEmails?: Array<string>;
        /** Whether the end user is unsubscribed from NPS. */
        npsUnsubscribed?: boolean;
        /** Custom Planhat field values keyed by field name. */
        custom?: Record<string, unknown>;
        /** Additional documented top-level Planhat properties forwarded as-is. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** A normalized Planhat end user resource. */
        enduser: {
          /** The Planhat end user ID. */
          id?: string;
          /** The end user email address. */
          email?: string | null;
          /** The end user display name. */
          name?: string | null;
          /** The end user first name. */
          firstName?: string | null;
          /** The end user last name. */
          lastName?: string | null;
          /** The related Planhat company ID. */
          companyId?: string | null;
          /** The related Planhat company name. */
          companyName?: string | null;
          /** The end user ID from your own system. */
          externalId?: string | null;
          /** The end user ID from an integration source. */
          sourceId?: string | null;
          /** Raw object returned by the official Planhat API. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Planhat API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Planhat company by ID, externalId, or sourceId. */
    "planhat.get_company": {
      input: {
        /**
         * The Planhat company ID. Use extid- or srcid-prefixed values to reference externalId or sourceId.
         * @minLength 1
         */
        companyId: string;
      };
      output: {
        /** A normalized Planhat company resource. */
        company: {
          /** The Planhat company ID. */
          id?: string;
          /** The company name. */
          name?: string | null;
          /** The company ID from your own system. */
          externalId?: string | null;
          /** The company ID from an integration source. */
          sourceId?: string | null;
          /** The Planhat company status. */
          status?: string | null;
          /** The Planhat lifecycle phase name. */
          phase?: string | null;
          /** Raw object returned by the official Planhat API. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Planhat API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Planhat end user by ID, externalId, or sourceId. */
    "planhat.get_enduser": {
      input: {
        /**
         * The Planhat end user ID. Use extid- or srcid-prefixed values to reference externalId or sourceId.
         * @minLength 1
         */
        enduserId: string;
      };
      output: {
        /** A normalized Planhat end user resource. */
        enduser: {
          /** The Planhat end user ID. */
          id?: string;
          /** The end user email address. */
          email?: string | null;
          /** The end user display name. */
          name?: string | null;
          /** The end user first name. */
          firstName?: string | null;
          /** The end user last name. */
          lastName?: string | null;
          /** The related Planhat company ID. */
          companyId?: string | null;
          /** The related Planhat company name. */
          companyName?: string | null;
          /** The end user ID from your own system. */
          externalId?: string | null;
          /** The end user ID from an integration source. */
          sourceId?: string | null;
          /** Raw object returned by the official Planhat API. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Planhat API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Planhat companies with offset pagination. */
    "planhat.list_companies": {
      input: {
        /**
         * Filter by one or more comma-separated Planhat company IDs.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Maximum number of companies to return.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * Zero-based list offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Property to sort by. Prefix with - for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * Comma-separated properties to include in the response.
         * @minLength 1
         */
        select?: string;
      };
      output: {
        /** Companies returned by Planhat. */
        companies: Array<{
          /** The Planhat company ID. */
          id?: string;
          /** The company name. */
          name?: string | null;
          /** The company ID from your own system. */
          externalId?: string | null;
          /** The company ID from an integration source. */
          sourceId?: string | null;
          /** The Planhat company status. */
          status?: string | null;
          /** The Planhat lifecycle phase name. */
          phase?: string | null;
          /** Raw object returned by the official Planhat API. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Number of companies returned in this page. */
        count: number;
        /** Raw company objects returned by Planhat. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Planhat end users with offset pagination. */
    "planhat.list_endusers": {
      input: {
        /**
         * Filter by one or more comma-separated Planhat company IDs.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Maximum number of end users to return.
         * @minimum 1
         * @maximum 2000
         */
        limit?: number;
        /**
         * Zero-based list offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Property to sort by. Prefix with - for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * Comma-separated properties to include in the response.
         * @minLength 1
         */
        select?: string;
        /** Whether archived end users should be included. */
        archived?: boolean;
        /**
         * Filter by email address.
         * @format email
         */
        email?: string;
        /**
         * Filter by Planhat end user ID.
         * @minLength 1
         */
        euId?: string;
      };
      output: {
        /** End users returned by Planhat. */
        endusers: Array<{
          /** The Planhat end user ID. */
          id?: string;
          /** The end user email address. */
          email?: string | null;
          /** The end user display name. */
          name?: string | null;
          /** The end user first name. */
          firstName?: string | null;
          /** The end user last name. */
          lastName?: string | null;
          /** The related Planhat company ID. */
          companyId?: string | null;
          /** The related Planhat company name. */
          companyName?: string | null;
          /** The end user ID from your own system. */
          externalId?: string | null;
          /** The end user ID from an integration source. */
          sourceId?: string | null;
          /** Raw object returned by the official Planhat API. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Number of end users returned in this page. */
        count: number;
        /** Raw end user objects returned by Planhat. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Update a Planhat company by ID, externalId, or sourceId. */
    "planhat.update_company": {
      input: {
        /**
         * The Planhat company ID. Use extid- or srcid-prefixed values to reference externalId or sourceId.
         * @minLength 1
         */
        companyId: string;
        /**
         * The company name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Planhat user ID of the company owner.
         * @minLength 1
         */
        owner?: string;
        /**
         * The Planhat user ID of the company co-owner.
         * @minLength 1
         */
        coOwner?: string;
        /**
         * The company ID from your own system.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The company ID from an integration source.
         * @minLength 1
         */
        sourceId?: string;
        /**
         * The Planhat lifecycle phase name.
         * @minLength 1
         */
        phase?: string;
        /** The Planhat company status. */
        status?: "prospect" | "coming" | "customer" | "canceled" | "lost";
        /** Company domains. */
        domains?: Array<string>;
        /** String values. */
        tags?: Array<string>;
        /** The company description. */
        description?: string;
        /** The company physical address. */
        address?: string;
        /** The company country. */
        country?: string;
        /** The company city. */
        city?: string;
        /** The company postal code. */
        zip?: string;
        /** The company primary phone number. */
        phonePrimary?: string;
        /** The company website URL. */
        web?: string;
        /** Custom Planhat field values keyed by field name. */
        custom?: Record<string, unknown>;
        /** Additional documented top-level Planhat properties forwarded as-is. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** A normalized Planhat company resource. */
        company: {
          /** The Planhat company ID. */
          id?: string;
          /** The company name. */
          name?: string | null;
          /** The company ID from your own system. */
          externalId?: string | null;
          /** The company ID from an integration source. */
          sourceId?: string | null;
          /** The Planhat company status. */
          status?: string | null;
          /** The Planhat lifecycle phase name. */
          phase?: string | null;
          /** Raw object returned by the official Planhat API. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Planhat API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Planhat end user by ID, externalId, or sourceId. */
    "planhat.update_enduser": {
      input: {
        /**
         * The Planhat end user ID. Use extid- or srcid-prefixed values to reference externalId or sourceId.
         * @minLength 1
         */
        enduserId: string;
        /**
         * The end user email address.
         * @format email
         */
        email?: string;
        /**
         * The related company ID. Use extid- or srcid-prefixed values to reference a company externalId or sourceId.
         * @minLength 1
         */
        companyId?: string;
        /** The end user first name. */
        firstName?: string;
        /** The end user last name. */
        lastName?: string;
        /** The end user display name. */
        name?: string;
        /**
         * The end user ID from your own system.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The end user ID from an integration source.
         * @minLength 1
         */
        sourceId?: string;
        /** The end user role or position. */
        position?: string;
        /** The end user phone number. */
        phone?: string;
        /** String values. */
        tags?: Array<string>;
        /** Whether the end user is a featured contact. */
        featured?: boolean;
        /** Whether Planhat should give this end user extra email weighting. */
        primary?: boolean;
        /** Whether the end user should be archived. */
        archived?: boolean;
        /** Additional end user email addresses. */
        otherEmails?: Array<string>;
        /** Whether the end user is unsubscribed from NPS. */
        npsUnsubscribed?: boolean;
        /** Custom Planhat field values keyed by field name. */
        custom?: Record<string, unknown>;
        /** Additional documented top-level Planhat properties forwarded as-is. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** A normalized Planhat end user resource. */
        enduser: {
          /** The Planhat end user ID. */
          id?: string;
          /** The end user email address. */
          email?: string | null;
          /** The end user display name. */
          name?: string | null;
          /** The end user first name. */
          firstName?: string | null;
          /** The end user last name. */
          lastName?: string | null;
          /** The related Planhat company ID. */
          companyId?: string | null;
          /** The related Planhat company name. */
          companyName?: string | null;
          /** The end user ID from your own system. */
          externalId?: string | null;
          /** The end user ID from an integration source. */
          sourceId?: string | null;
          /** Raw object returned by the official Planhat API. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Planhat API. */
        raw: Record<string, unknown>;
      };
    };
  }
}

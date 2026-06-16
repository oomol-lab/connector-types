import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich one company by website, social, or business profile identifier with Harmonic. */
    "harmonic_ai.enrich_company": {
      input: {
        /**
         * Company website URL.
         * @format uri
         */
        website_url?: string;
        /**
         * Company website domain.
         * @minLength 1
         */
        website_domain?: string;
        /**
         * Company LinkedIn URL.
         * @format uri
         */
        linkedin_url?: string;
        /**
         * Company Crunchbase URL.
         * @format uri
         */
        crunchbase_url?: string;
        /**
         * Company PitchBook URL.
         * @format uri
         */
        pitchbook_url?: string;
        /**
         * Company X or Twitter URL.
         * @format uri
         */
        twitter_url?: string;
        /**
         * Company Instagram URL.
         * @format uri
         */
        instagram_url?: string;
        /**
         * Company Facebook URL.
         * @format uri
         */
        facebook_url?: string;
        /**
         * Company AngelList URL.
         * @format uri
         */
        angellist_url?: string;
        /**
         * Company Monster URL.
         * @format uri
         */
        monster_url?: string;
        /**
         * Company Indeed URL.
         * @format uri
         */
        indeed_url?: string;
        /**
         * Company Stack Overflow URL.
         * @format uri
         */
        stackoverflow_url?: string;
      };
      output: {
        /** HTTP status returned by Harmonic for the enrichment request. */
        status: number;
        /** A Harmonic company or person profile. */
        entity?: {
          /** The Harmonic entity URN. */
          entity_urn?: string;
          /** The Harmonic numeric ID. */
          id?: number;
          [key: string]: unknown;
        };
        /** Metadata returned when Harmonic starts or reports an enrichment job instead of returning a fresh entity. */
        enrichment?: {
          /** The Harmonic enrichment URN. */
          enrichment_urn?: string;
          /** The Harmonic enrichment ID. */
          enrichment_id?: string;
          /** Human-readable enrichment status message. */
          message?: string;
          [key: string]: unknown;
        };
        /** Raw object returned by the Harmonic API. */
        raw: Record<string, unknown>;
      };
    };
    /** Enrich one person by LinkedIn URL or email address with Harmonic. */
    "harmonic_ai.enrich_person": {
      input: {
        /**
         * Person LinkedIn URL.
         * @format uri
         */
        linkedin_url?: string;
        /**
         * Person email address.
         * @format email
         */
        email?: string;
      };
      output: {
        /** HTTP status returned by Harmonic for the enrichment request. */
        status: number;
        /** A Harmonic company or person profile. */
        entity?: {
          /** The Harmonic entity URN. */
          entity_urn?: string;
          /** The Harmonic numeric ID. */
          id?: number;
          [key: string]: unknown;
        };
        /** Metadata returned when Harmonic starts or reports an enrichment job instead of returning a fresh entity. */
        enrichment?: {
          /** The Harmonic enrichment URN. */
          enrichment_urn?: string;
          /** The Harmonic enrichment ID. */
          enrichment_id?: string;
          /** Human-readable enrichment status message. */
          message?: string;
          [key: string]: unknown;
        };
        /** Raw object returned by the Harmonic API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a Harmonic company profile by numeric ID or full company URN. */
    "harmonic_ai.get_company": {
      input: {
        /** A Harmonic numeric ID or full entity URN. */
        id_or_urn: number | string;
        /**
         * Optional output fields to include for better upstream performance.
         * @minItems 1
         */
        include_fields?: Array<string>;
      };
      output: {
        /** The Harmonic entity URN. */
        entity_urn?: string;
        /** The Harmonic numeric ID. */
        id?: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve employee person URNs for a Harmonic company with optional filters. */
    "harmonic_ai.get_company_employees": {
      input: {
        /** A Harmonic numeric ID or full entity URN. */
        id_or_urn: number | string;
        /** Employee group to retrieve. */
        employee_group_type?: "ALL" | "FOUNDERS_AND_CEO" | "EXECUTIVES" | "FOUNDERS" | "LEADERSHIP" | "NON_LEADERSHIP" | "ADVISORS" | "NON_PARTNERS";
        /**
         * Number of employees to return.
         * @exclusiveMinimum 0
         */
        size?: number;
        /**
         * Starting page index.
         * @minimum 0
         */
        page?: number;
        /** Team connection filter. */
        user_connection_status?: "TEAM_CONNECTION" | "NO_CONNECTION";
        /** Employment status filter. */
        employee_status?: "ACTIVE" | "ACTIVE_AND_NOT_ACTIVE" | "NOT_ACTIVE";
      };
      output: {
        /** Total number of matching employees. */
        count: number;
        /** Pagination metadata returned by Harmonic. */
        page_info: {
          /** The current cursor value. */
          current?: string;
          /** The cursor value for the next page. */
          next?: string;
          /** Whether another page is available. */
          has_next?: boolean;
          [key: string]: unknown;
        } | null;
        /** Harmonic person URNs returned for the requested employee page. */
        results: Array<string>;
      };
    };
    /** Check Harmonic enrichment job statuses by enrichment IDs or URNs. */
    "harmonic_ai.get_enrichment_status": {
      input: {
        /**
         * Enrichment UUIDs to check.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Enrichment URNs to check.
         * @minItems 1
         */
        urns?: Array<string>;
      };
      output: {
        /** Enrichment statuses returned by Harmonic. */
        statuses: Array<{
          /** The Harmonic enrichment URN. */
          entity_urn?: string;
          /** The enrichment job status. */
          status?: "QUEUED" | "IN_PROGRESS" | "COMPLETE" | "FAILED" | "NOT_FOUND";
          /** Status message returned by Harmonic. */
          message?: string;
          /** The resulting company or person URN. */
          enriched_entity_urn?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve a Harmonic person profile by numeric ID or full person URN. */
    "harmonic_ai.get_person": {
      input: {
        /** A Harmonic numeric ID or full entity URN. */
        id_or_urn: number | string;
        /**
         * Optional output fields to include for better upstream performance.
         * @minItems 1
         */
        include_fields?: Array<string>;
      };
      output: {
        /** The Harmonic entity URN. */
        entity_urn?: string;
        /** The Harmonic numeric ID. */
        id?: number;
        [key: string]: unknown;
      };
    };
  }
}

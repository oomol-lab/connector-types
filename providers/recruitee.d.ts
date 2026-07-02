import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Manually create a Recruitee candidate with JSON fields and optional remote CV URL. */
    "recruitee.create_candidate": {
      input: {
        /**
         * Candidate name.
         * @minLength 1
         */
        name: string;
        /** Candidate email addresses. */
        emails?: Array<string>;
        /** Candidate phone numbers. */
        phones?: Array<string>;
        /** Candidate social profile URLs. */
        socialLinks?: Array<string>;
        /** Candidate links. */
        links?: Array<string>;
        /** Candidate cover letter text. */
        coverLetter?: string;
        /** Candidate source tags. */
        sources?: Array<string>;
        /**
         * URL to a CV or resume file hosted outside Recruitee. Use this instead of multipart file upload.
         * @format uri
         */
        remoteCvUrl?: string;
        /** Offer IDs to assign the candidate to. */
        offers?: Array<number>;
        /**
         * Single offer ID to assign the candidate to.
         * @minimum 1
         */
        offerId?: number;
      };
      output: {
        /** A normalized Recruitee candidate summary. */
        candidate: {
          /**
           * The Recruitee candidate ID.
           * @minimum 1
           */
          id?: number;
          /** The candidate name. */
          name?: string | null;
          /** Candidate email addresses returned by Recruitee. */
          emails?: Array<string>;
          /** Candidate phone numbers returned by Recruitee. */
          phones?: Array<string>;
          /** The candidate source. */
          source?: string | null;
          /** The ISO 8601 timestamp when the candidate was created. */
          created_at?: string | null;
          /** The ISO 8601 timestamp when the candidate was last updated. */
          updated_at?: string | null;
          /** Whether the candidate is deleted, or null when absent. */
          deleted?: boolean | null;
          /** Candidate placement objects returned by Recruitee. */
          placements?: Array<Record<string, unknown>>;
          /** The raw Recruitee candidate object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Reference objects included by Recruitee, such as related offers, stages, and admins. */
        references: Array<Record<string, unknown>>;
        /** The raw Recruitee create candidate response. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one Recruitee offer by ID using the official ATS API. */
    "recruitee.get_offer": {
      input: {
        /**
         * The Recruitee offer ID to retrieve.
         * @minimum 1
         */
        offerId: number;
      };
      output: {
        /** A normalized Recruitee offer summary. */
        offer: {
          /**
           * The Recruitee offer ID.
           * @minimum 1
           */
          id?: number;
          /** The offer title. */
          title?: string | null;
          /** The URL-friendly offer slug. */
          slug?: string | null;
          /** The offer type returned by Recruitee. */
          kind?: string | null;
          /** The offer status returned by Recruitee. */
          status?: string | null;
          /** The offer location text. */
          location?: string | null;
          /** The ISO 8601 timestamp when the offer was created. */
          created_at?: string | null;
          /** The ISO 8601 timestamp when the offer was last updated. */
          updated_at?: string | null;
          /** The raw Recruitee offer object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Recruitee get offer response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Recruitee company offers using the official ATS API, optionally filtered by scope and view mode. */
    "recruitee.list_offers": {
      input: Record<string, never>;
      output: {
        /** The normalized offers returned by Recruitee. */
        offers: Array<{
          /**
           * The Recruitee offer ID.
           * @minimum 1
           */
          id?: number;
          /** The offer title. */
          title?: string | null;
          /** The URL-friendly offer slug. */
          slug?: string | null;
          /** The offer type returned by Recruitee. */
          kind?: string | null;
          /** The offer status returned by Recruitee. */
          status?: string | null;
          /** The offer location text. */
          location?: string | null;
          /** The ISO 8601 timestamp when the offer was created. */
          created_at?: string | null;
          /** The ISO 8601 timestamp when the offer was last updated. */
          updated_at?: string | null;
          /** The raw Recruitee offer object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw Recruitee list offers response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Recruitee candidates with pagination, sorting, and official filters_json filters. */
    "recruitee.search_candidates": {
      input: {
        /**
         * Number of candidates to return. Recruitee defaults to 60 and documents 10000 as the maximum single-call limit.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * One-based page number for Recruitee candidate search.
         * @minimum 1
         */
        page?: number;
        /**
         * Sort key accepted by Recruitee, such as created_at_desc or candidate_name_asc.
         * @minLength 1
         */
        sortBy?: string;
        /** Candidate search filters that will be serialized as filters_json. */
        filters?: Array<Record<string, unknown>>;
      };
      output: {
        /** The normalized candidates returned by Recruitee. */
        candidates: Array<{
          /**
           * The Recruitee candidate ID.
           * @minimum 1
           */
          id?: number;
          /** The candidate name. */
          name?: string | null;
          /** Candidate email addresses returned by Recruitee. */
          emails?: Array<string>;
          /** Candidate phone numbers returned by Recruitee. */
          phones?: Array<string>;
          /** The candidate source. */
          source?: string | null;
          /** The ISO 8601 timestamp when the candidate was created. */
          created_at?: string | null;
          /** The ISO 8601 timestamp when the candidate was last updated. */
          updated_at?: string | null;
          /** Whether the candidate is deleted, or null when absent. */
          deleted?: boolean | null;
          /** Candidate placement objects returned by Recruitee. */
          placements?: Array<Record<string, unknown>>;
          /** The raw Recruitee candidate object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * The total number of candidates matching the search.
         * @minimum 0
         */
        total: number;
        /** The Recruitee aggregations payload, or null when absent. */
        aggregations: unknown;
        /** The raw Recruitee candidate search response. */
        raw: Record<string, unknown>;
      };
    };
  }
}

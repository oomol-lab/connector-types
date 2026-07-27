import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Breezy HR candidate by company, position, and candidate ID. */
    "breezy_hr.get_candidate": {
      input: {
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        companyId: string;
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        positionId: string;
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        candidateId: string;
      };
      output: {
        /** A Breezy HR candidate record. */
        candidate: {
          /** The Breezy HR candidate ID. */
          _id?: string;
          /** The candidate metadata ID. */
          meta_id?: string;
          /** The candidate name. */
          name?: string;
          /** The candidate email address when present. */
          email_address?: string | null;
          /** The candidate phone number when present. */
          phone_number?: string | null;
          /** The candidate headline when present. */
          headline?: string | null;
          /** The candidate origin. */
          origin?: string;
          /** The candidate creation timestamp. */
          creation_date?: string;
          /** The candidate update timestamp. */
          updated_date?: string;
          /** The candidate's current stage. */
          stage?: Record<string, unknown>;
          /** The candidate source when present. */
          source?: Record<string, unknown> | null;
          /** Tags attached to the candidate. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
        /** The raw Breezy HR candidate response. */
        raw: unknown;
      };
    };
    /** Retrieve one Breezy HR company by ID. */
    "breezy_hr.get_company": {
      input: {
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        companyId: string;
      };
      output: {
        /** A Breezy HR company profile. */
        company: {
          /** The Breezy HR company ID. */
          _id?: string;
          /** The company name. */
          name?: string;
          /** The company friendly ID. */
          friendly_id?: string;
          /** The number of members in the company. */
          member_count?: number;
          /** The company initials. */
          initial?: string;
          /** The company creation timestamp. */
          creation_date?: string;
          /** The company update timestamp. */
          updated_date?: string;
          [key: string]: unknown;
        };
        /** The raw Breezy HR company response. */
        raw: unknown;
      };
    };
    /** Retrieve the currently authenticated Breezy HR user profile. */
    "breezy_hr.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Breezy HR user profile. */
        user: {
          /** The Breezy HR user ID. */
          _id?: string;
          /** The user's email address. */
          email_address?: string;
          /** The user's display name. */
          name?: string;
          /** The user's username. */
          username?: string;
          /** The user's initials. */
          initial?: string;
          /** The user creation timestamp. */
          creation_date?: string;
          /** The user update timestamp. */
          updated_date?: string;
          [key: string]: unknown;
        };
        /** The raw Breezy HR user response. */
        raw: unknown;
      };
    };
    /** Retrieve one Breezy HR position by company and position ID. */
    "breezy_hr.get_position": {
      input: {
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        companyId: string;
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        positionId: string;
      };
      output: {
        /** A Breezy HR position record. */
        position: {
          /** The Breezy HR position ID. */
          _id?: string;
          /** The position name. */
          name?: string;
          /** The position friendly ID. */
          friendly_id?: string;
          /** The position lifecycle state. */
          state?: string;
          /** The position department when present. */
          department?: string | null;
          /** The position description. */
          description?: string;
          /** The position creation timestamp. */
          creation_date?: string;
          /** The position update timestamp. */
          updated_date?: string;
          [key: string]: unknown;
        };
        /** The raw Breezy HR position response. */
        raw: unknown;
      };
    };
    /** List Breezy HR companies available to the connected account. */
    "breezy_hr.list_companies": {
      input: Record<string, never>;
      output: {
        /** Companies returned by Breezy HR. */
        companies: Array<{
          /** The Breezy HR company ID. */
          _id?: string;
          /** The company name. */
          name?: string;
          /** The company friendly ID. */
          friendly_id?: string;
          /** The number of members in the company. */
          member_count?: number;
          /** The company initials. */
          initial?: string;
          /** The company creation timestamp. */
          creation_date?: string;
          /** The company update timestamp. */
          updated_date?: string;
          [key: string]: unknown;
        }>;
        /** The raw Breezy HR companies response. */
        raw: unknown;
      };
    };
    /** List candidates on one Breezy HR position with optional page filters. */
    "breezy_hr.list_position_candidates": {
      input: {
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        companyId: string;
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        positionId: string;
        /**
         * The number of candidates to return when opting into pagination. Breezy caps this value at 50.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The zero-based Breezy HR page number.
         * @minimum 0
         */
        page?: number;
        /**
         * The Breezy HR sort field, such as updated.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Candidates returned by Breezy HR. */
        candidates: Array<{
          /** The Breezy HR candidate ID. */
          _id?: string;
          /** The candidate metadata ID. */
          meta_id?: string;
          /** The candidate name. */
          name?: string;
          /** The candidate email address when present. */
          email_address?: string | null;
          /** The candidate phone number when present. */
          phone_number?: string | null;
          /** The candidate headline when present. */
          headline?: string | null;
          /** The candidate origin. */
          origin?: string;
          /** The candidate creation timestamp. */
          creation_date?: string;
          /** The candidate update timestamp. */
          updated_date?: string;
          /** The candidate's current stage. */
          stage?: Record<string, unknown>;
          /** The candidate source when present. */
          source?: Record<string, unknown> | null;
          /** Tags attached to the candidate. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The raw Breezy HR candidates response. */
        raw: unknown;
      };
    };
    /** List Breezy HR positions for a company with optional state and page filters. */
    "breezy_hr.list_positions": {
      input: {
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        companyId: string;
        /** Lifecycle state used to filter Breezy HR positions. */
        state?: "published" | "draft" | "archived" | "closed" | "pending";
        /**
         * The number of positions to return when opting into pagination.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The zero-based Breezy HR page number.
         * @minimum 0
         */
        page?: number;
        /**
         * The Breezy HR sort field, such as updated.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Positions returned by Breezy HR. */
        positions: Array<{
          /** The Breezy HR position ID. */
          _id?: string;
          /** The position name. */
          name?: string;
          /** The position friendly ID. */
          friendly_id?: string;
          /** The position lifecycle state. */
          state?: string;
          /** The position department when present. */
          department?: string | null;
          /** The position description. */
          description?: string;
          /** The position creation timestamp. */
          creation_date?: string;
          /** The position update timestamp. */
          updated_date?: string;
          [key: string]: unknown;
        }>;
        /** The raw Breezy HR positions response. */
        raw: unknown;
      };
    };
    /** Search company-wide Breezy HR candidates by exact normalized email address. */
    "breezy_hr.search_candidates_by_email": {
      input: {
        /**
         * The Breezy HR resource ID.
         * @minLength 1
         */
        companyId: string;
        /**
         * The candidate email address to match exactly.
         * @minLength 1
         * @format email
         */
        emailAddress: string;
      };
      output: {
        /** Candidate matches returned by Breezy HR. */
        candidates: Array<{
          /** The Breezy HR candidate ID. */
          _id?: string;
          /** The candidate name. */
          name?: string;
          /** The candidate creation timestamp. */
          creation_date?: string;
          /** The position associated with the candidate search match. */
          position?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw Breezy HR candidate search response. */
        raw: unknown;
      };
    };
  }
}

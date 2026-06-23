import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a note on a Lever opportunity. */
    "lever.create_opportunity_note": {
      input: {
        /**
         * The Lever object ID.
         * @minLength 1
         */
        opportunityId: string;
        /**
         * The note text to add to the opportunity.
         * @minLength 1
         */
        value: string;
      };
      output: {
        /** The raw object returned by Lever. */
        note: Record<string, unknown>;
      };
    };
    /** Retrieve one Lever opportunity by ID. */
    "lever.get_opportunity": {
      input: {
        /**
         * The Lever object ID.
         * @minLength 1
         */
        opportunityId: string;
      };
      output: {
        /** The raw object returned by Lever. */
        opportunity: Record<string, unknown>;
      };
    };
    /** Retrieve one Lever posting by ID. */
    "lever.get_posting": {
      input: {
        /**
         * The Lever object ID.
         * @minLength 1
         */
        postingId: string;
      };
      output: {
        /** The raw object returned by Lever. */
        posting: Record<string, unknown>;
      };
    };
    /** List Lever opportunities with optional timestamp, posting, stage, archive, contact, and expansion filters. */
    "lever.list_opportunities": {
      input: {
        /**
         * The pagination cursor returned by Lever.
         * @minLength 1
         */
        offset?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** A Unix timestamp in milliseconds. */
        createdAtStart?: number;
        /** A Unix timestamp in milliseconds. */
        createdAtEnd?: number;
        /** A Unix timestamp in milliseconds. */
        updatedAtStart?: number;
        /** A Unix timestamp in milliseconds. */
        updatedAtEnd?: number;
        /**
         * Only return opportunities currently in this stage ID.
         * @minLength 1
         */
        stageId?: string;
        /**
         * Only return opportunities associated with this posting ID.
         * @minLength 1
         */
        postingId?: string;
        /**
         * Only return archived opportunities with this archive reason ID.
         * @minLength 1
         */
        archiveReasonId?: string;
        /**
         * Only return opportunities for this contact ID.
         * @minLength 1
         */
        contact?: string;
        /**
         * Related opportunity objects to expand in Lever's response.
         * @minItems 1
         */
        expand?: Array<"applications" | "stage" | "contact" | "comments" | "tasks" | "notes" | "phones" | "emails">;
      };
      output: {
        /** Pagination metadata returned by Lever. */
        page: {
          /** Whether Lever indicates that another page is available. */
          hasNext: boolean;
          /** The cursor to use for the next page when available. */
          next: string | null;
        };
        /** Opportunities returned by Lever. */
        opportunities: Array<Record<string, unknown>>;
      };
    };
    /** List notes attached to a Lever opportunity. */
    "lever.list_opportunity_notes": {
      input: {
        /**
         * The Lever object ID.
         * @minLength 1
         */
        opportunityId: string;
        /**
         * The pagination cursor returned by Lever.
         * @minLength 1
         */
        offset?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Pagination metadata returned by Lever. */
        page: {
          /** Whether Lever indicates that another page is available. */
          hasNext: boolean;
          /** The cursor to use for the next page when available. */
          next: string | null;
        };
        /** Notes returned by Lever. */
        notes: Array<Record<string, unknown>>;
      };
    };
    /** List Lever job postings with optional state, owner, location, and team filters. */
    "lever.list_postings": {
      input: {
        /**
         * The pagination cursor returned by Lever.
         * @minLength 1
         */
        offset?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The Lever posting state. */
        state?: "published" | "internal" | "closed" | "draft";
        /**
         * Only return postings assigned to this team.
         * @minLength 1
         */
        team?: string;
        /**
         * Only return postings for this location.
         * @minLength 1
         */
        location?: string;
        /**
         * Only return postings assigned to this department.
         * @minLength 1
         */
        department?: string;
        /**
         * Only return postings owned by this Lever user ID.
         * @minLength 1
         */
        owner?: string;
        /**
         * Only return postings with this posting tag.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Pagination metadata returned by Lever. */
        page: {
          /** Whether Lever indicates that another page is available. */
          hasNext: boolean;
          /** The cursor to use for the next page when available. */
          next: string | null;
        };
        /** Postings returned by Lever. */
        postings: Array<Record<string, unknown>>;
      };
    };
  }
}

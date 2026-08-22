import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the Humaans person record that owns the current API access token using public:read or private:read access. */
    "humaans.get_current_person": {
      input: Record<string, never>;
      output: {
        /** A Humaans person record. */
        person: {
          /**
           * The unique Humaans person identifier.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Humaans person by identifier using public:read or private:read access. */
    "humaans.get_person": {
      input: {
        /**
         * The unique Humaans person identifier.
         * @minLength 1
         */
        personId: string;
      };
      output: {
        /** A Humaans person record. */
        person: {
          /**
           * The unique Humaans person identifier.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the scopes granted to the current Humaans API access token. */
    "humaans.get_token_info": {
      input: Record<string, never>;
      output: {
        /** Scopes granted to the current Humaans access token. */
        scopes: Array<string>;
      };
    };
    /** List Humaans people with common exact-match filters and offset pagination using public:read or private:read access. */
    "humaans.list_people": {
      input: {
        /**
         * Filter people by exact first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Filter people by exact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Filter people by exact preferred name.
         * @minLength 1
         */
        preferredName?: string;
        /**
         * Filter people by exact work email address.
         * @format email
         */
        email?: string;
        /**
         * Filter people by exact personal email address.
         * @format email
         */
        personalEmail?: string;
        /**
         * Filter people by Humaans Space identifier.
         * @minLength 1
         */
        spaceId?: string;
        /**
         * Filter people by Humaans team identifier.
         * @minLength 1
         */
        teamId?: string;
        /** Filter people by Humaans employment status. */
        status?: "all" | "newHire" | "active" | "offboarded";
        /**
         * The maximum number of people to return, from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The number of matching people to skip before returning results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /**
         * The total number of people matching the request.
         * @minimum 0
         */
        total: number;
        /**
         * The page size reported by Humaans.
         * @minimum 1
         * @maximum 250
         */
        limit: number;
        /**
         * The number of matching people skipped by Humaans.
         * @minimum 0
         */
        skip: number;
        /** People returned for this page. */
        people: Array<{
          /**
           * The unique Humaans person identifier.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}

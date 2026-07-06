import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the balance for the Daffy account associated with the API key. */
    "daffy.get_balance": {
      input: Record<string, never>;
      output: {
        /** A raw Daffy resource object. */
        balance: Record<string, unknown>;
      };
    };
    /** Get the Daffy user associated with the API key. */
    "daffy.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A raw Daffy resource object. */
        user: Record<string, unknown>;
      };
    };
    /** Get a Daffy nonprofit by EIN. */
    "daffy.get_nonprofit": {
      input: {
        /**
         * The nonprofit EIN used by Daffy.
         * @minLength 1
         * @pattern \S
         */
        ein: string;
      };
      output: {
        /** A raw Daffy resource object. */
        nonprofit: Record<string, unknown>;
      };
    };
    /** Get a Daffy user by username. */
    "daffy.get_user": {
      input: {
        /**
         * The Daffy username.
         * @minLength 1
         * @pattern \S
         */
        username: string;
      };
      output: {
        /** A raw Daffy resource object. */
        user: Record<string, unknown>;
      };
    };
    /** Get a specific Daffy donation for a specific user. */
    "daffy.get_user_donation": {
      input: {
        /** The Daffy user identifier. */
        userId: string | number;
        /** The Daffy donation identifier. */
        donationId: string | number;
      };
      output: {
        /** A raw Daffy resource object. */
        donation: Record<string, unknown>;
      };
    };
    /** List contributions for the Daffy account associated with the API key. */
    "daffy.list_contributions": {
      input: {
        /**
         * The Daffy result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The pagination metadata returned by Daffy. */
        meta: {
          /** The total number of records returned by Daffy. */
          count?: number | null;
          /** The current page number returned by Daffy. */
          page?: number | null;
          /** The last page number returned by Daffy. */
          last?: number | null;
          [key: string]: unknown;
        };
        /** The contributions returned by Daffy. */
        contributions: Array<Record<string, unknown>>;
      };
    };
    /** List donations for the Daffy account associated with the API key. */
    "daffy.list_donations": {
      input: {
        /**
         * The Daffy result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The pagination metadata returned by Daffy. */
        meta: {
          /** The total number of records returned by Daffy. */
          count?: number | null;
          /** The current page number returned by Daffy. */
          page?: number | null;
          /** The last page number returned by Daffy. */
          last?: number | null;
          [key: string]: unknown;
        };
        /** The donations returned by Daffy. */
        donations: Array<Record<string, unknown>>;
      };
    };
    /** List causes associated with a Daffy user. */
    "daffy.list_user_causes": {
      input: {
        /** The Daffy user identifier. */
        userId: string | number;
      };
      output: {
        /** The causes returned by Daffy. */
        causes: Array<Record<string, unknown>>;
      };
    };
    /** List Daffy donations for a specific user. */
    "daffy.list_user_donations": {
      input: {
        /** The Daffy user identifier. */
        userId: string | number;
        /**
         * The Daffy result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The pagination metadata returned by Daffy. */
        meta: {
          /** The total number of records returned by Daffy. */
          count?: number | null;
          /** The current page number returned by Daffy. */
          page?: number | null;
          /** The last page number returned by Daffy. */
          last?: number | null;
          [key: string]: unknown;
        };
        /** The donations returned by Daffy. */
        donations: Array<Record<string, unknown>>;
      };
    };
    /** Search Daffy nonprofits with optional cause and pagination filters. */
    "daffy.search_nonprofits": {
      input: {
        /**
         * The search query used to filter Daffy nonprofits.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * The Daffy cause identifier used to filter nonprofits.
         * @exclusiveMinimum 0
         */
        causeId?: number;
        /**
         * The Daffy result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The pagination metadata returned by Daffy. */
        meta: {
          /** The total number of records returned by Daffy. */
          count?: number | null;
          /** The current page number returned by Daffy. */
          page?: number | null;
          /** The last page number returned by Daffy. */
          last?: number | null;
          [key: string]: unknown;
        };
        /** The nonprofits returned by Daffy. */
        nonprofits: Array<Record<string, unknown>>;
      };
    };
  }
}

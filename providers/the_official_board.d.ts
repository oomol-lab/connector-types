import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find executives by an exact email address or LinkedIn profile URL. */
    "the_official_board.find_executive": {
      input: {
        /**
         * The executive email address to match.
         * @format email
         */
        email?: string;
        /**
         * The executive LinkedIn profile URL to match.
         * @format uri
         */
        linkedin?: string;
      };
      output: {
        /** The matching result items. */
        result: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve a company organizational chart and its executives in structured JSON. */
    "the_official_board.get_company_org_chart": {
      input: {
        /**
         * The company unique identifier returned by search_companies.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A result item returned by The Official Board. Fields vary by endpoint and available source data. */
        result: Record<string, unknown>;
      };
    };
    /** Retrieve detailed biography information for an executive. */
    "the_official_board.get_executive_biography": {
      input: {
        /**
         * The executive biography identifier returned by an executive search.
         * @minLength 1
         */
        bioId: string;
      };
      output: {
        /** A result item returned by The Official Board. Fields vary by endpoint and available source data. */
        result: Record<string, unknown>;
      };
    };
    /** List the direct colleagues in an executive's organizational environment. */
    "the_official_board.list_direct_colleagues": {
      input: {
        /**
         * The executive biography identifier returned by an executive search.
         * @minLength 1
         */
        bioId: string;
      };
      output: {
        /** The matching result items. */
        result: Array<Record<string, unknown>>;
      };
    };
    /** List the main organizational chart changes for a company from the past 12 months. */
    "the_official_board.list_recent_org_chart_news": {
      input: {
        /**
         * The company unique identifier returned by search_companies.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The matching result items. */
        result: Array<Record<string, unknown>>;
      };
    };
    /** List recently modified organizational charts from the connected user's watchlist. */
    "the_official_board.list_watchlist_changes": {
      input: {
        /**
         * The number of changes to return.
         * @minimum 1
         */
        amount?: number;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The matching result items. */
        result: Array<Record<string, unknown>>;
      };
    };
    /** Find company organizational chart identifiers by company name. */
    "the_official_board.search_companies": {
      input: {
        /**
         * The full or partial company name to search for.
         * @minLength 1
         */
        companyName?: string;
        /**
         * The maximum number of matches to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        amount?: number;
      };
      output: {
        /** The matching result items. */
        result: Array<Record<string, unknown>>;
      };
    };
    /** Search executives by first name, last name, or full name. */
    "the_official_board.search_executives": {
      input: {
        /**
         * The executive first name, last name, or full name to search for.
         * @minLength 1
         */
        name: string;
        /**
         * The maximum number of matches to return, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        amount?: number;
      };
      output: {
        /** The matching result items. */
        result: Array<Record<string, unknown>>;
      };
    };
  }
}

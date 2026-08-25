import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the currently bookable options and resources for a YoPlanning availability. */
    "yoplanning.get_availability_details": {
      input: {
        /**
         * The YoPlanning team ID.
         * @format uuid
         */
        teamId: string;
        /**
         * The session group ID returned by a product availability.
         * @format uuid
         */
        availabilityId: string;
        /**
         * The ISO 639-1 language code used for translated product content.
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
      };
      output: {
        /** The bookable options and resources returned by the API. */
        availability: {
          /**
           * The YoPlanning session group ID.
           * @format uuid
           */
          id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one online product offered by a YoPlanning team. */
    "yoplanning.get_online_product": {
      input: {
        /**
         * The YoPlanning team ID.
         * @format uuid
         */
        teamId: string;
        /**
         * The YoPlanning online product ID.
         * @format uuid
         */
        productId: string;
      };
      output: {
        /** The online product returned by the API. */
        product: {
          /**
           * The YoPlanning online product ID.
           * @format uuid
           */
          id: string;
          /** The internal YoPlanning product name. */
          name: string;
          /**
           * The YoPlanning team ID that owns the product.
           * @format uuid
           */
          team: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one YoPlanning team by its ID. */
    "yoplanning.get_team": {
      input: {
        /**
         * The YoPlanning team ID.
         * @format uuid
         */
        teamId: string;
      };
      output: {
        /** The YoPlanning team returned by the API. */
        team: {
          /**
           * The YoPlanning team ID.
           * @format uuid
           */
          id: string;
          /** The YoPlanning team name. */
          name: string;
          [key: string]: unknown;
        };
      };
    };
    /** List products that a YoPlanning team currently offers for online sale. */
    "yoplanning.list_online_products": {
      input: {
        /**
         * The YoPlanning team ID.
         * @format uuid
         */
        teamId: string;
        /**
         * The maximum number of results to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The ISO 639-1 language code used for translated product content.
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /**
         * Return products with availability on or after this ISO 8601 date.
         * @format date
         */
        startDate?: string;
        /**
         * Return products with availability on or before this ISO 8601 date.
         * @format date
         */
        endDate?: string;
        /** The YoPlanning subcategory ID used to filter products. */
        subCategoryId?: number;
      };
      output: {
        /** The total number of matching resources. */
        count: number;
        /** A pagination URL or null when no page is available. */
        next: string | null;
        /** A pagination URL or null when no page is available. */
        previous: string | null;
        /** The online products returned for this page. */
        results: Array<{
          /**
           * The YoPlanning online product ID.
           * @format uuid
           */
          id: string;
          /** The internal YoPlanning product name. */
          name: string;
          /**
           * The YoPlanning team ID that owns the product.
           * @format uuid
           */
          team: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List bookable availability slots for one YoPlanning online product. */
    "yoplanning.list_product_availabilities": {
      input: {
        /**
         * The YoPlanning team ID.
         * @format uuid
         */
        teamId: string;
        /**
         * The YoPlanning online product ID.
         * @format uuid
         */
        productId: string;
        /**
         * The maximum number of results to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Return slots starting after this ISO 8601 date-time.
         * @format date-time
         */
        startDateAfter?: string;
        /**
         * Return slots starting before this ISO 8601 date-time.
         * @format date-time
         */
        startDateBefore?: string;
        /** Whether to return only active slots or include deleted slots. */
        status?: "created" | "all";
      };
      output: {
        /** The total number of matching resources. */
        count: number;
        /** A pagination URL or null when no page is available. */
        next: string | null;
        /** A pagination URL or null when no page is available. */
        previous: string | null;
        /** The availability slots returned for this page. */
        results: Array<{
          /**
           * The availability start date-time.
           * @format date-time
           */
          start_date: string;
          /**
           * The availability end date-time.
           * @format date-time
           */
          end_date: string;
          /**
           * The session group ID used to read availability details.
           * @format uuid
           */
          session_group?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the YoPlanning teams accessible to the authenticated API token. */
    "yoplanning.list_teams": {
      input: {
        /**
         * The maximum number of results to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The total number of matching resources. */
        count: number;
        /** A pagination URL or null when no page is available. */
        next: string | null;
        /** A pagination URL or null when no page is available. */
        previous: string | null;
        /** The YoPlanning teams returned for this page. */
        results: Array<{
          /**
           * The YoPlanning team ID.
           * @format uuid
           */
          id: string;
          /** The YoPlanning team name. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}

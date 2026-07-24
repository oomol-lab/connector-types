import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List HigherGov federal, state, and local agencies and their hierarchies. */
    "highergov.list_agencies": {
      input: {
        /** The HigherGov agency key to filter by. */
        agency_key?: number;
        /**
         * The result page number, starting from 1.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The number of records to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** The records returned for the requested page. */
        results: Array<Record<string, unknown>>;
        /** Pagination metadata returned by HigherGov. */
        meta: {
          /** The current pagination state. */
          pagination: {
            /** The current page number. */
            page: number;
            /** The total number of result pages. */
            pages: number;
            /** The total number of matching records. */
            count: number;
          };
        };
        /** Credential-free pagination links returned by HigherGov. */
        links: {
          /**
           * The first-page URL, or null when unavailable.
           * @format uri
           */
          first: string | null;
          /**
           * The last-page URL, or null when unavailable.
           * @format uri
           */
          last: string | null;
          /**
           * The next-page URL, or null when there is no next page.
           * @format uri
           */
          next: string | null;
          /**
           * The previous-page URL, or null when there is no previous page.
           * @format uri
           */
          prev: string | null;
        };
      };
    };
    /** List HigherGov federal prime contract awards using documented award filters. */
    "highergov.list_contracts": {
      input: {
        /** The government award ID to filter by. */
        award_id?: string;
        /** The HigherGov awardee key to filter by. */
        awardee_key?: number;
        /** The parent-level HigherGov awardee key to filter by. */
        awardee_key_parent?: number;
        /** The awardee Unique Entity Identifier to filter by. */
        awardee_uei?: string;
        /** The parent awardee Unique Entity Identifier to filter by. */
        awardee_uei_parent?: string;
        /** The HigherGov awarding agency key to filter by. */
        awarding_agency_key?: number;
        /**
         * Return contracts captured on or after this date.
         * @format date
         */
        captured_date?: string;
        /** The HigherGov funding agency key to filter by. */
        funding_agency_key?: number;
        /**
         * Return contracts modified on or after this date.
         * @format date
         */
        last_modified_date?: string;
        /** The award NAICS code to filter by. */
        naics_code?: string;
        /** The field and direction used to order results. */
        ordering?: "-action_date" | "-current_total_value_of_award" | "-last_modified_date" | "-period_of_performance_potential_end_date" | "-period_of_performance_start_date" | "-potential_total_value_of_award" | "-total_dollars_obligated" | "action_date" | "current_total_value_of_award" | "last_modified_date" | "period_of_performance_potential_end_date" | "period_of_performance_start_date" | "potential_total_value_of_award" | "total_dollars_obligated";
        /**
         * The result page number, starting from 1.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The number of records to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /** The government award ID of the parent award. */
        parent_award_id?: string;
        /** The Product Service Code to filter by. */
        psc_code?: string;
        /** The HigherGov saved search ID to apply. */
        search_id?: string;
        /** The HigherGov contract vehicle key to filter by. */
        vehicle_key?: number;
      };
      output: {
        /** The records returned for the requested page. */
        results: Array<Record<string, unknown>>;
        /** Pagination metadata returned by HigherGov. */
        meta: {
          /** The current pagination state. */
          pagination: {
            /** The current page number. */
            page: number;
            /** The total number of result pages. */
            pages: number;
            /** The total number of matching records. */
            count: number;
          };
        };
        /** Credential-free pagination links returned by HigherGov. */
        links: {
          /**
           * The first-page URL, or null when unavailable.
           * @format uri
           */
          first: string | null;
          /**
           * The last-page URL, or null when unavailable.
           * @format uri
           */
          last: string | null;
          /**
           * The next-page URL, or null when there is no next page.
           * @format uri
           */
          next: string | null;
          /**
           * The previous-page URL, or null when there is no previous page.
           * @format uri
           */
          prev: string | null;
        };
      };
    };
    /** List HigherGov NAICS industry classification codes and descriptions. */
    "highergov.list_naics_codes": {
      input: {
        /** The full or partial NAICS code to filter by. */
        naics_code?: string;
        /** The direction used to order results by NAICS code. */
        ordering?: "-naics_code" | "naics_code";
        /**
         * The result page number, starting from 1.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The number of records to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** The records returned for the requested page. */
        results: Array<Record<string, unknown>>;
        /** Pagination metadata returned by HigherGov. */
        meta: {
          /** The current pagination state. */
          pagination: {
            /** The current page number. */
            page: number;
            /** The total number of result pages. */
            pages: number;
            /** The total number of matching records. */
            count: number;
          };
        };
        /** Credential-free pagination links returned by HigherGov. */
        links: {
          /**
           * The first-page URL, or null when unavailable.
           * @format uri
           */
          first: string | null;
          /**
           * The last-page URL, or null when unavailable.
           * @format uri
           */
          last: string | null;
          /**
           * The next-page URL, or null when there is no next page.
           * @format uri
           */
          next: string | null;
          /**
           * The previous-page URL, or null when there is no previous page.
           * @format uri
           */
          prev: string | null;
        };
      };
    };
    /** List HigherGov federal contract, DIBBS, grant, and state or local opportunities using documented filters. */
    "highergov.list_opportunities": {
      input: {
        /** The HigherGov agency key to filter by. */
        agency_key?: number;
        /**
         * Return opportunities captured on or after this date.
         * @format date
         */
        captured_date?: string;
        /** The HigherGov opportunity key to retrieve. */
        opp_key?: string;
        /** The field and direction used to order results. */
        ordering?: "-captured_date" | "-due_date" | "-posted_date" | "captured_date" | "due_date" | "posted_date";
        /**
         * The result page number, starting from 1.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The number of records to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /**
         * Return opportunities posted on or after this date.
         * @format date
         */
        posted_date?: string;
        /** The HigherGov saved search ID to apply. */
        search_id?: string;
        /** The source opportunity ID to filter by. */
        source_id?: string;
        /** One source type or a comma-separated list of source types such as sam,sled. */
        source_type?: string;
        /** The HigherGov opportunity version key to retrieve. */
        version_key?: string;
      };
      output: {
        /** The records returned for the requested page. */
        results: Array<Record<string, unknown>>;
        /** Pagination metadata returned by HigherGov. */
        meta: {
          /** The current pagination state. */
          pagination: {
            /** The current page number. */
            page: number;
            /** The total number of result pages. */
            pages: number;
            /** The total number of matching records. */
            count: number;
          };
        };
        /** Credential-free pagination links returned by HigherGov. */
        links: {
          /**
           * The first-page URL, or null when unavailable.
           * @format uri
           */
          first: string | null;
          /**
           * The last-page URL, or null when unavailable.
           * @format uri
           */
          last: string | null;
          /**
           * The next-page URL, or null when there is no next page.
           * @format uri
           */
          next: string | null;
          /**
           * The previous-page URL, or null when there is no previous page.
           * @format uri
           */
          prev: string | null;
        };
      };
    };
  }
}

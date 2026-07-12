import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Aircall call by ID. */
    "aircall.get_call": {
      input: {
        /**
         * The Aircall numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether Aircall should include contact details for the call. */
        fetchContact?: boolean;
        /** Whether Aircall should include shortened recording URLs. */
        fetchShortUrls?: boolean;
        /** Whether Aircall should include call timeline details. */
        fetchCallTimeline?: boolean;
      };
      output: {
        /** The raw Aircall resource object returned by the API. */
        call: Record<string, unknown> | null;
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Aircall contact. */
    "aircall.get_contact": {
      input: {
        /**
         * The Aircall numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The raw Aircall resource object returned by the API. */
        contact: Record<string, unknown> | null;
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Aircall phone number. */
    "aircall.get_number": {
      input: {
        /**
         * The Aircall numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The raw Aircall resource object returned by the API. */
        number: Record<string, unknown> | null;
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Aircall team. */
    "aircall.get_team": {
      input: {
        /**
         * The Aircall numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The raw Aircall resource object returned by the API. */
        team: Record<string, unknown> | null;
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Aircall user with the current V2 Users API. */
    "aircall.get_user": {
      input: {
        /**
         * The Aircall numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The raw Aircall resource object returned by the API. */
        user: Record<string, unknown> | null;
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Aircall calls with optional date and payload expansion filters. */
    "aircall.list_calls": {
      input: {
        /**
         * The 1-based page number to request from Aircall.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of resources to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * A UNIX timestamp accepted by Aircall.
         * @minLength 1
         */
        from?: string;
        /**
         * A UNIX timestamp accepted by Aircall.
         * @minLength 1
         */
        to?: string;
        /** The order to return Aircall resources in. */
        order?: "asc" | "desc";
        /** Whether Aircall should include contact details in each call. */
        fetchContact?: boolean;
        /** Whether Aircall should include shortened recording URLs. */
        fetchShortUrls?: boolean;
        /** Whether Aircall should include call timeline details. */
        fetchCallTimeline?: boolean;
      };
      output: {
        /** The calls returned by Aircall. */
        calls: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Aircall. */
        pagination: {
          /** The number of resources returned on this page. */
          count: number;
          /** The total number of resources matching the request. */
          total: number;
          /** The current page number. */
          currentPage: number;
          /** The number of resources requested per page. */
          perPage: number;
          /** The next page URL returned by Aircall. */
          nextPageLink: string | null;
          /** The previous page URL returned by Aircall. */
          previousPageLink: string | null;
          /** The raw Aircall meta object. */
          raw: Record<string, unknown>;
        };
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Aircall contacts. */
    "aircall.list_contacts": {
      input: {
        /**
         * The 1-based page number to request from Aircall.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of resources to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The order to return Aircall resources in. */
        order?: "asc" | "desc";
      };
      output: {
        /** The contacts returned by Aircall. */
        contacts: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Aircall. */
        pagination: {
          /** The number of resources returned on this page. */
          count: number;
          /** The total number of resources matching the request. */
          total: number;
          /** The current page number. */
          currentPage: number;
          /** The number of resources requested per page. */
          perPage: number;
          /** The next page URL returned by Aircall. */
          nextPageLink: string | null;
          /** The previous page URL returned by Aircall. */
          previousPageLink: string | null;
          /** The raw Aircall meta object. */
          raw: Record<string, unknown>;
        };
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Aircall phone numbers. */
    "aircall.list_numbers": {
      input: {
        /**
         * The 1-based page number to request from Aircall.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of resources to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The numbers returned by Aircall. */
        numbers: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Aircall. */
        pagination: {
          /** The number of resources returned on this page. */
          count: number;
          /** The total number of resources matching the request. */
          total: number;
          /** The current page number. */
          currentPage: number;
          /** The number of resources requested per page. */
          perPage: number;
          /** The next page URL returned by Aircall. */
          nextPageLink: string | null;
          /** The previous page URL returned by Aircall. */
          previousPageLink: string | null;
          /** The raw Aircall meta object. */
          raw: Record<string, unknown>;
        };
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Aircall teams. */
    "aircall.list_teams": {
      input: {
        /**
         * The 1-based page number to request from Aircall.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of resources to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The teams returned by Aircall. */
        teams: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Aircall. */
        pagination: {
          /** The number of resources returned on this page. */
          count: number;
          /** The total number of resources matching the request. */
          total: number;
          /** The current page number. */
          currentPage: number;
          /** The number of resources requested per page. */
          perPage: number;
          /** The next page URL returned by Aircall. */
          nextPageLink: string | null;
          /** The previous page URL returned by Aircall. */
          previousPageLink: string | null;
          /** The raw Aircall meta object. */
          raw: Record<string, unknown>;
        };
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Aircall users with the current V2 Users API. */
    "aircall.list_users": {
      input: {
        /**
         * The 1-based page number to request from Aircall.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of resources to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The users returned by Aircall. */
        users: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Aircall. */
        pagination: {
          /** The number of resources returned on this page. */
          count: number;
          /** The total number of resources matching the request. */
          total: number;
          /** The current page number. */
          currentPage: number;
          /** The number of resources requested per page. */
          perPage: number;
          /** The next page URL returned by Aircall. */
          nextPageLink: string | null;
          /** The previous page URL returned by Aircall. */
          previousPageLink: string | null;
          /** The raw Aircall meta object. */
          raw: Record<string, unknown>;
        };
        /** The raw Aircall response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}

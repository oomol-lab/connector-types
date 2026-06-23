import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a single Intelliprint reusable background by ID. */
    "intelliprint.get_background": {
      input: {
        /**
         * The Intelliprint background ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Intelliprint background object. */
        background: {
          /** The Intelliprint object ID. */
          id?: string;
          /** The Intelliprint object type. */
          object?: string;
          /** The UNIX timestamp when the Intelliprint object was created. */
          created?: number;
          [key: string]: unknown;
        };
        /** The raw Intelliprint background response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single Intelliprint mailing list by ID. */
    "intelliprint.get_mailing_list": {
      input: {
        /**
         * The Intelliprint mailing list ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Intelliprint mailing list object. */
        mailingList: {
          /** The Intelliprint object ID. */
          id?: string;
          /** The Intelliprint object type. */
          object?: string;
          /** The UNIX timestamp when the Intelliprint object was created. */
          created?: number;
          [key: string]: unknown;
        };
        /** The raw Intelliprint mailing list response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one recipient from an Intelliprint mailing list. */
    "intelliprint.get_mailing_list_recipient": {
      input: {
        /**
         * The Intelliprint mailing list ID containing the recipient.
         * @minLength 1
         */
        mailingListId: string;
        /**
         * The Intelliprint mailing list recipient ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Intelliprint mailing list recipient object. */
        recipient: {
          /** The Intelliprint object ID. */
          id?: string;
          /** The Intelliprint object type. */
          object?: string;
          /** The UNIX timestamp when the Intelliprint object was created. */
          created?: number;
          [key: string]: unknown;
        };
        /** The raw Intelliprint mailing list recipient response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single Intelliprint print job by ID. */
    "intelliprint.get_print": {
      input: {
        /**
         * The Intelliprint print job ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Intelliprint print job object. */
        print: {
          /** The Intelliprint object ID. */
          id?: string;
          /** The Intelliprint object type. */
          object?: string;
          /** The UNIX timestamp when the Intelliprint object was created. */
          created?: number;
          [key: string]: unknown;
        };
        /** The raw Intelliprint print job response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Intelliprint reusable backgrounds with official pagination, sorting, field selection, and team filtering. */
    "intelliprint.list_backgrounds": {
      input: {
        /**
         * The maximum number of Intelliprint objects to return. The official API supports 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The number of Intelliprint objects to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** The sort direction for the Intelliprint list request. */
        sortOrder?: "asc" | "desc";
        /**
         * The optional Intelliprint response fields to request.
         * @minItems 1
         */
        fields?: Array<string>;
        /** The Intelliprint background field used to sort the list response. */
        sortField?: "created" | "name";
        /**
         * The Intelliprint team ID used to filter reusable backgrounds.
         * @minLength 1
         */
        team?: string;
      };
      output: {
        /** The Intelliprint objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** The total number of Intelliprint objects available across paginated requests. */
        totalAvailable: number;
        /** Whether another Intelliprint page is available after this response. */
        hasMore: boolean;
        /** The raw Intelliprint list response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List recipients for one Intelliprint mailing list with official pagination, sorting, and field selection. */
    "intelliprint.list_mailing_list_recipients": {
      input: {
        /**
         * The Intelliprint mailing list ID whose recipients are listed.
         * @minLength 1
         */
        mailingListId: string;
        /**
         * The maximum number of Intelliprint objects to return. The official API supports 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The number of Intelliprint objects to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** The sort direction for the Intelliprint list request. */
        sortOrder?: "asc" | "desc";
        /**
         * The optional Intelliprint response fields to request.
         * @minItems 1
         */
        fields?: Array<string>;
        /** The Intelliprint mailing list recipient field used to sort the list response. */
        sortField?: "created" | "name";
      };
      output: {
        /** The Intelliprint objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** The total number of Intelliprint objects available across paginated requests. */
        totalAvailable: number;
        /** Whether another Intelliprint page is available after this response. */
        hasMore: boolean;
        /** The raw Intelliprint list response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Intelliprint mailing lists with official pagination and sorting options. */
    "intelliprint.list_mailing_lists": {
      input: {
        /**
         * The maximum number of Intelliprint objects to return. The official API supports 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The number of Intelliprint objects to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** The sort direction for the Intelliprint list request. */
        sortOrder?: "asc" | "desc";
        /**
         * The optional Intelliprint response fields to request.
         * @minItems 1
         */
        fields?: Array<string>;
        /** The Intelliprint mailing list field used to sort the list response. */
        sortField?: "created" | "name" | "recipients";
      };
      output: {
        /** The Intelliprint objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** The total number of Intelliprint objects available across paginated requests. */
        totalAvailable: number;
        /** Whether another Intelliprint page is available after this response. */
        hasMore: boolean;
        /** The raw Intelliprint list response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Intelliprint print jobs with official pagination, sorting, and print-specific filters. */
    "intelliprint.list_prints": {
      input: {
        /**
         * The maximum number of Intelliprint objects to return. The official API supports 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The number of Intelliprint objects to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** The sort direction for the Intelliprint list request. */
        sortOrder?: "asc" | "desc";
        /**
         * The optional Intelliprint response fields to request.
         * @minItems 1
         */
        fields?: Array<string>;
        /** The Intelliprint print field used to sort the list response. */
        sortField?: "created" | "confirmed_at" | "reference" | "type" | "letters" | "pages" | "sheets" | "letters.returned.date" | "cost.after_tax" | "cost.amount";
        /** Whether to return only test mode print jobs. */
        testmode?: boolean;
        /** Whether to filter print jobs by confirmation state. */
        confirmed?: boolean;
        /** The Intelliprint print job type to filter by. */
        type?: "letter" | "postcard";
        /**
         * A print job reference filter.
         * @minLength 1
         */
        reference?: string;
        /**
         * The letter status filter sent as letters.status.
         * @minLength 1
         */
        letterStatus?: string;
        /** Whether to filter returned letters by the acknowledged flag. */
        returnedAcknowledged?: boolean;
      };
      output: {
        /** The Intelliprint objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** The total number of Intelliprint objects available across paginated requests. */
        totalAvailable: number;
        /** Whether another Intelliprint page is available after this response. */
        hasMore: boolean;
        /** The raw Intelliprint list response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Bloomerang constituent by its API ID. */
    "bloomerang.get_constituent": {
      input: {
        /**
         * The constituent ID used by the Bloomerang API.
         * @exclusiveMinimum 0
         */
        constituentId: number;
      };
      output: {
        /** One constituent or household record returned by Bloomerang. */
        constituent: {
          /** The record ID used by the Bloomerang API. */
          Id?: number;
          /** The Bloomerang record type. */
          Type?: string;
          /** The display name returned for the record. */
          FullName?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Bloomerang constituents with pagination, identity, and modification filters. */
    "bloomerang.list_constituents": {
      input: {
        /**
         * The number of matching records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 50
         */
        take?: number;
        /**
         * Return constituents modified after this date and time.
         * @format date-time
         */
        lastModified?: string;
        /** Return only constituents favorited by the connected user. */
        isFavorite?: boolean;
        /** Return only constituents of this type. */
        type?: "Individual" | "Organization";
        /**
         * Return only constituents with these API IDs.
         * @minItems 1
         */
        ids?: Array<number>;
        /** The field used to sort the results. */
        orderBy?: "Id" | "CreatedDate" | "LastModifiedDate";
        /** The direction used to sort the results. */
        orderDirection?: "Asc" | "Desc";
        /**
         * The custom field ID used to filter constituents.
         * @exclusiveMinimum 0
         */
        customFieldId?: number;
        /** The custom field value used to filter constituents. */
        customFieldValue?: string;
      };
      output: {
        /** The total number of records available in Bloomerang. */
        total: number;
        /** The total number of records matching the supplied filters. */
        totalFiltered: number;
        /** The zero-based index of the first returned record. */
        start: number;
        /** The number of records in this response. */
        resultCount: number;
        /** The constituent or household records in this response. */
        records: Array<{
          /** The record ID used by the Bloomerang API. */
          Id?: number;
          /** The Bloomerang record type. */
          Type?: string;
          /** The display name returned for the record. */
          FullName?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Bloomerang constituents and households by text. */
    "bloomerang.search_constituents": {
      input: {
        /**
         * The number of matching records to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 50
         */
        take?: number;
        /**
         * The text to search for in constituents and households.
         * @minLength 1
         */
        search: string;
        /** Return only records of this type. */
        type?: "Individual" | "Organization" | "Household";
      };
      output: {
        /** The total number of records available in Bloomerang. */
        total: number;
        /** The total number of records matching the supplied filters. */
        totalFiltered: number;
        /** The zero-based index of the first returned record. */
        start: number;
        /** The number of records in this response. */
        resultCount: number;
        /** The constituent or household records in this response. */
        records: Array<{
          /** The record ID used by the Bloomerang API. */
          Id?: number;
          /** The Bloomerang record type. */
          Type?: string;
          /** The display name returned for the record. */
          FullName?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}

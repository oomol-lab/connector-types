import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the latest recorded TSDR update dates for a trademark application serial number. */
    "uspto.get_trademark_case_last_update": {
      input: {
        /**
         * The eight-digit USPTO trademark application serial number without spaces or punctuation.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        serialNumber: string;
      };
      output: {
        /** The USPTO trademark application serial number. */
        serialNumber: string;
        /** The latest modification date reported for the case. */
        lastModifiedDate?: string;
        /** The latest modification date reported for case status data. */
        statusLastModifiedDate?: string;
        /** The latest modification date reported for prosecution history data. */
        prosecutionLastModifiedDate?: string;
        /** The latest modification date reported for case document data. */
        documentsLastModifiedDate?: string;
        /** The original case update item returned by the USPTO TSDR API. */
        raw: Record<string, unknown>;
      } | null;
    };
    /** Get the official TSDR case status record for a trademark application serial number as XML. */
    "uspto.get_trademark_case_status": {
      input: {
        /**
         * The eight-digit USPTO trademark application serial number without spaces or punctuation.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        serialNumber: string;
      };
      output: {
        /**
         * The raw XML document returned by the USPTO TSDR API.
         * @minLength 1
         */
        xml: string;
      } | null;
    };
    /** Get TSDR metadata for documents associated with a trademark application serial number. */
    "uspto.get_trademark_documents_metadata": {
      input: {
        /**
         * The eight-digit USPTO trademark application serial number without spaces or punctuation.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        serialNumber: string;
        /**
         * The earliest document date to include, in YYYY-MM-DD format.
         * @format date
         */
        fromDate?: string;
        /**
         * The latest document date to include, in YYYY-MM-DD format.
         * @format date
         */
        toDate?: string;
        /** The chronological order for returned document metadata. */
        sort?: "asc" | "desc";
      };
      output: {
        /**
         * The raw XML document returned by the USPTO TSDR API.
         * @minLength 1
         */
        xml: string;
      } | null;
    };
  }
}

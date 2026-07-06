import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Anrok customer by customer ID. */
    "anrok.get_customer": {
      input: {
        /**
         * The unique customer identifier in Anrok.
         * @minLength 1
         * @pattern \S
         */
        customerId: string;
      };
      output: {
        /**
         * The unique customer identifier in Anrok.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** The display name of the customer. */
        name: string;
        /** The email address of the customer. */
        emailAddress: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Anrok product by external ID. */
    "anrok.get_product": {
      input: {
        /**
         * The external product ID to look up in Anrok.
         * @minLength 1
         * @pattern \S
         */
        externalId: string;
      };
      output: {
        /**
         * The product external ID.
         * @minLength 1
         * @pattern \S
         */
        externalId: string;
        /** An Anrok product tax category identifier. */
        taxCategoryId: {
          /** Whether the product tax category is standard or custom. */
          type: "standard" | "custom";
          /**
           * The Anrok product tax category ID.
           * @minLength 1
           * @pattern \S
           */
          id: string;
        };
        /** The product display name. */
        name: string;
        /** The product description. */
        description: string;
        [key: string]: unknown;
      };
    };
    /** List Anrok customers with cursor pagination. */
    "anrok.list_customers": {
      input: {
        /**
         * The Anrok cursor returned as nextCursor from the previous page.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The maximum number of customers to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The Anrok customers returned on this page. */
        customers: Array<{
          /**
           * The unique customer identifier in Anrok.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The display name of the customer. */
          name: string;
          /** The email address of the customer. */
          emailAddress: string | null;
          [key: string]: unknown;
        }>;
        /** Whether Anrok has more records after this page. */
        hasMore: boolean;
        /** The cursor to use for the next page, or null when there are no more pages. */
        nextCursor: string | null;
      };
    };
    /** List Anrok filings with optional cursor pagination and filters. */
    "anrok.list_filings": {
      input: {
        /**
         * The Anrok cursor returned as nextCursor from the previous page.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The maximum number of filings to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The filter to apply to returned filings. */
        filter?: {
          /**
           * The jurisdiction ID to filter by.
           * @minLength 1
           * @pattern \S
           */
          jurisId?: string;
          /**
           * The filing period end date range to filter by, such as 2025-01..2025-03.
           * @minLength 1
           * @pattern \S
           */
          periodEndDateRangeInclusive?: string;
        };
      };
      output: {
        /** The Anrok filings returned on this page. */
        filings: Array<{
          /** The filing jurisdiction ID. */
          jurisId?: string;
          /** The filing identifier within the jurisdiction. */
          jurisFilingId?: string;
          /** The filing name. */
          name?: string;
          /** Whether the filing has been filed. */
          isFiled?: boolean;
          /** Whether Anrok automatically updates the filing for transaction changes. */
          isAutomaticallyUpdatedForTransactionChanges?: boolean;
          /** The filing period. */
          period?: {
            /**
             * The beginning date of the filing period.
             * @format date
             */
            begin?: string;
            /**
             * The inclusive end date of the filing period.
             * @format date
             */
            endInclusive?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether Anrok has more records after this page. */
        hasMore: boolean;
        /** The cursor to use for the next page, or null when there are no more pages. */
        nextCursor: string | null;
      };
    };
    /** List Product ID mappings for one Anrok integration. */
    "anrok.list_product_mappings": {
      input: {
        /**
         * The Anrok integration ID whose mappings should be listed.
         * @minLength 1
         * @pattern \S
         */
        integrationId: string;
      };
      output: Array<Record<string, string>>;
    };
    /** List product tax categories available on the Anrok seller account. */
    "anrok.list_product_tax_categories": {
      input: Record<string, never>;
      output: {
        /** The Anrok product tax categories available on the seller account. */
        productTaxCategories: Array<{
          /** An Anrok product tax category identifier. */
          id: {
            /** Whether the product tax category is standard or custom. */
            type: "standard" | "custom";
            /**
             * The Anrok product tax category ID.
             * @minLength 1
             * @pattern \S
             */
            id: string;
          };
          /** The display name of the product tax category. */
          name: string;
        }>;
      };
    };
    /** List Anrok transactions with optional cursor pagination and filters. */
    "anrok.list_transactions": {
      input: {
        /**
         * The Anrok cursor returned as nextCursor from the previous page.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The maximum number of transactions to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** The filter to apply to returned transactions. */
        filter?: {
          /** The transaction filter type. */
          type: "lastModifiedAfter";
          /**
           * Only return transactions last modified after this UTC timestamp.
           * @format date-time
           */
          value: string;
        } | {
          /** The transaction filter type. */
          type: "filingInfo";
          /** The filing association filter value. */
          value: {
            /** The filing association status to match. */
            filingAssociationStatus?: "associated";
            /**
             * The jurisdiction filing ID to match.
             * @minLength 1
             * @pattern \S
             */
            jurisFilingId: string;
            /**
             * The jurisdiction ID to match.
             * @minLength 1
             * @pattern \S
             */
            jurisId: string;
          };
        };
      };
      output: {
        /** The Anrok transactions returned on this page. */
        transactions: Array<{
          /** The Anrok transaction ID. */
          id?: string;
          /** The Anrok transaction type. */
          type?: string;
          /**
           * The timestamp when the transaction was created in Anrok.
           * @format date-time
           */
          anrokCreatedTime?: string;
          /**
           * The timestamp when the transaction was last modified in Anrok.
           * @format date-time
           */
          anrokModifiedTime?: string;
          [key: string]: unknown;
        }>;
        /** Whether Anrok has more records after this page. */
        hasMore: boolean;
        /** The cursor to use for the next page, or null when there are no more pages. */
        nextCursor: string | null;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve details for the Adyen API credential used by this connection. */
    "adyen.get_api_credential": {
      input: Record<string, never>;
      output: {
        /** A normalized Adyen API credential. */
        credential: {
          /** The unique identifier of the API credential. */
          id: string | null;
          /** The API credential username. */
          username: string | null;
          /** Whether the API credential is enabled. */
          active: boolean | null;
          /** The company name linked to the API credential. */
          companyName: string | null;
          /** The API credential description. */
          description: string | null;
          /** Roles assigned to the API credential. */
          roles: Array<string>;
          /** The raw API credential object returned by Adyen. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Adyen company account by ID. */
    "adyen.get_company": {
      input: {
        /**
         * An Adyen resource identifier.
         * @minLength 1
         * @maxLength 100
         */
        companyId: string;
      };
      output: {
        /** A normalized Adyen company account. */
        company: {
          /** The unique identifier of the company account. */
          id: string | null;
          /** The legal or trading name of the company. */
          name: string | null;
          /** The status of the company account. */
          status: string | null;
          /** Your reference for the company account. */
          reference: string | null;
          /** Your description for the company account. */
          description: string | null;
          /** The raw company object returned by Adyen. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Adyen merchant account by ID. */
    "adyen.get_merchant": {
      input: {
        /**
         * An Adyen resource identifier.
         * @minLength 1
         * @maxLength 100
         */
        merchantId: string;
      };
      output: {
        /** A normalized Adyen merchant account. */
        merchant: {
          /** The unique identifier of the merchant account. */
          id: string | null;
          /** The merchant account name when returned by Adyen. */
          name: string | null;
          /** The status of the merchant account. */
          status: string | null;
          /** Your reference for the merchant account. */
          reference: string | null;
          /** The company account identifier linked to the merchant. */
          companyId: string | null;
          /** The raw merchant object returned by Adyen. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Adyen company accounts accessible to the API credential. */
    "adyen.list_companies": {
      input: {
        /**
         * The page number to fetch from Adyen.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The number of items to include on one page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Company accounts returned by Adyen. */
        companies: Array<{
          /** The unique identifier of the company account. */
          id: string | null;
          /** The legal or trading name of the company. */
          name: string | null;
          /** The status of the company account. */
          status: string | null;
          /** Your reference for the company account. */
          reference: string | null;
          /** Your description for the company account. */
          description: string | null;
          /** The raw company object returned by Adyen. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Adyen. */
        pagination: {
          /** The total number of items when returned by Adyen. */
          itemsTotal: number | null;
          /** The total number of pages when returned by Adyen. */
          pagesTotal: number | null;
          /** Pagination links returned by Adyen. */
          links: Record<string, unknown> | null;
        };
      };
    };
    /** List merchant accounts under an Adyen company account. */
    "adyen.list_company_merchants": {
      input: {
        /**
         * An Adyen resource identifier.
         * @minLength 1
         * @maxLength 100
         */
        companyId: string;
        /**
         * The page number to fetch from Adyen.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The number of items to include on one page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Merchant accounts returned by Adyen. */
        merchants: Array<{
          /** The unique identifier of the merchant account. */
          id: string | null;
          /** The merchant account name when returned by Adyen. */
          name: string | null;
          /** The status of the merchant account. */
          status: string | null;
          /** Your reference for the merchant account. */
          reference: string | null;
          /** The company account identifier linked to the merchant. */
          companyId: string | null;
          /** The raw merchant object returned by Adyen. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Adyen. */
        pagination: {
          /** The total number of items when returned by Adyen. */
          itemsTotal: number | null;
          /** The total number of pages when returned by Adyen. */
          pagesTotal: number | null;
          /** Pagination links returned by Adyen. */
          links: Record<string, unknown> | null;
        };
      };
    };
    /** List Adyen merchant accounts accessible to the API credential. */
    "adyen.list_merchants": {
      input: {
        /**
         * The page number to fetch from Adyen.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The number of items to include on one page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Merchant accounts returned by Adyen. */
        merchants: Array<{
          /** The unique identifier of the merchant account. */
          id: string | null;
          /** The merchant account name when returned by Adyen. */
          name: string | null;
          /** The status of the merchant account. */
          status: string | null;
          /** Your reference for the merchant account. */
          reference: string | null;
          /** The company account identifier linked to the merchant. */
          companyId: string | null;
          /** The raw merchant object returned by Adyen. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Adyen. */
        pagination: {
          /** The total number of items when returned by Adyen. */
          itemsTotal: number | null;
          /** The total number of pages when returned by Adyen. */
          pagesTotal: number | null;
          /** Pagination links returned by Adyen. */
          links: Record<string, unknown> | null;
        };
      };
    };
  }
}

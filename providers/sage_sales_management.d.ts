import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Sage Sales Management account. */
    "sage_sales_management.create_account": {
      input: {
        /** Official Sage Sales Management account fields to send as the request body. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Sage Sales Management account record. */
        account: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Create one Sage Sales Management contact. */
    "sage_sales_management.create_contact": {
      input: {
        /** Official Sage Sales Management contact fields to send as the request body. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Sage Sales Management contact record. */
        contact: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Create one Sage Sales Management opportunity. */
    "sage_sales_management.create_opportunity": {
      input: {
        /** Official Sage Sales Management opportunity fields to send as the request body. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Sage Sales Management opportunity record. */
        opportunity: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Delete one Sage Sales Management account by ID. */
    "sage_sales_management.delete_account": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Sage Sales Management accepted the delete request. */
        ok: boolean;
        /** The HTTP status returned by Sage Sales Management. */
        status: number;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Delete one Sage Sales Management contact by ID. */
    "sage_sales_management.delete_contact": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Sage Sales Management accepted the delete request. */
        ok: boolean;
        /** The HTTP status returned by Sage Sales Management. */
        status: number;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Delete one Sage Sales Management opportunity by ID. */
    "sage_sales_management.delete_opportunity": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Sage Sales Management accepted the delete request. */
        ok: boolean;
        /** The HTTP status returned by Sage Sales Management. */
        status: number;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Get one Sage Sales Management account by ID. */
    "sage_sales_management.get_account": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Sage Sales Management account record. */
        account: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Get the Sage Sales Management Accounts schema metadata. */
    "sage_sales_management.get_accounts_schema": {
      input: Record<string, never>;
      output: {
        /** The official Sage Sales Management schema object. */
        schema: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Get one Sage Sales Management contact by ID. */
    "sage_sales_management.get_contact": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Sage Sales Management contact record. */
        contact: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Get the Sage Sales Management Contacts schema metadata. */
    "sage_sales_management.get_contacts_schema": {
      input: Record<string, never>;
      output: {
        /** The official Sage Sales Management schema object. */
        schema: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Get the Sage Sales Management Opportunities schema metadata. */
    "sage_sales_management.get_opportunities_schema": {
      input: Record<string, never>;
      output: {
        /** The official Sage Sales Management schema object. */
        schema: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Get one Sage Sales Management opportunity by ID. */
    "sage_sales_management.get_opportunity": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The Sage Sales Management opportunity record. */
        opportunity: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** List Sage Sales Management accounts with optional filters and pagination. */
    "sage_sales_management.list_accounts": {
      input: {
        /**
         * The zero-based page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of records to return in the page.
         * @exclusiveMinimum 0
         */
        count?: number;
        /**
         * The official Sage Sales Management SQL-like where filter.
         * @minLength 1
         */
        where?: string;
        /**
         * The official Sage Sales Management order expression.
         * @minLength 1
         */
        order?: string;
        /**
         * The response language code requested from Sage Sales Management.
         * @minLength 1
         */
        lang?: string;
        /** Whether Sage Sales Management should include extra field descriptions in each record. */
        extraFieldDescription?: boolean;
      };
      output: {
        /** The Sage Sales Management account records returned by the API. */
        accounts: Array<Record<string, unknown>>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** List Sage Sales Management contacts with optional filters and pagination. */
    "sage_sales_management.list_contacts": {
      input: {
        /**
         * The zero-based page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of records to return in the page.
         * @exclusiveMinimum 0
         */
        count?: number;
        /**
         * The official Sage Sales Management SQL-like where filter.
         * @minLength 1
         */
        where?: string;
        /**
         * The official Sage Sales Management order expression.
         * @minLength 1
         */
        order?: string;
        /**
         * The response language code requested from Sage Sales Management.
         * @minLength 1
         */
        lang?: string;
        /** Whether Sage Sales Management should include extra field descriptions in each record. */
        extraFieldDescription?: boolean;
      };
      output: {
        /** The Sage Sales Management contact records returned by the API. */
        contacts: Array<Record<string, unknown>>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** List Sage Sales Management opportunities with optional filters and pagination. */
    "sage_sales_management.list_opportunities": {
      input: {
        /**
         * The zero-based page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of records to return in the page.
         * @exclusiveMinimum 0
         */
        count?: number;
        /**
         * The official Sage Sales Management SQL-like where filter.
         * @minLength 1
         */
        where?: string;
        /**
         * The official Sage Sales Management order expression.
         * @minLength 1
         */
        order?: string;
        /**
         * The response language code requested from Sage Sales Management.
         * @minLength 1
         */
        lang?: string;
        /** Whether Sage Sales Management should include extra field descriptions in each record. */
        extraFieldDescription?: boolean;
      };
      output: {
        /** The Sage Sales Management opportunity records returned by the API. */
        opportunities: Array<Record<string, unknown>>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Update one Sage Sales Management account by ID. */
    "sage_sales_management.update_account": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Official Sage Sales Management account fields to send as the request body. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Sage Sales Management account record. */
        account: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Update one Sage Sales Management contact by ID. */
    "sage_sales_management.update_contact": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Official Sage Sales Management contact fields to send as the request body. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Sage Sales Management contact record. */
        contact: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
    /** Update one Sage Sales Management opportunity by ID. */
    "sage_sales_management.update_opportunity": {
      input: {
        /**
         * The Sage Sales Management resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Official Sage Sales Management opportunity fields to send as the request body. */
        data: Record<string, unknown>;
      };
      output: {
        /** The Sage Sales Management opportunity record. */
        opportunity: Record<string, unknown>;
        /** The raw Sage Sales Management response payload. */
        raw: unknown;
      };
    };
  }
}

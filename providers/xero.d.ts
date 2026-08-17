import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact. */
    "xero.create_contact": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The contact name.
         * @minLength 1
         */
        name: string;
        /** The contact email address. */
        email_address?: string;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a draft invoice for a contact. */
    "xero.create_invoice": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The Xero contact ID.
         * @format uuid
         */
        contact_id: string;
        /** The invoice type. */
        type?: "ACCREC" | "ACCPAY";
        /**
         * The invoice date.
         * @format date
         */
        date?: string;
        /**
         * The invoice due date.
         * @format date
         */
        due_date?: string;
        /** The invoice reference. */
        reference?: string;
        /**
         * The invoice line items.
         * @minItems 1
         */
        line_items: Array<Record<string, unknown>>;
      };
      output: Record<string, unknown>;
    };
    /** Get an account by ID. */
    "xero.get_account": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The Xero account ID.
         * @format uuid
         */
        account_id: string;
      };
      output: Record<string, unknown> | null;
    };
    /** Get the balance sheet report for a tenant. */
    "xero.get_balance_sheet": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The report as-at date.
         * @format date
         */
        date?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a bank transaction with its line items by ID. */
    "xero.get_bank_transaction": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The Xero bank transaction ID.
         * @format uuid
         */
        bank_transaction_id: string;
      };
      output: Record<string, unknown> | null;
    };
    /** Get a contact by ID. */
    "xero.get_contact": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The Xero contact ID.
         * @format uuid
         */
        contact_id: string;
      };
      output: Record<string, unknown> | null;
    };
    /** Get an invoice with its line items by ID. */
    "xero.get_invoice": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The Xero invoice ID.
         * @format uuid
         */
        invoice_id: string;
      };
      output: Record<string, unknown> | null;
    };
    /** Get the organisation profile for a tenant. */
    "xero.get_organisation": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the profit and loss report for a tenant. */
    "xero.get_profit_and_loss": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The report start date.
         * @format date
         */
        from_date?: string;
        /**
         * The report end date.
         * @format date
         */
        to_date?: string;
      };
      output: Record<string, unknown>;
    };
    /** List the chart of accounts for a tenant. */
    "xero.list_accounts": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /** The account status filter. */
        status?: string;
      };
      output: Record<string, unknown>;
    };
    /** List the Xero organisations connected to this account. */
    "xero.list_organisations": {
      input: Record<string, never>;
      output: {
        /** The connected organisations. */
        organisations: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search bank transactions by status with pagination. */
    "xero.search_bank_transactions": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /** The bank transaction status filter. */
        status?: string;
        /**
         * The page number to return.
         * @minimum 1
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Normalized items returned by Xero. */
        items: Array<Record<string, unknown>>;
        /** The returned page number. */
        page: number;
        /** The number of returned items. */
        returned: number;
        [key: string]: unknown;
      };
    };
    /** Search contacts by name fragment with pagination. */
    "xero.search_contacts": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /** A contact name fragment. */
        search?: string;
        /**
         * The page number to return.
         * @minimum 1
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Normalized items returned by Xero. */
        items: Array<Record<string, unknown>>;
        /** The returned page number. */
        page: number;
        /** The number of returned items. */
        returned: number;
        [key: string]: unknown;
      };
    };
    /** Search invoices by status with pagination. */
    "xero.search_invoices": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /** The invoice status filter. */
        status?: string;
        /**
         * The page number to return.
         * @minimum 1
         * @default 1
         */
        page?: number;
      };
      output: {
        /** Normalized items returned by Xero. */
        items: Array<Record<string, unknown>>;
        /** The returned page number. */
        page: number;
        /** The number of returned items. */
        returned: number;
        [key: string]: unknown;
      };
    };
    /** Move an invoice through its lifecycle. */
    "xero.update_invoice_status": {
      input: {
        /**
         * The Xero tenant organisation ID.
         * @format uuid
         */
        tenant_id?: string;
        /**
         * The Xero invoice ID.
         * @format uuid
         */
        invoice_id: string;
        /** The target invoice status. */
        status: "SUBMITTED" | "AUTHORISED" | "VOIDED";
      };
      output: Record<string, unknown>;
    };
  }
}

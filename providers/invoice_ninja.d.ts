import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Invoice Ninja client. */
    "invoice_ninja.create_client": {
      input: {
        /** The client company or organization name. */
        name?: string;
        /**
         * The complete client contact list.
         * @minItems 1
         */
        contacts?: Array<{
          /** The contact's first name. */
          firstName?: string;
          /** The contact's last name. */
          lastName?: string;
          /**
           * The contact's email address.
           * @format email
           */
          email?: string;
          /** The contact's phone number. */
          phone?: string;
          /** Whether the contact should receive Invoice Ninja emails. */
          sendEmail?: boolean;
        }>;
        /**
         * The client website URL.
         * @format uri
         */
        website?: string;
        /** The client phone number. */
        phone?: string;
        /** Notes visible only to Invoice Ninja users. */
        privateNotes?: string;
        /** Notes visible to the client. */
        publicNotes?: string;
        /** The first billing address line. */
        address1?: string;
        /** The second billing address line. */
        address2?: string;
        /** The billing city. */
        city?: string;
        /** The billing state, province, or locality. */
        state?: string;
        /** The billing postal code. */
        postalCode?: string;
        /**
         * The Invoice Ninja numeric country ID.
         * @exclusiveMinimum 0
         */
        countryId?: number;
        /**
         * The ISO 3166-2 or ISO 3166-3 country code.
         * @minLength 2
         * @maxLength 3
         */
        countryCode?: string;
        /** The client's VAT number. */
        vatNumber?: string;
        /** The client's tax or business registration number. */
        idNumber?: string;
        /** A custom client number. */
        number?: string;
      };
      output: {
        /** An Invoice Ninja client object. */
        client: {
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /** The client company or organization name. */
          name?: string | null;
          /** The client number. */
          number?: string | null;
          /** The client's outstanding balance. */
          balance?: number | null;
          /** The total amount paid by the client. */
          paid_to_date?: number | null;
          /** Contacts attached to the client. */
          contacts?: Array<{
            /**
             * The Invoice Ninja hashed resource ID.
             * @minLength 1
             */
            id?: string;
            /** The contact's first name. */
            first_name?: string | null;
            /** The contact's last name. */
            last_name?: string | null;
            /** The contact's email address. */
            email?: string | null;
            /** The contact's phone number. */
            phone?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create an Invoice Ninja invoice for a client. */
    "invoice_ninja.create_invoice": {
      input: {
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        clientId: string;
        /** The invoice line items. */
        lineItems?: Array<{
          /** The line item quantity. */
          quantity?: number;
          /** The line item unit cost. */
          cost?: number;
          /** The product key displayed on the invoice. */
          productKey?: string;
          /** The line item description. */
          notes?: string;
          /** The fixed or percentage discount applied to the line item. */
          discount?: number;
          /** Whether the line item discount is a fixed amount. */
          isAmountDiscount?: boolean;
          /** The first tax name. */
          taxName1?: string;
          /** The first tax rate. */
          taxRate1?: number;
          /** The second tax name. */
          taxName2?: string;
          /** The second tax rate. */
          taxRate2?: number;
        }>;
        /**
         * The invoice date.
         * @format date
         */
        date?: string;
        /**
         * The invoice due date.
         * @format date
         */
        dueDate?: string;
        /** A custom invoice number. */
        number?: string;
        /** The purchase order number. */
        purchaseOrderNumber?: string;
        /** The invoice terms. */
        terms?: string;
        /** Notes visible to the client. */
        publicNotes?: string;
        /** Notes visible only to Invoice Ninja users. */
        privateNotes?: string;
        /** The invoice footer text. */
        footer?: string;
        /** The invoice-level fixed or percentage discount. */
        discount?: number;
        /** Whether the invoice discount is a fixed amount. */
        isAmountDiscount?: boolean;
        /** The requested deposit or partial payment amount. */
        partial?: number;
        /** Whether Invoice Ninja should save and email the invoice. */
        sendEmail?: boolean;
        /** Whether Invoice Ninja should mark the invoice as sent. */
        markSent?: boolean;
        /** Whether Invoice Ninja should mark the invoice as paid. */
        paid?: boolean;
        /** The amount Invoice Ninja should record as paid. */
        amountPaid?: number;
      };
      output: {
        /** An Invoice Ninja invoice object. */
        invoice: {
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          client_id?: string;
          /** The invoice number. */
          number?: string | null;
          /** The Invoice Ninja invoice status ID. */
          status_id?: string | number;
          /** The total invoice amount. */
          amount?: number | null;
          /** The outstanding invoice balance. */
          balance?: number | null;
          /** The invoice date. */
          date?: string | null;
          /** The invoice due date. */
          due_date?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Record a payment in Invoice Ninja and optionally apply it to invoices. */
    "invoice_ninja.create_payment": {
      input: {
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        clientId: string;
        /**
         * The total payment amount.
         * @exclusiveMinimum 0
         */
        amount?: number;
        /**
         * The Invoice Ninja payment type ID from 1 through 33.
         * @minimum 1
         * @maximum 33
         */
        paymentTypeId?: number;
        /**
         * The payment date.
         * @format date
         */
        date?: string;
        /** The payment gateway or bank transaction reference. */
        transactionReference?: string;
        /** Notes visible only to Invoice Ninja users. */
        privateNotes?: string;
        /** A custom payment number. */
        number?: string;
        /**
         * Invoice allocations for the payment.
         * @minItems 1
         */
        invoices?: Array<{
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          invoiceId: string;
          /**
           * The amount applied to the invoice.
           * @exclusiveMinimum 0
           */
          amount: number;
        }>;
        /** Whether Invoice Ninja should email the payment receipt. */
        emailReceipt?: boolean;
      };
      output: {
        /** An Invoice Ninja payment object. */
        payment: {
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          client_id?: string;
          /** The payment number. */
          number?: string | null;
          /** The payment amount. */
          amount?: number | null;
          /** The amount applied to invoices or credits. */
          applied?: number | null;
          /** The payment date. */
          date?: string | null;
          /** The payment transaction reference. */
          transaction_reference?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Invoice Ninja client by hashed ID. */
    "invoice_ninja.get_client": {
      input: {
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        clientId: string;
        /**
         * Comma-separated related resources to include in the response.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** An Invoice Ninja client object. */
        client: {
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /** The client company or organization name. */
          name?: string | null;
          /** The client number. */
          number?: string | null;
          /** The client's outstanding balance. */
          balance?: number | null;
          /** The total amount paid by the client. */
          paid_to_date?: number | null;
          /** Contacts attached to the client. */
          contacts?: Array<{
            /**
             * The Invoice Ninja hashed resource ID.
             * @minLength 1
             */
            id?: string;
            /** The contact's first name. */
            first_name?: string | null;
            /** The contact's last name. */
            last_name?: string | null;
            /** The contact's email address. */
            email?: string | null;
            /** The contact's phone number. */
            phone?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Invoice Ninja invoice by hashed ID. */
    "invoice_ninja.get_invoice": {
      input: {
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        invoiceId: string;
        /**
         * Comma-separated related resources to include in the response.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** An Invoice Ninja invoice object. */
        invoice: {
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          client_id?: string;
          /** The invoice number. */
          number?: string | null;
          /** The Invoice Ninja invoice status ID. */
          status_id?: string | number;
          /** The total invoice amount. */
          amount?: number | null;
          /** The outstanding invoice balance. */
          balance?: number | null;
          /** The invoice date. */
          date?: string | null;
          /** The invoice due date. */
          due_date?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Invoice Ninja payment by hashed ID. */
    "invoice_ninja.get_payment": {
      input: {
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        paymentId: string;
        /**
         * Comma-separated related resources to include in the response.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** An Invoice Ninja payment object. */
        payment: {
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          client_id?: string;
          /** The payment number. */
          number?: string | null;
          /** The payment amount. */
          amount?: number | null;
          /** The amount applied to invoices or credits. */
          applied?: number | null;
          /** The payment date. */
          date?: string | null;
          /** The payment transaction reference. */
          transaction_reference?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Invoice Ninja clients with optional search and pagination filters. */
    "invoice_ninja.list_clients": {
      input: {
        /**
         * The 1-based result page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * Comma-separated related resources to include in the response.
         * @minLength 1
         */
        include?: string;
        /**
         * A broad search term supported by the Invoice Ninja endpoint.
         * @minLength 1
         */
        filter?: string;
        /**
         * The Invoice Ninja sort expression, such as id|desc.
         * @minLength 1
         */
        sort?: string;
        /** Filter clients by company or organization name. */
        name?: string;
        /**
         * Filter clients by contact email address.
         * @format email
         */
        email?: string;
        /** Filter clients by client number. */
        number?: string;
      };
      output: {
        /** Clients returned by Invoice Ninja. */
        clients: Array<{
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /** The client company or organization name. */
          name?: string | null;
          /** The client number. */
          number?: string | null;
          /** The client's outstanding balance. */
          balance?: number | null;
          /** The total amount paid by the client. */
          paid_to_date?: number | null;
          /** Contacts attached to the client. */
          contacts?: Array<{
            /**
             * The Invoice Ninja hashed resource ID.
             * @minLength 1
             */
            id?: string;
            /** The contact's first name. */
            first_name?: string | null;
            /** The contact's last name. */
            last_name?: string | null;
            /** The contact's email address. */
            email?: string | null;
            /** The contact's phone number. */
            phone?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Invoice Ninja. */
        pagination: {
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total: number;
          /**
           * The number of records in the current page.
           * @minimum 0
           */
          count: number;
          /**
           * The requested or returned page size.
           * @minimum 0
           */
          perPage: number;
          /**
           * The current 1-based page number.
           * @exclusiveMinimum 0
           */
          currentPage: number;
          /**
           * The total number of result pages.
           * @minimum 0
           */
          totalPages: number;
        };
      };
    };
    /** List Invoice Ninja invoices with optional client, status, date, and search filters. */
    "invoice_ninja.list_invoices": {
      input: {
        /**
         * The 1-based result page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * Comma-separated related resources to include in the response.
         * @minLength 1
         */
        include?: string;
        /**
         * A broad search term supported by the Invoice Ninja endpoint.
         * @minLength 1
         */
        filter?: string;
        /**
         * The Invoice Ninja sort expression, such as id|desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        clientId?: string;
        /**
         * The invoice status ID from 1 through 6.
         * @minimum 1
         * @maximum 6
         */
        statusId?: number;
        /**
         * Client-facing invoice statuses to include.
         * @minItems 1
         */
        clientStatuses?: Array<"all" | "paid" | "unpaid" | "overdue">;
        /** Filter invoices by invoice number. */
        number?: string;
        /**
         * Return invoices on or after this invoice date.
         * @format date
         */
        date?: string;
        /**
         * The first date in an inclusive invoice date range.
         * @format date
         */
        startDate?: string;
        /**
         * The last date in an inclusive invoice date range.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** Invoices returned by Invoice Ninja. */
        invoices: Array<{
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          client_id?: string;
          /** The invoice number. */
          number?: string | null;
          /** The Invoice Ninja invoice status ID. */
          status_id?: string | number;
          /** The total invoice amount. */
          amount?: number | null;
          /** The outstanding invoice balance. */
          balance?: number | null;
          /** The invoice date. */
          date?: string | null;
          /** The invoice due date. */
          due_date?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Invoice Ninja. */
        pagination: {
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total: number;
          /**
           * The number of records in the current page.
           * @minimum 0
           */
          count: number;
          /**
           * The requested or returned page size.
           * @minimum 0
           */
          perPage: number;
          /**
           * The current 1-based page number.
           * @exclusiveMinimum 0
           */
          currentPage: number;
          /**
           * The total number of result pages.
           * @minimum 0
           */
          totalPages: number;
        };
      };
    };
    /** List Invoice Ninja payments with optional client and search filters. */
    "invoice_ninja.list_payments": {
      input: {
        /**
         * The 1-based result page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * Comma-separated related resources to include in the response.
         * @minLength 1
         */
        include?: string;
        /**
         * A broad search term supported by the Invoice Ninja endpoint.
         * @minLength 1
         */
        filter?: string;
        /**
         * The Invoice Ninja sort expression, such as id|desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        clientId?: string;
        /** Filter payments by payment number. */
        number?: string;
      };
      output: {
        /** Payments returned by Invoice Ninja. */
        payments: Array<{
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          client_id?: string;
          /** The payment number. */
          number?: string | null;
          /** The payment amount. */
          amount?: number | null;
          /** The amount applied to invoices or credits. */
          applied?: number | null;
          /** The payment date. */
          date?: string | null;
          /** The payment transaction reference. */
          transaction_reference?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Invoice Ninja. */
        pagination: {
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total: number;
          /**
           * The number of records in the current page.
           * @minimum 0
           */
          count: number;
          /**
           * The requested or returned page size.
           * @minimum 0
           */
          perPage: number;
          /**
           * The current 1-based page number.
           * @exclusiveMinimum 0
           */
          currentPage: number;
          /**
           * The total number of result pages.
           * @minimum 0
           */
          totalPages: number;
        };
      };
    };
    /** Update an Invoice Ninja client while replacing its complete contact list. */
    "invoice_ninja.update_client": {
      input: {
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        clientId: string;
        /** The client company or organization name. */
        name?: string;
        /**
         * The complete client contact list.
         * @minItems 1
         */
        contacts: Array<{
          /** The contact's first name. */
          firstName?: string;
          /** The contact's last name. */
          lastName?: string;
          /**
           * The contact's email address.
           * @format email
           */
          email?: string;
          /** The contact's phone number. */
          phone?: string;
          /** Whether the contact should receive Invoice Ninja emails. */
          sendEmail?: boolean;
        }>;
        /**
         * The client website URL.
         * @format uri
         */
        website?: string;
        /** The client phone number. */
        phone?: string;
        /** Notes visible only to Invoice Ninja users. */
        privateNotes?: string;
        /** Notes visible to the client. */
        publicNotes?: string;
        /** The first billing address line. */
        address1?: string;
        /** The second billing address line. */
        address2?: string;
        /** The billing city. */
        city?: string;
        /** The billing state, province, or locality. */
        state?: string;
        /** The billing postal code. */
        postalCode?: string;
        /**
         * The Invoice Ninja numeric country ID.
         * @exclusiveMinimum 0
         */
        countryId?: number;
        /**
         * The ISO 3166-2 or ISO 3166-3 country code.
         * @minLength 2
         * @maxLength 3
         */
        countryCode?: string;
        /** The client's VAT number. */
        vatNumber?: string;
        /** The client's tax or business registration number. */
        idNumber?: string;
        /** A custom client number. */
        number?: string;
      };
      output: {
        /** An Invoice Ninja client object. */
        client: {
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /** The client company or organization name. */
          name?: string | null;
          /** The client number. */
          number?: string | null;
          /** The client's outstanding balance. */
          balance?: number | null;
          /** The total amount paid by the client. */
          paid_to_date?: number | null;
          /** Contacts attached to the client. */
          contacts?: Array<{
            /**
             * The Invoice Ninja hashed resource ID.
             * @minLength 1
             */
            id?: string;
            /** The contact's first name. */
            first_name?: string | null;
            /** The contact's last name. */
            last_name?: string | null;
            /** The contact's email address. */
            email?: string | null;
            /** The contact's phone number. */
            phone?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update documented fields or status actions on an Invoice Ninja invoice. */
    "invoice_ninja.update_invoice": {
      input: {
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        invoiceId: string;
        /**
         * The Invoice Ninja hashed resource ID.
         * @minLength 1
         */
        clientId?: string;
        /** The invoice line items. */
        lineItems?: Array<{
          /** The line item quantity. */
          quantity?: number;
          /** The line item unit cost. */
          cost?: number;
          /** The product key displayed on the invoice. */
          productKey?: string;
          /** The line item description. */
          notes?: string;
          /** The fixed or percentage discount applied to the line item. */
          discount?: number;
          /** Whether the line item discount is a fixed amount. */
          isAmountDiscount?: boolean;
          /** The first tax name. */
          taxName1?: string;
          /** The first tax rate. */
          taxRate1?: number;
          /** The second tax name. */
          taxName2?: string;
          /** The second tax rate. */
          taxRate2?: number;
        }>;
        /**
         * The invoice date.
         * @format date
         */
        date?: string;
        /**
         * The invoice due date.
         * @format date
         */
        dueDate?: string;
        /** A custom invoice number. */
        number?: string;
        /** The purchase order number. */
        purchaseOrderNumber?: string;
        /** The invoice terms. */
        terms?: string;
        /** Notes visible to the client. */
        publicNotes?: string;
        /** Notes visible only to Invoice Ninja users. */
        privateNotes?: string;
        /** The invoice footer text. */
        footer?: string;
        /** The invoice-level fixed or percentage discount. */
        discount?: number;
        /** Whether the invoice discount is a fixed amount. */
        isAmountDiscount?: boolean;
        /** The requested deposit or partial payment amount. */
        partial?: number;
        /** Whether Invoice Ninja should save and email the invoice. */
        sendEmail?: boolean;
        /** Whether Invoice Ninja should mark the invoice as sent. */
        markSent?: boolean;
        /** Whether Invoice Ninja should mark the invoice as paid. */
        paid?: boolean;
        /** The amount Invoice Ninja should record as paid. */
        amountPaid?: number;
      };
      output: {
        /** An Invoice Ninja invoice object. */
        invoice: {
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The Invoice Ninja hashed resource ID.
           * @minLength 1
           */
          client_id?: string;
          /** The invoice number. */
          number?: string | null;
          /** The Invoice Ninja invoice status ID. */
          status_id?: string | number;
          /** The total invoice amount. */
          amount?: number | null;
          /** The outstanding invoice balance. */
          balance?: number | null;
          /** The invoice date. */
          date?: string | null;
          /** The invoice due date. */
          due_date?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}

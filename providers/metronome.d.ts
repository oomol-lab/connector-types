import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get detailed information for a specific Metronome customer. */
    "metronome.get_customer": {
      input: {
        /**
         * The Metronome customer ID.
         * @minLength 1
         */
        customerId: string;
      };
      output: {
        /** A normalized Metronome customer. */
        customer: {
          /** The Metronome customer ID. */
          id: string;
          /** The deprecated external ID value returned by Metronome when available. */
          externalId: string | null;
          /** The customer display name. */
          name: string;
          /** The ingest aliases that can identify this customer in usage events. */
          ingestAliases: Array<string>;
          /** The RFC 3339 timestamp when the customer was created. */
          createdAt: string;
          /** The RFC 3339 timestamp when the customer was last updated. */
          updatedAt: string;
          /** The RFC 3339 timestamp when the customer was archived. */
          archivedAt: string | null;
          /** The customer_config object returned by Metronome. */
          customerConfig: Record<string, unknown>;
          /** The custom fields returned for this customer. */
          customFields: Record<string, unknown>;
          /** The raw Metronome object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a specific Metronome invoice by customer ID and invoice ID. */
    "metronome.get_invoice": {
      input: {
        /**
         * The Metronome customer ID.
         * @minLength 1
         */
        customerId: string;
        /**
         * The Metronome invoice ID.
         * @minLength 1
         */
        invoiceId: string;
        /** If true, Metronome omits zero-quantity line items. */
        skipZeroQtyLineItems?: boolean;
      };
      output: {
        /** A normalized Metronome invoice. */
        invoice: {
          /** The Metronome invoice ID. */
          id: string;
          /** The Metronome customer ID associated with this invoice. */
          customerId: string;
          /** The invoice status returned by Metronome. */
          status: string | null;
          /** The invoice type returned by Metronome. */
          type: string | null;
          /** The contract ID associated with this invoice when available. */
          contractId: string | null;
          /** The RFC 3339 billing period start timestamp. */
          startTimestamp: string | null;
          /** The RFC 3339 billing period end timestamp. */
          endTimestamp: string | null;
          /** The RFC 3339 timestamp when the invoice was issued. */
          issuedAt: string | null;
          /** The invoice total amount in the credit type unit. */
          total: number | null;
          /** The invoice subtotal amount in the credit type unit. */
          subtotal: number | null;
          /** The invoice amount due in the credit type unit. */
          amountDue: number | null;
          /** The invoice line items returned by Metronome. */
          lineItems: Array<Record<string, unknown>>;
          /** The raw Metronome object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Metronome billable metrics with optional archived metrics and pagination. */
    "metronome.list_billable_metrics": {
      input: {
        /**
         * The maximum number of results to return. Metronome allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous list call.
         * @minLength 1
         */
        nextPage?: string;
        /** If true, archived billable metrics are included. */
        includeArchived?: boolean;
      };
      output: {
        /** The billable metrics returned by Metronome. */
        billableMetrics: Array<{
          /** The Metronome billable metric ID. */
          id: string;
          /** The billable metric display name. */
          name: string;
          /** The billable metric aggregation type. */
          aggregationType: string | null;
          /** The property key used for aggregation. */
          aggregationKey: string | null;
          /** The RFC 3339 timestamp when the billable metric was archived. */
          archivedAt: string | null;
          /** The custom fields returned for this billable metric. */
          customFields: Record<string, unknown>;
          /** The raw Metronome object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor to pass as nextPage when more results are available. */
        nextPage: string | null;
      };
    };
    /** List Metronome customers with optional filters and cursor pagination. */
    "metronome.list_customers": {
      input: {
        /**
         * The maximum number of results to return. Metronome allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous list call.
         * @minLength 1
         */
        nextPage?: string;
        /**
         * Filter customers by a Metronome ingest alias.
         * @minLength 1
         */
        ingestAlias?: string;
        /**
         * Filter customers by Metronome customer IDs. Metronome allows up to 100 IDs.
         * @maxItems 100
         */
        customerIds?: Array<string>;
        /** If true, only archived customers are returned. */
        onlyArchived?: boolean;
        /**
         * Filter customers by Salesforce account IDs. Metronome allows up to 100 IDs.
         * @maxItems 100
         */
        salesforceAccountIds?: Array<string>;
      };
      output: {
        /** The customers returned by Metronome. */
        customers: Array<{
          /** The Metronome customer ID. */
          id: string;
          /** The deprecated external ID value returned by Metronome when available. */
          externalId: string | null;
          /** The customer display name. */
          name: string;
          /** The ingest aliases that can identify this customer in usage events. */
          ingestAliases: Array<string>;
          /** The RFC 3339 timestamp when the customer was created. */
          createdAt: string;
          /** The RFC 3339 timestamp when the customer was last updated. */
          updatedAt: string;
          /** The RFC 3339 timestamp when the customer was archived. */
          archivedAt: string | null;
          /** The customer_config object returned by Metronome. */
          customerConfig: Record<string, unknown>;
          /** The custom fields returned for this customer. */
          customFields: Record<string, unknown>;
          /** The raw Metronome object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor to pass as nextPage when more results are available. */
        nextPage: string | null;
      };
    };
    /** List invoices for a Metronome customer with stable filters and pagination. */
    "metronome.list_invoices": {
      input: {
        /**
         * The Metronome customer ID.
         * @minLength 1
         */
        customerId: string;
        /**
         * The maximum number of results to return. Metronome allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous list call.
         * @minLength 1
         */
        nextPage?: string;
        /** Filter invoices by status. */
        status?: "DRAFT" | "FINALIZED" | "VOID";
        /** Filter invoices by type. */
        type?: "USAGE" | "USAGE_CONSOLIDATED" | "SCHEDULED";
        /** Sort invoices by issue date. */
        sort?: "date_asc" | "date_desc";
        /** If true, Metronome omits zero-quantity line items. */
        skipZeroQtyLineItems?: boolean;
        /**
         * Only return invoices for the specified credit type.
         * @minLength 1
         */
        creditTypeId?: string;
        /**
         * Only return invoices for the specified contract ID.
         * @minLength 1
         */
        contractId?: string;
        /**
         * Only return billing periods starting at or after this RFC 3339 timestamp.
         * @minLength 1
         */
        startingOn?: string;
        /**
         * Only return billing periods ending before this RFC 3339 timestamp.
         * @minLength 1
         */
        endingBefore?: string;
      };
      output: {
        /** The invoices returned by Metronome. */
        invoices: Array<{
          /** The Metronome invoice ID. */
          id: string;
          /** The Metronome customer ID associated with this invoice. */
          customerId: string;
          /** The invoice status returned by Metronome. */
          status: string | null;
          /** The invoice type returned by Metronome. */
          type: string | null;
          /** The contract ID associated with this invoice when available. */
          contractId: string | null;
          /** The RFC 3339 billing period start timestamp. */
          startTimestamp: string | null;
          /** The RFC 3339 billing period end timestamp. */
          endTimestamp: string | null;
          /** The RFC 3339 timestamp when the invoice was issued. */
          issuedAt: string | null;
          /** The invoice total amount in the credit type unit. */
          total: number | null;
          /** The invoice subtotal amount in the credit type unit. */
          subtotal: number | null;
          /** The invoice amount due in the credit type unit. */
          amountDue: number | null;
          /** The invoice line items returned by Metronome. */
          lineItems: Array<Record<string, unknown>>;
          /** The raw Metronome object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor to pass as nextPage when more results are available. */
        nextPage: string | null;
      };
    };
  }
}

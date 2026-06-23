import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Chaser customer by internal id or ext_ external id. */
    "chaserhq.get_customer": {
      input: {
        /**
         * The Chaser customer id, or an external id prefixed with ext_ as documented by Chaser.
         * @minLength 1
         */
        customerId: string;
        /**
         * Optional customer fields to include in the response.
         * @minItems 1
         */
        additionalFields?: Array<"payment_portal_link" | "payer_rating" | "average_days_to_pay">;
      };
      output: {
        /** A normalized Chaser customer. */
        customer: {
          /**
           * A Chaser resource identifier.
           * @minLength 1
           */
          id: string;
          /** The string value returned by Chaser. */
          externalId?: string | null;
          /** The string value returned by Chaser. */
          companyName?: string | null;
          /** The string value returned by Chaser. */
          contactFirstName?: string | null;
          /** The string value returned by Chaser. */
          contactLastName?: string | null;
          /** The string value returned by Chaser. */
          contactEmailAddress?: string | null;
          /** The string value returned by Chaser. */
          phoneNumber?: string | null;
          /** The string value returned by Chaser. */
          mobileNumber?: string | null;
          /** The string value returned by Chaser. */
          status?: string | null;
          /** The string value returned by Chaser. */
          paymentPortalLink?: string | null;
          /** The string value returned by Chaser. */
          payerRating?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          payerRatingUpdatedAt?: string | null;
          /** The numeric value returned by Chaser. */
          payerRatingNumberInvoicesConsidered?: number | null;
          /** The numeric value returned by Chaser. */
          averageDaysToPay?: number | null;
          /** Customer groups returned by Chaser. */
          groups?: Array<Record<string, unknown>>;
          /** Customer addresses returned by Chaser. */
          addresses?: Array<Record<string, unknown>>;
          /** The raw customer object returned by Chaser. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Chaser invoice by internal id or ext_ invoice_id. */
    "chaserhq.get_invoice": {
      input: {
        /**
         * The Chaser invoice id, or an invoice_id prefixed with ext_ as documented by Chaser.
         * @minLength 1
         */
        invoiceId: string;
      };
      output: {
        /** A normalized Chaser invoice. */
        invoice: {
          /**
           * A Chaser resource identifier.
           * @minLength 1
           */
          id: string;
          /** The string value returned by Chaser. */
          invoiceId?: string | null;
          /** The string value returned by Chaser. */
          invoiceNumber?: string | null;
          /** The string value returned by Chaser. */
          status?: string | null;
          /** The string value returned by Chaser. */
          currencyCode?: string | null;
          /** The numeric value returned by Chaser. */
          amountDue?: number | null;
          /** The numeric value returned by Chaser. */
          amountPaid?: number | null;
          /** The numeric value returned by Chaser. */
          total?: number | null;
          /** The numeric value returned by Chaser. */
          subTotal?: number | null;
          /** The ISO 8601 date-time returned by Chaser. */
          date?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          dueDate?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          fullyPaidDate?: string | null;
          /** The string value returned by Chaser. */
          customerExternalId?: string | null;
          /** The string value returned by Chaser. */
          customerName?: string | null;
          /** The string value returned by Chaser. */
          invoicePdfLink?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          invoicePdfLinkUpdatedAt?: string | null;
          /** Payments returned by Chaser for this invoice. */
          payments?: Array<{
            /** The ISO 8601 date-time returned by Chaser. */
            date?: string | null;
            /** The numeric value returned by Chaser. */
            amount?: number | null;
            [key: string]: unknown;
          }>;
          /** The raw invoice object returned by Chaser. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Chaser invoice history record by internal id or ext_ invoice_id. */
    "chaserhq.get_invoice_history": {
      input: {
        /**
         * The Chaser invoice id, or an invoice_id prefixed with ext_ as documented by Chaser.
         * @minLength 1
         */
        invoiceId: string;
      };
      output: {
        /** A normalized Chaser invoice history. */
        history: {
          /**
           * A Chaser resource identifier.
           * @minLength 1
           */
          invoiceId: string;
          /** The string value returned by Chaser. */
          invoiceNumber?: string | null;
          /** The string value returned by Chaser. */
          contactId?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          expectPaymentDate?: string | null;
          /** The dispute details returned by Chaser. */
          dispute?: Record<string, unknown> | null;
          /** Invoice notes returned by Chaser. */
          notes?: Array<Record<string, unknown>>;
          /** Invoice status changes returned by Chaser. */
          statusChanges?: Array<Record<string, unknown>>;
          /** Chase events returned by Chaser. */
          chases?: Array<Record<string, unknown>>;
          /** Emails returned by Chaser. */
          emails?: Array<Record<string, unknown>>;
          /** The raw invoice history object returned by Chaser. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the current Chaser organisation for the API credential. */
    "chaserhq.get_organisation": {
      input: Record<string, never>;
      output: {
        /** A normalized Chaser organisation. */
        organisation: {
          /**
           * A Chaser resource identifier.
           * @minLength 1
           */
          id: string;
          /** The string value returned by Chaser. */
          name?: string | null;
          /** The string value returned by Chaser. */
          legalName?: string | null;
          /** The string value returned by Chaser. */
          organisationId?: string | null;
          /** The string value returned by Chaser. */
          baseCurrency?: string | null;
          /** The string value returned by Chaser. */
          countryCode?: string | null;
          /** The string value returned by Chaser. */
          timezone?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          lastSyncDate?: string | null;
          /** The raw organisation object returned by Chaser. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Check whether the Chaser API status endpoint is reachable. */
    "chaserhq.get_status": {
      input: Record<string, never>;
      output: {
        /** Whether the Chaser status request succeeded. */
        ok: boolean;
        /** The raw status payload returned by Chaser. */
        raw: unknown;
      };
    };
    /** List Chaser customers with pagination and supported structured filters. */
    "chaserhq.list_customers": {
      input: {
        /**
         * The number of items per page. Chaser allows at most 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based page number to request.
         * @minimum 0
         */
        page?: number;
        /** Filters supported by Chaser's list customers endpoint. */
        filters?: {
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          externalId?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          companyName?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          contactFirstName?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          contactLastName?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          contactEmailAddress?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          status?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
        };
        /**
         * Optional customer fields to include in the response.
         * @minItems 1
         */
        additionalFields?: Array<"payment_portal_link" | "payer_rating" | "average_days_to_pay">;
      };
      output: {
        /** Customers returned by Chaser. */
        customers: Array<{
          /**
           * A Chaser resource identifier.
           * @minLength 1
           */
          id: string;
          /** The string value returned by Chaser. */
          externalId?: string | null;
          /** The string value returned by Chaser. */
          companyName?: string | null;
          /** The string value returned by Chaser. */
          contactFirstName?: string | null;
          /** The string value returned by Chaser. */
          contactLastName?: string | null;
          /** The string value returned by Chaser. */
          contactEmailAddress?: string | null;
          /** The string value returned by Chaser. */
          phoneNumber?: string | null;
          /** The string value returned by Chaser. */
          mobileNumber?: string | null;
          /** The string value returned by Chaser. */
          status?: string | null;
          /** The string value returned by Chaser. */
          paymentPortalLink?: string | null;
          /** The string value returned by Chaser. */
          payerRating?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          payerRatingUpdatedAt?: string | null;
          /** The numeric value returned by Chaser. */
          payerRatingNumberInvoicesConsidered?: number | null;
          /** The numeric value returned by Chaser. */
          averageDaysToPay?: number | null;
          /** Customer groups returned by Chaser. */
          groups?: Array<Record<string, unknown>>;
          /** Customer addresses returned by Chaser. */
          addresses?: Array<Record<string, unknown>>;
          /** The raw customer object returned by Chaser. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Chaser. */
        pagination: {
          /** The zero-based page number returned by Chaser. */
          pageNumber: number | null;
          /** The page size returned by Chaser. */
          pageSize: number | null;
          /** The total matching record count returned by Chaser. */
          totalCount: number | null;
        };
      };
    };
    /** List Chaser invoice history records with pagination and supported filters. */
    "chaserhq.list_invoice_history": {
      input: {
        /**
         * The number of items per page. Chaser allows at most 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based page number to request.
         * @minimum 0
         */
        page?: number;
        /** Filters supported by Chaser's list invoice history endpoint. */
        filters?: {
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          invoiceId?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          invoiceNumber?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          contactId?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
        };
      };
      output: {
        /** Invoice history records returned by Chaser. */
        histories: Array<{
          /**
           * A Chaser resource identifier.
           * @minLength 1
           */
          invoiceId: string;
          /** The string value returned by Chaser. */
          invoiceNumber?: string | null;
          /** The string value returned by Chaser. */
          contactId?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          expectPaymentDate?: string | null;
          /** The dispute details returned by Chaser. */
          dispute?: Record<string, unknown> | null;
          /** Invoice notes returned by Chaser. */
          notes?: Array<Record<string, unknown>>;
          /** Invoice status changes returned by Chaser. */
          statusChanges?: Array<Record<string, unknown>>;
          /** Chase events returned by Chaser. */
          chases?: Array<Record<string, unknown>>;
          /** Emails returned by Chaser. */
          emails?: Array<Record<string, unknown>>;
          /** The raw invoice history object returned by Chaser. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Chaser. */
        pagination: {
          /** The zero-based page number returned by Chaser. */
          pageNumber: number | null;
          /** The page size returned by Chaser. */
          pageSize: number | null;
          /** The total matching record count returned by Chaser. */
          totalCount: number | null;
        };
      };
    };
    /** List Chaser invoices with pagination and supported structured filters. */
    "chaserhq.list_invoices": {
      input: {
        /**
         * The number of items per page. Chaser allows at most 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based page number to request.
         * @minimum 0
         */
        page?: number;
        /** Filters supported by Chaser's list invoices endpoint. */
        filters?: {
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          invoiceId?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          invoiceNumber?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          status?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          currencyCode?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
          /** A numeric filter using Chaser's supported comparison operators. */
          amountDue?: {
            /** Match records equal to this value. */
            eq?: number;
            /** Match records not equal to this value. */
            ne?: number;
            /** Match records greater than this value. */
            gt?: number;
            /** Match records less than this value. */
            lt?: number;
            /** Match records greater than or equal to this value. */
            gte?: number;
            /** Match records less than or equal to this value. */
            lte?: number;
          };
          /** A numeric filter using Chaser's supported comparison operators. */
          amountPaid?: {
            /** Match records equal to this value. */
            eq?: number;
            /** Match records not equal to this value. */
            ne?: number;
            /** Match records greater than this value. */
            gt?: number;
            /** Match records less than this value. */
            lt?: number;
            /** Match records greater than or equal to this value. */
            gte?: number;
            /** Match records less than or equal to this value. */
            lte?: number;
          };
          /** A numeric filter using Chaser's supported comparison operators. */
          total?: {
            /** Match records equal to this value. */
            eq?: number;
            /** Match records not equal to this value. */
            ne?: number;
            /** Match records greater than this value. */
            gt?: number;
            /** Match records less than this value. */
            lt?: number;
            /** Match records greater than or equal to this value. */
            gte?: number;
            /** Match records less than or equal to this value. */
            lte?: number;
          };
          /** A numeric filter using Chaser's supported comparison operators. */
          subTotal?: {
            /** Match records equal to this value. */
            eq?: number;
            /** Match records not equal to this value. */
            ne?: number;
            /** Match records greater than this value. */
            gt?: number;
            /** Match records less than this value. */
            lt?: number;
            /** Match records greater than or equal to this value. */
            gte?: number;
            /** Match records less than or equal to this value. */
            lte?: number;
          };
          /** A date-time filter using Chaser's supported comparison operators. */
          date?: {
            /** Match records equal to this ISO 8601 date-time. */
            eq?: string;
            /** Match records not equal to this ISO 8601 date-time. */
            ne?: string;
            /** Match records after this ISO 8601 date-time. */
            gt?: string;
            /** Match records before this ISO 8601 date-time. */
            lt?: string;
            /** Match records at or after this ISO 8601 date-time. */
            gte?: string;
            /** Match records at or before this ISO 8601 date-time. */
            lte?: string;
          };
          /** A date-time filter using Chaser's supported comparison operators. */
          dueDate?: {
            /** Match records equal to this ISO 8601 date-time. */
            eq?: string;
            /** Match records not equal to this ISO 8601 date-time. */
            ne?: string;
            /** Match records after this ISO 8601 date-time. */
            gt?: string;
            /** Match records before this ISO 8601 date-time. */
            lt?: string;
            /** Match records at or after this ISO 8601 date-time. */
            gte?: string;
            /** Match records at or before this ISO 8601 date-time. */
            lte?: string;
          };
          /** A date-time filter using Chaser's supported comparison operators. */
          fullyPaidDate?: {
            /** Match records equal to this ISO 8601 date-time. */
            eq?: string;
            /** Match records not equal to this ISO 8601 date-time. */
            ne?: string;
            /** Match records after this ISO 8601 date-time. */
            gt?: string;
            /** Match records before this ISO 8601 date-time. */
            lt?: string;
            /** Match records at or after this ISO 8601 date-time. */
            gte?: string;
            /** Match records at or before this ISO 8601 date-time. */
            lte?: string;
          };
          /** A string filter using Chaser's supported eq, ne, in, and nin operators. */
          customerExternalId?: {
            /** Match records equal to this value. */
            eq?: string;
            /** Match records not equal to this value. */
            ne?: string;
            /**
             * Match records in this list.
             * @minItems 1
             */
            in?: Array<string>;
            /**
             * Exclude records in this list.
             * @minItems 1
             */
            nin?: Array<string>;
          };
        };
      };
      output: {
        /** Invoices returned by Chaser. */
        invoices: Array<{
          /**
           * A Chaser resource identifier.
           * @minLength 1
           */
          id: string;
          /** The string value returned by Chaser. */
          invoiceId?: string | null;
          /** The string value returned by Chaser. */
          invoiceNumber?: string | null;
          /** The string value returned by Chaser. */
          status?: string | null;
          /** The string value returned by Chaser. */
          currencyCode?: string | null;
          /** The numeric value returned by Chaser. */
          amountDue?: number | null;
          /** The numeric value returned by Chaser. */
          amountPaid?: number | null;
          /** The numeric value returned by Chaser. */
          total?: number | null;
          /** The numeric value returned by Chaser. */
          subTotal?: number | null;
          /** The ISO 8601 date-time returned by Chaser. */
          date?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          dueDate?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          fullyPaidDate?: string | null;
          /** The string value returned by Chaser. */
          customerExternalId?: string | null;
          /** The string value returned by Chaser. */
          customerName?: string | null;
          /** The string value returned by Chaser. */
          invoicePdfLink?: string | null;
          /** The ISO 8601 date-time returned by Chaser. */
          invoicePdfLinkUpdatedAt?: string | null;
          /** Payments returned by Chaser for this invoice. */
          payments?: Array<{
            /** The ISO 8601 date-time returned by Chaser. */
            date?: string | null;
            /** The numeric value returned by Chaser. */
            amount?: number | null;
            [key: string]: unknown;
          }>;
          /** The raw invoice object returned by Chaser. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Chaser. */
        pagination: {
          /** The zero-based page number returned by Chaser. */
          pageNumber: number | null;
          /** The page size returned by Chaser. */
          pageSize: number | null;
          /** The total matching record count returned by Chaser. */
          totalCount: number | null;
        };
      };
    };
  }
}

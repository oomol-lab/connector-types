import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve basic ChartMogul account settings for the authenticated API key. */
    "chartmogul.get_account": {
      input: {
        /**
         * Additional account settings to include in the response.
         * @minItems 1
         */
        include?: Array<"churn_recognition" | "churn_when_zero_mrr" | "auto_churn_subscription" | "refund_handling" | "proximate_movement_reclassification">;
      };
      output: {
        /** A normalized ChartMogul account object. */
        account: {
          /** The ChartMogul account UUID. */
          uuid: string | null;
          /** The account name returned by ChartMogul. */
          name: string | null;
          /** The account ISO 4217 currency code. */
          currency: string | null;
          /** The account time zone identifier. */
          timeZone: string | null;
          /** The first day of the week configured for the account. */
          weekStartOn: string | null;
          /** The raw account object returned by ChartMogul. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a single ChartMogul customer by customer UUID. */
    "chartmogul.get_customer": {
      input: {
        /**
         * The ChartMogul UUID of the customer.
         * @minLength 1
         */
        customerUuid: string;
      };
      output: {
        /** A normalized ChartMogul customer. */
        customer: {
          /** The ChartMogul UUID for the customer. */
          uuid: string | null;
          /** The primary external customer identifier. */
          externalId: string | null;
          /** All external customer identifiers returned by ChartMogul. */
          externalIds: Array<string>;
          /** The source UUID for the customer. */
          dataSourceUuid: string | null;
          /** All source UUIDs associated with the customer. */
          dataSourceUuids: Array<string>;
          /** The customer name when returned by ChartMogul. */
          name: string | null;
          /** The customer email when returned by ChartMogul. */
          email: string | null;
          /** The combined lead or subscription status. */
          status: string | null;
          /** The customer company name. */
          company: string | null;
          /** The customer country code. */
          country: string | null;
          /** The customer state or region. */
          state: string | null;
          /** The customer city. */
          city: string | null;
          /** The time when the customer first became a customer. */
          customerSince: string | null;
          /** The current monthly recurring revenue in the account currency subunit. */
          mrr: number | null;
          /** The current annual recurring revenue in the account currency subunit. */
          arr: number | null;
          /** The customer currency code. */
          currency: string | null;
          /** The ChartMogul app URL for the customer. */
          chartmogulUrl: string | null;
          /** The upstream billing system URL for the customer. */
          billingSystemUrl: string | null;
          /** The raw customer object returned by ChartMogul. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List ChartMogul contacts with cursor pagination and common contact filters. */
    "chartmogul.list_contacts": {
      input: {
        /**
         * The contact email address to filter by.
         * @minLength 1
         */
        email?: string;
        /**
         * The customer external identifier whose contacts should be returned.
         * @minLength 1
         */
        customerExternalId?: string;
        /**
         * The ChartMogul UUID of the customer.
         * @minLength 1
         */
        customerUuid?: string;
        /**
         * The source UUID whose contacts should be returned.
         * @minLength 1
         */
        dataSourceUuid?: string;
        /**
         * The cursor returned by ChartMogul for fetching the next page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of records to return. ChartMogul caps this at 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** The contacts returned by ChartMogul. */
        contacts: Array<{
          /** The ChartMogul UUID for the contact. */
          uuid: string | null;
          /** The ChartMogul UUID of the owning customer. */
          customerUuid: string | null;
          /** The external ID of the owning customer. */
          customerExternalId: string | null;
          /** The source UUID for the contact. */
          dataSourceUuid: string | null;
          /** The external contact identifier. */
          externalId: string | null;
          /** The contact first name. */
          firstName: string | null;
          /** The contact last name. */
          lastName: string | null;
          /** The contact job title. */
          title: string | null;
          /** The contact email address. */
          email: string | null;
          /** The contact phone number. */
          phone: string | null;
          /** The contact LinkedIn URL. */
          linkedIn: string | null;
          /** The contact Twitter or X URL. */
          twitter: string | null;
          /** The contact position value returned by ChartMogul. */
          position: number | null;
          /** The raw contact object returned by ChartMogul. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor to use for the next page when ChartMogul returns one. */
        cursor: string | null;
        /** Whether ChartMogul reports more records after this page. */
        hasMore: boolean;
      };
    };
    /** List ChartMogul customers with cursor pagination and common customer filters. */
    "chartmogul.list_customers": {
      input: {
        /**
         * The ChartMogul source UUID used to filter customers.
         * @minLength 1
         */
        dataSourceUuid?: string;
        /**
         * The external customer identifier to filter by.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The customer email address to search for.
         * @minLength 1
         */
        email?: string;
        /** Whether email search should also match associated contact email addresses. */
        withAssociatedEmails?: boolean;
        /**
         * The lead or subscription status to filter by.
         * @minLength 1
         */
        status?: string;
        /**
         * The billing system to filter by, such as Stripe, Recurly, or Custom.
         * @minLength 1
         */
        system?: string;
        /**
         * The cursor returned by ChartMogul for fetching the next page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of records to return. ChartMogul caps this at 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** The customers returned by ChartMogul. */
        customers: Array<{
          /** The ChartMogul UUID for the customer. */
          uuid: string | null;
          /** The primary external customer identifier. */
          externalId: string | null;
          /** All external customer identifiers returned by ChartMogul. */
          externalIds: Array<string>;
          /** The source UUID for the customer. */
          dataSourceUuid: string | null;
          /** All source UUIDs associated with the customer. */
          dataSourceUuids: Array<string>;
          /** The customer name when returned by ChartMogul. */
          name: string | null;
          /** The customer email when returned by ChartMogul. */
          email: string | null;
          /** The combined lead or subscription status. */
          status: string | null;
          /** The customer company name. */
          company: string | null;
          /** The customer country code. */
          country: string | null;
          /** The customer state or region. */
          state: string | null;
          /** The customer city. */
          city: string | null;
          /** The time when the customer first became a customer. */
          customerSince: string | null;
          /** The current monthly recurring revenue in the account currency subunit. */
          mrr: number | null;
          /** The current annual recurring revenue in the account currency subunit. */
          arr: number | null;
          /** The customer currency code. */
          currency: string | null;
          /** The ChartMogul app URL for the customer. */
          chartmogulUrl: string | null;
          /** The upstream billing system URL for the customer. */
          billingSystemUrl: string | null;
          /** The raw customer object returned by ChartMogul. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor to use for the next page when ChartMogul returns one. */
        cursor: string | null;
        /** Whether ChartMogul reports more records after this page. */
        hasMore: boolean;
      };
    };
    /** List ChartMogul data sources with optional source name or billing system filters. */
    "chartmogul.list_sources": {
      input: {
        /**
         * The source name to filter by.
         * @minLength 1
         */
        name?: string;
        /**
         * The billing system type to filter by, such as Stripe, Recurly, or Custom.
         * @minLength 1
         */
        system?: string;
      };
      output: {
        /** The data sources returned by ChartMogul. */
        dataSources: Array<{
          /** The ChartMogul UUID for the source. */
          uuid: string | null;
          /** The source name. */
          name: string | null;
          /** The billing system type for the source. */
          system: string | null;
          /** The time when the source was created. */
          createdAt: string | null;
          /** The current source status. */
          status: string | null;
          /** The raw data source object returned by ChartMogul. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}

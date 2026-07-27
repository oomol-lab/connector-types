import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Chargeblast credit request for a rejected alert. */
    "chargeblast.create_credit_request": {
      input: {
        /**
         * The rejected Chargeblast alert identifier.
         * @minLength 1
         */
        alertId: string;
        /**
         * Optional comments to include with the credit request.
         * @minLength 1
         */
        comments?: string;
      };
      output: {
        /** The raw Chargeblast response value returned by the API. */
        payload: unknown;
      };
    };
    /** Fetch one Chargeblast alert by identifier. */
    "chargeblast.get_alert": {
      input: {
        /**
         * The Chargeblast resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Chargeblast alert with stable top-level fields and the original payload. */
        alert: {
          /** The Chargeblast alert identifier. */
          id: string;
          /** The Chargeblast alert type, such as FRAUD or DISPUTE. */
          alertType: string | null;
          /** The Chargeblast alert network or sub-provider. */
          subprovider: string | null;
          /** The transaction amount represented in major currency units. */
          amount: number | null;
          /** The transaction currency code. */
          currency: string | null;
          /** The date and time when the alert was created. */
          createdAt: string | null;
          /** The date and time when the transaction took place. */
          transactionDate: string | null;
          /** The Chargeblast merchant identifier related to the alert. */
          merchantId: string | null;
          /** The alert reason code when returned by Chargeblast. */
          reasonCode: string | null;
          /** The customer email address associated with the alert. */
          customerEmail: string | null;
          /** The billing descriptor shown on the card statement. */
          descriptor: string | null;
          /** The redacted card number returned by Chargeblast. */
          card: string | null;
          /** The card network returned by Chargeblast. */
          cardBrand: string | null;
          /** The acquirer reference number returned by Chargeblast. */
          arn: string | null;
          /** The date and time when the alert was resolved. */
          resolvedDate: string | null;
          /** Whether the alert was resolved through the API. */
          resolvedByApi: boolean | null;
          /** The raw Chargeblast object returned by the API. */
          raw: Record<string, unknown>;
        };
        /** The raw Chargeblast object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one Chargeblast order by identifier, including receipt and eligibility data. */
    "chargeblast.get_order": {
      input: {
        /**
         * The Chargeblast resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The raw Chargeblast object returned by the API. */
        order: Record<string, unknown>;
        /** The raw Chargeblast object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Chargeblast alerts with optional alert-network filtering and pagination. */
    "chargeblast.list_alerts": {
      input: {
        /**
         * The type of alerts to filter for. Official examples include RDR, CDRN, Ethoca, TC40, and SAFE.
         * @minLength 1
         */
        filter?: string;
        /**
         * The Chargeblast page number to request. Alerts, orders, and deflection logs start at page 0; merchants default to page 1 in the official API.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Chargeblast records to request per page.
         * @exclusiveMinimum 0
         */
        per?: number;
      };
      output: {
        /** The alerts returned by Chargeblast. */
        alerts: Array<{
          /** The Chargeblast alert identifier. */
          id: string;
          /** The Chargeblast alert type, such as FRAUD or DISPUTE. */
          alertType: string | null;
          /** The Chargeblast alert network or sub-provider. */
          subprovider: string | null;
          /** The transaction amount represented in major currency units. */
          amount: number | null;
          /** The transaction currency code. */
          currency: string | null;
          /** The date and time when the alert was created. */
          createdAt: string | null;
          /** The date and time when the transaction took place. */
          transactionDate: string | null;
          /** The Chargeblast merchant identifier related to the alert. */
          merchantId: string | null;
          /** The alert reason code when returned by Chargeblast. */
          reasonCode: string | null;
          /** The customer email address associated with the alert. */
          customerEmail: string | null;
          /** The billing descriptor shown on the card statement. */
          descriptor: string | null;
          /** The redacted card number returned by Chargeblast. */
          card: string | null;
          /** The card network returned by Chargeblast. */
          cardBrand: string | null;
          /** The acquirer reference number returned by Chargeblast. */
          arn: string | null;
          /** The date and time when the alert was resolved. */
          resolvedDate: string | null;
          /** Whether the alert was resolved through the API. */
          resolvedByApi: boolean | null;
          /** The raw Chargeblast object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The page number returned by Chargeblast. */
        page: number;
        /** The page size returned by Chargeblast when present. */
        per: number | null;
        /** The total number of records returned by Chargeblast. */
        total: number;
        /** The raw Chargeblast object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Chargeblast digital receipt and deflection lookup logs. */
    "chargeblast.list_deflection_logs": {
      input: {
        /**
         * The Chargeblast page number to request. Alerts, orders, and deflection logs start at page 0; merchants default to page 1 in the official API.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Chargeblast records to request per page.
         * @exclusiveMinimum 0
         */
        per?: number;
        /** Optional Chargeblast deflection log filters. */
        filter?: {
          /**
           * The ISO8601 start date for deflection logs.
           * @format date-time
           */
          startDate?: string;
          /**
           * The ISO8601 end date for deflection logs.
           * @format date-time
           */
          endDate?: string;
          /**
           * The gateway for matched transactions.
           * @minLength 1
           */
          gateway?: string;
          /**
           * The deflection log status to filter for.
           * @minLength 1
           */
          status?: string;
        };
      };
      output: {
        /** The deflection logs returned by Chargeblast. */
        logs: Array<{
          /** The raw Chargeblast object returned by the API. */
          request: Record<string, unknown>;
          /** The raw Chargeblast object returned by the API. */
          response: Record<string, unknown>;
          /** The raw Chargeblast object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The page number returned by Chargeblast. */
        page: number;
        /** The page size returned by Chargeblast when present. */
        per: number | null;
        /** The total number of records returned by Chargeblast. */
        total: number;
        /** The raw Chargeblast object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List merchants in a Chargeblast account. */
    "chargeblast.list_merchants": {
      input: {
        /**
         * The Chargeblast page number to request. Alerts, orders, and deflection logs start at page 0; merchants default to page 1 in the official API.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Chargeblast records to request per page.
         * @exclusiveMinimum 0
         */
        per?: number;
      };
      output: {
        /** The merchants returned by Chargeblast. */
        merchants: Array<{
          /** The unique Chargeblast merchant identifier. */
          id: string;
          /** The merchant name set during Chargeblast onboarding. */
          name: string;
          /** The raw Chargeblast object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The page number returned by Chargeblast. */
        page: number;
        /** The total number of merchants returned by Chargeblast. */
        total: number;
        /** The raw Chargeblast object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Chargeblast order identifiers with pagination. */
    "chargeblast.list_orders": {
      input: {
        /**
         * The Chargeblast page number to request. Alerts, orders, and deflection logs start at page 0; merchants default to page 1 in the official API.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of Chargeblast records to request per page.
         * @exclusiveMinimum 0
         */
        per?: number;
      };
      output: {
        /** The Chargeblast order identifiers returned by the API. */
        orders: Array<string>;
        /** The page number returned by Chargeblast. */
        page: number;
        /** The page size returned by Chargeblast when present. */
        per: number | null;
        /** The total number of records returned by Chargeblast. */
        total: number;
        /** The raw Chargeblast object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Action one Chargeblast alert with an official reason code and optional expiration-time handling. */
    "chargeblast.update_alert": {
      input: {
        /**
         * The Chargeblast resource identifier.
         * @minLength 1
         */
        id: string;
        /** The Chargeblast reason code used to action an alert. */
        result: "Resolved" | "ResolvedPartial" | "ResolvedCancelled" | "AccountCancelled" | "CancellationProcessed" | "UnmatchedGeneral" | "UnmatchedCannotFindTransaction" | "Duplicate" | "MIDLost" | "AlreadyRefunded" | "AlreadyChargeback" | "Ineligible" | "TDS" | "CannotCancel" | "MatchedWillShip" | "EscalateChargeback" | "ContactedShipper" | "WIP" | "Error" | "None" | "NotMyDescriptor" | "Unactioned" | "";
        /** Whether Chargeblast should action the alert at expiration instead of immediately. Chargeblast ignores this when result is Resolved. */
        actionAtExpiration?: boolean;
      };
      output: {
        /** The raw Chargeblast response value returned by the API. */
        payload: unknown;
      };
    };
  }
}

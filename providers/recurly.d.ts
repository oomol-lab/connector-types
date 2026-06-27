import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Recurly account from JSON-friendly account fields. */
    "recurly.create_account": {
      input: {
        /**
         * The unique account code. This cannot be changed after creation.
         * @minLength 1
         * @maxLength 50
         */
        code: string;
        /**
         * A secondary value for the account.
         * @minLength 1
         * @maxLength 255
         */
        username?: string;
        /**
         * The email address used for account communication.
         * @maxLength 255
         * @format email
         */
        email?: string;
        /**
         * The account first name.
         * @minLength 1
         * @maxLength 255
         */
        firstName?: string;
        /**
         * The account last name.
         * @minLength 1
         * @maxLength 255
         */
        lastName?: string;
        /**
         * The account company name.
         * @minLength 1
         * @maxLength 100
         */
        company?: string;
        /**
         * The VAT number of the account.
         * @minLength 1
         * @maxLength 20
         */
        vatNumber?: string;
        /** Whether the account should be exempt from tax. */
        taxExempt?: boolean;
        /**
         * The locale Recurly should use for account emails.
         * @minLength 1
         */
        preferredLocale?: string;
        /**
         * The IANA time zone name Recurly should use for account emails.
         * @minLength 1
         */
        preferredTimeZone?: string;
        /** A basic Recurly address object. */
        address?: {
          /**
           * The first street address line.
           * @minLength 1
           * @maxLength 255
           */
          street1?: string;
          /**
           * The second street address line.
           * @minLength 1
           * @maxLength 255
           */
          street2?: string;
          /**
           * The address city.
           * @minLength 1
           * @maxLength 255
           */
          city?: string;
          /**
           * The address region or state.
           * @minLength 1
           * @maxLength 255
           */
          region?: string;
          /**
           * The postal code.
           * @minLength 1
           * @maxLength 20
           */
          postalCode?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          /**
           * The address phone number.
           * @minLength 1
           * @maxLength 30
           */
          phone?: string;
        };
      };
      output: {
        /** A normalized Recurly account. */
        account: {
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The account code.
           * @minLength 1
           */
          code: string | null;
          /** The account email address when returned by Recurly. */
          email: string | null;
          /** The account first name when returned by Recurly. */
          firstName: string | null;
          /** The account last name when returned by Recurly. */
          lastName: string | null;
          /** The account company name when returned by Recurly. */
          company: string | null;
          /** The Recurly account state. */
          state: string | null;
          /** Whether the account has an active, canceled, future, or paused subscription. */
          hasLiveSubscription: boolean | null;
          /** Whether the account has a past-due invoice. */
          hasPastDueInvoice: boolean | null;
          /** When the account was created. */
          createdAt: string | null;
          /** When the account was last changed. */
          updatedAt: string | null;
          /** The raw account object returned by Recurly. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a fixed-price Recurly plan with one or more currencies. */
    "recurly.create_plan": {
      input: {
        /**
         * The unique plan code.
         * @minLength 1
         * @maxLength 50
         */
        code: string;
        /**
         * The plan name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * The fixed-price currencies for this plan.
         * @minItems 1
         */
        currencies: Array<{
          /**
           * The 3-letter ISO 4217 currency code.
           * @minLength 3
           * @maxLength 3
           */
          currency: string;
          /** The unit price for this currency. */
          unitAmount: number;
        }>;
        /** Unit for the plan billing interval. */
        intervalUnit?: "days" | "months";
        /**
         * The number of interval units in each billing period.
         * @minimum 1
         */
        intervalLength?: number;
        /** Unit for the trial interval. */
        trialUnit?: "days" | "months";
        /**
         * The number of trial units.
         * @minimum 0
         */
        trialLength?: number;
        /**
         * The plan description.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** A normalized Recurly plan. */
        plan: {
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The plan code.
           * @minLength 1
           */
          code: string;
          /**
           * The plan name.
           * @minLength 1
           */
          name: string;
          /** The Recurly plan state. */
          state: string | null;
          /** The Recurly plan pricing model. */
          pricingModel: string | null;
          /** The plan billing interval unit. */
          intervalUnit: string | null;
          /** The number of interval units in each billing period. */
          intervalLength: number | null;
          /** When the plan was created. */
          createdAt: string | null;
          /** When the plan was last changed. */
          updatedAt: string | null;
          /** The raw plan object returned by Recurly. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Recurly subscription for an existing account and plan. */
    "recurly.create_subscription": {
      input: {
        /**
         * The code of the Recurly plan to subscribe to.
         * @minLength 1
         * @maxLength 50
         */
        planCode: string;
        /**
         * The 3-letter ISO 4217 currency code.
         * @minLength 3
         * @maxLength 3
         */
        currency: string;
        /**
         * The existing Recurly account code.
         * @minLength 1
         * @maxLength 50
         */
        accountCode: string;
        /**
         * The subscription quantity.
         * @minimum 1
         */
        quantity?: number;
        /** The subscription unit amount. */
        unitAmount?: number;
        /** The collection method for the subscription. */
        collectionMethod?: "automatic" | "manual";
        /**
         * The purchase order number for manual invoicing.
         * @minLength 1
         * @maxLength 50
         */
        poNumber?: string;
      };
      output: {
        /** A normalized Recurly subscription. */
        subscription: {
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The subscription UUID.
           * @minLength 1
           */
          uuid: string | null;
          /** The Recurly subscription state. */
          state: string | null;
          /** The ID of the account attached to the subscription. */
          accountId: string | null;
          /** The code of the account attached to the subscription. */
          accountCode: string | null;
          /** The ID of the plan attached to the subscription. */
          planId: string | null;
          /** The code of the plan attached to the subscription. */
          planCode: string | null;
          /** The subscription currency code. */
          currency: string | null;
          /** The subscription unit price. */
          unitAmount: number | null;
          /** The subscription quantity. */
          quantity: number | null;
          /** When the current billing period ends. */
          currentPeriodEndsAt: string | null;
          /** When the subscription was created. */
          createdAt: string | null;
          /** When the subscription was last changed. */
          updatedAt: string | null;
          /** The raw subscription object returned by Recurly. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Recurly account by ID or code. */
    "recurly.get_account": {
      input: {
        /**
         * The Recurly account ID or code.
         * @minLength 1
         */
        accountId: string;
      };
      output: {
        /** A normalized Recurly account. */
        account: {
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The account code.
           * @minLength 1
           */
          code: string | null;
          /** The account email address when returned by Recurly. */
          email: string | null;
          /** The account first name when returned by Recurly. */
          firstName: string | null;
          /** The account last name when returned by Recurly. */
          lastName: string | null;
          /** The account company name when returned by Recurly. */
          company: string | null;
          /** The Recurly account state. */
          state: string | null;
          /** Whether the account has an active, canceled, future, or paused subscription. */
          hasLiveSubscription: boolean | null;
          /** Whether the account has a past-due invoice. */
          hasPastDueInvoice: boolean | null;
          /** When the account was created. */
          createdAt: string | null;
          /** When the account was last changed. */
          updatedAt: string | null;
          /** The raw account object returned by Recurly. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Recurly plan by ID or code. */
    "recurly.get_plan": {
      input: {
        /**
         * The Recurly plan ID or code.
         * @minLength 1
         */
        planId: string;
      };
      output: {
        /** A normalized Recurly plan. */
        plan: {
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The plan code.
           * @minLength 1
           */
          code: string;
          /**
           * The plan name.
           * @minLength 1
           */
          name: string;
          /** The Recurly plan state. */
          state: string | null;
          /** The Recurly plan pricing model. */
          pricingModel: string | null;
          /** The plan billing interval unit. */
          intervalUnit: string | null;
          /** The number of interval units in each billing period. */
          intervalLength: number | null;
          /** When the plan was created. */
          createdAt: string | null;
          /** When the plan was last changed. */
          updatedAt: string | null;
          /** The raw plan object returned by Recurly. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Recurly subscription by ID or UUID. */
    "recurly.get_subscription": {
      input: {
        /**
         * The Recurly subscription ID or UUID.
         * @minLength 1
         */
        subscriptionId: string;
      };
      output: {
        /** A normalized Recurly subscription. */
        subscription: {
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The subscription UUID.
           * @minLength 1
           */
          uuid: string | null;
          /** The Recurly subscription state. */
          state: string | null;
          /** The ID of the account attached to the subscription. */
          accountId: string | null;
          /** The code of the account attached to the subscription. */
          accountCode: string | null;
          /** The ID of the plan attached to the subscription. */
          planId: string | null;
          /** The code of the plan attached to the subscription. */
          planCode: string | null;
          /** The subscription currency code. */
          currency: string | null;
          /** The subscription unit price. */
          unitAmount: number | null;
          /** The subscription quantity. */
          quantity: number | null;
          /** When the current billing period ends. */
          currentPeriodEndsAt: string | null;
          /** When the subscription was created. */
          createdAt: string | null;
          /** When the subscription was last changed. */
          updatedAt: string | null;
          /** The raw subscription object returned by Recurly. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Recurly accounts with pagination and common filters. */
    "recurly.list_accounts": {
      input: {
        /**
         * Recurly resource IDs to fetch in one list call. Do not combine ids with other filters.
         * @minItems 1
         * @maxItems 200
         */
        ids?: Array<string>;
        /**
         * The maximum number of Recurly records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The Recurly sort order. */
        order?: "asc" | "desc";
        /** The Recurly timestamp field used for sorting. */
        sort?: "created_at" | "updated_at";
        /**
         * Inclusively filter records by this ISO 8601 begin time when sorting by created_at or updated_at.
         * @format date-time
         */
        beginTime?: string;
        /**
         * Inclusively filter records by this ISO 8601 end time when sorting by created_at or updated_at.
         * @format date-time
         */
        endTime?: string;
        /** Filter for accounts with this exact email address. */
        email?: string;
        /** Filter for accounts with or without an active, canceled, or future subscription. */
        subscriber?: boolean;
        /** Filter for accounts with an invoice in the past_due state. */
        pastDue?: true;
        /**
         * The next path returned by a previous Recurly list response, such as /accounts?cursor=...
         * @minLength 1
         */
        nextPath?: string;
      };
      output: {
        /** Accounts returned by Recurly. */
        accounts: Array<{
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The account code.
           * @minLength 1
           */
          code: string | null;
          /** The account email address when returned by Recurly. */
          email: string | null;
          /** The account first name when returned by Recurly. */
          firstName: string | null;
          /** The account last name when returned by Recurly. */
          lastName: string | null;
          /** The account company name when returned by Recurly. */
          company: string | null;
          /** The Recurly account state. */
          state: string | null;
          /** Whether the account has an active, canceled, future, or paused subscription. */
          hasLiveSubscription: boolean | null;
          /** Whether the account has a past-due invoice. */
          hasPastDueInvoice: boolean | null;
          /** When the account was created. */
          createdAt: string | null;
          /** When the account was last changed. */
          updatedAt: string | null;
          /** The raw account object returned by Recurly. */
          raw: Record<string, unknown>;
        }>;
        /** Whether Recurly has more records after this page. */
        hasMore: boolean;
        /** The Recurly path for the next page when present. */
        next: string | null;
      };
    };
    /** List Recurly plans with pagination and common filters. */
    "recurly.list_plans": {
      input: {
        /**
         * Recurly resource IDs to fetch in one list call. Do not combine ids with other filters.
         * @minItems 1
         * @maxItems 200
         */
        ids?: Array<string>;
        /**
         * The maximum number of Recurly records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The Recurly sort order. */
        order?: "asc" | "desc";
        /** The Recurly timestamp field used for sorting. */
        sort?: "created_at" | "updated_at";
        /**
         * Inclusively filter records by this ISO 8601 begin time when sorting by created_at or updated_at.
         * @format date-time
         */
        beginTime?: string;
        /**
         * Inclusively filter records by this ISO 8601 end time when sorting by created_at or updated_at.
         * @format date-time
         */
        endTime?: string;
        /** Filter plans by state. */
        state?: "active" | "inactive";
        /**
         * The next path returned by a previous Recurly list response, such as /accounts?cursor=...
         * @minLength 1
         */
        nextPath?: string;
      };
      output: {
        /** Plans returned by Recurly. */
        plans: Array<{
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The plan code.
           * @minLength 1
           */
          code: string;
          /**
           * The plan name.
           * @minLength 1
           */
          name: string;
          /** The Recurly plan state. */
          state: string | null;
          /** The Recurly plan pricing model. */
          pricingModel: string | null;
          /** The plan billing interval unit. */
          intervalUnit: string | null;
          /** The number of interval units in each billing period. */
          intervalLength: number | null;
          /** When the plan was created. */
          createdAt: string | null;
          /** When the plan was last changed. */
          updatedAt: string | null;
          /** The raw plan object returned by Recurly. */
          raw: Record<string, unknown>;
        }>;
        /** Whether Recurly has more records after this page. */
        hasMore: boolean;
        /** The Recurly path for the next page when present. */
        next: string | null;
      };
    };
    /** List Recurly subscriptions with pagination and common filters. */
    "recurly.list_subscriptions": {
      input: {
        /**
         * Recurly resource IDs to fetch in one list call. Do not combine ids with other filters.
         * @minItems 1
         * @maxItems 200
         */
        ids?: Array<string>;
        /**
         * The maximum number of Recurly records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The Recurly sort order. */
        order?: "asc" | "desc";
        /** The Recurly timestamp field used for sorting. */
        sort?: "created_at" | "updated_at";
        /**
         * Inclusively filter records by this ISO 8601 begin time when sorting by created_at or updated_at.
         * @format date-time
         */
        beginTime?: string;
        /**
         * Inclusively filter records by this ISO 8601 end time when sorting by created_at or updated_at.
         * @format date-time
         */
        endTime?: string;
        /** Filter subscriptions by state. */
        state?: "active" | "canceled" | "expired" | "future" | "in_trial" | "live";
        /**
         * The next path returned by a previous Recurly list response, such as /accounts?cursor=...
         * @minLength 1
         */
        nextPath?: string;
      };
      output: {
        /** Subscriptions returned by Recurly. */
        subscriptions: Array<{
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The subscription UUID.
           * @minLength 1
           */
          uuid: string | null;
          /** The Recurly subscription state. */
          state: string | null;
          /** The ID of the account attached to the subscription. */
          accountId: string | null;
          /** The code of the account attached to the subscription. */
          accountCode: string | null;
          /** The ID of the plan attached to the subscription. */
          planId: string | null;
          /** The code of the plan attached to the subscription. */
          planCode: string | null;
          /** The subscription currency code. */
          currency: string | null;
          /** The subscription unit price. */
          unitAmount: number | null;
          /** The subscription quantity. */
          quantity: number | null;
          /** When the current billing period ends. */
          currentPeriodEndsAt: string | null;
          /** When the subscription was created. */
          createdAt: string | null;
          /** When the subscription was last changed. */
          updatedAt: string | null;
          /** The raw subscription object returned by Recurly. */
          raw: Record<string, unknown>;
        }>;
        /** Whether Recurly has more records after this page. */
        hasMore: boolean;
        /** The Recurly path for the next page when present. */
        next: string | null;
      };
    };
    /** Update basic profile fields on a Recurly account. */
    "recurly.update_account": {
      input: {
        /**
         * The Recurly account ID or code.
         * @minLength 1
         */
        accountId: string;
        /**
         * A secondary value for the account.
         * @minLength 1
         * @maxLength 255
         */
        username?: string;
        /**
         * The email address used for account communication.
         * @maxLength 255
         * @format email
         */
        email?: string;
        /**
         * The account first name.
         * @minLength 1
         * @maxLength 255
         */
        firstName?: string;
        /**
         * The account last name.
         * @minLength 1
         * @maxLength 255
         */
        lastName?: string;
        /**
         * The account company name.
         * @minLength 1
         * @maxLength 100
         */
        company?: string;
        /**
         * The VAT number of the account.
         * @minLength 1
         * @maxLength 20
         */
        vatNumber?: string;
        /** Whether the account should be exempt from tax. */
        taxExempt?: boolean;
        /**
         * The locale Recurly should use for account emails.
         * @minLength 1
         */
        preferredLocale?: string;
        /**
         * The IANA time zone name Recurly should use for account emails.
         * @minLength 1
         */
        preferredTimeZone?: string;
        /** A basic Recurly address object. */
        address?: {
          /**
           * The first street address line.
           * @minLength 1
           * @maxLength 255
           */
          street1?: string;
          /**
           * The second street address line.
           * @minLength 1
           * @maxLength 255
           */
          street2?: string;
          /**
           * The address city.
           * @minLength 1
           * @maxLength 255
           */
          city?: string;
          /**
           * The address region or state.
           * @minLength 1
           * @maxLength 255
           */
          region?: string;
          /**
           * The postal code.
           * @minLength 1
           * @maxLength 20
           */
          postalCode?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          /**
           * The address phone number.
           * @minLength 1
           * @maxLength 30
           */
          phone?: string;
        };
      };
      output: {
        /** A normalized Recurly account. */
        account: {
          /**
           * A Recurly resource ID.
           * @minLength 1
           * @maxLength 13
           */
          id: string;
          /**
           * The account code.
           * @minLength 1
           */
          code: string | null;
          /** The account email address when returned by Recurly. */
          email: string | null;
          /** The account first name when returned by Recurly. */
          firstName: string | null;
          /** The account last name when returned by Recurly. */
          lastName: string | null;
          /** The account company name when returned by Recurly. */
          company: string | null;
          /** The Recurly account state. */
          state: string | null;
          /** Whether the account has an active, canceled, future, or paused subscription. */
          hasLiveSubscription: boolean | null;
          /** Whether the account has a past-due invoice. */
          hasPastDueInvoice: boolean | null;
          /** When the account was created. */
          createdAt: string | null;
          /** When the account was last changed. */
          updatedAt: string | null;
          /** The raw account object returned by Recurly. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}

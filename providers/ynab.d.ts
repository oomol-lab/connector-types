import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a single YNAB account. */
    "ynab.get_account": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /**
         * YNAB account ID.
         * @minLength 1
         */
        account_id: string;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          account?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single YNAB category. */
    "ynab.get_category": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /**
         * YNAB category ID.
         * @minLength 1
         */
        category_id: string;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          category?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single YNAB plan month. */
    "ynab.get_month": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /**
         * Plan month in ISO date format, or "current" for the current month.
         * @minLength 1
         */
        month: string;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          month?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a YNAB category for a specific plan month. */
    "ynab.get_month_category": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /**
         * Plan month in ISO date format, or "current" for the current month.
         * @minLength 1
         */
        month: string;
        /**
         * YNAB category ID.
         * @minLength 1
         */
        category_id: string;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          category?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single YNAB payee. */
    "ynab.get_payee": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /**
         * YNAB payee ID.
         * @minLength 1
         */
        payee_id: string;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          payee?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single YNAB plan with related entities. */
    "ynab.get_plan": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /** Starting server knowledge value. When provided, YNAB returns only entities changed since this value. */
        last_knowledge_of_server?: number;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          plan?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve settings for a YNAB plan. */
    "ynab.get_plan_settings": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          settings?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single YNAB transaction. */
    "ynab.get_transaction": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /**
         * YNAB transaction ID.
         * @minLength 1
         */
        transaction_id: string;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          transaction?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the authenticated YNAB user. */
    "ynab.get_user": {
      input: Record<string, never>;
      output: {
        /** YNAB response data. */
        data: {
          /** YNAB object returned by the API. */
          user: Record<string, unknown>;
        };
      };
    };
    /** List accounts for a YNAB plan. */
    "ynab.list_accounts": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /** Starting server knowledge value. When provided, YNAB returns only entities changed since this value. */
        last_knowledge_of_server?: number;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** Accounts returned by YNAB. */
          accounts?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List categories grouped by category group for a YNAB plan. */
    "ynab.list_categories": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /** Starting server knowledge value. When provided, YNAB returns only entities changed since this value. */
        last_knowledge_of_server?: number;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** Category groups returned by YNAB. */
          category_groups?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List months for a YNAB plan. */
    "ynab.list_months": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /** Starting server knowledge value. When provided, YNAB returns only entities changed since this value. */
        last_knowledge_of_server?: number;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** Months returned by YNAB. */
          months?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List payees for a YNAB plan. */
    "ynab.list_payees": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /** Starting server knowledge value. When provided, YNAB returns only entities changed since this value. */
        last_knowledge_of_server?: number;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** Payees returned by YNAB. */
          payees?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List YNAB plans with summary information. */
    "ynab.list_plans": {
      input: {
        /** Whether to include plan accounts in the response. */
        include_accounts?: boolean;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** Plans returned by YNAB. */
          plans?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List YNAB plan transactions. */
    "ynab.list_transactions": {
      input: {
        /**
         * YNAB plan ID. Use "last-used" for the last used plan, or "default" when default plan selection is enabled.
         * @minLength 1
         */
        plan_id: string;
        /**
         * Only include transactions on or after this ISO date.
         * @format date
         */
        since_date?: string;
        /**
         * Only include transactions on or before this ISO date.
         * @format date
         */
        until_date?: string;
        /** Optional YNAB transaction filter. */
        type?: "uncategorized" | "unapproved";
        /** Starting server knowledge value. When provided, YNAB returns only entities changed since this value. */
        last_knowledge_of_server?: number;
      };
      output: {
        /** YNAB response data. */
        data: {
          /** Transactions returned by YNAB. */
          transactions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}

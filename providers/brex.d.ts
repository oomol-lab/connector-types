import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Brex budget by ID. */
    "brex.get_budget": {
      input: {
        /**
         * The Brex resource identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Brex budget. */
        budget: {
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The Brex account this budget belongs to. */
          accountId: string;
          /** The budget name. */
          name: string;
          /** The budget description. */
          description?: string | null;
          /** The parent budget ID. */
          parentBudgetId?: string | null;
          /** User IDs of the budget owners. */
          ownerUserIds: Array<string>;
          /** The budget recurrence period type. */
          periodRecurrenceType: string;
          /** The date when the budget starts counting. */
          startDate?: string | null;
          /** The date when the budget stops counting. */
          endDate?: string | null;
          /** The amount in the smallest denomination of the currency. */
          amount?: number | null;
          /** The ISO 4217 currency code. */
          currency?: string | null;
          /** The Brex budget status. */
          status: string;
          /** Whether the budget amount blocks spend. */
          limitType?: string | null;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by Brex. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the Brex company associated with the connected user token. */
    "brex.get_company": {
      input: Record<string, never>;
      output: {
        /** A normalized Brex company. */
        company: {
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The legal name of the company. */
          legalName: string;
          /** The Brex company account type. */
          accountType: string;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by Brex. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the Brex user associated with the connected user token. */
    "brex.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A normalized Brex user. */
        user: {
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The user's first name. */
          firstName: string;
          /** The user's last name. */
          lastName: string;
          /**
           * The user's email address.
           * @format email
           */
          email: string;
          /** The Brex user status. */
          status?: string | null;
          /** The Brex user ID of this user's manager. */
          managerId?: string | null;
          /** The Brex department ID assigned to the user. */
          departmentId?: string | null;
          /** The Brex location ID assigned to the user. */
          locationId?: string | null;
          /** The Brex title ID assigned to the user. */
          titleId?: string | null;
          /** Identifier displayed by the IDP or HR system. */
          remoteDisplayId?: string | null;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by Brex. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Brex expense by ID. */
    "brex.get_expense": {
      input: {
        /**
         * The Brex resource identifier.
         * @minLength 1
         */
        id: string;
        /**
         * Brex expandable fields to include in the response.
         * @minItems 1
         * @maxItems 20
         */
        expand?: Array<string>;
        /** Whether Brex should load custom fields for the expense. */
        loadCustomFields?: boolean;
      };
      output: {
        /** A normalized Brex expense. */
        expense: {
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The expense memo. */
          memo?: string | null;
          /** The expense status. */
          status?: string | null;
          /** The expense payment status. */
          paymentStatus?: string | null;
          /** The Brex expense category. */
          category?: string | null;
          /** The Brex user ID associated with the expense. */
          userId?: string | null;
          /** The Brex budget ID associated with the expense. */
          budgetId?: string | null;
          /** The merchant descriptor returned by Brex. */
          merchantDescriptor?: string | null;
          /** The time the purchase was made. */
          purchasedAt?: string | null;
          /** The last time the expense was updated. */
          updatedAt?: string | null;
          /** The amount in the smallest denomination of the currency. */
          billingAmount?: number | null;
          /** The ISO 4217 currency code. */
          billingCurrency?: string | null;
          /** The amount in the smallest denomination of the currency. */
          originalAmount?: number | null;
          /** The ISO 4217 currency code. */
          originalCurrency?: string | null;
          /** The amount in the smallest denomination of the currency. */
          purchasedAmount?: number | null;
          /** The ISO 4217 currency code. */
          purchasedCurrency?: string | null;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        };
        /** The raw object returned by Brex. */
        raw: Record<string, unknown>;
      };
    };
    /** List Brex budgets with cursor pagination. */
    "brex.list_budgets": {
      input: {
        /**
         * The Brex cursor returned from a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** Brex budgets returned for the requested page. */
        items: Array<{
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The Brex account this budget belongs to. */
          accountId: string;
          /** The budget name. */
          name: string;
          /** The budget description. */
          description?: string | null;
          /** The parent budget ID. */
          parentBudgetId?: string | null;
          /** User IDs of the budget owners. */
          ownerUserIds: Array<string>;
          /** The budget recurrence period type. */
          periodRecurrenceType: string;
          /** The date when the budget starts counting. */
          startDate?: string | null;
          /** The date when the budget stops counting. */
          endDate?: string | null;
          /** The amount in the smallest denomination of the currency. */
          amount?: number | null;
          /** The ISO 4217 currency code. */
          currency?: string | null;
          /** The Brex budget status. */
          status: string;
          /** Whether the budget amount blocks spend. */
          limitType?: string | null;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor for the next page of budgets. */
        nextCursor: string | null;
        /** The raw paginated response returned by Brex. */
        raw: {
          /** The cursor for the next page returned by Brex. */
          next_cursor?: string | null;
          /** The raw items returned by Brex. */
          items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List Brex card accounts for the connected company. */
    "brex.list_card_accounts": {
      input: Record<string, never>;
      output: {
        /** Brex card accounts returned by the API. */
        items: Array<{
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The card account status. */
          status?: string | null;
          /** The amount in the smallest denomination of the currency. */
          currentBalanceAmount?: number | null;
          /** The ISO 4217 currency code. */
          currentBalanceCurrency?: string | null;
          /** The amount in the smallest denomination of the currency. */
          availableBalanceAmount?: number | null;
          /** The ISO 4217 currency code. */
          availableBalanceCurrency?: string | null;
          /** The amount in the smallest denomination of the currency. */
          accountLimitAmount?: number | null;
          /** The ISO 4217 currency code. */
          accountLimitCurrency?: string | null;
          /** The current statement period start date. */
          statementStartDate?: string | null;
          /** The current statement period end date. */
          statementEndDate?: string | null;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor for the next page if Brex returns one. */
        nextCursor: string | null;
        /** The raw object returned by Brex. */
        raw: Record<string, unknown>;
      };
    };
    /** List Brex expenses with documented filters and cursor pagination. */
    "brex.list_expenses": {
      input: {
        /**
         * The Brex cursor returned from a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of expenses to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Brex expandable fields to include in the response.
         * @minItems 1
         * @maxItems 20
         */
        expand?: Array<string>;
        /**
         * Brex user IDs to filter expenses by.
         * @minItems 1
         * @maxItems 100
         */
        userIds?: Array<string>;
        /**
         * Parent expense IDs to filter itemized expenses by.
         * @minItems 1
         * @maxItems 100
         */
        parentExpenseIds?: Array<string>;
        /**
         * Brex budget IDs to filter expenses by.
         * @minItems 1
         * @maxItems 100
         */
        budgetIds?: Array<string>;
        /**
         * Brex spending entity IDs to filter expenses by.
         * @minItems 1
         * @maxItems 100
         */
        spendingEntityIds?: Array<string>;
        /**
         * Brex expense types to filter by.
         * @minItems 1
         * @maxItems 20
         */
        expenseType?: Array<string>;
        /**
         * Brex expense statuses to filter by.
         * @minItems 1
         * @maxItems 20
         */
        status?: Array<string>;
        /**
         * Brex expense payment statuses to filter by.
         * @minItems 1
         * @maxItems 20
         */
        paymentStatus?: Array<string>;
        /**
         * Return expenses purchased on or after this RFC 3339 timestamp.
         * @format date-time
         */
        purchasedAtStart?: string;
        /**
         * Return expenses purchased on or before this RFC 3339 timestamp.
         * @format date-time
         */
        purchasedAtEnd?: string;
        /**
         * Return expenses updated on or after this RFC 3339 timestamp.
         * @format date-time
         */
        updatedAtStart?: string;
        /**
         * Return expenses updated on or before this RFC 3339 timestamp.
         * @format date-time
         */
        updatedAtEnd?: string;
        /**
         * Return expenses with payment posted on or after this RFC 3339 timestamp.
         * @format date-time
         */
        paymentPostedAtStart?: string;
        /**
         * Return expenses with payment posted on or before this RFC 3339 timestamp.
         * @format date-time
         */
        paymentPostedAtEnd?: string;
        /** Whether Brex should load custom fields for expenses. */
        loadCustomFields?: boolean;
      };
      output: {
        /** Brex expenses returned for the requested page. */
        items: Array<{
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The expense memo. */
          memo?: string | null;
          /** The expense status. */
          status?: string | null;
          /** The expense payment status. */
          paymentStatus?: string | null;
          /** The Brex expense category. */
          category?: string | null;
          /** The Brex user ID associated with the expense. */
          userId?: string | null;
          /** The Brex budget ID associated with the expense. */
          budgetId?: string | null;
          /** The merchant descriptor returned by Brex. */
          merchantDescriptor?: string | null;
          /** The time the purchase was made. */
          purchasedAt?: string | null;
          /** The last time the expense was updated. */
          updatedAt?: string | null;
          /** The amount in the smallest denomination of the currency. */
          billingAmount?: number | null;
          /** The ISO 4217 currency code. */
          billingCurrency?: string | null;
          /** The amount in the smallest denomination of the currency. */
          originalAmount?: number | null;
          /** The ISO 4217 currency code. */
          originalCurrency?: string | null;
          /** The amount in the smallest denomination of the currency. */
          purchasedAmount?: number | null;
          /** The ISO 4217 currency code. */
          purchasedCurrency?: string | null;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor for the next page of expenses. */
        nextCursor: string | null;
        /** The raw paginated response returned by Brex. */
        raw: {
          /** The cursor for the next page returned by Brex. */
          next_cursor?: string | null;
          /** The raw items returned by Brex. */
          items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List settled transactions across all Brex card accounts with optional user and date filters. */
    "brex.list_primary_card_transactions": {
      input: {
        /**
         * The Brex cursor returned from a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Brex user IDs to filter transactions by.
         * @minItems 1
         * @maxItems 100
         */
        userIds?: Array<string>;
        /**
         * Return transactions posted on or after this RFC 3339 timestamp.
         * @format date-time
         */
        postedAtStart?: string;
        /**
         * Brex expandable fields to include in the response.
         * @minItems 1
         * @maxItems 20
         */
        expand?: Array<string>;
      };
      output: {
        /** Brex primary card transactions returned for the requested page. */
        items: Array<{
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The transaction description. */
          description: string;
          /** The amount in the smallest denomination of the currency. */
          amount?: number | null;
          /** The ISO 4217 currency code. */
          currency?: string | null;
          /** The transaction initiated date returned by Brex. */
          initiatedAtDate: string;
          /** The transaction posted date returned by Brex. */
          postedAtDate: string;
          /** The Brex transaction type. */
          type?: string | null;
          /** The Brex card ID used for the transaction. */
          cardId?: string | null;
          /** The Brex expense ID related to the transaction. */
          expenseId?: string | null;
          /** The merchant descriptor returned by Brex. */
          merchantDescriptor?: string | null;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor for the next page of transactions. */
        nextCursor: string | null;
        /** The raw paginated response returned by Brex. */
        raw: {
          /** The cursor for the next page returned by Brex. */
          next_cursor?: string | null;
          /** The raw items returned by Brex. */
          items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List Brex users with optional email, remote display ID, and cursor filters. */
    "brex.list_users": {
      input: {
        /**
         * The Brex cursor returned from a previous list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Filter users by a single email address.
         * @format email
         */
        email?: string;
        /**
         * Filter users by one remote display ID.
         * @minLength 1
         */
        remoteDisplayId?: string;
        /**
         * Brex expandable fields to include in the response.
         * @minItems 1
         * @maxItems 20
         */
        expand?: Array<string>;
      };
      output: {
        /** Brex users returned for the requested page. */
        items: Array<{
          /**
           * The Brex resource identifier.
           * @minLength 1
           */
          id: string;
          /** The user's first name. */
          firstName: string;
          /** The user's last name. */
          lastName: string;
          /**
           * The user's email address.
           * @format email
           */
          email: string;
          /** The Brex user status. */
          status?: string | null;
          /** The Brex user ID of this user's manager. */
          managerId?: string | null;
          /** The Brex department ID assigned to the user. */
          departmentId?: string | null;
          /** The Brex location ID assigned to the user. */
          locationId?: string | null;
          /** The Brex title ID assigned to the user. */
          titleId?: string | null;
          /** Identifier displayed by the IDP or HR system. */
          remoteDisplayId?: string | null;
          /** The raw object returned by Brex. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor for the next page of Brex users. */
        nextCursor: string | null;
        /** The raw paginated response returned by Brex. */
        raw: {
          /** The cursor for the next page returned by Brex. */
          next_cursor?: string | null;
          /** The raw items returned by Brex. */
          items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}

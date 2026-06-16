import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Givebutter campaign by ID. */
    "givebutter.get_campaign": {
      input: {
        /** The Givebutter campaign ID. */
        campaignId: string | number;
      };
      output: {
        /** A raw JSON object returned by Givebutter. */
        campaign: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Givebutter chapter by ID. */
    "givebutter.get_chapter": {
      input: {
        /** The Givebutter chapter ID. */
        chapterId: string | number;
      };
      output: {
        /** A raw JSON object returned by Givebutter. */
        chapter: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Givebutter contact by ID. */
    "givebutter.get_contact": {
      input: {
        /** The Givebutter contact ID. */
        contactId: string | number;
      };
      output: {
        /** A raw JSON object returned by Givebutter. */
        contact: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Givebutter fund by ID. */
    "givebutter.get_fund": {
      input: {
        /** The Givebutter fund ID. */
        fundId: string | number;
      };
      output: {
        /** A raw JSON object returned by Givebutter. */
        fund: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Givebutter recurring plan by ID. */
    "givebutter.get_recurring_plan": {
      input: {
        /** The Givebutter recurring plan ID. */
        recurringPlanId: string | number;
      };
      output: {
        /** A raw JSON object returned by Givebutter. */
        recurringPlan: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Givebutter transaction by ID. */
    "givebutter.get_transaction": {
      input: {
        /** The Givebutter transaction ID. */
        transactionId: string | number;
      };
      output: {
        /** A raw JSON object returned by Givebutter. */
        transaction: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** List Givebutter campaigns with pagination and optional official filters. */
    "givebutter.list_campaigns": {
      input: {
        /**
         * The Givebutter page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Givebutter records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Additional official Givebutter query parameters for this list endpoint. */
        query?: Record<string, string | number | boolean>;
      };
      output: {
        /** Raw JSON objects returned by Givebutter. */
        campaigns: Array<Record<string, unknown>>;
        /** Pagination links returned by Givebutter. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by Givebutter. */
        meta: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** List Givebutter chapters with pagination and optional official filters. */
    "givebutter.list_chapters": {
      input: {
        /**
         * The Givebutter page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Givebutter records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Additional official Givebutter query parameters for this list endpoint. */
        query?: Record<string, string | number | boolean>;
      };
      output: {
        /** Raw JSON objects returned by Givebutter. */
        chapters: Array<Record<string, unknown>>;
        /** Pagination links returned by Givebutter. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by Givebutter. */
        meta: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** List Givebutter contacts with pagination and optional official filters. */
    "givebutter.list_contacts": {
      input: {
        /**
         * The Givebutter page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Givebutter records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Additional official Givebutter query parameters for this list endpoint. */
        query?: Record<string, string | number | boolean>;
      };
      output: {
        /** Raw JSON objects returned by Givebutter. */
        contacts: Array<Record<string, unknown>>;
        /** Pagination links returned by Givebutter. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by Givebutter. */
        meta: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** List Givebutter funds with pagination and optional official filters. */
    "givebutter.list_funds": {
      input: {
        /**
         * The Givebutter page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Givebutter records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Additional official Givebutter query parameters for this list endpoint. */
        query?: Record<string, string | number | boolean>;
      };
      output: {
        /** Raw JSON objects returned by Givebutter. */
        funds: Array<Record<string, unknown>>;
        /** Pagination links returned by Givebutter. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by Givebutter. */
        meta: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** List Givebutter recurring plans with pagination and optional official filters. */
    "givebutter.list_recurring_plans": {
      input: {
        /**
         * The Givebutter page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Givebutter records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Additional official Givebutter query parameters for this list endpoint. */
        query?: Record<string, string | number | boolean>;
      };
      output: {
        /** Raw JSON objects returned by Givebutter. */
        recurringPlans: Array<Record<string, unknown>>;
        /** Pagination links returned by Givebutter. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by Givebutter. */
        meta: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
    /** List Givebutter transactions with pagination and optional official filters. */
    "givebutter.list_transactions": {
      input: {
        /**
         * The Givebutter page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Givebutter records to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Additional official Givebutter query parameters for this list endpoint. */
        query?: Record<string, string | number | boolean>;
      };
      output: {
        /** Raw JSON objects returned by Givebutter. */
        transactions: Array<Record<string, unknown>>;
        /** Pagination links returned by Givebutter. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by Givebutter. */
        meta: Record<string, unknown>;
        /** A raw JSON object returned by Givebutter. */
        raw: Record<string, unknown>;
      };
    };
  }
}

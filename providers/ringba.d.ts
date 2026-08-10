import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Ringba account information available to the connected API token. */
    "ringba.get_account": {
      input: Record<string, never>;
      output: {
        /** The Ringba transaction ID for the request. */
        transactionId: string;
        /** The Ringba accounts available to the token. */
        account: Array<{
          /** The Ringba account ID. */
          id?: string;
          /** The Ringba account name. */
          name?: string;
          /** The Ringba account ID used by account-scoped endpoints. */
          accountId?: string;
          /** Whether the Ringba account is enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get a Ringba campaign by ID. */
    "ringba.get_campaign": {
      input: {
        /**
         * The Ringba campaign ID, including its uppercase CA prefix.
         * @minLength 1
         */
        campaignId: string;
        /**
         * The Ringba account ID to use instead of the account selected during connection.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** The Ringba transaction ID for the request. */
        transactionId: string;
        /** A Ringba campaign object. */
        campaign: {
          /** The Ringba campaign ID. */
          id?: string;
          /** The Ringba campaign name. */
          name?: string;
          /** The Ringba account ID that owns the campaign. */
          accountId?: string;
          /** Whether the campaign is enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a Ringba phone number by ID. */
    "ringba.get_number": {
      input: {
        /**
         * The Ringba number ID.
         * @minLength 1
         */
        numberId: string;
        /**
         * The Ringba account ID to use instead of the account selected during connection.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** The Ringba transaction ID for the request. */
        transactionId: string;
        /** A Ringba phone number object. */
        number: {
          /** The Ringba number ID. */
          id?: string;
          /** The phone number in the format returned by Ringba. */
          phoneNumber?: string;
          /** The Ringba account ID that owns the number. */
          accountId?: string;
          /** Whether the number is enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a Ringba publisher by ID. */
    "ringba.get_publisher": {
      input: {
        /**
         * The Ringba publisher ID.
         * @minLength 1
         */
        publisherId: string;
        /**
         * The Ringba account ID to use instead of the account selected during connection.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** The Ringba transaction ID for the request. */
        transactionId: string;
        /** A Ringba publisher object. */
        publisher: {
          /** The Ringba publisher ID. */
          id?: string;
          /** The Ringba publisher name. */
          name?: string;
          /** The Ringba account ID associated with the publisher. */
          accountId?: string;
          /** Whether the publisher is enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List active campaigns in the connected Ringba account. */
    "ringba.list_campaigns": {
      input: {
        /**
         * The Ringba account ID to use instead of the account selected during connection.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** The Ringba transaction ID for the request. */
        transactionId: string;
        /** The active campaigns in the account. */
        campaigns: Array<{
          /** The Ringba campaign ID. */
          id?: string;
          /** The Ringba campaign name. */
          name?: string;
          /** The Ringba account ID that owns the campaign. */
          accountId?: string;
          /** Whether the campaign is enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List phone numbers in the connected Ringba account. */
    "ringba.list_numbers": {
      input: {
        /**
         * The Ringba account ID to use instead of the account selected during connection.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** The Ringba transaction ID for the request. */
        transactionId: string;
        /** The phone numbers in the account. */
        numbers: Array<{
          /** The Ringba number ID. */
          id?: string;
          /** The phone number in the format returned by Ringba. */
          phoneNumber?: string;
          /** The Ringba account ID that owns the number. */
          accountId?: string;
          /** Whether the number is enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List publishers in the connected Ringba account. */
    "ringba.list_publishers": {
      input: {
        /**
         * The Ringba account ID to use instead of the account selected during connection.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** The Ringba transaction ID for the request. */
        transactionId: string;
        /** The publishers in the account. */
        publishers: Array<{
          /** The Ringba publisher ID. */
          id?: string;
          /** The Ringba publisher name. */
          name?: string;
          /** The Ringba account ID associated with the publisher. */
          accountId?: string;
          /** Whether the publisher is enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}

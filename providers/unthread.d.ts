import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an external customer account in Unthread. */
    "unthread.create_account": {
      input: {
        /**
         * The account name.
         * @minLength 1
         */
        name: string;
        /**
         * The ID of the primary support user or team.
         * @minLength 1
         */
        primarySupportAssigneeId?: string | null;
        /** The type of the primary support assignee. */
        primarySupportAssigneeType?: "user" | "team" | null;
        /**
         * The ID of the secondary support user or team.
         * @minLength 1
         */
        secondarySupportAssigneeId?: string | null;
        /** The type of the secondary support assignee. */
        secondarySupportAssigneeType?: "user" | "team" | null;
        /** Email addresses and domains associated with the account. */
        emailsAndDomains?: Array<string>;
        /** Slack channel IDs associated with the account. */
        slackChannelIds?: Array<string>;
        /** Slack workspace IDs associated with the account. */
        slackTeamIds?: Array<string>;
        /** Custom field values associated with the account. */
        customFields?: Array<Record<string, unknown>>;
        /** Support steps configured for the account. */
        supportSteps?: Array<Record<string, unknown>>;
        /**
         * The account image URL.
         * @format uri
         */
        imageUrl?: string | null;
        /** The external CRM record linked to the account. */
        externalCrmMetadata?: {
          /**
           * The external CRM record ID.
           * @minLength 1
           */
          id: string;
        } | null;
      };
      output: {
        /** An Unthread account record. */
        account: {
          /**
           * The Unthread account ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The account name.
           * @minLength 1
           */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete an external customer account from Unthread. */
    "unthread.delete_account": {
      input: {
        /**
         * The Unthread account ID.
         * @minLength 1
         */
        accountId: string;
      };
      output: {
        /** Whether the account deletion succeeded. */
        deleted: boolean;
        /**
         * The deleted Unthread account ID.
         * @minLength 1
         */
        accountId: string;
      };
    };
    /** Retrieve an Unthread account by ID. */
    "unthread.get_account": {
      input: {
        /**
         * The Unthread account ID.
         * @minLength 1
         */
        accountId: string;
      };
      output: {
        /** An Unthread account record. */
        account: {
          /**
           * The Unthread account ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The account name.
           * @minLength 1
           */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List and filter external customer accounts in Unthread. */
    "unthread.list_accounts": {
      input: {
        /**
         * Documented account fields to include in each result.
         * @minItems 1
         */
        select?: Array<string>;
        /**
         * Documented account fields used to order results.
         * @minItems 1
         */
        order?: Array<string>;
        /**
         * Filters applied to the account list.
         * @minItems 1
         */
        where?: Array<{
          /**
           * The documented account field to filter by.
           * @minLength 1
           */
          field: string;
          /** The comparison operator for the filter. */
          operator: "==" | "!=" | ">" | "<" | "in" | "notIn" | "contains" | "notContains" | "like";
          /** The string, number, or string list compared by the filter. */
          value: string | number | Array<string>;
        }>;
        /**
         * The maximum number of accounts to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Whether to sort the selected order fields in descending order. */
        descending?: boolean;
        /**
         * The opaque cursor for the next or previous result page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The account projections returned for this page. */
        accounts: Array<Record<string, unknown>>;
        /** The total number of accounts matching the request. */
        totalCount: number;
        /** Cursor information returned by an Unthread list endpoint. */
        cursors: {
          /** Whether another result page is available. */
          hasNext: boolean;
          /** Whether a previous result page is available. */
          hasPrevious: boolean;
          /** The cursor for the next result page. */
          next?: string;
          /** The cursor for the previous result page. */
          previous?: string;
        };
      };
    };
    /** Update an external customer account in Unthread. */
    "unthread.update_account": {
      input: {
        /**
         * The Unthread account ID.
         * @minLength 1
         */
        accountId: string;
        /**
         * The account name.
         * @minLength 1
         */
        name?: string;
        /**
         * The ID of the primary support user or team.
         * @minLength 1
         */
        primarySupportAssigneeId?: string | null;
        /** The type of the primary support assignee. */
        primarySupportAssigneeType?: "user" | "team" | null;
        /**
         * The ID of the secondary support user or team.
         * @minLength 1
         */
        secondarySupportAssigneeId?: string | null;
        /** The type of the secondary support assignee. */
        secondarySupportAssigneeType?: "user" | "team" | null;
        /** Email addresses and domains associated with the account. */
        emailsAndDomains?: Array<string>;
        /** Slack channel IDs associated with the account. */
        slackChannelIds?: Array<string>;
        /** Slack workspace IDs associated with the account. */
        slackTeamIds?: Array<string>;
        /** Custom field values associated with the account. */
        customFields?: Array<Record<string, unknown>>;
        /** Support steps configured for the account. */
        supportSteps?: Array<Record<string, unknown>>;
        /**
         * The account image URL.
         * @format uri
         */
        imageUrl?: string | null;
        /** The external CRM record linked to the account. */
        externalCrmMetadata?: {
          /**
           * The external CRM record ID.
           * @minLength 1
           */
          id: string;
        } | null;
      };
      output: {
        /** An Unthread account record. */
        account: {
          /**
           * The Unthread account ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The account name.
           * @minLength 1
           */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add recipients to a Mixmax sequence and optionally schedule them or keep them in draft. */
    "mixmax.add_sequence_recipients": {
      input: {
        /**
         * The Mixmax sequence identifier.
         * @minLength 1
         */
        sequenceId: string;
        /**
         * The recipients to add to the sequence.
         * @minItems 1
         */
        recipients: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /** Sequence variables for one recipient; either email or Email must equal the recipient email. */
          variables?: {
            /**
             * The recipient email stored in the lowercase email variable.
             * @format email
             */
            email?: string;
            /**
             * The recipient email stored in the uppercase Email variable.
             * @format email
             */
            Email?: string;
            [key: string]: unknown;
          };
          /** A Unix timestamp in milliseconds for activation, or false to keep the recipient in draft. */
          scheduledAt?: number | false;
        }>;
        /** A Unix timestamp in milliseconds for activation, or false to keep the recipient in draft. */
        scheduledAt?: number | false;
        /** Whether Mixmax should enrich recipients from stored contact data. */
        enrich?: boolean;
        /** Whether Mixmax should accept recipients missing variables used by the sequence. */
        allowMissingVariables?: boolean;
      };
      output: Array<{
        /**
         * The processed recipient value reported by Mixmax, including invalid values returned with an error status.
         * @minLength 1
         */
        email: string;
        /** The result of processing the recipient. */
        status: "success" | "error" | "duplicated" | "unsubscribed";
        /** The errors reported when the recipient could not be added. */
        errors?: Array<string>;
        [key: string]: unknown;
      }>;
    };
    /** List activated recipients for one Mixmax sequence with offset pagination. */
    "mixmax.list_sequence_recipients": {
      input: {
        /**
         * The Mixmax sequence identifier.
         * @minLength 1
         */
        sequenceId: string;
        /**
         * Analytics source: myself, a Mixmax team ID, or omit for everyone.
         * @minLength 1
         */
        analyticsFrom?: string;
        /**
         * Maximum number of sequence recipients to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Number of sequence recipients to skip.
         * @minimum 0
         * @maximum 9999
         */
        offset?: number;
        /** The recipient field used for sorting. */
        sortBy?: "email" | "lastStage" | "lastMessageCreated" | "nextStageScheduledAt" | "opens" | "clicks" | "replied" | "downloads" | "accepted";
        /** Whether to sort sequence recipients in descending order. */
        sortDesc?: boolean;
        /** Whether to include recipient variables in the response. */
        includeVariables?: boolean;
      };
      output: Array<{
        /**
         * The Mixmax sequence recipient identifier.
         * @minLength 1
         */
        _id: string;
        /**
         * The Mixmax user ID that created the recipient.
         * @minLength 1
         */
        userId?: string;
        /**
         * When the sequence recipient was created.
         * @minLength 1
         */
        createdAt?: string;
        /**
         * When the sequence recipient was last updated.
         * @minLength 1
         */
        updatedAt?: string;
        /**
         * The Mixmax sequence identifier.
         * @minLength 1
         */
        sequenceId: string;
        /**
         * The sequence recipient email address.
         * @format email
         */
        email: string;
        /** The current sequence recipient state. */
        state: "active" | "failed" | "completed";
        /** The optional variables assigned to the sequence recipient. */
        variables?: Record<string, unknown>;
        [key: string]: unknown;
      }>;
    };
    /** List Mixmax sequences with optional name, folder, expansion, and cursor filters. */
    "mixmax.list_sequences": {
      input: {
        /**
         * Return sequences whose name matches this value.
         * @minLength 1
         */
        name?: string;
        /** The sequence field to expand. */
        expand?: "stages";
        /**
         * Filter by personal, shared, or a Mixmax sequence folder identifier.
         * @minLength 1
         */
        folder?: string;
        /**
         * Maximum number of sequences to return.
         * @minimum 1
         * @maximum 300
         */
        limit?: number;
        /**
         * An opaque Mixmax pagination cursor.
         * @minLength 1
         */
        next?: string;
        /**
         * An opaque Mixmax pagination cursor.
         * @minLength 1
         */
        previous?: string;
        /**
         * Comma-separated response fields to include.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The Mixmax sequences available to the current user. */
        results: Array<{
          /**
           * The Mixmax sequence identifier.
           * @minLength 1
           */
          _id: string;
          /**
           * The Mixmax user ID that owns the sequence.
           * @minLength 1
           */
          userId?: string;
          /**
           * When the sequence was created.
           * @minLength 1
           */
          createdAt?: string;
          /**
           * When the sequence was last updated.
           * @minLength 1
           */
          updatedAt?: string;
          /**
           * The user-configured sequence name.
           * @minLength 1
           */
          name: string;
          /** The sequence stage IDs or expanded stage objects. */
          stages?: Array<string | Record<string, unknown>>;
          /** The variable names used by the sequence. */
          variables?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page. */
        next?: string | null;
        /** Whether another sequence page is available. */
        hasNext?: boolean;
        /** The cursor for the previous page. */
        previous?: string | null;
        /** Whether a previous sequence page is available. */
        hasPrevious?: boolean;
        [key: string]: unknown;
      };
    };
    /** Search Mixmax sequence recipients by query text or exact email addresses, optionally within one sequence. */
    "mixmax.search_sequence_recipients": {
      input: {
        /**
         * A case-insensitive recipient email search string, such as from:mixmax.com.
         * @minLength 1
         */
        query?: string;
        /**
         * Exact recipient email addresses to search for.
         * @minItems 1
         */
        recipients?: Array<string>;
        /**
         * The Mixmax sequence identifier.
         * @minLength 1
         */
        sequenceId?: string;
        /** Number of matching sequence recipients to skip. */
        offset?: number;
        /** Maximum number of matching sequence recipients to return. */
        limit?: number;
      };
      output: {
        /**
         * The total number of matching sequence recipients.
         * @minimum 0
         */
        total: number;
        /** The matching Mixmax sequence recipients. */
        results: Array<{
          /**
           * The Mixmax sequence recipient identifier.
           * @minLength 1
           */
          _id: string;
          /**
           * The Mixmax user ID that owns the sequence recipient.
           * @minLength 1
           */
          userId?: string;
          /**
           * The Mixmax sequence identifier.
           * @minLength 1
           */
          sequenceId: string;
          /**
           * The sequence recipient email address.
           * @format email
           */
          email: string;
          /**
           * The sequence recipient state.
           * @minLength 1
           */
          state?: string;
          /**
           * The sequence recipient name.
           * @minLength 1
           */
          name?: string;
          /** The provider-defined stage analytics for the sequence recipient. */
          stages?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}

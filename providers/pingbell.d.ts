import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List the sources available to the connected PingBell account. */
    "pingbell.list_sources": {
      input: Record<string, never>;
      output: {
        /** The sources available to the connected account. */
        sources: Array<{
          /** The source ID normalized as a string. */
          id: string;
          /** The source name. */
          name: string;
        }>;
      };
    };
    /** Ring a PingBell source so its counter, screens, and subscribed devices update. */
    "pingbell.ring_source": {
      input: {
        /** The source ID returned by the list endpoint. */
        sourceId: string | number;
        /** The optional revenue amount associated with the notification. */
        amount?: number;
        /**
         * The optional currency code associated with the revenue amount.
         * @minLength 1
         */
        currency?: string;
        /**
         * The optional transaction ID used to deduplicate retries.
         * @minLength 1
         */
        transactionId?: string;
      };
      output: {
        /** The status text returned by PingBell. */
        status: string;
      };
    };
  }
}

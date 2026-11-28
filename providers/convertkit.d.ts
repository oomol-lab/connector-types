import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update a subscriber in Kit (ConvertKit). */
    "convertkit.create_subscriber": {
      input: {
        /**
         * Subscriber email address.
         * @format email
         */
        emailAddress: string;
        /**
         * Optional subscriber first name.
         * @minLength 1
         */
        firstName?: string;
      };
      output: {
        /** Kit API object. */
        subscriber: Record<string, unknown>;
      };
    };
    /** List subscribers in the connected Kit (ConvertKit) account. */
    "convertkit.list_subscribers": {
      input: {
        /**
         * Maximum subscribers to return per page.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * Pagination cursor for the next page.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** Kit records. */
        subscribers: Array<Record<string, unknown>>;
        /** Kit API object. */
        pagination: Record<string, unknown>;
      };
    };
  }
}

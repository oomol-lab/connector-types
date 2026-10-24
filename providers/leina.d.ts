import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Leina robots and their runtime status in the current OOMOL team. Bound platforms do not guarantee a configured Home recipient. */
    "leina.list_bots": {
      input: Record<string, never>;
      output: {
        /** Available robots. */
        bots: Array<{
          /**
           * The robot identifier returned by list_bots; use default only when listed.
           * @pattern ^(default|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$
           */
          leinaId: string;
          /** The robot display name. */
          name: string;
          /** The avatar URL, or an empty string when unset. */
          avatar: string;
          /** The runtime status, such as ready, creating, paused or failed. */
          status: string;
          /** Platforms with a successful binding; Home delivery availability is checked when sending. */
          platforms: Array<string>;
        }>;
      };
    };
    /** Send text through a selected Leina robot's configured Home channels without invoking a model. Delivered means at least one channel succeeded, not that the recipient read it. Retry uncertain delivery within one hour using the same Idempotency-Key and unchanged input; deduplication does not survive a Hermes restart. */
    "leina.send_notification": {
      input: {
        /**
         * The robot identifier returned by list_bots; use default only when listed.
         * @pattern ^(default|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$
         */
        leinaId: string;
        /**
         * The notification text, at most 20 KiB of UTF-8. Content and whitespace are preserved.
         * @minLength 1
         * @pattern \S
         */
        message: string;
      };
      output: {
        /**
         * The robot identifier returned by list_bots; use default only when listed.
         * @pattern ^(default|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$
         */
        leinaId: string;
        /** At least one Home channel accepted the notification. */
        status: "delivered";
        /** The notification identity used for delivery deduplication. */
        requestId: string;
      };
    };
  }
}

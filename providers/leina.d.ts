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
    /** Send text without invoking a model. Supply the opaque subscription returned by flow_notification_subscribe to deliver to that conversation; never expose the credential or derive a recipient yourself. Omit subscription to use the robot's configured Home channels. Retry uncertain delivery within one hour using the same Idempotency-Key and unchanged input. Subscription delivery deduplication survives Hermes restarts; Home deduplication does not. Delivered is not a read receipt. */
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
        /**
         * The opaque conversation subscription returned by flow_notification_subscribe. Store it as a fixed literal in a Flow. Omit to use Home; null and blank values are invalid. An unknown subscription fails without falling back to Home.
         * @minLength 1
         * @pattern \S
         */
        subscription?: string;
      };
      output: {
        /**
         * The robot identifier returned by list_bots; use default only when listed.
         * @pattern ^(default|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$
         */
        leinaId: string;
        /** The subscription target or at least one Home channel accepted the notification. */
        status: "delivered";
        /** The notification identity used for delivery deduplication. */
        requestId: string;
      };
    };
  }
}

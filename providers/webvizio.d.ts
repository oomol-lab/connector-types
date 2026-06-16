import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Subscribe a callback URL to one Webvizio REST Hook event so Webvizio can send outbound event notifications to your service. */
    "webvizio.create_rest_hook_subscription": {
      input: {
        /**
         * The callback URL that Webvizio should call when the event fires.
         * @format uri
         */
        url: string;
        /** The Webvizio event type to subscribe to. */
        event: "project.created" | "project.updated" | "project.deleted" | "task.created" | "task.updated" | "task.deleted" | "comment.created" | "comment.deleted";
      };
      output: {
        /**
         * The Webvizio webhook subscription ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The Webvizio event type to subscribe to. */
        event: "project.created" | "project.updated" | "project.deleted" | "task.created" | "task.updated" | "task.deleted" | "comment.created" | "comment.deleted";
        /**
         * The callback URL that was subscribed.
         * @format uri
         */
        url: string;
      };
    };
    /** Unsubscribe one Webvizio REST Hook event subscription by its Webvizio webhook ID. */
    "webvizio.delete_rest_hook_subscription": {
      input: {
        /**
         * The Webvizio webhook subscription ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether the Webvizio REST Hook subscription was deleted. */
        deleted: boolean;
        /**
         * The Webvizio webhook subscription ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
  }
}

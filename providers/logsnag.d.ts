import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add or update key-value properties on a LogSnag user profile. */
    "logsnag.identify_user": {
      input: {
        /**
         * The LogSnag project name.
         * @minLength 1
         */
        project: string;
        /**
         * The user identifier to update.
         * @minLength 1
         */
        user_id: string;
        /** A LogSnag key-value object. */
        properties: Record<string, string | number | boolean>;
      };
      output: {
        /** Whether LogSnag accepted the request. */
        ok: boolean;
        /** The upstream HTTP status code returned by LogSnag. */
        status: number;
        /** The parsed JSON response body returned by LogSnag, when present. */
        payload?: unknown;
      };
    };
    /** Increment or decrement an existing numeric LogSnag insight. */
    "logsnag.mutate_insight": {
      input: {
        /**
         * The LogSnag project name.
         * @minLength 1
         */
        project: string;
        /**
         * The insight title.
         * @minLength 1
         */
        title: string;
        /** The LogSnag mutation object. */
        value: {
          /** The numeric amount to increment or decrement the insight value by. */
          $inc: number;
        };
        /** The optional emoji or emoji shortcode shown with the insight. */
        icon?: string;
      };
      output: {
        /** Whether LogSnag accepted the request. */
        ok: boolean;
        /** The upstream HTTP status code returned by LogSnag. */
        status: number;
        /** The parsed JSON response body returned by LogSnag, when present. */
        payload?: unknown;
      };
    };
    /** Publish an event to a LogSnag project channel. */
    "logsnag.publish_event": {
      input: {
        /**
         * The LogSnag project name.
         * @minLength 1
         */
        project: string;
        /**
         * The LogSnag channel name.
         * @minLength 1
         */
        channel: string;
        /**
         * The event name.
         * @minLength 1
         */
        event: string;
        /** The optional event description. */
        description?: string;
        /** The optional emoji or emoji shortcode shown with the event. */
        icon?: string;
        /** Whether LogSnag should send a push notification. */
        notify?: boolean;
        /** A LogSnag key-value object. */
        tags?: Record<string, string | number | boolean>;
        /** The parser LogSnag should apply to the description. */
        parser?: "markdown" | "text";
        /** The optional user identifier associated with the event. */
        user_id?: string;
        /** The optional Unix timestamp in seconds for historical events. */
        timestamp?: number;
      };
      output: {
        /** Whether LogSnag accepted the request. */
        ok: boolean;
        /** The upstream HTTP status code returned by LogSnag. */
        status: number;
        /** The parsed JSON response body returned by LogSnag, when present. */
        payload?: unknown;
      };
    };
    /** Publish the latest value for a LogSnag real-time insight. */
    "logsnag.publish_insight": {
      input: {
        /**
         * The LogSnag project name.
         * @minLength 1
         */
        project: string;
        /**
         * The insight title.
         * @minLength 1
         */
        title: string;
        /** The insight value. */
        value: string | number;
        /** The optional emoji or emoji shortcode shown with the insight. */
        icon?: string;
      };
      output: {
        /** Whether LogSnag accepted the request. */
        ok: boolean;
        /** The upstream HTTP status code returned by LogSnag. */
        status: number;
        /** The parsed JSON response body returned by LogSnag, when present. */
        payload?: unknown;
      };
    };
  }
}

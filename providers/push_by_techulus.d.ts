import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send a Push by Techulus notification to a specific device group. */
    "push_by_techulus.send_group_notification": {
      input: {
        /**
         * The Push by Techulus device group ID used in the request path.
         * @minLength 1
         */
        groupId: string;
        /**
         * The notification title shown on recipient devices.
         * @minLength 1
         */
        title: string;
        /**
         * The notification body text shown on recipient devices.
         * @minLength 1
         */
        body: string;
        /** The notification sound name documented by Push by Techulus. */
        sound?: "default" | "arcade" | "correct" | "fail" | "harp" | "reveal" | "bubble" | "doorbell" | "flute" | "money" | "scifi" | "clear" | "elevator" | "guitar" | "pop";
        /**
         * The alphanumeric notification channel identifier. Hyphens are allowed, and Push by Techulus defaults it to feed.
         * @minLength 1
         * @pattern ^[A-Za-z0-9-]+$
         */
        channel?: string;
        /**
         * The URL to open when the recipient taps the notification.
         * @format uri
         */
        link?: string;
        /**
         * The image URL to show with the notification.
         * @format uri
         */
        image?: string;
        /** Whether iOS should deliver the notification immediately even in Do Not Disturb mode. */
        timeSensitive?: boolean;
      };
      output: {
        /** Whether Push by Techulus accepted the notification request. */
        success: boolean;
        /** The response message returned by Push by Techulus. */
        message?: string;
        /** Per-device responses returned by Push by Techulus when available. */
        responses?: Array<{
          /** Whether this individual device notification succeeded. */
          success: boolean;
          /** The message returned for this individual device notification. */
          message: string;
        }>;
      };
    };
    /** Send a Push by Techulus notification to all devices targeted by the account or team API key. */
    "push_by_techulus.send_notification": {
      input: {
        /**
         * The notification title shown on recipient devices.
         * @minLength 1
         */
        title: string;
        /**
         * The notification body text shown on recipient devices.
         * @minLength 1
         */
        body: string;
        /** The notification sound name documented by Push by Techulus. */
        sound?: "default" | "arcade" | "correct" | "fail" | "harp" | "reveal" | "bubble" | "doorbell" | "flute" | "money" | "scifi" | "clear" | "elevator" | "guitar" | "pop";
        /**
         * The alphanumeric notification channel identifier. Hyphens are allowed, and Push by Techulus defaults it to feed.
         * @minLength 1
         * @pattern ^[A-Za-z0-9-]+$
         */
        channel?: string;
        /**
         * The URL to open when the recipient taps the notification.
         * @format uri
         */
        link?: string;
        /**
         * The image URL to show with the notification.
         * @format uri
         */
        image?: string;
        /** Whether iOS should deliver the notification immediately even in Do Not Disturb mode. */
        timeSensitive?: boolean;
      };
      output: {
        /** Whether Push by Techulus accepted the notification request. */
        success: boolean;
        /** The response message returned by Push by Techulus. */
        message?: string;
        /** Per-device responses returned by Push by Techulus when available. */
        responses?: Array<{
          /** Whether this individual device notification succeeded. */
          success: boolean;
          /** The message returned for this individual device notification. */
          message: string;
        }>;
      };
    };
  }
}

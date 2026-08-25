import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List devices and device groups registered to the connected Pushsafer account. */
    "pushsafer.list_devices": {
      input: Record<string, never>;
      output: {
        /** The registered Pushsafer delivery targets. */
        devices: Array<{
          /** The Pushsafer device or group identifier. */
          id: string;
          /** The human-readable device or group name. */
          name: string;
        }>;
      };
    };
    /** List delivery groups registered to the connected Pushsafer account. */
    "pushsafer.list_groups": {
      input: Record<string, never>;
      output: {
        /** The registered Pushsafer delivery groups. */
        groups: Array<{
          /** The Pushsafer group identifier. */
          id: string;
          /** The human-readable group name. */
          name: string;
          /** The device identifiers assigned to the group. */
          deviceIds: Array<string>;
        }>;
      };
    };
    /** Send a push notification to one Pushsafer device, group, or all devices. */
    "pushsafer.send_message": {
      input: {
        /**
         * The notification message text, limited to 5000 characters.
         * @minLength 1
         * @maxLength 5000
         */
        message: string;
        /**
         * The optional notification title, limited to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        title?: string;
        /**
         * The optional device or group id. Use a for all devices, a numeric device id, or a gs-prefixed group id.
         * @minLength 1
         */
        target?: string;
        /**
         * The optional Pushsafer sound number from 0 through 62.
         * @minimum 0
         * @maximum 62
         */
        sound?: number;
        /**
         * The optional vibration count from 1 through 3.
         * @minimum 1
         * @maximum 3
         */
        vibration?: number;
        /**
         * The optional Pushsafer icon number from 1 through 181.
         * @minimum 1
         * @maximum 181
         */
        icon?: number;
        /**
         * The optional hexadecimal icon color, such as #FF0000.
         * @minLength 1
         */
        iconColor?: string;
        /**
         * The optional URL or application URL scheme opened from the notification.
         * @minLength 1
         */
        url?: string;
        /**
         * The optional display title for the notification URL.
         * @minLength 1
         */
        urlTitle?: string;
        /**
         * The optional number of minutes to retain the message, from 0 through 43200.
         * @minimum 0
         * @maximum 43200
         */
        timeToLive?: number;
        /**
         * The optional notification priority from -2 through 2.
         * @minimum -2
         * @maximum 2
         */
        priority?: number;
      };
      output: {
        /** The success message returned by Pushsafer. */
        success: string;
        /** The number of API calls remaining on the account. */
        availableCalls: number;
        /** The message and device identifiers returned for each delivery. */
        deliveries: Array<{
          /** The Pushsafer message identifier. */
          messageId: string;
          /** The target Pushsafer device identifier. */
          deviceId: string;
        }>;
      };
    };
  }
}

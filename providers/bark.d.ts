import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch raw server information from the connected Bark server. */
    "bark.get_server_info": {
      input: Record<string, never>;
      output: {
        /** The raw payload returned by the Bark server info endpoint. */
        raw: unknown;
      };
    };
    /** Send the same notification to multiple explicit Bark device keys through the REST push endpoint. */
    "bark.send_batch_notifications": {
      input: {
        /**
         * The Bark device keys that should receive this notification.
         * @minItems 1
         */
        device_keys: Array<string>;
        /**
         * Optional notification title shown above the body.
         * @minLength 1
         */
        title?: string;
        /**
         * Optional notification subtitle.
         * @minLength 1
         */
        subtitle?: string;
        /**
         * Notification body text to send to the Bark device.
         * @minLength 1
         */
        body: string;
        /** Optional iOS interruption level for the notification. */
        level?: "critical" | "active" | "timeSensitive" | "passive";
        /**
         * Optional ringtone volume for critical alert notifications.
         * @minLength 1
         */
        volume?: string;
        /** Optional badge number displayed next to the Bark app icon. */
        badge?: number;
        /** Whether the ringtone should continue to play for 30 seconds. */
        call?: boolean;
        /** Whether Bark should automatically copy the notification content. */
        autoCopy?: boolean;
        /**
         * Optional text value Bark should copy.
         * @minLength 1
         */
        copy?: string;
        /**
         * Optional Bark sound name or custom ringtone name.
         * @minLength 1
         */
        sound?: string;
        /**
         * Optional icon URL shown with the notification on supported iOS versions.
         * @format uri
         */
        icon?: string;
        /**
         * Optional notification group name.
         * @minLength 1
         */
        group?: string;
        /** Whether Bark should archive the notification in the app. */
        isArchive?: boolean;
        /**
         * Optional URL opened when the user taps the notification.
         * @format uri
         */
        url?: string;
        /** Optional tap behavior for the notification. */
        action?: "none" | "alert";
      };
      output: {
        /** The Bark response code. Successful requests usually return 200. */
        code: number;
        /** The Bark response message. */
        message: string;
        /** The Bark server timestamp for the response. */
        timestamp?: number;
      };
    };
    /** Send a pre-encrypted Bark notification ciphertext to the connected Bark device. */
    "bark.send_encrypted_notification": {
      input: {
        /**
         * The already-encrypted Bark ciphertext payload to forward.
         * @minLength 1
         */
        ciphertext: string;
      };
      output: {
        /** The Bark response code. Successful requests usually return 200. */
        code: number;
        /** The Bark response message. */
        message: string;
        /** The Bark server timestamp for the response. */
        timestamp?: number;
      };
    };
    /** Send a notification to the connected Bark device through the REST push endpoint. */
    "bark.send_notification": {
      input: {
        /**
         * Optional notification title shown above the body.
         * @minLength 1
         */
        title?: string;
        /**
         * Optional notification subtitle.
         * @minLength 1
         */
        subtitle?: string;
        /**
         * Notification body text to send to the Bark device.
         * @minLength 1
         */
        body: string;
        /** Optional iOS interruption level for the notification. */
        level?: "critical" | "active" | "timeSensitive" | "passive";
        /**
         * Optional ringtone volume for critical alert notifications.
         * @minLength 1
         */
        volume?: string;
        /** Optional badge number displayed next to the Bark app icon. */
        badge?: number;
        /** Whether the ringtone should continue to play for 30 seconds. */
        call?: boolean;
        /** Whether Bark should automatically copy the notification content. */
        autoCopy?: boolean;
        /**
         * Optional text value Bark should copy.
         * @minLength 1
         */
        copy?: string;
        /**
         * Optional Bark sound name or custom ringtone name.
         * @minLength 1
         */
        sound?: string;
        /**
         * Optional icon URL shown with the notification on supported iOS versions.
         * @format uri
         */
        icon?: string;
        /**
         * Optional notification group name.
         * @minLength 1
         */
        group?: string;
        /** Whether Bark should archive the notification in the app. */
        isArchive?: boolean;
        /**
         * Optional URL opened when the user taps the notification.
         * @format uri
         */
        url?: string;
        /** Optional tap behavior for the notification. */
        action?: "none" | "alert";
      };
      output: {
        /** The Bark response code. Successful requests usually return 200. */
        code: number;
        /** The Bark response message. */
        message: string;
        /** The Bark server timestamp for the response. */
        timestamp?: number;
      };
    };
  }
}

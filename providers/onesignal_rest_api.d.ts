import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel one scheduled OneSignal message by id. */
    "onesignal_rest_api.cancel_message": {
      input: {
        /**
         * The OneSignal message identifier.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** Whether OneSignal accepted the cancellation request. */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a push notification for the connected OneSignal app using one official targeting method. */
    "onesignal_rest_api.create_push_notification": {
      input: {
        /** Localized push notification body keyed by language code. */
        contents?: Record<string, string>;
        /** Localized push notification title keyed by language code. */
        headings?: Record<string, string>;
        /** Localized push notification subtitle keyed by language code. */
        subtitle?: Record<string, string>;
        /**
         * Optional OneSignal message name.
         * @minLength 1
         */
        name?: string;
        /**
         * Segments targeted by this push notification.
         * @minItems 1
         */
        included_segments?: Array<string>;
        /**
         * Segments explicitly excluded from delivery.
         * @minItems 1
         */
        excluded_segments?: Array<string>;
        /** Mapping of OneSignal alias labels to one or more alias values. */
        include_aliases?: Record<string, Array<string>>;
        /**
         * Direct subscription ids targeted by this push notification.
         * @minItems 1
         */
        include_subscription_ids?: Array<string>;
        /**
         * OneSignal filter objects used as the targeting method.
         * @minItems 1
         */
        filters?: Array<Record<string, unknown>>;
        /**
         * The OneSignal template UUID.
         * @minLength 1
         */
        template_id?: string;
        /**
         * Scheduled delivery time string accepted by OneSignal.
         * @minLength 1
         */
        send_after?: string;
        /**
         * Optional URL to open from the notification.
         * @minLength 1
         */
        url?: string;
        /**
         * Optional web URL to open from the notification.
         * @minLength 1
         */
        web_url?: string;
        /**
         * Optional app deep link to open from the notification.
         * @minLength 1
         */
        app_url?: string;
        /** Custom push data included in the message payload. */
        data?: Record<string, unknown>;
        /** Template personalization data included in the request. */
        custom_data?: Record<string, unknown>;
        /** Whether to set content_available for silent delivery. */
        content_available?: boolean;
        [key: string]: unknown;
      };
      output: {
        /**
         * The created OneSignal message identifier.
         * @minLength 1
         */
        id: string;
        /** The upstream external id when OneSignal returns it. */
        external_id?: string | null;
        /** OneSignal validation errors returned for the create request. */
        errors?: unknown | null;
        /** OneSignal warnings returned for the create request. */
        warnings?: unknown | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one OneSignal message by id from the connected app. */
    "onesignal_rest_api.get_message": {
      input: {
        /**
         * The OneSignal message identifier.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /**
         * The OneSignal message identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The OneSignal app UUID attached to the message.
         * @minLength 1
         */
        app_id: string;
        /**
         * The message name when OneSignal includes it.
         * @minLength 1
         */
        name?: string;
        /** Unix timestamp when the message was queued. */
        queued_at?: number;
        /**
         * The scheduled delivery time string returned by OneSignal.
         * @minLength 1
         */
        send_after?: string;
        /** Unix timestamp when the message finished processing. */
        completed_at?: number;
        /** Whether the message has been canceled. */
        canceled?: boolean;
        /** The localized message body returned by OneSignal. */
        contents?: Record<string, string>;
        /** The localized message title returned by OneSignal. */
        headings?: Record<string, string>;
        /** The localized message subtitle returned by OneSignal. */
        subtitle?: Record<string, string>;
        /**
         * Included OneSignal segments attached to the message.
         * @minItems 1
         */
        included_segments?: Array<string>;
        /**
         * Excluded OneSignal segments attached to the message.
         * @minItems 1
         */
        excluded_segments?: Array<string>;
        /** Mapping of OneSignal alias labels to one or more alias values. */
        include_aliases?: Record<string, Array<string>>;
        /**
         * Included subscription ids attached to the message.
         * @minItems 1
         */
        include_subscription_ids?: Array<string>;
        /**
         * OneSignal filter objects used as the targeting method.
         * @minItems 1
         */
        filters?: Array<Record<string, unknown>>;
        /**
         * The OneSignal template UUID.
         * @minLength 1
         */
        template_id?: string;
        /**
         * The URL attached to the message.
         * @minLength 1
         */
        url?: string;
        /**
         * The web URL attached to the message.
         * @minLength 1
         */
        web_url?: string;
        /**
         * The app URL attached to the message.
         * @minLength 1
         */
        app_url?: string;
        /** Custom push data attached to the message. */
        data?: Record<string, unknown>;
        /** Template custom data attached to the message. */
        custom_data?: Record<string, unknown>;
        /** The number of successful deliveries recorded by OneSignal. */
        successful?: number;
        /** The number of failed deliveries recorded by OneSignal. */
        failed?: number;
        /** The number of received deliveries recorded by OneSignal. */
        received?: number;
        /** The number of errored deliveries recorded by OneSignal. */
        errored?: number;
        /** The number of conversions recorded by OneSignal. */
        converted?: number;
        /** The number of remaining deliveries recorded by OneSignal. */
        remaining?: number;
        /** Platform-specific delivery metrics returned by OneSignal. */
        platform_delivery_stats?: Record<string, unknown>;
        /** Outcome metrics returned by OneSignal. */
        outcomes?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List messages from the connected OneSignal app. */
    "onesignal_rest_api.list_messages": {
      input: {
        /**
         * Maximum number of messages to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Pagination offset for the message list.
         * @minimum 0
         */
        offset?: number;
        /** The OneSignal message kind filter. */
        kind?: 0 | 1 | 3;
        /**
         * The OneSignal template UUID.
         * @minLength 1
         */
        template_id?: string;
        /**
         * The sequential time_offset token returned by OneSignal.
         * @minLength 1
         */
        time_offset?: string;
      };
      output: {
        /** Total number of messages matching the request. */
        total_count: number;
        /**
         * The offset echoed by OneSignal.
         * @minimum 0
         */
        offset: number;
        /**
         * The limit echoed by OneSignal.
         * @minimum 1
         * @maximum 50
         */
        limit: number;
        /** The sequential time_offset token returned by OneSignal. */
        time_offset?: number | string | null;
        /** The sequential time_offset token returned by OneSignal. */
        next_time_offset?: number | string | null;
        /** Messages returned by OneSignal. */
        notifications: Array<{
          /**
           * The OneSignal message identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The OneSignal app UUID attached to the message.
           * @minLength 1
           */
          app_id: string;
          /**
           * The message name when OneSignal includes it.
           * @minLength 1
           */
          name?: string;
          /** Unix timestamp when the message was queued. */
          queued_at?: number;
          /**
           * The scheduled delivery time string returned by OneSignal.
           * @minLength 1
           */
          send_after?: string;
          /** Unix timestamp when the message finished processing. */
          completed_at?: number;
          /** Whether the message has been canceled. */
          canceled?: boolean;
          /** The localized message body returned by OneSignal. */
          contents?: Record<string, string>;
          /** The localized message title returned by OneSignal. */
          headings?: Record<string, string>;
          /** The localized message subtitle returned by OneSignal. */
          subtitle?: Record<string, string>;
          /**
           * Included OneSignal segments attached to the message.
           * @minItems 1
           */
          included_segments?: Array<string>;
          /**
           * Excluded OneSignal segments attached to the message.
           * @minItems 1
           */
          excluded_segments?: Array<string>;
          /** Mapping of OneSignal alias labels to one or more alias values. */
          include_aliases?: Record<string, Array<string>>;
          /**
           * Included subscription ids attached to the message.
           * @minItems 1
           */
          include_subscription_ids?: Array<string>;
          /**
           * OneSignal filter objects used as the targeting method.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          /**
           * The OneSignal template UUID.
           * @minLength 1
           */
          template_id?: string;
          /**
           * The URL attached to the message.
           * @minLength 1
           */
          url?: string;
          /**
           * The web URL attached to the message.
           * @minLength 1
           */
          web_url?: string;
          /**
           * The app URL attached to the message.
           * @minLength 1
           */
          app_url?: string;
          /** Custom push data attached to the message. */
          data?: Record<string, unknown>;
          /** Template custom data attached to the message. */
          custom_data?: Record<string, unknown>;
          /** The number of successful deliveries recorded by OneSignal. */
          successful?: number;
          /** The number of failed deliveries recorded by OneSignal. */
          failed?: number;
          /** The number of received deliveries recorded by OneSignal. */
          received?: number;
          /** The number of errored deliveries recorded by OneSignal. */
          errored?: number;
          /** The number of conversions recorded by OneSignal. */
          converted?: number;
          /** The number of remaining deliveries recorded by OneSignal. */
          remaining?: number;
          /** Platform-specific delivery metrics returned by OneSignal. */
          platform_delivery_stats?: Record<string, unknown>;
          /** Outcome metrics returned by OneSignal. */
          outcomes?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}

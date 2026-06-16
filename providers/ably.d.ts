import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query current presence for multiple Ably channels. */
    "ably.batch_presence": {
      input: {
        /** One or more Ably channel names. */
        channels: Array<string> | string;
        /**
         * The separator used when channels is provided as a string.
         * @minLength 1
         */
        separator?: string;
      };
      output: {
        /** Presence results returned by Ably. */
        results: Array<{
          /** The Ably channel name. */
          channel?: string;
          /** The presence members returned for the channel. */
          presence?: Array<{
            /** The unique Ably presence member ID. */
            id?: string;
            /** The Ably client ID associated with the presence member. */
            clientId?: string;
            /** The Ably connection ID associated with the presence member. */
            connectionId?: string;
            /** A timestamp in milliseconds since the Unix epoch. */
            timestamp?: number;
            /** The Ably presence action enum value. */
            action?: number;
            /** The JSON-encodable Ably message payload. */
            data?: unknown;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Ably. */
        links?: {
          /** The URL for the first result page. */
          first?: string;
          /** The URL for the current result page. */
          current?: string;
          /** The URL for the next result page. */
          next?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Query presence history for multiple Ably channels. */
    "ably.batch_presence_history": {
      input: {
        /** One or more Ably channel names. */
        channels: Array<string> | string;
        /**
         * The separator used when channels is provided as a string.
         * @minLength 1
         */
        separator?: string;
        /** A timestamp in milliseconds since the Unix epoch. */
        start?: number;
        /** A timestamp in milliseconds since the Unix epoch. */
        end?: number;
        /**
         * The maximum number of records to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The Ably pagination direction. */
        direction?: "backwards" | "forwards";
      };
      output: {
        /** Presence history results returned for each requested channel. */
        results: Array<{
          /** The Ably channel name. */
          channel?: string;
          /** The presence history records returned for the channel. */
          presence?: Array<{
            /** The unique Ably presence member ID. */
            id?: string;
            /** The Ably client ID associated with the presence member. */
            clientId?: string;
            /** The Ably connection ID associated with the presence member. */
            connectionId?: string;
            /** A timestamp in milliseconds since the Unix epoch. */
            timestamp?: number;
            /** The Ably presence action enum value. */
            action?: number;
            /** The JSON-encodable Ably message payload. */
            data?: unknown;
            [key: string]: unknown;
          }>;
          /** Pagination links returned by Ably. */
          links?: {
            /** The URL for the first result page. */
            first?: string;
            /** The URL for the current result page. */
            current?: string;
            /** The URL for the next result page. */
            next?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Activate an Ably channel by retrieving its metadata. */
    "ably.create_channel": {
      input: {
        /**
         * The Ably channel ID or channel name.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /**
         * The Ably channel ID or channel name.
         * @minLength 1
         */
        channel_id: string;
        /** Ably channel details. */
        channel: {
          /** The Ably channel ID. */
          channelId?: string;
          /** The Ably channel lifecycle status. */
          status?: {
            /** Whether the channel is currently active. */
            isActive?: boolean;
            /** The Ably channel occupancy metrics. */
            occupancy?: Record<string, unknown>;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Delete an Ably push notification subscription for a channel, device, or client. */
    "ably.delete_channel_subscription": {
      input: {
        /**
         * The Ably channel ID or channel name.
         * @minLength 1
         */
        channel?: string;
        /**
         * The Ably client ID to unsubscribe.
         * @minLength 1
         */
        client_id?: string;
        /**
         * The Ably device ID to unsubscribe.
         * @minLength 1
         */
        device_id?: string;
      };
      output: {
        /** Whether Ably accepted the delete request. */
        success: boolean;
      };
    };
    /** Retrieve Ably metadata and occupancy details for one channel. */
    "ably.get_channel_details": {
      input: {
        /**
         * The Ably channel ID or channel name.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** Ably channel details. */
        channel: {
          /** The Ably channel ID. */
          channelId?: string;
          /** The Ably channel lifecycle status. */
          status?: {
            /** Whether the channel is currently active. */
            isActive?: boolean;
            /** The Ably channel occupancy metrics. */
            occupancy?: Record<string, unknown>;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve message history for one Ably channel. */
    "ably.get_channel_history": {
      input: {
        /**
         * The Ably channel ID or channel name.
         * @minLength 1
         */
        channel_id: string;
        /** A timestamp in milliseconds since the Unix epoch. */
        start?: number;
        /** A timestamp in milliseconds since the Unix epoch. */
        end?: number;
        /**
         * The maximum number of records to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The Ably pagination direction. */
        direction?: "backwards" | "forwards";
      };
      output: {
        /** Ably messages returned by the history request. */
        messages: Array<{
          /** The unique Ably message ID. */
          id?: string;
          /** The Ably event name. */
          name?: string;
          /** The JSON-encodable Ably message payload. */
          data?: unknown;
          /** The Ably message encoding. */
          encoding?: string;
          /** The Ably client ID associated with the message. */
          clientId?: string;
          /** The Ably connection ID associated with the message. */
          connectionId?: string;
          /** A timestamp in milliseconds since the Unix epoch. */
          timestamp?: number;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Ably. */
        links?: {
          /** The URL for the first result page. */
          first?: string;
          /** The URL for the current result page. */
          current?: string;
          /** The URL for the next result page. */
          next?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve presence history for one Ably channel. */
    "ably.get_presence_history": {
      input: {
        /**
         * The Ably channel ID or channel name.
         * @minLength 1
         */
        channel_id: string;
        /** A timestamp in milliseconds since the Unix epoch. */
        start?: number;
        /** A timestamp in milliseconds since the Unix epoch. */
        end?: number;
        /**
         * The maximum number of records to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The Ably pagination direction. */
        direction?: "backwards" | "forwards";
      };
      output: {
        /** Ably presence history records returned by the request. */
        presence: Array<{
          /** The unique Ably presence member ID. */
          id?: string;
          /** The Ably client ID associated with the presence member. */
          clientId?: string;
          /** The Ably connection ID associated with the presence member. */
          connectionId?: string;
          /** A timestamp in milliseconds since the Unix epoch. */
          timestamp?: number;
          /** The Ably presence action enum value. */
          action?: number;
          /** The JSON-encodable Ably message payload. */
          data?: unknown;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Ably. */
        links?: {
          /** The URL for the first result page. */
          first?: string;
          /** The URL for the current result page. */
          current?: string;
          /** The URL for the next result page. */
          next?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Ably service time in milliseconds since the Unix epoch. */
    "ably.get_service_time": {
      input: Record<string, never>;
      output: {
        /** A timestamp in milliseconds since the Unix epoch. */
        time: number;
      };
    };
    /** Retrieve Ably application usage statistics. */
    "ably.get_stats": {
      input: {
        /** A timestamp in milliseconds since the Unix epoch. */
        start?: number;
        /** A timestamp in milliseconds since the Unix epoch. */
        end?: number;
        /**
         * The maximum number of records to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The Ably pagination direction. */
        direction?: "backwards" | "forwards";
        /** The Ably statistics aggregation unit. */
        unit?: "minute" | "hour" | "day" | "month";
      };
      output: {
        /** Ably statistics records returned by the request. */
        stats: Array<{
          /** The Ably statistics interval identifier. */
          intervalId?: string;
          /** The interval unit used for the statistics record. */
          unit?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Ably. */
        links?: {
          /** The URL for the first result page. */
          first?: string;
          /** The URL for the current result page. */
          current?: string;
          /** The URL for the next result page. */
          next?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Ably push notification channel subscriptions. */
    "ably.list_push_channel_subscriptions": {
      input: {
        /**
         * The Ably channel ID or channel name.
         * @minLength 1
         */
        channel?: string;
        /**
         * Filter subscriptions by Ably client ID.
         * @minLength 1
         */
        client_id?: string;
        /**
         * Filter subscriptions by Ably device ID.
         * @minLength 1
         */
        device_id?: string;
        /** Whether to match either client_id or device_id when both are set. */
        concat_filters?: boolean;
        /**
         * The maximum number of records to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Ably push channel subscriptions returned by the request. */
        subscriptions: Array<{
          /** The Ably channel name for the subscription. */
          channel?: string;
          /** The client ID associated with the subscription. */
          clientId?: string;
          /** The device ID associated with the subscription. */
          deviceId?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Ably. */
        links?: {
          /** The URL for the first result page. */
          first?: string;
          /** The URL for the current result page. */
          current?: string;
          /** The URL for the next result page. */
          next?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Publish one message to an Ably channel. */
    "ably.publish_message_to_channel": {
      input: {
        /**
         * The Ably channel ID or channel name.
         * @minLength 1
         */
        channel_id: string;
        /** The JSON-encodable Ably message payload. */
        data: unknown;
        /**
         * The optional Ably event name for the message.
         * @minLength 1
         */
        name?: string;
        /**
         * The optional Ably message ID used for idempotent publishing.
         * @minLength 1
         */
        id?: string;
        /**
         * The optional Ably message encoding.
         * @minLength 1
         */
        encoding?: string;
        /**
         * The optional Ably client ID for the message.
         * @minLength 1
         */
        client_id?: string;
        /**
         * The optional private Ably connection key.
         * @minLength 1
         */
        connection_key?: string;
        /** Optional Ably message extras, such as push notification payloads. */
        extras?: Record<string, unknown>;
      };
      output: {
        /** The Ably publish response. */
        result: {
          /** The Ably channel that received the message. */
          channel?: string;
          /** The Ably message ID assigned to the published message. */
          messageId?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}

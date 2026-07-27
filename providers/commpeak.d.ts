import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one TextPeak stream by ID. */
    "commpeak.get_stream": {
      input: {
        /**
         * The numeric TextPeak stream ID.
         * @exclusiveMinimum 0
         */
        streamId: number;
      };
      output: {
        /** A normalized TextPeak stream. */
        stream: {
          /** The stream identifier. */
          id: number | null;
          /** The opaque stream UID. */
          streamUid: string | null;
          /** The stream name. */
          name: string | null;
          /** The stream description. */
          description: string | null;
          /** The stream type returned by TextPeak. */
          type: string | null;
          /** The caller ID for voice streams when returned. */
          callerId: string | null;
          /** The stream IP allow-list when returned. */
          ipAcl: string | null;
          /** The stream state returned by TextPeak. */
          state: string | null;
          /** The tags returned with the stream. */
          streamTags: Array<{
            /** The tag identifier. */
            id: number | null;
            /** The tag value. */
            value: string | null;
          }>;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the stream token used to call TextPeak messaging endpoints. */
    "commpeak.get_stream_token": {
      input: {
        /**
         * The numeric TextPeak stream ID.
         * @exclusiveMinimum 0
         */
        streamId: number;
      };
      output: {
        /** The stream token sent as the raw Authorization header value. */
        token: string;
      };
    };
    /** List TextPeak domains in the CommPeak account. */
    "commpeak.list_domains": {
      input: {
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to request per page.
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
      };
      output: {
        /** The domains returned by CommPeak. */
        domains: Array<{
          /** The domain identifier. */
          id: number | null;
          /** The domain name. */
          name: string | null;
          /** The IP address the domain should point to when returned. */
          ip: string | null;
          /** The domain configuration status returned by TextPeak. */
          status: string | null;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List incoming TextPeak messages with optional filters. */
    "commpeak.list_incoming_messages": {
      input: {
        /**
         * The numeric TextPeak stream ID.
         * @exclusiveMinimum 0
         */
        streamId?: number;
        /**
         * The sender phone number filter.
         * @minLength 1
         */
        sender?: string;
        /**
         * The destination number or sender ID filter.
         * @minLength 1
         */
        destination?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to request per page.
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
      };
      output: {
        /** The incoming messages returned by CommPeak. */
        items: Array<{
          /** The message UUID. */
          messageUuid: string | null;
          /** The UTC time when the message was received. */
          receivedAt: string | null;
          /** The sender phone number. */
          sourceNumber: string | null;
          /** The recipient number or sender ID. */
          destinationNumber: string | null;
          /** The resolved contact name when returned. */
          contactName: string | null;
          /** The sender country dialing code. */
          countryCode: string | null;
          /** The sender ISO 3166 alpha-2 country code. */
          countryIso: string | null;
          /** The sender country name. */
          countryName: string | null;
          /** The incoming message text. */
          text: string | null;
          /** The incoming message body length. */
          length: number | null;
          /** The conversation UUID. */
          conversationUuid: string | null;
          /** The stream identifier returned by TextPeak. */
          streamId: string | null;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        }>;
        /** A normalized paginated TextPeak response. */
        page: {
          /** The total number of matching records when returned. */
          totalItems: number | null;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List outgoing TextPeak messages with optional filters. */
    "commpeak.list_messages": {
      input: {
        /**
         * The message direction to return, such as outgoing.
         * @minLength 1
         */
        type?: string;
        /**
         * The delivery status filter.
         * @minLength 1
         */
        status?: string;
        /**
         * The numeric TextPeak stream ID.
         * @exclusiveMinimum 0
         */
        streamId?: number;
        /**
         * The recipient phone number filter.
         * @minLength 1
         */
        phone?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * A date filter in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to request per page.
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
      };
      output: {
        /** The outgoing messages returned by CommPeak. */
        items: Array<{
          /** The message direction returned by TextPeak. */
          type: string | null;
          /** The message UUID. */
          messageUuid: string | null;
          /** The vendor or external reference. */
          externalKey: string | null;
          /** The UTC time when the message was sent. */
          sentAt: string | null;
          /** The UTC time when delivery was confirmed. */
          deliveredAt: string | null;
          /** The delivery status returned by TextPeak. */
          status: string | null;
          /** The sender number or ID. */
          sourceNumber: string | null;
          /** The sender display name. */
          sourceName: string | null;
          /** The recipient phone number. */
          destinationNumber: string | null;
          /** The recipient country dialing code. */
          countryCode: string | null;
          /** The recipient ISO 3166 alpha-2 country code. */
          countryIso: string | null;
          /** The recipient country name. */
          countryName: string | null;
          /** The message cost returned by TextPeak. */
          cost: number | null;
          /** The delivery channel returned by TextPeak. */
          channel: string | null;
          /** The message content returned by TextPeak. */
          content: {
            /** The content type returned by TextPeak. */
            type: string | null;
            /** The message body returned by TextPeak. */
            text: string | null;
          } | null;
          /** The conversation UUID. */
          conversationUuid: string | null;
          /** The stream identifier returned by TextPeak. */
          streamId: string | null;
          /** The campaign identifier when returned. */
          campaignId: string | null;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        }>;
        /** A normalized paginated TextPeak response. */
        page: {
          /** The total number of matching records when returned. */
          totalItems: number | null;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List TextPeak sender identities in the CommPeak account. */
    "commpeak.list_senders": {
      input: {
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to request per page.
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
      };
      output: {
        /** The sender identities returned by CommPeak. */
        senders: Array<{
          /** The sender identifier. */
          id: number | null;
          /** The sender display name. */
          name: string | null;
          /** The sender ID or phone number used on outbound messages. */
          value: string | null;
          /** The maximum messages this sender may send per day. */
          dailyLimit: number | null;
          /** The stream IRI this sender belongs to when returned. */
          stream: string | null;
          /** The sender type returned by TextPeak. */
          senderType: string | null;
          /** The sender approval status returned by TextPeak. */
          status: string | null;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List TextPeak streams in the CommPeak account. */
    "commpeak.list_streams": {
      input: {
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to request per page.
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
      };
      output: {
        /** The streams returned by CommPeak. */
        streams: Array<{
          /** The stream identifier. */
          id: number | null;
          /** The opaque stream UID. */
          streamUid: string | null;
          /** The stream name. */
          name: string | null;
          /** The stream description. */
          description: string | null;
          /** The stream type returned by TextPeak. */
          type: string | null;
          /** The caller ID for voice streams when returned. */
          callerId: string | null;
          /** The stream IP allow-list when returned. */
          ipAcl: string | null;
          /** The stream state returned by TextPeak. */
          state: string | null;
          /** The tags returned with the stream. */
          streamTags: Array<{
            /** The tag identifier. */
            id: number | null;
            /** The tag value. */
            value: string | null;
          }>;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Send one or more SMS messages through a TextPeak stream, fetching the stream token with the API key before sending. */
    "commpeak.send_sms": {
      input: {
        /**
         * The numeric TextPeak stream ID.
         * @exclusiveMinimum 0
         */
        streamId: number;
        /**
         * The top-level sender applied to every message. Omit it when each message has its own sender.
         * @minLength 1
         */
        sender?: string;
        /**
         * The SMS messages to send. TextPeak supports up to 250 per request.
         * @minItems 1
         * @maxItems 250
         */
        messages: Array<{
          /**
           * Your unique identifier for the message, echoed in responses and delivery webhooks.
           * @minLength 1
           */
          internalId?: string;
          /**
           * The per-message sender ID or phone number. Required when no top-level sender is provided.
           * @minLength 1
           */
          sender?: string;
          /**
           * The recipient phone number in international digits-only format.
           * @minLength 1
           */
          recipientPhone: string;
          /**
           * The SMS message body.
           * @minLength 1
           */
          messageContent: string;
        }>;
      };
      output: {
        /** Whether TextPeak accepted the batch for delivery. */
        status: boolean;
        /** The accepted batch task ID. */
        taskId: string | null;
        /** The per-message acceptance results returned by TextPeak. */
        messages: Array<{
          /** The internal ID supplied in the request. */
          internalId: string | null;
          /** The platform-assigned message UUID. */
          messageUuid: string | null;
          /** The conversation UUID. */
          conversationUuid: string | null;
          /** The per-message error code when the message failed. */
          error: string | null;
          /** The per-message failure detail when returned. */
          details: string | null;
          /** The raw object returned by CommPeak. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by CommPeak. */
        raw: Record<string, unknown>;
      };
    };
  }
}

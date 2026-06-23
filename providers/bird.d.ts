import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Bird contact with identifiers, attributes, display name, or list IDs. */
    "bird.create_contact": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /** The Bird contact fields to create. */
        contact: {
          /**
           * The display name for the Bird contact.
           * @minLength 1
           * @pattern \S
           */
          displayName?: string;
          /**
           * Identifiers to attach to the contact.
           * @minItems 1
           */
          identifiers?: Array<{
            /**
             * The Bird contact identifier key, such as emailaddress or phonenumber.
             * @minLength 1
             * @pattern \S
             */
            key: string;
            /**
             * The Bird contact identifier value.
             * @minLength 1
             * @pattern \S
             */
            value: string;
          }>;
          /** Bird contact attributes keyed by attribute name. */
          attributes?: Record<string, unknown>;
          /**
           * Bird contact list IDs.
           * @minItems 1
           */
          listIds?: Array<string>;
        };
      };
      output: {
        /** The raw object returned by Bird. */
        contact: Record<string, unknown>;
      };
    };
    /** Delete a Bird contact by ID. */
    "bird.delete_contact": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The Bird contact ID.
         * @format uuid
         */
        contactId: string;
      };
      output: {
        /**
         * The Bird contact ID.
         * @format uuid
         */
        contactId: string;
        /** Whether the contact was deleted. */
        deleted: boolean;
      };
    };
    /** Retrieve a specific Bird workspace channel by ID. */
    "bird.get_channel": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The Bird channel ID.
         * @format uuid
         */
        channelId: string;
      };
      output: {
        /** The raw object returned by Bird. */
        channel: Record<string, unknown>;
      };
    };
    /** Retrieve a Bird contact by ID, optionally requesting specific attributes. */
    "bird.get_contact": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The Bird contact ID.
         * @format uuid
         */
        contactId: string;
        /**
         * A contact attribute name to include in the response.
         * @minLength 1
         * @pattern \S
         */
        attribute?: string;
      };
      output: {
        /** The raw object returned by Bird. */
        contact: Record<string, unknown>;
      };
    };
    /** Retrieve a Bird channel message by ID. */
    "bird.get_message": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The Bird channel ID.
         * @format uuid
         */
        channelId: string;
        /**
         * The Bird channel message ID.
         * @format uuid
         */
        messageId: string;
      };
      output: {
        /** The raw object returned by Bird. */
        message: Record<string, unknown>;
      };
    };
    /** List channels configured for a Bird workspace with optional filters. */
    "bird.list_channels": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The maximum number of channels to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The pagination token returned by a previous request.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /** Whether to reverse the order in which channels are returned. */
        reverse?: boolean;
        /**
         * Filter channels by platform name.
         * @minLength 1
         * @pattern \S
         */
        platform?: string;
        /** Filter channels by Bird's conferencial flag. */
        conferencial?: boolean;
        /** Only return channels the authenticated principal can access. */
        onlyMyChannels?: boolean;
        /** Filter channels by the Bird use case type. */
        useCaseType?: "otp" | "transactional" | "marketing" | "conversation";
        /**
         * Filter channels by channel IDs.
         * @minItems 1
         */
        channelIds?: Array<string>;
        /**
         * Filter channels by resource owner IDs.
         * @minItems 1
         */
        resourceOwnerIds?: Array<string>;
        /**
         * Filter channels by resource owner identifiers.
         * @minItems 1
         */
        resourceOwnerIdentifiers?: Array<string>;
        /** Filter channels by the Bird suite. */
        suite?: "marketing" | "service" | "payments" | "automations" | "developer";
        /** Filter channels by platform release status. */
        platformStatus?: "preview" | "GA";
      };
      output: {
        /** The channel records returned by Bird. */
        channels: Array<Record<string, unknown>>;
        /** The token that can be passed as pageToken to fetch the next page. */
        nextPageToken: string | null;
        /** The raw object returned by Bird. */
        raw: Record<string, unknown>;
      };
    };
    /** List contacts in a Bird workspace. */
    "bird.list_contacts": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
      };
      output: {
        /** The contact records returned by Bird. */
        contacts: Array<Record<string, unknown>>;
        /** The raw object returned by Bird. */
        raw: Record<string, unknown>;
      };
    };
    /** List interactions recorded for a Bird channel message. */
    "bird.list_message_interactions": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The Bird channel ID.
         * @format uuid
         */
        channelId: string;
        /**
         * The Bird channel message ID.
         * @format uuid
         */
        messageId: string;
      };
      output: {
        /** The message interactions returned by Bird. */
        interactions: Array<Record<string, unknown>>;
        /** The raw object returned by Bird. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Bird contacts by an identifier key and value. */
    "bird.search_contact_by_identifier": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /** A Bird contact identifier. */
        identifier: {
          /**
           * The Bird contact identifier key, such as emailaddress or phonenumber.
           * @minLength 1
           * @pattern \S
           */
          key: string;
          /**
           * The Bird contact identifier value.
           * @minLength 1
           * @pattern \S
           */
          value: string;
        };
      };
      output: {
        /** The matching contact records returned by Bird. */
        contacts: Array<Record<string, unknown>>;
        /** The raw object returned by Bird. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a batch of up to 100 messages through a Bird workspace channel and return the accepted batch IDs. */
    "bird.send_batch_messages": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The Bird channel ID.
         * @format uuid
         */
        channelId: string;
        /**
         * The Bird channel messages to send.
         * @minItems 1
         * @maxItems 100
         */
        messages: Array<{
          /** The Bird receiver object for the channel message. */
          receiver: Record<string, unknown>;
          /** The Bird message body object, such as a text, image, file, gif, location, carousel, list, section, or template-compatible body. */
          body?: Record<string, unknown>;
          /** The optional Bird template object for the channel message. */
          template?: Record<string, unknown>;
          /** The optional Bird sender object for the channel message. */
          sender?: Record<string, unknown>;
          /**
           * A caller-defined message reference.
           * @minLength 1
           * @pattern \S
           */
          reference?: string;
          /** The optional Bird metadata object for the channel message. */
          meta?: Record<string, unknown>;
          /** The raw object returned by Bird. */
          replyTo?: Record<string, unknown>;
          /** The raw object returned by Bird. */
          notification?: Record<string, unknown>;
          /** Whether to apply Bird frequency capping rules. */
          capFrequency?: boolean;
          /** Whether Bird should append UTM parameters to links. */
          enableLinkTracking?: boolean;
          /** Whether to ignore quiet hours settings. */
          ignoreQuietHours?: boolean;
          /** Whether to skip global holdout checks. */
          ignoreGlobalHoldout?: boolean;
          /**
           * Tags to associate with the message.
           * @minItems 1
           * @maxItems 10
           */
          tags?: Array<string>;
          /** The raw object returned by Bird. */
          shortLinks?: Record<string, unknown>;
          /**
           * The RFC3339 time when Bird should send the message.
           * @format date-time
           */
          scheduledFor?: string;
          /**
           * The number of seconds for which the message remains valid.
           * @minimum 0
           */
          validity?: number;
        }>;
      };
      output: {
        /**
         * The Bird batch ID.
         * @format uuid
         */
        batchId: string | null;
        /** The Bird message IDs accepted in the batch. */
        messageIds: Array<string>;
        /** The raw object returned by Bird. */
        raw: Record<string, unknown>;
      };
    };
    /** Send one message through a Bird workspace channel. */
    "bird.send_message": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The Bird channel ID.
         * @format uuid
         */
        channelId: string;
        /** A Bird channel message request. Provide either body or template. */
        message: {
          /** The Bird receiver object for the channel message. */
          receiver: Record<string, unknown>;
          /** The Bird message body object, such as a text, image, file, gif, location, carousel, list, section, or template-compatible body. */
          body?: Record<string, unknown>;
          /** The optional Bird template object for the channel message. */
          template?: Record<string, unknown>;
          /** The optional Bird sender object for the channel message. */
          sender?: Record<string, unknown>;
          /**
           * A caller-defined message reference.
           * @minLength 1
           * @pattern \S
           */
          reference?: string;
          /** The optional Bird metadata object for the channel message. */
          meta?: Record<string, unknown>;
          /** The raw object returned by Bird. */
          replyTo?: Record<string, unknown>;
          /** The raw object returned by Bird. */
          notification?: Record<string, unknown>;
          /** Whether to apply Bird frequency capping rules. */
          capFrequency?: boolean;
          /** Whether Bird should append UTM parameters to links. */
          enableLinkTracking?: boolean;
          /** Whether to ignore quiet hours settings. */
          ignoreQuietHours?: boolean;
          /** Whether to skip global holdout checks. */
          ignoreGlobalHoldout?: boolean;
          /**
           * Tags to associate with the message.
           * @minItems 1
           * @maxItems 10
           */
          tags?: Array<string>;
          /** The raw object returned by Bird. */
          shortLinks?: Record<string, unknown>;
          /**
           * The RFC3339 time when Bird should send the message.
           * @format date-time
           */
          scheduledFor?: string;
          /**
           * The number of seconds for which the message remains valid.
           * @minimum 0
           */
          validity?: number;
        };
      };
      output: {
        /**
         * The Bird channel message ID.
         * @format uuid
         */
        messageId: string | null;
        /** The raw object returned by Bird. */
        message: Record<string, unknown>;
      };
    };
    /** Update a Bird contact's identifiers, attributes, or list memberships. */
    "bird.update_contact": {
      input: {
        /**
         * The Bird workspace ID.
         * @format uuid
         */
        workspaceId: string;
        /**
         * The Bird contact ID.
         * @format uuid
         */
        contactId: string;
        /** The Bird contact update fields. */
        patch: {
          /**
           * Identifiers to add to the contact.
           * @minItems 1
           */
          addIdentifiers?: Array<{
            /**
             * The Bird contact identifier key, such as emailaddress or phonenumber.
             * @minLength 1
             * @pattern \S
             */
            key: string;
            /**
             * The Bird contact identifier value.
             * @minLength 1
             * @pattern \S
             */
            value: string;
          }>;
          /** Bird contact attributes keyed by attribute name. */
          attributes?: Record<string, unknown>;
          /**
           * Bird contact list IDs.
           * @minItems 1
           */
          addToLists?: Array<string>;
        };
      };
      output: {
        /** The raw object returned by Bird. */
        contact: Record<string, unknown>;
      };
    };
  }
}

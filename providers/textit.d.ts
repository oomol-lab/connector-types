import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a TextIt contact with optional URNs, groups, language, and fields. */
    "textit.create_contact": {
      input: {
        /** The full name of the contact. */
        name?: string;
        /** The preferred language for the contact as a 3 letter ISO code. */
        language?: string;
        /**
         * URNs to associate with the contact.
         * @maxItems 100
         */
        urns?: Array<string>;
        /**
         * Group UUIDs this contact should belong to.
         * @maxItems 100
         */
        groups?: Array<string>;
        /** TextIt contact field values keyed by contact field key. */
        fields?: Record<string, unknown>;
      };
      output: {
        /** A TextIt contact. */
        contact: {
          /**
           * The contact UUID.
           * @format uuid
           */
          uuid?: string;
          /** The contact name. */
          name?: string | null;
          /** The contact status returned by TextIt. */
          status?: string;
          /** The preferred language for the contact. */
          language?: string | null;
          /** The URNs associated with the contact. */
          urns?: Array<string>;
          /** The groups this contact belongs to. */
          groups?: Array<{
            /**
             * The group UUID.
             * @format uuid
             */
            uuid?: string;
            /** The group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** TextIt contact field values keyed by contact field key. */
          fields?: Record<string, unknown>;
          /** A TextIt flow reference. */
          flow?: {
            /**
             * The flow UUID.
             * @format uuid
             */
            uuid?: string;
            /** The flow name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /**
           * When the contact was created.
           * @format date-time
           */
          created_on?: string;
          /**
           * When the contact was last modified.
           * @format date-time
           */
          modified_on?: string;
          /**
           * When the contact last communicated.
           * @format date-time
           */
          last_seen_on?: string | null;
          [key: string]: unknown;
        };
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a TextIt contact group. */
    "textit.create_group": {
      input: {
        /**
         * The group name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A TextIt contact group. */
        group: {
          /**
           * The group UUID.
           * @format uuid
           */
          uuid?: string;
          /** The group name. */
          name?: string;
          /** The smart group query, or null for manual groups. */
          query?: string | null;
          /** The group status returned by TextIt. */
          status?: string;
          /** Whether this is a system group. */
          system?: boolean;
          /** The number of contacts in the group. */
          count?: number;
          [key: string]: unknown;
        };
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a TextIt contact by UUID or URN. */
    "textit.delete_contact": {
      input: {
        /**
         * The contact UUID.
         * @format uuid
         */
        uuid?: string;
        /**
         * The contact URN.
         * @minLength 1
         */
        urn?: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete a TextIt contact group by UUID. */
    "textit.delete_group": {
      input: {
        /**
         * The group UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted: boolean;
      };
    };
    /** Get the current TextIt workspace details for the API token. */
    "textit.get_workspace": {
      input: Record<string, never>;
      output: {
        /** A TextIt workspace. */
        workspace: {
          /**
           * The workspace UUID.
           * @format uuid
           */
          uuid?: string;
          /** The workspace name. */
          name?: string;
          /** The workspace country code. */
          country?: string;
          /** The workspace language codes. */
          languages?: Array<string>;
          /** The workspace timezone. */
          timezone?: string;
          /** The workspace date style. */
          date_style?: string;
          /** Whether the workspace is anonymous. */
          anon?: boolean;
          [key: string]: unknown;
        };
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List TextIt broadcasts with optional UUID, date, and cursor filters. */
    "textit.list_broadcasts": {
      input: {
        /**
         * Filter by broadcast UUID.
         * @format uuid
         */
        uuid?: string;
        /**
         * Return broadcasts created before this datetime.
         * @format date-time
         */
        before?: string;
        /**
         * Return broadcasts created after this datetime.
         * @format date-time
         */
        after?: string;
        /**
         * The pagination cursor returned by a previous TextIt response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The cursor to pass as cursor on the next request, or null when there is no next page. */
        nextCursor: string | null;
        /** The cursor to pass as cursor for the previous page, or null when there is no previous page. */
        previousCursor: string | null;
        /** Broadcasts returned by TextIt. */
        broadcasts: Array<{
          /**
           * The broadcast UUID.
           * @format uuid
           */
          uuid?: string;
          /** The URNs that received the broadcast. */
          urns?: Array<string>;
          /** The contacts that received the broadcast. */
          contacts?: Array<{
            /**
             * The contact UUID.
             * @format uuid
             */
            uuid?: string;
            /** The contact name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The groups that received the broadcast. */
          groups?: Array<{
            /**
             * The group UUID.
             * @format uuid
             */
            uuid?: string;
            /** The group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Message text translations keyed by ISO-639-3 language code. */
          text?: Record<string, string>;
          /** Attachment media UUIDs keyed by ISO-639-3 language code. */
          attachments?: Record<string, Array<string>>;
          /** Quick replies keyed by ISO-639-3 language code. */
          quick_replies?: Record<string, Array<{
              /** The quick reply display text. */
              text?: string;
              /** Optional extra quick reply metadata. */
              extra?: string;
              [key: string]: unknown;
            }>>;
          /** The default translation language. */
          base_language?: string;
          /** The broadcast status returned by TextIt. */
          status?: string;
          /**
           * When the broadcast was created.
           * @format date-time
           */
          created_on?: string;
          [key: string]: unknown;
        }>;
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List TextIt contacts with optional UUID, URN, group, date, and cursor filters. */
    "textit.list_contacts": {
      input: {
        /**
         * Filter by contact UUID.
         * @format uuid
         */
        uuid?: string;
        /**
         * Filter by contact URN.
         * @minLength 1
         */
        urn?: string;
        /**
         * Filter by group name or UUID.
         * @minLength 1
         */
        group?: string;
        /**
         * Return contacts modified before this datetime.
         * @format date-time
         */
        before?: string;
        /**
         * Return contacts modified after this datetime.
         * @format date-time
         */
        after?: string;
        /**
         * The pagination cursor returned by a previous TextIt response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The cursor to pass as cursor on the next request, or null when there is no next page. */
        nextCursor: string | null;
        /** The cursor to pass as cursor for the previous page, or null when there is no previous page. */
        previousCursor: string | null;
        /** Contacts returned by TextIt. */
        contacts: Array<{
          /**
           * The contact UUID.
           * @format uuid
           */
          uuid?: string;
          /** The contact name. */
          name?: string | null;
          /** The contact status returned by TextIt. */
          status?: string;
          /** The preferred language for the contact. */
          language?: string | null;
          /** The URNs associated with the contact. */
          urns?: Array<string>;
          /** The groups this contact belongs to. */
          groups?: Array<{
            /**
             * The group UUID.
             * @format uuid
             */
            uuid?: string;
            /** The group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** TextIt contact field values keyed by contact field key. */
          fields?: Record<string, unknown>;
          /** A TextIt flow reference. */
          flow?: {
            /**
             * The flow UUID.
             * @format uuid
             */
            uuid?: string;
            /** The flow name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /**
           * When the contact was created.
           * @format date-time
           */
          created_on?: string;
          /**
           * When the contact was last modified.
           * @format date-time
           */
          modified_on?: string;
          /**
           * When the contact last communicated.
           * @format date-time
           */
          last_seen_on?: string | null;
          [key: string]: unknown;
        }>;
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List TextIt contact groups with optional filters. */
    "textit.list_groups": {
      input: {
        /**
         * Filter by group UUID.
         * @format uuid
         */
        uuid?: string;
        /**
         * Filter by group name.
         * @minLength 1
         */
        name?: string;
        /** Whether to only return manual groups. */
        manualOnly?: boolean;
        /**
         * The pagination cursor returned by a previous TextIt response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The cursor to pass as cursor on the next request, or null when there is no next page. */
        nextCursor: string | null;
        /** The cursor to pass as cursor for the previous page, or null when there is no previous page. */
        previousCursor: string | null;
        /** Groups returned by TextIt. */
        groups: Array<{
          /**
           * The group UUID.
           * @format uuid
           */
          uuid?: string;
          /** The group name. */
          name?: string;
          /** The smart group query, or null for manual groups. */
          query?: string | null;
          /** The group status returned by TextIt. */
          status?: string;
          /** Whether this is a system group. */
          system?: boolean;
          /** The number of contacts in the group. */
          count?: number;
          [key: string]: unknown;
        }>;
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List TextIt messages with optional folder, UUID, date, and cursor filters. */
    "textit.list_messages": {
      input: {
        /**
         * Filter by message UUID.
         * @format uuid
         */
        uuid?: string;
        /** The message folder to list. */
        folder?: "inbox" | "flows" | "archived" | "outbox" | "sent" | "failed";
        /**
         * Return messages created before this datetime.
         * @format date-time
         */
        before?: string;
        /**
         * Return messages created after this datetime.
         * @format date-time
         */
        after?: string;
        /**
         * The pagination cursor returned by a previous TextIt response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The cursor to pass as cursor on the next request, or null when there is no next page. */
        nextCursor: string | null;
        /** The cursor to pass as cursor for the previous page, or null when there is no previous page. */
        previousCursor: string | null;
        /** Messages returned by TextIt. */
        messages: Array<{
          /**
           * The message UUID.
           * @format uuid
           */
          uuid?: string;
          /** A TextIt contact reference. */
          contact?: {
            /**
             * The contact UUID.
             * @format uuid
             */
            uuid?: string;
            /** The contact name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The sender or receiver URN for the message. */
          urn?: string;
          /** The TextIt channel that handled the message. */
          channel?: {
            /**
             * The channel UUID.
             * @format uuid
             */
            uuid?: string;
            /** The channel name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The message direction returned by TextIt. */
          direction?: string;
          /** The TextIt message type. */
          type?: string;
          /** The message status returned by TextIt. */
          status?: string;
          /** The message visibility returned by TextIt. */
          visibility?: string;
          /** The logical message text. */
          text?: string;
          /** The message attachments returned by TextIt. */
          attachments?: Array<Record<string, unknown>>;
          /** The message quick replies returned by TextIt. */
          quick_replies?: Array<{
            /** The quick reply display text. */
            text?: string;
            /** Optional extra quick reply metadata. */
            extra?: string;
            [key: string]: unknown;
          }>;
          /** The message labels returned by TextIt. */
          labels?: Array<{
            /**
             * The label UUID.
             * @format uuid
             */
            uuid?: string;
            /** The label name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** A TextIt flow reference. */
          flow?: {
            /**
             * The flow UUID.
             * @format uuid
             */
            uuid?: string;
            /** The flow name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /**
           * When the message was created or received.
           * @format date-time
           */
          created_on?: string;
          /**
           * When the message was sent.
           * @format date-time
           */
          sent_on?: string | null;
          /**
           * When the message was last modified.
           * @format date-time
           */
          modified_on?: string;
          [key: string]: unknown;
        }>;
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Create and send a TextIt broadcast to URNs, contacts, or groups. */
    "textit.send_broadcast": {
      input: {
        /**
         * Recipient URNs for the broadcast.
         * @maxItems 100
         */
        urns?: Array<string>;
        /**
         * Recipient contact UUIDs for the broadcast.
         * @maxItems 100
         */
        contacts?: Array<string>;
        /**
         * Recipient group UUIDs for the broadcast.
         * @maxItems 100
         */
        groups?: Array<string>;
        /** Message text translations keyed by ISO-639-3 language code. */
        text: Record<string, string>;
        /** Attachment media UUIDs keyed by ISO-639-3 language code. */
        attachments?: Record<string, Array<string>>;
        /** Quick replies keyed by ISO-639-3 language code. */
        quick_replies?: Record<string, Array<{
            /** The quick reply display text. */
            text?: string;
            /** Optional extra quick reply metadata. */
            extra?: string;
            [key: string]: unknown;
          }>>;
        /** The default translation language as an ISO-639-3 code. */
        base_language?: string;
      };
      output: {
        /** A TextIt broadcast. */
        broadcast: {
          /**
           * The broadcast UUID.
           * @format uuid
           */
          uuid?: string;
          /** The URNs that received the broadcast. */
          urns?: Array<string>;
          /** The contacts that received the broadcast. */
          contacts?: Array<{
            /**
             * The contact UUID.
             * @format uuid
             */
            uuid?: string;
            /** The contact name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The groups that received the broadcast. */
          groups?: Array<{
            /**
             * The group UUID.
             * @format uuid
             */
            uuid?: string;
            /** The group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Message text translations keyed by ISO-639-3 language code. */
          text?: Record<string, string>;
          /** Attachment media UUIDs keyed by ISO-639-3 language code. */
          attachments?: Record<string, Array<string>>;
          /** Quick replies keyed by ISO-639-3 language code. */
          quick_replies?: Record<string, Array<{
              /** The quick reply display text. */
              text?: string;
              /** Optional extra quick reply metadata. */
              extra?: string;
              [key: string]: unknown;
            }>>;
          /** The default translation language. */
          base_language?: string;
          /** The broadcast status returned by TextIt. */
          status?: string;
          /**
           * When the broadcast was created.
           * @format date-time
           */
          created_on?: string;
          [key: string]: unknown;
        };
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a TextIt message to a single contact. */
    "textit.send_message": {
      input: {
        /**
         * The UUID of the contact to message.
         * @format uuid
         */
        contact: string;
        /**
         * The message text.
         * @minLength 1
         */
        text: string;
        /**
         * TextIt media object UUIDs to attach.
         * @maxItems 10
         */
        attachments?: Array<string>;
        /**
         * Quick replies to include with the message.
         * @maxItems 10
         */
        quick_replies?: Array<{
          /** The quick reply display text. */
          text?: string;
          /** Optional extra quick reply metadata. */
          extra?: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** A TextIt message. */
        message: {
          /**
           * The message UUID.
           * @format uuid
           */
          uuid?: string;
          /** A TextIt contact reference. */
          contact?: {
            /**
             * The contact UUID.
             * @format uuid
             */
            uuid?: string;
            /** The contact name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The sender or receiver URN for the message. */
          urn?: string;
          /** The TextIt channel that handled the message. */
          channel?: {
            /**
             * The channel UUID.
             * @format uuid
             */
            uuid?: string;
            /** The channel name. */
            name?: string;
            [key: string]: unknown;
          };
          /** The message direction returned by TextIt. */
          direction?: string;
          /** The TextIt message type. */
          type?: string;
          /** The message status returned by TextIt. */
          status?: string;
          /** The message visibility returned by TextIt. */
          visibility?: string;
          /** The logical message text. */
          text?: string;
          /** The message attachments returned by TextIt. */
          attachments?: Array<Record<string, unknown>>;
          /** The message quick replies returned by TextIt. */
          quick_replies?: Array<{
            /** The quick reply display text. */
            text?: string;
            /** Optional extra quick reply metadata. */
            extra?: string;
            [key: string]: unknown;
          }>;
          /** The message labels returned by TextIt. */
          labels?: Array<{
            /**
             * The label UUID.
             * @format uuid
             */
            uuid?: string;
            /** The label name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** A TextIt flow reference. */
          flow?: {
            /**
             * The flow UUID.
             * @format uuid
             */
            uuid?: string;
            /** The flow name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /**
           * When the message was created or received.
           * @format date-time
           */
          created_on?: string;
          /**
           * When the message was sent.
           * @format date-time
           */
          sent_on?: string | null;
          /**
           * When the message was last modified.
           * @format date-time
           */
          modified_on?: string;
          [key: string]: unknown;
        };
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a TextIt contact by UUID or URN. */
    "textit.update_contact": {
      input: {
        /**
         * The contact UUID to update.
         * @format uuid
         */
        uuid?: string;
        /**
         * The contact URN to update.
         * @minLength 1
         */
        urn?: string;
        /** The full name of the contact. */
        name?: string;
        /** The preferred language for the contact as a 3 letter ISO code. */
        language?: string;
        /**
         * URNs to associate with the contact.
         * @maxItems 100
         */
        urns?: Array<string>;
        /**
         * Group UUIDs this contact should belong to.
         * @maxItems 100
         */
        groups?: Array<string>;
        /** TextIt contact field values keyed by contact field key. */
        fields?: Record<string, unknown>;
      };
      output: {
        /** A TextIt contact. */
        contact: {
          /**
           * The contact UUID.
           * @format uuid
           */
          uuid?: string;
          /** The contact name. */
          name?: string | null;
          /** The contact status returned by TextIt. */
          status?: string;
          /** The preferred language for the contact. */
          language?: string | null;
          /** The URNs associated with the contact. */
          urns?: Array<string>;
          /** The groups this contact belongs to. */
          groups?: Array<{
            /**
             * The group UUID.
             * @format uuid
             */
            uuid?: string;
            /** The group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** TextIt contact field values keyed by contact field key. */
          fields?: Record<string, unknown>;
          /** A TextIt flow reference. */
          flow?: {
            /**
             * The flow UUID.
             * @format uuid
             */
            uuid?: string;
            /** The flow name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /**
           * When the contact was created.
           * @format date-time
           */
          created_on?: string;
          /**
           * When the contact was last modified.
           * @format date-time
           */
          modified_on?: string;
          /**
           * When the contact last communicated.
           * @format date-time
           */
          last_seen_on?: string | null;
          [key: string]: unknown;
        };
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a TextIt contact group name. */
    "textit.update_group": {
      input: {
        /**
         * The group UUID to update.
         * @format uuid
         */
        uuid: string;
        /**
         * The new group name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A TextIt contact group. */
        group: {
          /**
           * The group UUID.
           * @format uuid
           */
          uuid?: string;
          /** The group name. */
          name?: string;
          /** The smart group query, or null for manual groups. */
          query?: string | null;
          /** The group status returned by TextIt. */
          status?: string;
          /** Whether this is a system group. */
          system?: boolean;
          /** The number of contacts in the group. */
          count?: number;
          [key: string]: unknown;
        };
        /** The raw TextIt API response. */
        raw: Record<string, unknown>;
      };
    };
  }
}

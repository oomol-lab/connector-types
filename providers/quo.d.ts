import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in the connected Quo workspace. */
    "quo.create_contact": {
      input: {
        /** Default Quo contact fields. */
        defaultFields: {
          /**
           * Contact first name.
           * @minLength 1
           */
          firstName: string | null;
          /**
           * Contact last name.
           * @minLength 1
           */
          lastName?: string | null;
          /**
           * Contact company name.
           * @minLength 1
           */
          company?: string | null;
          /**
           * Contact role or title.
           * @minLength 1
           */
          role?: string | null;
          /** Email fields to store on the contact. */
          emails?: Array<{
            /**
             * Display name for this contact field.
             * @minLength 1
             */
            name: string;
            /**
             * Value for this contact field.
             * @minLength 1
             */
            value: string | null;
            /**
             * Existing field identifier used when updating a contact field.
             * @minLength 1
             */
            id?: string;
          }>;
          /** Phone number fields to store on the contact. */
          phoneNumbers?: Array<{
            /**
             * Display name for this contact field.
             * @minLength 1
             */
            name: string;
            /**
             * Value for this contact field.
             * @minLength 1
             */
            value: string | null;
            /**
             * Existing field identifier used when updating a contact field.
             * @minLength 1
             */
            id?: string;
          }>;
        };
        /** Custom fields to store on the contact. */
        customFields?: Array<{
          /**
           * Identifying key for the contact custom field.
           * @minLength 1
           */
          key: string;
          /**
           * Existing custom field identifier used when updating a contact.
           * @minLength 1
           */
          id?: string;
          /** Value for a Quo contact custom field. */
          value: Array<string> | string | number | boolean | null;
        }>;
        /**
         * Quo user ID for the user creating the contact.
         * @minLength 1
         */
        createdByUserId?: string;
        /**
         * Contact source identifier, such as public-api or a custom source.
         * @minLength 1
         */
        source?: string;
        /**
         * URL for the contact in the source system.
         * @minLength 1
         * @maxLength 200
         * @format uri
         */
        sourceUrl?: string;
        /**
         * Unique identifier for this contact in an external system.
         * @minLength 1
         * @maxLength 75
         */
        externalId?: string | null;
      };
      output: {
        /** Raw Quo record returned by the API. */
        data: Record<string, unknown>;
      };
    };
    /** Delete a contact from the connected Quo workspace. */
    "quo.delete_contact": {
      input: {
        /**
         * Quo contact ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Quo record returned by the API. */
        data: Record<string, unknown> | null;
      };
    };
    /** Get details for a Quo contact by ID. */
    "quo.get_contact": {
      input: {
        /**
         * Quo contact ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Quo record returned by the API. */
        data: Record<string, unknown>;
      };
    };
    /** Get details for a Quo message by ID. */
    "quo.get_message": {
      input: {
        /**
         * Quo message ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Quo record returned by the API. */
        data: Record<string, unknown>;
      };
    };
    /** Get details for a Quo phone number by ID. */
    "quo.get_phone_number": {
      input: {
        /**
         * Quo phone number ID.
         * @minLength 1
         */
        phoneNumberId: string;
      };
      output: {
        /** Raw Quo record returned by the API. */
        data: Record<string, unknown>;
      };
    };
    /** Get details for a Quo user by ID. */
    "quo.get_user": {
      input: {
        /**
         * Quo user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Raw Quo record returned by the API. */
        data: Record<string, unknown>;
      };
    };
    /** List contacts in the connected Quo workspace with optional filters. */
    "quo.list_contacts": {
      input: {
        /**
         * External contact IDs used to filter contacts.
         * @minItems 1
         */
        externalIds?: Array<string>;
        /**
         * Contact source names used to filter contacts.
         * @minItems 1
         */
        sources?: Array<string>;
        /**
         * Maximum number of contacts to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque page token returned by Quo.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Records returned by Quo. */
        data: Array<Record<string, unknown>>;
        /**
         * Token for the next page when available.
         * @minLength 1
         */
        nextPageToken?: string | null;
      };
    };
    /** List messages exchanged between a Quo number and conversation participants. */
    "quo.list_messages": {
      input: {
        /**
         * Quo phone number ID used to send or receive the messages.
         * @minLength 1
         */
        phoneNumberId: string;
        /**
         * External participant phone numbers in E.164 format.
         * @minItems 1
         */
        participants: Array<string>;
        /**
         * Quo user ID that sent the message.
         * @minLength 1
         */
        userId?: string;
        /**
         * Only include messages created after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Only include messages created before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Maximum number of messages to return per page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /**
         * Opaque page token returned by Quo.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Records returned by Quo. */
        data: Array<Record<string, unknown>>;
        /**
         * Token for the next page when available.
         * @minLength 1
         */
        nextPageToken?: string | null;
      };
    };
    /** List phone numbers in the connected Quo workspace. */
    "quo.list_phone_numbers": {
      input: {
        /**
         * Only return phone numbers associated with this Quo user ID.
         * @minLength 1
         */
        userId?: string;
      };
      output: {
        /** Records returned by Quo. */
        data: Array<Record<string, unknown>>;
        /**
         * Token for the next page when available.
         * @minLength 1
         */
        nextPageToken?: string | null;
      };
    };
    /** List users in the connected Quo workspace. */
    "quo.list_users": {
      input: {
        /**
         * Maximum number of users to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque page token returned by Quo.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Records returned by Quo. */
        data: Array<Record<string, unknown>>;
        /**
         * Token for the next page when available.
         * @minLength 1
         */
        nextPageToken?: string | null;
      };
    };
    /** Send a text message from a Quo phone number. */
    "quo.send_text_message": {
      input: {
        /**
         * Text content to send.
         * @minLength 1
         * @maxLength 1600
         */
        content: string;
        /** Quo sender phone number ID or E.164 phone number. */
        from: string;
        /**
         * Recipient phone numbers.
         * @minItems 1
         * @maxItems 1
         */
        to: Array<string>;
        /**
         * Quo user ID to send the message as.
         * @minLength 1
         */
        userId?: string;
        /** Conversation inbox status to set after sending. */
        setInboxStatus?: "done";
      };
      output: {
        /** Raw Quo record returned by the API. */
        data: Record<string, unknown>;
      };
    };
    /** Update a contact in the connected Quo workspace. */
    "quo.update_contact": {
      input: {
        /**
         * Quo contact ID to update.
         * @minLength 1
         */
        id: string;
        /** Default Quo contact fields. */
        defaultFields?: {
          /**
           * Contact first name.
           * @minLength 1
           */
          firstName: string | null;
          /**
           * Contact last name.
           * @minLength 1
           */
          lastName?: string | null;
          /**
           * Contact company name.
           * @minLength 1
           */
          company?: string | null;
          /**
           * Contact role or title.
           * @minLength 1
           */
          role?: string | null;
          /** Email fields to store on the contact. */
          emails?: Array<{
            /**
             * Display name for this contact field.
             * @minLength 1
             */
            name: string;
            /**
             * Value for this contact field.
             * @minLength 1
             */
            value: string | null;
            /**
             * Existing field identifier used when updating a contact field.
             * @minLength 1
             */
            id?: string;
          }>;
          /** Phone number fields to store on the contact. */
          phoneNumbers?: Array<{
            /**
             * Display name for this contact field.
             * @minLength 1
             */
            name: string;
            /**
             * Value for this contact field.
             * @minLength 1
             */
            value: string | null;
            /**
             * Existing field identifier used when updating a contact field.
             * @minLength 1
             */
            id?: string;
          }>;
        };
        /** Custom fields to store on the contact. */
        customFields?: Array<{
          /**
           * Identifying key for the contact custom field.
           * @minLength 1
           */
          key: string;
          /**
           * Existing custom field identifier used when updating a contact.
           * @minLength 1
           */
          id?: string;
          /** Value for a Quo contact custom field. */
          value: Array<string> | string | number | boolean | null;
        }>;
        /**
         * Quo user ID for the user creating the contact.
         * @minLength 1
         */
        createdByUserId?: string;
        /**
         * Contact source identifier, such as public-api or a custom source.
         * @minLength 1
         */
        source?: string;
        /**
         * URL for the contact in the source system.
         * @minLength 1
         * @maxLength 200
         * @format uri
         */
        sourceUrl?: string;
        /**
         * Unique identifier for this contact in an external system.
         * @minLength 1
         * @maxLength 75
         */
        externalId?: string | null;
      };
      output: {
        /** Raw Quo record returned by the API. */
        data: Record<string, unknown>;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Altiria contact. */
    "altiria.create_contact": {
      input: {
        /**
         * Contact email address.
         * @format email
         */
        email?: string;
        /**
         * Contact mobile phone number with international prefix.
         * @minLength 1
         */
        phone?: string;
        /**
         * Contact landline phone number.
         * @minLength 1
         */
        landline?: string;
        /**
         * Two-letter country code required when phone or landline is specified.
         * @minLength 2
         * @maxLength 2
         */
        countryIso?: string;
        /**
         * Contact group IDs to attach this contact to.
         * @minItems 1
         */
        groupsIds?: Array<number>;
        /**
         * Contact group names to attach this contact to.
         * @minItems 1
         */
        groupsNames?: Array<string>;
        /**
         * Contact first name.
         * @minLength 1
         */
        name?: string;
        /**
         * Contact surname.
         * @minLength 1
         */
        surname?: string;
        /**
         * Custom fields to set on this contact.
         * @minItems 1
         */
        customFields?: Array<{
          /**
           * Custom field name.
           * @minLength 1
           */
          key: string;
          /** Custom field type. */
          type?: "string" | "date" | "decimal";
          /**
           * Custom field value.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: {
        /** One normalized Altiria contact. */
        contact: {
          /** Altiria contact identifier. */
          id?: number | null;
          /** Contact email address. */
          email?: string | null;
          /** Contact mobile phone number. */
          phone?: string | null;
          /** Contact landline phone number. */
          landline?: string | null;
          /** Two-letter contact country code. */
          countryIso?: string | null;
          /** Contact first name. */
          name?: string | null;
          /** Contact surname. */
          surname?: string | null;
          /** Contact creation timestamp returned by Altiria. */
          createdAt?: string | null;
          /** Contact update timestamp returned by Altiria. */
          updatedAt?: string | null;
          /** Raw Altiria contact object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw Altiria response payload. */
        raw: unknown;
      };
    };
    /** Delete one Altiria contact by contact ID. */
    "altiria.delete_contact": {
      input: {
        /** Altiria contact identifier. */
        id: number;
      };
      output: {
        /** Whether the contact delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Fetch one Altiria contact by contact ID. */
    "altiria.get_contact": {
      input: {
        /** Altiria contact identifier. */
        id: number;
        /**
         * Associated contact resources to include in the response.
         * @minItems 1
         */
        include?: Array<"customFields" | "groups">;
      };
      output: {
        /** One normalized Altiria contact. */
        contact: {
          /** Altiria contact identifier. */
          id?: number | null;
          /** Contact email address. */
          email?: string | null;
          /** Contact mobile phone number. */
          phone?: string | null;
          /** Contact landline phone number. */
          landline?: string | null;
          /** Two-letter contact country code. */
          countryIso?: string | null;
          /** Contact first name. */
          name?: string | null;
          /** Contact surname. */
          surname?: string | null;
          /** Contact creation timestamp returned by Altiria. */
          createdAt?: string | null;
          /** Contact update timestamp returned by Altiria. */
          updatedAt?: string | null;
          /** Raw Altiria contact object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw Altiria response payload. */
        raw: unknown;
      };
    };
    /** Fetch SMS information from Altiria by one or more message identifiers. */
    "altiria.get_sms": {
      input: {
        /**
         * Altiria SMS message identifier, or multiple identifiers separated by commas.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** SMS message records returned by Altiria. */
        messages: Array<{
          /** Altiria SMS message identifier. */
          id?: string | null;
          /** Sender value used for the SMS message. */
          from?: string | null;
          /** Recipient phone number. */
          to?: string | null;
          /** SMS message body. */
          message?: string | null;
          /** Altiria campaign identifier. */
          campaignId?: number | null;
          /** Altiria sending identifier. */
          sendingId?: number | null;
          /** Whether Altiria reports the message as delivered. */
          isDelivered?: boolean | null;
          /** Whether Altiria reports a shortened link click. */
          isClicked?: boolean | null;
          /** Raw Altiria SMS object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw Altiria response payload. */
        raw: unknown;
      };
    };
    /** List contacts from the connected Altiria account. */
    "altiria.list_contacts": {
      input: {
        /**
         * Maximum contacts to return in one request.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * Associated contact resources to include in the response.
         * @minItems 1
         */
        include?: Array<"customFields" | "groups">;
      };
      output: {
        /** Contact records returned by Altiria. */
        contacts: Array<{
          /** Altiria contact identifier. */
          id?: number | null;
          /** Contact email address. */
          email?: string | null;
          /** Contact mobile phone number. */
          phone?: string | null;
          /** Contact landline phone number. */
          landline?: string | null;
          /** Two-letter contact country code. */
          countryIso?: string | null;
          /** Contact first name. */
          name?: string | null;
          /** Contact surname. */
          surname?: string | null;
          /** Contact creation timestamp returned by Altiria. */
          createdAt?: string | null;
          /** Contact update timestamp returned by Altiria. */
          updatedAt?: string | null;
          /** Raw Altiria contact object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination and other metadata returned by Altiria. */
        meta: Record<string, unknown> | null;
        /** Raw Altiria response payload. */
        raw: unknown;
      };
    };
    /** List contact groups from the connected Altiria account. */
    "altiria.list_groups": {
      input: {
        /**
         * Maximum groups to return in one request.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Result page to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Group records returned by Altiria. */
        groups: Array<{
          /** Altiria group identifier. */
          id?: number | null;
          /** Altiria group name. */
          name?: string | null;
          /** Raw Altiria group object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination and other metadata returned by Altiria. */
        meta: Record<string, unknown> | null;
        /** Raw Altiria response payload. */
        raw: unknown;
      };
    };
    /** Send an SMS message through Altiria's REST SMS endpoint. */
    "altiria.send_sms": {
      input: {
        /**
         * Recipient mobile phone numbers with international prefix.
         * @minItems 1
         */
        to: Array<string>;
        /**
         * SMS sender value registered or allowed in Altiria.
         * @minLength 1
         */
        from: string;
        /**
         * SMS body text to send.
         * @minLength 1
         */
        message: string;
        /** Delivery notification URL, either shared by all recipients or one URL per recipient. */
        notificationUrl?: string | Array<string>;
        /**
         * Optional campaign name used in Altiria statistics.
         * @minLength 1
         */
        campaignName?: string;
        /**
         * Campaign tags to attach to the send.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Whether to send the message as certified SMS. */
        certified?: boolean;
        /** Whether Altiria should split long SMS messages into SMS parts. */
        splitParts?: boolean;
        /** Whether to send the message as a Flash SMS. */
        flash?: boolean;
        /**
         * Substitution variable objects, one per recipient.
         * @minItems 1
         */
        sub?: Array<Record<string, unknown>>;
      };
      output: {
        /** Whether Altiria accepted the SMS request. */
        accepted: boolean;
        /** SMS message records returned by Altiria. */
        messages: Array<{
          /** Altiria SMS message identifier. */
          id?: string | null;
          /** Sender value used for the SMS message. */
          from?: string | null;
          /** Recipient phone number. */
          to?: string | null;
          /** SMS message body. */
          message?: string | null;
          /** Altiria campaign identifier. */
          campaignId?: number | null;
          /** Altiria sending identifier. */
          sendingId?: number | null;
          /** Whether Altiria reports the message as delivered. */
          isDelivered?: boolean | null;
          /** Whether Altiria reports a shortened link click. */
          isClicked?: boolean | null;
          /** Raw Altiria SMS object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw Altiria response payload. */
        raw: unknown;
      };
    };
    /** Update an existing Altiria contact. */
    "altiria.update_contact": {
      input: {
        /** Altiria contact identifier. */
        id: number;
        /**
         * Contact email address.
         * @format email
         */
        email?: string;
        /**
         * Contact mobile phone number with international prefix.
         * @minLength 1
         */
        phone?: string;
        /**
         * Contact landline phone number.
         * @minLength 1
         */
        landline?: string;
        /**
         * Two-letter country code required when phone or landline is specified.
         * @minLength 2
         * @maxLength 2
         */
        countryIso?: string;
        /**
         * Contact group IDs to attach this contact to.
         * @minItems 1
         */
        groupsIds?: Array<number>;
        /**
         * Contact group names to attach this contact to.
         * @minItems 1
         */
        groupsNames?: Array<string>;
        /**
         * Contact first name.
         * @minLength 1
         */
        name?: string;
        /**
         * Contact surname.
         * @minLength 1
         */
        surname?: string;
        /**
         * Custom fields to set on this contact.
         * @minItems 1
         */
        customFields?: Array<{
          /**
           * Custom field name.
           * @minLength 1
           */
          key: string;
          /** Custom field type. */
          type?: "string" | "date" | "decimal";
          /**
           * Custom field value.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: {
        /** One normalized Altiria contact. */
        contact: {
          /** Altiria contact identifier. */
          id?: number | null;
          /** Contact email address. */
          email?: string | null;
          /** Contact mobile phone number. */
          phone?: string | null;
          /** Contact landline phone number. */
          landline?: string | null;
          /** Two-letter contact country code. */
          countryIso?: string | null;
          /** Contact first name. */
          name?: string | null;
          /** Contact surname. */
          surname?: string | null;
          /** Contact creation timestamp returned by Altiria. */
          createdAt?: string | null;
          /** Contact update timestamp returned by Altiria. */
          updatedAt?: string | null;
          /** Raw Altiria contact object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw Altiria response payload. */
        raw: unknown;
      };
    };
  }
}

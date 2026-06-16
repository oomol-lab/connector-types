import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate the ClickSend price for one or more SMS messages without sending them. */
    "clicksend.calculate_sms_price": {
      input: {
        /**
         * SMS messages to send or price.
         * @minItems 1
         */
        messages: Array<{
          /**
           * The SMS body to send.
           * @minLength 1
           */
          body: string;
          /**
           * The recipient phone number in E.164 format.
           * @minLength 1
           */
          to?: string;
          /**
           * The ClickSend contact list ID to send to.
           * @minLength 1
           */
          list_id?: string;
          /**
           * The sender ID, dedicated number, own number, or alpha tag.
           * @minLength 1
           */
          from?: string;
          /**
           * The source application name passed to ClickSend.
           * @minLength 1
           */
          source?: string;
          /** The Unix timestamp when ClickSend should send the SMS. */
          schedule?: number;
          /**
           * A custom string returned by ClickSend with message callbacks.
           * @minLength 1
           */
          custom_string?: string;
          /**
           * The ClickSend contact ID associated with the recipient.
           * @minLength 1
           */
          contact_id?: string;
          /**
           * The two-letter destination country code.
           * @minLength 1
           */
          country?: string;
          /**
           * The email address that should receive SMS replies.
           * @minLength 1
           */
          from_email?: string;
          /** Whether ClickSend should exclude recipients that cannot receive this sender ID. */
          exclude_no_sender_id_recipients?: boolean;
        }>;
        /** Whether ClickSend should shorten URLs in the SMS body. */
        shorten_urls?: boolean;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a contact in a ClickSend contact list. */
    "clicksend.create_contact": {
      input: {
        /**
         * The ClickSend contact list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /** A ClickSend contact payload. */
        contact: {
          /**
           * The contact phone number.
           * @minLength 1
           */
          phone_number?: string;
          /**
           * The contact email address.
           * @minLength 1
           */
          email?: string;
          /**
           * The contact fax number.
           * @minLength 1
           */
          fax_number?: string;
          /**
           * The contact first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The contact last name.
           * @minLength 1
           */
          last_name?: string;
          /**
           * The contact organization name.
           * @minLength 1
           */
          organization_name?: string;
          /**
           * The first line of the contact postal address.
           * @minLength 1
           */
          address_line_1?: string;
          /**
           * The second line of the contact postal address.
           * @minLength 1
           */
          address_line_2?: string;
          /**
           * The contact city.
           * @minLength 1
           */
          address_city?: string;
          /**
           * The contact state or region.
           * @minLength 1
           */
          address_state?: string;
          /**
           * The contact postal code.
           * @minLength 1
           */
          address_postal_code?: string;
          /**
           * The contact country code.
           * @minLength 1
           */
          address_country?: string;
          /**
           * The first custom contact field.
           * @minLength 1
           */
          custom_1?: string;
          /**
           * The second custom contact field.
           * @minLength 1
           */
          custom_2?: string;
          /**
           * The third custom contact field.
           * @minLength 1
           */
          custom_3?: string;
          /**
           * The fourth custom contact field.
           * @minLength 1
           */
          custom_4?: string;
        };
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a ClickSend contact list. */
    "clicksend.create_contact_list": {
      input: {
        /**
         * The ClickSend contact list name.
         * @minLength 1
         */
        list_name: string;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a ClickSend contact by list ID and contact ID. */
    "clicksend.delete_contact": {
      input: {
        /**
         * The ClickSend contact list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * The ClickSend contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a ClickSend contact list by ID. */
    "clicksend.delete_contact_list": {
      input: {
        /**
         * The ClickSend contact list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the ClickSend account profile associated with the configured credentials. */
    "clicksend.get_account": {
      input: Record<string, never>;
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one ClickSend contact by list ID and contact ID. */
    "clicksend.get_contact": {
      input: {
        /**
         * The ClickSend contact list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * The ClickSend contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one ClickSend contact list by ID. */
    "clicksend.get_contact_list": {
      input: {
        /**
         * The ClickSend contact list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List ClickSend contact lists with pagination controls. */
    "clicksend.list_contact_lists": {
      input: {
        /**
         * The 1-based page number to request from ClickSend.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List contacts in a ClickSend contact list. */
    "clicksend.list_contacts": {
      input: {
        /**
         * The ClickSend contact list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * The 1-based page number to request from ClickSend.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of contacts to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Send one or more SMS messages through ClickSend. */
    "clicksend.send_sms": {
      input: {
        /**
         * SMS messages to send or price.
         * @minItems 1
         */
        messages: Array<{
          /**
           * The SMS body to send.
           * @minLength 1
           */
          body: string;
          /**
           * The recipient phone number in E.164 format.
           * @minLength 1
           */
          to?: string;
          /**
           * The ClickSend contact list ID to send to.
           * @minLength 1
           */
          list_id?: string;
          /**
           * The sender ID, dedicated number, own number, or alpha tag.
           * @minLength 1
           */
          from?: string;
          /**
           * The source application name passed to ClickSend.
           * @minLength 1
           */
          source?: string;
          /** The Unix timestamp when ClickSend should send the SMS. */
          schedule?: number;
          /**
           * A custom string returned by ClickSend with message callbacks.
           * @minLength 1
           */
          custom_string?: string;
          /**
           * The ClickSend contact ID associated with the recipient.
           * @minLength 1
           */
          contact_id?: string;
          /**
           * The two-letter destination country code.
           * @minLength 1
           */
          country?: string;
          /**
           * The email address that should receive SMS replies.
           * @minLength 1
           */
          from_email?: string;
          /** Whether ClickSend should exclude recipients that cannot receive this sender ID. */
          exclude_no_sender_id_recipients?: boolean;
        }>;
        /** Whether ClickSend should shorten URLs in the SMS body. */
        shorten_urls?: boolean;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a ClickSend contact by list ID and contact ID. */
    "clicksend.update_contact": {
      input: {
        /**
         * The ClickSend contact list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * The ClickSend contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
        /** A ClickSend contact payload. */
        contact: {
          /**
           * The contact phone number.
           * @minLength 1
           */
          phone_number?: string;
          /**
           * The contact email address.
           * @minLength 1
           */
          email?: string;
          /**
           * The contact fax number.
           * @minLength 1
           */
          fax_number?: string;
          /**
           * The contact first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The contact last name.
           * @minLength 1
           */
          last_name?: string;
          /**
           * The contact organization name.
           * @minLength 1
           */
          organization_name?: string;
          /**
           * The first line of the contact postal address.
           * @minLength 1
           */
          address_line_1?: string;
          /**
           * The second line of the contact postal address.
           * @minLength 1
           */
          address_line_2?: string;
          /**
           * The contact city.
           * @minLength 1
           */
          address_city?: string;
          /**
           * The contact state or region.
           * @minLength 1
           */
          address_state?: string;
          /**
           * The contact postal code.
           * @minLength 1
           */
          address_postal_code?: string;
          /**
           * The contact country code.
           * @minLength 1
           */
          address_country?: string;
          /**
           * The first custom contact field.
           * @minLength 1
           */
          custom_1?: string;
          /**
           * The second custom contact field.
           * @minLength 1
           */
          custom_2?: string;
          /**
           * The third custom contact field.
           * @minLength 1
           */
          custom_3?: string;
          /**
           * The fourth custom contact field.
           * @minLength 1
           */
          custom_4?: string;
        };
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a ClickSend contact list name. */
    "clicksend.update_contact_list": {
      input: {
        /**
         * The ClickSend contact list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * The new ClickSend contact list name.
         * @minLength 1
         */
        list_name: string;
      };
      output: {
        /** The response code returned by ClickSend. */
        responseCode?: string;
        /** The response message returned by ClickSend. */
        responseMessage?: string;
        /** The data payload returned by ClickSend. */
        data?: unknown;
        /** The raw ClickSend response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}

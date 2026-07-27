import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one httpSMS message by ID. */
    "httpsms.delete_message": {
      input: {
        /**
         * The message ID to delete.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** Whether the message delete request completed successfully. */
        deleted: boolean;
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
      };
    };
    /** Fetch the current month httpSMS sent and received message usage summary. */
    "httpsms.get_billing_usage": {
      input: Record<string, never>;
      output: {
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
        /** An httpSMS billing usage record. */
        usage: {
          /** The billing usage record ID. */
          id?: string;
          /** The number of sent messages in the usage period. */
          sent_messages?: number;
          /** The number of received messages in the usage period. */
          received_messages?: number;
          /** The total cost reported by httpSMS for the usage period. */
          total_cost?: number;
          /** The usage period start timestamp. */
          start_timestamp?: string;
          /** The usage period end timestamp. */
          end_timestamp?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch the current httpSMS user for the connected API key. */
    "httpsms.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
        /** The current httpSMS user without the upstream api_key field. */
        user: {
          /** The httpSMS user ID. */
          id?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /** The user's configured timezone. */
          timezone?: string;
          /** The user's subscription name. */
          subscription_name?: string;
          /** The user's subscription status. */
          subscription_status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one httpSMS message by ID. */
    "httpsms.get_message": {
      input: {
        /**
         * The message ID to fetch.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
        /** An httpSMS message. */
        message: {
          /** The message ID. */
          id?: string;
          /** The owner phone number. */
          owner?: string;
          /** The contact phone number. */
          contact?: string;
          /** The message content. */
          content?: string;
          /** The current message status. */
          status?: string;
          /** The message direction type. */
          type?: string;
          /** The client request ID when present. */
          request_id?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List past httpSMS billing usage records for sent and received messages. */
    "httpsms.list_billing_usage_history": {
      input: {
        /**
         * The number of records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
        /** The billing usage records returned for this page. */
        usages: Array<{
          /** The billing usage record ID. */
          id?: string;
          /** The number of sent messages in the usage period. */
          sent_messages?: number;
          /** The number of received messages in the usage period. */
          received_messages?: number;
          /** The total cost reported by httpSMS for the usage period. */
          total_cost?: number;
          /** The usage period start timestamp. */
          start_timestamp?: string;
          /** The usage period end timestamp. */
          end_timestamp?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List message threads for one registered owner phone number. */
    "httpsms.list_message_threads": {
      input: {
        /**
         * The registered owner phone number.
         * @minLength 1
         */
        owner: string;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** A text query used to filter returned records. */
        query?: string;
      };
      output: {
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
        /** The message threads returned for this page. */
        threads: Array<{
          /** The message thread ID. */
          id?: string;
          /** The owner phone number. */
          owner?: string;
          /** The contact phone number. */
          contact?: string;
          /** The last message ID in the thread. */
          last_message_id?: string;
          /** The last message content in the thread. */
          last_message_content?: string;
          /** The current thread status. */
          status?: string;
          /** Whether the thread is archived. */
          is_archived?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List messages sent between one owner phone number and one contact phone number. */
    "httpsms.list_messages": {
      input: {
        /**
         * The registered owner phone number.
         * @minLength 1
         */
        owner: string;
        /**
         * The contact phone number.
         * @minLength 1
         */
        contact: string;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** A text query used to filter returned records. */
        query?: string;
      };
      output: {
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
        /** The messages returned for this page. */
        messages: Array<{
          /** The message ID. */
          id?: string;
          /** The owner phone number. */
          owner?: string;
          /** The contact phone number. */
          contact?: string;
          /** The message content. */
          content?: string;
          /** The current message status. */
          status?: string;
          /** The message direction type. */
          type?: string;
          /** The client request ID when present. */
          request_id?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List phones registered to the current httpSMS account. */
    "httpsms.list_phones": {
      input: {
        /**
         * The number of records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** A text query used to filter returned records. */
        query?: string;
      };
      output: {
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
        /** The phones returned for this page. */
        phones: Array<{
          /** The phone record ID. */
          id?: string;
          /** The registered phone number. */
          phone_number?: string;
          /** The SIM slot used by this phone configuration. */
          sim?: string;
          /** The configured SMS send rate for this phone. */
          messages_per_minute?: number;
          /** The maximum send attempts configured for this phone. */
          max_send_attempts?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Send one SMS or MMS message through a registered httpSMS Android phone. */
    "httpsms.send_message": {
      input: {
        /**
         * The registered owner phone number to send from.
         * @minLength 1
         */
        from: string;
        /**
         * The recipient phone number.
         * @minLength 1
         */
        to: string;
        /**
         * The SMS message content.
         * @minLength 1
         */
        content: string;
        /**
         * Optional MMS attachment URLs. When provided, httpSMS sends the message as MMS.
         * @minItems 1
         */
        attachments?: Array<string>;
        /** Whether the message content is end-to-end encrypted by the httpSMS mobile app. */
        encrypted?: boolean;
        /**
         * An optional client request ID used to track this send.
         * @minLength 1
         */
        requestId?: string;
        /**
         * An optional future send time in the user's profile timezone, up to 20 days ahead.
         * @format date-time
         */
        sendAt?: string;
      };
      output: {
        /** The status value returned by httpSMS. */
        status: string;
        /** The response message returned by httpSMS. */
        responseMessage: string;
        /** An httpSMS message. */
        message: {
          /** The message ID. */
          id?: string;
          /** The owner phone number. */
          owner?: string;
          /** The contact phone number. */
          contact?: string;
          /** The message content. */
          content?: string;
          /** The current message status. */
          status?: string;
          /** The message direction type. */
          type?: string;
          /** The client request ID when present. */
          request_id?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}

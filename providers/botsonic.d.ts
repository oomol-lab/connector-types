import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate one synchronous response from the connected Botsonic bot. */
    "botsonic.generate_response": {
      input: {
        /**
         * User question for the bot.
         * @minLength 1
         */
        input_text: string;
        /**
         * The Botsonic chat identifier for this conversation.
         * @format uuid
         */
        chat_id: string;
        /**
         * Optional source value for Botsonic to refer to.
         * @minLength 1
         */
        source?: string;
        /**
         * Optional Botsonic starter question identifier.
         * @format uuid
         */
        starter_question_id?: string;
        /**
         * Optional unique user identifier stored by Botsonic in the inbox.
         * @minLength 1
         */
        user_unique_identifier?: string;
        /** Previous chat history for Botsonic to use as context. */
        chat_history?: Array<{
          /**
           * Optional message identifier for this chat history item.
           * @format uuid
           */
          id?: string;
          /**
           * The chat history message text.
           * @minLength 1
           */
          message: string;
          /** Whether this chat history item was sent by the end user. */
          sent: boolean;
          /** Sources attached to this chat history item. */
          sources?: Array<Record<string, unknown>>;
          /** Generated image URLs attached to this chat history item. */
          generated_images?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The response format Botsonic should return. */
        response_type?: "text" | "html" | "markdown" | "mrkdwn";
        /**
         * Existing Botsonic chat user identifier to link with old user data.
         * @minLength 1
         */
        chat_user_id?: string;
        /** Provider-specific metadata forwarded to Botsonic. */
        extra_metadata?: Record<string, unknown>;
        /** Whether Botsonic should return full chat history so far. */
        full_history?: boolean;
        /**
         * Existing message identifier used by Botsonic to resolve handoff.
         * @format uuid
         */
        message_id?: string;
        /**
         * Maximum number of seconds Botsonic should keep the connection open before timing out.
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** The generated answer returned by Botsonic. */
        answer: string;
        /**
         * The Botsonic message identifier for the generated answer.
         * @format uuid
         */
        message_id?: string;
        /** Sources returned by Botsonic for the answer. */
        sources?: Array<Record<string, unknown>>;
        /** Chat history returned by Botsonic. */
        chat_history?: Array<{
          /**
           * Optional Botsonic message identifier.
           * @format uuid
           */
          id?: string;
          /** The chat history message text. */
          message: string;
          /** Whether this chat history item was sent by the end user. */
          sent: boolean;
          /** Sources attached to this history item. */
          sources?: Array<Record<string, unknown>>;
          /** Generated image URLs attached to this history item. */
          generated_images?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Generated image URLs returned by Botsonic. */
        generated_images?: Array<string>;
        /** Follow-up questions suggested by Botsonic. */
        follow_up_questions?: Array<string>;
        /** Whether Botsonic reports a human handoff status. */
        human_handoff_status?: boolean;
        /** User options returned by Botsonic. */
        user_options?: Array<unknown>;
        /** Whether Botsonic reports the chat has ended. */
        chat_ended?: boolean;
        /** End-chat feedback returned by Botsonic. */
        end_chat_feedback?: string;
        [key: string]: unknown;
      };
    };
    /** Get one Botsonic conversation by chat identifier. */
    "botsonic.get_conversation": {
      input: {
        /**
         * The Botsonic conversation chat identifier.
         * @format uuid
         */
        chat_id: string;
      };
      output: {
        /** Optional internal Botsonic conversation document identifier. */
        _id?: string;
        /**
         * The Botsonic conversation chat identifier.
         * @format uuid
         */
        chat_id: string;
        /**
         * The Botsonic bot identifier attached to the conversation.
         * @format uuid
         */
        bot_id: string;
        /** The Botsonic owner identifier for the conversation. */
        owner_id: string;
        /** The IP address associated with the conversation. */
        ip_address?: string;
        /** The number of messages in the conversation. */
        num_messages: number;
        /** The conversation source returned by Botsonic. */
        source?: string;
        /** Whether Botsonic reports the conversation as resolved. */
        is_resolved?: boolean;
        /** The OpenAI thread identifier attached to the conversation. */
        oai_thread_id?: string;
        /** Additional feedback stored for this conversation. */
        additional_feedback?: string;
        /** Whether the conversation has ended. */
        chat_ended?: boolean;
        /** Messages and events stored in this conversation. */
        chat_data: Array<{
          /**
           * Optional Botsonic chat data identifier.
           * @format uuid
           */
          id?: string;
          /** The message text returned for this chat data entry. */
          message: string;
          /** Nested message fragments returned by Botsonic. */
          messages?: Array<Record<string, unknown>>;
          /** Whether this message was sent by the end user. */
          sent?: boolean;
          /** Whether this message has been transcripted by Botsonic. */
          transcripted?: boolean;
          /** Whether Botsonic reports the message was delivered. */
          is_delivered?: boolean;
          /** Failure reason returned by Botsonic for this message. */
          failed_reason?: string;
          /** Failure details returned by Botsonic for this message. */
          failed_data?: Record<string, unknown>;
          /** Request body details stored by Botsonic for this message. */
          req_body?: Record<string, unknown>;
          /**
           * Run identifier attached to this Botsonic message.
           * @format uuid
           */
          run_id?: string;
          /** Sources attached to this message. */
          sources?: Array<Record<string, unknown>>;
          /** Feedback status returned by Botsonic for this message. */
          like_status?: string;
          /** Resolution status returned by Botsonic for this message. */
          resolution_status?: string;
          /** Whether this message was sent through a live agent. */
          is_via_live_agent?: boolean;
          /**
           * The message creation timestamp returned by Botsonic.
           * @format date-time
           */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /**
         * The conversation creation timestamp returned by Botsonic.
         * @format date-time
         */
        created_at: string;
        /**
         * The conversation last update timestamp returned by Botsonic.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** List conversations for the connected Botsonic bot token. */
    "botsonic.list_conversations": {
      input: {
        /**
         * Search query used to match Botsonic conversations.
         * @minLength 1
         */
        search_query?: string;
        /** The conversation sorting mode. */
        sort_by?: "recent" | "negative" | "positive";
        /** The conversation sorting order. */
        sort_order?: "asc" | "desc";
        /**
         * Filter conversations updated after this ISO 8601 timestamp.
         * @format date-time
         */
        updated_after?: string;
        /**
         * Filter conversations updated before this ISO 8601 timestamp.
         * @format date-time
         */
        updated_before?: string;
        /**
         * The page number to request from Botsonic.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of conversations to request from Botsonic.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The conversations returned by Botsonic. */
        items: Array<{
          /** Optional internal Botsonic conversation document identifier. */
          _id?: string;
          /**
           * The Botsonic conversation chat identifier.
           * @format uuid
           */
          chat_id: string;
          /**
           * The Botsonic bot identifier attached to the conversation.
           * @format uuid
           */
          bot_id: string;
          /** The Botsonic owner identifier for the conversation. */
          owner_id: string;
          /** The IP address associated with the conversation. */
          ip_address?: string;
          /** The number of messages in the conversation. */
          num_messages: number;
          /** The conversation source returned by Botsonic. */
          source?: string;
          /** Whether Botsonic reports the conversation as resolved. */
          is_resolved?: boolean;
          /** The OpenAI thread identifier attached to the conversation. */
          oai_thread_id?: string;
          /** Additional feedback stored for this conversation. */
          additional_feedback?: string;
          /** Whether the conversation has ended. */
          chat_ended?: boolean;
          /** Messages and events stored in this conversation. */
          chat_data: Array<{
            /**
             * Optional Botsonic chat data identifier.
             * @format uuid
             */
            id?: string;
            /** The message text returned for this chat data entry. */
            message: string;
            /** Nested message fragments returned by Botsonic. */
            messages?: Array<Record<string, unknown>>;
            /** Whether this message was sent by the end user. */
            sent?: boolean;
            /** Whether this message has been transcripted by Botsonic. */
            transcripted?: boolean;
            /** Whether Botsonic reports the message was delivered. */
            is_delivered?: boolean;
            /** Failure reason returned by Botsonic for this message. */
            failed_reason?: string;
            /** Failure details returned by Botsonic for this message. */
            failed_data?: Record<string, unknown>;
            /** Request body details stored by Botsonic for this message. */
            req_body?: Record<string, unknown>;
            /**
             * Run identifier attached to this Botsonic message.
             * @format uuid
             */
            run_id?: string;
            /** Sources attached to this message. */
            sources?: Array<Record<string, unknown>>;
            /** Feedback status returned by Botsonic for this message. */
            like_status?: string;
            /** Resolution status returned by Botsonic for this message. */
            resolution_status?: string;
            /** Whether this message was sent through a live agent. */
            is_via_live_agent?: boolean;
            /**
             * The message creation timestamp returned by Botsonic.
             * @format date-time
             */
            created_at?: string;
            [key: string]: unknown;
          }>;
          /**
           * The conversation creation timestamp returned by Botsonic.
           * @format date-time
           */
          created_at: string;
          /**
           * The conversation last update timestamp returned by Botsonic.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching records returned by Botsonic.
         * @minimum 0
         */
        total?: number;
        /**
         * The current page number returned by Botsonic.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The current page size returned by Botsonic.
         * @exclusiveMinimum 0
         */
        size?: number;
        /**
         * The total number of pages returned by Botsonic.
         * @minimum 0
         */
        pages?: number;
        [key: string]: unknown;
      };
    };
    /** List FAQs attached to the connected Botsonic bot token. */
    "botsonic.list_faqs": {
      input: {
        /**
         * Search query used to match Botsonic FAQs.
         * @minLength 1
         */
        search_query?: string;
        /** The FAQ attribute to sort by. */
        sort_by?: "id" | "bot_id" | "question" | "answer" | "error_reason" | "status" | "characters" | "migration_status" | "created_at" | "updated_at";
        /** The FAQ sorting order. */
        sort_order?: "asc" | "desc";
        /**
         * The page number to request from Botsonic.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of FAQs to request from Botsonic.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** The FAQs returned by Botsonic. */
        items: Array<{
          /**
           * The Botsonic FAQ identifier.
           * @format uuid
           */
          id: string;
          /**
           * The Botsonic bot identifier attached to the FAQ.
           * @format uuid
           */
          bot_id: string;
          /** The FAQ question text. */
          question: string;
          /** The FAQ answer text. */
          answer: string;
          /** The error reason returned by Botsonic for failed FAQ processing. */
          error_reason?: string;
          /** The Botsonic processing status for the FAQ. */
          status: string;
          /** The number of FAQ characters counted by Botsonic. */
          characters: number;
          /** The migration status returned by Botsonic for the FAQ. */
          migration_status?: string;
          /**
           * The FAQ creation timestamp returned by Botsonic.
           * @format date-time
           */
          created_at: string;
          /**
           * The FAQ last update timestamp returned by Botsonic.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching records returned by Botsonic.
         * @minimum 0
         */
        total?: number;
        /**
         * The current page number returned by Botsonic.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The current page size returned by Botsonic.
         * @exclusiveMinimum 0
         */
        size?: number;
        /**
         * The total number of pages returned by Botsonic.
         * @minimum 0
         */
        pages?: number;
        [key: string]: unknown;
      };
    };
  }
}

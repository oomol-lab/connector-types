import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send a text message to an Orimon chatbot and return its response. */
    "orimon.send_message": {
      input: {
        /**
         * The unique ID of the target Orimon chatbot.
         * @minLength 1
         * @pattern \S
         */
        tenantId: string;
        /**
         * The text message to send to the chatbot.
         * @minLength 1
         * @pattern \S
         */
        message: string;
        /**
         * A stable platform session ID used to continue a conversation. A UUID-based value is generated when omitted.
         * @minLength 1
         * @pattern \S
         */
        psid?: string;
        /**
         * A unique ID for this user message. A UUID is generated when omitted.
         * @minLength 1
         * @pattern \S
         */
        messageId?: string;
      };
      output: {
        /** The request status reported by Orimon. */
        status?: string;
        /** The request result message reported by Orimon. */
        message?: string;
        /** Conversation data returned by Orimon. */
        data?: {
          /** The returned event type. */
          type?: string;
          /** The timestamp of the response. */
          timestamp?: string;
          /** The platform session identifier used for the conversation. */
          psid?: string;
          /** The Orimon session identifier for the conversation. */
          sessionId?: string;
          /** Messages returned by the chatbot. */
          messages?: Array<{
            /** The Orimon chat log identifier for this exchange. */
            chatLogId?: string;
            /** The Orimon session identifier for the conversation. */
            sessionId?: string;
            /** The caller-provided platform session identifier. */
            psid?: string;
            /** The unique identifier of the Orimon chatbot. */
            tenantId?: string;
            /** The unique identifier of the returned message. */
            id?: string;
            /** The returned message type. */
            type?: string;
            /** The chatbot response payload. */
            payload?: {
              /** The chatbot response text. */
              text?: string;
              /** Button options configured for the chatbot response. */
              buttons?: Array<Record<string, unknown>>;
              [key: string]: unknown;
            };
            /** The timestamp of the returned message. */
            timestamp?: string;
            /** Whether the returned message is a custom chatbot message. */
            customMessage?: boolean;
            [key: string]: unknown;
          }>;
          /** Provider-defined conversation statuses returned by Orimon. */
          statuses?: Array<unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}

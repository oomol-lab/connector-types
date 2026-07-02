import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send one message to Trent's chat endpoint and return the assembled response content plus thread metadata. */
    "trent.send_chat": {
      input: {
        /**
         * The chat message or audit prompt to send to Trent.
         * @minLength 1
         */
        message: string;
        /**
         * Optional context string sent with the message.
         * @minLength 1
         */
        context?: string;
        /**
         * Optional Trent thread ID for continuing an existing conversation.
         * @minLength 1
         */
        thread_id?: string;
        /** Client metadata sent to Trent for attribution and troubleshooting. */
        client_info?: {
          /**
           * The client type identifier sent to Trent.
           * @minLength 1
           */
          client_type?: string;
          /**
           * The client version string sent to Trent.
           * @minLength 1
           */
          client_version?: string;
        };
      };
      output: {
        /** The complete response content assembled from Trent response chunks. */
        content: string;
        /** The Trent thread ID returned by the endpoint. */
        thread_id: string | null;
        /** Advisory API-key expiration warning returned by Trent response headers. */
        expiration_warning: string | null;
        /** Raw event payloads received from Trent while assembling the response. */
        raw: Array<unknown>;
      };
    };
  }
}

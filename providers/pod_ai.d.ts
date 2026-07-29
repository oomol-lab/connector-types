import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an outbound phone call with a Pod AI voice agent. */
    "pod_ai.create_outbound_call": {
      input: {
        /**
         * The destination phone number to call, formatted as E.164.
         * @minLength 1
         */
        target_phone_number: string;
        /**
         * The Pod AI phone number to call from, formatted as E.164.
         * @minLength 1
         */
        from_phone_number: string;
        /**
         * The Pod AI agent identifier that should make the call.
         * @minLength 1
         */
        agent_id: string;
        /** Additional metadata forwarded to the Pod AI agent for the outbound call. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The outbound call object returned by the Pod AI API. */
        call: Record<string, unknown>;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one guardrail policy for the connected MetatextAI application. */
    "metatextai.create_policy": {
      input: {
        /**
         * Policy name shown in MetatextAI.
         * @minLength 1
         */
        name: string;
        /**
         * Policy type identifier accepted by MetatextAI.
         * @minLength 1
         */
        type: string;
        /**
         * Application message targets checked by this policy.
         * @minItems 1
         */
        target?: Array<"input" | "output">;
        /** Policy rule payload accepted by MetatextAI. Keep nested fields flexible because rule shape varies by policy type. */
        rule?: Record<string, unknown>;
      };
      output: {
        /** A MetatextAI policy object returned by the guard API. */
        policy: {
          /** The MetatextAI policy identifier. */
          id?: string;
          /** The policy display name. */
          name?: string;
          /** The MetatextAI policy type. */
          type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Evaluate one chat transcript against the connected MetatextAI application's configured guardrails. */
    "metatextai.evaluate": {
      input: {
        /**
         * Messages checked by MetatextAI.
         * @minItems 1
         */
        messages: Array<{
          /** Message role accepted by MetatextAI evaluation. */
          role: "system" | "user" | "assistant" | "tool";
          /** The chat message content. */
          content: string;
        }>;
        /** Optional policy identifiers to evaluate explicitly. */
        policyIds?: Array<string>;
        /** Whether MetatextAI should stop at the first violation. */
        failFast?: boolean;
        /** Whether MetatextAI should return a corrected output when a violation is found. */
        correctionEnabled?: boolean;
        /** Optional fixed response string returned instead of the blocked model output. */
        overrideResponse?: string;
      };
      output: {
        /** The raw MetatextAI evaluate response payload. */
        result: Record<string, unknown>;
      };
    };
    /** List all guardrail policies configured for the connected MetatextAI application. */
    "metatextai.list_policies": {
      input: Record<string, never>;
      output: {
        /** Policies configured for the application. */
        policies: Array<{
          /** The MetatextAI policy identifier. */
          id?: string;
          /** The policy display name. */
          name?: string;
          /** The MetatextAI policy type. */
          type?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Run a MetatextAI red-team test scan for the connected application with the selected probes. */
    "metatextai.run_test_scan": {
      input: {
        /**
         * Probe identifiers to run in the red-team scan.
         * @minItems 1
         */
        probes?: Array<string>;
      };
      output: {
        /** The raw MetatextAI red-team scan response payload. */
        result: Record<string, unknown>;
      };
    };
  }
}

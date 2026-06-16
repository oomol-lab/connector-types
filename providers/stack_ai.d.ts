import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch metadata for one previously started Stack AI run. */
    "stack_ai.get_run_metadata": {
      input: {
        /**
         * The Stack AI run identifier returned by a previous run.
         * @minLength 1
         */
        runId: string;
      };
      output: {
        /** The Stack AI run metadata payload. */
        run: {
          /**
           * The Stack AI run identifier.
           * @minLength 1
           */
          runId: string;
          /**
           * The run status returned by Stack AI when available.
           * @minLength 1
           */
          status: string | null;
          /**
           * The run creation timestamp returned by Stack AI.
           * @minLength 1
           */
          createdAt: string | null;
          /**
           * The run completion timestamp returned by Stack AI.
           * @minLength 1
           */
          finishedAt: string | null;
          /**
           * The Stack AI user identifier attached to the run.
           * @minLength 1
           */
          userId: string | null;
          /**
           * The Stack AI conversation identifier attached to the run.
           * @minLength 1
           */
          conversationId: string | null;
          /** The run output payload returned by Stack AI. */
          output: unknown;
          /**
           * The text response returned by Stack AI when available.
           * @minLength 1
           */
          text: string | null;
          /** The usage metadata returned by Stack AI when available. */
          usage: Record<string, unknown> | null;
          /** The raw Stack AI run metadata payload. */
          raw: unknown;
        };
      };
    };
    /** Run a deployed Stack AI flow with JSON variables and return its normalized result. */
    "stack_ai.run_flow": {
      input: {
        /**
         * The Stack AI user identifier used for the run.
         * @minLength 1
         */
        userId: string;
        /** The JSON variables object passed to the deployed flow. */
        variables?: Record<string, unknown>;
      };
      output: {
        /**
         * The Stack AI run identifier when Stack AI returns one.
         * @minLength 1
         */
        runId: string | null;
        /**
         * The run status returned by Stack AI when available.
         * @minLength 1
         */
        status: string | null;
        /** The primary Stack AI output payload. */
        output: unknown;
        /**
         * The text response returned by Stack AI when available.
         * @minLength 1
         */
        text: string | null;
        /** The raw Stack AI JSON payload. */
        raw: unknown;
      };
    };
  }
}

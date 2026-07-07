import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read one Streak box by key. */
    "streak.get_box": {
      input: {
        /**
         * The Streak box key.
         * @minLength 1
         */
        boxKey: string;
      };
      output: {
        /** Raw Streak entity fields returned by the API. */
        box: Record<string, unknown>;
        /** Raw Streak response payload. */
        raw: unknown;
      };
    };
    /** Read the Streak user associated with the authenticated API key. */
    "streak.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Raw Streak entity fields returned by the API. */
        user: Record<string, unknown>;
        /** Raw Streak response payload. */
        raw: unknown;
      };
    };
    /** Read one Streak pipeline by key. */
    "streak.get_pipeline": {
      input: {
        /**
         * The Streak pipeline key.
         * @minLength 1
         */
        pipelineKey: string;
      };
      output: {
        /** Raw Streak entity fields returned by the API. */
        pipeline: Record<string, unknown>;
        /** Raw Streak response payload. */
        raw: unknown;
      };
    };
    /** List Streak pipelines visible to the authenticated API key. */
    "streak.list_pipelines": {
      input: {
        /** Sort Streak pipelines by the documented timestamp field. */
        sortBy?: "creationTimestamp" | "lastUpdatedTimestamp";
      };
      output: {
        /** Streak pipelines returned by the API. */
        pipelines: Array<Record<string, unknown>>;
        /** Raw Streak response payload. */
        raw: unknown;
      };
    };
  }
}

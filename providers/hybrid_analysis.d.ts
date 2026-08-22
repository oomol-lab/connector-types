import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the authorization level for the current Hybrid Analysis API key. */
    "hybrid_analysis.get_current_key": {
      input: Record<string, never>;
      output: {
        /** The numeric authorization level assigned to the API key. */
        authLevel: number | null;
        /** The human-readable authorization level assigned to the API key. */
        authLevelName: string | null;
      };
    };
    /** Get the Hybrid Analysis overview for a SHA256 file hash. */
    "hybrid_analysis.get_overview": {
      input: {
        /**
         * The SHA256 file hash to look up.
         * @minLength 1
         */
        sha256: string;
      };
      output: {
        /** The overview and scanner results returned by Hybrid Analysis. */
        overview: Record<string, unknown>;
      };
    };
    /** Get the processing state of a Hybrid Analysis sandbox report. */
    "hybrid_analysis.get_report_state": {
      input: {
        /**
         * A Hybrid Analysis job ID or a report identifier formatted as sha256:environmentId.
         * @minLength 1
         */
        reportId: string;
      };
      output: {
        /** State, error, and related report details returned by Hybrid Analysis. */
        state: Record<string, unknown>;
      };
    };
    /** Get the summary of a Hybrid Analysis sandbox report. */
    "hybrid_analysis.get_report_summary": {
      input: {
        /**
         * A Hybrid Analysis job ID or a report identifier formatted as sha256:environmentId.
         * @minLength 1
         */
        reportId: string;
      };
      output: {
        /** The sandbox report summary returned by Hybrid Analysis. */
        summary: Record<string, unknown>;
      };
    };
    /** Find Hybrid Analysis detonation reports associated with a file hash. */
    "hybrid_analysis.search_hash": {
      input: {
        /**
         * An MD5, SHA1, SHA256, or SHA512 file hash.
         * @minLength 1
         */
        hash: string;
      };
      output: {
        /** Canonical SHA256 hashes returned for the query. */
        sha256s: Array<string>;
        /** Detonation reports associated with the hash. */
        reports: Array<Record<string, unknown>>;
      };
    };
  }
}

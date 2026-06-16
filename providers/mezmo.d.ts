import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get whether the Mezmo ingestion service is currently ingesting data for the authenticated account. */
    "mezmo.get_ingestion_status": {
      input: Record<string, never>;
      output: {
        /** Whether the Mezmo ingestion service is currently ingesting data. */
        isIngesting: boolean;
      };
    };
    /** Get the Mezmo usage summary for a required time window without flattening the upstream usage payload. */
    "mezmo.get_usage_summary": {
      input: {
        /**
         * Start timestamp for the usage window.
         * @format date-time
         */
        from: string;
        /**
         * End timestamp for the usage window.
         * @format date-time
         */
        to: string;
      };
      output: {
        /** Raw Mezmo usage summary payload after minimal normalization. */
        usage: Record<string, unknown>;
      };
    };
    /** List Mezmo usage entries grouped by app for a required time window and optional result limit. */
    "mezmo.list_app_usages": {
      input: {
        /**
         * Start timestamp for the usage window.
         * @format date-time
         */
        from: string;
        /**
         * End timestamp for the usage window.
         * @format date-time
         */
        to: string;
        /**
         * Maximum number of usage entries to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Usage entries grouped by app. */
        usages: Array<Record<string, unknown>>;
      };
    };
    /** List Mezmo usage entries grouped by host for a required time window and optional result limit. */
    "mezmo.list_host_usages": {
      input: {
        /**
         * Start timestamp for the usage window.
         * @format date-time
         */
        from: string;
        /**
         * End timestamp for the usage window.
         * @format date-time
         */
        to: string;
        /**
         * Maximum number of usage entries to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Usage entries grouped by host. */
        usages: Array<Record<string, unknown>>;
      };
    };
    /** List Mezmo usage entries grouped by tag for a required time window and optional result limit. */
    "mezmo.list_tag_usages": {
      input: {
        /**
         * Start timestamp for the usage window.
         * @format date-time
         */
        from: string;
        /**
         * End timestamp for the usage window.
         * @format date-time
         */
        to: string;
        /**
         * Maximum number of usage entries to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Usage entries grouped by tag. */
        usages: Array<Record<string, unknown>>;
      };
    };
  }
}

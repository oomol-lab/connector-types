import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Rippling worker by ID. */
    "rippling.get_worker": {
      input: {
        /**
         * Rippling worker ID.
         * @minLength 1
         */
        id: string;
        /**
         * Comma-separated Rippling expandable fields to include in the response.
         * @minLength 1
         */
        expand?: string;
      };
      output: {
        /** Rippling resource ID. */
        id: string;
        /** Record creation timestamp. */
        created_at: string;
        /** Record update timestamp. */
        updated_at: string;
        /** Rippling response metadata. */
        __meta?: {
          /** Fields redacted by Rippling for the current token. */
          redacted_fields?: Array<{
            /** The name of the redacted field. */
            name?: string;
            /** The reason the field was redacted. */
            reason?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List companies available to the Rippling API token. */
    "rippling.list_companies": {
      input: {
        /**
         * Comma-separated Rippling expandable fields to include in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Rippling sort expression such as id, created_at, or updated_at.
         * @minLength 1
         */
        order_by?: string;
        /**
         * Cursor from the previous Rippling next_link value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Rippling response metadata. */
        __meta?: {
          /** Fields redacted by Rippling for the current token. */
          redacted_fields?: Array<{
            /** The name of the redacted field. */
            name?: string;
            /** The reason the field was redacted. */
            reason?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Company records returned by Rippling. */
        results: Array<{
          /** Rippling resource ID. */
          id: string;
          /** Record creation timestamp. */
          created_at: string;
          /** Record update timestamp. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** URL for the next Rippling page when more results exist. */
        next_link?: string;
      };
    };
    /** List departments available to the Rippling API token. */
    "rippling.list_departments": {
      input: {
        /**
         * Comma-separated Rippling expandable fields to include in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Rippling sort expression such as id, created_at, or updated_at.
         * @minLength 1
         */
        order_by?: string;
        /**
         * Cursor from the previous Rippling next_link value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Rippling response metadata. */
        __meta?: {
          /** Fields redacted by Rippling for the current token. */
          redacted_fields?: Array<{
            /** The name of the redacted field. */
            name?: string;
            /** The reason the field was redacted. */
            reason?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Department records returned by Rippling. */
        results: Array<{
          /** Rippling resource ID. */
          id: string;
          /** Record creation timestamp. */
          created_at: string;
          /** Record update timestamp. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** URL for the next Rippling page when more results exist. */
        next_link?: string;
      };
    };
    /** List workers available to the Rippling API token. */
    "rippling.list_workers": {
      input: {
        /**
         * Rippling filter expression for worker fields.
         * @minLength 1
         */
        filter?: string;
        /**
         * Comma-separated Rippling expandable fields to include in the response.
         * @minLength 1
         */
        expand?: string;
        /**
         * Rippling sort expression such as id, created_at, or updated_at.
         * @minLength 1
         */
        order_by?: string;
        /**
         * Cursor from the previous Rippling next_link value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Rippling response metadata. */
        __meta?: {
          /** Fields redacted by Rippling for the current token. */
          redacted_fields?: Array<{
            /** The name of the redacted field. */
            name?: string;
            /** The reason the field was redacted. */
            reason?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Worker records returned by Rippling. */
        results: Array<{
          /** Rippling resource ID. */
          id: string;
          /** Record creation timestamp. */
          created_at: string;
          /** Record update timestamp. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** URL for the next Rippling page when more results exist. */
        next_link?: string;
      };
    };
  }
}

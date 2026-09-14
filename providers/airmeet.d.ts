import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Airmeet events accessible to the connected community API key. */
    "airmeet.list_airmeets": {
      input: {
        /** The cursor for fetching the previous page. */
        before?: string;
        /** The cursor for fetching the next page. */
        after?: string;
        /**
         * The number of Airmeet events to return, from 1 through 500.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
      };
      output: {
        /** The Airmeet events returned by the API. */
        data: Array<Record<string, unknown>>;
        /** The pagination cursors returned by Airmeet. */
        cursors: Record<string, unknown>;
      };
    };
    /** List booths configured for an Airmeet event. */
    "airmeet.list_booths": {
      input: {
        /**
         * The Airmeet event identifier.
         * @minLength 1
         * @pattern \S
         */
        airmeetId: string;
      };
      output: {
        /** The Airmeet event booths. */
        booths: Array<Record<string, unknown>>;
      };
    };
    /** List custom registration fields configured for an Airmeet event. */
    "airmeet.list_custom_registration_fields": {
      input: {
        /**
         * The Airmeet event identifier.
         * @minLength 1
         * @pattern \S
         */
        airmeetId: string;
      };
      output: {
        /** The Airmeet event custom registration fields. */
        customFields: Array<Record<string, unknown>>;
      };
    };
    /** List sessions configured for an Airmeet event. */
    "airmeet.list_sessions": {
      input: {
        /**
         * The Airmeet event identifier.
         * @minLength 1
         * @pattern \S
         */
        airmeetId: string;
      };
      output: {
        /** The Airmeet event sessions. */
        sessions: Array<Record<string, unknown>>;
      };
    };
    /** List tracks configured for an Airmeet event. */
    "airmeet.list_tracks": {
      input: {
        /**
         * The Airmeet event identifier.
         * @minLength 1
         * @pattern \S
         */
        airmeetId: string;
      };
      output: {
        /** The Airmeet event tracks. */
        tracks: Array<Record<string, unknown>>;
      };
    };
  }
}

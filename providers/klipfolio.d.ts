import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Klipfolio client asset by ID. */
    "klipfolio.get_client": {
      input: {
        /**
         * The Klipfolio client ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Klipfolio client object. */
        client: {
          /** The Klipfolio client ID. */
          id?: string;
          /** The Klipfolio client name. */
          name?: string;
          /** The Klipfolio client description when returned. */
          description?: string;
          [key: string]: unknown;
        };
        /** The raw Klipfolio response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Klipfolio dashboard asset by ID. */
    "klipfolio.get_dashboard": {
      input: {
        /**
         * The Klipfolio dashboard ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Klipfolio dashboard object. */
        dashboard: {
          /** The Klipfolio dashboard ID. */
          id?: string;
          /** The Klipfolio dashboard name. */
          name?: string;
          /** The Klipfolio dashboard description when returned. */
          description?: string;
          [key: string]: unknown;
        };
        /** The raw Klipfolio response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Klipfolio data source asset by ID. */
    "klipfolio.get_data_source": {
      input: {
        /**
         * The Klipfolio data source ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Klipfolio data source object. */
        data_source: {
          /** The Klipfolio data source ID. */
          id?: string;
          /** The Klipfolio data source name. */
          name?: string;
          /** The Klipfolio data source description when returned. */
          description?: string;
          [key: string]: unknown;
        };
        /** The raw Klipfolio response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Klipfolio Klip asset by ID. */
    "klipfolio.get_klip": {
      input: {
        /**
         * The Klipfolio Klip ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Klipfolio Klip object. */
        klip: {
          /** The Klipfolio Klip ID. */
          id?: string;
          /** The Klipfolio Klip name. */
          name?: string;
          /** The Klipfolio Klip description when returned. */
          description?: string;
          [key: string]: unknown;
        };
        /** The raw Klipfolio response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Klipfolio client assets visible to the current API key. */
    "klipfolio.list_clients": {
      input: {
        /**
         * The zero-based item offset to start listing from.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of assets to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The Klipfolio client objects returned. */
        clients: Array<{
          /** The Klipfolio client ID. */
          id?: string;
          /** The Klipfolio client name. */
          name?: string;
          /** The Klipfolio client description when returned. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The raw Klipfolio response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Klipfolio dashboard assets visible to the current API key. */
    "klipfolio.list_dashboards": {
      input: {
        /**
         * The zero-based item offset to start listing from.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of assets to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The Klipfolio dashboard objects returned. */
        dashboards: Array<{
          /** The Klipfolio dashboard ID. */
          id?: string;
          /** The Klipfolio dashboard name. */
          name?: string;
          /** The Klipfolio dashboard description when returned. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The raw Klipfolio response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Klipfolio data source assets visible to the current API key. */
    "klipfolio.list_data_sources": {
      input: {
        /**
         * The zero-based item offset to start listing from.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of assets to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The Klipfolio data source objects returned. */
        data_sources: Array<{
          /** The Klipfolio data source ID. */
          id?: string;
          /** The Klipfolio data source name. */
          name?: string;
          /** The Klipfolio data source description when returned. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The raw Klipfolio response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Klipfolio Klip assets visible to the current API key. */
    "klipfolio.list_klips": {
      input: {
        /**
         * The zero-based item offset to start listing from.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of assets to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The Klipfolio Klip objects returned. */
        klips: Array<{
          /** The Klipfolio Klip ID. */
          id?: string;
          /** The Klipfolio Klip name. */
          name?: string;
          /** The Klipfolio Klip description when returned. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The raw Klipfolio response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}

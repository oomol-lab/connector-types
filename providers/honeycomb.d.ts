import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Honeycomb marker for a dataset or for the environment-wide __all__ marker scope. */
    "honeycomb.create_marker": {
      input: {
        /**
         * The dataset slug, or __all__ to create an environment-wide marker.
         * @minLength 1
         */
        datasetSlug: string;
        /**
         * A message that describes this marker.
         * @minLength 1
         */
        message: string;
        /**
         * The marker type used to group similar markers.
         * @minLength 1
         */
        type: string;
        /** The Unix timestamp where the marker starts. Honeycomb defaults this to request time when omitted. */
        startTime?: number;
        /** The Unix timestamp where the marker ends. */
        endTime?: number;
        /**
         * A URL attached to the marker.
         * @minLength 1
         */
        url?: string;
      };
      output: {
        /** A Honeycomb marker summary. */
        marker: {
          /** The Honeycomb marker identifier. */
          id: string | null;
          /** The marker message. */
          message: string | null;
          /** The marker type used to group similar markers. */
          type: string | null;
          /** The Unix timestamp where the marker starts. */
          startTime: number | null;
          /** The Unix timestamp where the marker ends. */
          endTime: number | null;
          /** The URL attached to the marker. */
          url: string | null;
          /** The marker color returned by Honeycomb when available. */
          color: string | null;
          /** The ISO 8601 timestamp when the marker was created. */
          createdAt: string | null;
          /** The ISO 8601 timestamp when the marker was updated. */
          updatedAt: string | null;
          /** The raw Honeycomb object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Validate the Honeycomb API key and return the team, environment, key type, and permission metadata. */
    "honeycomb.get_auth": {
      input: Record<string, never>;
      output: {
        /** Honeycomb API key authorization metadata. */
        authorization: {
          /** The unique identifier of the API key. */
          id: string;
          /** The Honeycomb API key type, such as configuration or ingest. */
          type: string;
          /** The permission flags returned for this API key. */
          apiKeyAccess: Record<string, unknown>;
          /** The Honeycomb environment associated with the API key. */
          environment: {
            /** The environment name, or an empty string for Honeycomb Classic. */
            name: string;
            /** The environment slug, or an empty string for Honeycomb Classic. */
            slug: string;
          };
          /** The Honeycomb team associated with the API key. */
          team: {
            /** The team name. */
            name: string;
            /** The team slug. */
            slug: string;
          };
          /** The raw Honeycomb object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Honeycomb board by ID. */
    "honeycomb.get_board": {
      input: {
        /**
         * The Honeycomb board ID.
         * @minLength 1
         */
        boardId: string;
      };
      output: {
        /** A Honeycomb board summary. */
        board: {
          /** The Honeycomb board identifier. */
          id: string | null;
          /** The board name. */
          name: string;
          /** The board description. */
          description: string | null;
          /** The board type returned by Honeycomb. */
          type: string | null;
          /** The Honeycomb UI URL for the board when returned. */
          boardUrl: string | null;
          /** The key-value tags attached to the board. */
          tags: Array<Record<string, unknown>>;
          /** The raw Honeycomb object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Honeycomb dataset by slug. */
    "honeycomb.get_dataset": {
      input: {
        /**
         * The dataset slug used in Honeycomb API paths.
         * @minLength 1
         */
        datasetSlug: string;
      };
      output: {
        /** A Honeycomb dataset summary. */
        dataset: {
          /** The dataset name. */
          name: string;
          /** The dataset slug used in Honeycomb API paths. */
          slug: string | null;
          /** The dataset description. */
          description: string | null;
          /** The maximum unpacking depth of nested JSON fields. */
          expandJsonDepth: number | null;
          /** The total number of unique regular columns in the dataset. */
          regularColumnsCount: number | null;
          /** The ISO 8601 timestamp when the dataset was created. */
          createdAt: string | null;
          /** The ISO 8601 timestamp when the dataset last received event data. */
          lastWrittenAt: string | null;
          /** The raw Honeycomb object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List non-secret Honeycomb boards available in the API key environment. */
    "honeycomb.list_boards": {
      input: Record<string, never>;
      output: {
        /** The boards returned by Honeycomb. */
        boards: Array<{
          /** The Honeycomb board identifier. */
          id: string | null;
          /** The board name. */
          name: string;
          /** The board description. */
          description: string | null;
          /** The board type returned by Honeycomb. */
          type: string | null;
          /** The Honeycomb UI URL for the board when returned. */
          boardUrl: string | null;
          /** The key-value tags attached to the board. */
          tags: Array<Record<string, unknown>>;
          /** The raw Honeycomb object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List datasets available in the Honeycomb environment tied to the API key. */
    "honeycomb.list_datasets": {
      input: Record<string, never>;
      output: {
        /** The datasets returned by Honeycomb. */
        datasets: Array<{
          /** The dataset name. */
          name: string;
          /** The dataset slug used in Honeycomb API paths. */
          slug: string | null;
          /** The dataset description. */
          description: string | null;
          /** The maximum unpacking depth of nested JSON fields. */
          expandJsonDepth: number | null;
          /** The total number of unique regular columns in the dataset. */
          regularColumnsCount: number | null;
          /** The ISO 8601 timestamp when the dataset was created. */
          createdAt: string | null;
          /** The ISO 8601 timestamp when the dataset last received event data. */
          lastWrittenAt: string | null;
          /** The raw Honeycomb object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Honeycomb markers for a dataset or for the environment-wide __all__ marker scope. */
    "honeycomb.list_markers": {
      input: {
        /**
         * The dataset slug, or __all__ to operate on environment-wide markers.
         * @minLength 1
         */
        datasetSlug: string;
      };
      output: {
        /** The markers returned by Honeycomb. */
        markers: Array<{
          /** The Honeycomb marker identifier. */
          id: string | null;
          /** The marker message. */
          message: string | null;
          /** The marker type used to group similar markers. */
          type: string | null;
          /** The Unix timestamp where the marker starts. */
          startTime: number | null;
          /** The Unix timestamp where the marker ends. */
          endTime: number | null;
          /** The URL attached to the marker. */
          url: string | null;
          /** The marker color returned by Honeycomb when available. */
          color: string | null;
          /** The ISO 8601 timestamp when the marker was created. */
          createdAt: string | null;
          /** The ISO 8601 timestamp when the marker was updated. */
          updatedAt: string | null;
          /** The raw Honeycomb object returned by the API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}

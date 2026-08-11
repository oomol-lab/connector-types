import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Xweather forecast periods for a location. */
    "aerisweather.get_forecast": {
      input: {
        /**
         * The Xweather location identifier, such as a city name, postal code, station ID, or latitude and longitude pair.
         * @minLength 1
         */
        location: string;
        /**
         * The Xweather forecast filter, such as day, daynight, 1hr, or 3hr.
         * @minLength 1
         */
        filter?: string;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The maximum number of forecast periods to return.
         * @exclusiveMinimum 0
         */
        periodLimit?: number;
        /**
         * The Xweather dot-notation fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The forecast records returned by Xweather. */
        forecasts: Array<{
          /** A raw nested object returned by Xweather. */
          loc: Record<string, unknown>;
          /** The forecast interval returned by Xweather. */
          interval: string | null;
          /** A raw nested object returned by Xweather. */
          place: Record<string, unknown>;
          /** The forecast periods returned by Xweather. */
          periods: Array<Record<string, unknown>>;
          /** The raw Xweather response payload. */
          raw: unknown;
          [key: string]: unknown;
        }>;
        /** The raw Xweather response payload. */
        raw: unknown;
      };
    };
    /** Retrieve the latest Xweather observation for a location. */
    "aerisweather.get_observation": {
      input: {
        /**
         * The Xweather location identifier, such as a city name, postal code, station ID, or latitude and longitude pair.
         * @minLength 1
         */
        location: string;
        /**
         * The Xweather dot-notation fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** A normalized Xweather observation result. */
        observation: {
          /** The reporting station ID returned by Xweather. */
          id: string | null;
          /** The observation data source returned by Xweather. */
          dataSource: string | null;
          /** A raw nested object returned by Xweather. */
          loc: Record<string, unknown>;
          /** A raw nested object returned by Xweather. */
          place: Record<string, unknown>;
          /** A raw nested object returned by Xweather. */
          profile: Record<string, unknown>;
          /** A raw nested object returned by Xweather. */
          observation: Record<string, unknown>;
          /** The raw Xweather response payload. */
          raw: unknown;
          [key: string]: unknown;
        };
        /** The raw Xweather response payload. */
        raw: unknown;
      };
    };
    /** Resolve an Xweather place by location identifier. */
    "aerisweather.get_place": {
      input: {
        /**
         * The Xweather location identifier, such as a city name, postal code, station ID, or latitude and longitude pair.
         * @minLength 1
         */
        location: string;
        /**
         * The Xweather dot-notation fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** A normalized Xweather place result. */
        place: {
          /** A raw nested object returned by Xweather. */
          loc: Record<string, unknown>;
          /** A raw nested object returned by Xweather. */
          place: Record<string, unknown>;
          /** A raw nested object returned by Xweather. */
          profile: Record<string, unknown>;
          /** The raw Xweather response payload. */
          raw: unknown;
          [key: string]: unknown;
        };
        /** The raw Xweather response payload. */
        raw: unknown;
      };
    };
  }
}

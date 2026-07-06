import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get current air quality and weather data for a specified supported city. */
    "iqair_airvisual.get_city_data": {
      input: {
        /**
         * The supported country English name used by IQAir AirVisual.
         * @minLength 1
         */
        country: string;
        /**
         * The supported state English name used by IQAir AirVisual.
         * @minLength 1
         */
        state: string;
        /**
         * The supported city English name used by IQAir AirVisual.
         * @minLength 1
         */
        city: string;
      };
      output: {
        /** Current air quality and weather data for one city returned by IQAir AirVisual. */
        data: {
          /**
           * The supported city English name used by IQAir AirVisual.
           * @minLength 1
           */
          city: string;
          /**
           * The supported state English name used by IQAir AirVisual.
           * @minLength 1
           */
          state: string;
          /**
           * The supported country English name used by IQAir AirVisual.
           * @minLength 1
           */
          country: string;
          /**
           * The station name returned by IQAir AirVisual when available.
           * @minLength 1
           */
          name?: string;
          /** The GeoJSON point returned by IQAir AirVisual. */
          location?: {
            /**
             * The GeoJSON location type returned by IQAir AirVisual.
             * @minLength 1
             */
            type: string;
            /**
             * Longitude and latitude coordinates returned by IQAir AirVisual.
             * @minItems 2
             * @maxItems 2
             */
            coordinates: Array<number>;
            [key: string]: unknown;
          };
          /** Current weather and pollution readings returned by IQAir AirVisual. */
          current?: {
            /** A plan-dependent object returned by IQAir AirVisual. */
            weather?: Record<string, unknown>;
            /** A plan-dependent object returned by IQAir AirVisual. */
            pollution?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Measurement units keyed by pollutant or weather field returned by IQAir AirVisual. */
          units?: Record<string, string>;
          /** Hourly forecast records returned by IQAir AirVisual. */
          forecasts?: Array<Record<string, unknown>>;
          /** Daily forecast records returned by IQAir AirVisual. */
          forecasts_daily?: Array<Record<string, unknown>>;
          /** Historical weather and pollution records returned by IQAir AirVisual. */
          history?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get current air quality and weather data for the nearest supported city by IP or coordinates. */
    "iqair_airvisual.get_nearest_city": {
      input: {
        /**
         * Latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
      };
      output: {
        /** Current air quality and weather data for one city returned by IQAir AirVisual. */
        data: {
          /**
           * The supported city English name used by IQAir AirVisual.
           * @minLength 1
           */
          city: string;
          /**
           * The supported state English name used by IQAir AirVisual.
           * @minLength 1
           */
          state: string;
          /**
           * The supported country English name used by IQAir AirVisual.
           * @minLength 1
           */
          country: string;
          /**
           * The station name returned by IQAir AirVisual when available.
           * @minLength 1
           */
          name?: string;
          /** The GeoJSON point returned by IQAir AirVisual. */
          location?: {
            /**
             * The GeoJSON location type returned by IQAir AirVisual.
             * @minLength 1
             */
            type: string;
            /**
             * Longitude and latitude coordinates returned by IQAir AirVisual.
             * @minItems 2
             * @maxItems 2
             */
            coordinates: Array<number>;
            [key: string]: unknown;
          };
          /** Current weather and pollution readings returned by IQAir AirVisual. */
          current?: {
            /** A plan-dependent object returned by IQAir AirVisual. */
            weather?: Record<string, unknown>;
            /** A plan-dependent object returned by IQAir AirVisual. */
            pollution?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Measurement units keyed by pollutant or weather field returned by IQAir AirVisual. */
          units?: Record<string, string>;
          /** Hourly forecast records returned by IQAir AirVisual. */
          forecasts?: Array<Record<string, unknown>>;
          /** Daily forecast records returned by IQAir AirVisual. */
          forecasts_daily?: Array<Record<string, unknown>>;
          /** Historical weather and pollution records returned by IQAir AirVisual. */
          history?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List supported cities for a country and state with active IQAir AirVisual stations. */
    "iqair_airvisual.list_supported_cities": {
      input: {
        /**
         * The supported country English name used by IQAir AirVisual.
         * @minLength 1
         */
        country: string;
        /**
         * The supported state English name used by IQAir AirVisual.
         * @minLength 1
         */
        state: string;
      };
      output: {
        /** Supported city objects returned by IQAir AirVisual. */
        cities: Array<{
          /**
           * The supported city English name used by IQAir AirVisual.
           * @minLength 1
           */
          city: string;
        }>;
        /**
         * Number of cities returned by IQAir AirVisual.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List countries that currently have active IQAir AirVisual stations. */
    "iqair_airvisual.list_supported_countries": {
      input: Record<string, never>;
      output: {
        /** Supported country objects returned by IQAir AirVisual. */
        countries: Array<{
          /**
           * The supported country English name used by IQAir AirVisual.
           * @minLength 1
           */
          country: string;
        }>;
        /**
         * Number of countries returned by IQAir AirVisual.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List supported states for a country that has active IQAir AirVisual stations. */
    "iqair_airvisual.list_supported_states": {
      input: {
        /**
         * The supported country English name used by IQAir AirVisual.
         * @minLength 1
         */
        country: string;
      };
      output: {
        /** Supported state objects returned by IQAir AirVisual. */
        states: Array<{
          /**
           * The supported state English name used by IQAir AirVisual.
           * @minLength 1
           */
          state: string;
        }>;
        /**
         * Number of states returned by IQAir AirVisual.
         * @minimum 0
         */
        count: number;
      };
    };
  }
}

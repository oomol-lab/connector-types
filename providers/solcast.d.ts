import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Solcast irradiance and weather forecasts for a latitude and longitude up to 14 days ahead. */
    "solcast.get_radiation_and_weather_forecast": {
      input: {
        /**
         * Latitude in decimal degrees using EPSG:4326.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * Longitude in decimal degrees using EPSG:4326.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * Time window of the forecast response in hours from 1 to 336.
         * @minimum 1
         * @maximum 336
         */
        hours?: number;
        /** Length of the averaging period in ISO 8601 duration format. */
        period?: "PT5M" | "PT10M" | "PT15M" | "PT20M" | "PT30M" | "PT60M";
        /**
         * Comma-separated Solcast output parameter names to include in each forecast record.
         * @minLength 1
         */
        output_parameters?: string;
      };
      output: {
        /** Ordered Solcast time-series records. */
        records: Array<{
          /**
           * The inclusive end timestamp for the returned averaging period.
           * @minLength 1
           */
          period_end: string;
          /**
           * The ISO 8601 averaging duration for this record.
           * @minLength 1
           */
          period: string;
          [key: string]: unknown;
        }>;
        /**
         * Solcast response message returned when the request succeeds without record data.
         * @minLength 1
         */
        message?: string;
      };
    };
    /** Get Solcast irradiance and weather historical estimated actuals for a latitude and longitude from 2007 through 7 days ago. */
    "solcast.get_radiation_and_weather_historic": {
      input: {
        /**
         * Latitude in decimal degrees using EPSG:4326.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * Longitude in decimal degrees using EPSG:4326.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * ISO 8601 start timestamp for the historical request. If the value omits a timezone, Solcast infers it from time_zone or assumes UTC.
         * @minLength 1
         */
        start: string;
        /**
         * ISO 8601 end timestamp for the historical request. Provide either end or duration.
         * @minLength 1
         */
        end?: string;
        /**
         * ISO 8601 duration for the historical request. Provide either duration or end.
         * @minLength 1
         */
        duration?: string;
        /** Length of the averaging period in ISO 8601 duration format. */
        period?: "PT5M" | "PT10M" | "PT15M" | "PT20M" | "PT30M" | "PT60M";
        /**
         * Comma-separated Solcast output parameter names to include in each historical record.
         * @minLength 1
         */
        output_parameters?: string;
        /** Timezone used for returned timestamps. Use utc, longitudinal, or a UTC offset from -13 to 13 in 0.25 hour increments. */
        time_zone?: "utc" | "longitudinal" | number;
      };
      output: {
        /** Ordered Solcast time-series records. */
        records: Array<{
          /**
           * The inclusive end timestamp for the returned averaging period.
           * @minLength 1
           */
          period_end: string;
          /**
           * The ISO 8601 averaging duration for this record.
           * @minLength 1
           */
          period: string;
          [key: string]: unknown;
        }>;
        /**
         * Solcast response message returned when the request succeeds without record data.
         * @minLength 1
         */
        message?: string;
      };
    };
    /** Get Solcast irradiance and weather live estimated actuals for a latitude and longitude over the past 7 days. */
    "solcast.get_radiation_and_weather_live_estimated_actuals": {
      input: {
        /**
         * Latitude in decimal degrees using EPSG:4326.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * Longitude in decimal degrees using EPSG:4326.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * Time window of the live estimated-actual response in hours from 1 to 168.
         * @minimum 1
         * @maximum 168
         */
        hours?: number;
        /** Length of the averaging period in ISO 8601 duration format. */
        period?: "PT5M" | "PT10M" | "PT15M" | "PT20M" | "PT30M" | "PT60M";
        /**
         * Comma-separated Solcast output parameter names to include in each estimated-actual record.
         * @minLength 1
         */
        output_parameters?: string;
      };
      output: {
        /** Ordered Solcast time-series records. */
        records: Array<{
          /**
           * The inclusive end timestamp for the returned averaging period.
           * @minLength 1
           */
          period_end: string;
          /**
           * The ISO 8601 averaging duration for this record.
           * @minLength 1
           */
          period: string;
          [key: string]: unknown;
        }>;
        /**
         * Solcast response message returned when the request succeeds without record data.
         * @minLength 1
         */
        message?: string;
      };
    };
  }
}

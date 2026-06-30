import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Stormglass high and low tide extremes for one coordinate. */
    "stormglass_io.get_tide_extremes": {
      input: {
        /**
         * Latitude of the requested coordinate in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude of the requested coordinate in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
        /** A Stormglass time value in ISO 8601 or UNIX timestamp format. */
        start?: string | number;
        /** A Stormglass time value in ISO 8601 or UNIX timestamp format. */
        end?: string | number;
        /** The tide datum used for relative sea-level values. */
        datum?: "MLLW" | "MSL";
      };
      output: {
        /** The tide extreme records returned by Stormglass. */
        extremes: Array<{
          /** The relative tide height in meters. */
          height: number;
          /** The UTC timestamp of the tide extreme. */
          time: string;
          /** The tide extreme type returned by Stormglass. */
          type: "high" | "low";
        }>;
        /** Metadata returned by a Stormglass tide request. */
        meta: {
          /** The tide station metadata returned by Stormglass. */
          station?: {
            /** The great-circle distance from the requested coordinate in kilometers. */
            distance?: number;
            /** The latitude of the selected tide station. */
            lat?: number;
            /** The longitude of the selected tide station. */
            lng?: number;
            /** The tide station name. */
            name?: string;
            /** The tide station owner or data source. */
            source?: string;
            [key: string]: unknown;
          };
          /** The tide datum used for relative sea-level values. */
          datum?: "MLLW" | "MSL";
          [key: string]: unknown;
        };
      };
    };
    /** Get Stormglass hourly tide sea-level data for one coordinate. */
    "stormglass_io.get_tide_sea_level": {
      input: {
        /**
         * Latitude of the requested coordinate in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude of the requested coordinate in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
        /** A Stormglass time value in ISO 8601 or UNIX timestamp format. */
        start?: string | number;
        /** A Stormglass time value in ISO 8601 or UNIX timestamp format. */
        end?: string | number;
        /** The tide datum used for relative sea-level values. */
        datum?: "MLLW" | "MSL";
      };
      output: {
        /** The hourly sea-level entries returned by Stormglass. */
        seaLevels: Array<{
          /** The UTC timestamp of the sea-level reading. */
          time: string;
          [key: string]: unknown;
        }>;
        /** Metadata returned by a Stormglass tide request. */
        meta: {
          /** The tide station metadata returned by Stormglass. */
          station?: {
            /** The great-circle distance from the requested coordinate in kilometers. */
            distance?: number;
            /** The latitude of the selected tide station. */
            lat?: number;
            /** The longitude of the selected tide station. */
            lng?: number;
            /** The tide station name. */
            name?: string;
            /** The tide station owner or data source. */
            source?: string;
            [key: string]: unknown;
          };
          /** The tide datum used for relative sea-level values. */
          datum?: "MLLW" | "MSL";
          [key: string]: unknown;
        };
      };
    };
    /** Get Stormglass forecast weather data for one coordinate. */
    "stormglass_io.get_weather_point": {
      input: {
        /**
         * Latitude of the requested coordinate in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude of the requested coordinate in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
        /**
         * The weather parameters to request from Stormglass.
         * @minItems 1
         */
        params: Array<"airTemperature" | "airTemperature80m" | "airTemperature100m" | "airTemperature1000hpa" | "airTemperature800hpa" | "airTemperature500hpa" | "airTemperature200hpa" | "pressure" | "cloudCover" | "currentDirection" | "currentSpeed" | "dewPointTemperature" | "gust" | "humidity" | "iceCover" | "precipitation" | "rain" | "snow" | "graupel" | "snowAlbedo" | "snowDepth" | "seaIceThickness" | "seaLevel" | "swellDirection" | "swellHeight" | "swellPeriod" | "secondarySwellPeriod" | "secondarySwellDirection" | "secondarySwellHeight" | "visibility" | "waterTemperature" | "surfaceTemperature" | "waveDirection" | "waveHeight" | "wavePeriod" | "windWaveDirection" | "windWaveHeight" | "windWavePeriod" | "windDirection" | "windDirection20m" | "windDirection30m" | "windDirection40m" | "windDirection50m" | "windDirection80m" | "windDirection100m" | "windDirection1000hpa" | "windDirection800hpa" | "windDirection500hpa" | "windDirection200hpa" | "windSpeed" | "windSpeed20m" | "windSpeed30m" | "windSpeed40m" | "windSpeed50m" | "windSpeed80m" | "windSpeed100m" | "windSpeed1000hpa" | "windSpeed800hpa" | "windSpeed500hpa" | "windSpeed200hpa">;
        /** A Stormglass time value in ISO 8601 or UNIX timestamp format. */
        start?: string | number;
        /** A Stormglass time value in ISO 8601 or UNIX timestamp format. */
        end?: string | number;
        /**
         * The weather sources to request from Stormglass.
         * @minItems 1
         */
        source?: Array<"sg" | "noaa" | "dwd" | "icon" | "meteo" | "smhi">;
      };
      output: {
        /** The hourly weather entries returned by Stormglass. */
        hours: Array<{
          /** The UTC timestamp for this weather hour. */
          time: string;
          [key: string]: unknown;
        }>;
        /** Metadata returned by a Stormglass weather request. */
        meta: {
          /** The daily request quota assigned to the API key. */
          dailyQuota: number;
          /** The number of requests used so far today. */
          requestCount: number;
          /** The latitude resolved by Stormglass. */
          lat: number;
          /** The longitude resolved by Stormglass. */
          lng: number;
          [key: string]: unknown;
        };
      };
    };
  }
}

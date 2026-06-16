import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get current weather observations from Weatherbit for a location. */
    "weatherbit.get_current_weather": {
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
        /**
         * City name accepted by Weatherbit.
         * @minLength 1
         */
        city?: string;
        /**
         * State or province name used with a city query.
         * @minLength 1
         */
        state?: string;
        /**
         * Country code used with a city or postal code query, such as US.
         * @minLength 1
         */
        country?: string;
        /**
         * Postal or ZIP code accepted by Weatherbit.
         * @minLength 1
         */
        postal_code?: string;
        /**
         * Weatherbit city identifier.
         * @minimum 1
         */
        city_id?: number;
        /**
         * Language code used by Weatherbit to localize text fields.
         * @minLength 1
         */
        language?: string;
        /** Units system for Weatherbit measurements. */
        units?: "M" | "S" | "I";
        /**
         * Additional current weather response sections to include.
         * @minItems 1
         * @maxItems 3
         */
        include?: Array<"minutely" | "alerts" | "lightning">;
      };
      output: {
        /** Current weather observations returned by Weatherbit. */
        observations: Array<{
          /** Weatherbit date or timestamp for the record. */
          datetime: string;
          [key: string]: unknown;
        }>;
        /** Number of current weather observations in the response. */
        count: number;
      };
    };
    /** Get daily weather forecasts from Weatherbit for a location. */
    "weatherbit.get_daily_forecast": {
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
        /**
         * City name accepted by Weatherbit.
         * @minLength 1
         */
        city?: string;
        /**
         * State or province name used with a city query.
         * @minLength 1
         */
        state?: string;
        /**
         * Country code used with a city or postal code query, such as US.
         * @minLength 1
         */
        country?: string;
        /**
         * Postal or ZIP code accepted by Weatherbit.
         * @minLength 1
         */
        postal_code?: string;
        /**
         * Weatherbit city identifier.
         * @minimum 1
         */
        city_id?: number;
        /**
         * Language code used by Weatherbit to localize text fields.
         * @minLength 1
         */
        language?: string;
        /** Units system for Weatherbit measurements. */
        units?: "M" | "S" | "I";
        /**
         * Number of forecast days to return, from 1 to 16.
         * @minimum 1
         * @maximum 16
         */
        days?: number;
      };
      output: {
        /** Nearest city name returned by Weatherbit. */
        city_name: string;
        /** Country code returned by Weatherbit. */
        country_code: string;
        /** Latitude returned by Weatherbit. */
        latitude: number;
        /** Longitude returned by Weatherbit. */
        longitude: number;
        /** Timezone returned by Weatherbit. */
        timezone: string;
        /** Forecast records returned by Weatherbit. */
        forecast: Array<{
          /** Weatherbit date or timestamp for the record. */
          datetime: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get hourly weather forecasts from Weatherbit for a location. */
    "weatherbit.get_hourly_forecast": {
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
        /**
         * City name accepted by Weatherbit.
         * @minLength 1
         */
        city?: string;
        /**
         * State or province name used with a city query.
         * @minLength 1
         */
        state?: string;
        /**
         * Country code used with a city or postal code query, such as US.
         * @minLength 1
         */
        country?: string;
        /**
         * Postal or ZIP code accepted by Weatherbit.
         * @minLength 1
         */
        postal_code?: string;
        /**
         * Weatherbit city identifier.
         * @minimum 1
         */
        city_id?: number;
        /**
         * Language code used by Weatherbit to localize text fields.
         * @minLength 1
         */
        language?: string;
        /** Units system for Weatherbit measurements. */
        units?: "M" | "S" | "I";
        /**
         * Number of forecast hours to return, from 1 to 240.
         * @minimum 1
         * @maximum 240
         */
        hours?: number;
      };
      output: {
        /** Nearest city name returned by Weatherbit. */
        city_name: string;
        /** Country code returned by Weatherbit. */
        country_code: string;
        /** Latitude returned by Weatherbit. */
        latitude: number;
        /** Longitude returned by Weatherbit. */
        longitude: number;
        /** Timezone returned by Weatherbit. */
        timezone: string;
        /** Forecast records returned by Weatherbit. */
        forecast: Array<{
          /** Weatherbit date or timestamp for the record. */
          datetime: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}

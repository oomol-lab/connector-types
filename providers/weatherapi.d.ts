import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get astronomy information for a WeatherAPI location query and date. */
    "weatherapi.get_astronomy": {
      input: {
        /**
         * Location query accepted by WeatherAPI, such as a city name, coordinates, or location id.
         * @minLength 1
         */
        query: string;
        /**
         * Date string in YYYY-MM-DD format for astronomy lookup.
         * @minLength 1
         */
        date: string;
      };
      output: {
        /** WeatherAPI location payload. */
        location: Record<string, unknown>;
        /** WeatherAPI astronomy payload. */
        astronomy: Record<string, unknown>;
      };
    };
    /** Get current weather conditions for a WeatherAPI location query. */
    "weatherapi.get_current_weather": {
      input: {
        /**
         * Location query accepted by WeatherAPI, such as a city name, coordinates, or location id.
         * @minLength 1
         */
        query: string;
        /**
         * Optional language code used by WeatherAPI to localize text fields.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** WeatherAPI location payload. */
        location: Record<string, unknown>;
        /** WeatherAPI current weather payload. */
        current: Record<string, unknown>;
      };
    };
    /** Get weather forecast data for a WeatherAPI location query. */
    "weatherapi.get_forecast": {
      input: {
        /**
         * Location query accepted by WeatherAPI, such as a city name, coordinates, or location id.
         * @minLength 1
         */
        query: string;
        /** Number of forecast days to request, between 1 and 14. */
        days: number;
        /**
         * Date string in YYYY-MM-DD format used by WeatherAPI date-aware endpoints.
         * @minLength 1
         */
        date?: string;
        /**
         * Optional language code used by WeatherAPI to localize text fields.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** WeatherAPI location payload. */
        location: Record<string, unknown>;
        /** WeatherAPI current weather payload. */
        current: Record<string, unknown>;
        /** Forecast day payloads returned by WeatherAPI. */
        forecastDays: Array<Record<string, unknown>>;
      };
    };
    /** Get timezone information for a WeatherAPI location query. */
    "weatherapi.get_timezone": {
      input: {
        /**
         * Location query accepted by WeatherAPI, such as a city name, coordinates, or location id.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** WeatherAPI location payload. */
        location: Record<string, unknown>;
        /** WeatherAPI timezone payload. */
        timezone: Record<string, unknown>;
      };
    };
    /** Search locations supported by WeatherAPI. */
    "weatherapi.search_locations": {
      input: {
        /**
         * Location query accepted by WeatherAPI, such as a city name, coordinates, or location id.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** Matched WeatherAPI location results. */
        results: Array<Record<string, unknown>>;
      };
    };
  }
}

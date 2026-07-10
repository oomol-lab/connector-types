import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve current weather conditions for an AccuWeather location key. */
    "accuweather.get_current_conditions": {
      input: {
        /**
         * The AccuWeather location key returned by a location search endpoint.
         * @minLength 1
         */
        locationKey: string;
        /**
         * The AccuWeather language code used to localize results.
         * @minLength 2
         */
        language?: string;
        /** Whether AccuWeather should include the optional extended details in the response. */
        details?: boolean;
      };
      output: {
        /** The current condition records returned by AccuWeather. */
        conditions: Array<{
          /** The local observation timestamp returned by AccuWeather. */
          localObservationDateTime: string;
          /** The current weather description. */
          weatherText: string;
          /** The AccuWeather weather icon code. */
          weatherIcon: number;
          /** Whether precipitation is currently present. */
          hasPrecipitation: boolean;
          /** The precipitation type, when AccuWeather returns one. */
          precipitationType: string | null;
          /** Whether the observation is during local daytime. */
          isDayTime: boolean;
          /** The raw nested object returned by AccuWeather. */
          temperature: Record<string, unknown>;
          /** The AccuWeather mobile URL for this condition. */
          mobileLink: string;
          /** The AccuWeather web URL for this condition. */
          link: string;
          /** The raw AccuWeather response payload. */
          raw: unknown;
          [key: string]: unknown;
        }>;
        /** The raw AccuWeather response payload. */
        raw: unknown;
      };
    };
    /** Retrieve a daily forecast for an AccuWeather location key using an official duration endpoint. */
    "accuweather.get_daily_forecast": {
      input: {
        /**
         * The AccuWeather location key returned by a location search endpoint.
         * @minLength 1
         */
        locationKey: string;
        /** The AccuWeather daily forecast duration endpoint to call. */
        duration: "1day" | "5day" | "7day" | "10day" | "15day";
        /**
         * The AccuWeather language code used to localize results.
         * @minLength 2
         */
        language?: string;
        /** Whether AccuWeather should include the optional extended details in the response. */
        details?: boolean;
        /** Whether forecast values should be returned in metric units. */
        metric?: boolean;
      };
      output: {
        /** The raw nested object returned by AccuWeather. */
        headline: Record<string, unknown>;
        /** The daily forecast records returned by AccuWeather. */
        dailyForecasts: Array<Record<string, unknown>>;
        /** The raw AccuWeather response payload. */
        raw: unknown;
      };
    };
    /** Retrieve an hourly forecast for an AccuWeather location key using an official duration endpoint. */
    "accuweather.get_hourly_forecast": {
      input: {
        /**
         * The AccuWeather location key returned by a location search endpoint.
         * @minLength 1
         */
        locationKey: string;
        /** The AccuWeather hourly forecast duration endpoint to call. */
        duration: "1hour" | "12hour" | "24hour" | "72hour" | "120hour";
        /**
         * The AccuWeather language code used to localize results.
         * @minLength 2
         */
        language?: string;
        /** Whether AccuWeather should include the optional extended details in the response. */
        details?: boolean;
        /** Whether forecast values should be returned in metric units. */
        metric?: boolean;
      };
      output: {
        /** The hourly forecast records returned by AccuWeather. */
        forecasts: Array<Record<string, unknown>>;
        /** The raw AccuWeather response payload. */
        raw: unknown;
      };
    };
    /** Resolve latitude and longitude coordinates to a single AccuWeather location key. */
    "accuweather.get_location_by_geoposition": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * The AccuWeather language code used to localize results.
         * @minLength 2
         */
        language?: string;
        /** Whether AccuWeather should include the optional extended details in the response. */
        details?: boolean;
        /** Whether AccuWeather should return only top-level administrative data. */
        topLevel?: boolean;
      };
      output: {
        /** A normalized AccuWeather location result. */
        location: {
          /** The AccuWeather location key. */
          key: string;
          /** The localized location name returned by AccuWeather. */
          localizedName: string;
          /** The English location name returned by AccuWeather. */
          englishName: string;
          /** The AccuWeather location type, such as City. */
          type: string;
          /** The AccuWeather ranking value for this location. */
          rank: number;
          /** The raw nested object returned by AccuWeather. */
          country: Record<string, unknown>;
          /** The raw nested object returned by AccuWeather. */
          administrativeArea: Record<string, unknown>;
          /** The raw AccuWeather response payload. */
          raw: unknown;
          [key: string]: unknown;
        };
        /** The raw AccuWeather response payload. */
        raw: unknown;
      };
    };
    /** Search AccuWeather locations by text and return normalized location keys for weather requests. */
    "accuweather.search_locations": {
      input: {
        /**
         * The city, postal code, or place text to search for.
         * @minLength 1
         */
        query: string;
        /**
         * The AccuWeather language code used to localize results.
         * @minLength 2
         */
        language?: string;
        /** Whether AccuWeather should include the optional extended details in the response. */
        details?: boolean;
        /**
         * The result offset requested from AccuWeather.
         * @minimum 0
         */
        offset?: number;
        /**
         * The AccuWeather alias mode: 0 for always, 1 for never, or 2 only when no official match exists.
         * @minimum 0
         * @maximum 2
         */
        alias?: number;
      };
      output: {
        /** The ordered AccuWeather location results. */
        locations: Array<{
          /** The AccuWeather location key. */
          key: string;
          /** The localized location name returned by AccuWeather. */
          localizedName: string;
          /** The English location name returned by AccuWeather. */
          englishName: string;
          /** The AccuWeather location type, such as City. */
          type: string;
          /** The AccuWeather ranking value for this location. */
          rank: number;
          /** The raw nested object returned by AccuWeather. */
          country: Record<string, unknown>;
          /** The raw nested object returned by AccuWeather. */
          administrativeArea: Record<string, unknown>;
          /** The raw AccuWeather response payload. */
          raw: unknown;
          [key: string]: unknown;
        }>;
        /** The raw AccuWeather response payload. */
        raw: unknown;
      };
    };
  }
}

import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch current air quality metrics for coordinates or a city-based lookup. */
    "api_ninjas.air_quality": {
      input: {
        /**
         * Latitude coordinate in decimal degrees between -90 and 90.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * Longitude coordinate in decimal degrees between -180 and 180.
         * @minimum -180
         * @maximum 180
         */
        lon?: number;
        /**
         * City name used to look up the requested location.
         * @minLength 1
         */
        city?: string;
        /**
         * State or province used to narrow the city-based lookup.
         * @minLength 1
         */
        state?: string;
        /**
         * Country name or ISO country code used to narrow the city-based lookup.
         * @minLength 1
         */
        country?: string;
      };
      output: {
        /** Overall air quality index for the location. */
        overallAqi: number;
        /** Carbon monoxide measurement. */
        co: {
          /** Air quality index for the pollutant. */
          aqi: number;
          /** Pollutant concentration in micrograms per cubic meter. */
          concentration: number;
        };
        /** Nitrogen dioxide measurement. */
        no2: {
          /** Air quality index for the pollutant. */
          aqi: number;
          /** Pollutant concentration in micrograms per cubic meter. */
          concentration: number;
        };
        /** Ozone measurement. */
        o3: {
          /** Air quality index for the pollutant. */
          aqi: number;
          /** Pollutant concentration in micrograms per cubic meter. */
          concentration: number;
        };
        /** Sulfur dioxide measurement. */
        so2: {
          /** Air quality index for the pollutant. */
          aqi: number;
          /** Pollutant concentration in micrograms per cubic meter. */
          concentration: number;
        };
        /** Fine particulate matter measurement. */
        pm25: {
          /** Air quality index for the pollutant. */
          aqi: number;
          /** Pollutant concentration in micrograms per cubic meter. */
          concentration: number;
        };
        /** Coarse particulate matter measurement. */
        pm10: {
          /** Air quality index for the pollutant. */
          aqi: number;
          /** Pollutant concentration in micrograms per cubic meter. */
          concentration: number;
        };
      };
    };
    /** Convert a city name into geographic coordinates and country information. */
    "api_ninjas.geocode": {
      input: {
        /**
         * City name to convert into geographic coordinates.
         * @minLength 1
         */
        city: string;
        /**
         * State or province used to narrow the city-based lookup.
         * @minLength 1
         */
        state?: string;
        /**
         * Country name or ISO country code used to narrow the city-based lookup.
         * @minLength 1
         */
        country?: string;
        /**
         * ZIP or postal code used to narrow the geocoding lookup.
         * @minLength 1
         */
        zipcode?: string;
      };
      output: {
        /** Resolved geocoding matches for the input. */
        results: Array<{
          /** Resolved location name returned by the geocoding lookup. */
          name: string;
          /** Latitude of the resolved location in decimal degrees. */
          latitude: number;
          /** Longitude of the resolved location in decimal degrees. */
          longitude: number;
          /** Country code of the resolved location. */
          country: string;
        }>;
      };
    };
    /** Resolve latitude and longitude coordinates into place metadata. */
    "api_ninjas.reverse_geocode": {
      input: {
        /**
         * Latitude coordinate in decimal degrees between -90 and 90.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude coordinate in decimal degrees between -180 and 180.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
      };
      output: {
        /** Resolved places matching the provided coordinates. */
        results: Array<{
          /** Resolved place name for the provided coordinates. */
          name: string;
          /** Country code of the resolved place. */
          country: string;
          /** State or administrative region of the resolved place. */
          state?: string;
        }>;
      };
    };
    /** Fetch timezone metadata by timezone name or premium location lookup fields. */
    "api_ninjas.timezone": {
      input: {
        /**
         * IANA timezone identifier used by the free-tier lookup path.
         * @minLength 1
         */
        timezone?: string;
        /**
         * Latitude coordinate in decimal degrees between -90 and 90.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * Longitude coordinate in decimal degrees between -180 and 180.
         * @minimum -180
         * @maximum 180
         */
        lon?: number;
        /**
         * City name used to look up the requested location.
         * @minLength 1
         */
        city?: string;
        /**
         * State or province used to narrow the city-based lookup.
         * @minLength 1
         */
        state?: string;
        /**
         * Country name or ISO country code used to narrow the city-based lookup.
         * @minLength 1
         */
        country?: string;
      };
      output: {
        /** Resolved IANA timezone identifier. */
        timezone: string;
        /** UTC offset in seconds for the resolved timezone. */
        utcOffset: number;
        /** Current local time in ISO 8601 format. */
        localTime: string;
        /** Resolved city name when available. */
        city?: string;
      };
    };
    /** Fetch the current weather conditions for a set of coordinates. */
    "api_ninjas.weather": {
      input: {
        /**
         * Latitude coordinate in decimal degrees between -90 and 90.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude coordinate in decimal degrees between -180 and 180.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
      };
      output: {
        /** Temperature in Celsius. */
        temp: number;
        /** Perceived temperature in Celsius. */
        feelsLike: number;
        /** Lowest temperature in Celsius. */
        minTemp: number;
        /** Highest temperature in Celsius. */
        maxTemp: number;
        /** Humidity percentage. */
        humidity: number;
        /** Wind speed in meters per second. */
        windSpeed: number;
        /** Wind direction in degrees. */
        windDegrees: number;
        /** Sunrise time as a Unix timestamp in seconds. */
        sunrise: number;
        /** Sunset time as a Unix timestamp in seconds. */
        sunset: number;
      };
    };
    /** Fetch forecast weather readings for a set of coordinates. */
    "api_ninjas.weather_forecast": {
      input: {
        /**
         * Latitude coordinate in decimal degrees between -90 and 90.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude coordinate in decimal degrees between -180 and 180.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
      };
      output: {
        /** Forecast readings returned in chronological order. */
        forecast: Array<{
          /** Temperature in Celsius. */
          temp: number;
          /** Perceived temperature in Celsius. */
          feelsLike: number;
          /** Lowest temperature in Celsius. */
          minTemp: number;
          /** Highest temperature in Celsius. */
          maxTemp: number;
          /** Humidity percentage. */
          humidity: number;
          /** Wind speed in meters per second. */
          windSpeed: number;
          /** Wind direction in degrees. */
          windDegrees: number;
          /** Sunrise time as a Unix timestamp in seconds. */
          sunrise: number;
          /** Sunset time as a Unix timestamp in seconds. */
          sunset: number;
        }>;
      };
    };
  }
}
